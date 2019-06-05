import React from 'react';
import { 
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableWithoutFeedback,
} from 'react-native';


import { FontAwesome } from '@expo/vector-icons';

export default class Component140 extends React.Component {

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

                	<View style={styles.layout9}>

                		<View style={styles.itemcontainer9}>

                			<View style={styles.itemcontainer9Inner}>

                                <View style={styles.item1}>
										<TouchableWithoutFeedback 
											onPress={() => this.props.navigation.navigate('Screen16', {})}
										>
											<View>
												<Text style={styles.item1TouchableWithoutFeedback}>
													Crear nuevo curso
												</Text>
											</View>
									
										</TouchableWithoutFeedback>
									</View>

                			</View>

                		</View>

                	</View>
                	<View style={styles.layout1}>

                		<View style={styles.itemcontainer1}>

                			<View style={styles.itemcontainer1Inner}>

                                <View style={styles.item2}>
										<Text 
											style={styles.item2Text}
										>
											Seleccione grado:
										</Text>
									</View>

                			</View>

                		</View>

                	</View>
                	<View style={styles.layout2}>

                		<View style={styles.itemcontainer2}>

                			<View style={styles.itemcontainer2Inner}>

                                <View style={styles.item3}>
										<TextInput 
											style={styles.item3TextInput}
											placeholder={"Seleccione"}
											underlineColorAndroid={"transparent"}
											placeholderTextColor={"#AFAFAF"}
											onChangeText={(val) => this.setState({ state_ID__textInputValue: val })}
											value={this.state.state_ID__textInputValue}
										/>
									</View>

                                <View style={styles.inneritem1}>
                                    <View style={styles.item4}>
											<FontAwesome 
												name={"caret-down"}
												size={20}
												color={"rgba(72,72,72,1)"}
											/>
										</View>
                                </View>

                			</View>

                		</View>

                	</View>
                	<View style={styles.layout4}>

                		<View style={styles.itemcontainer4}>

                			<View style={styles.itemcontainer4Inner}>

                                <View style={styles.item5}>
										<Text 
											style={styles.item5Text}
										>
											Seleccione curso:
										</Text>
									</View>

                			</View>

                		</View>

                	</View>
                	<View style={styles.layout5}>

                		<View style={styles.itemcontainer5}>

                			<View style={styles.itemcontainer5Inner}>

                                <View style={styles.item6}>
										<TextInput 
											style={styles.item6TextInput}
											placeholder={"Seleccione"}
											underlineColorAndroid={"transparent"}
											placeholderTextColor={"#AFAFAF"}
											onChangeText={(val) => this.setState({ state_ID__textInputValue: val })}
											value={this.state.state_ID__textInputValue}
										/>
									</View>

                                <View style={styles.inneritem2}>
                                    <View style={styles.item7}>
											<FontAwesome 
												name={"caret-down"}
												size={20}
												color={"rgba(48,48,48,1)"}
											/>
										</View>
                                </View>

                			</View>

                		</View>

                	</View>
                	<View style={styles.layout6}>

                		<View style={styles.itemcontainer6}>

                			<View style={styles.itemcontainer6Inner}>

                                <View style={styles.item8}>
										<TouchableWithoutFeedback 
										>
											<View>
												<Text style={styles.item8TouchableWithoutFeedback}>
													Ir
												</Text>
											</View>
									
										</TouchableWithoutFeedback>
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
	
	layout9: {
	    width: '100%',
	    height: 90,
	},
	
	itemcontainer9: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer9Inner: {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item1: {
	    backgroundColor: 'rgba(244,67,54,1)',
	    borderWidth: 0,
	    borderColor: '#eee',
	    borderStyle: 'solid',
	    borderRadius: 4,
	    width: '100%',
	    height: '100%',
	    justifyContent: 'center',
	    alignItems: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item1TouchableWithoutFeedback: {
	    color: '#fff',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
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
	
	item2: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item2Text: {
	    color: '#181818',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
	
	layout2: {
	    width: '100%',
	    height: 63,
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
	
	item3: {
	    width: '100%',
	    height: '100%',
	    justifyContent: 'center',
	    padding: 10,
	    overflow: 'hidden',
	    backgroundColor: 'rgba(255,255,255,1)',
	},
	
	item3TextInput: {
	    color: '#181818',
	    fontSize: 14,
	    textAlign: 'left',
	    width: '100%',
	},
	
	inneritem1: {
	    position: 'absolute',
	    zIndex: 1,
	    top: 1.5,
	    left: '81.36200716845879%',
	    width: '20%',
	    height: 51,
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item4: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	},
	
	layout4: {
	    width: '100%',
	    height: 61.5,
	},
	
	itemcontainer4: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer4Inner: {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item5: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item5Text: {
	    color: '#181818',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
	
	layout5: {
	    width: '100%',
	    height: 60,
	},
	
	itemcontainer5: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer5Inner: {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item6: {
	    width: '100%',
	    height: '100%',
	    justifyContent: 'center',
	    padding: 10,
	    overflow: 'hidden',
	    backgroundColor: 'rgba(255,255,255,1)',
	},
	
	item6TextInput: {
	    color: '#181818',
	    fontSize: 14,
	    textAlign: 'left',
	    width: '100%',
	},
	
	inneritem2: {
	    position: 'absolute',
	    zIndex: 1,
	    top: 0,
	    left: '81.36200716845879%',
	    width: '20.0772%',
	    height: 51,
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item7: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	},
	
	layout6: {
	    width: '100%',
	    height: 90,
	},
	
	itemcontainer6: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer6Inner: {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item8: {
	    backgroundColor: '#1194f6',
	    borderWidth: 0,
	    borderColor: '#eee',
	    borderStyle: 'solid',
	    borderRadius: 4,
	    width: '100%',
	    height: '100%',
	    justifyContent: 'center',
	    alignItems: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item8TouchableWithoutFeedback: {
	    color: '#fff',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
	
});