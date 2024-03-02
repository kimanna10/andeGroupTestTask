$(".hamburger").click(function () {
    $(".wrapper").toggleClass("collapse");
});

$(document).ready(function () {
    var dropdownToggle = $('#dropdownToggle');
    var dropdownMenu = $('#dropdownMenu');

    dropdownToggle.click(function (e) {
        e.preventDefault(); 
        if (!dropdownMenu.is(":visible")) {
            dropdownMenu.slideDown(300); 
        } else {
            dropdownMenu.slideUp(300); 
        }
    });


    $(document).mouseup(function (e) {
        if (!dropdownMenu.is(e.target) && dropdownMenu.has(e.target).length === 0 && !dropdownToggle.is(e.target)) {
            dropdownMenu.slideUp(300);
        }
    });
});
