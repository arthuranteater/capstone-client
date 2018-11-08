import React from 'react';
import { View, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export default class MapScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            petname: '',
            latitude: 39.755191,
            longitude: -105.005931,
            latitudeDelta: 0.0020,
            longitudeDelta: 0.0014,

        }
    }

    handleZoom = () => {

    }



    moveLat = () => {
        setInterval(() => {
            let newLat = this.state.latitude + .0000004
            this.setState({ latitude: newLat })
        }, 500);
    }


    render() {
        const { region } = this.props;
        console.log(region);
        this.moveLat()
        return (
            <View style={styles.container} >
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: this.state.latitudeDelta,
                        longitudeDelta: this.state.longitudeDelta,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude
                        }}
                        title={this.state.petname}
                        description={"description"}
                    />
                </MapView>
                <View style={{ position: "absolute", flexDirection: "row" }}>
                    <TouchableHighlight style={{ justifyContent: 'center', borderColor: "black", borderWidth: 1, flexDirection: "column", height: 100, width: 200 }} onPress={this._onPressButton}>
                        <Icon
                            name='plus'
                            type='font-awesome'
                            color='#000080'
                        />

                    </TouchableHighlight>
                    <TouchableHighlight style={{
                        justifyContent: 'center',
                        borderColor: "black", borderWidth: 1, flexDirection: "column", height: 100, width: 200
                    }} onPress={this.HandleZoom}>
                        <Icon
                            name='minus'
                            type='font-awesome'
                            color='#000080'
                        />
                    </TouchableHighlight>
                </View>
            </View >
        );
    }
}



const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
    },
});