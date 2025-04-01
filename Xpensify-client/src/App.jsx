import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard/Dashboard'
import AddTransaction from './pages/AddTransactions'
import EditTransactions from './pages/EditTransactions'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
        <Route path="/edit-transaction/:id" element={<EditTransactions />} />
      </Routes>
    </div>
  );
}

export default App
