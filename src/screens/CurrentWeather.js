import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../Components/RowText";
import { weatherType } from "../utilities/WeatherType";

const CurrentWeather = ({weatherData}) => {
  const { wrapper, container, tempStyle, feels, highLow, highLowWrapper, bodyWrapper, description, message } = styles
  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData
  const weatherCondition = weather[0]?.main
  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
        <Text style={tempStyle}>{temp}°</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText containerStyles={highLowWrapper} messageOneStyles={highLow}
          messageTwoStyles={highLow} messageOne={`High: ${temp_max}°  `} messageTwo={`Low: ${temp_min}°`} />
      </View>
      <RowText containerStyles={bodyWrapper} messageOneStyles={description}
          messageTwoStyles={message} messageOne={weather[0]?.description} messageTwo={weatherType[weatherCondition]?.message} />
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
  tempStyle: {
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
