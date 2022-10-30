<template>
    <div class="overlay" id="refuseID">
    <Vue3DraggableResizable
      :initW="350"
      :initH="210"
      :x="x"
      :y="y"
      :w="w"
      :h="h"
      :active="active"
      :draggable="true"
      :resizable="false"
      :parent="false"
      class="form-content"
    >
      <div class="content-top">
        <span>Lý do từ chối</span>
        <button class="icon-close" @click="cancel"></button>
      </div>

      <div class="content-center">
        <div class="refuse-content">
          <label for="">Lý do(<span>*</span>)</label>
          <textarea name="" id="" cols="36" rows="10" v-model="value"></textarea>
        </div>
      </div>

      <div class="content-bottom">
        <button class="btn-txt btn-blue" @click="admit">Đồng ý</button>
        <button class="btn-txt" @click="cancel">Hủy bỏ</button>
      </div>
    </Vue3DraggableResizable>
  </div>
</template>

<script>
export default {
    name: "refuseID",
    data() {
      return {
        value: ""
      }
    },
    methods: {
      admit() {
        this.$emit("admit", this.value);
      },
      cancel() {
        this.$emit("cancel");
      }
    },
}
</script>

<style scoped>
.form-content {
  height: 266px!important;
  width: 350px!important;
}
.content-center {
  overflow: hidden;
  padding: 5px!important;
}
.refuse-content {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.refuse-content textarea{
  margin-top: 5px;
  border: 1px solid #b0bec5;
  outline: none;
}
.refuse-content textarea:focus{
  border: 1px solid #157fcc;
}
</style>