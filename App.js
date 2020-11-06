/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Store from './store/store'
import { Provider } from 'react-redux';
import MainScreen from './MainScreen'
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Provider store={Store}>
          <MainScreen />
        </Provider>
      </SafeAreaView>
    </>
  );
};


export default App;
