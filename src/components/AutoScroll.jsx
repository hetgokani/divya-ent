import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AutoScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly jump to top when the route URL changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default AutoScroll;
