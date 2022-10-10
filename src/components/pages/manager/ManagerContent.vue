<template>
  <div class="main">
    <!-- ----------------------------- -->
    <div class="m-row">
      <label for="">Ngày yêu cầu</label>
      <DateRequest :begin="dateBegin" :end="dateEnd" @changeBegin="changeDateBegin" @changeEnd="changeDateEnd">
      </DateRequest>
    </div>
    <div class="m-row">
      <label for="">Trạng thái</label>
      <SearchCombobox class="width-123" :data="ComboboxData.RequestStatusMg" :IdName="'Id'" :ValName="'Label'"
        :value="statusID" @changeValue="changeStatusID"></SearchCombobox>
      <span>Loại yêu cầu</span>
      <SearchCombobox class="width-123 reduce-margin" :data="ComboboxData.RequestType" :IdName="'Id'" :ValName="'Label'"
        :value="requestType" @changeValue="changeRequestType"></SearchCombobox>
      <button class="btn-txt btn-blue" @click="getRequests">Lấy dữ liệu</button>
    </div>
    <div class="m-row">
      <button class="btn-icon btn-none" @click="isShowPopup = true">
        <div class="icon-browse"></div>
        <span>Duyệt</span>
      </button>
      <button class="btn-icon btn-none">
        <div class="icon-refuse"></div>
        <span>Từ chối</span>
      </button>
      <button class="btn-icon btn-none">
        <div class="icon-watching"></div>
        <span>Xem</span>
      </button>
    </div>
    <RequestTable :header="tableheader" :data="tableData"></RequestTable>
  </div>
  <BrowsePopup v-if="isShowPopup" :show="isShowPopup" @onClose="onClosePopup"></BrowsePopup>
</template>
  
<script>
import cookie from "@/stores/cookie";
import axios from 'axios'
import ComboboxData from "@/stores/ComboboxData"
import RequestTable from "@/components/pages/common/RequestTable.vue"
import ConstTable from "@/Const/table"
import BrowsePopup from "@/components/pages/manager/BrowsePopup.vue"
import DateRequest from "@/components/base/DateRange.vue";
import SearchCombobox from "@/components/base/BaseCombobox.vue";
import "splitpanes/dist/splitpanes.css";
export default {
  name: "voucherID",
  components: {
    DateRequest,
    SearchCombobox,
    BrowsePopup,
    RequestTable
  },
  data() {
    return {
      date: new Date(),
      isShowPopup: false,
      tableheader: ConstTable.Manager,
      ComboboxData: ComboboxData,
      tableData:[],
      token: cookie.getCookie("Token"),
      user: cookie.getUser(),
      dateBegin: "",
      dateEnd: "",
      statusID: 3,
      requestType: 1,
    };
  },
  methods: {
    async getRequests() {
      let url = `https://localhost:44342/api/v1/Request/Fillter?pageSize=10&pageNumber=1&employeeFilter=${this.user.EmployeeID}&sortBy=`;
      await axios
        .get(url, { headers: { "Authorization": `Bearer ${this.token}` } })
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
    onClosePopup(value) {
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
    }
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