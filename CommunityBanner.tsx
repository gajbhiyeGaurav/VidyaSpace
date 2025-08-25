import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CommunityBanner: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => alert('Create New Community')}>
      <View style={styles.iconContainer}>
        <Ionicons name="people" size={28} color="#fff" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>New Community</Text>
        <Text style={styles.subtitle}>Organize group chats together</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CommunityBanner;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#f0f2f5',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#0e806a',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 15,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 13,
    color: 'gray',
  },
});
