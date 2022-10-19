<template>
  <div class="main">
    <!-- ----------------------------- -->
    <div class="m-row">
      <label for="">Ngày yêu cầu</label>
      <DateRequest
        :begin="dateBegin"
        :end="dateEnd"
        @changeBegin="changeDateBegin"
        @changeEnd="changeDateEnd"
      >
      </DateRequest>
      <button class="btn-icon m-right" @click="onShowFormAdd">
        <div class="icon-add"></div>
        <span>Lập yêu cầu cấp MGG</span>
      </button>
    </div>
    <div class="m-row">
      <label for="">Trạng thái</label>
      <SearchCombobox
        class="width-123"
        :data="ComboboxData.RequestStatus"
        :IdName="'Id'"
        :ValName="'Label'"
        :value="statusID"
        @changeValue="changeStatusID"
      ></SearchCombobox>
      <button class="btn-txt btn-blue" @click="getRequests">Lấy dữ liệu</button>
    </div>
    <div class="m-row">
      <button class="btn-icon btn-none" @click="watchRequest">
        <div class="icon-watching"></div>
        <span>Xem</span>
      </button>
      <button class="btn-icon btn-none" @click="editRequest">
        <div class="icon-edit"></div>
        <span>Sửa</span>
      </button>
      <button class="btn-icon btn-none" @click="sendRequest">
        <div class="icon-request"></div>
        <span>Gửi yêu cầu</span>
      </button>
      <button class="btn-icon btn-none" @click="revokeRequests">
        <div class="icon-undo"></div>
        <span>Thu hồi yêu cầu</span>
      </button>
      <button class="btn-icon btn-none" @click="deleteRequests">
        <div class="icon-cancel"></div>
        <span>Xóa yêu cầu</span>
      </button>
      <button class="btn-icon btn-none" @click="sendVoucherCode">
        <div class="icon-go"></div>
        <span>Gửi mã cho khách hàng</span>
      </button>
    </div>
    <RequestTable
      :data="tableData"
      :header="tableHeader"
      :requests="requestsSelected"
      :selected="requestSelected"
      :pagination="pagination"
      :onlyDraft="onlyDraft"
      @changeSelected="changeRequestSelected"
      @changeRequestsSelected="changeRequestsSelected"
      @changePagination="changePagination"
      @changeOnlyDraft="changeOnlyDraft"
    ></RequestTable>
  </div>
  <FormDetail
    v-if="isShowPopup"
    :isShow="isShowPopup"
    @changeShow="changeShowPopup"
    :data="currentRequest"
    @changeData="changeCurrentRequest"
    :parent="tableEnum.TableType.Employee"
    :mode="formMode"
    @saveSuccess="saveSuccess"
  >
  </FormDetail>
  <MessageBox v-if="isShowMessageBox" :message="warningMessage" :isShow="isShowMessageBox" @changeShowMessage="changeShowMessage" ></MessageBox>
</template>

<script>
import warningMessage from "@/Const/WarningMessage"
import MessageBox from "@/components/base/MessageBox.vue"
import RequestStatus from "@/Enum/RequestStatus";
import EnumForm from "@/Enum/VoucherDetail";
import cookie from "@/stores/Cookie";
import axios from "axios";
import EnumTable from "@/Enum/RequestTable";
import ConstTable from "@/Const/Table";
import InitData from "@/stores/VoucherDetail";
import RequestTable from "@/components/pages/common/RequestTable.vue";
import ComboboxData from "@/stores/ComboboxData";
import FormDetail from "@/components/pages/common/VoucherDetail.vue";
import DateRequest from "@/components/base/DateRange.vue";
import SearchCombobox from "@/components/base/BaseCombobox.vue";
export default {
  name: "voucherID",
  components: {
    DateRequest,
    SearchCombobox,
    FormDetail,
    RequestTable,
    MessageBox,
  },
  data() {
    return {
      formMode: EnumForm.FormMode.Save,
      token: cookie.getCookie("Token"),
      user: cookie.getUser(),
      tableHeader: ConstTable.Employee,
      tableEnum: EnumTable,
      ComboboxData: ComboboxData,
      tableData: [],
      date: new Date(),
      isShowPopup: false,
      statusID: 1,
      currentRequest: { ...InitData.NewRequest },
      dateBegin: "",
      dateEnd: "",
      requestSelected: {},
      requestsSelected: new Set(),
      pagination: {
        totalRecords: 0,
        totalPages: 1,
        currentPage: 1,
        recordPerPage: 10
      },
      onlyDraft: true,
      isShowMessageBox: false,
      warningMessage: ''
    };
  },
  methods: {
    /**
     * @Description Lấy request theo bộ lọc
     * @Author TVLOI
     * 07/10/2022
     */
    async getRequests() {
      let bodyParam = {
        EmployeeID: this.user.EmployeeID,
        StartDate: this.dateBegin,
        EndDate: this.dateEnd,
        Status: this.statusID,
        RequestType: null,
        IsManager: false,
        CurrentLevel: 5,
      };
      let url = `https://localhost:44342/api/v1/Request/Fillter?pageSize=${this.pagination.recordPerPage}&pageNumber=${this.pagination.currentPage}&sortBy=`;
      await axios
        .post(url, bodyParam, {
          headers: { Authorization: `Bearer ${this.token}` },
        })
        .then((response) => {
          this.tableData = response.data.Data;
          this.pagination.currentPage = response.data.CurrentPage;
          this.pagination.totalPages = response.data.TotalPages;
          this.pagination.totalRecords = response.data.TotalRecords;
          if (response) {
            console.log(this.tableData);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /**
     * @Description Gửi request
     * @Author TVLOI
     * 07/10/2022
     */
    async sendRequest() {
      if(this.requestsSelected.size == 0){
        this.isShowMessageBox = true;
        this.warningMessage = warningMessage.RequireChoose;
        return;
      }
      if(!this.onlyDraft){
        this.isShowMessageBox = true;
        this.warningMessage = warningMessage.SendOnlyDraft;
        return;
      }
      let url = `https://localhost:44342/api/v1/Request/SendRequest`;
      await axios
        .put(url, Array.from(this.requestsSelected), {
          headers: { Authorization: `Bearer ${this.token}` },
        })
        .then((response) => {
          this.getRequests();
          if (response) {
            this.requestsSelected = new Set();
            alert("Gửi thành công");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /**
     * @Description Xem yêu cầu đã chọn
     * @Author TVLOI
     * 11/10/2022
     */
    watchRequest() {
      if(!this.currentRequest.RequestID){
        this.isShowMessageBox = true;
        this.warningMessage = warningMessage.RequireChooseOne;
        return;
      }
      this.formMode = EnumForm.FormMode.Watch;
      this.currentRequest = this.requestSelected;
      this.isShowPopup = true;
    },
    /**
     * @Description Xem yêu cầu đã chọn
     * @Author TVLOI
     * 11/10/2022
     */
    editRequest() {
      this.formMode = EnumForm.FormMode.Edit;
      this.currentRequest = this.requestSelected;
      if(!this.currentRequest.RequestID){
        this.isShowMessageBox = true;
        this.warningMessage = warningMessage.RequireChooseOne;
        return;
      }
      if (this.currentRequest.Status != RequestStatus.Draft) {
        this.isShowMessageBox = true;
        this.warningMessage = warningMessage.Edit;
      } else {
        this.isShowPopup = true;
      }
    },
    /**
     * @Description Lưu thành công
     * @Author TVLOI
     * 11/10/2022
     */
    async deleteRequests() {
      if(this.requestsSelected.size == 0){
        this.isShowMessageBox = true;
        this.warningMessage = warningMessage.RequireChoose;
        return;
      }
      if(!this.onlyDraft){
        this.isShowMessageBox = true;
        this.warningMessage = warningMessage.Delete;
        return;
      }
      let url = `https://localhost:44342/api/v1/Request/Multiple`;
      await axios
        .put(url, Array.from(this.requestsSelected), {
          headers: { Authorization: `Bearer ${this.token}` },
        })
        .then((response) => {
          this.getRequests();
          if (response) {
            this.requestsSelected = new Set();
            alert("Xóa thành công");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /**
     * @Description Thu hồi yêu cầu
     * @Author TVLOI
     * 11/10/2022
     */
    async revokeRequests() {
      if(this.requestsSelected.size == 0){
        this.isShowMessageBox = true;
        this.warningMessage = warningMessage.RequireChoose;
        return;
      }
      let url = `https://localhost:44342/api/v1/Request/Revoke`;
      await axios
        .put(url, Array.from(this.requestsSelected), {
          headers: { Authorization: `Bearer ${this.token}` },
        })
        .then((response) => {
          this.getRequests();
          if (response) {
            this.requestsSelected = new Set();
            alert("Thu hồi thành công");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    sendVoucherCode(){
      alert(this.onlyDraft);
    },
    /**
     * @Description Lưu thành công
     * @Author TVLOI
     * 11/10/2022
     */
    saveSuccess() {
      this.getRequests();
    },
    changeOnlyDraft(val) {
      this.onlyDraft = val;
    },
    onShowFormAdd() {
      this.formMode = EnumForm.FormMode.Save;
      this.currentRequest = { ...InitData.NewRequest };
      this.isShowPopup = true;
    },
    changePagination(val) {
      this.pagination = val;
    },
    changeRequestSelected(val) {
      this.requestSelected = val;
    },
    changeRequestsSelected(val) {
      this.requestsSelected = val;
      console.log(this.requestsSelected);
    },
    changeShowPopup(value) {
      this.isShowPopup = value;
    },
    changeStatusID(value) {
      this.statusID = value;
    },
    changeCurrentRequest(value) {
      this.currentRequest = value;
    },
    changeDateBegin(val) {
      this.dateBegin = val;
    },
    changeDateEnd(val) {
      this.dateEnd = val;
    },
    changeShowMessage(val) {
      this.isShowMessageBox = val;
    }
  },
};
</script>

<style>
@import url("@/assets/css/pages/Voucher/main.css");
</style>