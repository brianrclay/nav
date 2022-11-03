$('.delivery-item').click(function(){
    $('.nav-wrapper').addClass('show-delivery');
    $('.page-content').addClass('show-delivery');
})

$('.back-to-home').click(function(){
    $('.nav-wrapper').removeClass('show-delivery');
    $('.page-content').removeClass('show-delivery');
})