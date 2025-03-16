import React from 'react'

const Left = ({post}) => {
  return (
    <div className='mt-12 mb-12 px-4 lg:px-8 flex flex-col bg-white shadow-xl rounded-lg py-4'>
        <img src={post.image} alt={post.title} className="w-full h-[300px] lg:h-[500px] object-cover rounded-lg"/>  
        <h1 className="text-2xl lg:text-4xl text-[#02234D] font-bold mt-4">{post.title}</h1>
        <h1 className="text-md text-[#8F81CE] font-mono mt-2">{new Date(post.publishedAt).toLocaleDateString()}</h1>

        <p className="whitespace-pre-line mt-6 mb-10 leading-tight">{post.content}</p>
    </div>
  )
}

export default Left