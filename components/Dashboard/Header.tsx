import React from 'react'
import AuthButton from '../AuthButton'

const DashboardHeader = () => {
  return (
    <header>
        <nav>
            <AuthButton/>
        </nav>
        <h1>Dashboard</h1>
    </header>
  )
}

export default DashboardHeader