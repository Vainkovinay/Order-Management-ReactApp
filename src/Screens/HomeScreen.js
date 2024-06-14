import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, Alert, Button } from 'react-native';
import { Appbar, Avatar, Card, IconButton, Surface, FAB, Portal, PaperProvider} from 'react-native-paper';
import Icon from 'react-native-ico-material-design';

const HomeScreen=({navigation})=> {
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  const [modelvisible, setModalVisible] = React.useState(false);
  const handleShowAlert =()=>{
      setModalVisible(true);
    };
  const handleyes =()=>{
    navigation.navigate('Login');
    setModalVisible(false);
  }
  const handleno =()=>{
    navigation.navigate('Home')
    setModalVisible(false);
  };

  return (
    
    <View style={styles.container}>
      
      <View style={styles.appbar}>
        
        <Appbar.Header style={styles.appbarHeader}>
          
          <Appbar.BackAction onPress={handleShowAlert}/>
          
          <Appbar.Content 
            title="Order Management" 
            style={{fontSize: 10}}/>
          <Appbar.Action icon="account" onPress={()=>{}} />
        
        </Appbar.Header>
      
      </View>

      {modelvisible && (
          Alert.alert(
          'Confirmation',
          'Do you want to logout?',
          [
            { text: 'Yes', onPress: handleyes },
            { text: 'No', onPress: handleno },
          ],
          { cancelable: false }
        )
      )}
      
      <View style={styles.fistcontainer} elevation={4}>
        
        <Text style={styles.containerheading}>Master</Text>
        
        <View style={{flexDirection: 'row'}}>
          
          <View style={styles.insideview1} elevation={8}>
              
              <TouchableOpacity onPress={()=>navigation.navigate('Customer')}>
                
                <Image 
                  style={styles.personimage} 
                  source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/user.png')}
                ></Image>
                
                <Text style={styles.insidetext}>Customer</Text>
              
              </TouchableOpacity>
          
          </View>

          <View style={styles.insideview2} elevation={8}>
            
            <TouchableOpacity onPress={()=>navigation.navigate('Product')}>
            
            <Image style={styles.personimage} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/folder.png')}></Image>
            
            <Text style={styles.insidetext}>Product Category</Text>
            
            </TouchableOpacity>
          
          </View>

          <View style={styles.insideview2} elevation={8}>

            <TouchableOpacity onPress={()=>navigation.navigate('Master')}>
            
            <Image style={styles.personimage} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/cubes.png')}></Image>
            
            <Text style={styles.insidetext}>Product Master</Text>

            </TouchableOpacity>
          
          </View>

        </View>
      
      </View>

      <View style={styles.secondcontainer} elevation={4}>
        <Text style={styles.containerheading}>Transactions</Text>
        <View style={{flexDirection: 'row'}}>

          <View style={styles.insideview1} elevation={8}>
            <TouchableOpacity onPress={()=>navigation.navigate('Order')}>
              <Image style={styles.personimage} source={require('D:/VINAY SHRIMALI/OrderManagement-app/assets/down-arrow.png')}></Image>
              <Text style={styles.insidetext}>Order Entry</Text>           
            </TouchableOpacity>
          </View>
        
        </View>
      </View>
      <View style={{flex: 0.45}}>
        <PaperProvider style={styles.fabstyle}>
          <Portal>
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
          </Portal>
      </PaperProvider>
      </View>  
    </View>
      
  );
};

const styles = StyleSheet.create({
  appbarHeader:{
    fontSize: 10,
    backgroundColor: 'white'
  },

  container:{
    flex: 1,
    backgroundColor:"white",
  },

  fistcontainer:{
    flex: 0.27,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    margin: 15,
  },

  secondcontainer:{
    flex: 0.27,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    margin: 15,
  },

  insideview1: {
    
    flexDirection: "column",
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 15,
    height: 100,
    width: 85,
  },

  insideview2: {
    flexDirection: "column",
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 15,
    height: 100,
    width: 85,
  },

  containerheading: {
    textAlign: "center",
    alignContent: "center",
    fontWeight: "bold",
    fontSize: 20,
  }, 

  personimage:{
    height: 40,
    width: 40,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  
  insidetext:{
    alignSelf: 'center',
    fontSize: 15,
  },
  fabstyle: {
    marginTop: 10,
    alignItems: 'flex-end'
  },
})

export default HomeScreen;
