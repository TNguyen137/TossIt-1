import React, { Component } from 'react'
import {
   View, Text, Button, TextInput, ScrollView
} from 'react-native'

export default class MyPickups extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView><Text>List of pickups goes here</Text></ScrollView>

                <View>
                    <Button
                        onPress = {this._isPressMap}
                        style = {{height: 50, borderWidth: 1, borderColor: 'black' }}
                        title = 'Map Demo'
                        color = 'black'>
                    </Button>
                    <Button
                        onPress = {this._isPressDemo}
                        style = {{height: 50, borderWidth: 1, borderColor: 'black' }}
                        title = 'DemoItem'
                        color = 'black'>
                    </Button>
                     <Button
                        onPress = {this._isPressBack}
                        style = {{height: 50, borderWidth: 1, borderColor: 'black' }}
                        title = 'Back'
                        color = 'black'>
                    </Button>
                </View>
            </View>

        )
    }
    _isPressBack = () => {
        this.props.navigator.pop()
    }
    _isPressDemo = () => {
        this.props.navigator.push({
            title: 'Demo Item',
            name: 'DemoItem',
            // username: this.state.username
        })
    }

    _isPressMap = () => {
        this.props.navigator.push({
            title: 'Map Demo',
            //name: 'Root',
            name: 'Map',
            // username: this.state.username
        })
    }
}
