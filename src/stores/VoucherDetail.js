var VoucherDetail = VoucherDetail || {}

VoucherDetail = {
    NewRequest: {
        ProductID: "",
        ApplyFor: 1,
        StartDate: new Date(),
        ExpiredDate: nextDay(),
        DiscountFor: 3,
        Status: 1,
        DiscountType: 2,
        PriceBefore: null,
        Reason: null,
        Category: null,
        LevelCreatedUserChoose: 10,
        EmployeeIDCreatedUserChoose: null,
        CollaboratorCode: null,
        CustomerIdentity: null,
        CustomerName: null,
        Address: null,
        BudgetCode: null,
        EstablishDate: null,
        ContactBy: null,
        PhoneNumber: null,
        Email: null,
    }
}

function nextDay() {
    var date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
}

export default VoucherDetail