const Loading = () => {
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <div className="flex flex-col gap-4 w-5/6">
        <div className="skeleton h-60 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
};

export default Loading;
