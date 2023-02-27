let Math =prompt("Iltimos Summangizdi kriting ");


let a = 500;
let b = 250;
let c = 120;

var moneyusd = 10650.34;
var moneyyevro = 11650.03;

let currency_usd =((a + b) * moneyusd);
let currency_yevro =(c * moneyyevro);

let repoert = currency_usd + currency_yevro;
var saytTitle = document.querySelector("#title");

if (Math>=repoert) {
    saytTitle.textContent ="Davay Alisher dubaida maza pqke "
    console.log(" Davay Alisher dubaida maza pqke ")
} else if(Math<repoert) {
    saytTitle.textContent=" Sizda yetarli mablag' mavjud ems biroz sabir qiling."
    console.log (" Sizda yetarli mablag' mavjud ems biroz sabir qiling. ")
}