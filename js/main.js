
(function ($) {
"use strict"; 


 // mailchimp start
    if ($('.mailchimp').length > 0) {
        /*  MAILCHIMP  */
        $('.mailchimp').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "https://ridwansuhel.us1.list-manage.com/subscribe/post?u=c0d438ded5305bd2ad136f4b5&amp;id=af00bf47c9" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('.subscription-success').html('<i class="fa fa-check"></i><br/>' + resp.msg).fadeIn(1000);
            // $('.download-btn').html("<a class='donloadnow' href='http://ridwansuhel.com' target='_blank'>Download Your Book</a>").fadeIn(1000);
            // $('.subscription-success').html('<i class="fa fa-check"></i><br/>' + resp.msg + "<a class='donloadnow' href='http://ridwansuhel.com'>Download Your Book</a>").fadeIn(1000);
            $('.subscription-error').fadeOut(500);

        } else if (resp.result === 'error') {
            $('.subscription-error').html('<i class="fa fa-times"></i><br/>' + resp.msg).fadeIn(1000);
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter a value',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };

	
})(jQuery);	