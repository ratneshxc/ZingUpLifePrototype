import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/zingup3.jpeg");
const launchscreenLogo = require("../../../assets/zingup.png");

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.backgroundImageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 75,
              
            }}
          >
            <H3 style={styles.text}>HOLISTIC WELLNESS PLATFORM </H3>
            <View style={{ marginTop: 8 }} />
            <H3 style={styles.text}>LIVE MORE !!</H3>
            <View style={{ marginTop: 8 }} />
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button
            block
              style={{  alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text>Explore Community</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
