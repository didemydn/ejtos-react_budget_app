
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value, 10);
        if (updatedBudget >= totalExpenses) {
            setNewBudget(updatedBudget);
            dispatch({type: 'SET_BUDGET', payload: updatedBudget});
        } else {
            alert ("You cannot reduce the budget value lower than the spending");
            setNewBudget(budget);
        }
        
    }

    useEffect(()=> {
        setNewBudget(budget);
    }, [budget, currency]);
  


    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;