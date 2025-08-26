import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { User } from '../assets/data/users';

type Props = {
  user: User;
  onPress: (user: User) => void;
};

const UserItem: React.FC<Props> = ({ user, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(user)}>
      <Avatar rounded source={{ uri: user.avatarUrl }} size="medium" />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.status}>{user.status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    borderBottomColor: '#e2dfdfff',
    borderBottomWidth: 2,
    backgroundColor: '#f0f2f5',
  },
  textContainer: {
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  status: {
    color: 'gray',
    marginTop: 2,
  },
});
