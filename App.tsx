import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { TodosList } from './src/components/TodosList'


const App = () => {
  return (
    <SafeAreaView>
      <TodosList/>
    </SafeAreaView>
  )
}

export default App;