// Đảm bảo DOM đã load xong mới thực thi code jQuery
$(document).ready(function () {

    // Bắt sự kiện click vào nút #jsstyle bằng jQuery
    $('#jsstyle').click(function () {

        // 1. Lấy giá trị từ các ô tùy chỉnh bằng jQuery
        var selectedFontSize = $('#fontSizeSelect').val();
        var selectedFontFamily = $('#fontFamilySelect').val();
        var selectedColor = $('#colorPicker').val();

        // 2. Thay đổi style cho đoạn văn bản #text bằng hàm .css() của jQuery
        $('#text').css({
            'font-size': selectedFontSize,
            'font-family': selectedFontFamily,
            'color': selectedColor
        });

    });

});

// Cách 2: Nếu đề bài bắt buộc dùng tên hàm js_style() với onclick="js_style()" như trong hình
function js_style() {
    var selectedFontSize = $('#fontSizeSelect').val();
    var selectedFontFamily = $('#fontFamilySelect').val();
    var selectedColor = $('#colorPicker').val();

    $('#text').css({
        'font-size': selectedFontSize,
        'font-family': selectedFontFamily,
        'color': selectedColor
    });
}