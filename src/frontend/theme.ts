import { extendTheme, ThemeConfig } from '@chakra-ui/react';

export const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: true
    } as ThemeConfig,
    colors: {
        danger: '#E53E3E',
        success: '#48BB78'
    }
});