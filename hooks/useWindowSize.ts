
import { useEffect, useState } from "react";

export default function useWindowSize() {
    const [screenWidth, setScreenWidth] = useState<number>(0);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(document.documentElement.clientWidth);
        }
        
        handleResize();

        window.addEventListener('resize' , handleResize)

        return () => window.removeEventListener('resize', handleResize)
    },[])
  return { screenWidth }
}
