import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import AvatarButton from '../../../components/AvatarButton';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title: 'Home', 
                    headerTitle: 'Home',
                    headerTintColor: 'blue',
                    tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />
                }}
            />
            <Tabs.Screen 
                name="chat"
                options={{
                    title: 'Chat',
                    headerTitle: "Chat",
                    headerTintColor: 'black',
                    headerRight: () => (
                        <AvatarButton 
                            username="Jane Doe" 
                            avatarUrl="https://randomuser.me/api/portraits/men/1.jpg" 
                            onPress={() => alert('Avatar pressed!')} 
                        />
                    ),
                    tabBarIcon: ({ color }) => <Ionicons name="chatbubbles-outline" size={24} color={color} />
                }}
            />
            <Tabs.Screen 
                name="community"
                options={{
                    title: 'Community',
                    headerTitle: "Community",
                    headerTintColor: 'black',
                    tabBarIcon: ({ color }) => <AntDesign name="contacts" size={24} color={color} />
                }}
            />
            <Tabs.Screen 
                name="inbox"
                options={{
                    title: 'Inbox',
                    headerTitle: "Inbox",
                    headerTintColor: 'blue',
                    tabBarIcon: ({ color }) => <AntDesign name="inbox" size={24} color={color} />
                }}
            />
        </Tabs>
    )
}