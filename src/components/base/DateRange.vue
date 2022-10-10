<template>
  <div id="dateID" :class="{ formMode: !isShowCombobox }">
    <SearchCombobox
      v-if="isShowCombobox"
      :data="ComboboxData.DateRange"
      :IdName="'Id'"
      :ValName="'Label'"
      :value="comboboxVal"
      @changeValue="changeComboboxVal"
    ></SearchCombobox>
    <span>Từ</span>
    <el-date-picker
      :clearable="false"
      size="small"
      class="el-date-picker"
      v-model="cptBegin"
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
      v-model="cptEnd"
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
import ComboboxData from "@/stores/ComboboxData"
import EnumDateRange from "@/Enum/EnumDateRange";
import SearchCombobox from "@/components/base/BaseCombobox.vue";
export default {
  name: "dateID",
  props: ["mode", "begin", "end"],
  components: {
    SearchCombobox,
  },
  data() {
    return {
      date: new Date(),
      ComboboxData: ComboboxData,
      comboboxVal: 1
    };
  },
  computed: {
    isShowCombobox() {
      if (this.mode == EnumDateRange.mode.Compact) {
        return false;
      } else {
        return true;
      }
    },
    cptBegin: {
      get() {
        return this.begin;
      },
      set(value) {
        this.$emit("changeBegin", value);
      }
    },
    cptEnd: {
      get() {
        return this.end;
      },
      set(value) {
        this.$emit("changeEnd", value);
      }
    },
  },
  methods: {
    changeComboboxVal(val) {
      this.comboboxVal = val
    }
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
#dateID span {
  margin: 0 10px;
}

.formMode {
  margin-top: 2px;
}

.formMode span {
  margin-bottom: 10px !important;
  padding-right: 5px !important;
}
.formMode span:nth-child(1) {
  margin-left: 0 !important;
}
</style>