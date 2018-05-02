import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import {DrawerNavigator} from 'react-navigation';
import {Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem} from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import RecommendedCardItems from '../components/RecommendedCardItems';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:"#3a455c", height:90, borderBottomColor:"#757575"}}>
          <Left style={{flexDirection: 'row'}}>
            <Icon name="md-menu" onPress={()=>this.props.navigation.navigate('DrawerOpen')}
              style={{color: 'white', marginRight:15}} />
              <FAIcon name="amazon" style={{fontSize:32, color:'white'}} />
          </Left>
          <Right>
            <Icon name="md-cart" style={{ color:'white'}} />
          </Right>
          <View style={{position:'absolute', left:0, right:0, top:90, height:70, backgroundColor:"#3a455c",
          flexDirection:'row', alignItems:'center', paddingHorizontal:5 }}>
            <TouchableOpacity>
              <View style={{width:100, backgroundColor:"#e7e7eb", height:50, borderRadius:4, padding:10}}>
                <Text style={{fontSize:12}}> Shop by</Text>
                <Text style={{fontWeight:'bold'}}>Category</Text>
              </View>
            </TouchableOpacity>
            <View style={{flex:1, height:'100%', marginLeft:5, justifyContent:'center'}}>
              <Item style={{backgroundColor:'white', paddingHorizontal:10, borderRadius:4}}>
                <Icon name="search" style={{fontSize:20, paddingTop:5}} />
                <Input placeholder="search"/>
              </Item>
            </View>
          </View>
        </Header>
        <Content style={{backgroundColor: "#d5d5d6", marginTop:70}}>
          <View style={{height:50, backgroundColor:'white', flexDirection:'row', paddingHorizontal: 5,
                          alignItems:'center', justifyContent:'space-between'}}>
            <Text>
              Hello, Mridul
            </Text>
            <View style={{flexDirection:'row'}}>
              <Text>Your account</Text>
              <Icon name="arrow-forward" style={{fontSize:18}}/>
            </View>
          </View>
          <Swiper autoplay= {true} style={{height:100}}>
            <View style={{flex:1}}>
              <Image  style={{flex:1, height:null, width:null, resizeMode:'contain'}}
                source={require('../assets/img1.jpg')}/>
            </View>
            <View style={{flex:1}}>
              <Image style={{flex:1, height:null, width:null, resizeMode:'contain'}}
                source={require('../assets/img1.jpg')}/>
            </View>
            <View style={{flex:1}}>
              <Image style={{flex:1, height:null, width:null, resizeMode:'contain'}}
                source={require('../assets/img1.jpg')}/>
            </View>
          </Swiper>
          <Card style={{marginLeft:5, marginRight:5}}>
            <CardItem header>
              <Text>Your Recommendations</Text>
            </CardItem>

            <RecommendedCardItems
              itemName = "You can heal"
              itemCreator = "Louise hey"
              itemPrice = "$10"
              savings = "$2.5"
              ratings = {5}
            />
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
