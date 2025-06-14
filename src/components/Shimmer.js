const Shimmer = () => {
  return (
    <div className="p-6">
      {/* Title Placeholder */}
      <div className="animate-pulse">
        <div className="h-8 w-64 bg-gray-300 rounded-md mb-6"></div>
        {/* Movie Card Placeholders */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array(8)
            .fill("")
            .map((_, index) => (
              <div key={index} className="space-y-3">
                {/* Image Placeholder */}
                <div className="h-48 bg-gray-300 rounded-md shadow-md"></div>
                {/* Title Placeholder */}
                <div className="h-6 w-40 bg-gray-300 rounded-md"></div>
                {/* Subtitle Placeholder */}
                <div className="h-4 w-28 bg-gray-300 rounded-md"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;