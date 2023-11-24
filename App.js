import React, {useState, useEffect} from "react";
import { ActivityIndicator, View, StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/Components/Tabs";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/Components/ErrorItem";
import OurButton from "./src/demonstration/OurButton";


const App = () => {
  const [loading, error, weather] = useGetWeather()

 
  if (weather && weather.list && !loading) {
    console.log(weather)
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  };
  return (
    <View style={styles.container}>
        {error ? <ErrorItem/> : <ActivityIndicator size={'large'} color={'blue'} /> }
      </View>
    )
  
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex:1
  }
})
export default App;