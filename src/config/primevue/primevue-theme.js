import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

export default {
    theme: {
        preset: definePreset(Aura, {
            semantic: {
                'primary': {
                    "0": "#fff9f8",
                    "50": "#fff3ea",
                    "100": "#FEEAD3",
                    "200": "#FDD0A8",
                    "300": "#FAAE7C",
                    "400": "#F68D5B",
                    "500": "#F15A27",
                    "600": "#CF3D1C",
                    "700": "#AD2413",
                    "800": "#8B110C",
                    "900": "#73070A"
                },
                colorScheme: {
                    light: {
                        surface: {
                            50: '{zinc.50}',
                            100: '{zinc.100}',
                            200: '{zinc.200}',
                            300: '{zinc.300}',
                            400: '{zinc.400}',
                            500: '{zinc.500}',
                            600: '{zinc.600}',
                            700: '{zinc.700}',
                            800: '{zinc.800}',
                            900: '{zinc.900}',
                            950: '{zinc.950}'
                        }
                    }
                }
            },
        }),
        options: {
            prefix: 'p',
            cssLayer: false
        },
    },
}