import React from "react";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

function ReviewCard({review}) {
    return (
        <div className="flex flex-col items-center justify-center border border-gray-400 rounded-lg p-4 mb-4">
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
      );
    }
export default ReviewCard