import React from 'react'
import { FlatList, Text } from 'react-native'
import { todosData } from '../data/todos'
import { Todo } from './Todo'

export const TodosList = () => {
  return (
    <FlatList
        data={todosData}
        // renderItem={({ item }) => <Todo {...item} />}
        keyExtractor={item => item.id.toString()}
        // renderItem={({ item }) => <Text>{item.text}</Text>
        renderItem={({ item }) =><Todo {...item}/>
        }
      /> 
  )
}
