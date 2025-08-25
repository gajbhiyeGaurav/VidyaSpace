import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

type AvatarButtonProps = {
  username: string;
  avatarUrl?: string;
  onPress?: () => void;
};

const AvatarButton: React.FC<AvatarButtonProps> = ({
  username,
  avatarUrl,
  onPress,
}) => {
  // Generate initials if avatarUrl is not provided
  const getInitials = (name: string) => {
    const names = name.split(' ');
    let initials = names[0][0];
    if (names.length > 1) {
      initials += names[names.length - 1][0];
    }
    return initials.toUpperCase();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.avatarWrapper}>
        {avatarUrl ? (
          <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.initials}>{getInitials(username)}</Text>
          </View>
        )}
      </View>
      <Text style={styles.username}>{username}</Text>
    </TouchableOpacity>
  );
};

const AVATAR_SIZE = 40;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
    backgroundColor: '#e3e2e2ff',
    borderRadius: 30,
    elevation: 2,
    marginRight: 15
  },
  avatarWrapper: {
    marginRight: 8,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
  },
  avatarPlaceholder: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    color: '#555',
    fontSize: 18,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    paddingRight: 10,
  },
});

export default AvatarButton;
