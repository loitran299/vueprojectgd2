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
                            <th v-for="item in table.FieldNames" :key="item">{{item}}</th>
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
                                    <el-date-picker :clearable="false" size="small"
                                        class="el-date-picker date-picker-none" v-model="date" type="date"
                                        popper-class="el-date-picker-popper" placeholder="__/__/____"
                                        format="DD/MM/YYYY" value-format="YYYY-MM-DD" />
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
                                    <el-date-picker :clearable="false" size="small"
                                        class="el-date-picker date-picker-none" v-model="date" type="date"
                                        popper-class="el-date-picker-popper" placeholder="__/__/____"
                                        format="DD/MM/YYYY" value-format="YYYY-MM-DD" />
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
                                    <el-date-picker :clearable="false" size="small"
                                        class="el-date-picker date-picker-none" v-model="date" type="date"
                                        popper-class="el-date-picker-popper" placeholder="__/__/____"
                                        format="DD/MM/YYYY" value-format="YYYY-MM-DD" />
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
                                    <el-date-picker :clearable="false" size="small"
                                        class="el-date-picker date-picker-none" v-model="date" type="date"
                                        popper-class="el-date-picker-popper" placeholder="__/__/____"
                                        format="DD/MM/YYYY" value-format="YYYY-MM-DD" />
                                </div>
                            </th>
                            <th class="width-120">
                                <button class="filter-button">=</button>
                                <div class="filter-input">
                                    <el-date-picker :clearable="false" size="small"
                                        class="el-date-picker date-picker-none" v-model="date" type="date"
                                        popper-class="el-date-picker-popper" placeholder="__/__/____"
                                        format="DD/MM/YYYY" value-format="YYYY-MM-DD" />
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
                            <td v-for="item in table.FieldNames" :key="item">test</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="checkbox icon-uncheck"></div>
                            </td>
                            <td v-for="item in table.FieldNames" :key="item">test</td>
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
import SearchCombobox from "@/components/base/BaseCombobox.vue";
import MyPagination from "@/components/base/BasePagination.vue"
import VoucherInfo from "@/components/pages/common/VoucherInfo.vue";
import ConstTable from "@/Const/table"
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
export default {
    name: 'tableID',
    props:[
        "data"
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
            table: ConstTable,
        }
    },
}
</script>

<style scoped>
@import url('@/assets/css/base/table.css');
</style>