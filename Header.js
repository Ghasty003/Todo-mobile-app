import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Todo App</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "coral",
    padding: 20,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
