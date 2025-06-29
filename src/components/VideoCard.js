const Shimmer = () => {
  return (
    <div className="m-5 flex flex-wrap justify-around gap-4">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="w-80 animate-pulse rounded-lg overflow-hidden"
          >
            {/* Thumbnail Placeholder */}
            <div className="w-full h-40 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>

            {/* Video Info Placeholder */}
            <div className="flex mt-2 items-start space-x-3">
              {/* Channel Icon */}
              <div className="w-9 h-9 rounded-full bg-gray-300 dark:bg-gray-700"></div>

              <div className="flex-1 space-y-2">
                {/* Title lines */}
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>

                {/* Subtitle line */}
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;

