import React from 'react';
import errorpic from '../../../assets/71244-404-error.gif'

const ErrorPage = () => {
    return (
        <div className='w-3/5 my-32 mx-auto'>
            <img className='mx-auto' src={errorpic} alt="" />
        </div>
    );
};

export default ErrorPage;