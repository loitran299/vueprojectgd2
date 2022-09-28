<!-- /* ------------------
----Component BaseCombobox----------
----author: TVLOI ----------
----03/08/2022    ----------
*/ -->
<template>
  <el-select
    v-model="cbValue"
    filterable
    class="el-select"
    placeholder=""
    popper-class="selectbox"
    id="comboboxID"
  >
    <el-option
      :label="'tat ca'"
      :value="'tat ca'"
    />
    <el-option
      :label="'item1'"
      :value="'item2'"
    />
  </el-select>
</template>

<style scoped>
@import url('@/assets/css/base/combobox.css');
</style>

<script>
export default {
  name: "comboboxID",
  props: [
  ],
  data() {
    return {
      cbValue: 'Tuần này'
    };
  },

  mounted() {
  },
  computed: {
  },
  methods: {
    /**
     * @Description Lấy dữ liệu từ api đổ vào combobox
     * @Author TVLOI
     * 05/08/2022
     */
  },
};
</script>