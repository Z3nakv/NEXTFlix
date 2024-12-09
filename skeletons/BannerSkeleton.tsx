import ContentLoader from "react-content-loader";


export const PopularNowSkeleton = () => {
  return (
    <div className="h-auto w-full flex gap-2">
      <div className="popular-skeleton"></div>
      <div className="popular-skeleton"></div>
      <div className="popular-skeleton"></div>
      <div className="popular-skeleton"></div>
      <div className="popular-skeleton"></div>
      <div className="popular-skeleton"></div>
      <div className="popular-skeleton "></div>
      <div className="popular-skeleton"></div>
    </div>
  );
};

export const MovieHorizontalSkeleton = () => {
  return (
  <div className="h-auto w-full px-8 flex gap-2">
    <div className="horizontal-skeleton"></div>
    <div className="horizontal-skeleton"></div>
    <div className="horizontal-skeleton"></div>
    <div className="horizontal-skeleton"></div>
  </div>
  )
}


export const MyDataLoader = () => (
    <ContentLoader 
    speed={2}
    width={476}
    height={200}
    viewBox="0 0 476 200"
    backgroundColor="#3d3d3d"
    foregroundColor="#e7dfdf"
  >
    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" /> 
    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" /> 
    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" /> 
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="20" cy="20" r="20" /> 
    <rect x="6" y="150" rx="0" ry="0" width="122" height="31" /> 
    <rect x="161" y="150" rx="0" ry="0" width="122" height="31" />
  </ContentLoader>
)





