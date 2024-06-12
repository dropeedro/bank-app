import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async () => {

    const loggedIn = await getLoggedInUser();
  return (
    <section className='home'>
        <div className="home-content">
            <header className='home-header'>
                <HeaderBox
                    type = "greeting"
                    title = "Bievenido"
                    user = {loggedIn?.name || 'Invitado'}
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
