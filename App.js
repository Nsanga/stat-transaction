import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NativeBaseProvider} from "native-base";

import Historique from './screens/historique';
import Accueil from './screens/accueil';
import Login from './screens/login';

const App = () => {
  return(
    <NativeBaseProvider>
        <Historique />
    </NativeBaseProvider>
  );
};
export default App;