import React from 'react';
import { 
    StyleSheet, 
    View,
} from 'react-native';

import {
  createStackNavigator,
} from 'react-navigation';

import Screen1 from './app/components/screen1/Screen1';
import Screen2 from './app/components/screen2/Screen2';
import Screen3 from './app/components/screen3/Screen3';
import Screen4 from './app/components/screen4/Screen4';
import Screen5 from './app/components/screen5/Screen5';
import Screen6 from './app/components/screen6/Screen6';
import Screen7 from './app/components/screen7/Screen7';
import Screen8 from './app/components/screen8/Screen8';
import Screen9 from './app/components/screen9/Screen9';
import Screen10 from './app/components/screen10/Screen10';
import Screen11 from './app/components/screen11/Screen11';
import Screen12 from './app/components/screen12/Screen12';
import Screen13 from './app/components/screen13/Screen13';
import Screen14 from './app/components/screen14/Screen14';
import Screen15 from './app/components/screen15/Screen15';
import Screen16 from './app/components/screen16/Screen16';

const StackNavigator = createStackNavigator({
    Screen1: { 
        screen: Screen1,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen2: { 
        screen: Screen2,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen3: { 
        screen: Screen3,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen4: { 
        screen: Screen4,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen5: { 
        screen: Screen5,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen6: { 
        screen: Screen6,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen7: { 
        screen: Screen7,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen8: { 
        screen: Screen8,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen9: { 
        screen: Screen9,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen10: { 
        screen: Screen10,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen11: { 
        screen: Screen11,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen12: { 
        screen: Screen12,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen13: { 
        screen: Screen13,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen14: { 
        screen: Screen14,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen15: { 
        screen: Screen15,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen16: { 
        screen: Screen16,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
},{ headerMode: 'screen' });

export default class App extends React.Component {
    render() {
        return (

            <View style={styles.container}>
                <StackNavigator />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});