import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
    { title: 'song 1', description: 'Description 1', picture: 'picture1.jpg' },
    { title: 'song 2', description: 'Description 2', picture: 'picture2.jpg' },
    { title: 'song 3', description: 'Description 3', picture: 'picture3.jpg' },
];

export const SongList = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearchInput = (event: any) => {
        setSearchInput(event.target.value);
    };

    let filteredService = services.filter((service) => service.title.toLowerCase().includes(searchInput.toLowerCase()));
    let content = (
        <div className="flex flex-wrap gap-6 md:gap-0 -mx-2 mb-10">
            {filteredService.map((item) => (
                <div className="w-full md:w-1/2 md:mt-4 lg:w-1/3 h-auto px-4" key={item.title}>
                    <div
                        className="
          p-4
          pt-9
          h-full
          md:px-7
          xl:px-10
          bg-white
          shadow-md
          border
          border-custumBlue
          hover:shadow-lg
          hover:bg-customDark
          hover:text-white
          transition duration-300 ease-in-out
          flex
          flex-col
          justify-start
          relative
          group
          overflow-hidden
          rounded
        "
                    >
                        <h4 className="relative z-10 font-semibold font-raleway text-2xl text-dark mb-3">{item.title}</h4>
                        <div className=" relative z-10 w-1/3 h-1.5 bg-secondColor mb-4" />
                        <p className=" relative z-10 text-body-color text-sm font-poppins">{item.description}</p>
                        <p className=" relative z-10 text-body-color text-sm font-poppins">{item.description}</p>
                        <p className=" relative z-10 text-body-color text-sm font-poppins">{item.description}</p>
                        <img
                            className=" absolute z-0 top-0 left-0 invisible object-center object-cover group-hover:visible h-full w-full bg-black transition duration-200 ease-in-out group-hover:brightness-50 group-hover:opacity-80 group-hover:scale-110"
                            src={item.picture}
                            alt="img"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
    return (
        <div className=" relative w-5/6 items-center object-center mx-auto px-4 pt-10 pb-15">
            <div className=" pb-12">
                <Link to="/new-song" className=" px-10 py-2 rounded text-white bg-custumBlue font-railway-500 ">
                    Add new Song
                </Link>
                <h3 className="mt-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptates praesentium possimus ex quisquam placeat totam officiis atque facere deserunt sint, debitis, tempore
                    assumenda dignissimos error! Earum veniam error asperiores.
                </h3>
            </div>
            <div>
                <div className="absolute top-6 right-1">
                    <div className="relative mx-auto w-max">
                        <input
                            type="text"
                            id="topbar-search"
                            className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-mainColor focus:pl-16 focus:pr-4"
                            value={searchInput}
                            onChange={handleSearchInput}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-mainColor peer-focus:stroke-mainColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
                <>{content}</>
            </div>
        </div>
    );
};
