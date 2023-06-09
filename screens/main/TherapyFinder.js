import React, { useState, useEffect } from 'react';
import { Image, ScrollView, View, StyleSheet, StatusBar, Linking, FlatList, Text,
  TouchableOpacity} from 'react-native'
import {Icon, NativeBaseProvider} from 'native-base';
import {AntDesign, Fontisto, Feather} from "@expo/vector-icons"
const themecolor = '#28407E'

const Face = ({icon, title, color, full}) => {
  return (
    <View style={styles.faceGroup}>
      {full ? (
        <View style={{backgroundColor: color, borderRadius: 40}}>
          <Icon name={icon} size={36} color={'#fff'} />
        </View>
      ) : (
        <Icon name={icon} size={36} color={color} />
      )}

      <Text style={[styles.faceText, {color}]}>{title}</Text>
    </View>
  );
};

const Rating = ({rating}) => {
  return (
    <View style={styles.rating}>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          if (rating > i) {
            return (
              <AntDesign name="star" color="#FA8D00" style={{marginRight: 5}} />
            );
          }
          return <AntDesign name="staro" style={{marginRight: 5}} />;
        })}
    </View>
  );
};

export const CardHome = ({title, info, noHeader, noFooter, book}) => {
  return (
    <View style={styles.cardContainer}>
      
      {!noHeader && (
        <View style={styles.cardHeaderContaner}>
          
        </View>
      )}
      <View style={styles.cardBody}>
        <View style={styles.cardBodyTop}>
          <Image
            style={styles.cardAvatar}
            source={{
              uri:
                'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
            }}
          />
          <View style={styles.cardLeftSide}>
            <Text style={styles.tag}>{info.tag}</Text>
            <Text style={styles.cardName}>{info.name}</Text>
            <Text style={styles.cardTime}>{info.time}</Text>
            <Text style={styles.cardAddress}>{info.address}</Text>
            <Text style={styles.cardAddress}>{info.detail}</Text>
            {info.rating && <Rating rating={info.rating} />}
          </View>
        </View>
        {!noFooter && <View style={styles.margin} />}

        {!noFooter && (
          <View style={styles.cardBodyBottom}>
            <TouchableOpacity style={styles.cardGroupIcon} onPress={()=>Linking.openURL('tel:'+`123-345-3421`)}>
              <Feather name="phone-call" size={24} style={{color: `${themecolor}`}}/>
              <Text style={styles.cardBottomTitle}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardGroupIcon} onPress={()=>Linking.openURL('sms:'+`123-345-3421`)}>
              <Fontisto name="email" size={24} style={{color: `${themecolor}`}}/>
              <Text style={styles.cardBottomTitle}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardGroupIcon}>
              <Fontisto name="email" size={24} style={{color: `${themecolor}`}}  onPress={() => Linking.openURL(`mailto:TDhar@gmail.com?subject=Skin Disease Diagnosis`) }/>
              <Text style={styles.cardBottomTitle}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardGroupIcon}>
              <AntDesign name="calendar" size={24} style={{color: `${themecolor}`}}/>
              <Text style={styles.cardBottomTitle}>Consult</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default TherapyFinder = () => {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <ScrollView>
      <View style={{paddingTop: 60}}>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Find A Nearby Therapist</Text>
        <Text style={styles.desc}>Searches within 25 mile radius</Text>
      </View>
        <CardHome
          title=""
          info={{
            name: 'Dr T Lo Dhar',
            time: 'Peak Therapy',
            address: 'Therapist',
            rating: 4,
            detail: 'Detroit, MI 90293',
          }}
        />
      </ScrollView>
    </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    marginTop: 5,
  },
  tag: {
    color: '#B066A4',
  },
  cardContainer: {
    padding: 15,
    paddingBottom: 0,
  },
  margin: {
    height: 1,
    backgroundColor: '#F0F1F2',
    width: '100%',
    marginVertical: 10,
  },
  cardBodyBottom: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardBottomTitle: {
    fontSize: 14,
    marginTop: 5,
    color:`${themecolor}`
  },
  cardGroupIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#6A63F6'
  },
  iconMore: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  iconLike: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cardBody: {
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardBodyTop: {
    flexDirection: 'row',
  },
  cardLeftSide: {
    paddingHorizontal: 10,
    flex: 1,
  },
  cardName: {
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardTime: {
    color: '#222',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },
  cardAddress: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 5,
  },
  cardAvatar: {
    height: 60,
    width: 60,
    backgroundColor: 'gray',
    borderRadius: 60,
  },
  cardHeaderContaner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardMore: {
    fontWeight: 'bold',
    color: '#7B6C95',
  },
  faceGroup: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceContainer: {
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 20,
  },
  faceText: {
    fontSize: 16,
    marginTop: 6,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerContainer: {
    paddingHorizontal: 30,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  desc: {
    fontSize: 20,
    fontWeight: '400',
    color: '#9D9A9A',
    marginTop: 20,
  },
  buttonBooks: {
    flexDirection: 'row',
    marginTop: 20,
  },
  btnGradient: {
    padding: 10,
    borderRadius: 40,
  },
  btnBookText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});