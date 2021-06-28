import { createMuiTheme } from '@material-ui/core/styles';


/**
 * 
    Fonts:
  - Family: Arial
  - Main title: 24px
  - Input Label: 12px
  - "My Notes" header: 18px
  - All buttons: 14px
 */

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Arial'].join(','),
    h5: {
      fontSize: '24px'
    },
    h6: {
      fontSize: '18px',
    },
    button: {
      fontSize: '14px',
    },
  },
});