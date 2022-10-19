<template>
    <div class="voucher-info" id="infoID">
        <div class="info-header">
            <a class="a-header-tab voucher active">Mã giảm giá</a>
            <a class="a-header-tab voucher">Danh sách hàng hóa</a>
        </div>
        <div class="info-content">
            <div class="info-content-col">
                <div class="info-content-row">
                    <span>Sản phẩm</span>
                    <div>{{RequestFunc.Product(data)}}</div>
                </div>
                <div class="info-content-row">
                    <span>Ứng dụng (thuộc AMISPlatform)</span>
                    <div>{{RequestFunc.Platform(data)}}</div>
                </div>
                <div class="info-content-row">
                    <span>Đối tượng</span>
                    <div>{{RequestFunc.ApplyFor(data)}}</div>
                </div>
                <div class="info-content-row">
                    <span>Mã giảm giá</span>
                    <div>{{RequestFunc.VoucherCode(data)}}</div>
                </div>
                <div class="info-content-row">
                    <span>Loại giảm giá</span>
                    <div>{{RequestFunc.DiscountType(data)}}</div>
                </div>
                <div class="info-content-row">
                    <span>Giảm giá cho</span>
                    <div>{{RequestFunc.DiscountFor(data)}}</div>
                </div>
                <div class="info-content-row">
                    <span>Số % giảm</span>
                    <div>{{RequestFunc.PercentageReduction(data)}}</div>
                </div>
                <div class="info-content-row">
                    <span>Số tiền giảm</span>
                    <div>{{RequestFunc.DiscountAmount(data)}}</div>
                </div>
                <div class="info-content-row">
                    <span>Số tiền TGG</span>
                    <div>{{RequestFunc.PriceBefore(data)}}</div>
                </div>
                <div class="info-content-row">
                    <span>Số tiền SGG</span>
                    <div>{{RequestFunc.AmountAfterDiscount(data)}}</div>
                </div>
            </div>
            <div class="info-content-col">
                <div class="info-content-row">
                    <span>Người lập</span>
                    <div>{{RequestFunc.EmployeeCreated(data)}}</div>
                </div>
                <div class="info-content-row">
                    <span>Ngày lập</span>
                    <div>{{RequestFunc.CreatedDate(data)}}</div>
                </div>
                <div class="info-content-row">
                    <span>Người yêu cầu</span>
                    <div>{{RequestFunc.EmployeeRequest(data)}}</div>
                </div>
                <div class="info-content-row">
                    <span>Ngày yêu cầu</span>
                    <div>{{RequestFunc.DateRequest(data)}}</div>
                </div>
                <div class="info-content-row">
                    <span>Người duyệt</span>
                    <div>{{RequestFunc.EmployeeApprovel(data)}}</div>
                </div>
                <div class="info-content-row">
                    <span>Ngày duyệt</span>
                    <div>{{RequestFunc.DateApprovel (data)}}</div>
                </div>
            </div>
            <div class="info-content-col">
                <div class="info-content-row">
                    <span>Số tháng tặng thêm</span>
                    <div>0</div>
                </div>
                <div class="info-content-row">
                    <span>Ngày tặng thêm</span>
                    <div>27/09/2022</div>
                </div>
                <div class="info-content-row height-62">
                    <span>Lý do xin duyệt</span>
                    <textarea name="" id="" cols="42" rows="4" class="text-area" readonly :value="RequestFunc.Reason(data)"></textarea>
                </div>
                <div class="info-content-row height-62">
                    <span>Lý do từ chối</span>
                    <textarea name="" id="" cols="42" rows="4" class="text-area" readonly :value="RequestFunc.ReasonForRefusal(data)"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Request from "@/assets/js/request";
export default {
    name: "infoID",
    data() {
        return {
            RequestFunc: Request
        }
    },
    props: ["data"],
}
</script>

<style scoped>
@import url('@/assets/css/common/voucherinfo.css');
</style>