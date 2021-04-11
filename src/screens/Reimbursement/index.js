import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import Arrowleft from 'react-native-vector-icons/AntDesign';
import Edit from 'react-native-vector-icons/Entypo';
import Calendar from 'react-native-vector-icons/Entypo';
import CalendarCheck from 'react-native-vector-icons/FontAwesome';
import Food from 'react-native-vector-icons/FontAwesome';
import Dollar from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

export default function Reimbursement({route}) {
  const {goBack} = useNavigation();

  const spending = route.params.spending;

  function backToSpending() {
    goBack();
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <RectButton onPress={backToSpending}>
            <Arrowleft name="arrowleft" size={28} color="#000" />
          </RectButton>
          <Edit name="edit" size={28} color="#000" />
        </View>

        <View style={styles.valueView}>
          <Text style={styles.value}>R$ {spending.valor}</Text>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.dateContainer}>
            <Calendar name="calendar" size={28} color="#566475" />
            <Text style={styles.date}>{spending.data}</Text>
          </View>

          <View style={styles.NameContainer}>
            <Text style={styles.name}>{spending.nome}</Text>
            <View style={styles.boxType}>
              <Food name="cutlery" size={20} color="#9DADB8" />
              <Text style={styles.type}>{spending.tipo}</Text>
            </View>
          </View>

          <View style={styles.reimbursementBox}>
            {spending.reembolso && (
              <>
                <Dollar name="dollar" size={20} color="#09D261" />
                <Text style={styles.reimbursement}>Reembolsavel</Text>
              </>
            )}
          </View>

          <View style={styles.infoBox}>
            <CalendarCheck name="calendar-check-o" size={28} color="#566475" />
            <View style={{marginLeft: 10}}>
              <Text style={styles.textCompany}>
                Contele Filial de Santos - SP
              </Text>
              <Text>
                {spending.data} - {spending.hora}
              </Text>
            </View>
          </View>

          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://uploaddeimagens.com.br/images/003/190/870/full/Rectangle_5.1.png',
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
}
