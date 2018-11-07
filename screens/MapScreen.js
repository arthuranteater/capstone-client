import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';


export default class MapScreen extends React.Component {
    static navigationOptions = {
        title: 'Map',
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>Map</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
