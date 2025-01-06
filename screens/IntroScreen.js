import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IntroScreen = ({ navigation }) => {
  useEffect(() => {
    // Chuyển sang trang Home sau 10 giây
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 10000);

    return () => clearTimeout(timer); // Dọn dẹp timer khi component bị unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Xin chào! Tôi là Trần Đỗ Gia Huy.</Text>
      <Text style={styles.subText}>Đây là ứng dụng React Native đầu tiên của tôi.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subText: {
    fontSize: 18,
    marginTop: 10,
    color: '#555',
  },
});

export default IntroScreen;