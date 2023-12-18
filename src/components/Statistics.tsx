import React from 'react';

export const Statistics = () => {
    return (
        <div className=" relative z-0 flex w-full justify-center md:pt-5 items-center">
            <div className="container flex flex-col bg-white">
                <div className="w-full draggable">
                    <div className="container flex flex-col items-center gap-16 my-10">
                        <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8">
                            <div className="flex flex-col items-center text-mainColor">
                                <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
                                    <span id="countto1" />
                                    0+
                                </h3>
                                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">Successful Projects</p>
                            </div>
                            <div className="flex flex-col items-center text-mainColor">
                                <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
                                    <span id="countto2" />0
                                </h3>
                                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">Service Growth</p>
                            </div>
                            <div className="flex flex-col items-center text-mainColor">
                                <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
                                    <span id="countto3" />
                                    0+
                                </h3>
                                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">Global Partners</p>
                            </div>
                            <div className="flex flex-col items-cente text-mainColor">
                                <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
                                    <span id="countto4" />
                                    0+
                                </h3>
                                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">Team members</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
