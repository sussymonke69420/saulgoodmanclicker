// Values
var money = 0;
var money_per_second = 0;

var businesses = 0;
var los_pollos_hermanos = 0;

// Elements
const moneyLabel = document.getElementById("moneyLabel");
const businessLabel = document.getElementById("businessLabel");
const clicker = document.getElementById("clicker");
const shop_los_pollos_hermanos = document.getElementById("los-pollos-hermanos");

// Functions
function addMoney(amount) {
    money += amount;
    moneyLabel.innerHTML = money;
}

function subtractMoney(amount) {
    money -= amount;
    moneyLabel.innerHTML = money;
}

function addBusiness(business, cost, mps) {
    businesses += 1;
    business += 1;
    money_per_second += mps
    subtractMoney(cost)
    businessLabel.innerHTML = businesses;
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function purchase(item) {
    if (item === "los-pollos-hermanos" && money >= 500) {
        addBusiness("los_pollos_hermanos", 500, 10)
    } else {
        alert("jit is kinda poor lol")
    }
}

async function Init() {

    addMoney(0)
    clicker.onclick = function() { addMoney(1) };
    shop_los_pollos_hermanos.onclick = function() { purchase("los-pollos-hermanos") };

    console.log('%cSaul Goodman doesn`t want you here.', 'color: red; font-size: 150px; font-weight: bold; text-shadow: -5px 0 black, 0 5px black, 5px 0 black, 0 -5px black;');
    console.log('%cSaul is a lawyer and can sue you... Don`l let him catch you cheating...', 'color: white; font-size: 20px;');

    while (true) {
        addMoney(money_per_second);
        await delay(1000);
    }
}

// Main Code
Init()



