import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../../Context/AuthContext';
import ReviewTable from './ReviewTable';


const MyReviews = () => {
    const { user } = useContext(AuthProvider);
    const [reviewData, setReviewData] = useState([])

    

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviewData(data)
                console.log(reviewData);
            })
    }, [user])

    return (
        <div>
            {
                reviewData.map(review =>
                    <ReviewTable
                        key={review._id}
                        review={review}
                    ></ReviewTable>
                )
            }
        </div>
    );
};

export default MyReviews;