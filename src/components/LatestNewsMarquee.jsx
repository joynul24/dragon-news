import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function LatestNewsMarquee() {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 p-4 bg-gray-100 overflow-hidden">
            {/* Button always on the left */}
            <button className="bg-[#D72050] text-white px-4 py-2 font-medium shrink-0"> Latest </button>
            {/* News ticker */}
            <Link to={"/"} className="flex-1 w-full">
                <Marquee speed={100} pauseOnHover={true} gradient={false} className="text-sm sm:text-base" >
                    <p className="whitespace-nowrap px-5">🚀 SpaceX launches new Starlink satellites</p>
                    <p className="whitespace-nowrap px-5">⚽ Messi scores stunning goal in Champions League</p>
                    <p className="whitespace-nowrap px-5">📱 Apple unveils iPhone 15 Pro</p>
                    <p className="whitespace-nowrap px-5">🎬 Oscar nominations 2026 announced</p>
                    <p className="whitespace-nowrap px-5">🌍 UN climate summit calls for urgent action</p>
                    <p className="whitespace-nowrap px-5">🚀 SpaceX launches new Starlink satellites</p>
                    <p className="whitespace-nowrap px-5">⚽ Messi scores stunning goal in Champions League</p>
                    <p className="whitespace-nowrap px-5">📱 Apple unveils iPhone 15 Pro</p>
                    <p className="whitespace-nowrap px-5">🎬 Oscar nominations 2026 announced</p>
                    <p className="whitespace-nowrap px-5">🌍 UN climate summit calls for urgent action</p>
                </Marquee>
            </Link>
        </div>
    )
}
