$('.sujung').click(function(){
    $('.modal').fadeIn();
    $('.sujung-modal').fadeIn();
    $('.hongbo-modal').hide();
})

$('.hongbo').click(function(){
    $('.modal').fadeIn();
    $('.sujung-modal').hide();
    $('.hongbo-modal').fadeIn();
})

$('.close-modal').click(function(){
    $('.modal').fadeOut();
})