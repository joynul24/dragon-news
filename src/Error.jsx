import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-12 max-w-md w-full text-center">
                <div className="text-red-500 text-5xl sm:text-6xl mb-4">⚠️
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2"> Oops! Something went wrong
                </h1>
                <p className="text-gray-600 text-sm sm:text-base mb-6"> We couldn’t load the content right now. Please try again later.
                </p>
                <Link to={'/'}>
                <button className="w-full font-semibold sm:w-auto px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition" >Home Page
                </button>
                </Link>
            </div>
        </div>
    )
}
