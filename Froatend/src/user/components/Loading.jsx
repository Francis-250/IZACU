const Loading = () => {
  return (
    <div className="bg-[#111827] bg-opacity-80 text-white absolute top-0 h-screen w-full flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="h-32 w-32 border-t-4 border-green-400 rounded-full animate-spin"></div>
        <div className="absolute text-3xl font-bold">
          <span>Iza</span>
          <span className="text-green-900">cu</span>
        </div>
      </div>
      <p className="mt-2 text-3xl text-white font-bold flex gap-1 items-center justify-center">
        Loading
        <span className="text-5xl animate-bounce text-green-950">...</span>
      </p>
    </div>
  );
};

export default Loading;
