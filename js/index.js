// memory-cost-calculate-function

function setMemoryCost(quantity) {
    if (quantity == 8) {
        document.getElementById("extra-memory-cost").innerText = 0;
    } else {
        document.getElementById("extra-memory-cost").innerText = 180;
    }
}



// price-for-8gb-memory

document.getElementById("8gb-memory").addEventListener("click", function(e) {
    setMemoryCost(8)
    setTotalPrice();
})


// price-for-16gb-memory

document.getElementById("16gb-memory").addEventListener("click", function(e) {
    setMemoryCost(16)
    setTotalPrice();
})



// storage-cost-calculate-function

function setStorageCost(quantity) {
    if (quantity == "512gb") {
        document.getElementById("extra-storage-cost").innerText = 100;
    } else if (quantity == "1tb") {
        document.getElementById("extra-storage-cost").innerText = 180;
    } else {
        document.getElementById("extra-storage-cost").innerText = 0;
    }
}



// price-for-256gb-storage
document.getElementById("256gb-storage").addEventListener("click", function(e) {
        setStorageCost("256gb")
        setTotalPrice();
    })
    // price-for-256gb-storage

document.getElementById("512gb-storage").addEventListener("click", function(e) {

        setStorageCost("512gb")
        setTotalPrice();
    })
    // price-for-256gb-storage

document.getElementById("1tb-storage").addEventListener("click", function(e) {
    setStorageCost("1tb")
    setTotalPrice();
})




// delivery-cost-calculate-function

function getDeliveryCost(term) {
    if (term == "free") {
        document.getElementById("delivery-cost").innerText = 0;
    } else {
        document.getElementById("delivery-cost").innerText = 25;
    }
}

// price-for-free-delivery
document.getElementById("delivery-free").addEventListener("click", function(e) {
    getDeliveryCost("free")
    setTotalPrice();
})

// price-on-delivery-charge-25

document.getElementById("delivery-charge").addEventListener("click", function(e) {
    getDeliveryCost("money")
    setTotalPrice();
})


// total-price-setting-function

function setTotalPrice() {
    // best-price
    const fixed = document.getElementById("fixed-price").innerText;
    const fixedCost = Number(fixed);
    // storage-price
    const storage = document.getElementById("extra-storage-cost").innerText;
    const storageCost = Number(storage)
        // memory-price
    const memory = document.getElementById("extra-memory-cost").innerText;
    const memoryCost = Number(memory)
        // delivery-price
    const delivery = document.getElementById("delivery-cost").innerText;
    const deliveryCost = Number(delivery)
        // total-price
    const totalPrice = storageCost + memoryCost + deliveryCost + fixedCost;
    document.getElementById("intotal-price").innerText = totalPrice;
    document.getElementById("commision-price").innerText = totalPrice;

}


// setting-the-total-discount-price 

document.getElementById("promo-code-button").addEventListener("click", function() {
    let display = document.getElementById("promo-code-display").value.toLowerCase();
    let kaku = "stevekaku".toLowerCase();
    if (display == kaku) {
        const total = document.getElementById("intotal-price").innerText;
        const totalPrice = Number(total);
        document.getElementById("commision-price").innerText = totalPrice - (totalPrice * 0.2);
        document.getElementById("promo-code-display").value = "";
    }

})