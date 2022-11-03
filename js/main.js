$('.delivery-item').click(function(){
    $('.nav-wrapper').addClass('show-delivery');
    $('.page-content').addClass('show-delivery');
})

$('.back-to-home').click(function(){
    $('.nav-wrapper').removeClass('show-delivery');
    $('.page-content').removeClass('show-delivery');
})

$('.collapse-nav').click(function(){
    $('.nav-wrapper').toggleClass('collapsed');
    $('.nav-item').toggleClass('collapsed');
    $('body').toggleClass('nav-collapsed')
})

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
        content:'Service Summary',
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