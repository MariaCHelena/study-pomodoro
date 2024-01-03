import React from 'react';

import Rotas from './src/Rotas';
import { TimerProvider } from './src/contexts/timerContext';

export default function App() {
  return (
      <TimerProvider>
        <Rotas />
      </TimerProvider>
  );
}