<template>
    <div class="main">
      <!-- ----------------------------- -->
      <div class="m-row">
        <label for="">Ngày yêu cầu</label>
        <DateRequest></DateRequest>
      </div>
      <div class="m-row">
        <label for="">Trạng thái</label>
        <SearchCombobox class="width-123"></SearchCombobox>
        <span>Loại yêu cầu</span>
        <SearchCombobox class="width-123"></SearchCombobox>
        <button class="btn-txt btn-blue">Lấy dữ liệu</button>
      </div>
      <div class="m-row">
        <button class="btn-icon btn-none" @click="isShowPopup = true">
          <div class="icon-browse"></div>
          <span>Duyệt</span>
        </button>
        <button class="btn-icon btn-none">
          <div class="icon-refuse"></div>
          <span>Từ chối</span>
        </button>
        <button class="btn-icon btn-none">
          <div class="icon-watching"></div>
          <span>Xem</span>
        </button>
      </div>
      <Splitpanes class="default-theme" horizontal>
        <Pane class="pane-grid" size="70" max-size="100" min-size="19">
          <div class="grid">
            <table>
              <thead>
                <tr>
                  <th rowspan="2">
                    <div class="checkbox icon-uncheck"></div>
                  </th>
                  <th>Tình trạng xử lý</th>
                  <th>Sản phẩm</th>
                  <th>Ứng dụng (Thuộc AMISPlatform)</th>
                  <th>Đối tượng</th>
                  <th>Loại giảm giá</th>
                  <th>Số % giảm</th>
                  <th>Số tiền trước giảm giá</th>
                  <th>số tiền giảm giá</th>
                  <th>Số tiền SGG</th>
                  <th>Loại tặng tháng sử dụng</th>
                  <th>Số tháng tối thiểu để được tặng</th>
                  <th>Số năm tỉ lệ để được tặng</th>
                  <th>Số tháng tặng</th>
                  <th>Lý do</th>
                  <th>Tên khách hàng</th>
                  <th>Địa chỉ</th>
                  <th>MST/CMT</th>
                  <th>Số điện thoại</th>
                  <th>Email</th>
                  <th>Mã CTV</th>
                  <th>Ngày yêu cầu</th>
                  <th>Người yêu cầu</th>
                  <th>Ngày duyệt</th>
                  <th>Người duyệt</th>
                  <th>Ngày từ chối</th>
                  <th>Người từ chối</th>
                  <th>Lý do từ chối</th>
                  <th>Mã giảm giá</th>
                  <th>Ngày bắt đầu</th>
                  <th>Ngày hết hạn</th>
                  <th>Thời hạn sử dụng(Ngày)</th>
                  <th>Danh mục</th>
                  <th>Cấp xin duyệt giảm giá</th>
                </tr>
                <tr>
                  <th class="width-150">
                    <button class="filter-button">=</button>
                    <div class="filter-input">
                      <SearchCombobox class="border-none"></SearchCombobox>
                    </div>
                  </th>
                  <th class="width-150">
                    <button class="filter-button">*</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-220">
                    <button class="filter-button">*</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-150">
                    <button class="filter-button">=</button>
                    <div class="filter-input">
                      <SearchCombobox class="border-none"></SearchCombobox>
                    </div>
                  </th>
                  <th class="width-150">
                    <button class="filter-button">=</button>
                    <div class="filter-input">
                      <SearchCombobox class="border-none"></SearchCombobox>
                    </div>
                  </th>
                  <th class="width-150">
                    <button class="filter-button">*</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-180">
                    <button class="filter-button">=</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-150">
                    <button class="filter-button">=</button>
                    <div class="filter-input">
                      <SearchCombobox class="border-none"></SearchCombobox>
                    </div>
                  </th>
                  <th class="width-150">
                    <button class="filter-button">=</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-220">
                    <button class="filter-button">*</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-240">
                    <button class="filter-button">=</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-150">
                    <button class="filter-button">=</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-150">
                    <button class="filter-button">=</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-300">
                    <button class="filter-button">*</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-300">
                    <button class="filter-button">*</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-300">
                    <button class="filter-button">*</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-150">
                    <button class="filter-button">*</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-150">
                    <button class="filter-button">*</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-300">
                    <button class="filter-button">*</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-150">
                    <button class="filter-button">*</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-120">
                    <button class="filter-button">=</button>
                    <div class="filter-input">
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
                      />
                    </div>
                  </th>
                  <th class="width-300">
                    <button class="filter-button">*</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-120">
                    <button class="filter-button">=</button>
                    <div class="filter-input">
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
                      />
                    </div>
                  </th>
                  <th class="width-300">
                    <button class="filter-button">*</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-120">
                    <button class="filter-button">=</button>
                    <div class="filter-input">
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
                      />
                    </div>
                  </th>
                  <th class="width-300">
                    <button class="filter-button">*</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-300">
                    <button class="filter-button">*</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-150">
                    <button class="filter-button">*</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-120">
                    <button class="filter-button">=</button>
                    <div class="filter-input">
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
                      />
                    </div>
                  </th>
                  <th class="width-120">
                    <button class="filter-button">=</button>
                    <div class="filter-input">
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
                      />
                    </div>
                  </th>
                  <th class="width-200">
                    <button class="filter-button">=</button>
                    <div class="filter-input">
                      <input type="text" class="f-input" />
                    </div>
                  </th>
                  <th class="width-150">
                    <button class="filter-button">=</button>
                    <div class="filter-input">
                      <SearchCombobox class="border-none"></SearchCombobox>
                    </div>
                  </th>
                  <th class="width-200">
                    <button class="filter-button">=</button>
                    <div class="filter-input">
                      <SearchCombobox class="border-none"></SearchCombobox>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="checkbox icon-uncheck"></div>
                  </td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                </tr>
                <tr>
                  <td>
                    <div class="checkbox icon-uncheck"></div>
                  </td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                </tr>
              </tbody>
            </table>
          </div>
          <MyPagination></MyPagination>
        </Pane>
        <Pane size="30" min-size="0">
          <VoucherInfo></VoucherInfo>
        </Pane>
      </Splitpanes>
    </div>
    <BrowsePopup v-if="isShowPopup" :show="isShowPopup" @onClose="onClosePopup"></BrowsePopup>
  </template>
  
  <script>
  import BrowsePopup from "@/components/pages/manager/BrowsePopup.vue"
  import MyPagination from "@/components/base/BasePagination.vue"
  import VoucherInfo from "@/components/pages/common/VoucherInfo.vue";
  import DateRequest from "@/components/base/DateRange.vue";
  import SearchCombobox from "@/components/base/BaseCombobox.vue";
  import { Splitpanes, Pane } from "splitpanes";
  import "splitpanes/dist/splitpanes.css";
  export default {
    name: "voucherID",
    components: {
      DateRequest,
      SearchCombobox,
      Splitpanes,
      Pane,
      VoucherInfo,
      MyPagination,
      BrowsePopup
    },
    data() {
      return {
        date: new Date(),
        isShowPopup: false
      };
    },
    methods: {
      changeShowPopup(value) {
        this.isShowPopup = value;
      },
      onClosePopup(value) {
        this.isShowPopup = value;
      }
    },
  };
  </script>
  
  <style scoped>
  @import url("@/assets/css/pages/Voucher/main.css");
  .main .m-row:nth-child(2) span{
    padding: 0 4px 0 8px;
  }

  .icon-browse {
    background-size: 24px;
  }
  </style>