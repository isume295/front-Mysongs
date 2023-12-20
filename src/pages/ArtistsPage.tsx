import React, { useEffect } from 'react';
import { artistSelector } from '../redux/store';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getArtistPending } from '../redux/artist/artistSlice';
import { ArtistStatistic } from '../components/ArtistStatistic';

export const ArtistsPage = () => {
    const { artists } = useAppSelector(artistSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (artists.length === 0) {
            dispatch(getArtistPending());
        }
    }, [dispatch, artists.length]);
    return (
        <div>
            <ArtistStatistic />
        </div>
    );
};
