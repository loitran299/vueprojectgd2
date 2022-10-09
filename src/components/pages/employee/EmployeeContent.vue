<template>
  <div class="main">
    <!-- ----------------------------- -->
    <div class="m-row">
      <label for="">Ngày yêu cầu</label>
      <DateRequest></DateRequest>
      <button class="btn-icon m-right" @click="isShowPopup = true">
        <div class="icon-add"></div>
        <span>Lập yêu cầu cấp MGG</span>
      </button>
    </div>
    <div class="m-row">
      <label for="">Trạng thái</label>
      <SearchCombobox class="width-123" :data="ComboboxData.RequestStatus" :IdName="'Id'" :ValName="'Label'"
        :value="statusID" @changeValue="changeStatusID"></SearchCombobox>
      <button class="btn-txt btn-blue" @click="getRequests">Lấy dữ liệu</button>
    </div>
    <div class="m-row">
      <button class="btn-icon btn-none">
        <div class="icon-watching"></div>
        <span>Xem</span>
      </button>
      <button class="btn-icon btn-none">
        <div class="icon-edit"></div>
        <span>Sửa</span>
      </button>
      <button class="btn-icon btn-none">
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
    <RequestTable :data="tableData" :header="tableHeader"></RequestTable>
  </div>
  <FormDetail v-if="isShowPopup" :isShow="isShowPopup" @changeShow="changeShowPopup" :data="currentRequest" @changeData="changeCurrentRequest">
  </FormDetail>
</template>

<script>
  import cookie from "@/stores/cookie";
  import axios from "axios"
import ConstTable from "@/Const/table"
import InitData from "@/stores/VoucherDetail"
import RequestTable from "@/components/pages/common/RequestTable.vue"
import ComboboxData from "@/stores/ComboboxData"
import FormDetail from "@/components/pages/common/VoucherDetail.vue";
import DateRequest from "@/components/base/DateRange.vue";
import SearchCombobox from "@/components/base/BaseCombobox.vue";
export default {
  name: "voucherID",
  components: {
    DateRequest,
    SearchCombobox,
    FormDetail,
    RequestTable
  },
  data() {
    return {
      date: new Date(),
      isShowPopup: false,
      ComboboxData: ComboboxData,
      statusID: 1,
      currentRequest: InitData.NewRequest,
      tableHeader: ConstTable.Employee,
      token: cookie.getCookie("Token"),
      user: cookie.getUser(),
      tableData: []
    };
  },
  methods: {
    async getRequests(){
      let url = `https://localhost:44342/api/v1/Request/Fillter?pageSize=10&pageNumber=1&employeeFilter=${this.user.EmployeeID}&sortBy=`;
      await axios
        .get(url, { headers: {"Authorization" : `Bearer ${this.token}`} })
        .then((response) => {
          if (response) {
            this.tableData = response.data.Data;
            console.log(this.tableData);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeShowPopup(value) {
      this.isShowPopup = value;
    },
    changeStatusID(value) {
      this.statusID = value;
    },
    changeCurrentRequest(value) {
      this.currentRequest = value;
    }
  },
};
</script>

<style>
@import url("@/assets/css/pages/Voucher/main.css");
</style>