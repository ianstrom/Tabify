import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";

function Reviews({ projectToView, setProjectToView, user }) {
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState("")
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        fetch(`https://tabify.onrender.com/tabs/${params.id}`)
            .then((r) => r.json())
            .then((project) => {
                setProjectToView(project)
            })
    }, [])

    useEffect(() => {
        fetch(`https://tabify.onrender.com/reviews/${params.id}`)
            .then((r) => r.json())
            .then((data) => {
                setReviews(data)
            })
    }, [])


    const reviewsToDisplay = reviews?.map((review) => {
        return <ReviewCard projectToView={projectToView} key={review.id} review={review} user={user} setReviews={setReviews} reviews={reviews} />
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://tabify.onrender.com/reviews/${projectToView?.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ rating, text: review, tab_id: projectToView.id, user_id: user.id }),
        })
            .then((r) => r.json())
            .then((data) => {
                setReviews([...reviews, data])
            }
            )
    }

    const handleBackClick = () => {
        if (projectToView?.user_id == user?.id) {
            navigate(`/edit_project/${params.id}`)
        } else {
            navigate(`/project/${params.id}`)
        }
    }

    return (
        <div style={{background: "linear-gradient(140.6deg, #052331 55%, #004c3f 100.2%)"}} className="flex flex-col min-h-screen w-screen items-center justify-center text-white">
            <div className="text-2xl flex gap-4 fixed top-8 right-10">
                <button onClick={handleBackClick} className="text-2xl border transition-colors duration-300 border-white text-white rounded-md px-4 py-2 hover:bg-white hover:text-gray-800">Back</button>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
                <h1 className="text-4xl text-center mb-4">Reviews</h1>
                {reviewsToDisplay}
                {user?.id == projectToView?.user_id ? null : (
                    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center justify-center">
                        <div className="bg-gray-700 border border-gray-900 rounded-lg p-6 w-full">
                            <label htmlFor="rating" className="block text-white font-bold mb-2">Rating</label>
                            <input type="number" id="rating" name="rating" min="0" max="5" className="border border-gray-600 text-black rounded-lg py-2 px-3 w-full mb-4 text-center" value={rating} onChange={(e) => setRating(e.target.value)} />
                            <label htmlFor="review" className="block text-white font-bold mb-2">Review</label>
                            <textarea id="review" name="review" className="border border-gray-600 text-black rounded-lg py-2 px-3 w-full mb-4 text-center" value={review} onChange={(e) => setReview(e.target.value)} />
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Review</button>
                        </div>
                    </form>
                )}

            </div>
        </div>
    );
}
export default Reviews