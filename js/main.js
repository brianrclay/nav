//Left nav

$('.delivery-item').click(function(){
    $('.nav-wrapper').addClass('show-delivery');
    $('.page-content').addClass('show-delivery');
})

$('#back-to-home, #back-to-home2').click(function(){
    $('.nav-wrapper').removeClass('show-delivery');
    $('.page-content').removeClass('show-delivery');
})

$('.collapse-nav, .expand-border').click(function(){
    $('.nav-wrapper').toggleClass('collapsed');
    $('.nav-item').toggleClass('collapsed');
    $('body').toggleClass('nav-collapsed')
});

//Dropdowns
$(document).click(function(){
    $(".dropdown-menu").removeClass('show');
    $('.account-switcher').removeClass('show-menu');
    $('.profile-dropdown').removeClass('show-menu');
    $('.search-dropdown').removeClass('show-menu');
    $('.summary-dropdown').removeClass('show-menu');
    $('.main-nav-dropdown').removeClass('show-menu');
});

$(".dropdown-menu, .dropdown-trigger, .search, .service-summary-trigger, .main-nav-trigger").click(function(e){
    e.stopPropagation();
});

$('.account-switcher').click(function(){
    $('.account-menu').toggleClass('show');
    $('.account-switcher').toggleClass('show-menu');
})

$('.profile-dropdown').click(function(){
    $('.profile-menu').toggleClass('show');
    $('.profile-dropdown').toggleClass('show-menu');
})

$('.search').click(function(){
    $('.search-dropdown').toggleClass('show');
    setTimeout(function() { $('#search-input').focus() }, 100);
})

$('.service-summary-trigger').click(function(){
    $('.summary-dropdown').toggleClass('show');
    $('.service-summary-trigger').toggleClass('show-menu');
})

$('.main-nav-trigger').click(function(){
    $('.main-nav-dropdown').toggleClass('show');
    $('.main-nav-trigger').toggleClass('show-menu');
})

//Tooltips

tippy(
    '.nav-item.home-item', {
        content:'Home',
        placement: 'right',
        animation: 'shift-away',
        delay: 50
    }
)
tippy(
    '.nav-item.delivery-item', {
        content:'Delivery',
        placement: 'right',
        animation: 'shift-away',
        delay: 50
    }
)
tippy(
    '.nav-item.compute-item', {
        content:'Compute',
        placement: 'right',
        animation: 'shift-away',
        delay: 50
    }
)
tippy(
    '.nav-item.security-item', {
        content:'Security',
        placement: 'right',
        animation: 'shift-away',
        delay: 50
    }
)
tippy(
    '.nav-item.stats-item', {
        content:'Stats',
        placement: 'right',
        animation: 'shift-away',
        delay: 50
    }
)
tippy(
    '.nav-item.resources-item', {
        content:'Resources',
        placement: 'right',
        animation: 'shift-away',
        delay: 50
    }
)
tippy(
    '.nav-item.marketplace-item', {
        content:'Marketplace',
        placement: 'right',
        animation: 'shift-away',
        delay: 50
    }
)
tippy(
    '.nav-item.service-summary-item', {
        content:'Service summary',
        placement: 'right',
        animation: 'shift-away',
        delay: 50
    }
)
tippy(
    '.nav-item.service-config-item', {
        content:'Service config',
        placement: 'right',
        animation: 'shift-away',
        delay: 50
    }
)