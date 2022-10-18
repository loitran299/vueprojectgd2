var Cookie = Cookie || {};

Cookie = {
    // Hàm thiết lập Cookie
    setCookie: (cname, cvalue, exdays) => {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    },

    // Hàm lấy Cookie
    getCookie: (cname) => {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    },
    deleteCookie: () => {
        document.cookie = "Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "Role=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "EmployeeID=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "EmployeeName=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "PositionName=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    },
    getUser() {
        let user = {
            Token: this.getCookie("Token"),
            Level: this.getCookie("Role"),
            EmployeeID: this.getCookie("EmployeeID"),
            EmployeeName: this.getCookie("EmployeeName"),
            PositionName: this.getCookie("PositionName"),
          }
          return user;
    }
}

export default Cookie