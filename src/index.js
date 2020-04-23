import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8810ae" />
    <Routes />
  </>
);

export default App;
