import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
export const Search = (props) => {

    const [query, setQuery] = useState(0);
    const [redirect, setRedirect] = useState(0);

    const _placeholder = props.placeholder;

    const search = (e) => {
        // e.preventDefault();
        console.log(query.value)
        setRedirect(true);
    }

    return (
        <div>
            {redirect ? <Redirect push to={"/results/" + query.value.toString()}/> : null}
            <form onSubmit={(e) => search(e)}>
                    <input id="search" ref={(input) => setQuery(input)} type="text" placeholder={_placeholder} required/>
                    <input type="submit" value="Search" hidden={false}/>
            </form>
        </div>
    )
}

export default Search
