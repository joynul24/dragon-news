import { FaGithub, FaGoogle } from "react-icons/fa";

export default function LoginWith() {
  return (
    <div>
      <h2 className="md:text-xl font-semibold md:font-bold text-gray-800">Login With</h2>
      <div className="mt-5 flex flex-col gap-3">
        <button className="btn btn-outline border-blue-400 text-blue-400 w-full"><FaGoogle></FaGoogle> Login with Google</button>
        <button className="btn btn-outline  w-full border-gray-400"><FaGithub></FaGithub> Login with Github</button>
      </div>
    </div>
  )
}
