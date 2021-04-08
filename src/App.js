import React from "react";
// _________________________________________
import user from './components/Profile/user.json';
import Profile from "./components/Profile";
// __________________________________________________
import Statistics from './components/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
// _______________________________________________________
import FriendList from "./components/FriendList";
import friends from './components/FriendList/friends.json';
// ____________________________________________________
import TransactionHistory from './components/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json'

function App() {
    return (
        <div>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title='Statistic' stats={statisticalData} />
            <Statistics  stats={statisticalData} />
            <FriendList friends={friends}/>
            <TransactionHistory items = {transactions}/>
        </div>
    );
}

export default App;
