import React from 'react'
import Search from '../components/Search'
import { Link } from "react-router-dom"
import { useEthers } from '@usedapp/core'
import '../css/testSplit.css'

export const Navigation = (props) => {
    const search = props.search;
    const placeholder = props.placeholder;
    const { account } = useEthers();

    return (
        <div className="nav">
            <div className="navFlex">
                <div className="buttons">
                    <div>
                        <Link to={"/"}><button>Home</button></Link>
                    </div>
                    {account && <div>
                    {account && <Link to={"/merchant/"}><button>Your Markets</button></Link>}
                    </div>}
                    <div>
                    <Link to={"/balances/"}><button>Balances</button></Link>
                    </div>
                </div>
                {search && <div>
                    {search && <Search placeholder={placeholder}/>}
                </div>}
            </div>
        </div>
    )
}

export default Navigation
