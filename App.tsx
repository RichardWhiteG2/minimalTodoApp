import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store/store';


const App = () => {
  return (
  <Provider store={store}>
    <NavigationContainer>
      <StackNavigator/> 
    </NavigationContainer>
  </Provider>
  )
}

export default App;