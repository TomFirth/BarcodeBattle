import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const BarcodeResultScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { barcode } = route.params as { barcode: string };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Scanned Barcode: {barcode}</Text>
      <Button title="Scan Again" onPress={() => navigation.navigate('BarcodeScanner')} />
    </View>
  );
};

export default BarcodeResultScreen;
