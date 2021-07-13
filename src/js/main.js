$(document).ready(function(){

    const team = $('#team')
    team.owlCarousel({
        items: 4,
        loop: true,
        center:true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    const leads = $('#leads')
    leads.owlCarousel({
        items: 2,
        loop:true,
        center: true,
        margin: 70,
        dots: false,
    });

    $('.owl-next').click(function () {
        leads.trigger('next.owl.carousel');
    });

    $('.owl-prev').click(function () {
        leads.trigger('prev.owl.carousel',[300]);
    });
    const effective = $('#effective')
    effective.owlCarousel({
        items: 1.2,
        loop:true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
})
