<template>
    <div class="main">
      <!-- ----------------------------- -->
      <div class="m-row">
        <label for="">Ngày yêu cầu</label>
        <DateRequest></DateRequest>
      </div>
      <div class="m-row">
        <label for="">Trạng thái</label>
        <SearchCombobox class="width-123"></SearchCombobox>
        <span>Loại yêu cầu</span>
        <SearchCombobox class="width-123"></SearchCombobox>
        <button class="btn-txt btn-blue">Lấy dữ liệu</button>
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
      <RequestTable :header="tableheader"></RequestTable>
    </div>
    <BrowsePopup v-if="isShowPopup" :show="isShowPopup" @onClose="onClosePopup"></BrowsePopup>
  </template>
  
  <script>
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
        tableheader: ConstTable.Manager
      };
    },
    methods: {
      changeShowPopup(value) {
        this.isShowPopup = value;
      },
      onClosePopup(value) {
        this.isShowPopup = value;
      }
    },
  };
  </script>
  
  <style scoped>
  @import url("@/assets/css/pages/Voucher/main.css");
  .main .m-row:nth-child(2) span{
    padding: 0 4px 0 8px;
  }

  .icon-browse {
    background-size: 24px;
  }
  </style>