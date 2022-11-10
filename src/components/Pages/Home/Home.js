import React, { useEffect, useState } from 'react';
import img from '../../../assets/cook-circle.gif'
import ingredient from '../../../assets/ingredients.jpg'
import ingredient2 from '../../../assets/ingredients2.jpg'
import modelPerson from '../../../assets/success-women.jpg'
// import food from '../../../assets/food.jpg'
import ServiceCard from '../Services/ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    const [services, setServices] = useState([]);
    useTitle("Home");

    useEffect(() => {
        fetch('https://cooking-corner-server-side.vercel.app/serviceslimit')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <div className="hero  bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse text-center lg:text-left">
                    <img src={img} className="w-4/5 lg:max-w-sm rounded-lg " alt='' />
                    <div className='lg:w-2/4 mx-auto'>
                        <h1 className="text-5xl font-bold">Here is your Chef</h1>
                        <p className="py-6 w-4/5 mx-auto lg:w-full">Hello I am Arko Roy Badhon. I am the world class chef in bd. I offer some home made food service or menu to you at very affordable price. You should try me with my services.</p>
                        <Link to='/services' className="btn btn-primary">View ALL Dishes</Link>
                    </div>
                </div>
            </div>

            <div className="hero my-8 bg-fixed" style={{ backgroundImage: `url(https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md flex-col lg:flex lg:block">
                        <h1 className="mb-5 text-5xl font-bold">Special Discount</h1>
                        <p className="mb-5 text-xl">upto 30%</p>
                        <p className="mb-5 text-md">Very Limited Offer</p>
                        <Link to='/services' className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>

            <div className="hero  bg-base-100 my-8">
                <div className="hero-content flex-col lg:flex-row text-center lg:text-left">
                    <img src={ingredient} className="max-w-sm w-60 h-40 rounded-lg" alt='' />
                    <img src={ingredient2} className="max-w-sm h-40 w-60 rounded-lg" alt='' />
                    <div className='lg:w-2/4 mx-auto'>
                        <h1 className="text-5xl font-bold">Perfect Ingredients</h1>
                        <p className="py-6">In my food services, i ensure you that the best ingredients are used in my food items. Thats why my services serves you with a premium quality.</p>
                    </div>
                </div>
            </div>

            <div className="my-8 max-w-screen-xl mx-auto">
                <h2 className="text-center text-3xl font-extrabold my-8">Special Dishes</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
                <div className="text-center my-5">
                    <Link to='/services' className='btn btn-outline btn-primary'>See ALL</Link>
                </div>
            </div>

            <div className="hero  bg-base-100 my-12">
                <div className="hero-content flex-col lg:flex-row text-center lg:text-left">
                    <img src={modelPerson} className="w-4/5 lg:max-w-sm rounded-lg " alt='' />
                    <div className='lg:w-2/4 mx-auto'>
                        <h1 className="text-5xl font-bold">You Can Call me as Cloud Kitchen Chef</h1>
                        <div className="py-6 w-4/5 mx-auto lg:w-full">
                            <ul>
                                <li>You Can feel Home made food taste</li>
                                <li>Fully Healthy and hygenic</li>
                                <li>Less Price Than Restaurants</li>
                            </ul>
                        </div>
                        <Link to='/services' className="btn btn-primary">View ALL Dishes</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;