import React, { useState } from 'react'
import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoReducer } from '../reducers/todosSlice';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AddTodoScreen = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());
    const [isToday, setIsToday] = useState(false);
    const listTodos = useAppSelector( state => state.todos.todos)
    // const dispatch= useDispatch();
    const dispatch = useAppDispatch();
    const navigation = useNavigation();

    const addTodo = async () => {
        const newTodo = {
            id: Math.floor(Math.random()*1000000),
            text: name,
            hour: date.toString(),
            isToday: isToday,
            isCompleted: false,   
        }
        try{
            // await AsyncStorage.setItem('@todos', JSON.stringify(newTodo));
            await AsyncStorage.setItem('@todos', JSON.stringify([...listTodos, newTodo]));
            dispatch(addTodoReducer(newTodo));
            console.log('Todo saved correctly');
            navigation.goBack();
        }catch (e) {
            console.log(e);
        }
    }
  return (
    // <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
    <View style={styles.container}>
        <Text style={styles.title}>Add a Task</Text>
    <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Name</Text>
        <TextInput
            style={styles.textInput}
            placeholder="Task"
            placeholderTextColor="#00000030"
            onChangeText={(text) => {setName(text)}} 
        /> 
    </View>        
    <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Hour</Text>
        <DateTimePicker
            value={date}
            mode={'time'}
            is24Hour={true}
            onChange={(event, selectedDate) => setDate(selectedDate? selectedDate : date)}
            style={{width: '80%'}}
        />
    </View>
    <View style={[styles.inputContainer, {paddingBottom: 0, alignItems: 'center'}]}>
        <View>
            <Text style={styles.inputTitle}>Today</Text>
            <Text style={{color: '#00000040', fontSize: 12, maxWidth: '84%', paddingBottom: 10}}>If you disable today, the task will be considered as tomorrow</Text>
        </View>
        <Switch
            value={isToday}
            onValueChange={(value) => { setIsToday(value) }}
        />
    </View>
    <View style={[styles.inputContainer, {paddingBottom: 0, alignItems: 'center'}]}>
        {/* <View>
            <Text style={styles.inputTitle}>Alert</Text>
            <Text style={{color: '#00000040', fontSize: 12, maxWidth: '85%'}}>You will receive an alert at the time you set for this reminder</Text>
        </View> */}
    {/* <Switch
            value={withAlert}
            onValueChange={(value) => { setWithAlert(value) }}
        /> */}
    </View>
    
    <TouchableOpacity  style={styles.button} onPress={addTodo}>
        <Text style={{color: 'white'}}>Done</Text>
    </TouchableOpacity>
    </View>
// </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 10,
    },
    textInput: {
        borderBottomColor: '#00000030',
        borderBottomWidth: 1,
        width: '80%',
    },
    container: {
        flex: 1,
        backgroundColor: '#F7F8FA',
        paddingHorizontal: 30,
    },
    inputTitle: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 24
    },
    inputContainer: {
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        paddingBottom: 30,
    },
    button: {
        marginTop: 30,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        height: 46,
        borderRadius: 11,
    }
});