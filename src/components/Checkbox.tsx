import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

interface TodoProps {
    id: number;
    text: string;
    isCompleted: boolean;
    isToday: boolean;
    hour: string;
  }
export const Checkbox = ({
    id,
    text,
    isCompleted,
    isToday,
    hour,
}: TodoProps) => {
  return isToday ? (
    <TouchableOpacity style={isCompleted ? styles.checked : styles.unChecked}>
        {isCompleted && <Text style={{fontSize:16, color:"#FAFAFA"}}>✓</Text>}
    </TouchableOpacity>
  ):(
    <View style={styles.isToday} />
  );
}

const styles = StyleSheet.create({
    checked: {
        width: 20,
        height: 20,
        marginRight: 13,
        borderRadius: 6,
        backgroundColor: '#262626',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: .3,
        shadowRadius: 5,
        elevation: 5,
    },
    unChecked: {
        width: 20,
        height: 20,
        marginRight: 13,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        borderRadius: 6,
        backgroundColor: '#fff',
        marginLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: .1,
        shadowRadius: 5,
        elevation: 5,
    },
    isToday: {
        width: 10,
        height: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#262626',
        marginRight: 13,
        marginLeft: 15,
    },
})