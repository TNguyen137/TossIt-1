import * as firebase from 'firebase';
import NewListing from 'NewListing'
import React, { Component } from 'react'
import {
   View, Text, Button, TextInput, Alert
} from 'react-native'

/**
* Initialize firebase
*/
const firebaseConfig = {
    apiKey: "AIzaSyAtyvVb1sMkEa8I7USUk7Ee3Do1lnaMQ9A",
    authDomain: "goingmerry-53c7c.firebaseapp.com",
    databaseURL: "https://goingmerry-53c7c.firebaseio.com",
    storageBucket: "goingmerry-53c7c.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.database().ref();

export default class NewListingContinued extends Component {
    constructor(props) {
        super(props);
        this.state = {location: '',
                        pickupDate: '',
                        time: '',
                        payment: ''}
    }
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1}}>
                    <Text>Upload picture/picture displayed here</Text>
                </View>

                <View style={{flex: 1}}>
                    <Text>Location: </Text>
                    <TextInput
                        style = {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        underlineColorAndroid = 'rgba(0,0,0,0)'
                        onChangeText = {(text) => this.setState({ location: text })}
                        placeholder = 'Type address Here'
                        value = { this.state.location }
                    />

                    <Text>Pickup Date: </Text>
                    <TextInput
                        style = {{ height: 40, borderColor: 'gray', borderWidth: 1}}
                        underlineColorAndroid = 'rgba(0,0,0,0)'
                        onChangeText = {(text) => this.setState({ pickupDate: text })}
                        placeholder = 'Type pickup date here'
                        value = { this.state.pickupDate }
                    />

                    <Text>Pickup Time: </Text>
                    <TextInput
                        style = {{ height: 40, borderColor: 'gray', borderWidth: 1}}
                        underlineColorAndroid = 'rgba(0,0,0,0)'
                        onChangeText = {(text) => this.setState({ pickupTime: text })}
                        placeholder = 'Type description here'
                        value = { this.state.pickupTime }
                    />

                    <Text>Payment Amount: </Text>
                    <TextInput
                        style = {{ height: 40, borderColor: 'gray', borderWidth: 1}}
                        underlineColorAndroid = 'rgba(0,0,0,0)'
                        onChangeText = {(text) => this.setState({ payment: text })}
                        placeholder = 'Type size here'
                        value = { this.state.payment }
                    />
                </View>

                <View style={{}}>
                    <Button
                        onPress = {this._isPress}
                        style = {{height: 30, borderWidth: 1, borderColor: 'black' }}
                        title = 'Post'
                        color = 'black'>
                    </Button>
                </View>
            </View>

        )
    }

    _isPress = () => {
        database.child("users").child("Taylor").child("post_list").child(NewListing.this.state.title).set({
            location: this.state.location,
            pickupDate: this.state.pickupDate,
            time: this.state.time,
            payment: this.state.payment
        });
        Alert.alert("Post added!");
        this.props.navigator.popN(2)
    }
}
