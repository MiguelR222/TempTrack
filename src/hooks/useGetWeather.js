import React, {useState, useEffect} from "react";
import * as Location from "expo-location"
import {WEATHER_API_KEY} from "@env"

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [location, setLocation]= useState()
    const [weather, setWeather] = useState([])
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])
  
    const fetchWeatherData = async (lat,lon) => {
      try {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
        const data = await res.json()
        setWeather(data)
      } catch (e) {
        setError('Could not fetch weather')
      } finally {
        setLoading(false)
      }
    }; 
  
    useEffect(() => {
      ; (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          setError('permission to access location denied')
          return(console.log(error))
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location)
        setLat(location.coords.latitude)
        setLon(location.coords.longitude)
        await fetchWeatherData(location.coords.latitude, location.coords.longitude)
      })()
    }, [])
    return [loading,error,weather]
}