import { Redirect, Stack, router } from 'expo-router';
import { View } from 'react-native';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';

export default function AppLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    )
}