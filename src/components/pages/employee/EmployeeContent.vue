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
      <button class="btn-icon btn-none">
        <div class="icon-undo"></div>
        <span>Thu hồi yêu cầu</span>
      </button>
      <button class="btn-icon btn-none">
        <div class="icon-cancel"></div>
        <span>Xóa yêu cầu</span>
      </button>
      <button class="btn-icon btn-none">
        <div class="icon-go"></div>
        <span>Gửi mã cho khách hàng</span>
      </button>
    </div>
    <RequestTable
      :data="tableData"
      :header="tableHeader"
      :selected="requestSelected"
      @changeSelected="changeRequestSelected"
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
  >
  </FormDetail>
</template>

<script>
import EnumForm from "@/Enum/VoucherDetail";
import cookie from "@/stores/cookie";
import axios from "axios";
import EnumTable from "@/Enum/RequestTable";
import ConstTable from "@/Const/table";
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
      let url = `https://localhost:44342/api/v1/Request/Fillter?pageSize=10&pageNumber=1&sortBy=`;
      await axios
        .post(url, bodyParam, {
          headers: { Authorization: `Bearer ${this.token}` },
        })
        .then((response) => {
          this.tableData = response.data.Data;
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
      let url = `https://localhost:44342/api/v1/Request/SendRequest`;
      await axios
        .put(url, this.requestSelected, {
          headers: { Authorization: `Bearer ${this.token}` },
        })
        .then((response) => {
          if (response) {
            if (response) {
              alert("Gửi thành công");
              this.getRequests();
            }
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
      this.isShowPopup = true;
    },
    onShowFormAdd() {
      this.formMode = EnumForm.FormMode.Save;
      this.currentRequest = { ...InitData.NewRequest };
      this.isShowPopup = true;
    },
    changeRequestSelected(val) {
      this.requestSelected = val;
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
  },
};
</script>

<style>
@import url("@/assets/css/pages/Voucher/main.css");
</style>