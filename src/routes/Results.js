import React, { Component } from 'react';

import {
    Link
} from 'react-router-dom';

import styled from 'styled-components';

import Posters from '../components/Posters.js';

const Container = styled.div`
    margin: 25px;

    #search {
        text-decoration: none;
    }

    #search > span {
        margin: 10px;
    }
`;

class Results extends Component {
    render() {
        return(
            <Container>
                <Link to="/" id="search">
                    <span role="img" aria-label="search" style={{ fontSize: 42 + 'px' }}>🔍</span>
                </Link>
                <Posters movies={this.props.location.state.data} />
            </Container>
        )
    }
}

export default Results;