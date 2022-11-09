import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../../../Context/AuthContext';
import useTitle from '../../../Hooks/useTitle';
import Spinner from '../../../Spinner';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllServices = () => {
    const services = useLoaderData();
    const { loading } = useContext(AuthProvider);

    const [loader, setLoader] = useState(false);

    useTitle("Service");



    useEffect(() => {
        setLoader(true)
    }, [])

    if (loader) {
        return <div className='w-3/5 mx-auto text-center my-40'>
            <div className='hidden'>
                {
                    setTimeout(() => {
                        setLoader(false)
                    }, 400)
                }
            </div>
            <Spinner></Spinner>
        </div>
    }

    return (
        <div className="max-w-screen-xl mx-auto my-10">
            <h2 className='text-center text-2xl font-bold'>All Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    services?.map(service => <ServiceCard
                        key={service?._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;