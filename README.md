# Number Classification API

The Number Classification API is a simple Express.js server that takes a number as input and returns various mathematical properties about the number along with a fun fact feature.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)

## Installation

To run this project locally on Windows OS, follow these steps:

1. **Clone the repository:**
   git clone https://github.com/Samuel202093/HNG_TASKTWO
   
   cd HNG_TASKTWO

2.  **Install dependencies:**
   
    npm install

3. **Run the application**
   
   npm start

## Usage
Once the server is running on your terminal, you can access the API by navigating to the following URL in your browser:

http://localhost:3000/number/:num

## API Documentation 

  ** Endpoint **
  
   GET /

  Description: Returns data including number, is_prime, is_perfect, properties, digit_sum, fun_fact and GitHub URL.

Request:

   Method: GET
   
   URL: http://localhost:3000/number/81
  
Response:

 Status Code: 200 OK
 
Response Body:

{

    "number": 81,
    
    "is_prime": false,
    
    "is_perfect": false,
    
    "properties": ["odd"],
    
    "digit_sum": 9,
    
    "fun_fact": "81 is an odd number, meaning it is not divisible by 2.",
    
    "github_url": "https://github.com/Samuel202093/HNG_TASKTWO"
}

Bad Request:

Status Code: 400

Response Body:

{

"number": "alphabet",

"error": true

}


** Programming Language **

  https://hng.tech/hire/nodejs-developers
  
