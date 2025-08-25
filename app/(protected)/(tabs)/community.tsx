import React from 'react';
import { Text, View, FlatList, StyleSheet } from "react-native";
import CommunityBanner from '../../../components/CommunityBanner';
import CommunityItem from '../../../components/CommunityItem';
import { communities, Community } from '../../../assets/data/communities';

export default function Home() {
    const handlePress = (community: Community) => {
        alert(`Open ${community.name}`);
        // navigation.navigate('CommunityDetails', { id: community.id });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={communities}
                ListHeaderComponent={<CommunityBanner />}
                renderItem={({ item }) => (
                    <CommunityItem community={item} onPress={handlePress} />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});