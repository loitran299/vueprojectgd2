<template>
  <div id="messageID" class="overlay">
    <Vue3DraggableResizable
      :initW="833"
      :initH="596"
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
        <span>MISA Promotion Process</span>
        <button class="icon-close" @click="isShowPopup = false"></button>
      </div>
      <div class="content-center">
        <div class="icon-warning"></div>
        <span>{{message}}</span>
      </div>

      <div class="content-bottom">
        <!-- <button
          class="btn-icon btn-none"
          @click="addRequest"
        >
          <div class="icon-save16"></div>
          <span>Cất</span>
        </button> -->
        <button class="btn-icon btn-none" @click="isShowPopup = false">
          <div class="icon-cancel16"></div>
          <span>Đóng</span>
        </button>
      </div>
    </Vue3DraggableResizable>
  </div>
</template>

<script>
export default {
  name: "messageID",
  props: ["message", "isShow"],
  data() {
    return {
        
    }
  },
  computed: {
    isShowPopup: {
        get() {
            return this.isShow;
        },
        set(val) {
            this.$emit("changeShowMessage", val);
        }
    }
  },
};
</script>

<style scoped>
@import url("@/assets/css/base/messagebox.css");
</style>