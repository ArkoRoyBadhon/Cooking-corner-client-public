import React from 'react';

const ServiceCard = ({service}) => {
    const {name, image, rating, price, description} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-5">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className="text-md font-bold">Price: {price} BDT</h4>
                <p>{description}</p>
                <div className="card-actions justify-end items-center">
                    <p className='justify-start'>{rating}</p>
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;