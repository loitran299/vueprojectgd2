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
            <BaseCombobox
              class="form-combobox input-validate"
              :class="{ warning: isValidate && !cptData.ProductID }"
              :data="products"
              :IdName="'ProductID'"
              :ValName="'ProductName'"
              :value="cptData.ProductID"
              @changeValue="changeProduct"
              :disabled="mode == Enum.FormMode.Watch"
              @onBlur="validateOnBlur"
              required
            ></BaseCombobox>
          </div>
          <div class="box-row">
            <span>Áp dụng cho<span>(*)</span></span>
            <BaseCombobox
              class="form-combobox input-validate"
              :class="{ warning: isValidate && !cptData.ApplyFor }"
              :data="ComboboxData.Applicable"
              :IdName="'Id'"
              :ValName="'Label'"
              :value="cptData.ApplyFor"
              @changeValue="changeApplyFor"
              :disabled="mode == Enum.FormMode.Watch"
              @onBlur="validateOnBlur"
              required
            ></BaseCombobox>
          </div>
          <div class="box-row">
            <span>Ngày hiệu lực</span>
            <DateRequest
              :mode="EnumDateRange.mode.Compact"
              :begin="cptData.StartDate"
              :end="cptData.ExpiredDate"
              @changeBegin="changeDateBegin"
              @changeEnd="changeDateEnd"
              :disabled="mode == Enum.FormMode.Watch"
            >
            </DateRequest>
          </div>
          <div class="box-row">
            <span>Giảm giá cho:</span>
            <input
              class="box-radio"
              name="type"
              type="radio"
              v-model="cptData.DiscountFor"
              :value="1"
              :disabled="mode == Enum.FormMode.Watch"
            />
            <label for="type">Gói sản phẩm</label>
            <input
              class="box-radio"
              name="type"
              type="radio"
              v-model="cptData.DiscountFor"
              :value="2"
              :disabled="mode == Enum.FormMode.Watch"
            />
            <label for="type">Sản phẩm</label>
            <input
              class="box-radio"
              name="type"
              type="radio"
              v-model="cptData.DiscountFor"
              :value="3"
              :disabled="mode == Enum.FormMode.Watch"
            />
            <label for="type">Toàn bộ đơn hàng</label>
          </div>
          <div class="box-row">
            <span>Áp dụng cho<span>(*)</span></span>
            <input
              type="radio"
              class="box-radio"
              name="applyFor"
              v-model="cptData.DiscountType"
              :value="1"
              :disabled="mode == Enum.FormMode.Watch"
            />
            <label for="" class="width-80">%</label>
            <input
              type="number"
              min="1"
              class="box-input text-align-end"
              v-model="cptData.PercentageReduction"
              :disabled="cptData.DiscountType == 2"
              :readonly="mode == Enum.FormMode.Watch"
            />
          </div>
          <div class="box-row">
            <span></span>
            <input
              type="radio"
              class="box-radio"
              name="applyFor"
              v-model="cptData.DiscountType"
              :value="2"
              :disabled="mode == Enum.FormMode.Watch"
            />
            <label for="" class="width-80">Số tiền</label>
            <input
              type="number"
              min="1"
              class="box-input text-align-end"
              v-model="cptData.ReductionAmount"
              :disabled="cptData.DiscountType == 1"
              :readonly="mode == Enum.FormMode.Watch"
            />
          </div>
          <div class="box-row">
            <span>Số tiền trước giảm giá<span>(*)</span></span>
            <input
              type="number"
              min="1"
              class="box-input text-align-end input-validate"
              :class="{ warning: isValidate && !cptDate.PriceBefore }"
              v-model="cptData.PriceBefore"
              :readonly="mode == Enum.FormMode.Watch"
              @blur="validateOnBlur"
              required
            />
          </div>
          <div class="box-row">
            <span>Lý do</span>
            <textarea
              name=""
              id=""
              cols="87"
              rows="5"
              v-model="cptData.Reason"
              class="text-area"
              :readonly="mode == Enum.FormMode.Watch"
            ></textarea>
          </div>
          <div class="box-row">
            <span>Danh mục</span>
            <BaseCombobox
              class="form-combobox"
              :data="ComboboxData.Category"
              :IdName="'Id'"
              :ValName="'Label'"
              :value="cptData.Category"
              @changeValue="changeCategory"
              :disabled="mode == Enum.FormMode.Watch"
            ></BaseCombobox>
          </div>
          <div class="box-row">
            <span>Cấp xin duyệt giảm giá:</span>
            <input
              type="radio"
              class="box-radio"
              name="level"
              v-model="cptData.LevelCreatedUserChoose"
              :value="10"
              :disabled="mode == Enum.FormMode.Watch"
            />
            <label for=""
              >Ban GĐ TTKD (HAN, HCM)/ TP KD (DNG, BMT, CTH)/ TP GHCN khối
              DN</label
            >
          </div>
          <div class="box-row">
            <span></span>
            <input
              type="radio"
              class="box-radio"
              name="level"
              v-model="cptData.LevelCreatedUserChoose"
              :value="15"
              :disabled="mode == Enum.FormMode.Watch"
            />
            <label for="">Ban GĐ Văn phòng</label>
          </div>
          <div class="box-row">
            <span></span>
            <input
              type="radio"
              class="box-radio"
              name="level"
              v-model="cptData.LevelCreatedUserChoose"
              :value="20"
              :disabled="mode == Enum.FormMode.Watch"
            />
            <label for="">Ban Tổng giám đốc</label>
          </div>
          <div class="box-row">
            <span>Người duyệt yêu cầu<span>(*)</span></span>
            <BaseCombobox
              class="form-combobox input-validate"
              :data="employees"
              :IdName="'EmployeeID'"
              :ValName="'EmployeeName'"
              :value="cptData.EmployeeIDCreatedUserChoose"
              @changeValue="changeBrowser"
              :disabled="mode == Enum.FormMode.Watch"
              @onBlur="validateOnBlur"
              required
            ></BaseCombobox>
          </div>
          <div class="box-row">
            <span>Mã cộng tác viên</span>
            <input
              type="text"
              min="1"
              class="box-input flex1"
              v-model="cptData.CollaboratorCode"
              :readonly="mode == Enum.FormMode.Watch"
            />
          </div>
          <div class="box-row">
            <span>Cấp cho:</span>
            <input
              type="radio"
              class="box-radio"
              name="who"
              :disabled="mode == Enum.FormMode.Watch"
            />
            <label for="">Một khách hàng</label>
            <input
              type="radio"
              class="box-radio"
              name="who"
              :disabled="mode == Enum.FormMode.Watch"
            />
            <label for="">Danh sách khách hàng</label>
          </div>

          <!-- -----------customer----------- -->
        </div>
        <div class="content-center-box">
          <div class="box-title"><span>Thông tin khách hàng</span></div>
          <div class="box-row">
            <span>MST/CMT <span>(*)</span></span>
            <input
              type="text"
              class="box-input input-validate"
              v-model="cptData.CustomerIdentity"
              :readonly="mode == Enum.FormMode.Watch"
            />
          </div>
          <div class="box-row">
            <span>Tên khách hàng</span>
            <input
              type="text"
              class="box-input flex1"
              v-model="cptData.CustomerName"
              :readonly="mode == Enum.FormMode.Watch"
            />
          </div>
          <div class="box-row">
            <span>Địa chỉ <span>(*)</span></span>
            <input
              type="text"
              class="box-input flex1 input-validate"
              v-model="cptData.Address"
              :readonly="mode == Enum.FormMode.Watch"
              @blur="validateOnBlur"
              required
            />
          </div>
          <div class="box-row">
            <span>Mã ngân sách</span>
            <input
              type="text"
              class="box-input"
              v-model="cptData.BudgetCode"
              :readonly="mode == Enum.FormMode.Watch"
            />
            <span class="span-right">Ngày thành lập</span>
            <el-date-picker
              :clearable="false"
              size="small"
              class="el-date-picker"
              v-model="cptData.EstablishDate"
              type="date"
              popper-class="el-date-picker-popper"
              :max="todayDate"
              placeholder="DD/MM/YYYY"
              format="DD/MM/YYYY"
              value-format="YYYY-MM-DD"
              :disabled="mode == Enum.FormMode.Watch"
            />
          </div>

          <div class="box-row">
            <span>Người liên hệ <span>(*)</span></span>
            <input
              type="text"
              class="box-input flex1 input-validate"
              v-model="cptData.ContactBy"
              :readonly="mode == Enum.FormMode.Watch"
              @blur="validateOnBlur"
              required
            />
          </div>
          <div class="box-row">
            <span>Số điện thoại <span>(*)</span></span>
            <input
              type="text"
              class="box-input input-validate"
              v-model="cptData.PhoneNumber"
              :readonly="mode == Enum.FormMode.Watch"
              @blur="validateOnBlur"
              required
            />
            <span class="span-right">Email <span>(*)</span></span>
            <input
              type="text"
              class="box-input input-validate"
              v-model="cptData.Email"
              :readonly="mode == Enum.FormMode.Watch"
              @blur="validateOnBlur"
              required
            />
          </div>
        </div>
      </div>

      <div class="content-bottom">
        <button
          class="btn-icon btn-none"
          @click="addRequest"
          :disabled="mode == Enum.FormMode.Watch"
        >
          <div class="icon-save16"></div>
          <span>Cất</span>
        </button>
        <button class="btn-icon btn-none" @click="isShowForm = false">
          <div class="icon-cancel16"></div>
          <span>Hủy</span>
        </button>
      </div>
    </Vue3DraggableResizable>
  </div>

  <MessageBox
    v-if="isShowMessageBox"
    :message="warningMessage"
    :isShow="isShowMessageBox"
    @changeShowMessage="changeShowMessage"
  ></MessageBox>
</template>

<script>
import MessageBox from "@/components/base/MessageBox.vue";
import Notification from "@/assets/js/Notification";
import Enum from "@/Enum/VoucherDetail";
import cookie from "@/stores/Cookie";
import ComboboxData from "@/stores/ComboboxData";
import EnumDateRange from "@/Enum/EnumDateRange";
import DateRequest from "@/components/base/DateRange.vue";
import BaseCombobox from "@/components/base/BaseCombobox.vue";
import axios from "axios";
export default {
  name: "formDetail",
  props: ["isShow", "data", "mode"],
  components: {
    BaseCombobox,
    DateRequest,
    MessageBox,
  },
  data() {
    return {
      Enum: Enum,
      EnumDateRange: EnumDateRange,
      ComboboxData: ComboboxData,
      applicableID: 1,
      categoryID: 1,
      products: [],
      token: cookie.getCookie("Token"),
      employees: [],
      user: cookie.getUser(),
      isValidate: false,
      isShowMessageBox: false,
      warningMessage: "",
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
    validateForm() {
      if (!this.cptData.ProductID) {
        return false;
      }
      return true;
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
        .get(url, { headers: { Authorization: `Bearer ${this.token}` } })
        .then((response) => {
          if (response) {
            this.products = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /**
     * @Description Lấy nhân viên theo cấp bậc cao hơn
     * @Author TVLOI
     * 07/10/2022
     */
    async getEmployees() {
      let url = `https://localhost:44342/api/v1/Employee/Browser?level=5`;
      await axios
        .get(url, { headers: { Authorization: `Bearer ${this.token}` } })
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
      let validate = this.validateRequest();
      if (!validate) {
        this.validateAll();
        return;
      }
      let url = `https://localhost:44342/api/v1/Request`;
      if (this.mode == Enum.FormMode.Save) {
        this.cptData.CreatedEmployeeID = this.user.EmployeeID;
        await axios
          .post(url, this.cptData, {
            headers: { Authorization: `Bearer ${this.token}` },
          })
          .then((response) => {
            if (response) {
              Notification.success("Thêm thành công", `Đã thêm 1 yêu cầu`);
              this.isShowForm = false;
            }
            this.$emit("saveSuccess");
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (this.mode == Enum.FormMode.Edit) {
        url = `${url}/${this.cptData.RequestID}`;
        await axios
          .put(url, this.cptData, {
            headers: { Authorization: `Bearer ${this.token}` },
          })
          .then((response) => {
            if (response) {
              Notification.success("Sửa thành công", `Đã Sửa yêu cầu`);
              this.isShowForm = false;
            }
            this.$emit("saveSuccess");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    validateAll() {
      const elements = document.getElementsByClassName("input-validate");
      Array.from(elements).forEach((el) => {
        if (el.hasAttribute("required")) {
          // Gán thuộc tính cho input
          if(el.hasAttribute("combobox") && !el.querySelector('input').value){
            
            el.setAttribute("comboboxRedBoder", true);
          }else if(!el.value && !el.hasAttribute("combobox")) {
            el.setAttribute("redBoder", true);
          }
        }else{
          el.removeAttribute("redBoder");
          el.removeAttribute("comboboxRedBoder");
        }
      });
    },
    /**
     * @Description Xử lý sự kiện khi blur các input validate
     * @Author TVLOI
     * 26/10/2022
     */
    validateOnBlur($event) {
      try {
        // Lấy ra target của sự kiện blur
        const target = $event.currentTarget || $event.target;
        const boundElement = target.closest(".input-validate");
        // Nếu input là bắt buộc mà lại không được nhập
        if (target.hasAttribute("required") && !target.value) {
          // Gán thuộc tính cho input
          boundElement.setAttribute("redBoder", true);
        } else if (boundElement.hasAttribute("required")) {
          // Bỏ thuộc tính nếu hợp lệ
          setTimeout(() => {
            if (!target.value) {
              boundElement.setAttribute("comboboxRedBoder", true);
            } else {
              boundElement.removeAttribute("comboboxRedBoder");
            }
          }, 100);
        } else {
          boundElement.removeAttribute("redBoder");
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * @Description validate thông tin yêu cầu
     * @Author TVLOI
     * 26/10/2022
     */
    validateRequest() {
      var me = this;
      try {
        let isValid = true;

        // Nếu trường Product Id rỗng
        if (!me.cptData.ProductID) {
          // Cập nhật lại biến isValid
          isValid = false;
          // Cập nhật errorMsg và set invalid cho input
          this.warningMessage = "Sản phẩm không được để trống";
          this.isShowMessageBox = true;
          return;
        }

        // Nếu trường Số tiền trước giảm giá rỗng
        if (!me.cptData.PriceBefore) {
          // Cập nhật lại biến isValid
          isValid = false;
          // Cập nhật errorMsg và set invalid cho input
          this.warningMessage = "Số tiền trước giảm giá không được để trống";
          this.isShowMessageBox = true;
          return;
        }

        // Nếu chọn loại giảm giá theo số tiền và số tiền giảm rỗng hoặc lớn hơn Số tiền trước giảm giá
        if (me.cptData.DiscountType === 1) {
          if (!me.cptData.ReductionAmount) {
            // Cập nhật lại biến isValid
            isValid = false;
            // Cập nhật errorMsg và set invalid cho input
            this.warningMessage = "Số tiền giảm giá không được để trống";
            this.isShowMessageBox = true;
            return;
          } else if (
            me.cptData.PriceBefore &&
            parseInt(me.cptData.ReductionAmount) >
              parseInt(me.cptData.PriceBefore)
          ) {
            // Cập nhật lại biến isValid
            isValid = false;
            // Cập nhật errorMsg và set invalid cho input
            this.warningMessage =
              "Số tiền giảm giá không được lớn hơn trước giảm giá";
            this.isShowMessageBox = true;
            return;
          }
        }

        // Nếu trường Danh mục rỗng
        if (!me.cptData.Category) {
          // Cập nhật lại biến isValid
          isValid = false;
          // Cập nhật errorMsg và set invalid cho input
          this.warningMessage = "Danh mục không được để trống";
          this.isShowMessageBox = true;
          return;
        }

        // Nếu trường Nhân viên duyệt rỗng
        if (!me.cptData.EmployeeIDCreatedUserChoose) {
          // Cập nhật lại biến isValid
          isValid = false;
          // Cập nhật errorMsg và set invalid cho input
          this.warningMessage = "Nhân viên duyệt không được để trống";
          this.isShowMessageBox = true;
          return;
        }

        // Nếu trường ID khách hàng rỗng
        if (!me.cptData.CustomerIdentity) {
          // Cập nhật lại biến isValid
          isValid = false;
          // Cập nhật errorMsg và set invalid cho input
          this.warningMessage = "Id khách hàng không được để trống";
          this.isShowMessageBox = true;
          return;
        }

        // Nếu trường địa chỉ khách hàng rỗng
        if (!me.cptData.Address) {
          // Cập nhật lại biến isValid
          isValid = false;
          // Cập nhật errorMsg và set invalid cho input
          this.warningMessage = "Địa chỉ không được để trống";
          this.isShowMessageBox = true;
          return;
        }

        // Nếu trường người liên hệ của khách hàng rỗng
        if (!me.cptData.ContactBy) {
          // Cập nhật lại biến isValid
          isValid = false;
          // Cập nhật errorMsg và set invalid cho input
          this.warningMessage = "Người liên hệ không được để trống";
          this.isShowMessageBox = true;
          return;
        }

        // Nếu trường phonenumber khách hàng rỗng
        if (!me.cptData.PhoneNumber) {
          // Cập nhật lại biến isValid
          isValid = false;
          // Cập nhật errorMsg và set invalid cho input
          this.warningMessage = "Số điện thoại không được để trống";
          this.isShowMessageBox = true;
          return;
        }

        // Nếu trường Email khách hàng rỗng
        if (!me.cptData.Email) {
          // Cập nhật lại biến isValid
          isValid = false;
          // Cập nhật errorMsg và set invalid cho input
          this.warningMessage = "Email không được để trống";
          this.isShowMessageBox = true;
          return;
        }

        return isValid;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * @Description Thay đổi biến ẩn hiện messagebox
     * @Author TVLOI
     * 26/10/2022
     */
    changeShowMessage(val) {
      this.isShowMessageBox = val;
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
    /**
     * @Description Thay đổi ngày bắt đầu
     * @Author TVLOI
     * 07/10/2022
     */
    changeDateBegin(val) {
      this.cptData.StartDate = val;
    },
    /**
     * @Description Thay đổi ngày bắt đầu
     * @Author TVLOI
     * 07/10/2022
     */
    changeDateEnd(val) {
      this.cptData.ExpiredDate = val;
    },
  },
};
</script>

<style scoped>
@import url("@/assets/css/common/formdetail.css");

.el-date-picker .el-input__wrapper {
  margin-top: 0 !important;
}
</style>