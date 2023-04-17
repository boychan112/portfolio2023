$('.sujung').click(function(){
    $('.modal').fadeIn();
    $('.sujungmodal').fadeIn();
    $('.hongbomodal').hide();
    $('.licensemodal').hide();
})

$('.hongbo').click(function(){
    $('.modal').fadeIn();
    $('.sujungmodal').hide();
    $('.hongbomodal').fadeIn();
    $('.licensemodal').hide();
})

$('.license').click(function(){
    $('.modal').fadeIn();
    $('.sujungmodal').hide();
    $('.hongbomodal').hide();
    $('.licensemodal').fadeIn();
})

$('.closemodal').click(function(){
    $('.modal').fadeOut();
})