import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import RowText from "../Components/RowText";
import { weatherType } from "../utilities/WeatherType";

const CurrentWeather = () => {
  const {wrapper, container, temp, feels, highLow, highLowWrapper, bodyWrapper, description, message} = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <FontAwesome name="sun-o" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText containerStyles={highLowWrapper} messageOneStyles={highLow}
          messageTwoStyles={highLow} messageOne={"High: 8"} messageTwo={'Low: 6'} />
      </View>
      <RowText containerStyles={bodyWrapper} messageOneStyles={description}
          messageTwoStyles={message} messageOne={"It's Sunny"} messageTwo={weatherType['Thunderstorm'].message} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "pink",
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
