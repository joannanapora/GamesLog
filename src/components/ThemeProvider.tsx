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
  const mainPrimaryColor = isDark(theme) ? '#00072D' : '#0E6BA8';
  const mainSecondaryColor = isDark(theme) ? '#F7C548' : '#F7C548';

  const themeConfig = createTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <MuiThemeProvider theme={themeConfig}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
