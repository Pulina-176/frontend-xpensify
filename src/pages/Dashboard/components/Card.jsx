import React from 'react'


const Card = ({value}) => {
    console.log({value});
    return (
      <div className='justify-center items-center flex mt-8'>
        <div className="w-80 rounded-2xl shadow-md p-4 bg-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 font-medium">Available balance</p>
              <h1 className="text-3xl font-bold text-indigo-800">${value[0]}</h1>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-500">Total</p>
            </div>
          </div>
    
          <div className="flex justify-between items-center mt-6">
            <div className='flex-row items-center space-x-2'>
            <p className="text-sm text-gray-500 font-medium">Total Income</p>
            <p className="text-sm text-green-800 font-medium">${value[1]}</p>
            </div>
            <div className='flex-row items-center space-x-2'>
            <p className="text-sm text-gray-500 font-medium">Total Expenses</p>
            <p className="text-sm text-orange-800 font-medium">${value[2]}</p>
            </div>
          </div>
        </div>
      </div>
      );
}

export default Card