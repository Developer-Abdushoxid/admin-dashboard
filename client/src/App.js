import { CssBaseline,ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import { useMemo } from "react";
import { BrowserRouter } from "react-router-dom";


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
     <ThemeProvider theme={theme}>
      <CssBaseline />
     </ThemeProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
