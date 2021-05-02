import { StatusBar } from 'expo-status-bar';
import React from 'react';

import PrincipalScreen from './src/PrincipalScreen';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={'transparent'} style="light"  />
      <PrincipalScreen />
    </>
  );
}

export default App;