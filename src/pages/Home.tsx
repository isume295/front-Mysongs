import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Statistics } from '../components/Statistics';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { statisticsSelector } from '../redux/store';
import { fetchStatistics } from '../redux/statistics/statisticSlice';

export const Home = () => {
    const { statistics } = useAppSelector(statisticsSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (statistics.length === 0) {
            dispatch(fetchStatistics());
        }
    }, [dispatch, statistics.length]);

    return (
        <>
            <Hero />
            <Statistics />
        </>
    );
};
