$('.portfoliosite').click(function(){
    $('.modal').fadeIn();
    $('.portfoliosite-modal').fadeIn();
    $('.sujunggwa-modal').hide();
    $('.schoolclass-modal').hide();
    $('.discord-modal').hide();
})

$('.sujunggwa').click(function(){
    $('.modal').fadeIn();
    $('.portfoliosite-modal').hide();
    $('.sujunggwa-modal').fadeIn();
    $('.schoolclass-modal').hide();
    $('.discord-modal').hide();
})

$('.schoolclass').click(function(){
    $('.modal').fadeIn();
    $('.portfoliosite-modal').hide();
    $('.sujunggwa-modal').hide();
    $('.schoolclass-modal').fadeIn();
    $('.discord-modal').hide();
})

$('.discord').click(function(){
    $('.modal').fadeIn();
    $('.portfoliosite-modal').hide();
    $('.sujunggwa-modal').hide();
    $('.schoolclass-modal').hide();
    $('.discord-modal').fadeIn();
})

$('.close-modal').click(function(){
    $('.modal').fadeOut();
})