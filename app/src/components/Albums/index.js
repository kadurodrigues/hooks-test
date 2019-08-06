import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAlbum } from '../../store/actions/search';

import SearchBar from '../Search';
import Cover from '../Cover';

import * as S from './styled';

const setPath = (string) => string.replace(/[.:' ]+/g, "-").toLowerCase();

const Albums = () => {
	const { isAlbumFound, isAlbumVisited } = useSelector(state =>  state.search);
	const { artist, album, searchValuePersisted } = useSelector(state => state.persist);
	const dispatch = useDispatch();

	if (isAlbumFound && !isAlbumVisited) {
		let albumName = setPath(album.name);
		return <Redirect to={{ pathname: `/album/${albumName}` }} />
	}

	return (
		<>
			<SearchBar />
			{ artist &&
				<>
					<S.Result>
						<S.ResultText>Results for "{searchValuePersisted}"</S.ResultText>
					</S.Result> 
					<S.List>
						{artist.albums.map(album => (
							<S.ListItem key={album.id} onClick={() => dispatch(getAlbum(album.id))}>
								<Cover {...album} />
								<S.ArtistName>{artist.name}</S.ArtistName>
							</S.ListItem>
						))}
					</S.List>
				</>
			}
		</>
	)
}

export default Albums;