import { createContext, useEffect, useState } from "react";
import getAllGraduates from "../services/graduates";

export const graduatesContext = createContext();

function GraduatesProvider({ children }) {
  const [graduates, setGraduates] = useState([]);
  useEffect(() => {
    getAllGraduates().then(res => setGraduates(res.result));
  }, []);
  return (
    <graduatesContext.Provider value={{ graduates, setGraduates}}>
      {children}
    </graduatesContext.Provider>
  );
}

export default GraduatesProvider;