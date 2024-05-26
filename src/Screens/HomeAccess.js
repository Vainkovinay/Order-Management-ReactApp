import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Appbar, Avatar, Card, IconButton,FAB } from 'react-native-paper';

const HomeAcces=({navigation})=> {
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  return (
    <View style={styles.container}>
      
      <View style={styles.appbar}>
        <Appbar.Header style={styles.appbarHeader}>
          <Appbar.BackAction onPress={()=>navigation.navigate('Product')}/>
          <Appbar.Content 
            title="Home Accessories" 
            style={{fontSize: 10}}/>
        </Appbar.Header>
      </View>
      
      <ScrollView style={{flexDirection: 'column'}}>
        <View>
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/HA1.jpeg')}/>
            <Text style={styles.insideText}>{'Material: Flower Vase \n\nColor: Gold \n\nType: Copper \n\nPrice: 5,000/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/ha2.jpeg')}/>
            <Text style={styles.insideText}>{'Material: Clock \n\nColor: Gold \n\nPrice: 1,599/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}> 
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/HA3.jpeg')}/>
            <Text style={styles.insideText}>{'Material: Artificial Plants \n\nCount: 3 different Plants \n\nPrice: 899/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/HA4.jpeg')}/>
            <Text style={styles.insideText}>{'Material: Mirror \n\nSize: 2ft \n\nPrice: 10,000/- \n\nContact: 9988772277'}</Text>
          </View>

          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/HA5.jpeg')}/>
            <Text style={styles.insideText}>{'Material: Circular Mirror \n\nSize: 1.2ft \n\nPrice: 9,999/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/HA6.jpeg')}/>
            <Text style={styles.insideText}>{'Material: Carpet \n\nColor: Cream \n\nSize: 10M (Meter) \n\nPrice: 999/- \n\nContact: 9988772277'}</Text>
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
    height: 240,
    elevation: 7,
    borderColor: 'white',
  },

  image: {
    height: 200,
    width: 150,
    borderRadius: 5,
    margin: 10,
    alignSelf: 'center',
  },

  insideText: {
    color: 'black',
    paddingLeft: 3,
    paddingTop: 35,
    paddingRight: 13,
    textAlign: 'justify',
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: '500',
  },
})

export default HomeAcces;
