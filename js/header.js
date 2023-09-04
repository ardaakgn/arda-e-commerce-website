function sidebarFunc(){
    //! Home sidebar
const btnOpenSidebar = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar");
const closesidebar = document.querySelector("#close-sidebar");
btnOpenSidebar.addEventListener("click", function(){
    sidebar.style.left="0px";
    sidebar.style.transition="0.5s ease all";
})

closesidebar.addEventListener("click", function(){
    sidebar.style.left="-100%";
});
// click outside
document.addEventListener("click", function(event){
    if(!event.composedPath().includes(sidebar) && !event.composedPath().includes(btnOpenSidebar)){
        sidebar.style.left="-100%";    
    }
});

//! Homde sidebar  //
}


function searchModalFunc(){
    //! search button
const btnOpenSearch =document.querySelector(".search-button");
const modalSearch = document.getElementsByClassName("modal-search");
const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");
const btnCloseSearch = document.querySelector("#close-search");

btnOpenSearch.addEventListener("click", function(){
    modalSearch[0].style.visibility="visible";    
    modalSearch[0].style.opacity="1";
});

btnCloseSearch.addEventListener("click", function(){
    modalSearch[0].style.visibility="hidden";
    modalSearch[0].style.opacity="0";
});

/* click outside start */
document.addEventListener("click", function(event){
    if(!event.composedPath().includes(modalSearchWrapper[0]) &&
       !event.composedPath().includes(btnOpenSearch)){
        modalSearch[0].style.visibility="hidden";
        modalSearch[0].style.opacity="0";
    }
});
//! search button //
}


function headerFunc(){
    sidebarFunc();
    searchModalFunc();
}


export default headerFunc();