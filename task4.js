// Problem-04: Upcoming Gono Vote
// ⚠️ Function Name Must be gonoVote()

// আসন্ন গণভোটের ফলাফল বিশ্লেষণের জন্য তোমাকে একটি দায়িত্ব দেওয়া হয়েছে। ভোটের ডাটাগুলো একটি Array-তে জমা করা হয়েছে যেখানে ভোটারদের মতামত "ha" অথবা "na" হিসেবে আছে। তোমার কাজ হলো একটি ফাংশন তৈরি করা যা ভোট গণনা করবে এবং দেখবে "ha" ভোট সংখ্যাগরিষ্ঠ(Majority) কি না।

// ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি Array নেবে এবং ভোটের সংখ্যার ওপর ভিত্তি করে একটি Boolean (true/false) এবং "equal" রিটার্ন করবে।

// 📥 Input:
// একটি Array,
// উদাহরণ: ["ha", "na", "ha"]

// 🚀 Output:
// "ha" ভোটের সংখ্যা "na" ভোটের বেশি হলে → true**
// "ha" ভোটের সংখ্যা "na" ভোটের সমান হলে → equal
// অন্যথায় → false
// 🚩 Challenge:
// যদি

// ইনপুটটি একটি Array না হয় (যেমন: String, Number বা Object)
// তাহলে "Invalid" রিটার্ন করতে হবে

function gonoVote(array) {
    if (Array.isArray(array) === false){
        return "Invalid";
    }
    let ha = 0;
    let na = 0;
    for (let array2 of array){
        if (array2 === "ha"){
            ha++
        }
        if (array2 === "na"){
            na++
        }
    }

    if (ha > na){
        return true;
    }else if (ha === na){
        return  "equal";
    }else if (ha < na){
        return false;
    }
   
}

let output = gonoVote(["ha","na","na"])
console.log(output);