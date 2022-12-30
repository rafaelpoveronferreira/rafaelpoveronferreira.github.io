import { useEffect, useState } from "react";


// Créditos: https://codepen.io/WithAnEs/pen/wNmjog?editors=0111 
function useDelayUnmount(isMounted, delay) {
    const [shouldRender, setShouldRender] = useState(false);
  
    useEffect(() => {
      let timeoutId;
  
      if (isMounted && !shouldRender) {
        setShouldRender(true);
      } else if (!isMounted && shouldRender) {
        timeoutId = setTimeout(() => setShouldRender(false), delay);
      }
  
      return () => clearTimeout(timeoutId);
    });
  
    return shouldRender;
  }

export default useDelayUnmount