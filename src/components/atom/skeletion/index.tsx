const SkeletonFetchingLoading: FC<{
  isFetching?: boolean;
  fetchType?: "gradient" | "breathing";
  loadType?: "gradient" | "breathing";
  isLoading?: boolean;
  children?: ReactNode;
  gradientSkeletonSize?: "Large" | "Small";
  className?: string;
}> = ({
  children,
  isFetching,
  isLoading,
  gradientSkeletonSize = "Large",
  className,
  fetchType = "breathing",
  loadType = "gradient",
}) => {
  const skeletonType = {
    breathing: "skeletonBreathing",
    gradient: `skeletonGradient${gradientSkeletonSize}`,
  };

  const fetchSkeleton = skeletonType[fetchType];

  const loadSkeleton = skeletonType[loadType];

  return (
    <>
      {(isFetching || isLoading) && (
        <div className={`relative overflow-hidden ${className}`}>
          <div
            className={` w-full h-full absolute  ${
              isFetching && !isLoading
                ? fetchSkeleton
                : isLoading
                ? loadSkeleton
                : ""
            } `}
          />
          {isFetching && !isLoading && (
            <div className={`opacity-80`}>{children}</div>
          )}
          {isLoading && <div className={`opacity-0`}>{children}</div>}
        </div>
      )}
      {!isFetching && !isLoading && children}
    </>
  );
};

export default SkeletonFetchingLoading;
