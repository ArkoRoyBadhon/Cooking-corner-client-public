import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../../Context/AuthContext';
import useTitle from '../../Hooks/useTitle';
import ReviewTable from './ReviewTable';


const MyReviews = () => {
    const { user } = useContext(AuthProvider);
    const [reviewData, setReviewData] = useState([])
    useTitle("MyReviews");


    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviewData(data)
                // console.log(reviewData);
            })
    }, [reviewData, user])

    const handleDelete = (id) => {
        alert('delete btn'+id)
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                alert('deleted successfully');
                const remaining = reviewData.filter(odr => odr._id !== id)
                setReviewData(remaining);
            }
            
        })
        .catch(err => console.error(err))
    }

    return (
        reviewData.length > 0 ?
        <div>
            <div className="overflow-x-auto max-w-screen-xl mx-auto min-h-screen mt-8">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Service Name</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviewData.map(review =>
                                <ReviewTable
                                    key={review._id}
                                    review={review}
                                    reviewData={reviewData}
                                    handleDelete={handleDelete}
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