import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import TaskPreview from "./TaskPreview";

function AddTasks({ addTask }) {
  const [userText, setUserText] = useState("");

  const handleChangeText = (newVal) => {
    setUserText(newVal);
  };

  const handleTaskPress = () => {
    if (userText.length == 0) {
      Alert.alert("Error!", "Task cannot be empty", [{ text: "okay" }]);
    } else if (userText.length < 3) {
      Alert.alert("Error!", "Task must be something relevant", [
        { text: "alright" },
      ]);
    } else {
      addTask(userText);
      setUserText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add new task..."
        style={styles.textInput}
        value={userText}
        onChangeText={handleChangeText}
      />
      <TouchableOpacity style={styles.btn} onPress={handleTaskPress}>
        <Text style={styles.btnText}>ADD TODO</Text>
      </TouchableOpacity>
      <TaskPreview preview={userText} />
    </View>
  );
}

export default AddTasks;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "coral",
    marginHorizontal: 50,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
  container: {
    marginVertical: 10,
  },
  textInput: {
    borderBottomWidth: 2,
    borderColor: "grey",
    textAlign: "center",
    paddingTop: 20,
    marginHorizontal: 30,
  },
});
