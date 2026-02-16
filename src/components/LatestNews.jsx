import { FaCalendar } from "react-icons/fa"
import imgOne from "../assets/1.png";
import imgTwo from "../assets/2.png";
import imgThree from "../assets/3.png";

export default function LatestNews() {
  return (
    <div className="mt-5 md:mt-8">
      <h2 className="font-medium text-gray-600">Latest News</h2>
      {/* News Cards */}
      <div>
        {/* card 1 */}
        <div className="mt-7">
          <img className="w-full" src={imgOne} alt="" />
          <h3 className="font-medium md:text-xl my-5 text-gray-700">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
          <div className="flex items-center justify-between text-gray-600">
            <p>Sports</p>
            <p className="flex items-center gap-2"><FaCalendar></FaCalendar> Jan 4, 2022</p>
          </div>
        </div>
        {/* card 2 */}
        <div className="mt-7">
          <img className="w-full" src={imgTwo} alt="" />
          <h3 className="font-medium md:text-xl my-5 text-gray-700">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
          <div className="flex items-center justify-between text-gray-600">
            <p>Sports</p>
            <p className="flex items-center gap-2"><FaCalendar></FaCalendar> Jan 4, 2022</p>
          </div>
        </div>
        {/* card 3 */}
        <div className="mt-7">
          <img className="w-full" src={imgThree} alt="" />
          <h3 className="font-medium md:text-xl my-5 text-gray-700">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
          <div className="flex items-center justify-between text-gray-600">
            <p>Sports</p>
            <p className="flex items-center gap-2"><FaCalendar></FaCalendar> Jan 4, 2022</p>
          </div>
        </div>
      </div>
    </div>
  )
}
