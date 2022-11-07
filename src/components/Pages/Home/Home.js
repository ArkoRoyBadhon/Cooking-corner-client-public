import React from 'react';
import img from '../../../assets/cook-circle.gif'

const Home = () => {
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
        </div>
    );
};

export default Home;