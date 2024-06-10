import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

    const loggedIn = {firstName : 'Pedro', lastName : 'Carrasco', email : 'pedro@ejemplo.com'}
  return (
    <section className='home'>
        <div className="home-content">
            <header className='home-header'>
                <HeaderBox
                    type = "greeting"
                    title = "Bievenido"
                    user = {loggedIn?.firstName || 'Invitado'}
                    subtext = 'Ingresa y administra tu cuenta y transacciones eficientemente'
                />
                <TotalBalanceBox
                    accounts = {[]}
                    totalBanks = {1}
                    totalCurrentBalance = {268493}
                />
            </header>

            RECENT TRANSACTIONS
        </div>
        <RightSideBar
            user = {loggedIn}
            transactions = {[]}
            banks = {[{currentBalance : 31289} ,{currentBalance: 738921}]}/>
    </section>
  )
}

export default Home
