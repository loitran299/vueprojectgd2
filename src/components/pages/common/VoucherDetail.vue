<template>
  <div class="overlay" id="formDetail" v-if="isShowForm">
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
            <button class="icon-close" @click="isShowForm = false"></button>
        </div>

        <div class="content-center">
          <div class="content-center-box">
            <!--  -->
            <div class="box-title"><span>Thông tin mã giảm giá</span></div>
            <div class="box-row">
              <span>Sản phẩm<span>(*)</span></span>
              <BaseCombobox class="form-combobox"></BaseCombobox>
            </div>
            <div class="box-row">
              <span>Áp dụng cho<span>(*)</span></span>
              <BaseCombobox class="form-combobox"></BaseCombobox>
            </div>
            <div class="box-row">
              <span>Ngày hiệu lực</span>
              <DateRequest :mode="EnumDateRange.mode.Compact"></DateRequest>
            </div>
            <div class="box-row">
              <span>Giảm giá cho:</span>
              <input class="box-radio" name="type" type="radio">
              <label for="type">Gói sản phẩm</label>
              <input class="box-radio" name="type" type="radio">
              <label for="type">Sản phẩm</label>
              <input class="box-radio" name="type" type="radio">
              <label for="type">Toàn bộ đơn hàng</label>
            </div>
            <div class="box-row">
              <span>Áp dụng cho<span>(*)</span></span>
              <input type="radio" class="box-radio">
              <label for="" class="width-80">%</label>
              <input type="number" min="1" class="box-input icon-spinner">
            </div>
            <div class="box-row">
              <span></span>
              <input type="radio" class="box-radio">
              <label for="" class="width-80">Số tiền</label>
              <input type="number" min="1" class="box-input icon-spinner">
            </div>
            <div class="box-row">
              <span>Số tiền trước giảm giá<span>(*)</span></span>
              <input type="number" min="1" class="box-input icon-spinner">
            </div>
            <div class="box-row">
              <span>Lý do</span>
              <textarea name="" id="" cols="87" rows="5"></textarea>
            </div>
            <div class="box-row">
              <span>Danh mục</span>
              <BaseCombobox class="form-combobox"></BaseCombobox>
            </div>
            <div class="box-row">
              <span>Cấp xin duyệt giảm giá:</span>
              <input type="radio" class="box-radio">
              <label for="">Ban GĐ TTKD (HAN, HCM)/ TP KD (DNG, BMT, CTH)/ TP GHCN khối DN</label>
            </div>
            <div class="box-row">
              <span></span>
              <input type="radio" class="box-radio">
              <label for="">Ban GĐ Văn phòng</label>
            </div>
            <div class="box-row">
              <span></span>
              <input type="radio" class="box-radio">
              <label for="">Ban Tổng giám đốc</label>
            </div>
            <div class="box-row">
              <span>Người duyệt yêu cầu<span>(*)</span></span>
              <BaseCombobox class="form-combobox"></BaseCombobox>
            </div>
            <div class="box-row">
              <span>Mã cộng tác viên</span>
              <input type="number" min="1" class="box-input flex1">
            </div>
            <div class="box-row">
              <span>Cấp cho:</span>
              <input type="radio" class="box-radio" form="who">
              <label for="">Một khách hàng</label>
              <input type="radio" class="box-radio" name="who">
              <label for="">Danh sách khách hàng</label>
            </div>

            <!--  -->
          </div>
          <div class="content-center-box">
            <div class="box-title"><span>Thông tin khách hàng</span></div>
            <div class="box-row">
              <span>MST/CMT <span>(*)</span></span>
              <input type="text" class="box-input">
            </div>
            <div class="box-row">
              <span>Tên khách hàng</span>
              <input type="text" class="box-input flex1">
            </div>
            <div class="box-row">
              <span>Địa chỉ <span>(*)</span></span>
              <input type="text" class="box-input flex1">
            </div>
            <div class="box-row">
              <span>Mã ngân sách</span>
              <input type="text" class="box-input">
              <span class="span-right">Ngày thành lập</span>
              <input type="date" class="box-input">
            </div>

            <div class="box-row">
              <span>Người liên hệ <span>(*)</span></span>
              <input type="text" class="box-input flex1">
            </div>
            <div class="box-row">
              <span>Số điện thoại <span>(*)</span></span>
              <input type="text" class="box-input">
              <span class="span-right">Email <span>(*)</span></span>
              <input type="text" class="box-input">
            </div>
          </div>

        </div>

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
  import EnumDateRange from "@/Enum/EnumDateRange";
import DateRequest from "@/components/base/DateRange.vue"
import BaseCombobox from "@/components/base/BaseCombobox.vue"
export default {
  name: "formDetail",
  props: ["isShow"],
  components: {
    BaseCombobox,
    DateRequest
  },
  data() {
    return {
      EnumDateRange: EnumDateRange
    }
  },
  computed: {
    isShowForm: {
      get() {
        return this.isShow;
      },
      set(value) {
        this.$emit("changeShow", value)
      }
    }
  },
}
</script>

<style>
@import url('@/assets/css/common/formdetail.css');
</style>