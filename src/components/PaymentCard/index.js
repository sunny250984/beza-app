import React from 'react';
import {withNavigation} from 'react-navigation';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {STYLES} from '@/themes';
import styles from './styles';

const PaymentCard = ({period, price, startAt, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Thanks')}
      style={styles.container}>
      <View
        style={[
          STYLES.FlexRow,
          STYLES.JustifyBetween,
          STYLES.ItemsCenter,
          {marginBottom: 36},
        ]}>
        <Text style={styles.periodTxt}>{period} Month</Text>
        <Image source={require('../../assets/images/icons/income.png')} />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceLabelTxt}>Price: </Text>
        <Text style={styles.priceValueTxt}>{price}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateLabelTxt}>Starting from </Text>
        <Text style={styles.dateValueTxt}>{startAt}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(PaymentCard);
