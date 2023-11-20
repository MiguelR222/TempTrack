import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground, View} from "react-native";
import IconText from "../Components/IconText";

const City= () => {
    const {container, imageLayout, cityName, countryName, 
        cityText, populationText, populationWrapper,
        riseSetText, riseSetWrapper, rowLayout } = styles
    return(
        <SafeAreaView style= {container}>
            {/* <ImageBackground 
                source={require('/assets/citypic.jpg')}  */}
            {/* style= {imageLayout}> */}
            <Text style= {[cityName, cityText]}>Chihuahua</Text>
            <Text style= {[countryName, cityText]}>Mexico</Text>
            <View style= {[populationWrapper, rowLayout]}>
                    <IconText iconName='user' iconColor='red' bodyText={'8000'} bodyTextStyles= {populationText} />
            </View>
            <View style={[riseSetWrapper, rowLayout]}>
                <IconText iconName='sunrise' iconColor='white' bodyText={'10:46:58 am'} bodyTextStyles= {riseSetText} />
                <IconText iconName='sunset' iconColor='white' bodyText={'17:28:15 pm'} bodyTextStyles= {riseSetText} />
            </View>
            {/* </ImageBackground> */}
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: StatusBar.currentHeight || 0,

    },
    imageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft:7.5,
        color:'red',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color:'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }

})
export default City