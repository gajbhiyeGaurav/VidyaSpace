import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Community } from '../assets/data/communities';

type Props = {
  community: Community;
  onPress: (community: Community) => void;
};

const CommunityItem: React.FC<Props> = ({ community, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(community)}>
      <Image source={{ uri: community.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{community.name}</Text>
        <Text style={styles.description}>{community.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CommunityItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    color: 'gray',
    marginTop: 2,
  },
});
