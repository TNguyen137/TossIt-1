import React, { Component } from 'react'
import {
   View, 
   Text, 
   Button, 
   TextInput, 
   TouchableHighlight, 
   StyleSheet, 
   ScrollView, 
   AppRegistry, 
   Dimensions, 
   StatusBar, 
   Image
} from 'react-native'

export default class MyPickups extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{flex: 1}}>

            <View style={{flex: 0.92}}>
                <Text style={{fontWeight: 'bold', fontSize: 40, color: 'gray'}}>
                    Pickups
                </Text>
                <Text style={{fontSize:20}}>You currently do not have any items listed.</Text>
                <ScrollView>
                    <Text>(List of Pickups from Firebase should go here)</Text>
                </ScrollView>
                <Button
                    onPress = {this._onPressDemo}
                    style = {{height: 50, borderWidth: 0.5, borderColor: 'black' }}
                    title = 'Demo Pickup Item'
                    color = '#dcdcdc'>
                </Button>
            </View>

            <View style={{flex: 0.08, flexDirection: 'row', borderColor:'gray', borderWidth:1}}>
                <TouchableHighlight onPress={this._onPressDockExplore} 
                    style = {{flex: 0.25, flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            source = {require('../Images/Icons/Search.png')}
                            style={{width: 25, height: 25}}>               
                        </Image>
                        <Text style={styles.dockText}>EXLPORE</Text>
                    </View>
                </TouchableHighlight>
            
                <TouchableHighlight style = {{flex: 0.25, flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            source = {require('../Images/Icons/Pickup.png')}
                            style={{width: 25, height: 25}}>               
                        </Image>
                        <Text style={styles.dockText}>PICKUPS</Text>
                    </View>
                </TouchableHighlight>
                
                <TouchableHighlight onPress={this._onPressDockInbox} underlayColor = 'gray'
                    style = {{flex: 0.25, flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            source = {require('../Images/Icons/Inbox.png')}
                            style={{width: 25, height: 25}}>               
                        </Image>
                        <Text style={styles.dockText}>INBOX</Text>
                    </View>
                </TouchableHighlight>
            
                <TouchableHighlight onPress={this._onPressPoster} underlayColor = {'gray'} activeOpacity = {50}
                    style = {{flex: 0.25, flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            source = {require('../Images/Icons/Profile.png')}
                            style={{width: 25, height: 25}}>               
                        </Image>
                        <Text style={styles.dockText}>PROFILE</Text>
                    </View>
                </TouchableHighlight>
            </View>

            </View>
        )
    }

    _onPressDockExplore = () => {
        this.props.navigator.push({
            title: 'Exlpore',
            name: 'Map',
            passProps: {
                username: this.props.username
            }
        })
    }

    _onPressDockInbox = () => {
        this.props.navigator.push({
            title: 'Inbox',
            name: 'DemoInbox',
            passProps: {
                username: this.props.username
            }
        })
    }

    _onPressBack = () => {
        this.props.navigator.pop()
    }

    _onPressPoster = () => {
        this.props.navigator.push({
            title: 'My Listings',
            name: 'MyListings',
            passProps: {
                username: this.props.username
            }
        })
    }

    _onPressDemo = () => {
        this.props.navigator.push({
            title: 'Demo Item',
            name: 'DemoItem',
        })
    }

}

const styles = StyleSheet.create({
  dockText: {
    fontSize: 11,
    fontWeight: 'bold'
  }
  /*container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    //textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
      flex: 0.92,
      width: width,
      height: height - 50 // * 2/3
  },
  button: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'black'
  },
  toolbar: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
  },
  toolbarButton: {
      width: 50,
      color:'#fff',
      //textAlign: 'center'
  },
  toolbarTH: {
      width: 50,
      //textAlign: 'center'
  },*/
});