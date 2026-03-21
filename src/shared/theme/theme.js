import { createTheme } from '@mui/material/styles';
import { tokens } from './tokens';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: tokens.colors.primary.main,
      light: tokens.colors.primary.light,
      dark: tokens.colors.primary.dark,
    },
    secondary: {
      main: tokens.colors.secondary.main,
      light: tokens.colors.secondary.light,
      dark: tokens.colors.secondary.dark,
    },
    background: {
      default: tokens.colors.background.default,
      paper: tokens.colors.background.paper,
    },
    text: {
      primary: tokens.colors.text.primary,
      secondary: tokens.colors.text.secondary,
    },
    divider: tokens.colors.border.light,
  },
  typography: {
    fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "BIZ UDPGothic", Meiryo, sans-serif',
    h1: { fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2 },
    h2: { fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.3 },
    h3: { fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 },
    h4: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.4 },
    subtitle1: { fontSize: '1.125rem', fontWeight: 500, lineHeight: 1.5, color: tokens.colors.text.secondary },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    button: { fontWeight: 600, textTransform: 'none', letterSpacing: '0.02em' },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: tokens.borderRadius.pill,
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: tokens.shadows.glowGold,
          },
        },
        contained: {
          background: `linear-gradient(45deg, ${tokens.colors.primary.dark}, ${tokens.colors.primary.main})`,
          color: '#ffffff',
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
          }
        }
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: `1px solid ${tokens.colors.border.light}`,
          backdropFilter: 'blur(10px)',
          background: 'rgba(18, 21, 36, 0.7)',
        },
      },
    },
  },
});

export default theme;
