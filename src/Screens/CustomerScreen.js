import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import * as React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Appbar, Avatar, Card, IconButton, ActivityIndicator, FAB, PaperProvider, Portal } from 'react-native-paper';

const CustomerScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const userColors = ['darkred', 'blue','pink','skyblue' ,'purple','green', 'lightgreen'];
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;

  const customer = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    customer();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Appbar.Header style={styles.appbarHeader}>
          <Appbar.BackAction onPress={() => navigation.navigate('Home')}/>
          <Appbar.Content 
            title="Customer" 
            style={{fontSize: 10}}
          />
        </Appbar.Header>
      </View>

      <View style={styles.Api}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item) => (
              <View>
                <Card.Title
                  style={styles.cardDesign}
                  title={<Text style={{fontWeight:'bold'}}>{item.item.name}</Text>}
                  subtitle={`Username: ${item.item.username}\nEmail: ${item.item.email}\nCity: ${item.item.address.city}`}
                  subtitleNumberOfLines={5}
                  left={(props) => <Avatar.Icon {...props} icon="account" style={{ backgroundColor: userColors[item.index % userColors.length] }}/>}
                  right={(props) => <IconButton {...props} icon="arrow-right" onPress={() => {}} />}
                />
              </View>
            )}
          />
        )}

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
        
    </View>
  );
};

const styles = StyleSheet.create({
  appbarHeader: {
    fontSize: 10,
    backgroundColor: 'skincolor'
  },
  container: {
    flex: 1,
    backgroundColor: "skincolor",
    position: 'relative',
  },
  cardDesign: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 13,
    marginRight: 13,
    marginTop: 10,
    height: 120,
    elevation: 7,
    borderColor: 'white',
  },
  Api: {
    flex: 1,
    marginTop: 8,
  },
  item: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 13,
    marginVertical: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabstyle: {
  },
});

export default CustomerScreen;
