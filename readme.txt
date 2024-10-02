
# Credit Card Checker

![credit-card.png](https://raw.githubusercontent.com/Annabel-13/credit_card_checker/main/screenshots/credit-card1.png)


## Description

This project is a simple **Credit Card Checker** built using JavaScript. It checks whether credit card numbers are valid based on the **Luhn algorithm**. This application identifies invalid credit card numbers from a batch of cards and returns the corresponding card-issuing companies.

## Features

- Validates credit card numbers using the Luhn algorithm.
- Identifies invalid card numbers from a batch.
- Detects the card-issuing companies based on the card numbers.
  
## Luhn Algorithm Explanation

The **Luhn algorithm**, also known as the **modulus 10** or **mod 10** algorithm, is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers.

### How It Works:
1. Starting from the rightmost digit (the check digit), move left, doubling the value of every second digit.
2. If the result of this doubling operation is greater than 9 (e.g., 8 * 2 = 16), subtract 9 from the result.
3. Sum all the digits of the card number (including the modified digits from step 2).
4. If the total modulo 10 equals 0 (i.e., the sum is divisible by 10), then the card number is valid.

### Example:
For the card number `4539 6779 0801 6808`:

1. Reverse the card number: `8 0 8 6 1 0 8 0 9 7 7 6 9 3 5 4`
2. Double every second digit: `8, 0, 16, 6, 2, 0, 16, 0, 18, 7, 14, 6, 18, 3, 10, 4`
3. Subtract 9 from numbers over 9: `8, 0, 7, 6, 2, 0, 7, 0, 9, 7, 5, 6, 9, 3, 1, 4`
4. Sum all digits: `8 + 0 + 7 + 6 + 2 + 0 + 7 + 0 + 9 + 7 + 5 + 6 + 9 + 3 + 1 + 4 = 74`
5. Since `74 % 10` is not `0`, this card number is **invalid**.

More information about this algorithm:
https://en.wikipedia.org/wiki/Luhn_algorithm#Description

## Getting Started

### Prerequisites

- Node.js installed on your local machine.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Annabel-13/credit_card_checker.git
   ```

2. Navigate to the project folder:

   ```bash
   cd credit_card_checker
   ```

3. Install dependencies (if needed):

   ```bash
   npm install
   ```

### Usage

To run the credit card checker:

1. Open the `index.js` file.
2. Pass the credit card numbers into the functions to validate or find invalid cards.
3. The `validateCred` function will check individual credit card numbers, and `findInvalidCards` will return the invalid ones from a batch.

