import React from 'react'
import Header from '../../components/Header'
import Card from './components/Card'
import { useSelector } from 'react-redux'
import QuickList from './components/QuickList'

const Dashboard = () => {

  const var_balance = useSelector((state) => state.dashboard.balance);

  return (
    <div className='h-screen flex flex-col'>
        <Header />
        <body className='grid grid-cols-1 md:grid-cols-3 px-12 py-12 md:px-48 place-items-center gap-y-12'>
          <div>
            <Card value={var_balance}/>
          </div>
          <div className='col-span-2 row-span-2'>
            <Card value={200} />
          </div>
          <div className=''>
            <QuickList />
          </div>
        </body>
    </div>
  )
}

export default Dashboard