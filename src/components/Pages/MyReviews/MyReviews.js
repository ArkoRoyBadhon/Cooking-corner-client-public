import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../../Context/AuthContext';
import useTitle from '../../Hooks/useTitle';
import ReviewTable from './ReviewTable';
import toast from 'react-hot-toast';


const MyReviews = () => {
    const { user, logOut } = useContext(AuthProvider);
    const [reviewData, setReviewData] = useState([])
    useTitle("MyReviews");


    const notify = () => toast.success('Delete Review Successfully');

    useEffect(() => {
        fetch(`https://cooking-corner-server-side.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('cooking-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => {
                setReviewData(data)
                // console.log(reviewData);
            })
    }, [reviewData, user])

    const handleDelete = (id) => {
        const confirmValue = window.confirm('Are you sure to delete this review??')
        if (confirmValue) {
            fetch(`https://cooking-corner-server-side.vercel.app/reviews/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('cooking-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        notify()
                        const remaining = reviewData.filter(odr => odr._id !== id)
                        setReviewData(remaining);
                    }

                })
                .catch(err => console.error(err))
        }

    }

    return (
        reviewData?.length > 0 ?
            <div>
                <div className="overflow-x-auto max-w-screen-xl mx-auto min-h-screen mt-8">
                    <table className="table max-w-screen mx-auto">
                        <thead>
                            <tr className='px-3'>
                                <th className='p-0'>Name</th>
                                <th className='p-1'>Rating</th>
                                <th className='p-1'>Service Name</th>
                                <th className='p-1 min-w-6 max-w-8'>Review</th>
                                <th className='p-1'>Time</th>
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