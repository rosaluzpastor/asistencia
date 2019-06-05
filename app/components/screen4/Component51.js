import React from 'react';
import { 
	StyleSheet,
	View,
	Text,
	TouchableWithoutFeedback,
} from 'react-native';


import { FontAwesome } from '@expo/vector-icons';

export default class Component51 extends React.Component {


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
										<TouchableWithoutFeedback 
										>
											<View>
												<Text style={styles.item1TouchableWithoutFeedback}>
													...cargar foto
												</Text>
											</View>
									
										</TouchableWithoutFeedback>
									</View>

                                <View style={styles.inneritem1}>
                                    <View style={styles.item2}>
											<FontAwesome 
												name={"folder-open-o"}
												size={15}
												color={"#292929"}
											/>
										</View>
                                </View>

                			</View>

                		</View>

                	</View>
                	<View style={styles.layout2}>

                		<View style={styles.itemcontainer2}>

                			<View style={styles.itemcontainer2Inner}>

                                <View style={styles.item3}>
										<FontAwesome 
											name={"picture-o"}
											size={28}
											color={"#292929"}
										/>
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
	    width: '66.66666666666666%',
	    height: 85.5,
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
	    backgroundColor: 'rgba(170,170,170,1)',
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
	    color: 'rgba(24,24,24,1)',
	    fontSize: 12,
	    textAlign: 'center',
	    width: '100%',
	},
	
	inneritem1: {
	    position: 'absolute',
	    zIndex: 1,
	    top: 15,
	    left: '4.999969290487422%',
	    width: '20%',
	    height: 51,
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item2: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	},
	
	layout2: {
	    width: '33.33333333333333%',
	    height: 85.5,
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
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	    borderStyle: 'solid',
	    borderWidth: 1,
	    backgroundColor: 'rgba(187,187,187,1)',
	},
	
});