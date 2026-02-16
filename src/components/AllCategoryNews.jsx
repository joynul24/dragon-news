import { useLoaderData } from "react-router-dom"
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaRegStar, FaStar } from "react-icons/fa";
import NoFoundData from "../NoFoundData/NoFoundData";

export default function AllCategoryNews() {
  const newsData = useLoaderData([]);

  if (!newsData?.data || newsData.data.length === 0) {
    return (
      <NoFoundData></NoFoundData>
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
                <div className="flex items-center gap-1 md:gap-2 text-xl cursor-pointer">
                  <CiBookmark />
                  <CiShare2 />
                </div>
              </div>
              {/* Title */}
              <h2 className="md:text-xl font-semibold md:font-bold mt-3.5 mb-5 text-gray-700">{singleNews.title}</h2>
              {/* Image */}
              <img className="w-full object-cover" src={singleNews.image_url} alt="Card Image" />
              {/* description */}
              {/* <p className="text-sm md:text-base mt-4 md:mt-8 mb-4 md:mb-5">{singleNews.details}</p> */}
              <div className="mt-4 md:mt-8 mb-5">
                <input
                  type="checkbox"
                  id={`read-more-${singleNews._id}`}
                  className="peer hidden"
                />

                {/* text */}
                <p
                  className="
      text-sm md:text-base
      max-h-[4.5em] overflow-hidden
      peer-checked:max-h-4/5
      transition-all duration-300
    "
                >
                  {singleNews.details}
                </p>

                {/* read more / less */}
                <label
                  htmlFor={`read-more-${singleNews._id}`}
                  className="text-amber-600 text-sm cursor-pointer mt-1 inline-block"
                >
                  <span className="peer-checked:hidden">Read more</span>
                </label>
              </div>

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
                  <p className="font-medium">{singleNews.total_view ? singleNews.total_view : "Unknown views"}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
