import { createTheme } from "@mui/material";

export const PositionComponentTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1e4194", // Change outline color on hover
          },
        },
      },
    },
    MuiSelect: {
      // Customize the Select component
      styleOverrides: {
        icon: {
          color: "white", // Change the color of the select arrow
        },
      },
    },
  },
});
