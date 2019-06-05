import React from 'react';
import { 
	StyleSheet,
	View,
	Image,
} from 'react-native';



export default class Component41 extends React.Component {


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

                                <Image 
										source={require('../../img/screen1/img2km3mk3ayyjwjjcnr5.png')} 
										style={styles.item1}
									>
										
									</Image>

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
	    height: 'auto',
	    marginTop: 0,
	    zIndex: 0,
	    justifyContent: 'flex-start',
	    paddingLeft: 75,
	    paddingRight: 75,
	    paddingTop: 6,
	    paddingBottom: 6,
	},
	
	layouts: {
	    flexDirection: 'row',
	    flexWrap: 'wrap',
	},
	
	layout1: {
	    width: '100%',
	    height: 219,
	},
	
	itemcontainer1: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 0,
	    paddingRight: 0,
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
	    overflow: 'hidden',
	},
	
});