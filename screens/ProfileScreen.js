import React from 'react';
import {
    Image,
    StyleSheet,
    TextInput,
    View,
    Button
} from 'react-native';



export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            petname: '',
            key: '',
            latitude: 39.755191,
            longitude: -105.005931,
            latitudeDelta: 0.0010,
            longitudeDelta: 0.0007,

        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam'),
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="  Email"
                        placeholderTextColor="grey"
                        value={this.state.email}
                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="  Password"
                        placeholderTextColor="grey"
                        value={this.state.password}
                        onChange={(e) => { this.setState({ password: e.target.value }) }}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="  Pet Name"
                        placeholderTextColor="grey"
                        value={this.state.petname}
                        onChange={(e) => { this.setState({ petname: e.target.value }) }}

                    />
                </View>
                <View style={{ marginBottom: 30 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="  Activation Key"
                        placeholderTextColor="grey"
                        value={this.state.key}
                        onChange={(e) => { this.setState({ key: e.target.value }) }}
                    />
                </View>
                <View style={{ marginBottom: 100, backgroundColor: '#000080', borderRadius: 100, borderWidth: 2, borderColor: '#000080' }}>
                    <Button style={{ height: 40, width: 200 }} color="red"
                        title="Track"
                        onPress={() => this.props.navigation.navigate('Map')}
                    />
                </View>
                <View style={{ backgroundColor: 'red', borderRadius: 100, borderWidth: 2, borderColor: 'red' }}>
                    <Button style={{ height: 40, width: 200 }} color="#000080"
                        title="Delete Account"
                        onPress={() => this.props.navigation.navigate('Map')}
                    />
                </View>
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
        marginTop: 30, marginBottom: 20, fontSize: 20, height: 40, width: 200, backgroundColor: 'white', borderBottomColor: '#000080', borderBottomWidth: 1
    }
});