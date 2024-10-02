import React, { useState } from 'react';
import './App.css';

// Credit card data (valid and invalid samples)
const sampleCards = [
  { label: "Valid Card 1", numbers: [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8] },
  { label: "Valid Card 2", numbers: [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9] },
  { label: "Invalid Card 1", numbers: [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5] },
  { label: "Invalid Card 2", numbers: [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3] },
];

// Sum helper function
function sumAll(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Credit card validation function
function validateCard(arr) {
  let copy = arr.slice().reverse();
  for (let i = 0; i < copy.length; i++) {
    if (i % 2 !== 0) {
      copy[i] *= 2;
      if (copy[i] > 9) copy[i] -= 9;
    }
  }
  return sumAll(copy) % 10 === 0;
}

// Identifying card company by the first number
function identifyCompany(arr) {
  switch (arr[0]) {
    case 3:
      return 'Amex';
    case 4:
      return 'Visa';
    case 5:
      return 'Mastercard';
    case 6:
      return 'Discover';
    default:
      return 'Unknown';
  }
}

function App() {
  const [cardInput, setCardInput] = useState('');
  const [validationResult, setValidationResult] = useState(null);

  const handleCardInput = (e) => setCardInput(e.target.value);

  const handleValidation = () => {
    const cardArray = cardInput.split('').map(Number);
    if (cardArray.some(isNaN)) {
      setValidationResult('Invalid input, please enter numbers only');
      return;
    }

    const isValid = validateCard(cardArray);
    const company = identifyCompany(cardArray);
    setValidationResult(
        isValid
            ? `The card is valid! Issued by ${company}.`
            : `The card is invalid! Issued by ${company}.`
    );
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Credit Card Validator</h1>
        </header>

        <div className="input-section">
          <h3>Enter your card number:</h3>
          <input
              type="text"
              value={cardInput}
              onChange={handleCardInput}
              placeholder="1234 5678 9012 3456"
          />
          <button onClick={handleValidation}>Validate</button>
        </div>

        {validationResult && (
            <div className="result">
              <h4>{validationResult}</h4>
            </div>
        )}

        <div className="sample-section">
          <h3>Sample Credit Cards:</h3>
          {sampleCards.map((card, index) => (
              <button
                  key={index}
                  onClick={() => setCardInput(card.numbers.join(''))}
              >
                {card.label}
              </button>
          ))}
        </div>
      </div>
  );
}

export default App;
