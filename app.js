$(document).ready(function() {
    function getPrice() {
        var xrpPrice = $("#xrpPrice");
        $.getJSON('//data.ripple.com/v2/exchange_rates/XRP/BTC+rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B', function() {
        }).done(function(data) {
            if (xrpPrice.text() !== data.rate) {
                console.log('updating...')
                xrpPrice.text(data.rate);
                xrpPrice.addClass('highlight');
                setTimeout(function() {
                    xrpPrice.removeClass('highlight');
                }, 2500)
            }
            pollXrp();
        }).fail(function() {
            console.log( "error. Will try again soon");
            xrpPrice.text("Failed to retrieve Market Value...Please Wait...Attempting reload");
            pollXrp();
        });
    }

    function pollXrp() {
        setTimeout(function() {
            getPrice();
        }, 30000)
    }

    getPrice();
});


