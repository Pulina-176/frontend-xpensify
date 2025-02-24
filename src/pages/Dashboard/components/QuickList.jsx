// Latest transactions viewing short list

import React from "react";

const QuickList = () => {
  const transactions = [
    { id: 1, title: "Groceries", price: "$50", date: "2023-10-01" },
    { id: 2, title: "Rent", price: "$1200", date: "2023-10-01" },
    { id: 3, title: "Utilities", price: "$150", date: "2023-10-02" },
  ];

  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id} className="mb-3">
          <div className="flex flex-row gap-5">
            <div className="flex flex-col">
                <p>{transaction.title}</p>
                <p className="text-xs text-gray-400">{transaction.date}</p>
            </div>
            <div>
                <p>{transaction.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickList;
