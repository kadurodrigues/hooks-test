import React from 'react';
import Search from '../Search';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAlbumById } from '../../store/actions/search';

const Albums = () => {
	const { isAlbumFound, isAlbumVisited } = useSelector(state =>  state.search);
	const { artist, album } = useSelector(state => state.persist);
	const dispatch = useDispatch();

	if (isAlbumFound && !isAlbumVisited) {
		return <Redirect to={{ pathname: `/album/${album[0].name}` }} />
	}

	return (
		<>
			<Search />
			{ artist &&
			<>
				<h2>{artist.name}</h2>
				<ul>
				{artist[0].albums.map(album =>
					<li key={album.id}>
						<button type="button" onClick={() => dispatch(getAlbumById(album.id))}>{album.name}</button>
					</li>
				)}
				</ul>
			</>
			}
		</>
	)
}

export default Albums