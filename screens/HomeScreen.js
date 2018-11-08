import React from 'react';
import {
    Image,
    StyleSheet,
    TextInput,
    View,
    Button,
    Text
} from 'react-native';



export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            petname: '',
            latitude: 39.7392,
            longitude: -104.9903,
            latitudeDelta: 0.0010,
            longitudeDelta: 0.0007,

        }
    }
    static navigationOptions = {
        header: null,
    }


    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
                <View style={{ marginBottom: 50 }}>
                    <Image source={require('../assets/blink3.gif')}></Image>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        placeholderTextColor="white"
                        textAlign={'center'}
                        value={this.state.username}
                        onChange={(e) => { this.setState({ username: e.target.value }) }}
                    />
                </View>
                <Button style={{ height: 60, width: 100 }} color="red"
                    title="Login"
                    onPress={() => {
                        this.props.navigation.setParams({ otherParam: this.state.username })
                        this.props.navigation.navigate('Profile')
                    }}
                />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    input: {
        color: 'white', marginTop: 30, marginBottom: 5, fontSize: 20, height: 60, width: 300, backgroundColor: 'black', borderBottomWidth: 1, borderBottomColor: 'red'
    }
});