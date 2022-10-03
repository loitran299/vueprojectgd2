<template>
  <div class="overlay" id="browseID">
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
      @activated="print('activated')"
      @deactivated="print('deactivated')"
      @drag-start="print('drag-start')"
      @resize-start="print('resize-start')"
      @dragging="print('dragging')"
      @resizing="print('resizing')"
      @drag-end="print('drag-end')"
      @resize-end="print('resize-end')"
      class="form-content"
    >
      <div class="content-top">
        <span>Chọn người phê duyệt</span>
        <button class="icon-close" @click="isShow = false"></button>
      </div>

      <div class="content-center">
        <div class="browse-content">
          <label for="">Cấp duyệt giảm giá</label>
          <BaseCombobox></BaseCombobox>
          <label for="">Người duyệt yêu cầu</label>
          <BaseCombobox></BaseCombobox>
        </div>
      </div>

      <div class="content-bottom">
        <button class="btn-txt btn-blue">Đồng ý</button>
        <button class="btn-txt">Hủy bỏ</button>
      </div>
    </Vue3DraggableResizable>
  </div>
</template>

<script>
import BaseCombobox from "@/components/base/BaseCombobox.vue";
export default {
  name: "browseID",
  props: ["show"],
  components: {
    BaseCombobox,
  },
  computed: {
    isShow: {
      get() {
        return this.show;
      },
      set(val) {
        this.$emit("onClose", val);
      }
    }
  },
};
</script>

<style scoped>
.content-center {
  overflow: hidden;
}

.browse-content {
  display: flex;
  flex-direction: column;
  padding: 3px 8px;
}
.browse-content label {
  margin: 7px 0;
}
.el-select {
  width: 100%;
}
.btn-txt:nth-child(2) {
  color: black !important;
  font-weight: 300 !important;
  border: 1px solid #b0bec5;
}
.btn-txt:nth-child(2):focus {
  border: 1px solid #157fcc;
}
.btn-txt:nth-child(2):hover {
  background-color: #e2f1e9;
  border: 1px solid #157fcc;
}
</style>