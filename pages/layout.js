import React, { useState, createContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Navigation from "../components/SideNavigationbar/Navigation.jsx";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1350,
      xl: 1500,
    },
  },
});

// Context API
export const AppContext = createContext();

function Layout({ children }) {
  const [Hamburgar, SetHamBurgar] = useState(false);
  return (
    <AppContext.Provider value={{ Hamburgar, SetHamBurgar }}>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, width: "100%" }}>
          <Grid container spacing={0}>
            <Grid
              item
              sx={{
                height: "100vh",
                background: "white",
              }}
              lg={1.8}
              xs={0}
            >
              <Navigation />
            </Grid>
            <Grid
              item
              sx={{ height: "100vh", background: "#F0F1F5" }}
              lg={10.2}
              xs={12}
            >
              {children}
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default Layout;
