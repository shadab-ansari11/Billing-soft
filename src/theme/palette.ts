import { colors } from "@mui/material";

const white = "#FFFFFF";
const black = "#000000";

declare module "@mui/material/styles" {
  interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    /* Custom text color types */
    tertiary: string;
    link: string;
  }

  /* Custom Checkbox colors */
  interface CheckBoxPalette {
    dark: string;
    main: string;
    border: string;
    hover: string;
    disabled: string;
  }

  interface Palette {
    accentColor: Palette["primary"];
    checkbox: CheckBoxPalette;
  }

  interface PaletteOptions {
    accentColor?: PaletteOptions["primary"];
    checkbox?: CheckBoxPalette;
  }
}

export default {
  type: "light",
  common: {
    black,
    white,
    white_10: "#FFD5D5",
    background: "#FFF4F4",
    background_2: "#FBFBFB",
  },
  primary: {
    contrastText: white,
    dark: "#DF5850",
    main: "#DF5850",
    light: "#DE554D66",
    light_10: "#ED8175",
    light_20: "#DE554D",
  },
  secondary: {
    contrastText: white,
    dark: "#9E2540",
    main: "#F8B040",
    light: "#FCEACE",
    lightBg: "#FFF3B2",
    lightBg_30: "#FFBC54",
    lightBg_20: "#FFDEAB",
    lightGray: "#E5E5E5",
    lightBg_40: "#FEF0DA",
    lightBg_50: "#FFEFD7",
    lightBg_51: "#FFEBCC",
  },
  tertiary: {
    contrastText: white,
    main: "#894A01",
    light: "#FEB27BB2",
  },
  accentColor: {
    dark: "#956D04",
    main: "#F9BC1D",
    light: "##FBD36A",
  },
  success: {
    contrastText: white,
    dark: colors.green[900], //  900: '#1b5e20',
    main: "#00A324",
    light: "#68EBCA",
    lightBg: "#C4FFD1",
    lightGreen: "#27AE60",
  },
  info: {
    contrastText: white,
    dark: "#001A72", //  900: '#0d47a1',
    main: "#043CA7",
    light: colors.blue[400], //  400: '#42a5f5',
    lightBg: "#EBF2FE",
    lightBg2: "rgba(60, 126, 243, 0.1)",
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900], // 900: '#e65100',
    main: "#EEAF22",
    light: colors.orange[400], //  400: '#ffa726',
    orange: "#ff5858",
    light_10: "rgb(253 247 231)",
    light_20: "#F05F44",
    lightBg: "#FFF3B2",
    lightBg_1: "#FFEED3",
    lightBg_2: "rgb(248, 176, 64)",
  },
  error: {
    contrastText: white,
    dark: "#BC0F0F", //  900: '#b71c1c',
    main: "#AF0808",
    light: "#F82323", //  400: '#ef5350',
    lightBg: "#FFAAAA",
    lightRed: "#FF0808",
    red_10: "#DB3232",
  },
  red: {
    light: "#F5917E",
  },
  text: {
    primary: "#000000",
    secondary: "#847B7B",
    tertiary: "#7C7979",
    link: "#F3692E",
    dark: "#111111",
    topNav: "#555555",
    placeholder: "#6B7280",
    muted: "#546376",
    text1: "#707070",
    text2: "#595959",
    text3: "#626161",
    text4: "#847B7B",
    text5: "#656262",
    text6: "#3A3939",
    text7: "#4B5563",
    text8: "#616161",
    text9: "#121212",
    text10: "#9095A0",
    text11: "#1F2937",
    text12: "#010000",
    text13: "#111010",
    text14: "#7E7D7D",
    text15: "#2C2B2B",
    text16: "#6B6B6B",
    text17: "#A39F9F",
    text18: "#7E7567",
    text19: "#B5B1B1",
    text20: "#374151",
    text21: "#4E4E4E",
    text22: "#343434",
    text23: "#716C6C",
  },
  action: {
    disabled: "#A0A0A0",
    hover: "rgba(40, 53, 106, 0.1)",
  },
  background: {
    default: white,
    paper: white,
  },

  divider: "rgba(29, 29, 29, 0.2)",
  checkbox: {
    dark: "#4D8BD5",
    main: "#4A8FE2",
    border: "#A3B0BE",
    hover: "#EBF1F5",
    disabled: "#DDE2E7",
  },
  sidebar: {
    navHover: "#A3C5FF",
  },
  gray: {
    dark_gray: "rgba(0, 0, 0, 0.57)",
    dark: "#3F4951",
    main: "#D9D9D9",
    light: "#F6F7FB",
    dark_10: "#474D52",
    border: "#C8C8C8",
    border_2: "#D1D5DB",
    border_3: "#E4E3E3",
    border_4: "#E7E0E0",
    border_5: "#EAEAEA",
    border_6: "#E2E2E2",
  },
};
