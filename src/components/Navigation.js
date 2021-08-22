import React from 'react'
import Search from '../components/Search'
import { Link } from "react-router-dom"
import { useEthers } from '@usedapp/core'

export const Navigation = (props) => {
    const search = props.search;
    const placeholder = props.placeholder;
    const { account } = useEthers();

    return (
        <div>
            <Link to={"/"}><button>Home</button></Link>
            {account && <Link to={"/merchant/"}><button>Your Markets</button></Link>}
            <Link to={"/balances/"}><button>Balances</button></Link>
            {search && <Search placeholder={placeholder}/>}
        </div>
    )
}

export default Navigation
