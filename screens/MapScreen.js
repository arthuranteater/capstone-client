import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export default class MapScreen extends React.Component {
    render() {
        const { region } = this.props;
        console.log(region);

        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: 39.7392,
                        longitude: -104.9903,
                        latitudeDelta: 0.0010,
                        longitudeDelta: 0.0007,
                    }}
                >
                </MapView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});