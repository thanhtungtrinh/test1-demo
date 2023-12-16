const loginform = document.getElementById("login-form");

loginform.addEventListener("submit", function(){
    const hovaten = document.getElementById("hovaten").value;
    const tuoi = document.getElementById("tuoi").value;
    alert("Họ và tên: " + hovaten + "\nTuổi: " + tuoi);
    document.write(hovaten + " " + tuoi);
});

document.getElementById("nutdangnhap").addEventListener("mousemove", function(){
    document.getElementById("nutdangnhap").innerHTML = "MẤT NICK";
})

document.getElementById("nutdangnhap").addEventListener("mouseout", function(){
    document.getElementById("nutdangnhap").innerHTML = "Đăng nhập";
})


