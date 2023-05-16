import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ReviewCard({ projectToView, review, user, reviews, setReviews }) {
  const [isClicked, setIsClicked] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [isDelete, setIsDelete] = useState(false)
  const [rating, setRating] = useState(review?.rating)
  const [text, setText] = useState(review?.text)

  const handleCardClick = () => {
    if (review?.user_id === user?.id) {
      setIsClicked(!isClicked)
    }
  }

  const handleEditClick = () => {
    setIsClicked(!isClicked)
    setIsEdit(!isEdit)
  }

  const handleDeleteClick = () => {
    setIsClicked(!isClicked)
    setIsDelete(!isDelete)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`/review/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating, text }),
    })
      .then((r) => r.json())
      .then((data) => {
        const updatedReviews = reviews?.map((review) => {
          if (review.id === data.id) {
            return data
          } else {
            return review
          }
        })
        setReviews(updatedReviews)
      })
    setIsEdit(!isEdit)
  }

  const handleDelete = () => {
    setReviews(reviews.filter((theone) => theone.id !== review.id))
    fetch(`/review/${review.id}`, {
      method: "DELETE",
    })
    setIsDelete(!isDelete)
  }

  return (
    <>
      {isClicked ? (
        <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen z-50 bg-black bg-opacity-70">
          <div className="md:flex h-1/8 w-1/2 text-md flex flex-col bg-gray-700 border border-gray-900 p-6 rounded-lg justify-center text-center">
            <div className="gap-1 flex">
              <button onClick={() => setIsClicked(!isClicked)} className="border text-center border-gray-600 w-1/3 rounded-lg px-4 py-2 bg-gray-800 hover:bg-gray-900 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1" type="submit" >Cancel</button>
              <button onClick={handleEditClick} className="border border-gray-600 w-1/3 text-center rounded-lg px-4 py-2 bg-gray-800 hover:bg-gray-900 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1" type="submit" >Edit Review</button>
              <button onClick={handleDeleteClick} className="border border-gray-600 w-1/3  text-center rounded-lg px-4 py-2 bg-red-600 hover:bg-red-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1" type="submit" >Delete Review</button>
            </div>
          </div>
        </div>
      ) : null}
      {isEdit ? (
        <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen z-50 bg-black bg-opacity-70">
          <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center justify-center">
            <div className="bg-gray-700 border border-gray-900 rounded-lg p-6 w-full">
              <label htmlFor="rating" className="block text-white font-bold mb-2">Rating</label>
              <input type="number" id="rating" name="rating" min="0" max="5" className="border border-gray-600 text-black rounded-lg py-2 px-3 w-full mb-4 text-center" value={rating} onChange={(e) => setRating(e.target.value)} />
              <label htmlFor="review" className="block text-white font-bold mb-2">Review</label>
              <textarea id="review" name="review" className="border border-gray-600 text-black rounded-lg py-2 px-3 w-full mb-4 text-center" value={text} onChange={(e) => setText(e.target.value)} />
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 mr-5 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Review</button>
              <button onClick={() => setIsEdit(!isEdit)} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
            </div>
          </form>
        </div>
      ) : null}
      {isDelete ? (
        <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen z-50 bg-black bg-opacity-70">
          <div className="md:flex h-1/8 w-1/2 text-md flex flex-col bg-gray-700 border border-gray-900 p-6 rounded-lg justify-center text-center">
            <p className="mb-4">Are you sure want to delete this Review?</p>
            <div className="gap-1 flex">
              <button onClick={() => setIsDelete(!isDelete)} className="border border-gray-600 w-1/2 rounded-lg px-4 py-2 bg-gray-800 hover:bg-gray-900 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1" type="submit" >Cancel</button>
              <button onClick={handleDelete} className="border border-gray-600 w-1/2 rounded-lg px-4 py-2 bg-red-600 hover:bg-red-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1" type="submit" >Delete Review</button>
            </div>
          </div>
        </div>
      ) : null}
      <div onClick={handleCardClick} className={`flex flex-col items-center justify-center border border-gray-400 rounded-lg p-4 mb-4 ${review.user_id === user.id ? "hover:bg-blue-950 transition duration-300" : null}`}>
        <h1 className="text-lg font-bold mb-2">{review.user_username}</h1>
        <div className="flex justify-center items-center mb-2">
          {[...Array(review.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-6 h-6 fill-current text-yellow-500 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 0l3.11 6.39 6.94 1-5 4.86 1.17 7.19-6.22-3.26-6.22 3.26 1.17-7.19-5-4.86 6.94-1z" />
            </svg>
          ))}
        </div>
        <p className="flex overflow-wrap whitespace-pre-wrap">{review.text}</p>
      </div>
    </>
  );
}
export default ReviewCard