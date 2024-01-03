import React from 'react';

import Rotas from './src/Rotas';
import { TimerProvider } from './src/contexts/timerContext';
import { ThemeProvider } from './src/contexts/themeContext';

export default function App() {
  return (
    <ThemeProvider>
      <TimerProvider>
        <Rotas />
      </TimerProvider>
    </ThemeProvider>
  );
}