import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { TodosList } from '../components/TodosList'
import { todosData } from '../data/todos'

interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
    isToday: boolean;
    hour: string;
  }
  
  
  export const HomeScreen = () => {
    const [localData, setLocalData] = useState([] as Todo[]);
    const [isHidden, setIsHidden] = useState(false);
      // Ordenar los datos al inicializar el componente
    const sortTodos = () => {
      const sorted = [...todosData].sort((a, b) => {
        if (a.isCompleted && !b.isCompleted) {
          return 1;
        }
        if (!a.isCompleted && b.isCompleted) {
          return -1;
        }
        return 0;
      });
      setLocalData(sorted);
    };
    useEffect(() => {
      sortTodos();
    }, []);
    const handleHidePress = ()=>{
        if(isHidden){
            setIsHidden(false)
            sortTodos();
            return;
        }
        setIsHidden(!isHidden)
        setLocalData(localData.filter(todo => !todo.isCompleted))
    } 
  return (
    <View style={styles.container}>
        <Image
            source={{uri: 'https://t4.ftcdn.net/jpg/04/88/57/27/240_F_488572706_o6TjVp3YNYVKUChLFWqNgGop7rcXl9mj.jpg'}}
            style={styles.pic}
        />
        <View style={{flexDirection:'row', alignItems: 'center', justifyContent:'space-between'}}>
            <Text style={styles.title}>Today</Text>
            <TouchableOpacity
                onPress={handleHidePress}
            >
                <Text style={{color: '#3478f6'}}>{isHidden ? "Show Completed": "Hide Completed"}</Text>
            </TouchableOpacity>
        </View>
        <TodosList todosData={localData.filter(todo => todo.isToday)}/>
        <Text style={styles.title}>Tomorrow</Text>
        <TodosList todosData={todosData.filter(todo => !todo.isToday)}/>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
    </View>
  )
}
 
const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 10,
    },
    pic: {
        width: 42,
        height: 42,
        borderRadius: 21,
        alignSelf: 'flex-end'
    },
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop:"10%"
    },
    button: {
        width:42,
        height:42,
        borderRadius:21,
        backgroundColor:'#000',
        position:'absolute',
        bottom:50,
        right:20,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:.5,
        elevation:5,
    },
    plus:{
        fontSize: 40,
        color:'#fff',
        position: 'absolute',
        top: -6,
        left:9
    }

});