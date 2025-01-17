import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useRouter, useSegments } from 'expo-router';

const Logout = () => {
    const { authState, onLogout } = useAuth();
    const router = useRouter();
    const segments = useSegments();

    useEffect(() => {
        const isProtected = segments[0] === '(protected)';

        // If the user is unauthenticated and is on a protected route, redirect to login
        if (!authState?.authenticated && isProtected) {
            // router.replace('/'); // Redirect to login
        } else if (authState?.authenticated && !isProtected) {
            router.replace('/(protected)'); // Redirect to protected area
        }
    }, [authState, segments, router]);

    const onLogoutPressed = () => {
        onLogout(); // Perform logout action
        // router.replace('/'); // Redirect to login after logout
    };

    return (
        <View style={styles.container}>
            <Button title="Logout" onPress={onLogoutPressed} />
            <View style={styles.separator} />
        </View>
    );
};

export default Logout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%', // Ensures full width
    },
    separator: {
        height: 1,
        marginVertical: 30,
        width: '80%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    tabContainer: {
        // width: '100%', // Ensures full width
    },
});
