import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from '../components/Header'
import {useSelector} from 'react-redux'
import { useParams } from "react-router-dom";

const EditTransactions = () => {

  const API_URL = import.meta.env.VITE_API_URL;

  const { id } = useParams();
  console.log(id);
  

  useEffect(() => {
    const fetchTransaction = async () => {
      const response = await fetch(`http://3.94.125.173:8083/api/transactions/transaction/${id}`);
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        setTransaction(result); 
        console.log(transaction); 
      } else {
        console.error("Failed to fetch transaction");
      }
    };
    fetchTransaction();
  }, []);
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(`http://3.94.125.173/api/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    });
    const data = await res.json();
    if (res.ok) {
      window.alert("Changes saved successfully");
    }
    console.log(data);
  };

  

  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser.id)
  const [transaction, setTransaction] = useState({
    userId: currentUser.id,
    transactionId: "",
    dateTime:"",
    type:  false,
    description: "",
    value: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTransaction({ ...transaction, [name]: value });
  };

  console.log(transaction)

  return (
     <div className='min-h-screen flex flex-col bg-gray-100'>
            <Header />
            <div className='items-center justify-center'>
            <h1 className='text-3xl font-bold text-center mt-8 '>Manage Your Transactions</h1>
            <div className='flex justify-center items-center space-x-8 '></div>
    <div
      className={`p-6 max-w-md mx-auto mt-10 rounded-lg shadow-lg border-l-4 ${
        transaction.type ? "border-green-500 bg-green-50" : "border-yellow-300 bg-red-50"
      }`}
    >
      <h2 className="text-l font-semibold text-gray-700 mb-4 text-center">
        Add Transaction
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <input
          type="text"
          name="userId"
          value={currentUser.id}
          className="w-full text-sm p-2 border-gray-300 rounded-md text-gray-500 cursor-not-allowed"
          required
          disabled
        />

        <input
          type="text"
          name="transactionId"
          value= {id}
          className="w-full text-sm p-2 text-gray-500 border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
          disabled
        />

        <input
          type="datetime-local"
          name="dateTime"
          value= {transaction.dateTime}
          onChange={handleChange}
          className="w-full p-2 text-sm text-gray-500  border-gray-300 rounded-md"
          required
        />

        <select
          name="type"
          onChange={handleChange}
          value={transaction.type}
          className="w-full p-2 border-gray-300 rounded-md text-gray-500 cursor-pointer text-sm"
        >
          <option value="false">Expense</option>
          <option value="true">Income</option>
        </select>

        <input
          type="text"
          name="description"
          value={transaction.description}
          onChange={handleChange}
          className="w-full text-sm p-2 border-gray-300 text-gray-500 rounded-md"
          required
        />

        <input
          type="number"
          name="value"
          value={transaction.value}
          onChange={handleChange}
          className="w-full p-2 border-gray-300 text-gray-500 text-sm rounded-md"
          required
        />

        <button
          type="submit"
          className="w-full p-2 bg-indigo-600 text-white text-sm font-semibold rounded-md hover:bg-indigo-700"
        >
          Add Transaction
        </button>
      </form>
    </div>
    </div>
  </div>

  );
};

export default  EditTransactions;