import { MD3DarkTheme } from 'react-native-paper';

export const temaOscuro = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#AFC1FF',
    onPrimary: '#FFF',
    secondary: '#C1BBFF',
    tertiary: '#5EEAD4',
    background: '#121318',
    onSurface: '#E3E5EC',
    outline: '#8E9099',
    error: '#FF6B6B',
    secondaryContainer: '#2E2A66',
    onSecondaryContainer: '#E4E1FF',
    elevation: {
      level0: 'transparent',
      level1: '#1F202A',
      level2: '#292A37',
      level3: '#323348',
      level4: '#3B3C59',
      level5: '#454664',
    },
  },
};