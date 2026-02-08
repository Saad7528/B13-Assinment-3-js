// 1️⃣ ইনপুট হিসেবে একটি text (string) নেবে
//  2️⃣ ওই text থেকে  সবচেয়ে বড় (দীর্ঘ) শব্দটি খুঁজে বের করবে
//  3️⃣ পুরো text-এ মোট কতটি অক্ষর আছে তা গণনা করবে
//   ➡️ স্পেস (space) গণনায় ধরা হবে না
// এই তথ্যগুলো ব্যবহার করে জিহাদ একটি ছোট summary তৈরি করতে পারবে।
// 👉 তোমার কাজ হলো এই লজিক ব্যবহার করে একটি ফাংশন তৈরি করা।
// ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি String নেবে এবং একটি Object রিটার্ন করবে যেখানে সবচেয়ে বড় শব্দ এবং মোট ক্যারেক্টার সংখ্যা থাকবে।

// 📥 Input:
// ইনপুট হবে একটি String (একটি পূর্ণ বাক্য/ Sentence)। 


//  🚀 Output:
// Object: { longwords:String, token: Number }
// longwords → সবচেয়ে বড় শব্দের একটা string  (highest সাইজ এর ওয়ার্ড multiple হলে প্রথম টা)
// token → Sentence এর total length without স্পেস 




// Challenge 📢 : যদি ইনপুটটি String না হয় (যেমন: Number, Array বা Object), তবে আউটপুট হিসেবে Invalid রিটার্ন করতে হবে।


// Hints 💡:  split(), join() মেথড ব্যবহার করতে পারো। 



function  analyzeText(str) {
        if (typeof str !== "string" || str.trim().length === 0){
            return "Invalid";
        }

        let token = 0;
        let words = str.split(" ");
        console.log(words)
        // console.log(words.length)
        let latterNoGap = words.join("")
        for (let latters of latterNoGap){
            token++
        }

        let longwords = words[0];
        for (let i = 1; i < words.length; i++) {

            if(longwords.length < words[i].length){
                longwords = words[i];
            }
        }
        return {
            longwords,
            token
        }
}


let output = analyzeText(" ")

console.log(output);