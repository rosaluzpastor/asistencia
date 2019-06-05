import React from 'react';
import { 
	StyleSheet,
	View,
	Text,
	TextInput,
} from 'react-native';


import { FontAwesome } from '@expo/vector-icons';

export default class Component95 extends React.Component {

    constructor(props) {
    
        super(props);

        this.state = {
            state_ID__textInputValue: "",
        }

    }


    render() {

        if (!this.props.visible) {
            return false;
        }
        

        return (

            <View 
                style={styles.component}
            >

                <View style={styles.layouts}>

                	<View style={styles.layout1}>

                		<View style={styles.itemcontainer1}>

                			<View style={styles.itemcontainer1Inner}>

                                <View style={styles.item1}>
										<Text 
											style={styles.item1Text}
										>
											Cargo:
										</Text>
									</View>

                			</View>

                		</View>

                	</View>
                	<View style={styles.layout2}>

                		<View style={styles.itemcontainer2}>

                			<View style={styles.itemcontainer2Inner}>

                                <View style={styles.item2}>
										<TextInput 
											style={styles.item2TextInput}
											placeholder={"Seleccione"}
											underlineColorAndroid={"transparent"}
											placeholderTextColor={"#AFAFAF"}
											onChangeText={(val) => this.setState({ state_ID__textInputValue: val })}
											value={this.state.state_ID__textInputValue}
										/>
									</View>

                                <View style={styles.inneritem1}>
                                    <View style={styles.item3}>
											<FontAwesome 
												name={"caret-down"}
												size={20}
												color={"#292929"}
											/>
										</View>
                                </View>

                			</View>

                		</View>

                	</View>
                	
                </View>

            </View>
            
        );

    }

}

const styles = StyleSheet.create({
    
	component: {
	    width: '100%',
	    flexDirection: 'row',
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	},
	
	layouts: {
	    flexDirection: 'row',
	    flexWrap: 'wrap',
	},
	
	layout1: {
	    width: '100%',
	    height: 75,
	},
	
	itemcontainer1: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer1Inner: {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item1: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item1Text: {
	    color: '#181818',
	    fontSize: 14,
	    textAlign: 'left',
	    width: '100%',
	},
	
	layout2: {
	    width: '100%',
	    height: 60,
	},
	
	itemcontainer2: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer2Inner: {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item2: {
	    width: '100%',
	    height: '100%',
	    justifyContent: 'center',
	    padding: 10,
	    overflow: 'hidden',
	    backgroundColor: 'rgba(255,255,255,1)',
	},
	
	item2TextInput: {
	    color: '#181818',
	    fontSize: 14,
	    textAlign: 'left',
	    width: '100%',
	},
	
	inneritem1: {
	    position: 'absolute',
	    zIndex: 1,
	    top: 0,
	    left: '81.15942028985508%',
	    width: '19.9219%',
	    height: 51,
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item3: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	},
	
});