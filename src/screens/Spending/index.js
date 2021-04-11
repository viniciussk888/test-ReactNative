import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from './styles';
import Search from 'react-native-vector-icons/AntDesign';
import Food from 'react-native-vector-icons/FontAwesome';
import Dollar from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import data from '../../utils/data.json';

export default function Spending() {
  const [total, setTotal] = useState(0);
  const {navigate} = useNavigation();
  function navigateToReimbursement(spending) {
    navigate('Reimbursement', {
      spending: spending,
    });
  }

  useEffect(() => {
    let sum = 0;
    data.data.forEach(item => {
      sum = item.valor + sum;
    });
    setTotal(sum);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleMonthe}>Setembro</Text>
          <Search name="search1" size={26} color="#000" />
        </View>

        <ScrollView>
          {data.data.map(item => (
            <>
              <Text style={styles.weekDayTitle}>{item.dia}</Text>

              <TouchableOpacity
                onPress={() => navigateToReimbursement(item)}
                key={item.id}>
                <View style={styles.spendingContainer}>
                  <View>
                    <Text style={styles.spendingTitle}>{item.nome}</Text>

                    <View style={styles.box}>
                      <Food name="cutlery" size={20} color="#9DADB8" />
                      <Text style={styles.spendingType}>{item.tipo}</Text>
                    </View>
                  </View>
                  <View style={styles.box}>
                    {item.reembolso && (
                      <Dollar name="dollar" size={20} color="#09D261" />
                    )}
                    <Text style={styles.spendingValue}>{item.valor}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </>
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.footerTotal}>TOTAL</Text>
          <Text style={styles.footerValue}>
            R$ {parseFloat(total).toFixed(2)}
          </Text>
        </View>
      </View>
    </>
  );
}
