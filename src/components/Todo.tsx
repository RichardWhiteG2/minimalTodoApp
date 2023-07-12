
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Checkbox } from './Checkbox';
import moment from 'moment';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { deleteTodoReducer } from '../reducers/todosSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface TodoProps {
    id: number;
    text: string;
    isCompleted: boolean;
    isToday: boolean;
    hour: string;
  }

export const Todo = ({
    id,
    text,
    isCompleted,
    isToday,
    hour,
}: TodoProps) => {
  const [localHour, setLocalHour] = useState(new Date(hour));
  const dispatch = useAppDispatch();
  const todos = useAppSelector( state => state.todos.todos)
  const handleDeleteTodo = async () => {
    dispatch(deleteTodoReducer(id));  
    try {
      await AsyncStorage.setItem('@Todos', JSON.stringify(
        todos.filter(todo => todo.id !== id)
      ));
      console.log('Todo deleted correctly');
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
      
        <Checkbox id={id} text={text} 
                    isCompleted={isCompleted} 
                    isToday={isToday}
                    hour={hour}/>
        <View>
            <Text style={
                isCompleted
                ? [styles.text, {textDecorationLine: 'line-through', color: '#74747430'}]
                : styles.text
                }>{text}</Text>
            <Text style={
                isCompleted
                ? [styles.time, {textDecorationLine: 'line-through', color: '#74747430'}]
                : styles.time
                }>{moment(localHour).format('LT')}</Text>
        </View>
        </View>
        <TouchableOpacity  onPress={handleDeleteTodo}>
         <Text style={{fontSize:16, color:"black"}}> 🆑</Text>
        </TouchableOpacity>
    </View>
  )
} 

const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center', 
      justifyContent: 'space-between',
    },
    text: {
      fontSize: 15,
      fontWeight: '500',
      color: '#737373',
    },
    time: {
      fontSize: 13,
      color: '#a3a3a3',
      fontWeight: '500',
    }
});