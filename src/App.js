import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
      <AppProvider>
        <div className="container">
            <h1>Shopping App</h1>
            <div className="row">
                <div className="col-6">
                    <CartValue/>
                </div>
                <div className="col-6">
                    <Location />
                </div>
            </div>
            <h2>Shopping Cart</h2>
            <div className="row">
                <div className="col-12">
                    <ExpenseList/>
                </div>
            </div>
            <h2>Add Items</h2>
            <div className="row">
                <div className="col-12">
                    <ItemSelected/>
                </div>
            </div>
        </div>
    </AppProvider>
  );
}

export default App;
