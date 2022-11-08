import React, { useEffect, useState } from 'react';
import img from '../../../assets/cook-circle.gif'
import ingredient from '../../../assets/ingredients.jpg'
import ingredient2 from '../../../assets/ingredients2.jpg'
import food from '../../../assets/food.jpg'
import ServiceCard from '../Services/ServiceCard/ServiceCard';

const Home = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('services.json')
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
                    <img src={img} className="max-w-sm rounded-lg" alt='' />
                    <div className='lg:w-2/4 mx-auto'>
                        <h1 className="text-5xl font-bold">Here is your Chef</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">View ALL Dishes</button>
                    </div>
                </div>
            </div>

            <div className="hero my-8 bg-fixed" style={{ backgroundImage: `url(https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md flex lg:block">
                        <h1 className="mb-5 text-5xl font-bold">Special Discount</h1>
                        <p className="mb-5 text-xl">upto 30%</p>
                        <p className="mb-5 text-md">Very Limited Offer</p>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="hero  bg-base-100 my-8">
                <div className="hero-content flex-col lg:flex-row text-center lg:text-left">
                    <img src={ingredient} className="max-w-sm w-60 h-40 rounded-lg" alt='' />
                    <img src={ingredient2} className="max-w-sm h-40 w-60 rounded-lg" alt='' />
                    <div className='lg:w-2/4 mx-auto'>
                        <h1 className="text-5xl font-bold">Perfect Ingredients</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>

            <div className="my-8 max-w-screen-xl mx-auto">
                <h2 className="text-center text-3xl font-extrabold my-8">Special Dishes</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {
                        services.map(service => <ServiceCard
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
                <div className="text-center my-5">
                    <button className='btn btn-outline btn-primary'>See ALL</button>
                </div>
            </div>


        </div>
    );
};

export default Home;