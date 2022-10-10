// import TableEnum from "@/Enum/RequestTable"
import TableConst from "@/Const/table"

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  // Format ngày tháng
const formatDate = dateSrc => {
    let date = new Date(dateSrc),
        year = date.getFullYear().toString(),
        month = (date.getMonth() + 1).toString().padStart(2, '0'),
        day = date.getDate().toString().padStart(2, '0');

    return `${day}/${month}/${year}`;
}

const get_day_of_time = (d1, d2) => {
    let ms1 = d1.getTime();
    let ms2 = d2.getTime();
    return Math.ceil((ms2 - ms1) / (24*60*60*1000));
};

var Request = Request || {};

Request = {
    Status: (request) => {
        return TableConst.Status[request.Status];
    },
    Product: (request) => {
        return request.ProductName;
    },
    Platform: () => {
        return "Tất cả";
    },
    ApplyFor: (request) => {
        return TableConst.ApplyFor[request.ApplyFor];
    },
    DiscountType: (request) => {
        return TableConst.DiscountType[request.DiscountType];
    },
    PercentageReduction: (request) => {
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
        if(!request.DateRequest){
            return "";
        }
        return formatDate(request.DateRequest);
    },
    /// todo
    EmployeeRequest: () => {
        return "todo";
    },
    DateApprovel: () => {
        return "todo";
    },
    EmployeeApprovel: () => {
        return "todo";
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
        return formatDate(request.StartDate);
    },
    ExpiredDate: (request) => {
        return formatDate(request.ExpiredDate);
    },
    Expired: (request) => {
        let start = new Date(request.StartDate);
        let Expired = new Date(request.ExpiredDate);
        return get_day_of_time(start, Expired);
    },
    Category: (request) => {
        return request.Category;
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
        return formatDate(request.CreatedDate);
    },
    EmployeeCreated: () => {
        return "todo"
    }
}

export default Request