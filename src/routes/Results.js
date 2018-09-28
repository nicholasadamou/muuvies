import React, { Component } from 'react';

import {
    Link
} from 'react-router-dom';

import styled from 'styled-components';

import Container from '../components/Container.js';
import Posters from '../components/Posters.js';

class Results extends Component {
    render() {
        return(
            <Container>
                <Posters movies={this.props.location.state.data} />
            </Container>
        )
    }
}

export default Results;