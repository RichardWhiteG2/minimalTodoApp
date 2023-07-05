import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TodosList } from '../components/TodosList'
import { todosData } from '../data/todos'

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Image
            source={{uri: 'https://t4.ftcdn.net/jpg/04/88/57/27/240_F_488572706_o6TjVp3YNYVKUChLFWqNgGop7rcXl9mj.jpg'}}
            style={styles.pic}
        />
        <Text style={styles.title}>Today</Text>
        <TodosList todosData={todosData.filter(todo => todo.isToday)}/>
        <Text style={styles.title}>Tomorrow</Text>
        <TodosList todosData={todosData.filter(todo => !todo.isToday)}/>
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

});