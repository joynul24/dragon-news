import moment from "moment"
import logo from "../../assets/logo.png"

export default function Header() {
    return (
        <div className="flex flex-col justify-center items-center py-5 md:py-10 px-2">
            {/* Responsive image */}
            <img className="w-45 sm:w-60 md:w-80 lg:w-121.25 h-auto" src={logo} alt="logo" />
            {/* Tagline */}
            <h4 className="text-gray-600 mt-5 mb-2 text-center text-sm sm:text-base md:text-lg"> Journalism Without Fear or Favour</h4>
            {/* Date with moment.js */}
            <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                {moment().format("dddd, MMMM D, YYYY")}
            </p>
        </div>
    )
}
