import { useLoaderData } from "react-router-dom"
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaRegStar, FaStar } from "react-icons/fa";

export default function AllCategoryNews() {
    const newsData = useLoaderData([]);
    
   if (!newsData?.data || newsData.data.length === 0) {
  return (
    <div className="flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 px-4 text-center animate-fadeIn">

  {/* Emoji */}
  <div className="mb-3 sm:mb-4 text-4xl sm:text-5xl md:text-6xl animate-bounce">
    🐉
  </div>

  {/* Title */}
  <h1 className="font-bold text-gray-500 text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">
    No News Available
  </h1>
  {/* Subtitle */}
  <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md">
    Please check back later
  </p>
  {/* Decorative line */}
  <div className="mt-4 sm:mt-5 md:mt-6 w-16 sm:w-20 md:w-24 h-1 bg-orange-400 rounded-full animate-pulse">
  </div>
</div>
  );
}

  return (
    <div className="pb-5">
      <h3 className="font-semibold text-gray-500">Dragon News Home</h3>
      <div>
        {
          newsData.data.map((singleNews) =>
            <div className="mt-10 w-full" key={singleNews._id}>
              {/* Author section */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img className="w-9 md:w-10 rounded-full" src={singleNews.author.img} alt="" />
                    <div>
                        <h4 className="md:font-medium text-gray-500 mb-1">{singleNews.author.name}</h4>
                        <p className="text-gray-500">{singleNews.author.published_date}</p>
                    </div>
                </div>
                {/* icons */}
                <div className="flex items-center gap-1 md:gap-2">
                    <CiBookmark />
                    <CiShare2 />
                </div>
              </div>
              {/* Title */}
              <h2 className="text-xl font-bold mt-3.5 mb-5 text-gray-700">{singleNews.title}</h2>
              {/* Image */}
                <img className="w-full object-cover" src={singleNews.image_url} alt="Card Image" />
              {/* description */}
              <p className="text-sm md:text-base mt-4 md:mt-8 mb-4 md:mb-5">{singleNews.details}</p>
              {/* Rating and View */}
              <div className="flex items-center justify-between">
                {/* star */}
                <div className="flex items-center gap-1 text-orange-400">
             {
           [...Array(5)].map((_, index) => (
          index < Math.round(singleNews.rating.number)
          ? <FaStar key={index} />
          : <FaRegStar key={index} />
         ))
         }
         <span className="ml-2 text-gray-600 text-sm">
          {singleNews.rating.number}
         </span>
      </div>
                <div className="text-gray-600 flex items-center gap-2">
                  <FaEye></FaEye>
                  <p className="font-medium">{singleNews.total_view? singleNews.total_view: "Unknown views"}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
