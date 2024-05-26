import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Appbar, Avatar, Card, IconButton, FAB } from 'react-native-paper';

const ProductMaster=({navigation})=> {
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  return (
    
    <View style={styles.container}>
      
      <View style={styles.appbar}>
        <Appbar.Header style={styles.appbarHeader}>
          <Appbar.BackAction onPress={()=>navigation.navigate('Product')}/>
          <Appbar.Content 
            title="Product Master" 
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

          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/C1.jpeg')}/>
            <Text style={styles.insideText}>{'Model: Vintage \n\nColor: Black & Red \n\nSpeed: 160 km/hr \n\nPrice: 5,00,000/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/C2.jpeg')}/>
            <Text style={styles.insideText}>{'Model: Mustang \n\nColor: Black \n\nSpeed: 170km/hr \n\nPrice: 5,50,000/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}> 
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/C3.jpeg')}/>
            <Text style={styles.insideText}>{'Model: Porsche \n\nColor: Yellow \n\nSpeed: 180 km/hr \n\nPrice: 7,00,000/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/C4.jpeg')}/>
            <Text style={styles.insideText}>{'Model: Mustang GT \n\nColor: Red & Black \n\nSpeed: 250km/hr \n\nPrice: 10,00,000/- \n\nContact: 9988772277'}</Text>
          </View>

          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/C5.jpeg')}/>
            <Text style={styles.insideText}>{'Model: Ferrari \n\nColor: Yellow \n\nSpeed: 210km/hr \n\nPrice: 12,00,000/- \n\nContact: 9988772277'}</Text>
          </View>

          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/E1.jpeg')}/>
            <Text style={styles.insideText}>{'Product: Pendrive 256GB  \n\nColor: Silver \n\nPrice: 1,499/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/E7.jpeg')}/>
            <Text style={styles.insideText}>{'Product: Apple Earpods  \n\nColor: White \n\nPrice: 5,999/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}> 
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/E8.jpeg')}/>
            <Text style={styles.insideText}>{'Product: Podcast Mic \n\nColor: Black \n\nPrice: 9,999/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/E9.jpeg')}/>
            <Text style={styles.insideText}>{'Product: USB Charger \n\nSize: 2 Meter \n\nPrice: 400/- \n\nContact: 9988772277'}</Text>
          </View>

          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/E5.jpeg')}/>
            <Text style={styles.insideText}>{'Product: Headphone \n\nColor: Red \n\nPrice: 9,999/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/E6.jpeg')}/>
            <Text style={styles.insideText}>{'Product: USB Chatger \n\nSize: 5 Meter \n\nPrice: 599/- \n\nContact: 9988772277'}</Text>
          </View>

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

          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/S6.jpeg')}/>
            <Text style={styles.insideText}>{'Product: Book Set of 6 \n\nBrand: Classmate \n\nPrice: 599/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/S5.jpeg')}/>
            <Text style={styles.insideText}>{'Product: Book Set of 6 \n\nBrand: Sundaram \n\nPrice: 699/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}> 
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/S3.jpeg')}/>
            <Text style={styles.insideText}>{'Product: Dairy + Pen \n\nBrand: Arteza \n\nPrice: 899/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/S7.jpeg')}/>
            <Text style={styles.insideText}>{'Product: Crayons \n\nBrand: Doms \n\nPrice: 300/- \n\nContact: 9988772277'}</Text>
          </View>

          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/S1.jpeg')}/>
            <Text style={styles.insideText}>{'Product: Stamp \n\nPrice: 100/- \n\nContact: 9988772277'}</Text>
          </View>
          
          <View style={styles.cardDesign}>
            <Image style={styles.image} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/S2.jpeg')}/>
            <Text style={styles.insideText}>{'Product: Eraser \n\nBrand: Staedtler \n\nPrice: 50/- \n\nContact: 9988772277'}</Text>
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

export default ProductMaster;
