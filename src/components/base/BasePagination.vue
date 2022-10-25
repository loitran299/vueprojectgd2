<template>
  <div class="pagination" id="paginationID">
    <div class="paging-left">
      <div class="cb-change-page">
        <button><div class="icon-page-first" @click="cptData.currentPage = 1"></div></button>
        <button><div class="icon-page-prev" @click="onClickPrevPages"></div></button>
      </div>
      <div class="cb-change-page">
        Trang
        <input class="page-input" :value="cptData.currentPage" type="number">
        Trên
        <span>{{cptData.totalPages}}</span>
      </div>
      <div class="cb-change-page">
        <button><div class="icon-page-next" @click="onClickNextPages"></div></button>
        <button><div class="icon-page-last" @click="cptData.currentPage = cptData.totalPages"></div></button>
      </div>
      <button><div class="icon-page-refresh"></div></button>
    </div>
    <div class="paging-right">
      <div class="select-popup">
        <input class="icon-down" type="number" readonly @click="showPopup = !showPopup" v-click-outside="outsidePopup" :value="cptData.recordPerPage">
        <div class="popup" v-if="showPopup">
          <span @click="cptData.recordPerPage = 1" :class="{'active' : cptData.recordPerPage == 1}">10</span>
          <span @click="cptData.recordPerPage = 3" :class="{'active' : cptData.recordPerPage == 3}">30</span>
          <span @click="cptData.recordPerPage = 5" :class="{'active' : cptData.recordPerPage == 5}">50</span>
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
  data() {
    return {
      showPopup: false,
    }
  },
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
  watch: {
    cptData: {
      handler(newVal, oldVal){
        console.log(newVal)
        console.log(oldVal)
        if(newVal.recordPerPage != oldVal.recordPerPage){
          this.cptData.currentPage = 1;
        }
      },
      deep: true
    }
  },
  methods: {
    outsidePopup() {
      this.showPopup = false;
    },
    onClickPrevPages() {
      if(this.cptData.currentPage > 1){
        this.cptData.currentPage -=1;
      }
    },
    onClickNextPages() {
      if(this.cptData.currentPage < this.cptData.totalPages){
        this.cptData.currentPage +=1;
      }
    },
  },
}
</script>

<style scoped>
@import url('@/assets/css/base/pagination.css');
.select-popup {
  position: relative;
}
.select-popup input{
  padding-left: 5px;
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