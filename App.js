import * as React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { Button } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require("./assets/profile.jpeg")} style={styles.photo} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Sonya</Text>
          <Text style={styles.desc}>Developer & Designer</Text>
          <View style={styles.linkLogos}>
            <Image source={require("./assets/linkedin.png")} style={styles.logo}/>
            <Image source={require("./assets/github-logo.png")} style={styles.logo}/>
            <Image source={require("./assets/website.png")} style={styles.logo}/>
            {/* <Button>ddd</Button> */}
          </View>
        </View>
      </View>
      <ScrollView style={styles.blurbContainer}>
        <Text style={styles.blurb}>South Korean</Text>
        <Text style={styles.blurb}>Lonely Single</Text>
        <Text style={styles.blurb}>26 Years Old</Text>
        <Text style={styles.blurb}>Snap Engineering Academy Scholar</Text>
        <Text style={styles.blurb}>El Camino Communtiy College</Text>
        <Text style={styles.blurb}>Sungshin Women's University</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  profileInfo: {
    flexDirection: "column",
    width: "40%",
  },
  name: {
    fontSize: 30,
  },
  photo: {
    borderRadius: 100,
    // resizeMode: "contain",
    width: 150,
    height: 150,
    margin: 10,
  },
  linkLogos: {
    flexDirection: "row",
  },
  logo: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginRight: 10,
  },
  blurb: {
    fontSize: 20,
  },
});
