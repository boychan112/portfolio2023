$('.modal , .port-modal , .about-modal, .git-modal').hide();

$('.contact').click(function(){
    $('.modal').show();
    $('.modal-inner').fadeIn();
    $('.port-modal').show();
    $('.about-modal').show();
    $('.sujung-modal').hide();
    $('.hongbo-modal').hide();
    $('.license-modal').hide();
    $('.other-modal').hide();
    $('.school-modal').hide();
    $('.contact-modal').hide();
    $('.me-modal').hide();
})

$('.close-modal').click(function(){
    $('.modal').fadeOut();
})

function go_main(){
    $(document).ready(function(){
        var offset = $(".main-info").offset();
        $('html, body').animate({scrollTop: offset.top}, 500);
    });
}

function go_port(){
    $(document).ready(function(){
        var offset = $(".portfolio-info").offset();
        $('html, body').animate({scrollTop: offset.top}, 500);
    });
}

function go_about(){
    $(document).ready(function(){
        var offset = $(".about-info").offset();
        $('html, body').animate({scrollTop: offset.top}, 500);
    });
}

function go_git(){
    $(document).ready(function(){
        var offset = $(".git-info").offset();
        $('html, body').animate({scrollTop: offset.top}, 500);
    });
}

$('.sujung').click(function(){
    $('.modal').show();
    $('.port-modal').show();
    $('.about-modal').fadeIn();
    $('.modal-inner').hide();
    $('.port-modal').fadeIn();
    $('.sujung-modal').fadeIn();
    $('.hongbo-modal').hide();
    $('.license-modal').hide();
    $('.other-modal').hide();
    $('.school-modal').hide();
    $('.contact-modal').hide();
    $('.me-modal').hide();
})

$('.hongbo').click(function(){
    $('.modal').show();
    $('.modal-inner').hide();
    $('.port-modal').fadeIn();
    $('.about-modal').show();
    $('.sujung-modal').hide();
    $('.hongbo-modal').fadeIn();
    $('.license-modal').hide();
    $('.other-modal').hide();
    $('.school-modal').hide();
    $('.contact-modal').hide();
    $('.me-modal').hide();
})

$('.license').click(function(){
    $('.modal').show();
    $('.modal-inner').hide();
    $('.port-modal').fadeIn();
    $('.about-modal').show();
    $('.sujung-modal').hide();
    $('.hongbo-modal').hide();
    $('.license-modal').fadeIn();
    $('.other-modal').hide();
    $('.school-modal').hide();
    $('.contact-modal').hide();
    $('.me-modal').hide();
})

$('.other').click(function(){
    $('.modal').show();
    $('.modal-inner').hide();
    $('.port-modal').fadeIn();
    $('.about-modal').show();
    $('.sujung-modal').hide();
    $('.hongbo-modal').hide();
    $('.license-modal').hide();
    $('.other-modal').fadeIn();
    $('.school-modal').hide();
    $('.contact-modal').hide();
    $('.me-modal').hide();
})

$('.school').click(function(){
    $('.modal').show();
    $('.port-modal').show();
    $('.about-modal').fadeIn();
    $('.modal-inner').hide();
    $('.sujung-modal').hide();
    $('.hongbo-modal').hide();
    $('.license-modal').hide();
    $('.other-modal').hide();
    $('.school-modal').fadeIn();
    $('.contact-modal').hide();
    $('.me-modal').hide();
})

$('.contact2').click(function(){
    $('.modal').show();
    $('.port-modal').show();
    $('.about-modal').fadeIn();
    $('.modal-inner').hide();
    $('.sujung-modal').hide();
    $('.hongbo-modal').hide();
    $('.license-modal').hide();
    $('.other-modal').hide();
    $('.school-modal').hide();
    $('.contact-modal').fadeIn();
    $('.me-modal').hide();
})

$('.me').click(function(){
    $('.modal').show();
    $('.port-modal').show();
    $('.about-modal').fadeIn();
    $('.modal-inner').hide();
    $('.sujung-modal').hide();
    $('.hongbo-modal').hide();
    $('.license-modal').hide();
    $('.other-modal').hide();
    $('.school-modal').hide();
    $('.contact-modal').hide();
    $('.me-modal').fadeIn();
})

$('.me').click(function(){
    $('.modal').show();
    $('.port-modal').show();
    $('.about-modal').fadeIn();
    $('.modal-inner').hide();
    $('.sujung-modal').hide();
    $('.hongbo-modal').hide();
    $('.license-modal').hide();
    $('.other-modal').hide();
    $('.school-modal').hide();
    $('.contact-modal').hide();
    $('.me-modal').fadeIn();
})

$('.portfoliosite').click(function(){
    $('.modal').show();
    $('.port-modal').show();
    $('.about-modal').show();
    $('.git-modal').show();
    $('.modal-inner').hide();
    $('.sujung-modal').hide();
    $('.hongbo-modal').hide();
    $('.license-modal').hide();
    $('.other-modal').hide();
    $('.school-modal').hide();
    $('.contact-modal').hide();
    $('.me-modal').hide();
    $('.portfoliosite-modal').fadeIn();
    $('.sujunggwa-modal').hide();
    $('.schoolclass-modal').hide();
    $('.discord-modal').hide();
})

$('.sujunggwa').click(function(){
    $('.modal').show();
    $('.port-modal').show();
    $('.about-modal').show();
    $('.git-modal').show();
    $('.modal-inner').hide();
    $('.sujung-modal').hide();
    $('.hongbo-modal').hide();
    $('.license-modal').hide();
    $('.other-modal').hide();
    $('.school-modal').hide();
    $('.contact-modal').hide();
    $('.me-modal').hide();
    $('.portfoliosite-modal').hide();
    $('.sujunggwa-modal').fadeIn();
    $('.schoolclass-modal').hide();
    $('.discord-modal').hide();
})

$('.schoolclass').click(function(){
    $('.modal').show();
    $('.port-modal').show();
    $('.about-modal').show();
    $('.git-modal').show();
    $('.modal-inner').hide();
    $('.sujung-modal').hide();
    $('.hongbo-modal').hide();
    $('.license-modal').hide();
    $('.other-modal').hide();
    $('.school-modal').hide();
    $('.contact-modal').hide();
    $('.me-modal').hide();
    $('.portfoliosite-modal').hide();
    $('.sujunggwa-modal').hide();
    $('.schoolclass-modal').fadeIn();
    $('.discord-modal').hide();
})

$('.discord').click(function(){
    $('.modal').show();
    $('.port-modal').show();
    $('.about-modal').show();
    $('.git-modal').show();
    $('.modal-inner').hide();
    $('.sujung-modal').hide();
    $('.hongbo-modal').hide();
    $('.license-modal').hide();
    $('.other-modal').hide();
    $('.school-modal').hide();
    $('.contact-modal').hide();
    $('.me-modal').hide();
    $('.portfoliosite-modal').hide();
    $('.sujunggwa-modal').hide();
    $('.schoolclass-modal').hide();
    $('.discord-modal').fadeIn();
})

$('.close-modal').click(function(){
    $('.modal').fadeOut();
    $('.port-modal').fadeOut();
    $('.about-modal').fadeOut();
    $('.git-modal').fadeOut();
})