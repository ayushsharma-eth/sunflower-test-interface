import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
export const Search = (props) => {

    const [query, setQuery] = useState(0);
    const [redirect, setRedirect] = useState(0);
    const [category, setCategory] = useState(props.selector);

    const _placeholder = props.placeholder;

    const search = (e) => {
        //e.preventDefault();
        console.log(query.value)
        setRedirect(true);
    }

    return (
        <div>
            {redirect ? <Redirect push to={"/category/" + category.value + "/query/" + query.value.toString()}/> : null}
            <form onSubmit={(e) => search(e)}>
                    <select id="searchSelect" ref={(input) => {setCategory(input)}} required>
                        <option value="All">All</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Health">Health</option>
                    </select>
                    <input id="search" ref={(input) => setQuery(input)} type="text" placeholder={_placeholder} required/>
                    <input type="submit" value="Search" hidden={true}/>
            </form>
        </div>
    )
}

export default Search
