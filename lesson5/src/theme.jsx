import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#ff0000",
        },
        secondary: {
            main: "#00ff00",
        },
        tertiary: {
            main: "#0000ff",
        },

    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    color: "white",
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    color: "black",
                    width: "100%",
                    border: "1px solid red",
                    padding: "12px",
                    borderRadius: "4px",
                    outline: "none",
                    borderBottom: "none",
                    ":hover": {
                        border: "1px solid blue",
                        outline: "none",
                        borderBottom: "none",
                    },
                    ":focus-within": {
                        border: "1px solid green",
                        borderBottom: "none",
                    }
                },
            },
        },
    },
});