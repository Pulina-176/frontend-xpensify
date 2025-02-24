import React from 'react'

const Card = ({value}) => {
    return (
        <div className="w-80 rounded-2xl shadow-md p-4 bg-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 font-medium">Available balance</p>
              <h1 className="text-3xl font-bold text-gray-800">${value}</h1>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-500">Total</p>
            </div>
          </div>
    
          <div className="flex justify-between items-center mt-6">
            <p className="text-lg text-gray-500 font-medium">**** 4532</p>
          </div>
        </div>
      );
}

export default Card