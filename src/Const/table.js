import TableEnum from "@/Enum/RequestTable"
var table = table || {};

table = {
    Employee: [
        { FieldName: "Status", HeadName: "Tình trạng xử lý", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W150 },
        { FieldName: "Product", HeadName: "Sản phẩm", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { FieldName: "Platform", HeadName: "Ứng dụng (Thuộc AMISPlatform)", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W220 },
        { FieldName: "ApplyFor", HeadName: "Đối tượng", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W150 },
        { FieldName: "DiscountType", HeadName: "Loại giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W150 },
        { FieldName: "PercentageReduction", HeadName: "Số % giảm", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { FieldName: "PriceBefore", HeadName: "Số tiền trước giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W180 },
        { FieldName: "DiscountAmount", HeadName: "số tiền giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { FieldName: "AmountAfterDiscount", HeadName: "Số tiền SGG", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { FieldName: "GilfMonthUse", HeadName: "Loại tặng tháng sử dụng", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W220 },
        { FieldName: "MinimumMonths", HeadName: "Số tháng tối thiểu để được tặng", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W240 },
        { FieldName: "YearsRate", HeadName: "Số năm tỉ lệ để được tặng", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { FieldName: "NumberMonthsGiven", HeadName: "Số tháng tặng", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { FieldName: "Reason", HeadName: "Lý do", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { FieldName: "CustomerName", HeadName: "Tên khách hàng", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { FieldName: "Address", HeadName: "Địa chỉ", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { FieldName: "CustomerIdentity", HeadName: "MST/CMT", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { FieldName: "PhoneNumber", HeadName: "Số điện thoại", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { FieldName: "Email", HeadName: "Email", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { FieldName: "CollaboratorCode", HeadName: "Mã CTV", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { FieldName: "DateRequest", HeadName: "Ngày yêu cầu", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        { FieldName: "EmployeeRequest", HeadName: "Người yêu cầu", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { FieldName: "DateApprovel", HeadName: "Ngày duyệt", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        { FieldName: "EmployeeApprovel", HeadName: "Người duyệt", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { FieldName: "DateRefuse", HeadName: "Ngày từ chối", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        { FieldName: "EmployeeRefuse", HeadName: "Người từ chối", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { FieldName: "ReasonForRefusal", HeadName: "Lý do từ chối", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { FieldName: "VoucherCode", HeadName: "Mã giảm giá", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { FieldName: "StartDate", HeadName: "Ngày bắt đầu", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        { FieldName: "ExpiredDate", HeadName: "Ngày hết hạn", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        { FieldName: "Expired", HeadName: "Thời hạn sử dụng(Ngày)", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W200 },
        { FieldName: "Category", HeadName: "Danh mục", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W150 },
        { FieldName: "LevelCreatedUserChoose", HeadName: "Cấp xin duyệt giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W200 },
    ],
    Manager: [
        {FieldName: "Status", HeadName: "Tình trạng xử lý", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W150 },
        {FieldName: "LevelCreatedUserChoose", HeadName: "Cấp xin duyệt giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W200 },
        {FieldName: "EmployeeRequest", HeadName: "Người yêu cầu", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        {FieldName: "Department", HeadName: "Phòng ban", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        {FieldName: "Product", HeadName: "Sản phẩm", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        {FieldName: "Platform", HeadName: "Ứng dụng (Thuộc AMISPlatform)", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W220 },
        {FieldName: "ApplyFor", HeadName: "Đối tượng", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W150 },
        {FieldName: "DiscountType", HeadName: "Loại giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W150 },
        {FieldName: "PercentageReduction", HeadName: "Số % giảm", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        {FieldName: "DiscountAmount", HeadName: "Tiền giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        {FieldName: "GilfMonthUse", HeadName: "Loại tặng tháng sử dụng", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W220 },
        {FieldName: "MinimumMonths", HeadName: "Số tháng tối thiểu để được tặng", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W240 },
        {FieldName: "YearsRate", HeadName: "Số năm tỉ lệ để được tặng", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        {FieldName: "NumberMonthsGiven", HeadName: "Số tháng tặng", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        {FieldName: "PriceBefore", HeadName: "Số tiền trước giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W180 },
        {FieldName: "DiscountAmount", HeadName: "số tiền giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        {FieldName: "AmountAfterDiscount", HeadName: "Số tiền SGG", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        {FieldName: "Reason", HeadName: "Lý do", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        {FieldName: "CustomerName", HeadName: "Tên khách hàng", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        {FieldName: "Address", HeadName: "Địa chỉ", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        {FieldName: "CustomerIdentity", HeadName: "MST/CMT", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        {FieldName: "PhoneNumber", HeadName: "Số điện thoại", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        {FieldName: "Email", HeadName: "Email", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        {FieldName: "CollaboratorCode", HeadName: "Mã CTV", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        {FieldName: "DateRequest", HeadName: "Ngày yêu cầu", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        {FieldName: "DateApprovel", HeadName: "Ngày duyệt", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        {FieldName: "EmployeeApprovel", HeadName: "Người duyệt", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        {FieldName: "DateRefuse", HeadName: "Ngày từ chối", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        {FieldName: "EmployeeRefuse", HeadName: "Người từ chối", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        {FieldName: "ReasonForRefusal", HeadName: "Lý do từ chối", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        {FieldName: "CreatedDate", HeadName: "Ngày lập yêu cầu", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W150 },
        {FieldName: "EmployeeCreated", HeadName: "Người lập yêu cầu", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        {FieldName: "VoucherCode", HeadName: "Mã giảm giá", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        {FieldName: "StartDate", HeadName: "Ngày bắt đầu", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        {FieldName: "ExpiredDate", HeadName: "Ngày hết hạn", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        {FieldName: "Expired", HeadName: "Thời hạn sử dụng(Ngày)", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W200 },
        {FieldName: "Category", HeadName: "Danh mục", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W150 },
        {FieldName: "LevelCreatedUserChoose", HeadName: "Cấp xin duyệt giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W200 },
    ],
    Status: [
        "",
        "",
        "Bản nháp",
        "Chưa duyệt",
        "Đã duyệt",
        "Đã từ chối",
        "Đã gửi cho KH",
    ],
    ApplyFor: [
        "",
        "Bán mới",
        "Gia hạn",
        "Tất cả"
    ],
    DiscountType: [
        "",
        "Giảm %",
        "Giảm số tiền"
    ],
    Category: [
        "",
        "Cấp thuê bao/GPSD cho KH lẻ",
        "Cấp thuê bao/GPSD cho KH Dự án",
        "Dịch vụ đào tạo, Tư vấn triển khai",
        "Thay đổi GPSD và dịch vụ khác (sửa mẫu, nhập liệu, điều chỉnh mã số thuế, ...)",
        "Tài trợ các Trường/Trung tâm sử dụng đào tạo, miễn phí cho khách hàng triển khai thí điểm",
    ]
}

export default table