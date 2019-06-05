import React from 'react';
import { 
	StyleSheet,
	View,
	Text,
} from 'react-native';


import { FontAwesome } from '@expo/vector-icons';

export default class Component145 extends React.Component {


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
										<FontAwesome 
											name={"check-square-o"}
											size={43}
											color={"#fff"}
										/>
									</View>

                                <View style={styles.inneritem1}>
                                    <View style={styles.item2}>
											<Text 
												style={styles.item2Text}
												onPress={() => this.props.navigation.navigate('Screen10', {})}
											>
												Registrar Asistencia
											</Text>
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
											name={"file-text-o"}
											size={36}
											color={"#fff"}
										/>
									</View>

                                <View style={styles.inneritem2}>
                                    <View style={styles.item4}>
											<Text 
												style={styles.item4Text}
											>
												Consultar Asistencia
											</Text>
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
	    width: '50%',
	    height: 192,
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
	    backgroundColor: 'rgba(255, 193, 7, 1)',
	},
	
	inneritem1: {
	    position: 'absolute',
	    zIndex: 1,
	    top: 106.5,
	    left: '1.2962962962962963%',
	    width: '96.2963%',
	    height: 70.5,
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
	    color: 'rgba(255,255,255,1)',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
	
	layout2: {
	    width: '50%',
	    height: 196.5,
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
	    backgroundColor: 'rgba(3, 169, 244, 1)',
	},
	
	inneritem2: {
	    position: 'absolute',
	    zIndex: 1,
	    top: 108,
	    left: '1.4814814814814816%',
	    width: '96.2963%',
	    height: 73.5,
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item4: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item4Text: {
	    color: 'rgba(255,255,255,1)',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
	
});