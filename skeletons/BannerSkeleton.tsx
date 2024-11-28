
import React from "react"
import ContentLoader from "react-content-loader"

// export const MyLoader = (props) => (
//   <ContentLoader
//   speed={2}
//   width="100%" // Ajustamos el ancho para que ocupe todo el espacio disponible
//   height={340}
//   viewBox="0 0 1000 340"
//   backgroundColor="#3d3d3d"
//   foregroundColor="#e7dfdf"
//   {...props}
// >
//   {/* Simulando una estructura flexible con varias imágenes */}
//   <rect x="0%" y="11" rx="8" ry="8" width="45%" height="340" /> {/* Primera imagen */}
//   <rect x="50%" y="11" rx="8" ry="8" width="45%" height="340" /> {/* Segunda imagen */}
//   <rect x="45%" y="14" rx="8" ry="8" width="15%" height="188" className="hidden"/> {/* Tercera imagen */}
//   <rect x="65%" y="13" rx="8" ry="8" width="15%" height="188" className="hidden"/> {/* Cuarta imagen */}
//   <rect x="85%" y="11" rx="8" ry="8" width="15%" height="188" className="hidden"/> {/* Quinta imagen */}
//   <rect x="85%" y="11" rx="8" ry="8" width="15%" height="188" className="hidden"/> {/* Quinta imagen */}
//   <rect x="85%" y="11" rx="8" ry="8" width="15%" height="188" className="hidden"/> {/* Quinta imagen */}
//   <rect x="85%" y="11" rx="8" ry="8" width="15%" height="188" className="hidden"/> {/* Quinta imagen */}

// </ContentLoader>

// )

export const NetflixLoader = () => {
  // Get values from props
  // const { rows, columns, coverHeight, coverWidth, padding, speed } = props;

  // Hardcoded values
  const rows = 1
  const columns = 8
  const coverHeight = 350
  const coverWidth = 220
  const padding = 12
  const speed = 2

  const coverHeightWithPadding = coverHeight + padding
  const coverWidthWithPadding = coverWidth + padding
  const initial = 35
  const covers = Array(columns * rows).fill(1)

  return (
    <ContentLoader
      speed={speed}
      width={columns * coverWidthWithPadding}
      height={rows * coverHeightWithPadding}
      
      backgroundColor="#3d3d3d"
      foregroundColor="#e7dfdf"
  
    >

      {covers.map((g, i) => {
        let vy = Math.floor(i / columns) * coverHeightWithPadding + initial
        let vx = (i * coverWidthWithPadding) % (columns * coverWidthWithPadding)
        return (
          <rect
            key={i}
            x={vx}
            y={vy}
            rx="0"
            ry="0"
            width={coverWidth}
            height={coverHeight}
          />
        )
      })}
    </ContentLoader>
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

export const MyMovieLoader = () => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    height={200}
    viewBox="0 0 476 200"
    backgroundColor="#3d3d3d"
    foregroundColor="#e7dfdf"
  
  >
    <rect x="201" y="164" rx="0" ry="0" width="1" height="0" /> 
    <rect x="28" y="17" rx="0" ry="0" width="342" height="196" />
    <rect x="28" y="17" rx="0" ry="0" width="342" height="196" />
    <rect x="28" y="17" rx="0" ry="0" width="342" height="196" />
    <rect x="28" y="17" rx="0" ry="0" width="342" height="196" />
  </ContentLoader>
)

export const Youtube = () => (
  <ContentLoader 
  // viewBox="0 0 900 507" 
  height={507} 
  width={'100%'} 
  backgroundColor="#3d3d3d"
  foregroundColor="#e7dfdf" 
  >
    <rect x="50" y="60" rx="0" ry="0" width="330" height="180" />
    <rect x="400" y="60" rx="0" ry="0" width="330" height="180" />
    <rect x="750" y="60" rx="0" ry="0" width="330" height="180" />
    <rect x="1100" y="60" rx="0" ry="0" width="330" height="180" />

  </ContentLoader>
)




