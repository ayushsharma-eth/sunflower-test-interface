import React from 'react'
import Navigation from '../components/Navigation'

function Purchase() {
    return (
        <div>
            <Navigation search={true} placeholder={"Search..."}/>
            <div className="content-container">
                <h1>Checkout</h1>
            </div>
        </div>
    )
}

export default Purchase
