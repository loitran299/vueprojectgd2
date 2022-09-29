<template>
  <div class="overlay">
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
            <span>Lập yêu cầu cấp mã giảm giá</span>
            <button class="icon-close"></button>
        </div>
        <div class="content-center"></div>
        <div class="content-bottom">
            <button class="btn-icon btn-none">
                <div class="icon-save16"></div>
                <span>Cất</span>
            </button>
            <button class="btn-icon btn-none">
                <div class="icon-cancel16"></div>
                <span>Hủy</span>
            </button>
        </div>
      </Vue3DraggableResizable>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('@/assets/css/common/formdetail.css');
</style>