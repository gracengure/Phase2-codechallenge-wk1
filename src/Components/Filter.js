import React, { useState } from "react";

// Define the Filter component with transactions and onFilter as props
function Filter({ transactions, onFilter }) {
  // Define state to store the search
  const [search, setSearch] = useState("");

  // Function to handle input change in the search input field
  function handleInputChange(event) {
    setSearch(event.target.value); // Update the search  state
  };

  // Function to handle search when the search icon is clicked
  function handleSearch() {
    // Filter transactions based on the search 
    const filteredTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(search.toLowerCase())
    );
    // Call the onFilter function and pass the filtered transactions
    onFilter(filteredTransactions);
  };

  // Render the Filter component
  return (
    <div className="search-container">
      {/* Render the search input field */}
      <input
        className="search-input"
        type="text"
        placeholder="Search your Recent Transactions"
        value={search} // Set the value of the input field to the search  state
        onChange={handleInputChange} // Attach onChange event handler to update the search 
      />
      {/* Render the search icon */}
      <span className="search-icon" onClick={handleSearch}>
        &#128269;
      </span>
    </div>
  );
}
// Export the Filter component
export default Filter;
