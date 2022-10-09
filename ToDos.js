import React, { useState } from "react";
import AddTasks from "./AddTasks";
import { MaterialIcons } from "@expo/vector-icons";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function ToDos() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTask) => {
    setTasks((prevItems) => [
      { task: newTask, key: Math.random() },
      ...prevItems,
    ]);
  };

  const deleteTask = (taskKey) => {
    setTasks((prevItems) => prevItems.filter((item) => item.key != taskKey));
  };

  return (
    <View style={styles.container}>
      <AddTasks addTask={addNewTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.task}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.key)}>
              <MaterialIcons name="delete" size={18} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default ToDos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontWeight: "bold",
  },
  textContainer: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
