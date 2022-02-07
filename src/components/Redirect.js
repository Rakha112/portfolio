import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
    return () => {
      navigate("/");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="redirect"></div>;
};

export default Redirect;
