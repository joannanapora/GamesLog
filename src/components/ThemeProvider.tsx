import React, { useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';

const isDark = (theme: string) => theme === 'dark';

type Theme = 'light' | 'dark';
type ThemeContext = { toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => {
    setTheme(isDark(theme) ? 'light' : 'dark');
  };

  const palletType = isDark(theme) ? 'dark' : 'light';
  const mainPrimary = isDark(theme) ? '#424242' : '#5E8B7E';
  const lightPrimary = isDark(theme) ? '#616161' : '#A7C4BC';
  const darkPrimary = isDark(theme) ? '#DFEEEA' : '#DFEEEA';
  const mainSecondary = isDark(theme) ? '#202020' : '#FAFAFA';
  const mainFunctions = isDark(theme) ? '#2F5D62' : '#FAFAFA';

  const themeConfig = createTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimary,
        light: lightPrimary,
        dark: darkPrimary,
      },
      secondary:{
        main: mainSecondary,
        light: mainFunctions
      } 
    },
  });

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <MuiThemeProvider theme={themeConfig}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
