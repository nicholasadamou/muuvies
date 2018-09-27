
import React, { Component } from 'react';

import { map } from 'ramda';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    text-align: center;
`;

const StyledImage = styled.img`
    margin: 15px;
`;

class Posters extends Component {
  render() {
    const poster = movie => {
      return (
        <StyledImage key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
      )
    };

    return (
      <Container>
        {map(poster, this.props.movies)}
      </Container>
    )
  }
}

export default Posters;