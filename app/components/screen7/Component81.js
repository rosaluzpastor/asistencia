import React from 'react';
import { 
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableWithoutFeedback,
} from 'react-native';



export default class Component81 extends React.Component {

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
											ID:
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
											placeholder={""}
											underlineColorAndroid={"transparent"}
											placeholderTextColor={"#AFAFAF"}
											onChangeText={(val) => this.setState({ state_ID__textInputValue: val })}
											value={this.state.state_ID__textInputValue}
										/>
									</View>

                			</View>

                		</View>

                	</View>
                	<View style={styles.layout3}>

                		<View style={styles.itemcontainer3}>

                			<View style={styles.itemcontainer3Inner}>

                                <View style={styles.item3}>
										<TouchableWithoutFeedback 
										>
											<View>
												<Text style={styles.item3TouchableWithoutFeedback}>
													Buscar
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
	
	layout1: {
	    width: '41.66666666666667%',
	    height: 60,
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
	    textAlign: 'center',
	    width: '100%',
	},
	
	layout2: {
	    width: '58.333333333333336%',
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
	
	layout3: {
	    width: '100%',
	    height: 90,
	},
	
	itemcontainer3: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer3Inner: {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item3: {
	    backgroundColor: 'rgba(159,159,159,1)',
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
	
	item3TouchableWithoutFeedback: {
	    color: '#fff',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
	
});