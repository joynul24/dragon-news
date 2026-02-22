import { useContext } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const {createNewUser, setUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate()

  // const handleSubmit = (e)=> {
  //   e.preventDefault()
  //   const form = new FormData(e.target);
  //   const name = form.get("name");
  //   const photo = form.get("photo");
  //   const email = form.get("email");
  //   const password = form.get("password");

  // createNewUser(email, password) 
  // .then(() => { 
  //   toast.success("✅ Sign In successful!");
  //   navigate("/")
  // }) 
  // .catch((error) => { 
  //   toast.error(`❌ ${error.message}`);
  // });
  // }

  const handleSubmit = (e) => {
  e.preventDefault();
  const form = new FormData(e.target);
  const name = form.get("name");
  const photo = form.get("photo");
  const email = form.get("email");
  const password = form.get("password");

  createNewUser(email, password)
    .then((result) => {
      const user = result.user;

      // Firebase user profile update
        updateUserProfile(name, photo)
        .then(() => {
          // Context user state update
          setUser({
            ...user,
            displayName: name,
            photoURL: photo,
          });

          toast.success("✅ Registration successful!");
          navigate("/");
        })
        .catch((error) => {
          toast.error(`❌ Profile update failed: ${error.message}`);
        });
    })
    .catch((error) => {
      toast.error(`❌ ${error.message}`);
    });
};


  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="rounded-none card bg-base-100 w-full max-w-lg shadow-xl">
        <form onSubmit={handleSubmit} className="card-body">
          {/* Title */}
          <p className="text-center text-xl md:text-2xl font-semibold text-gray-700">
            Create your account
          </p>

          {/* Form */}
          <fieldset className="fieldset mt-4">
            <label className="label font-semibold">Full Name</label>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full bg-gray-100"
              placeholder="Your Name"
            />

            <label className="label font-semibold">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input input-bordered w-full bg-gray-100"
              placeholder="Your photo URL"
            />

            <label className="label mt-2 font-semibold">Email</label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full bg-gray-100"
              placeholder="Email"
            />

            <label className="label mt-2 font-semibold">Password</label>
            <input
              name="password"
              type="password"
              className="input input-bordered w-full bg-gray-100"
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
        </form>
      </div>
    </div>
  );
}
