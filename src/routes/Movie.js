import React, { Component } from 'react';

import styled from 'styled-components';

import Container from '../components/Container.js';

const MovieWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;

    margin-top: 25px;

    font-family: 'Roboto', sans-serif;

	@media (max-width: 375px) {
		flex-direction: column;
	}

    h1, h2 {
        margin: 18px 0;

        :first-child {
            margin-top: 0;
        }
    }

    a {
        color: black;
    }
`;

const DetailsWrapper = styled.div`
    flex-direction: column;
    margin-left: 25px;

	@media (max-width: 375px) {
		margin: 0;
	}

    .imdb-link {
        color: black;
    }
`;

const Poster = styled.img`
    width: 25%;

	@media (max-width: 375px) {
		width: 100%;
	}
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;

	@media (max-width: 375px) {
		align-items: center;

		margin: 15px 0;
	}

    .title {
        margin-bottom: 10px;

        font-size: 32px;

		@media (max-width: 375px) {
			margin: 0;

			font-size: 24px;
		}
    }

    .year {
        margin-left: 5px;
        color: #BBBBBB;
        font-size: 32px;
        font-weight: 300;

		@media (max-width: 375px) {
			font-size: 18px;
		}
    }
`;

const MetaWrapper = styled.div`
    color: #BBB;

	@media (max-width: 375px) {
		margin-top: 5px;
	}

    .seperator {
        position: relative;
        bottom: 2px;

        margin: 0 5px;

        font-size: 12px;
	}
`;

const Overview = styled.p`
    font-size: 24px;

	@media (max-width: 375px) {
		margin: 10px 0;
	}
`;

const Plot = styled.p`
    width: 45%;
    line-height: 2;

	@media (max-width: 375px) {
		width: 100%;
	}
`;

const List = styled.p`
    > span {
        font-weight: bold;
    }
`;

class Movie extends Component {
    constructor() {
        super();

        this.state = {
			data: []
        };
    }

    componentDidMount() {
        const movie = this.props.location.state.movie;

        fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${movie.imdbID}&type=movie`)
            .then(res => res.json())
            .then(res => {
                return res;
            }).then(json => {
                this.setState({
                    data: json,
                });
            }).catch(err => this.setState({
                error: 'Error Occurred: Try Again',
                data: [],
                query: ''
            }));
    }

    render() {
        const movie = this.props.location.state.movie;
        const movieMeta = this.state.data;

        return(
            <Container>
                <MovieWrapper>
                    <Poster key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
                    <DetailsWrapper id="details-wrapper">
                        <TitleWrapper>
                            <a href={'https://www.imdb.com/title/' + movie.imdbID + '/'} className="imdb-link" target="_blank" rel="noopener noreferrer">
                                <h1 className="title">
                                    {movie.Title}
                                </h1>
                            </a>
                            <span className="year"> ({movie.Year})</span>
                        </TitleWrapper>
                        <MetaWrapper>
                            <span role="img" aria-label="popcorn">🍿</span>
                                <span className="seperator">|</span>
                                <span className="rated">{movieMeta.Rated}</span>
                                <span className="seperator">|</span>
                                <span className="Runtime">{movieMeta.Runtime}</span>
                                <span className="seperator">|</span>
                                <span className="Genre">{movieMeta.Genre}</span>
                                <span className="seperator">|</span>
                                <span className="Boxoffice">{movieMeta.BoxOffice}</span>
                                <span className="seperator">|</span>
                                <span className="Released">{movieMeta.Released} ({movieMeta.Country})</span>
                            </MetaWrapper>
                        <Overview>
                            Overview
                        </Overview>
                        <Plot>{movieMeta.Plot}</Plot>
                        <List><span><span role="img" aria-label="Directors">🎬</span>Directors:</span> {movieMeta.Director}</List>
                        <List><span><span role="img" aria-label="actors">🎭</span> Actors:</span> {movieMeta.Actors}</List>
                        <List><span><span role="img" aria-label="awards">🏆</span>Awards:</span> {movieMeta.Awards}</List>
                        <List>
                            <span>
                                <span role="img" aria-label="star">🌟</span>
                                <a href={'https://www.imdb.com/title/' + movie.imdbID + '/criticreviews?ref_=tt_ov_rt'} target="_blank" rel="noopener noreferrer">Metascore</a>
                                :
                            </span> {movieMeta.Metascore}/100
                        </List>
                        <List>
                            <span>
                                <span role="img" aria-label="star">🌟</span>
                                <a href={'https://www.imdb.com/title/' + movie.imdbID + '/ratings?ref_=tt_ov_rt'} target="_blank" rel="noopener noreferrer">IMDb Rating</a>
                                :
                            </span> {movieMeta.imdbRating}/100 with {movieMeta.imdbVotes} votes
                        </List>
                    </DetailsWrapper>
                </MovieWrapper>
            </Container>
        )
    }
}

export default Movie;
