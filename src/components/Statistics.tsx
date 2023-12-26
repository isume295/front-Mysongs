import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { statisticsSelector } from '../redux/store';
import LoadingScreen from './LoadingScreen';

export const Statistics = () => {
    const { statistics, isLoading, errMsg } = useAppSelector(statisticsSelector);
    let content;
    if (isLoading) {
        return <LoadingScreen />;
    } else if (!isLoading && statistics.length > 0) {
        content = (
            <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8">
                <div className="flex flex-col items-center text-mainColor">
                    <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
                        <span id="countto1">{statistics[0].totalSongs}+</span>
                    </h3>
                    <p className="text-base font-medium leading-7 text-center text-dark-grey-600">Songs</p>
                </div>

                <div className="flex flex-col items-center text-mainColor">
                    <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
                        <span id="countto2" />
                        {statistics[0].totalArtists}
                    </h3>
                    <p className="text-base font-medium leading-7 text-center text-dark-grey-600">Artists</p>
                </div>
                <div className="flex flex-col items-center text-mainColor">
                    <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
                        <span id="countto3" />
                        {statistics[0].totalAlbums}+
                    </h3>
                    <p className="text-base font-medium leading-7 text-center text-dark-grey-600">Albums</p>
                </div>
                <div className="flex flex-col items-cente text-mainColor">
                    <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
                        <span id="countto4" />
                        {statistics[0].totalGenres}
                    </h3>
                    <p className="text-base font-medium leading-7 text-center text-dark-grey-600">Genres</p>
                </div>
            </div>
        );
    } else if (!isLoading && errMsg !== '') {
        content = <h1 className="text-2xl font-medium text-red-600 text-center w-full">Couldn't refresh {errMsg}</h1>;
    }

    return (
        <div className=" relative z-0 flex w-full justify-center md:pt-5 items-center">
            <div className="container flex flex-col bg-white">
                <div className="w-full draggable">
                    <div className="container flex flex-col items-center gap-16 my-10">{content}</div>
                </div>
            </div>
        </div>
    );
};
