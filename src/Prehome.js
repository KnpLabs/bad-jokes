import React from 'react';
import {View,Image} from 'react-native';

export class Prehome extends React.Component {
    render() {
        setTimeout(function() {
            this.props.navigation.navigate('Home')
        }.bind(this), 2000);

        return (
            <View style={{ flex: 1 }}>
                <Image style={{flex:1, height: undefined, width: undefined}}
                       resizeMode="cover"
                       source={require('../assets/img.jpg')} />
            </View>
        );
    }
}
