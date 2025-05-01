import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeft, FaEye, FaStar } from 'react-icons/fa';
import { format } from 'date-fns';

const NewsDetailCard = ({news}) => {

    console.log(news)

    const {
        category_id,
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        details,
        tags,
        others,
      } = news;

      const formattedDate = author?.published_date
      ? format(new Date(author.published_date), 'PPP')
      : 'N/A';

    return (
        <div className="container mx-auto py-8">
        <div className="card bg-base-100 shadow-xl space-y-4">
          <figure>
            <img src={thumbnail_url} alt={title} className="w-full max-h-[420px] object-cover" />
          </figure>
          <div className="card-body space-y-4">
            <h2 className="card-title text-3xl font-bold">{title}</h2>
            <div className="flex items-center mb-2">
              {rating?.badge && (
                <div className="badge badge-secondary px-4 py-3 mr-2">{rating.badge}</div>
              )}
              {rating?.number && (
                <div className="flex items-center">
                  <FaStar size={22} className="text-yellow-500 mr-1" />
                  <span className='text-xl'>{rating.number}</span>
                </div>
              )}
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-2 mt-3">
              <div className="avatar mr-2">
                <div className="w-8 rounded-full">
                  <img src={author?.img} alt={author?.name} />
                </div>
              </div>
              <span>{author?.name}</span>
              {author?.published_date && <span className="ml-2">({formattedDate})</span>}
            </div>
            <p className='text-xl text-accent leading-8 mt-3'>{details}</p>
            <div className="py-4">
              {tags?.map((tag, index) => (
                <span key={index} className="badge badge-outline mr-2">{tag}</span>
              ))}
            </div>
            <div className="card-actions justify-end items-center">
              <div className="flex items-center text-gray-500">
                <FaEye className="mr-1" /> {total_view}
              </div>
              {others?.is_today_pick && <div className="badge badge-info">Today's Pick</div>}
              {others?.is_trending && <div className="badge badge-success">Trending</div>}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Link to={`/category/${category_id}`} className="btn btn-outline btn-secondary">
            <FaArrowLeft className="mr-2" /> Back to All News
          </Link>
        </div>
      </div>
    );
};

export default NewsDetailCard   