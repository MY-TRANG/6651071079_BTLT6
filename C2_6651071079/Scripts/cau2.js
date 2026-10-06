// CÁCH 1: Định nghĩa hàm getFormvalue(event) như khai báo ở onsubmit trong HTML
function getFormvalue(e) {
    // Ngăn chặn hành vi nộp form tự động làm tải lại trang
    if (e && e.preventDefault) {
        e.preventDefault();
    }

    // Sử dụng jQuery selector để lấy giá trị (.val()) từ 2 ô input theo thuộc tính name
    var firstName = $('input[name="fname"]').val();
    var lastName = $('input[name="lname"]').val();

    // Hiển thị thông báo
    alert("First name: " + firstName + "\nLast name: " + lastName);
}
