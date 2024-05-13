import React,{useState} from "react";

import Expense from "./components/Expense";
import Header from "./components/Header";
import RecentTransection from "./components/RecentTransection";
import Wallet from "./components/Wallet";




function App() {
const [balance,setBalance]=useState(5000);

const [transactions, setTransactions] = useState([
  { id: 1, title: 'Transaction 1', amount: 100 },
  { id: 2, title: 'Transaction 2', amount: 200 },
  { id: 3, title: 'Transaction 3', amount: 300 },

]);

const addTransaction=(transaction)=>{
  const newTransaction = {
    id: transactions.length + 1,
    ...transaction,
  };
  setTransactions([...transactions, newTransaction]);
};


const addBalance=(amount)=>{
   const totalamount=balance + amount;
    setBalance(totalamount);
    
}

  return (
    <div className="App">
    <Header/>
    <div>
      <Wallet addBalance={addBalance} balance={balance}/>
      <Expense  addTransaction={addTransaction}/>

    </div>
    <div>
      <RecentTransection transaction={transaction}/>
    </div>
    </div>
  );
}

export default App;
