const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;


app.use(cors());

app.get("/number/:num", (req, res) => {
    const num = parseInt(req.params.num);
    if (isNaN(num)) {
        return res.status(400).json({number: "alphabet", error: true });
    }
    
    const properties = [];
    if (num % 2 !== 0) properties.push("odd");
    else properties.push("even");
    
    if (isPrime(num)) properties.push("prime");
    if (isPerfect(num)) properties.push("perfect");
    if (isArmstrong(num)) properties.push("Armstrong");
    
    const response = {
        number: num,
        is_prime: isPrime(num),
        is_perfect: isPerfect(num),
        properties,
        digit_sum: digitSum(num),
        fun_fact: generateFunFact(num)
    };

    res.status(200).json(response);
});

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function isPerfect(n) {
    let sum = 1;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) sum += n / i;
        }
    }
    return sum === n && n !== 1;
}

function isArmstrong(n) {
    const digits = n.toString().split(""),
          power = digits.length;
    return digits.reduce((sum, digit) => sum + Math.pow(parseInt(digit), power), 0) === n;
}

function digitSum(n) {
    return n.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0);
}

function generateFunFact(n) {
    if (isArmstrong(n)) return `${n} is an Armstrong number because its digits raised to the power of ${n.toString().length} sum to ${n}`;
    if (isPrime(n)) return `${n} is a prime number, only divisible by 1 and itself.`;
    if (isPerfect(n)) return `${n} is a perfect number because the sum of its proper divisors equals itself.`;
    if (n % 2 === 0) return `${n} is an even number, which means it is divisible by 2.`;
    return `${n} is an odd number, meaning it is not divisible by 2.`;
}

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
