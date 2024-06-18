import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import { LoginScreen } from './screens/login/LoginScreen';
import { Provider } from 'react-redux';
import { store } from './state/store';

const root = createRoot(document.getElementById('root')!);

function App() {
    return <LoginScreen />;
}

root.render(
    <Provider store={store}>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </Provider>
);