import React from "react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

const QuickList = ({ value: transactions }) => {

  const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  if (!transactions || !Array.isArray(transactions)) {
    return <p className="text-center text-gray-500">No transactions available.</p>;
  }

  const deleteTransaction = (transactionId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this transaction?");
    if (confirmDelete) {
      (async () => {
        try {
          const response = await fetch(`${API_URL}/api/transactions/${transactionId}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            credentials: "include",
          });
          if (response.ok) {
            alert("Transaction deleted successfully!");
            navigate("/home", { replace: true });
          } else {
            alert("Failed to delete transaction.");
          }
        }
        catch (error) {
          console.error("Failed to delete transaction", error);
        }
      })();
    }
  };
  

  const incomeTransactions = (transactions || []).filter((t) => t.type === true);
  const expenseTransactions = (transactions || []).filter((t) => t.type === false);

  const totalIncome = incomeTransactions.reduce((sum, t) => sum + t.value, 0);
  const totalExpenses = expenseTransactions.reduce((sum, t) => sum + t.value, 0);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">Latest Transactions</h2>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-2 gap-8">
        
        {/* Income Section */}
        <div>
          <h3 className="text-green-600 font-semibold mb-2 text-center">Income 💰</h3>
          {incomeTransactions.length > 0 ? (
            incomeTransactions.map((transaction) => (
              <div key={transaction.id} className="relative group mb-2 p-2 border-l-4 border-green-400 bg-green-50 rounded-md">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-700 font-medium">{transaction.description}</p>
                    <p className="text-xs text-gray-500">{transaction.dateTime}</p>
                  </div>
                  <p className="text-green-600 font-semibold">+${transaction.value}</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                  <button className="text-gray-700 hover:text-gray-900">
                    <PencilSquareIcon className="w-5 h-5" onClick={() => navigate(`/edit-transaction/${transaction.transactionId}`)} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <TrashIcon className="w-5 h-5" onClick={() => deleteTransaction(transaction.transactionId)}  />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 text-center">No income transactions.</p>
          )}

          {/* Total Income */}
          <div className="mt-4 p-2 bg-green-100 text-green-700 font-semibold text-center rounded-md">
            Total Income: +${totalIncome}
          </div>
        </div>

        {/* Expenses Section */}
        <div>
          <h3 className="text-red-600 font-semibold mb-2 text-center">Expenses 🛒</h3>
          {expenseTransactions.length > 0 ? (
            expenseTransactions.map((transaction) => (
              <div key={transaction.transactionId} className="relative group mb-2 p-2 border-l-4 border-red-400 bg-red-50 rounded-md">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-700 font-medium">{transaction.description}</p>
                    <p className="text-xs text-gray-500">{transaction.dateTime}</p>
                  </div>
                  <p className="text-red-600 font-semibold">-${transaction.value}</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                  <button className="text-gray-700 hover:text-gray-900">
                    <PencilSquareIcon className="w-5 h-5" onClick={() => navigate(`/edit-transaction/${transaction.transactionId}`)} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <TrashIcon className="w-5 h-5" onClick={() => deleteTransaction(transaction.transactionId)} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 text-center">No expense transactions.</p>
          )}

          {/* Total Expenses */}
          <div className="mt-4 p-2 bg-red-100 text-red-700 font-semibold text-center rounded-md">
            Total Expenses: -${totalExpenses}
          </div>
        </div>

      </div>
    </div>
  );
};

export default QuickList;
