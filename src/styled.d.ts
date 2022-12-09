import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            white: string,
            red: string,
            grey: string,
            black: string,
            disable: string
        };
    }
}