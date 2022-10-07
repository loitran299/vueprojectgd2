<template>
  <div class="overlay" id="formDetail" v-if="isShowForm">
    <Vue3DraggableResizable :initW="833" :initH="596" :x="x" :y="y" :w="w" :h="h" :active="active" :draggable="true"
      :resizable="false" :parent="false" class="form-content">
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
            <BaseCombobox class="form-combobox" :data="products" :IdName="'ProductID'" :ValName="'ProductName'"
              :value="cptData.ProductID" @changeValue="changeProduct"></BaseCombobox>
          </div>
          <div class="box-row">
            <span>Áp dụng cho<span>(*)</span></span>
            <BaseCombobox class="form-combobox" :data="ComboboxData.Applicable" :IdName="'Id'" :ValName="'Label'"
              :value="cptData.ApplyFor" @changeValue="changeApplyFor"></BaseCombobox>
          </div>
          <div class="box-row">
            <span>Ngày hiệu lực</span>
            <DateRequest :mode="EnumDateRange.mode.Compact" :begin="cptData.StartDate" :end="cptData.ExpiredDate">
            </DateRequest>
          </div>
          <div class="box-row">
            <span>Giảm giá cho:</span>
            <input class="box-radio" name="type" type="radio" v-model="cptData.DiscountFor" :value="1" />
            <label for="type">Gói sản phẩm</label>
            <input class="box-radio" name="type" type="radio" v-model="cptData.DiscountFor" :value="2" />
            <label for="type">Sản phẩm</label>
            <input class="box-radio" name="type" type="radio" v-model="cptData.DiscountFor" :value="3" />
            <label for="type">Toàn bộ đơn hàng</label>
          </div>
          <div class="box-row">
            <span>Áp dụng cho<span>(*)</span></span>
            <input type="radio" class="box-radio" name="applyFor" v-model="cptData.DiscountType" :value="1" />
            <label for="" class="width-80">%</label>
            <input type="number" min="1" class="box-input icon-spinner" :disabled="cptData.DiscountType == 2" />
          </div>
          <div class="box-row">
            <span></span>
            <input type="radio" class="box-radio" name="applyFor" v-model="cptData.DiscountType" :value="2" />
            <label for="" class="width-80">Số tiền</label>
            <input type="number" min="1" class="box-input icon-spinner" :disabled="cptData.DiscountType == 1" />
          </div>
          <div class="box-row">
            <span>Số tiền trước giảm giá<span>(*)</span></span>
            <input type="number" min="1" class="box-input icon-spinner" v-model="cptData.PriceBefore" />
          </div>
          <div class="box-row">
            <span>Lý do</span>
            <textarea name="" id="" cols="87" rows="5" v-model="cptData.Reason"></textarea>
          </div>
          <div class="box-row">
            <span>Danh mục</span>
            <BaseCombobox class="form-combobox" :data="ComboboxData.Category" :IdName="'Id'" :ValName="'Label'"
              :value="cptData.Category" @changeValue="changeCategory"></BaseCombobox>
          </div>
          <div class="box-row">
            <span>Cấp xin duyệt giảm giá:</span>
            <input type="radio" class="box-radio" name="level" v-model="cptData.LevelCreatedUserChoose" :value="10" />
            <label for="">Ban GĐ TTKD (HAN, HCM)/ TP KD (DNG, BMT, CTH)/ TP GHCN khối
              DN</label>
          </div>
          <div class="box-row">
            <span></span>
            <input type="radio" class="box-radio" name="level" v-model="cptData.LevelCreatedUserChoose" :value="15" />
            <label for="">Ban GĐ Văn phòng</label>
          </div>
          <div class="box-row">
            <span></span>
            <input type="radio" class="box-radio" name="level" v-model="cptData.LevelCreatedUserChoose" :value="20" />
            <label for="">Ban Tổng giám đốc</label>
          </div>
          <div class="box-row">
            <span>Người duyệt yêu cầu<span>(*)</span></span>
            <BaseCombobox class="form-combobox" :data="employees" :IdName="'EmployeeID'" :ValName="'EmployeeName'"
              :value="cptData.EmployeeIDCreatedUserChoose" @changeValue="changeBrowser"></BaseCombobox>
          </div>
          <div class="box-row">
            <span>Mã cộng tác viên</span>
            <input type="text" min="1" class="box-input flex1" v-model="cptData.CollaboratorCode" />
          </div>
          <div class="box-row">
            <span>Cấp cho:</span>
            <input type="radio" class="box-radio" name="who" />
            <label for="">Một khách hàng</label>
            <input type="radio" class="box-radio" name="who" />
            <label for="">Danh sách khách hàng</label>
          </div>

          <!-- -----------customer----------- -->
        </div>
        <div class="content-center-box">
          <div class="box-title"><span>Thông tin khách hàng</span></div>
          <div class="box-row">
            <span>MST/CMT <span>(*)</span></span>
            <input type="text" class="box-input" v-model="cptData.CustomerIdentity" />
          </div>
          <div class="box-row">
            <span>Tên khách hàng</span>
            <input type="text" class="box-input flex1" v-model="cptData.CustomerName" />
          </div>
          <div class="box-row">
            <span>Địa chỉ <span>(*)</span></span>
            <input type="text" class="box-input flex1" v-model="cptData.Address" />
          </div>
          <div class="box-row">
            <span>Mã ngân sách</span>
            <input type="text" class="box-input" v-model="cptData.BudgetCode" />
            <span class="span-right">Ngày thành lập</span>
            <el-date-picker :clearable="false" size="small" class="el-date-picker" v-model="cptData.EstablishDate"
              type="date" popper-class="el-date-picker-popper" :max="todayDate" placeholder="DD/MM/YYYY"
              format="DD/MM/YYYY" value-format="YYYY-MM-DD" />
          </div>

          <div class="box-row">
            <span>Người liên hệ <span>(*)</span></span>
            <input type="text" class="box-input flex1" v-model="cptData.ContactBy" />
          </div>
          <div class="box-row">
            <span>Số điện thoại <span>(*)</span></span>
            <input type="text" class="box-input" v-model="cptData.PhoneNumber" />
            <span class="span-right">Email <span>(*)</span></span>
            <input type="text" class="box-input" v-model="cptData.Email" />
          </div>
        </div>
      </div>

      <div class="content-bottom">
        <button class="btn-icon btn-none" @click="addRequest">
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
import cookie from "@/stores/cookie";
import ComboboxData from "@/stores/ComboboxData";
import EnumDateRange from "@/Enum/EnumDateRange";
import DateRequest from "@/components/base/DateRange.vue";
import BaseCombobox from "@/components/base/BaseCombobox.vue";
import axios from "axios";
export default {
  name: "formDetail",
  props: ["isShow", "data"],
  components: {
    BaseCombobox,
    DateRequest,
  },
  data() {
    return {
      EnumDateRange: EnumDateRange,
      ComboboxData: ComboboxData,
      applicableID: 1,
      categoryID: 1,
      products: [],
      token: cookie.getCookie("Token"),
      employees: [],
      user: cookie.getUser(),
    };
  },
  created() {
    this.getProducts();
    this.getEmployees();
  },
  computed: {
    isShowForm: {
      get() {
        return this.isShow;
      },
      set(value) {
        this.$emit("changeShow", value);
      },
    },
    cptData: {
      get() {
        return this.data;
      },
      set(value) {
        this.$emit("changeData", value);
      },
    },
  },
  methods: {
    /**
     * @Description Lấy tất cả sản phẩm đổ vào combobox
     * @Author TVLOI
     * 07/10/2022
     */
    async getProducts() {
      let url = "https://localhost:44342/api/v1/Product";
      await axios
        .get(url, { headers: {"Authorization" : `Bearer ${this.token}`} })
        .then((response) => {
          if (response) {
            this.products = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(this.products);
    },
    /**
     * @Description Lấy nhân viên theo cấp bậc cao hơn
     * @Author TVLOI
     * 07/10/2022
     */
    async getEmployees() {
      let url = `https://localhost:44342/api/v1/Employee/NextLevel?level=10`;
      await axios
        .get(url, { headers: {"Authorization" : `Bearer ${this.token}`} })
        .then((response) => {
          if (response) {
            this.employees = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /**
     * @Description Lưu 1 yêu cầu
     * @Author TVLOI
     * 07/10/2022
     */
    async addRequest() {
      this.cptData.CreatedEmployeeID = this.user.EmployeeID;
      let url = `https://localhost:44342/api/v1/Request`;
      await axios
        .post(url, this.cptData,{ headers: {"Authorization" : `Bearer ${this.token}`} })
        .then((response) => {
          if (response) {
            this.isShowForm = false;
            alert('Thêm thành công');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /**
     * @Description Thay đổi id sản phẩm
     * @Author TVLOI
     * 07/10/2022
     */
    changeProduct(productID) {
      this.cptData.ProductID = productID;
    },
    /**
     * @Description Thay đổi id thể loại
     * @Author TVLOI
     * 07/10/2022
     */
    changeCategory(id) {
      this.cptData.Category = id;
    },
    /**
     * @Description Thay đổi giá trị áp dụng cho
     * @Author TVLOI
     * 07/10/2022
     */
    changeApplyFor(val) {
      this.cptData.ApplyFor = val;
    },
    /**
     * @Description Thay đổi id người duyệt yêu cầu
     * @Author TVLOI
     * 07/10/2022
     */
    changeBrowser(val) {
      this.cptData.EmployeeIDCreatedUserChoose = val;
    },
  },
};
</script>

<style>
@import url("@/assets/css/common/formdetail.css");

.el-date-picker .el-input__wrapper {
  margin-top: 0 !important;
}
</style>