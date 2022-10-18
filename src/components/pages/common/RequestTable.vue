<template>
  <Splitpanes class="default-theme" horizontal id="tableID">
    <Pane class="pane-grid" size="70" max-size="100" min-size="19">
      <div class="grid">
        <table>
          <thead>
            <tr>
              <th rowspan="2">
                <div class="checkbox icon-uncheck"></div>
              </th>
              <th v-for="item in header" :key="item.HeadName">
                {{ item.HeadName }}
              </th>
            </tr>
            <tr>
              <th
                v-for="item in header"
                :key="item.HeadName"
                :class="`width-${item.Width}`"
              >
                <button
                  class="filter-button"
                  v-if="item.ButtonType == buttonType.Equal"
                >
                  =
                </button>
                <button
                  class="filter-button"
                  v-if="item.ButtonType == buttonType.Multi"
                >
                  *
                </button>
                <div class="filter-input">
                  <SearchCombobox
                    class="border-none"
                    v-if="item.InputType == inputType.Combobox"
                  >
                  </SearchCombobox>
                  <input
                    type="text"
                    class="f-input"
                    v-if="item.InputType == inputType.InputText"
                  />
                  <el-date-picker
                    :clearable="false"
                    size="small"
                    class="el-date-picker date-picker-none"
                    v-model="date"
                    type="date"
                    popper-class="el-date-picker-popper"
                    placeholder="__/__/____"
                    format="DD/MM/YYYY"
                    value-format="YYYY-MM-DD"
                    v-if="item.InputType == inputType.InputDate"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="request in data"
              :key="request.RequestMemberID"
              :class="{ active: currentSelect == request.RequestMemberID }"
              @click="onClickRow(request)"
            >
              <td>
                <div
                  class="checkbox icon-uncheck"
                  :class="{
                    active: requestsSelected.has(request.RequestMemberID),
                  }"
                  @click="onTickRow(request)"
                ></div>
              </td>
              <td
                :class="`width-${item.Width}`"
                v-for="item in header"
                :key="item.HeadName"
              >
                {{ requestFunc[item.FieldName](request) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <MyPagination :data="paging" @changeData="changePaging"></MyPagination>
    </Pane>
    <Pane size="30" min-size="0">
      <VoucherInfo :data="requestSelected"></VoucherInfo>
    </Pane>
  </Splitpanes>
</template>

<script>
import RequestStatus from "@/Enum/RequestStatus";
import Request from "@/assets/js/request";
import TableEnum from "@/Enum/RequestTable";
import SearchCombobox from "@/components/base/BaseCombobox.vue";
import MyPagination from "@/components/base/BasePagination.vue";
import VoucherInfo from "@/components/pages/common/VoucherInfo.vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
export default {
  name: "tableID",
  props: [
    "data",
    "header",
    "parent",
    "selected",
    "requests",
    "pagination",
    "onlyDraft",
  ],
  components: {
    Splitpanes,
    Pane,
    VoucherInfo,
    MyPagination,
    SearchCombobox,
  },
  data() {
    return {
      buttonType: TableEnum.FilterButton,
      inputType: TableEnum.FilterType,
      tableEnum: TableEnum,
      requestFunc: Request,
      currentSelect: "",
      listSelected: new Set(),
    };
  },
  computed: {
    requestSelected: {
      get() {
        return this.selected;
      },
      set(val) {
        this.$emit("changeSelected", val);
      },
    },
    requestsSelected: {
      get() {
        return this.requests;
      },
      set(value) {
        this.$emit("changeRequestsSelected", value);
      },
    },
    paging: {
      get() {
        return this.pagination;
      },
      set(val) {
        this.$emit("changePagination", val);
      },
    },
    cptOnlyDraft: {
      get() {
        return this.onlyDraft;
      },
      set(val) {
        this.$emit("changeOnlyDraft", val);
      },
    },
    // checkOnlyDraft() {
    //   var check = true;
    //     if (
    //       this.listSelected.has((x) => {
    //         if (x.Status == RequestStatus.Draft) {
    //           return true;
    //         }
    //         return false;
    //       })
    //     ) {
    //       check = false;
    //     }
    //     return check;
    // }
  },
  watch: {
    listSelected: function() {
      this.cptOnlyDraft = this.checkOnlyDraft();
    }
  },
  methods: {
    /**
     * @Description clic checkbox row
     * @Author TVLOI
     * 07/10/2022
     */
    onTickRow(request) {
      if (this.requestsSelected.has(request.RequestMemberID)) {
        this.requestsSelected.delete(request.RequestMemberID);
        this.listSelected.delete(request);
      } else {
        this.requestsSelected.add(request.RequestMemberID);
        this.listSelected.add(request);
      }
      this.currentSelect = request.RequestMemberID;
      this.requestSelected = { ...request };
      this.cptOnlyDraft = this.checkOnlyDraft();
    },
    /**
     * @Description khi click 1 row
     * @Author TVLOI
     * 07/10/2022
     */
    onClickRow(request) {
      this.requestSelected = { ...request };
      this.currentSelect = request.RequestMemberID;
    },
    changePaging(val) {
      this.paging = val;
    },
    checkOnlyDraft() {
      let listRequestSelected = Array.from(this.listSelected);
      var check = true;
        if (listRequestSelected.some(e => e.Status != RequestStatus.Draft)) {
          check = false;
        }
        return check;
    }
  },
};
</script>

<style scoped>
@import url("@/assets/css/base/table.css");
</style>