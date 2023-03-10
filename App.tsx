import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomerContext } from './utils/customersContext';
import CustomerCard from './components/CustomerCard';
import Constants from 'expo-constants';

export default function App() {
  const [customer, setCustomer] = useState({
    id: 12068100,
    name: 'Richard Hendricks',
    phoneNumber: '9995520584',
    joinedDate: 'Febraury 27th 2023',
    expireDate: 'March 1st 2028',
    pic: '../assets/profile.png',
    job: 'Pied Piper CEO',
    logo: '../assets/logo.png',
    email: 'richard@piedpiper.com'
  });

  return (
    <CustomerContext.Provider value={customer}>
      <View style={styles.container}>
        <CustomerCard />
      </View>
    </CustomerContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    paddingTop: Constants.statusBarHeight
  }
});
