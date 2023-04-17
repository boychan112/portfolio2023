$('.sujung').click(function(){
    $('.modal').fadeIn();
    $('.sujung-modal').fadeIn();
    $('.hongbo-modal').hide();
    $('.licensemodal').hide();
})

$('.hongbo').click(function(){
    $('.modal').fadeIn();
    $('.sujung-modal').hide();
    $('.hongbo-modal').fadeIn();
    $('.licensemodal').hide();
})

$('.license').click(function(){
    $('.modal').fadeIn();
    $('.sujung-modal').hide();
    $('.hongbo-modal').hide();
    $('.licensemodal').fadeIn();
})

$('.close-modal').click(function(){
    $('.modal').fadeOut();
})