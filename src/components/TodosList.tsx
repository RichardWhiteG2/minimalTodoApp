import React from 'react'
import { FlatList, Text } from 'react-native'

import { Todo } from './Todo'


interface Props {
  todosData: Todo[];
}
export const TodosList = ({todosData}: Props) => {
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
