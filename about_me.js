$('.school').click(function(){
    $('.modal').fadeIn();
    $('.school-modal').fadeIn();
    $('.contact-modal').hide();
    $('.me-modal').hide();
})

$('.contact').click(function(){
    $('.modal').fadeIn();
    $('.sujung-modal').hide();
    $('.contact-modal').fadeIn();
    $('.me-modal').hide();
})

$('.me').click(function(){
    $('.modal').fadeIn();
    $('.sujung-modal').hide();
    $('.contact-modal').hide();
    $('.me-modal').fadeIn();
})

$('.close-modal').click(function(){
    $('.modal').fadeOut();
})