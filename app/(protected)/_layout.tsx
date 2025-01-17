import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAuth } from '../context/AuthContext';
const DrawerLayout = () => {
	const { authState, onLogout } = useAuth();
	const onLogoutPressed = () => {
		onLogout!();
	};

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer>
				<Drawer.Screen
					name="index"
					options={{

						headerTitle: 'Home',
						drawerLabel: 'Home',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="home-outline" size={size} color={color} />
						)
					}}
					redirect={authState?.authenticated === null}
				/>

				<Drawer.Screen
					name="news"
					options={{
						headerTitle: 'Newsfeed',
						drawerLabel: 'News',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="newspaper-outline" size={size} color={color} />
						)
					}}
					redirect={authState?.authenticated === null}
				/>
				<Drawer.Screen
					name="donate"
					options={{
						title: 'Donate',
						drawerItemStyle: { display: 'none' },
					}}
				/>
				<Drawer.Screen
					name="admin"
					options={{
						headerTitle: 'Admin Area',
						drawerLabel: 'Admin',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="cog-outline" size={size} color={color} />
						)
					}}

					redirect={authState?.authenticated === null}
				/>




				<Drawer.Screen
					name="logout"
					options={{
						headerTitle: 'Logout',
						drawerLabel: 'Logout',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="log-out-outline" size={size} color={color} />
						),
					}}

				/>

			</Drawer>

		</GestureHandlerRootView>

	);
};

export default DrawerLayout;