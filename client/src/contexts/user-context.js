// import { createContext, useEffect, useState } from "react";
// import {graduateRegister,coordinatorRegister} from "../services/register-service";

// export const graduateContext = createContext();
// export const coordinatorContext = createContext();

// function GraduateProvider({ children }) {
//   const [graduate, setGraduate] = useState([]);
//   useEffect(() => {
//     graduateRegister().then(res => setGraduate(res.data));
//   }, []);
//   return (
//     <questionsContext.Provider value={{ graduate, setGraduate}}>
//       {children}
//     </questionsContext.Provider>
//   );
// }
// function CoordinatorProvider({ children }) {
//   const [coordinator, setCoordinator] = useState([]);
//   useEffect(() => {
//     coordinatorRegister().then(res => setCoordinator(res.data));
//   }, []);
//   return (
//     <questionsContext.Provider value={{ coordinator, setCoordinator}}>
//       {children}
//     </questionsContext.Provider>
//   );
// }

// export { GraduateProvider, CoordinatorProvider };