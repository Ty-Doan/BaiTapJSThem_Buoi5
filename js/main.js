function calcTax() {
    var e = document.getElementById("inputName2").value,
        n = document.getElementById("inputSalary").value - 4e6 - 16e5 * document.getElementById("inputUser").value,
        t = 0;
    n > 0 && n <= 6e7 ?
        (t = 0.05 * n) :
        n > 6e7 && n <= 12e7 ?
        (t = 0.1 * n) :
        n > 12e7 && n <= 21e7 ?
        (t = 0.15 * n) :
        n > 21e7 && n <= 384e6 ?
        (t = 0.2 * n) :
        n > 384e6 && n <= 624e6 ?
        (t = 0.25 * n) :
        n > 624e6 && n <= 96e7 ?
        (t = 0.3 * n) :
        n > 96e7 ?
        (t = 0.35 * n) :
        alert("Số tiền thu nhập không hợp lệ"),
        (t = new Intl.NumberFormat("vn-VN").format(t)),
        (document.getElementById("txtTax").innerHTML = "Họ tên: " + e + "; Tiền thuế thu nhập cá nhân: " + t + " VND");
}

function disableInput() {
    var e = document.getElementById("selCustomer").value;
    document.getElementById("inputConnect").style.display = "company" == e ? "block" : "none";
}

function tinhTienCap() {
    var e = document.getElementById("selCustomer").value,
        n = document.getElementById("inputID").value,
        t = document.getElementById("inputChanel").value,
        u = document.getElementById("inputConnect").value,
        c = 0;
    "company" == e ? (c = tinhTong(15, 75, 50, t, u, 5)) : "user" == e ? (c = tinhTong(4.5, 20.5, 7.5, t, 0, 0)) : alert("Hãy chọn loại khách hàng"),
        (document.getElementById("txtNet").innerHTML = "Mã khách hàng: " + n + "; Tiền cáp: " + new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(c));
}

function tinhTong(e, n, t, u, c, l) {
    var m = e + n + t * u;
    return c > 10 && (m += (c - 10) * l), m;
}
document.addEventListener(
        "contextmenu",
        function(e) {
            e.preventDefault();
        }, !1
    ),
    (document.onkeydown = function(e) {
        return 123 != (e = e || window.event).keyCode && (!e.ctrlKey || !e.shiftKey || 73 != e.keyCode) && void 0;
    });

const kw_1 = 500,
    kw_2 = 650,
    kw_3 = 850,
    kw_4 = 1100,
    kw_5 = 1300;
(document.getElementById("btnTax").onclick = calcTax), (document.getElementById("btnNet").onclick = tinhTienCap);