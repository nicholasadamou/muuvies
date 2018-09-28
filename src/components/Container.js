import React from 'react';

import {
    Link
} from 'react-router-dom';

import styled from 'styled-components';

const Search = styled(Link)`
    text-decoration: none;

    span {
        margin: 10px;
        font-size: 42px;
    }
`;

const Container = (props) => {
    return(
        <div style={{margin: 25 + 'px'}}>
            <Search to="/" class="search">
                <span role="img" aria-label="search">🔍</span>
            </Search>
            {props.children}
        </div>
    )
}

export default Container;