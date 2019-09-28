$(document).ready(menu);
$(window).on('scroll', fixed);

function fixed(){
    
    var st = $('html').scrollTop();
    
    if(st >= 70){
        $('.header-container').addClass('menu-fixed');
    }else if(st <= 70){
        $('.header-container').removeClass('menu-fixed');
    }
}



function menu(){

    $('.menu').on('click', baja);

}


function baja(){
    
    $('.enlaces').slideToggle();
}   
