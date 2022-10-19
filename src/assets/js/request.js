// import TableEnum from "@/Enum/RequestTable"
import TableConst from "@/Const/Table"
import DateFunc from "@/assets/js/date"

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

var Request = Request || {};

Request = {
    Status: (request) => {
        return TableConst.Status[request.Status];
    },
    Product: (request) => {
        return request.ProductName;
    },
    Platform: (request) => {
        if(!request.EmployeeID) return "";
        return "Tất cả";
    },
    ApplyFor: (request) => {
        return TableConst.ApplyFor[request.ApplyFor];
    },
    DiscountType: (request) => {
        return TableConst.DiscountType[request.DiscountType];
    },
    PercentageReduction: (request) => {
        if(!request.PercentageReduction) return 0;
        return `${request.PercentageReduction}`;
    },
    PriceBefore: (request) => {
        return formatter.format(request.PriceBefore);
    },
    DiscountAmount: (request) => {
        return formatter.format(request.ReductionAmount);
    },
    AmountAfterDiscount: (request) => {
        let priceBefore = parseInt(request.PriceBefore);
        let percen = parseInt(request.PercentageReduction);
        let priceReduc = parseInt(request.ReductionAmount);
        if(!percen){
            percen = 0;
        }
        if(!priceReduc){
            priceReduc = 0;
        }
        let result = priceBefore - priceReduc - (priceBefore*(percen/100));
        return formatter.format(result);
    },
    GilfMonthUse: () => {
        return "Theo tỉ lệ năm"
    },
    MinimumMonths: () => {
        return 0;
    },
    YearsRate: () => {
        return 0;
    },
    NumberMonthsGiven: () => {
        return 0;
    },
    Reason: (request) => {
        return request.Reason;
    },
    CustomerName: (request) => {
        return request.CustomerName;
    },
    Address: (request) => {
        return request.Address;
    },
    CustomerIdentity: (request) => {
        return request.CustomerIdentity;
    },
    PhoneNumber: (request) => {
        return request.PhoneNumber;
    },
    Email: (request) => {
        return request.Email;
    },
    CollaboratorCode: (request) => {
        return request.CollaboratorCode;
    },
    /// ---------------------
    DateRequest: (request) => {
        if(!request.SentDate){
            return "";
        }
        return DateFunc.formatDate(request.SentDate);
    },
    /// todo
    EmployeeRequest: (request) => {
        if(!request.SentBy){
            return "";
        }
        return request.SentBy;
    },
    DateApprovel: (request) => {
        if(!request.ApprovedDate){
            return "";
        }
        return DateFunc.formatDate(request.ApprovedDate);
    },
    EmployeeApprovel: (request) => {
        if(!request.ApprovedBy){
            return "";
        }
        return request.ApprovedBy;
    },
    DateRefuse: () => {
        return "todo";
    },
    EmployeeRefuse: () => {
        return "todo"
    },
    ReasonForRefusal: (request) => {
        if(!request.ReasonForRefusal){
            return "";
        }
        return request.ReasonForRefusal;
    },
    VoucherCode: (request) => {
        if(!request.VoucherCode){
            return '';
        }
        return request.VoucherCode;
    },
    StartDate: (request) => {
        return DateFunc.formatDate(request.StartDate);
    },
    ExpiredDate: (request) => {
        return DateFunc.formatDate(request.ExpiredDate);
    },
    Expired: (request) => {
        let start = new Date(request.StartDate);
        let Expired = new Date(request.ExpiredDate);
        return DateFunc.getDayOfTime(start, Expired);
    },
    Category: (request) => {
        return TableConst.Category[request.Category];
    },
    LevelCreatedUserChoose: (request) => {
        if(request.LevelCreatedUserChoose == 10){
            return "Ban GĐ TTKD (HAN, HCM)/ TP KD (DNG, BMT, CTH)/ TP GHCN khối"
        }else if(request.LevelCreatedUserChoose == 15){
            return "Ban GĐ Văn phòng"
        }else {
            return "Ban Tổng giám đốc"
        }
    },

    Department: () => {
        return "KVKD MISA melnvoice 5";
    },

    CreatedDate: (request) => {
        return DateFunc.formatDate(request.CreatedDate);
    },
    EmployeeCreated: (request) => {
        if(!request.CreatedBy){
            return "";
        }
        return request.CreatedBy;
    },

    DiscountFor: (request) => {
        return request.DiscountFor;
    }
}

export default Request