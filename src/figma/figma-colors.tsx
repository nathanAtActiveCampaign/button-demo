import { rawVariables } from "./figma-export-raw";
import {
  objectToCSSVariables,
  rawColorsToNamedKeys,
  rawColorsToTheme,
} from "./util-color";

export const figmaColorsThemeObject = rawColorsToTheme(rawVariables);
export const figmaColorsFlatObject = rawColorsToNamedKeys(rawVariables);
export const figmaColorsCssVars = objectToCSSVariables(figmaColorsFlatObject);
