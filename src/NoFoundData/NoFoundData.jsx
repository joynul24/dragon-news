
export default function NoFoundData() {
    return (
        <div className="flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 px-4 text-center animate-fadeIn">

            {/* Emoji */}
            <div className="mb-3 sm:mb-4 text-4xl sm:text-5xl md:text-6xl animate-bounce">
                🐉
            </div>

            {/* Title */}
            <h1 className="font-bold text-gray-500 text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">
                No News Available
            </h1>
            {/* Subtitle */}
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md">
                Please check back later
            </p>
            {/* Decorative line */}
            <div className="mt-4 sm:mt-5 md:mt-6 w-16 sm:w-20 md:w-24 h-1 bg-orange-400 rounded-full animate-pulse">
            </div>
        </div>
    )
}
