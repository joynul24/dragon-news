import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="rounded-none card bg-base-100 w-full max-w-lg shadow-xl">
        <div className="card-body">
          {/* Title */}
          <p className="text-center text-xl md:text-2xl font-semibold text-gray-700">
            Create your account
          </p>

          {/* Form */}
          <fieldset className="fieldset mt-4">
            <label className="label">Full Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Your Name"
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Your photo URL"
            />

            <label className="label mt-2">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
            />

            <label className="label mt-2">Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
            />

            <button className="btn bg-gray-800 text-white rounded-none mt-4 w-full">
              Register
            </button>
          </fieldset>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Social Register Buttons */}
          <div className="flex flex-col gap-3">
            <button className="btn btn-outline w-full border-gray-300 hover:bg-gray-800 hover:text-white">
              <FaGoogle /> Continue with Google
            </button>
            <button className="btn btn-outline w-full border-gray-300 hover:bg-gray-800 hover:text-white">
              <FaFacebook /> Continue with Facebook
            </button>
            <button className="btn btn-outline w-full border-gray-300 hover:bg-gray-800 hover:text-white">
              <FaGithub /> Continue with GitHub
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <a
              href="/auth/login"
              className="text-gray-800 font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
