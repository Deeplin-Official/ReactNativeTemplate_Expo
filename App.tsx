import React from 'react';

import SafeArea from './src/components/SafeArea';
import Home from './src/screens/Home';

const App: React.FC = () => {
  return (
    <SafeArea>
      <Home />
    </SafeArea>
  );
};

export default App;
