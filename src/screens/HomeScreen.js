import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

//{navigation} instead of props -> example of object destructuring
const HomeScreen = ({navigation}) => {
  return (
  <View>
    <Text style={styles.text}>Hello!</Text>
    <Button
        title="Go to Components Demo"
        // onPress={() => props.navigation.navigate("Components")}
        onPress={() => navigation.navigate("Components")}
    />
    <Button
      title="Go to List Demo"
      // onPress={() => props.navigation.navigate("List")}
      onPress={() => navigation.navigate("List")}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


