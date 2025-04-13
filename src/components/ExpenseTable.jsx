import React from 'react';

const ExpenseTable = ({ expenses, deleteExpense, handleSort }) => {
  return (
    <div className="expense-table">
      <table>
        <thead>
          <tr>
            <th className="sortable" onClick={() => handleSort('description')}>Description</th>
            <th className="sortable" onClick={() => handleSort('category')}>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
              <td>
                <button onClick={() => deleteExpense(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
