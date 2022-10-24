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
      class="form-content"
    >
      <div class="content-top">
        <span>Chọn người phê duyệt</span>
        <button class="icon-close" @click="isShow = false"></button>
      </div>

      <div class="content-center">
        <div class="browse-content">
          <label for="">Cấp duyệt giảm giá</label>
          <BaseCombobox
              :data="ComboboxData.LevelUserChoose"
              :IdName="'Id'"
              :ValName="'Label'"
              :value="approvalLevel"
              disabled="true"
            ></BaseCombobox>
          <label for="">Người duyệt yêu cầu</label>
          <BaseCombobox
              :data="employees"
              :IdName="'EmployeeID'"
              :ValName="'EmployeeName'"
              :value="transferRequest.EmployeeIDCreatedUserChoose"
              @changeValue="changeBrowser"
            ></BaseCombobox>
        </div>
      </div>

      <div class="content-bottom">
        <button class="btn-txt btn-blue" @click="admit">Đồng ý</button>
        <button class="btn-txt" @click="isShow = fasle">Hủy bỏ</button>
      </div>
    </Vue3DraggableResizable>
  </div>
</template>

<script>
import axios from "axios"
import ComboboxData from "@/stores/ComboboxData"
import BaseCombobox from "@/components/base/BaseCombobox.vue";
export default {
  name: "browseID",
  props: ["show", "level", "request"],
  components: {
    BaseCombobox,
  },
  data() {
    return {
      ComboboxData: ComboboxData,
      employees: [],
      approvalLevel: 10,
      requestSelected: {...this.request}
    }
  },
  async created() {
    await this.getEmployees();
  },
  computed: {
    isShow: {
      get() {
        return this.show;
      },
      set(val) {
        this.$emit("onClose", val);
      }
    },
    transferRequest: {
      get() {
        return this.request;
      },
      set(val) {
        this.$emit('changeTransferRequest', val);
      }
    }
  },
  methods: {
    async getEmployees() {
      let url = `https://localhost:44342/api/v1/Employee/Browser?level=${this.level}`;
      await axios
        .get(url, { headers: { Authorization: `Bearer ${this.token}` } })
        .then((response) => {
          if (response) {
            this.employees = response.data;
            this.approvalLevel = this.employees[0].Level;
            this.transferRequest.EmployeeIDCreatedUserChoose = this.employees[0].EmployeeID;
            this.transferRequest.CurrentLevel = this.employees[0].Level;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    admit() {
      this.$emit("admit");
    },
    changeBrowser(val) {
      this.transferRequest.EmployeeIDCreatedUserChoose = val;
    },
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