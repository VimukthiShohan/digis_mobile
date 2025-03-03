import React from 'react';

import Providers from '@providers/index.tsx';
import Navigation from '@navigation/index.tsx';

const App: React.FC<React.JSX.Element> = () => (
  <Providers>
    <Navigation />
  </Providers>
);

export default App;
