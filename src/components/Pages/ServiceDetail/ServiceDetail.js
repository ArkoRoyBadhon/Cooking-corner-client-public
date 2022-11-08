import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const service = useLoaderData();
    const { _id, name, image, rating, price, description } = service;

    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <h3 className="text-center text-2xl font-bold">{name}</h3>
            <div className="my-5">
                <img className='w-3/5 mx-auto rounded-lg' src={image} alt="" />
                <small></small>
            </div>
            <div className="flex justify-between w-3/5 mx-auto">
                <h3 className="text-xl font-semibold">Price: {price} BDT</h3>
                <h4>Rating: {rating}</h4>
            </div>
            <p className="text-md">{description}</p>
        </div>
    );
};

export default ServiceDetail;