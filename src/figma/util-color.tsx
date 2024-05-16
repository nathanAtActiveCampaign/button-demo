import { rawVariables } from "./figma-export-raw";

export type rgbaKey = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export type figmaValueByMode = Record<string, rgbaKey>;
export type figmaResolvedValueByMode = Record<
  string,
  {
    alias: string | null;
    resolvedValue: rgbaKey;
  }
>;

export type figmaVariableShape = {
  id: string;
  name: string;
  description: string;
  type: string;
  valuesByMode: figmaValueByMode;
  resolvedValuesByMode: figmaResolvedValueByMode;
  scopes: string[];
  hiddenFromPublishing: boolean;
  codeSyntax: {};
};

export type figmaTokenExport = {
  id: string;
  name: string;
  modes: Record<string, string>;
  variableIds: string[];
  variables: figmaVariableShape[];
};

const convertChannelValue = (value: number) => Math.round(value * 255);

const convertRgbaKeyToCssSyntax = ({ r, g, b, a }: rgbaKey) => {
  const red = convertChannelValue(r);
  const green = convertChannelValue(g);
  const blue = convertChannelValue(b);
  return `rgba(${red}, ${green}, ${blue}, ${a})`;
};

const getModeValues = (valuesByModeKey: figmaValueByMode) => {
  // check length
  const length = Object.keys(valuesByModeKey).length;
  // if 1, return that value key
  if (length === 1) {
    // first key ref
    const firstKey = Object.keys(valuesByModeKey)[0];
    // lookup + return
    return valuesByModeKey[firstKey];
  }
  // if more, DO SOMETHING ELSE
  else {
    console.warn("WHOOPS?");
    return {
      r: 0.5,
      g: 0.5,
      b: 0.5,
      a: 1,
    };
  }
};

interface NestedObject {
  [key: string]: NestedObject | string | any;
}

// Checks if var is a color
export const isColorVariable = (variableObject: figmaVariableShape) =>
  variableObject.type === "COLOR";

// Cleanup variable from figma
// Setup color key for tailwind
type modifiedFigmaVar = Pick<
  figmaVariableShape,
  "id" | "name" | "type" | "valuesByMode"
> & { rgbaString: string };

export const transformFigmaVariable = (
  variable: figmaVariableShape,
  i: number
): modifiedFigmaVar => {
  const { id, name, type, valuesByMode } = variable;

  // Compute RGBA value
  const modeValues = getModeValues(variable.valuesByMode);
  const rgbaString = convertRgbaKeyToCssSyntax(modeValues);

  // Just checkin
  // if (i === 0) {
  //   console.log("what?!?!");
  //   console.log(variable);

  //   const theKeyToTest = Object.keys(variable.valuesByMode)[0] as "114:0";

  //   console.log("theKeyToTest", theKeyToTest);
  //   console.log("lookup", variable.valuesByMode[theKeyToTest]);
  //   console.log("modeValues", modeValues);
  //   console.log("rgbaString", rgbaString);
  // }

  return {
    id,
    name,
    type,
    valuesByMode,
    rgbaString,
  };
};

export function rawColorsToTheme(data: figmaTokenExport) {
  const result: NestedObject = {};

  data.variables
    // Remove non-color vars
    .filter(isColorVariable)
    // Pick req'd keys
    .map(transformFigmaVariable)
    // Create nested object by name
    .forEach((figVar) => {
      const parts: string[] = figVar.name.split("/"); // eg: [Brand, Blue, 700]
      let currentLevel: NestedObject = result; // {}

      // Walk each part
      parts.forEach((part, index) => {
        part = part.toLowerCase();
        if (part === "ac blue") {
          part = "acBlue";
        }
        // if this part doesnt exist at the current level, initialize an empty object
        if (!currentLevel[part]) {
          currentLevel[part] = {};
        }
        if (index === parts.length - 1) {
          // currentLevel[part] = figVar; // Set the leaf node to the original object
          currentLevel[part] = figVar.rgbaString; // Set the leaf node to the original object
        }
        // Set the current level for rewalking
        currentLevel = currentLevel[part] as NestedObject;
      });
    });

  return result;
}

export const figmaColorsThemeObject = rawColorsToTheme(rawVariables);

export function rawColorsToNamedKeys(data: figmaTokenExport) {
  const result: Record<string, any> = {};

  data.variables
    // Remove non-color vars
    .filter(isColorVariable)
    // Pick req'd keys
    .map(transformFigmaVariable)
    // Create named keys w/ color value
    .forEach((figVar) => {
      const { name, rgbaString: color } = figVar;
      // Contstruct name
      let newKey;
      newKey = name
        .toLowerCase()
        .replace("/", "-")
        // Manual overrides
        .replace("ac blue", "acBlue")
        .replace("midnight-white", "white");
      // Assingn color value
      result[newKey] = color;
    });

  return result;
}

export const figmaColorsFlatObject = rawColorsToNamedKeys(rawVariables);

export function objectToCSSVariables(obj, prefix = "") {
  let css = "";
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const varName = `--${prefix}${key}`;
      const varValue = obj[key];
      css += `${varName}: ${varValue};\n`;
    }
  }
  return css;
}

export const figmaColorsCssVars = objectToCSSVariables(figmaColorsFlatObject);
