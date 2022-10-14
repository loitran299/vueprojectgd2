<template>
  <div class="pagination" id="paginationID">
    <div class="paging-left">
      <div class="cb-change-page">
        <button><div class="icon-page-first"></div></button>
        <button><div class="icon-page-prev"></div></button>
      </div>
      <div class="cb-change-page">
        Trang
        <input class="page-input" :value="cptData.currentPage" type="number">
        Trên
        <span>{{cptData.totalPages}}</span>
      </div>
      <div class="cb-change-page">
        <button><div class="icon-page-next"></div></button>
        <button><div class="icon-page-last"></div></button>
      </div>
      <button><div class="icon-page-refresh"></div></button>
    </div>
    <div class="paging-right">
      <div class="select-popup">
        <input class="icon-down" type="number" readonly @click="showPopup = !showPopup" v-click-outside="outsidePopup">
        <div class="popup" v-if="showPopup">
          <span>30</span>
          <span>50</span>
          <span>100</span>
        </div>
      </div>
      <div>Tổng số: <span>{{cptData.totalRecords}}</span> bản ghi</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "paginationID",
  props: [
    "data"
  ],
  computed: {
    cptData: {
      get() {
        return this.data;
      },
      set (val) {
        this.$emit("changeData", val);
      }
    }
  },
  data() {
    return {
      showPopup: false,
    }
  },
  methods: {
    outsidePopup() {
      this.showPopup = false;
    }
  },
}
</script>

<style scoped>
@import url('@/assets/css/base/pagination.css');
.select-popup {
  position: relative;
}
.select-popup .popup{
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 36px;
  background-color: #FFFFFF;
  padding: 1px;
  width: 80px;
  border:1px solid #cfcfcf;
}
.select-popup .popup span{
  padding: 4px 5px;
  width: 100%;
  cursor: pointer;
}
.select-popup .popup span:hover{
  background-color: #D6E9F6;
}
.select-popup .popup span.active{
  background-color: #C2DDF2;
}


</style>