// Problem-03: BCS Final Score Calculator
// ⚠️ Function Name Must be finalScore()

// BCS পরীক্ষার OMR sheet ডিজিটালভাবে চেক করা হয়। এটা right, wrong, missed সব কটি গণনা করতে পারে, কিন্তু ফাইনাল স্কোর বের করতে পারে না। তোমার কাজ হলো একটি ফাংশন বানানো যা Object নেবে এবং ফাইনাল স্কোর ক্যালকুলেট করবে।

// ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি Object নেবে এবং নিচের শর্ত ও নিয়ম অনুযায়ী ফলাফল প্রদান করবে।

// 📥 Input:
// একটি Object যার প্রপার্টিগুলো হবে:

// {
//   right: Number,
//   wrong: Number,
//   skip: Number
// }
// 🚀 Output:
// সঠিক হলে → Number (রাউন্ডেড ফাইনাল স্কোর)
// 🎯 BCS পরীক্ষার নিয়ম:
// মোট প্রশ্ন: ১০০টি
// সুতরাং, ইনপুটে থাকা right + wrong + skip এর যোগফল অবশ্যই ১০০ হতে হবে
// 🚩 Challenge:
// যদি

// right + wrong + skip এর যোগফল ১০০ না হয়
// তাহলে "Invalid" রিটার্ন করতে হবে।
// 🎯 Scoring Rules:
// প্রতিটি সঠিক উত্তরের জন্য: +১ পয়েন্ট।
// প্রতিটি ভুল উত্তরের জন্য: -০.৫ পয়েন্ট (০.৫ নম্বর কাটা যাবে)।
// বাদ দেওয়া(skip) প্রশ্নের জন্য: ০ পয়েন্ট।
// 💡 Hints:
// Rounded ভ্যালু বের করার জন্য Math.round() ব্যবহার করতে পারো।

function finalScore(omr) {
    let arr = [];
    let sum = 0;
    for (let num of Object.values(omr)){
        if(typeof num !== "number"){
        return "Invalid"
    }else{
        sum += num ;
        arr.push(num);
    }
        
    }
    if(sum > 100){
        return "Invalid"
    }else {
        let subTotal = arr[0] * 1 + arr[1] * (-0.5) + arr[2] * 0;
        let total = Math.round(subTotal);
        return total;
    }

}


let output = finalScore({"right":10,"wrong":50,"skip":10});
console.log(output);