import React from 'react';
import { StyleSheet, Text,Image ,View } from 'react-native';

import {Card, CardItem, Right} from 'native-base';
import StarRating from 'react-native-star-rating';

export default class RecommendedCardItems extends React.Component {
  render() {
    return (
    <View>
      <CardItem>
        <View>
          <Image style={{height:90, width:60}}
          source={require('../assets/img1.jpg')}/>
        </View>
        <Right>
          <Text>{this.props.itemName}</Text>
          <Text style={{ color:'grey', fontSize: 11}}>{this.props.itemCreator}</Text>
          <Text style={{fontSize:14, fontWeight:'bold'}}>{this.props.itemPrice}</Text>
          <Text style={{color:'grey', fontWeight:'300', fontSize:11}}> You saved
            <Text style={{fontSize:14, fontWeight:'bold'}}>{this.props.savings}</Text>
          </Text>
          <StarRating
            disabled = {true}
            maxStars = {5}
            rating = {this.props.ratings}
            starSize = {12}
            fullStarColor = 'orange'
            empty = 'orange'
          />
        </Right>
      </CardItem>

      <CardItem>
        <View>
          <Image style={{height:90, width:60}}
          source={require('../assets/img1.jpg')}/>
        </View>
        <Right>
          <Text>{this.props.itemName}</Text>
          <Text style={{ color:'grey', fontSize: 11}}>{this.props.itemCreator}</Text>
          <Text style={{fontSize:14, fontWeight:'bold'}}>{this.props.itemPrice}</Text>
          <Text style={{color:'grey', fontWeight:'300', fontSize:11}}> You saved
            <Text style={{fontSize:14, fontWeight:'bold'}}>{this.props.savings}</Text>
          </Text>
          <StarRating
            disabled = {true}
            maxStars = {5}
            rating = {this.props.ratings}
            starSize = {12}
            fullStarColor = 'orange'
            empty = 'orange'
          />
        </Right>
      </CardItem>

      <CardItem>
        <View>
          <Image style={{height:90, width:60}}
          source={require('../assets/img1.jpg')}/>
        </View>
        <Right>
          <Text>{this.props.itemName}</Text>
          <Text style={{ color:'grey', fontSize: 11}}>{this.props.itemCreator}</Text>
          <Text style={{fontSize:14, fontWeight:'bold'}}>{this.props.itemPrice}</Text>
          <Text style={{color:'grey', fontWeight:'300', fontSize:11}}> You saved
            <Text style={{fontSize:14, fontWeight:'bold'}}>{this.props.savings}</Text>
          </Text>
          <StarRating
            disabled = {true}
            maxStars = {5}
            rating = {this.props.ratings}
            starSize = {12}
            fullStarColor = 'orange'
            empty = 'orange'
          />
        </Right>
      </CardItem>
    </View>
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
