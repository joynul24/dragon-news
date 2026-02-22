import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    loginUser(email, password)
      .then(() => {
        toast.success("✅ Login successful!");
        navigate("/")
      })
      .catch((error) => {
        toast.error(`❌ ${error.message}`);
      });
  }

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="rounded-none card bg-base-100 w-full max-w-lg shadow-xl">
        <div className="card-body">
          {/* Title */}
          <p className="text-center text-xl md:text-2xl font-semibold text-gray-700"> Login to your account </p>
          {/* Form */}
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset mt-4">
              <label className="label font-semibold">Email</label>
              <input name="email" type="email" className="input input-bordered w-full bg-gray-100" placeholder="Email" />
              <label className="label mt-2 font-semibold">Password</label>
              <input name="password" type="password" className="input input-bordered w-full bg-gray-100" placeholder="Password" /> <button className="btn bg-gray-800 text-white rounded-none mt-4 w-full"> Login </button> </fieldset>
          </form>
          {/* Divider */}
          <div className="divider">OR</div>
          {/* Social Login Buttons */}
          <div className="flex flex-col gap-3">
            <button className="btn btn-outline w-full border-gray-300 hover:bg-gray-800 hover:text-white"><FaGoogle></FaGoogle> Continue with Google </button>
            <button className="btn btn-outline w-full border-gray-300 hover:bg-gray-800 hover:text-white"><FaFacebook></FaFacebook> Continue with Facebook </button>
            <button className="btn btn-outline w-full border-gray-300 hover:bg-gray-800 hover:text-white"><FaGithub></FaGithub> Continue with GitHub </button>
          </div>
          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-4"> Don’t have an account?{" "}
            <a href="/auth/register" className="text-gray-800 font-medium hover:underline"> Register
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
