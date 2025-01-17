import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../context/AuthContext';
//import WithRole from '../components/WithRole';
const Page = () => {
	const { authState, onLogout } = useAuth();

	const onLogoutPressed = () => {
		onLogout!();
	};

	return (
        <View style={styles.container}>
        
        <View style={styles.separator} />
			
    </View>
);
};

export default Page;

const styles = StyleSheet.create({
	container: {
	
		flex: 1,
	
		width: '100%', // Ensures full width
	},
	separator: {
		height: 1,
		marginVertical: 30,
		width: '80%'
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	tabContainer: {
		// width: '100%', // Ensures full width
	},
});