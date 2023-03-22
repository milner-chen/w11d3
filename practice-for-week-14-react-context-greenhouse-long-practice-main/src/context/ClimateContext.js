import { useContext, useState, createContext } from "react";

// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);
// remember to set custom hook as a function

export default function ClimateProvider({ children }) {

    const [temperature, setTemperature] = useState(50);

    return (
        <ClimateContext.Provider value={{ temperature, setTemperature }}>
            {children}
        </ClimateContext.Provider>
    )
}