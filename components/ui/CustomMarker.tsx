import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { location } from '../Map';
import { Callout, Marker } from 'react-native-maps';
import { ThemedView } from '../ThemedView';

interface Props {
    coordinate: location;
    title: string;
    image: any
}


const CustomMarker = (props: Props) => {
  return (
    <Marker coordinate={props.coordinate}>

<ThemedView style={styles.container}>
    <Image source={props.image} style={styles.image} /> 
</ThemedView>

<Callout tooltip>
    <ThemedView>
        <Text>{props.title}</Text>
    </ThemedView>
</Callout>
    </Marker>
  )
}

export default CustomMarker

const styles = StyleSheet.create({

    container: {
        width:100,
        height:100,
        borderRadius:50,
        alignItems:"center",

    },
    image: {
        width:"100%",
        height:"100%",
        borderRadius:9999,
        resizeMode: "contain"
    }
})