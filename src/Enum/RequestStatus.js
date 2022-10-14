

var Status = Status || {};

Status = {
    Deleted: 0,

    All: 1,

    // Bản nháp
    Draft: 2,

    // chưa duyệt
    NotApproved : 3,

    //đã duyệt
    Approved : 4,

    //đã từ chối
    Refused : 5,

    //Đã gửi cho KH
    Sended : 6,
}

export default Status