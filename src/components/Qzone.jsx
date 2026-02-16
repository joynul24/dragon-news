import img1 from "../assets/qZone1.png"
import img2 from "../assets/qZone2.png"
import img3 from "../assets/qZone3.png"

export default function Qzone() {
  return (
    <div className="mt-5">
      <h2 className="md:text-xl font-medium md:font-semibold text-gray-800">Q-Zone</h2>
      {/* card img */}
        <div className="flex flex-col gap-5 md:mt-5">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
      </div>
  )
}
