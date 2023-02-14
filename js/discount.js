function calculateDiscount() {
    const price = document.getElementById("price").value;
    const discountCode = document.getElementById("discountCode").value;

    if (discountCode === "DISC30") {
        const discountedPrice = price - (price * 0.3);
        document.getElementById("discountedPrice").innerHTML = discountedPrice;
    } else {
        document.getElementById("discountedPrice").innerHTML = "Invalid Discount Code and you have to pay full amount";
    }
}