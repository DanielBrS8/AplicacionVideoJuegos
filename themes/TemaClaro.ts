import { MD3LightTheme } from 'react-native-paper';

export const temaClaro = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#4F7FFF',
    onPrimary: '#FFF',
    secondary: '#6C63FF',
    tertiary: '#00C2A8',
    background: '#F2F4F8',
    onSurface: '#1A1C1E',
    outline: '#C2C7D0',
    error: '#D32F2F',
    secondaryContainer: '#E6E4FF',
    onSecondaryContainer: '#1B1A3A',
    elevation: {
      level0: 'transparent',
      level1: '#FFFFFF',
      level2: '#F7F9FC',
      level3: '#EEF2F8',
      level4: '#E8EDF6',
      level5: '#E2E8F3',
    }
  }
}
