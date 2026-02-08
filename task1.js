// ⚠️ Function Name Must be newPrice()
// আসন্ন ইদ উপলক্ষে তুমি তোমার দোকানের প্রোডাক্টে ডিসকাউণ্ট দিতে চাচ্ছ। কিন্তু প্রতিটা প্রোডাক্টের নতুন দাম আলাদা আলাদা হিসাব করতে গেলে ঝামেলা। তাই তুমি একটা ফাংশন বানাতে চাও, যা মূল দাম এবং ডিসকাউন্ট% নিলে নতুন দাম বের করে দেবে।

function newPrice(currentPrice , discount){
    console.log(currentPrice , discount)
    let TDiscount = 0;
    if( isNaN(currentPrice) || typeof currentPrice != "number" || typeof discount != "number" || isNaN(discount) || discount <= 0 || discount >= 100){
        return "Invalid";
    }else{
        TDiscount = currentPrice - currentPrice * discount / 100;
    }
    
    let Discount = TDiscount.toFixed(3)

    return Discount 
}

let output = newPrice(500, 25)


console.log(output)

