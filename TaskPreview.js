import React from "react";
import { StyleSheet, Text, View } from "react-native";

function TaskPreview({ preview }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {preview.length > 0 ? `Preview: ${preview}` : ""}
      </Text>
    </View>
  );
}

export default TaskPreview;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    textAlign: "center",
  },
});
