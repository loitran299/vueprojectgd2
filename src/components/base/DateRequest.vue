<template>
  <div id="dateID">
    <SearchCombobox></SearchCombobox>
    <span>Từ</span>
    <el-date-picker
      :clearable="false"
      size="small"
      class="el-date-picker"
      v-model="date"
      type="date"
      popper-class="el-date-picker-popper"
      :max="todayDate"
      placeholder="DD/MM/YYYY"
      format="DD/MM/YYYY"
      value-format="YYYY-MM-DD"
    />
    <span>Đến</span>
    <el-date-picker
      :clearable="false"
      size="small"
      class="el-date-picker"
      v-model="date"
      type="date"
      popper-class="el-date-picker-popper"
      :max="todayDate"
      placeholder="DD/MM/YYYY"
      format="DD/MM/YYYY"
      value-format="YYYY-MM-DD"
    />
  </div>
</template>

<script>
import SearchCombobox from "@/components/base/BaseCombobox.vue";
export default {
  name: "dateID",
  components: {
    SearchCombobox,
  },
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>

<style scoped>
@import url("@/assets/css/base/datepicker.css");
#dateID {
  color: black;
  padding: 0 5px 0 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
#dateID span{
    margin: 0 10px;
}
</style>