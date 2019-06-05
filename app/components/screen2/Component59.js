import React from 'react';
import { 
	StyleSheet,
	View,
	Text,
} from 'react-native';


import { FontAwesome } from '@expo/vector-icons';

export default class Component59 extends React.Component {


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
											name={"user"}
											size={50}
											color={"#fff"}
										/>
									</View>

                                <View style={styles.inneritem1}>
                                    <View style={styles.item2}>
											<Text 
												style={styles.item2Text}
												onPress={() => this.props.navigation.navigate('Screen3', {})}
											>
												 Alumnos
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
											name={"edit"}
											size={50}
											color={"#fff"}
										/>
									</View>

                                <View style={styles.inneritem2}>
                                    <View style={styles.item4}>
											<Text 
												style={styles.item4Text}
												onPress={() => this.props.navigation.navigate('Screen5', {})}
											>
												Secciones
											</Text>
										</View>
                                </View>

                			</View>

                		</View>

                	</View>
                	<View style={styles.layout3}>

                		<View style={styles.itemcontainer3}>

                			<View style={styles.itemcontainer3Inner}>

                                <View style={styles.item5}>
										<FontAwesome 
											name={"address-book-o"}
											size={50}
											color={"rgba(255,255,255,1)"}
										/>
									</View>

                                <View style={styles.inneritem3}>
                                    <View style={styles.item6}>
											<Text 
												style={styles.item6Text}
												onPress={() => this.props.navigation.navigate('Screen7', {})}
											>
												Usuarios
											</Text>
										</View>
                                </View>

                			</View>

                		</View>

                	</View>
                	<View style={styles.layout4}>

                		<View style={styles.itemcontainer4}>

                			<View style={styles.itemcontainer4Inner}>

                                <View style={styles.item7}>
										<FontAwesome 
											name={"book"}
											size={50}
											color={"#fff"}
										/>
									</View>

                                <View style={styles.inneritem4}>
                                    <View style={styles.item8}>
											<Text 
												style={styles.item8Text}
											>
												Cursos
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
	    height: 150,
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
	    backgroundColor: 'rgba(3,169,244,1)',
	},
	
	inneritem1: {
	    position: 'absolute',
	    zIndex: 1,
	    top: 84,
	    left: '0%',
	    width: '100%',
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
	    height: 150,
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
	    backgroundColor: 'rgba(76,175,80,1)',
	},
	
	inneritem2: {
	    position: 'absolute',
	    zIndex: 1,
	    top: 84,
	    left: '0%',
	    width: '93.3333%',
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
	    padding: 10,
	},
	
	item4Text: {
	    color: 'rgba(255,255,255,1)',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
	
	layout3: {
	    width: '50%',
	    height: 150,
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
	
	item5: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	    backgroundColor: 'rgba(120,74,200,1)',
	},
	
	inneritem3: {
	    position: 'absolute',
	    zIndex: 1,
	    top: 84.11329650878906,
	    left: '2.7777777777777777%',
	    width: '89.6296%',
	    height: 51,
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item6: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item6Text: {
	    color: 'rgba(255,255,255,1)',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
	
	layout4: {
	    width: '50%',
	    height: 150,
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
	
	item7: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	    backgroundColor: 'rgba(244,44,54,1)',
	},
	
	inneritem4: {
	    position: 'absolute',
	    zIndex: 1,
	    top: 84,
	    left: '0%',
	    width: '92.5926%',
	    height: 51,
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item8: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item8Text: {
	    color: 'rgba(255,255,255,1)',
	    fontSize: 14,
	    textAlign: 'center',
	    width: '100%',
	},
	
});