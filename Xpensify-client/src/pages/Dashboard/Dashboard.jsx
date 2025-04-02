import React from 'react'
import Header from '../../components/Header'
import Card from './components/Card'
import { useSelector } from 'react-redux'
import {} from '@heroicons/react/20/solid'
import QuickList from './components/QuickList'
import { useDispatch } from 'react-redux'
 import { useEffect, useState } from 'react'
 import { useNavigate } from 'react-router-dom'
import { getBalanceStart, getBalanceSuccess, getBalanceFailure } from '../../slices/dashboardSlice'
import { fetchTransactionStart, fetchTransactionSuccess, fetchTransactionFailure } from '../../slices/TransactionSlice'

const Dashboard = () => {

  const API_URL = import.meta.env.VITE_API_URL;

  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const var_balance = useSelector((state) => state.dashboard.balance);
  const transactions = useSelector((state) => state.transaction.currentList);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  useEffect(() => {
    const incomeTransactions = (transactions || []).filter((t) => t.type === true);
    const expenseTransactions = (transactions || []).filter((t) => t.type === false);

    setIncome(incomeTransactions.reduce((sum, t) => sum + t.value, 0));
    setExpense(expenseTransactions.reduce((sum, t) => sum + t.value, 0));
  }, [transactions]); // Update state when transactions change

  const fetchBalance = async () => {
    try {
      dispatch(getBalanceStart());
      const response = await fetch(`${API_URL}/api/dashboard/balance/${currentUser.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        credentials: "include",
      });
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        dispatch(getBalanceSuccess(result));

      } else {
        dispatch(getBalanceFailure());
        console.error("Failed to fetch balance");
      }
    } catch (error) {
      dispatch(getBalanceFailure("Failed to fetch balance"));
      console.error("Failed to fetch balance", error);
    }
  };

  const fetchTransactions = async () => {
    try {
      dispatch(fetchTransactionStart());
      const response = await fetch(`${API_URL}/api/transactions/${currentUser.id}`, {
        method: "GET",        
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        credentials: "include",
      });
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        dispatch(fetchTransactionSuccess(result));  
        console.log("transactions:", transactions);      
      } else {
        dispatch(fetchTransactionFailure());
        console.error("Failed to fetch transactions");
      }
    } catch (error) {
      dispatch(fetchTransactionFailure("Failed to fetch transactions"));
      console.error("Failed to fetch transactions", error); 
    }
      }
        
  useEffect(() => {
    fetchTransactions();
  },[var_balance]);

  useEffect(() => {
    fetchBalance();
  }, [currentUser]);

  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
        <Header />
        <div className='items-center justify-center'>
        <p className='text-gray-500 text-center mt-8'>Hello {currentUser.username} 👋 Welcome back to    </p>
        <h1 className='text-3xl font-bold text-center  '>Xpensify Dashboard</h1>
        <div className='flex justify-center items-center space-x-8 '>
        <Card value={[var_balance,income,expense]}/>
        <button className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded' onClick={() => navigate('/add-transaction')}>Add Transaction</button>
        </div>
        </div>
        <div className='flexjustify-center items-center ml-24 mr-24 mb-8 mt-8'>
        <QuickList value={transactions} />
        </div>

    </div>
  )
}

export default Dashboard