<!-- /* ------------------
----Component BaseCombobox----------
----author: TVLOI ----------
----03/08/2022    ----------
*/ -->
<template>
  <el-select
    v-model="bindValue"
    filterable
    class="el-select"
    :placeholder="' '"
    popper-class="selectbox"
    id="comboboxID"
  >
    <el-option v-for="item in data" :key="item[IdName]"
      :label="item[ValName]"
      :value="item[IdName]"
      
    />
  </el-select>
</template>

<script>
export default {
  name: "comboboxID",
  props: [ "data", "IdName", "ValName", "value"
  ],
  data() {
    return {
      cbValue: ''
    };
  },

  mounted() {
  },
  computed: {
    bindValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("changeValue", val);
      } 
    }
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

<style scoped>
@import url('@/assets/css/base/combobox.css');
</style>