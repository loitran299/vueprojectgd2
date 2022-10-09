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
                            <th v-for="item in header" :key="item.HeadName">{{item.HeadName}}</th>
                        </tr>
                        <tr>
                            <th v-for="item in header" :key="item.HeadName" :class="`width-${item.Width}`">
                                <button class="filter-button" v-if="item.ButtonType == buttonType.Equal">=</button>
                                <button class="filter-button" v-if="item.ButtonType == buttonType.Multi">*</button>
                                <div class="filter-input">
                                    <SearchCombobox class="border-none" v-if="item.InputType == inputType.Combobox"></SearchCombobox>
                                    <input type="text" class="f-input" v-if="item.InputType == inputType.InputText"/>
                                    <el-date-picker :clearable="false" size="small"
                                        class="el-date-picker date-picker-none" v-model="date" type="date"
                                        popper-class="el-date-picker-popper" placeholder="__/__/____"
                                        format="DD/MM/YYYY" value-format="YYYY-MM-DD" v-if="item.InputType == inputType.InputDate"/>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="checkbox icon-uncheck"></div>
                            </td>
                            <td v-for="item in header" :key="item.HeadName">test</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="checkbox icon-uncheck"></div>
                            </td>
                            <td v-for="item in header" :key="item.HeadName">test</td>
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
</template>

<script>
import TableEnum from "@/Enum/RequestTable"
import SearchCombobox from "@/components/base/BaseCombobox.vue";
import MyPagination from "@/components/base/BasePagination.vue"
import VoucherInfo from "@/components/pages/common/VoucherInfo.vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
export default {
    name: 'tableID',
    props:[
        "data", "header"
    ],
    components: {
        Splitpanes,
        Pane,
        VoucherInfo,
        MyPagination,
        SearchCombobox
    },
    data() {
        return {
            buttonType: TableEnum.FilterButton,
            inputType: TableEnum.FilterType
        }
    },
}
</script>

<style scoped>
@import url('@/assets/css/base/table.css');
</style>