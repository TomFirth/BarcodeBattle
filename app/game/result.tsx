import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const GameResultScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { result } = route.params as { result: true | false };

  return (
    <View style={styles.container}>
      {result ? (
        <Text style={styles.winText}>You Won!</Text>
      ) : (
        <Text style={styles.loseText}>You Lose!</Text>
      )}

      <Button title="Play Again" onPress={() => navigation.navigate('GameFind')} />
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default GameResultScreen;