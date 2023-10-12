$(function () {
    var executed1 = false;
    var executed2 = false;
    var executed3 = false;

    $('.act_in').waypoint(function () {
        var targetNumber = $('.counter').attr('data-rate');
        if (!executed1) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.counter').animateNumber({
                number: targetNumber,
                numberStep: comma_separator_number_step
            }, 1500);
            executed1 = true;
        }
    },
        {
            offset: '80%'
        }
    );

    $('.act_in').waypoint(function () {
        var targetNumber = $('.counter2').attr('data-rate');
        if (!executed2) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.counter2').animateNumber({
                number: targetNumber,
                numberStep: comma_separator_number_step
            }, 1500);
            executed2 = true;
        }
    },
        {
            offset: '80%'
        }
    );

    $('.act_in').waypoint(function () {
        var targetNumber = $('.counter3').attr('data-rate');
        if (!executed3) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.counter3').animateNumber({
                number: targetNumber,
                numberStep: comma_separator_number_step
            }, 1500);
            executed3 = true;
        }
    },
        {
            offset: '80%'
        }
    );
});
