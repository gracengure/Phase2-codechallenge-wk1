
import './App.css'; // Importing CSS file for styling
import React, { useState } from 'react'; // Importing React and useState hook
import Form from "./Components/Form"; // Importing the Form component
import Filter from "./Components/Filter"; // Importing the Filter component
import List from './Components/List'; // Importing the List component

function App() {
  // Define state for transactions using useState hook
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2024-04-27",
      description: "Groceries",
      category: "Food",
      amount: "$50"
    },
    {
      id: 2,
      date: "2024-04-28",
      description: "Gasoline",
      category: "Transportation",
      amount: "$40"
    },
    {
      id: 3,
      date: "2024-04-29",
      description: "Restaurant",
      category: "Food",
      amount: "$30"
    },
    {
      id: 4,
      date: "2024-04-30",
      description: "Movie tickets",
      category: "Entertainment",
      amount: "$25"
    },
    {
      id: 5,
      date: "2024-05-01",
      description: "Books",
      category: "Education",
      amount: "$20"
    },
    {
      id: 6,
      date: "2024-05-02",
      description: "Clothing",
      category: "Shopping",
      amount: "$35"
    },
    {
      id: 7,
      date: "2024-05-03",
      description: "Phone bill",
      category: "Utilities",
      amount: "$55"
    },
    {
      id: 8,
      date: "2024-05-04",
      description: "Gym membership",
      category: "Health",
      amount: "$60"
    },
    {
      id: 9,
      date: "2024-05-05",
      description: "Coffee",
      category: "Food",
      amount: "$5"
    },
    {
      id: 10,
      date: "2024-05-07",
      description: "Netflix subscription",
      category: "Entertainment",
      amount: "$10"
    }
  ]);
// Function to add a new transaction
  function addTransaction (newTransaction) 
  { setTransactions([...transactions, newTransaction]); };// Update transactions state
// Function to handle filtering of transactions
  function handleFilter(filteredTransactions) {
    setTransactions(filteredTransactions);// Update transactions state with filtered transactions
  }
  

// Render the App component
return ( 
  <div>
      {/* Render the title */}
      <h1 className='app'> The Royal Bank of Flatiron</h1>
      {/* Render the Filter component */}
      <Filter transactions={transactions} onFilter={handleFilter} />
      {/* Render the List component with ability to add transaction */}
      <List onAddTransaction={addTransaction} />
      {/* Render the Form component to display transactions */}
      <Form transactions={transactions} />
    </div>
)}
export default App;