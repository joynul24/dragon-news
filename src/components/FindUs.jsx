import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FindUs() {
  return (
    <div className="mt-5">
      <h2 className="md:text-xl font-medium md:font-semibold text-gray-800">Find Us On</h2>
      {/* Join Buttons */}
      <div className="*:w-full mt-5">
        <div className="join join-vertical">
      <button className="btn join-item  justify-start"><FaFacebook></FaFacebook> Facebook</button>
      <button className="btn join-item  justify-start"><FaTwitter></FaTwitter> Twitter</button>
      <button className="btn join-item  justify-start"><FaInstagram></FaInstagram> Instagram</button>
  </div>
      </div>
    </div>
  )
}
