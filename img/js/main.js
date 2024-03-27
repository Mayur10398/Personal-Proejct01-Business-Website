// home slider

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    items: 1,
    navText: ["<img src='img/prev.svg'>", "<img src='img/next.svg'>"],
})


// Show the first tab and hide the rest
$('#tabs-nav li:last-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:last').show();

// Click function
$('#tabs-nav li').click(function() {
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});


function openNav() {
    document.getElementById("slideshow").style.width = "250px";
}

function closeNav() {
    document.getElementById("slideshow").style.width = "0";
}