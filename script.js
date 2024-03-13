$(function () {
    var btn = $('.btn_outcome_lose'),
        bg_1 = $('.bg-1_lose'),
        bg_2 = $('.bg-2_lose'),
        ang_a_LOSE = $('.ang-a_LOSE'),
        ang_b_LOSE = $('.ang-b_LOSE'),
        ang_c_LOSE = $('.ang-c_LOSE'),
        text_LOSE = $('.text_LOSE'),
        glow_LOSE = $('.glow_lose'),
        dots_LOSE = $('.dots_LOSE'),
        shine_LOSE = $('.shine_LOSE');

    var start = function () {
        ang_a_LOSE.removeClass('d-none').removeClass(ang_a_LOSE.data('in')).addClass(ang_a_LOSE.data('in'));
        ang_b_LOSE.removeClass('d-none').removeClass(ang_b_LOSE.data('in')).addClass(ang_b_LOSE.data('in'));
        ang_c_LOSE.removeClass('d-none').removeClass(ang_c_LOSE.data('in')).addClass(ang_c_LOSE.data('in'));
        bg_2.removeClass('d-none').removeClass(bg_2.data('out')).addClass(bg_2.data('in'));
        setTimeout(function () {
            bg_1.removeClass('d-none').removeClass(bg_1.data('out')).addClass(bg_1.data('in'));
        }, 500);
        btn.fadeOut(200);
    };

    btn.on('click', start);

    bg_2.off().on('animationend webkitAnimationEnd oAnimationEnd mozAnimationEnd', function () {
        setTimeout(function () {
            bg_2.fadeOut('fast').addClass('d-none').removeClass(bg_2.data('in'));
            text_LOSE.removeClass('d-none').addClass(text_LOSE.data('in'));
        }, 600);
    });

    text_LOSE.off().on('animationend webkitAnimationEnd oAnimationEnd mozAnimationEnd', function () {
        setTimeout(function () {
            text_LOSE.addClass('txt-ind');
            glow_LOSE.removeClass('d-none').addClass(glow_LOSE.data('in'));
            dots_LOSE.removeClass('d-none');
            shine_LOSE.removeClass('d-none').addClass(shine_LOSE.data('in'));
        }, 50);
    });

    glow_LOSE.off().on('animationend webkitAnimationEnd oAnimationEnd mozAnimationEnd', function () {
        bg_2.removeAttr('style').removeClass('d-none').addClass(bg_2.data('out'));
    });

    shine_LOSE.off().on('animationend webkitAnimationEnd oAnimationEnd mozAnimationEnd', function () {
        setTimeout(function () {
            dots_LOSE.fadeOut(300);
            glow_LOSE.fadeOut(500);
        }, 1000);
        setTimeout(function () {
            shine_LOSE.fadeOut(400);
            bg_1.removeClass(bg_1.data('in')).addClass(bg_1.data('out'));
        }, 2000);
        setTimeout(function () {
            text_LOSE.removeClass(text_LOSE.data('in')).addClass(text_LOSE.data('out'));
            setTimeout(function () {
                $(document).trigger('animate:reset');
            }, 500);
        }, 2500);
    });

    $(document).on('animate:reset', function () {
        $('.el').each(function () {
            $(this).addClass('d-none').removeClass($(this).data('in')).removeClass($(this).data('out')).removeAttr('style');
        });
        text_LOSE.removeClass('txt-ind');
        btn.fadeIn(200);
    });
});

const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["star"],
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
  };
  
  function shoot() {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    });
  
    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
  }
  
  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);


// TS for particle
