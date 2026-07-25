import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full rounded-xl p-4 shadow-md 
                       hover:bg-black hover:text-white
                      transition-all duration-500 ease-in-out text-black">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl shadow-lg"
          />
        </div>
        <h2 className="text-xl font-bold drop-shadow-md">{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
