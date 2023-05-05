import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "./ReviewCard";

function Reviews({ projectToView, setProjectToView }) {
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState("")

    useEffect(() => {
        fetch(`/projects/${projectToView.id}`)
            .then((r) => r.json())
            .then((project) => {
                setProjectToView(project)
            })
    }, [])

    const reviewsToDisplay = projectToView?.reviews?.map((review) => {
        return <ReviewCard key={review.id} review={review} />
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="flex flex-col min-h-screen w-screen bg-gradient-to-b from-gray-800 to-gray-900 items-center justify-center text-white">
            <h1 className="text-4xl mb-4">Reviews</h1>
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
                {reviewsToDisplay}
                <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center justify-center">
                    <div className="bg-gray-700 border border-gray-900 rounded-lg p-6 w-full">
                        <label htmlFor="rating" className="block text-white font-bold mb-2">Rating</label>
                        <input type="number" id="rating" name="rating" min="0" max="5" className="border border-gray-600 rounded-lg py-2 px-3 w-full mb-4 text-center" value={rating} onChange={(e) => setRating(e.target.value)} />
                        <label htmlFor="review" className="block text-white font-bold mb-2">Review</label>
                        <textarea id="review" name="review" className="border border-gray-600 rounded-lg py-2 px-3 w-full mb-4 text-center" value={review} onChange={(e) => setReview(e.target.value)} />
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Review</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Reviews