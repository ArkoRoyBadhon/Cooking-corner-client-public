import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllServices = () => {
    const services = useLoaderData()


    return (
        <div className="max-w-screen-xl mx-auto my-10">
            <h2 className='text-center text-2xl font-bold'>All Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;