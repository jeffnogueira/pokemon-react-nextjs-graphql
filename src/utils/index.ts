import { LIGHT_DARK_ENUM } from "@/enums/light-dark.enum";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const getWindowDimensions = (): { width: number, height: number } => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const useWindowDimensions = (): { width: number, height: number } => {
  const [ windowDimensions, setWindowDimensions ] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const getValueBasedThemeMode = (theme: string | undefined, values:  Record<LIGHT_DARK_ENUM, any>): any => {
  let valueToReturn: LIGHT_DARK_ENUM = LIGHT_DARK_ENUM.LIGHT;

  if (theme)
    valueToReturn = values[theme as LIGHT_DARK_ENUM];

  if (!valueToReturn)
    valueToReturn = values[LIGHT_DARK_ENUM.UNDEFINED];

  return valueToReturn;
};

const formatDecimeterToFeetInches = (height: number): string => {
    const inches = Math.round(height * 3.937);
    return `${Math.floor(inches / 12)}'${(inches % 12).toString().padStart(2, '0')}"`;
};

const formatHectogramToPounds = (weight: number): string => {
    return `${(weight * 0.220462).toFixed(2)}lbs`;
};

const formatGeneration = (generation: string): string => {
    const symbolValues: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const generationSplited = generation.toUpperCase().split('-');
    let result = 0;

    for (let index = 0; index < generationSplited[1].length; index++) {
        const currentSymbolValue = symbolValues[generationSplited[1][index]];
        const nextSymbolValue = symbolValues[generationSplited[1][index + 1]];

        if (nextSymbolValue && currentSymbolValue < nextSymbolValue) {
            result -= currentSymbolValue;
        } else {
            result += currentSymbolValue;
        }
    }

    return `${result}`;
};

export { getWindowDimensions, useWindowDimensions, getValueBasedThemeMode, formatDecimeterToFeetInches, formatHectogramToPounds, formatGeneration };