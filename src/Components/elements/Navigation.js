import React from 'react'
import { Route, Link, Switch } from "react-router-dom";


export const Navigation = () =>{

    return (
        <>
        <nav>
            <h1 className="store-header">Brown's Pizza Cart</h1>
            <div className="nav-links">
                <Link to="/">Home | </Link> 
                <Link to="/order-pizza">Order Pizzza</Link>
            </div>
        </nav>
        
        </>
    )
    }
    
export default Navigation