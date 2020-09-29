import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AddTodo } from './src/AddTodo.js';
import { Navbar } from './src/Navbar.js'
import { Todo } from './src/Todo.js'

export default function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: "Finish ToDo App"},
    {id: 2, title: "Programming 3+ hours"},
    {id: 3, title: "Read 20 or more pages"}
  ])

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString,
      title: title
    }

    // setTodos(todos.concat([ newTodo ]))

    // setTodos((prevTodos) => {
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })

    setTodos(prev => [...prev, {
      id: Date.now().toString,
      title: title 
    }])
  }

  return (
    <View >
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList 
          data={todos}
          renderItem= {(item) => {
            return <Todo todo={item} key={todo.id} />
          }}
        />

        <ScrollView>
          {todos.map(todo => {
            return <Todo todo={todo} key={todo.id} />
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
})


