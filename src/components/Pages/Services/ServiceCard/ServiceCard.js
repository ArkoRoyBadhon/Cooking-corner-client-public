import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



const ServiceCard = ({ service }) => {
    const { _id, name, image, rating, price, description } = service;


    return (
        <div className="card w-96 bg-base-100 shadow-xl my-5">
            <PhotoProvider>
                <PhotoView src={image}>
                    <figure><img src={image} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>


            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className="text-md font-bold">Price: {price} BDT</h4>
                <p>{description.slice(0, 100)}...</p>
                <div className="card-actions justify-end items-center">
                    <p className='justify-start'>{rating}</p>
                    <Link to={`/service/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
