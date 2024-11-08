var menuIcon = document.querySelector(".menu");
var sidebar = document.querySelector(".sidebar");
var main_content = document.querySelector(".main");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    main_content.classList.toggle("large-main");
};