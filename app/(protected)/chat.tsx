import { View, Text, ScrollView, FlatList, StyleSheet } from "react-native";
import React, { useState } from 'react';
import UserItem from '../../../components/UserItem';
import { users, User } from '../../../assets/data/users';
import SearchBar from '../../../components/SearchBar';

export default function Chat() {
    const [searchText, setSearchText] = React.useState('');
    
    return (
        <View style={styles.container}>
            <SearchBar
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Type to search..."
                onSubmitEditing={() => console.log('Search for:',searchText)}
            />
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <UserItem
                        user={item}
                        onPress={(user) => console.log('User pressed:', user)}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
