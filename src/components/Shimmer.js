const Shimmer = () => {
  return (
    <div className="p-4 sm:p-6">
      {/* Title Placeholder */}
      <div className="animate-pulse space-y-6">
        <div className="h-6 sm:h-8 w-48 sm:w-64 bg-gray-300 dark:bg-gray-700 rounded"></div>

        {/* Movie Card Placeholders */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="space-y-2 sm:space-y-3 animate-pulse"
            >
              {/* Image Placeholder */}
              <div className="h-32 sm:h-40 md:h-48 bg-gray-300 dark:bg-gray-700 rounded-md"></div>

              {/* Title Placeholder */}
              <div className="h-4 sm:h-5 w-32 sm:w-40 bg-gray-300 dark:bg-gray-700 rounded"></div>

              {/* Subtitle Placeholder */}
              <div className="h-3 sm:h-4 w-20 sm:w-28 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
