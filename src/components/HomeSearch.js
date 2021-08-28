import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom";
import "../css/Home.css"
export const Search = (props) => {

    const [query, setQuery] = useState(0);
    const [redirect, setRedirect] = useState(0);
    const [category, setCategory] = useState(0);

    const _placeholder = props.placeholder;

    const search = (e) => {
        //e.preventDefault();
        console.log(query.value)
        console.log(category.value)
        setRedirect(true);
    }

    const options = ["All", "Electronics", "Clothing", "Health"];

    return (
        <div>
            {redirect ? <Redirect push to={"/category/" + options[category.value].toLowerCase() + "/query/" + query.value.toString()}/> : null}
            <form onSubmit={(e) => search(e)}>
                <select id="homeSearchSelect" ref = {(input) => setCategory(input)} required>
                    <option value="0">{options[0]}</option>
                    <option value="1">{options[1]}</option>
                    <option value="2">{options[2]}</option>
                    <option value="3">{options[3]}</option>
                </select>
                <input id="homeSearch" ref={(input) => setQuery(input)} type="text" placeholder={_placeholder} required/>
                <input id="homeSearchButton" type="submit" value="Search" hidden={false}/>
            </form>
        </div>
    )
}

export default Search
