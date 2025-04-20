import { BreakpointsOptions, createTheme } from "@mui/material/styles";

import palette from "./palette";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    midxs: true;
    sm: true;
    midsm: true;
    md: true;
    midmd: true;
    lg: true;
    midlg: true;
    xl: true;
    midxl: true;
    xxl: true;
  }
}

interface ExtendedBreakpointOptions extends BreakpointsOptions {
  midxs: number;
  midsm: number;
  midmd: number;
  midlg: number;
  midxl: number;
  xxl: number;
}

const customBreakpointValues = {
  values: {
    xs: 0,
    midxs: 600,
    sm: 700,
    midsm: 800,
    md: 900,
    midmd: 1025,
    lg: 1200,
    midlg: 1300,
    xl: 1536,
    midxl: 1620,
    xxl: 1920,
  },
};


const lightTheme = createTheme({
  palette,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  breakpoints: {
  } as ExtendedBreakpointOptions,
  components: {
    // Name of the component
    MuiTypography: {
      styleOverrides: {
        // root: {
        //   [breakpoints.down("md")]: {
        //     fontSize: "1.2rem",
        //   },
        // },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          lineHeight: "20px",
          fontSize: "1.4rem",
          fontWeight: 400,
          fontFamily: "poppins",
          // borderRadius: 0,
          boxShadow: "unset",
          textTransform: "capitalize",
          letterSpacing: "0.02em",
          "&.Mui-disabled": {
            backgroundColor: palette.action.disabled,
            color: palette.common.white,
          },
          "& .MuiLoadingButton-loadingIndicator": {
            color: palette.common.white,
          },
          disableRipple: false,
        },

        contained: {
          color: palette.common.white,
          backgroundColor: palette.primary.main,
          "&:hover": {
            backgroundColor: palette.primary.main,
          },
        },
        containedSecondary: {
          color: palette.common.white,
          backgroundColor: palette.secondary.main,
          "&:hover": {
            backgroundColor: palette.secondary.main,
          },
        },

        containedSizeLarge: {
          fontSize: "1.4rem",
          fontWeight: 500,
          lineHeight: "20px",
          padding: "10px 24px",
        },
        containedSizeMedium: {
          fontSize: "1.4rem",
          fontWeight: 400,
          lineHeight: "20px",
          padding: "6px 24px",
        },
        containedSizeSmall: {
          fontSize: "1.4rem",
          fontWeight: 400,
          lineHeight: "16px",
          padding: "6px 12px",
        },
        outlined: {
          borderColor: palette.primary.main,
          color: palette.primary.main,
          backgroundColor: palette.common.white,
          "&:hover": {
            borderColor: palette.primary.main,
            backgroundColor: palette.primary.main,
            color: palette.common.white,
          },
        },
        outlinedSecondary: {
          borderColor: palette.secondary.main,
          color: palette.secondary.main,
          backgroundColor: palette.common.white,
          "&:hover": {
            borderColor: palette.secondary.main,
            backgroundColor: palette.secondary.main,
            color: palette.common.white,
          },
        },
        outlinedSizeLarge: {
          fontSize: "1.4rem",
          fontWeight: 500,
          lineHeight: "20px",
          padding: "10px 24px",
        },
        outlinedSizeMedium: {
          fontSize: "1.4rem",
          fontWeight: 400,
          lineHeight: "20px",
          padding: "6px 24px",
        },
        outlinedSizeSmall: {
          fontSize: "1.4rem",
          fontWeight: 400,
          lineHeight: "16px",
          padding: "6px 12px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorPrimary: {
          color: palette.primary.main,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          pointerEvents: "none",
        },
        message: {
          fontSize: "1.4rem",
          fontWeight: "bold",
        },
      },
    },


  },
});

export default lightTheme;
