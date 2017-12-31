$(document).ready(function() {
    function getPrice() {
        var xrpPrice = $("#xrpPrice");
        $.getJSON('//data.ripple.com/v2/exchange_rates/XRP/USD+rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B', function() {
        }).done(function(data) {
            if (xrpPrice.text() !== data.rate) {
                console.log('updating...')
                xrpPrice.text(data.rate);
                xrpPrice.addClass('highlight');
                setTimeout(function() {
                    xrpPrice.removeClass('highlight');
                }, 2000)
            }
            pollXrp();
        }).fail(function() {
            console.log( "error. Will try again soon");
            xrpPrice.text("Failed to retrieve Market Value...Please Wait...Attempting reload");
            pollXrp();
        });

        var xrpBTC = $("#xrpBTC");

        $.getJSON('//data.ripple.com/v2/exchange_rates/XRP/BTC+rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B', function() {
        }).done(function(data) {
            if (xrpBTC.text() !== data.rate) {
                console.log('updating...');
                xrpBTC.text(data.rate);
                xrpBTC.addClass('highlight');
                setTimeout(function() {
                    xrpBTC.removeClass('highlight');
                }, 2500)
            }
        }).fail(function() {
            console.log( "error. Will try again soon");
            xrpBTC.text("Failed to retrieve Market Value...Please Wait...Attempting reload");
        });

        var btcPrice = $("#btcPrice");

        $.getJSON('//api.coindesk.com/v1/bpi/currentprice.json', function() {
        }).done(function(data) {
            console.log(data.bpi.USD.rate);
            if (btcPrice.text() !== data.bpi.USD.rate) {
                console.log('updating...');
                btcPrice.text(data.bpi.USD.rate);
                btcPrice.addClass('highlight');
                setTimeout(function() {
                    btcPrice.removeClass('highlight');
                }, 2500)
            }

        }).fail(function() {
            console.log( "error. Will try again soon");
            btcPrice.text("Failed to retrieve Market Value...Please Wait...Attempting reload");

        });
    }

    function pollXrp() {
        setTimeout(function() {
            getPrice();
        }, 30000)
    }

    getPrice();
});


