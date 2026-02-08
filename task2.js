// Problem-02: OTP Validation for Zapshift
// ⚠️ Function Name Must be validOtp()

// Zapshift কোম্পানি তাদের প্রোডাক্ট ডেলিভারি করার সময় OTP পাঠায়। কিন্তু কিছু লোক Fraud OTP ব্যবহার করে প্রোডাক্ট রিসিভ করে ফেলে। তাই তোমার কাজ হলো একটি ফাংশন বানানো, যা OTP সঠিক কিনা চেক করবে।

// ফাংশনটি একটি Boolean (true/false) রিটার্ন করবে। যদি ইনপুটটি সঠিক ফরম্যাটে না থাকে তবে Invalid রিটার্ন করবে।

// 📥 Input:
// একটি ইনপুট: otp : string
// 🚀 Output:
// Boolean (true / false) রিটার্ন করবে
// 🚩 Challenge:
// যদি

// ইনপুট string না হয় (যেমন: Number, Array, Object, null ইত্যাদি)
// তাহলে "Invalid" রিটার্ন করতে হবে।
// 🎯 Validation Rules:
// OTP অবশ্যই ৮ অক্ষরের হতে হবে (length === 8)
// OTP অবশ্যই "ph-" দিয়ে শুরু হতে হবে
// 💡 Hints:
// startsWith() মেথড ব্যবহার করতে পারো।




function validOtp(otp) {
    if(typeof otp !== "string"){
        return "Invalid"
    }
    if (otp.length === 8 && otp.startsWith("ph-")) {
        return true;    
    }else{
        return false;
    }
}


let output = validOtp(10985);
console.log(output);