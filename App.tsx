import React from 'react'
import { HomeScreen } from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
  <NavigationContainer>
    <HomeScreen/>
  </NavigationContainer>
  )
}

export default App;