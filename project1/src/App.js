import './App.css';
import * as React from 'react';
import CheckBalance from './pages/CheckBalance';
import DepositMoney from './pages/DepositMoney';
import TransferMoney from './pages/TransferMoney';
import WithdrawMoney from './pages/WithdrawMoney';
import BankWise from './pages/BankWise';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';

function App() {

  return (
    <Router>
    <div className="App">
    <AppLayout></AppLayout>
    <Routes>
      <Route path='/check-balance' element={<CheckBalance />}></Route>
      <Route path='/deposit-money' element={<DepositMoney />}></Route>
      <Route path='/transfer-money' element={<TransferMoney />}></Route>
      <Route path='/withdraw-money' element={<WithdrawMoney />}></Route>
      <Route path='/not-found' element={<NotFound />}></Route>
      <Route path='main-page' element={<BankWise />}></Route>
    </Routes>
   </div>
   </Router>
  );
}

export default App;
