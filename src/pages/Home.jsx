import React from 'react'

const Home = () => {
  const handleNavigate = () => {
    window.location.href = '/sign-in';
  }
  return (
    <div><div
    className="hero min-h-screen"
    style={{
      backgroundImage: "url(https://img.freepik.com/free-photo/closeup-shot-businessman-s-hands-counting-stacks-coins-after-business-success_181624-57099.jpg?uid=R133071523&ga=GA1.1.608209183.1740380380&semt=ais_hybrid)",
    }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold"> Welcome to Expensify!</h1>
        <p className="mb-5">
        Effortlessly track your expenses, set budgets, and gain full control over your finances. Stay on top of your spending, save more, and achieve your financial goals with ease!
        </p>
        <button className="btn btn-primary" onClick={handleNavigate}>Get Started</button>
      </div>
    </div>
  </div></div>
  )
}

export default Home