import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { albumSelector } from '../redux/store';
import { getAlbumPending } from '../redux/albums/albumSlice';
import { AlbumStatistic } from '../components/AlbumStatistic';

export const AlbumsPage = () => {
    const { albums } = useAppSelector(albumSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (albums.length === 0) {
            dispatch(getAlbumPending());
        }
    }, [dispatch, albums.length]);
    return (
        <div>
            <AlbumStatistic />
        </div>
    );
};
