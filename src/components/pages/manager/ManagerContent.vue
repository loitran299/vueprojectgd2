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
    </div>
    <div class="m-row">
      <label for="">Trạng thái</label>
      <SearchCombobox
        class="width-123"
        :data="ComboboxData.RequestStatusMg"
        :IdName="'Id'"
        :ValName="'Label'"
        :value="statusID"
        @changeValue="changeStatusID"
      ></SearchCombobox>
      <span>Loại yêu cầu</span>
      <SearchCombobox
        class="width-123 reduce-margin"
        :data="ComboboxData.RequestType"
        :IdName="'Id'"
        :ValName="'Label'"
        :value="requestType"
        @changeValue="changeRequestType"
      ></SearchCombobox>
      <button class="btn-txt btn-blue" @click="getRequests">Lấy dữ liệu</button>
    </div>
    <div class="m-row">
      <button class="btn-icon btn-none" @click="onBrowse">
        <div class="icon-browse"></div>
        <span>Duyệt</span>
      </button>
      <button class="btn-icon btn-none">
        <div class="icon-refuse"></div>
        <span>Từ chối</span>
      </button>
      <button class="btn-icon btn-none" @click="watchRequest">
        <div class="icon-watching"></div>
        <span>Xem</span>
      </button>
    </div>
    <RequestTable
      :header="tableheader"
      :data="tableData"
      :selected="requestSelected"
      @changeSelected="changeRequestSelected"
      :requests="requestsSelected"
      @changeRequestsSelected="changeRequestsSelected"
      :pagination="pagination"
      @changePagination="changePagination"
      :onlyNotApproval="onlyNotApproval"
      @changeOnlyNotApproval="changeOnlyNotApproval"
    ></RequestTable>
  </div>
  <BrowsePopup
    v-if="showPopupBrowse"
    :show="showPopupBrowse"
    @onClose="onClosePopup"
    :level="EmployeeLevel[user.Level]"
    :request="requestSelected"
    @admit="approvalRequest"
  ></BrowsePopup>

  <FormDetail
    v-if="isShowPopup"
    :isShow="isShowPopup"
    @changeShow="changeShowPopup"
    :data="currentRequest"
    :mode="formMode"
  >
  </FormDetail>
  <MessageBox v-if="isShowMessageBox" :message="warningMessage" :isShow="isShowMessageBox" @changeShowMessage="changeShowMessage" ></MessageBox>
</template>
  
<script>
import warningMessage from "@/Const/WarningMessage"
import MessageBox from "@/components/base/MessageBox.vue"
import EmployeeLevel from "@/Enum/EmployeeLevel";
import FormDetail from "@/components/pages/common/VoucherDetail.vue";
import EnumForm from "@/Enum/VoucherDetail";
import InitData from "@/stores/VoucherDetail";
import cookie from "@/stores/Cookie";
import axios from "axios";
import ComboboxData from "@/stores/ComboboxData";
import RequestTable from "@/components/pages/common/RequestTable.vue";
import ConstTable from "@/Const/Table";
import BrowsePopup from "@/components/pages/manager/BrowsePopup.vue";
import DateRequest from "@/components/base/DateRange.vue";
import SearchCombobox from "@/components/base/BaseCombobox.vue";
import "splitpanes/dist/splitpanes.css";
export default {
  name: "voucherID",
  components: {
    DateRequest,
    SearchCombobox,
    BrowsePopup,
    RequestTable,
    FormDetail,
    MessageBox
  },
  data() {
    return {
      formMode: EnumForm.FormMode.Watch,
      date: new Date(),
      isShowPopup: false,
      showPopupBrowse: false,
      tableheader: ConstTable.Manager,
      ComboboxData: ComboboxData,
      EmployeeLevel: EmployeeLevel,
      tableData: [],
      token: cookie.getCookie("Token"),
      user: cookie.getUser(),
      dateBegin: "",
      dateEnd: "",
      statusID: 3,
      requestType: 1,
      currentRequest: { ...InitData.NewRequest },
      requestSelected: {},
      requestsSelected: new Set(),
      pagination: {
        totalRecords: 0,
        totalPages: 1,
        currentPage: 1,
        recordPerPage: 10,
      },
      isShowMessageBox: false,
      warningMessage: '',
      onlyNotApproval: true,
    };
  },
  created() {
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
        RequestType: this.requestType,
        IsManager: true,
        CurrentLevel: EmployeeLevel[this.user.Level],
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
    approvalRequest(){

    },
    onBrowse() {
      if(this.requestsSelected.size == 0){
        this.isShowMessageBox = true;
        this.warningMessage = warningMessage.RequireChoose;
        return;
      }
      if(!this.onlyNotApproval) {
        this.isShowMessageBox = true;
        this.warningMessage = warningMessage.OnlyNotApproval;
        return;
      }
      this.showPopupBrowse = true;
    },
    /**
     * @Description Xem yêu cầu đã chọn
     * @Author TVLOI
     * 11/10/2022
     */
    watchRequest() {
      this.formMode = EnumForm.FormMode.Watch;
      this.currentRequest = this.requestSelected;
      this.isShowPopup = true;
    },
    changeOnlyNotApproval(val) {
      this.onlyNotApproval = val;
    },
    changeShowMessage(val){
      this.isShowMessageBox = val;
    },
    onClosePopup(value) {
      this.showPopupBrowse = value;
    },
    changeCurrentRequest(value) {
      this.currentRequest = value;
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
    changeDateBegin(val) {
      this.dateBegin = val;
    },
    changeDateEnd(val) {
      this.dateEnd = val;
    },
    changeStatusID(value) {
      this.statusID = value;
    },
    changeRequestType(value) {
      this.requestType = value;
    },
  },
};
</script>
  
<style scoped>
@import url("@/assets/css/pages/Voucher/main.css");

.main .m-row:nth-child(2) span {
  padding: 0 4px 0 8px;
}

.icon-browse {
  background-size: 24px;
}
</style>