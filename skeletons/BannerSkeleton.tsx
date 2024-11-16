
import React from "react"
import ContentLoader from "react-content-loader"

export const MyLoader = (props) => (
    <ContentLoader 
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 350 272"
    backgroundColor="#3d3d3d"
    foregroundColor="#e7dfdf"
    {...props}
  >
    <rect x="539" y="403" rx="3" ry="3" width="67" height="11" /> 
    <rect x="581" y="402" rx="3" ry="3" width="140" height="11" /> 
    <rect x="551" y="411" rx="3" ry="3" width="53" height="11" /> 
    <rect x="568" y="402" rx="3" ry="3" width="72" height="11" /> 
    <rect x="549" y="405" rx="3" ry="3" width="100" height="11" /> 
    <rect x="549" y="413" rx="3" ry="3" width="37" height="11" /> 
    <rect x="564" y="407" rx="3" ry="3" width="140" height="11" /> 
    <rect x="556" y="411" rx="3" ry="3" width="173" height="11" /> 
    <rect x="576" y="405" rx="0" ry="0" width="14" height="157" /> 
    <rect x="569" y="409" rx="0" ry="0" width="32" height="5" /> 
    <rect x="560" y="400" rx="0" ry="0" width="45" height="135" /> 
    <rect x="547" y="391" rx="0" ry="0" width="142" height="136" /> 
    <rect x="557" y="343" rx="0" ry="0" width="76" height="94" /> 
    <rect x="3" y="1" rx="0" ry="0" width="180" height="270" /> 
    <rect x="209" y="-1" rx="0" ry="0" width="180" height="270" />
  </ContentLoader>

)

export const MyDataLoader = (props) => (
    <ContentLoader 
    speed={2}
    width={476}
    height={200}
    viewBox="0 0 476 200"
    backgroundColor="#3d3d3d"
    foregroundColor="#e7dfdf"
    {...props}
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

export const MyMovieLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={476}
    height={200}
    viewBox="0 0 476 200"
    backgroundColor="#3d3d3d"
    foregroundColor="#e7dfdf"
    {...props}
  >
    <rect x="201" y="164" rx="0" ry="0" width="1" height="0" /> 
    <rect x="28" y="17" rx="0" ry="0" width="342" height="196" />
  </ContentLoader>
)



