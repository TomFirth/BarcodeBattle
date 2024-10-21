import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GameFind')}>
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BarcodeScanner')}>
        <Text style={styles.buttonText}>Scan</Text>
      </TouchableOpacity>

      <View style={styles.space} />

      <TouchableOpacity style={styles.statsButton} onPress={() => navigation.navigate('Stats')}>
        <Text style={styles.statsButtonText}>Stats</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;