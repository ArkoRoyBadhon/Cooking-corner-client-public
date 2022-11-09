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

    console.log(reviewData.length);

    // if(reviewData.length >)

    return (
        reviewData.length > 0 ?
        <div>
            <div className="overflow-x-auto max-w-screen-xl mx-auto min-h-screen mt-8">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviewData.map(review =>
                                <ReviewTable
                                    key={review._id}
                                    review={review}
                                    reviewData={reviewData}
                                ></ReviewTable>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        :
        <h2 className="text-2xl font-bold text-center my-40">No Review Found</h2>
    );
};

export default MyReviews;