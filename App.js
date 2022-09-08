import React from 'react';
import {NativeBaseProvider} from "native-base";
import Routes from "./Routes";

const App = () => {
  return(
    <NativeBaseProvider>
        <Routes />
    </NativeBaseProvider>
  );
};
export default App;