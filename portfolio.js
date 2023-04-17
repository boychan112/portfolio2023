$('.sujung').click(function(){
    $('.modal').fadeIn();
    $('.sujung-modal').fadeIn();
    $('.hongbo-modal').hide();
    $('.license-modal').hide();
})

$('.hongbo').click(function(){
    $('.modal').fadeIn();
    $('.sujung-modal').hide();
    $('.hongbo-modal').fadeIn();
    $('.license-modal').hide();
})

$('.license').click(function(){
    $('.modal').fadeIn();
    $('.sujung-modal').hide();
    $('.hongbo-modal').hide();
    $('.license-modal').fadeIn();
})

$('.close-modal').click(function(){
    $('.modal').fadeOut();
})