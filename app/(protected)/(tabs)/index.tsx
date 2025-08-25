import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { stories } from '../../../assets/data/stories';
import { posts } from '../../../assets/data/posts';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Button from '../../../components/Button';

// Stories component
const Stories: React.FC = () => (
    <View style={styles.storiesContainer}>
        <FlatList
            data={stories}
            horizontal
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <View style={styles.story}>
                    <Image source={{ uri: item.avatar }} style={styles.storyAvatar} />
                    <Text style={styles.storyName}>{item.username}</Text>
                </View>
            )}
        />
    </View>
);

// Post component
type PostProps = {
    post: typeof posts[0];
};

const Post: React.FC<PostProps> = ({ post }) => (
    <View style={styles.postContainer}>
        <View style={styles.postHeader}>
            <Image source={{ uri: post.avatar }} style={styles.postAvatar} />
            <Text style={styles.postUsername}>{post.username}</Text>
            <View style={{ width: 155 }}></View>
            <Button title="Connect" onPress={() => alert('Clicked!')} />
        </View>
        <Image source={{ uri: post.image }} style={styles.postImage} />
        <View style={styles.postFooter}>   
            {/* FOOTER */}
            <View style={{ flexDirection: "row", paddingBottom: 10 }}>
                <View style={{ flexDirection: "row", gap: 10 }}>
                <View style={[{ flexDirection: "row" }, styles.iconBox]}>
                    <MaterialCommunityIcons
                        onPress={() => (console.log("upvote"))}
                        name={ "arrow-up-bold-outline"}
                        size={19}
                        color={ "black"}
                    />
                    <Text
                        style={{
                            fontWeight: "500",
                            marginLeft: 5,
                            alignSelf: "center",
                        }}
                    >
                        {post.username}
                    </Text>
                    <View
                        style={{
                            width: 1,
                            backgroundColor: "#D4D4D4",
                            height: 14,
                            marginHorizontal: 7,
                            alignSelf: "center",
                        }}
                    />
                    <MaterialCommunityIcons
                        onPress={() => console.log("downvote")}
                        name={  
                            "arrow-down-bold-outline"
                        }
                        size={19}
                        color={ "black"}
                    />
                </View>
                <View style={[{ flexDirection: "row" }, styles.iconBox]}>
                    <MaterialCommunityIcons
                        name="comment-outline"
                        size={19}
                        color="black"
                    />
                    <Text
                        style={{
                            fontWeight: "500",
                            marginLeft: 5,
                            alignSelf: "center",
                        }}
                    >
                        {post.id}
                    </Text>
                </View>
            </View>
            <View style={{ marginLeft: "auto", flexDirection: "row", gap: 10 }}>
                <MaterialCommunityIcons
                    name="trophy-outline"
                    size={19}
                    color="black"
                    style={styles.iconBox}
                />
                <MaterialCommunityIcons
                    name="share-outline"
                    size={19}
                    color="black"
                    style={styles.iconBox}
                />
            </View>
        </View>
        <Text style={styles.likes}>{post.likes} likes</Text>
            <Text style={styles.caption}><Text style={{ fontWeight: 'bold' }}>{post.username}</Text> {post.caption}</Text>
        </View>
    </View>
); 

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={item => item.id}
                ListHeaderComponent={<Stories />}
                renderItem={({ item }) => <Post post={item} />}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    storiesContainer: {
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: '#ddd',
    },
    story: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    storyAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#c13584',
    },
    storyName: {
        marginTop: 5,
        fontSize: 12,
        color: '#333',
    },
    postContainer: {
        marginVertical: 10,
        backgroundColor: '#fff',
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    postAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    postUsername: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
    postImage: {
        width: '100%',
        height: 400,
        backgroundColor: '#eee',
    },
    postFooter: {
        padding: 10,
    },
    likes: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    caption: {
        color: '#333',
    },
    iconBox: {
        borderWidth: 0.5,
        borderColor: "#D4D4D4",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
    },
});
