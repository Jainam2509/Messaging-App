const MessageSkeleton = () => {
  // Create an array of 6 items for skeleton messages
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      {skeletonMessages.map((_, idx) => (
        <div
          key={idx}
          className={`flex items-start gap-4 ${
            idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          {/* Skeleton Avatar */}
          <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>

          {/* Skeleton Message Content */}
          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="h-6 w-48 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="h-6 w-36 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
