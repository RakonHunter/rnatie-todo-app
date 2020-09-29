import React, { useState } from 'react'
import {View, StyleSheet, TextInput, Button} from 'react-native'

export const AddTodo = ({ onSumbit }) => { 

    const [value, setValue] = useState('')

    const pressHandler = () => {
        onSubmit('Test todo')
    }

    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input} 
                onChangeText={text => setValue(text)}     //callback func "text" передаю в функию "setValue"
                value={value}
                placeholder="Введите название новой задачи..."
                />
            <Button title="Dobavit" onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    }, 
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomColor: '#3949ab',
        borderBottomWidth: 2
    }
})