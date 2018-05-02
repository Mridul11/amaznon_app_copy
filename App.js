import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import {DrawerNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import {Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem, ListItem} from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const CustomDrawerContentComponent = (props) =>{
  return(
    <Container>
      <Header style={{backgroundColor:"#3a455c", height:90}}>
      </Header>
      <Content>
        <FlatList
          style={{borderTopWidth:0.5, borderTopColor: '#f0f0f0'}}
          data ={[
            'Home', 'Shop By Category', 'Today\'s Deals'
          ]}
          renderItem={({item}) =>(
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />
        <FlatList
          style={{borderTopWidth:0.5, borderTopColor: '#f0f0f0'}}
          data ={[
            'Your Wish List', 'Your Account', 'Amazon Pay'
          ]}
          renderItem={({item}) =>(
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />
        <FlatList
          style={{borderTopWidth:0.5, borderTopColor: '#f0f0f0'}}
          data ={[
            'Prime', 'Sell On Amazon', 'Settings', 'Customer Service'
          ]}
          renderItem={({item}) =>(
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />
      </Content>
    </Container>
  )
}

const AppDrawerNavigator = new DrawerNavigator({
  HomeScreen : {screen : HomeScreen}
},{
  drawerPosition : 'left',
  contentComponent : CustomDrawerContentComponent,
  drawerOpenRoute : 'DrawerOpen',
  drawerCloseRoute : 'DrawerClose',
  drawerToggleRoute : 'DrawerToggle'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
