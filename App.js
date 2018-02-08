import React from 'react';
import { Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { RkTheme, RkTabView, RkButton, RkCard, RkText } from 'react-native-ui-kitten'

/**
 * Customize theme
 */
RkTheme.setType('RkCard', 'story', {
    img: {
        height: 100,
        opacity: 0.7
    },
    header: {
        alignSelf: 'center'
    },
    content:{
        alignSelf:'center'
    }
});

/**
 * Generic renderers
 */
let renderTab = (isSelected, title, icon) => {
    let backgroundColor = isSelected ? 'cornflowerblue' : 'white';
    let color = (!isSelected) ? 'cornflowerblue' : 'white';

    return (
        <View
            style={{
                backgroundColor,
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 17,
            }}>
            <Icon name={icon} type="font-awesome" style={{color, fontSize: 16}}/>
            <RkText style={{color, marginLeft: 11}}>{title}</RkText>
        </View>);
};

/**
 * Tabs renderers
 */
let renderHome = () => {
    return (
        <RkCard rkType='story'>
            <Image rkCardImg source={require('./img/sea.jpg')}/>
            <View rkCardHeader>
                <RkText rkType='header'>Once upon a time</RkText>
            </View>
            <View rkCardContent>
                <RkText style={{textAlign:'center'}}>
                    One morning, when Gregor Samsa woke from happy dreams,
                    he found himself transformed in ...
                </RkText>
            </View>
            <View rkCardFooter>
                <RkButton rkType='small outline'>Learn More</RkButton>
                <RkButton rkType='small'>Read later</RkButton>
            </View>
        </RkCard>
    );
};

/**
 * THE App !
 */
const App = () => (
    <RkTabView rkType='material' tabsUnderContent='true' >
        <RkTabView.Tab title={(selected) => {
            return renderTab(selected, 'Bus', 'youtube');
        }}>
            <Text>Bus</Text>
        </RkTabView.Tab>
        <RkTabView.Tab title={(selected) => {
            return renderTab(selected, 'Train', 'facebook');
        }}>
            <Text>Train</Text>
        </RkTabView.Tab>
        <RkTabView.Tab title={(selected) => {
            return renderTab(selected, 'Plain', 'twitter');
        }}>
            <Text>Plain</Text>
        </RkTabView.Tab>
    </RkTabView>
);

export default App;
