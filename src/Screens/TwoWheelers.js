import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Appbar, Avatar, Card, IconButton, FAB} from 'react-native-paper';

const TwoWheelers=({navigation})=> {
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  return (
    
    <View style={styles.container}>
      
      <View style={styles.appbar}>
        <Appbar.Header style={styles.appbarHeader}>
          <Appbar.BackAction onPress={()=>navigation.navigate('Product')}/>
          <Appbar.Content 
            title="Two Wheelers" 
            style={{fontSize: 10}}/>
        </Appbar.Header>
      </View>
      
      <ScrollView style={{flexDirection: 'column'}}>
        <View>
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/B1.jpeg')}/>
            <Text style={styles.insideText}>{'Model: Vintage \n\nColor: Wine \n\nSpeed: 50km/hr \n\nPrice: 50,000/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/B2.jpeg')}/>
            <Text style={styles.insideText}>{'Model: Vintage \n\nColor: Orange \n\nSpeed: 55km/hr \n\nPrice: 55,000/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}> 
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/B3.jpeg')}/>
            <Text style={styles.insideText}>{'Model: Mountain Duke \n\nColor: DarkGreen \n\nSpeed: 70km/hr \n\nPrice: 80,000/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/B4.jpeg')}/>
            <Text style={styles.insideText}>{'Model: Mountain Bike \n\nColor: Green \n\nSpeed: 70km/hr \n\nPrice: 1,00,000/- \n\nContact: 9988772277'}</Text>
          </View>

          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/B5.jpeg')}/>
            <Text style={styles.insideText}>{'Model: Honda R17 \n\nColor: Black \n\nSpeed: 250km/hr \n\nPrice: 5,00,000/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/B6.jpeg')}/>
            <Text style={styles.insideText}>{'Model: Kart \n\nColor: Black \n\nSpeed: 60km/hr \n\nPrice: 1,00,000/- \n\nContact: 9988772277'}</Text>
          </View>
        </View>
        
      </ScrollView>
      <FAB.Group
            
            open={open}
            visible
            icon={open ? 'home' : 'home'}
            actions={[
              {
                icon: 'arrow-down-box',
                label: 'Order Entry',
                onPress: () => navigation.navigate('Order'),
              },
              {
                icon: 'dropbox',
                label: 'Product Master',
                onPress: () => navigation.navigate('Master'),
              },
              {
                icon: 'account',
                label: 'Customer',
                onPress: () => navigation.navigate('Customer'),
              },
              {
                icon: 'home',
                label: 'Home',
                onPress: () => navigation.navigate('Home'),
              },
            ]}
            onStateChange={onStateChange}
            style={styles.fabstyle}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
    
    </View>
  );
};

const styles = StyleSheet.create({
  appbarHeader:{
    fontSize: 10,
    backgroundColor: 'skincolor',
  },

  container:{
    flex: 1,
    backgroundColor:"skincolor",
  },

  cardDesign: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 13,
    marginRight: 13,
    marginTop: 10,
    height: 265,
    elevation: 7,
    borderColor: 'white',
  },

  image: {
    height: 230,
    width: 170,
    borderRadius: 5,
    margin: 10,
    alignSelf: 'center',
  },

  insideText: {
    color: 'black',
    paddingLeft: 3,
    paddingTop: 50,
    paddingRight: 5,
    textAlign: 'justify',
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: '500',
  },
})

export default TwoWheelers;
