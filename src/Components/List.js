import React, { useState } from "react";

function List({ onAddTransaction }) {
  // State variables to store form input values
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    // Create a new transaction object with form input values
    const newTransaction = {
      date,
      description,
      category,
      amount,
    };
    // Call the onAddTransaction function passed as a prop, passing the new transaction object
    onAddTransaction(newTransaction);
  }

  return (
    <div className="data-box">
      {/* Form element with onSubmit event handler */}
      <form onSubmit={handleSubmit}>
        <div className="list">
          {/* Date input field */}
          <label>
            Date:
            <input
              type="date"
              name="date"
              id="date"
              required
              value={date}
              onChange={(event) => setDate(event.target.value)} // Update date state when input value changes
            />
          </label>
          {/* Description input field */}
          <label>
            Description:
            <input
              type="text"
              placeholder="Enter the description"
              required
              name="description"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)} // Update description state when input value changes
            />
          </label>
          {/* Category input field */}
          <label>
            Category:
            <input
              name="category"
              id="category"
              placeholder="Enter the category"
              value={category}
              onChange={(event) => setCategory(event.target.value)} // Update category state when input value changes
            />
          </label>
          {/* Amount input field */}
          <label>
            Amount:
            <input
              type="text"
              placeholder="Enter the amount"
              required
              name="amount"
              id="amount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)} // Update amount state when input value changes
            />
          </label>
        </div>
        {/* Submit button */}
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default List;
