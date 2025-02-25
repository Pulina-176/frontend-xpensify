import { useState } from "react";

export default function Tracker() {
  const [transactions, setTransactions] = useState([]);
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const addTransaction = () => {
    if (!amount || !description || !date) return;

    const newTransaction = {
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      description,
      date,
    };

    setTransactions([newTransaction, ...transactions]);
    setAmount("");
    setDescription("");
    setDate("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Finance Tracker</h2>
        <div className="space-y-3">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          />
          <button
            onClick={addTransaction}
            className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-bold"
          >
            Add Transaction
          </button>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Transactions</h3>
          <ul className="space-y-2 max-h-60 overflow-y-auto">
            {transactions.map((t) => (
              <li
                key={t.id}
                className={`p-2 rounded text-sm flex justify-between ${
                  t.type === "income" ? "bg-green-700" : "bg-red-700"
                }`}
              >
                <span>{t.description}</span>
                <span>
                  {t.type === "income" ? "+" : "-"}${t.amount} - {t.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
