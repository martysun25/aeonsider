import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import firebase from "react-native-firebase";

export default class App extends React.Component {
  firebase = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(user => {
        alert(user.isAnonymous);
      })
      .catch(err => {
        alert(err);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.firebase} title="Firebase" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
