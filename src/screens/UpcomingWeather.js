import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  StatusBar,
  ImageBackground,
} from "react-native";
import ListItem from "../Components/ListItem";

const UpcomingWeather = ({weatherData}) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const { container, image } = styles;
  const limitedData = weatherData.slice(0, 24); 
  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require("../../assets/clouds.jpg")} style={image}>
        <FlatList
          data={limitedData} 
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "bluecd",
  },
  image: {
    flex: 1,
  },
});
export default UpcomingWeather;
