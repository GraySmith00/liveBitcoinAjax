const btn = document.querySelector('#btn');
const priceDisplay = document.querySelector('#price');
const currency = "USD"

btn.addEventListener('click', function() {
    const XHR = new XMLHttpRequest();
    
    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 && XHR.status == 200) {
           const data = JSON.parse(XHR.responseText)
           const bitPrice = (data.bpi[currency].rate_float).toFixed(2);
           priceDisplay.innerText = bitPrice + " " + currency;
        }
    }
    
    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
});