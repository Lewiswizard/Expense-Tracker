import React, { useState } from 'react';
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      description: 'Fried Chicken Ugali',
      category: 'Wednesday\'s Lunch',
      amount: '1500',
      date: '05/08/2025',
    },
    {
      description: 'Buy shoes',
      category: 'Add to my shoe collection',
      amount: '7000',
      date: '03/05/2025',
    },
  ]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedExpenses = sortColumn
    ? [...filteredExpenses].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
        if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      })
    : filteredExpenses;

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="expense-table-container">
        <ExpenseTable expenses={sortedExpenses} deleteExpense={deleteExpense} handleSort={handleSort} />
        <ExpenseForm addExpense={addExpense} />
      </div>
    </div>
  );
};

export default App;
