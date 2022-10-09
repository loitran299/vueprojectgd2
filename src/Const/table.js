import TableEnum from "@/Enum/RequestTable"
var table = table || {};

table = {
    Employee: [
        { HeadName: "Tình trạng xử lý", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W150 },
        { HeadName: "Sản phẩm", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Ứng dụng (Thuộc AMISPlatform)", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W220 },
        { HeadName: "Đối tượng", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W150 },
        { HeadName: "Loại giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W150 },
        { HeadName: "Số % giảm", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Số tiền trước giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W180 },
        { HeadName: "số tiền giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Số tiền SGG", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Loại tặng tháng sử dụng", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W220 },
        { HeadName: "Số tháng tối thiểu để được tặng", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W240 },
        { HeadName: "Số năm tỉ lệ để được tặng", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Số tháng tặng", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Lý do", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { HeadName: "Tên khách hàng", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { HeadName: "Địa chỉ", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { HeadName: "MST/CMT", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Số điện thoại", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Email", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { HeadName: "Mã CTV", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Ngày yêu cầu", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        { HeadName: "Người yêu cầu", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { HeadName: "Ngày duyệt", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        { HeadName: "Người duyệt", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { HeadName: "Ngày từ chối", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        { HeadName: "Người từ chối", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { HeadName: "Lý do từ chối", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { HeadName: "Mã giảm giá", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Ngày bắt đầu", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        { HeadName: "Ngày hết hạn", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        { HeadName: "Thời hạn sử dụng(Ngày)", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W200 },
        { HeadName: "Danh mục", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W150 },
        { HeadName: "Cấp xin duyệt giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W200 },
    ],
    Manager: [
        { HeadName: "Tình trạng xử lý", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W150 },
        { HeadName: "Cấp xin duyệt giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W200 },
        { HeadName: "Người yêu cầu", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { HeadName: "Phòng ban", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { HeadName: "Sản phẩm", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Ứng dụng (Thuộc AMISPlatform)", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W220 },
        { HeadName: "Đối tượng", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W150 },
        { HeadName: "Loại giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W150 },
        { HeadName: "Số % giảm", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Tiền giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Loại tặng tháng sử dụng", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W220 },
        { HeadName: "Số tháng tối thiểu để được tặng", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W240 },
        { HeadName: "Số năm tỉ lệ để được tặng", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Số tháng tặng", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Số tiền trước giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W180 },
        { HeadName: "số tiền giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Số tiền SGG", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Lý do", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { HeadName: "Tên khách hàng", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { HeadName: "Địa chỉ", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { HeadName: "MST/CMT", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Số điện thoại", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Email", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { HeadName: "Mã CTV", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Ngày yêu cầu", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        { HeadName: "Ngày duyệt", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        { HeadName: "Người duyệt", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { HeadName: "Ngày từ chối", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        { HeadName: "Người từ chối", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { HeadName: "Lý do từ chối", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { HeadName: "Ngày lập yêu cầu", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W150 },
        { HeadName: "Người lập yêu cầu", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W300 },
        { HeadName: "Mã giảm giá", ButtonType: TableEnum.FilterButton.Multi, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W150 },
        { HeadName: "Ngày bắt đầu", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        { HeadName: "Ngày hết hạn", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputDate, Width: TableEnum.Width.W120 },
        { HeadName: "Thời hạn sử dụng(Ngày)", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.InputText, Width: TableEnum.Width.W200 },
        { HeadName: "Danh mục", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W150 },
        { HeadName: "Cấp xin duyệt giảm giá", ButtonType: TableEnum.FilterButton.Equal, InputType: TableEnum.FilterType.Combobox, Width: TableEnum.Width.W200 },
    ]
}

export default table