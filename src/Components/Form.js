import React from "react";

// Define the Form component with transactions as a prop
function Form({ transactions }) {
  return (
    // Render the container div with a className of "container"
    <div className="container">
      {/*Render the table element */}
      <table className="table">
        {/* Render the table header */}
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        {/* Render the table body */}
        <tbody>
          {/* Map through the transactions array to generate table rows */}
          {transactions.map((transaction) => (
            <tr key={transaction.id}> {/* Set the key attribute to the transaction id */}
              <td>{transaction.date}</td> {/* Render the transaction date */}
              <td>{transaction.description}</td> {/* Render the transaction description */}
              <td>{transaction.category}</td> {/* Render the transaction category */}
              <td>{transaction.amount}</td> {/* Render the transaction amount */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Export the Form component
export default Form;
