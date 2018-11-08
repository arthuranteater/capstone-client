import React from 'react';
import {
    Image,
    StyleSheet,
    TextInput,
    View,
    Button
} from 'react-native';



export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }
    static navigationOptions = {
        header: null,
    };

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
                        onChangeText={(username) => this.setState({ username })}
                    />
                </View>
                <Button style={{ height: 60, width: 100 }} color="red"
                    title="Login"
                    onPress={() => this.props.navigation.navigate('Profile')}
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