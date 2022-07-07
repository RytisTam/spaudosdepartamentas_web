import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#56B4BA',
    },
    mode: 'light',
  },
});

export default lightTheme;
