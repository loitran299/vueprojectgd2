<template>
  <div id="dateID" :class="{ formMode: !isShowCombobox }">
    <SearchCombobox
      v-if="isShowCombobox"
      :data="ComboboxData.DateRange"
      :IdName="'Id'"
      :ValName="'Label'"
      :value="comboboxVal"
      @changeValue="changeComboboxVal"
      :disabled="disabled"
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
      :disabled="disabled"
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
      :disabled="disabled"
    />
  </div>
</template>

<script>
import DateFunc from "@/assets/js/date"
import ComboboxData from "@/stores/ComboboxData"
import EnumDateRange from "@/Enum/EnumDateRange";
import SearchCombobox from "@/components/base/BaseCombobox.vue";
export default {
  name: "dateID",
  props: ["mode", "begin", "end", "disabled"],
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
  mounted() {
    let now = new Date();
        now.setUTCHours(0,0,0,0);
        this.cptBegin = now.toISOString();
        now.setUTCHours(23,59,59,999);
        this.cptEnd = now.toISOString();
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
      if(val == EnumDateRange.Combobox.Today){
        let now = new Date();
        now.setUTCHours(0,0,0,0);
        this.cptBegin = now.toISOString();
        now.setUTCHours(23,59,59,999);
        this.cptEnd = now.toISOString();
      }else if(val == EnumDateRange.Combobox.ThisWeek){
        this.cptBegin = DateFunc.getMonday().toISOString();
        this.cptEnd = DateFunc.getDate(this.cptBegin, 7).toISOString();
      }else{
        this.cptBegin = DateFunc.getFistDayOfYear().toISOString();
        let now = new Date();
        now.setUTCHours(23,59,59,999);
        this.cptEnd = now.toISOString();

      }
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