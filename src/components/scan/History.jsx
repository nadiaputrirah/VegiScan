import React from "react";

const HistoryPage = ({ scanHistory, onViewDetail, onDeleteHistory }) => {
  if (!scanHistory || scanHistory.length === 0) {
    return (
      <div className="w-full max-w-screen-xl mx-auto text-center py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-textDark mb-4">
          No Scan History Yet
        </h2>
        <p className="text-textDark">Start scanning vegetables to see your history here!</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-textDark mb-8 text-center">
        Scan History
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {scanHistory.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
          >
            <img
              src={item.link}
              alt={`Image of ${item.label}`}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-textDark mb-2">
              {item.label}
            </h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
              {item.description}
            </p>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              <span className="font-semibold">Recipe: </span>
              {item.recipe || "No recipe available"}
            </p>
            <div className="flex justify-between items-center gap-2">
              <button
                onClick={() => onViewDetail(item)}
                className="px-4 py-2 bg-primary-400 text-white text-sm font-medium rounded-lg hover:bg-primary-500"
              >
                View Detail
              </button>
              <button
                onClick={() => onDeleteHistory(index)}
                className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
