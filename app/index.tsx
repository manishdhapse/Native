import React, { useState } from 'react';
import {
	Text,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	TextInput,
	ActivityIndicator,
	TouchableOpacity
} from 'react-native';
import { useAuth } from './context/AuthContext';

const Login = () => {
	const [username, setUsername] = useState("manishdhapse7@gmail.com");
	const [password, setPassword] = useState("123456");
	const [Act,setAct] = useState(false);
	const { onLogin } = useAuth();

	const onSignInPress = async () => {
		setAct(true);
		onLogin!(username, password);
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
		
			{Act ? (
				<ActivityIndicator size={100} animating={Act} />
			  ) : null}
			<Text style={styles.header}>My School App</Text>
			
			<TextInput
				autoCapitalize="none"
				placeholder="email"
				value={username}
				onChangeText={setUsername}
				style={styles.inputField}
			/>
			
			<TextInput
				placeholder="password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
				style={styles.inputField}
			/>
			
			<TouchableOpacity onPress={onSignInPress} style={styles.button}>
				<Text style={{ color: '#fff' }}>Sign in</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		paddingHorizontal: '20%',
		justifyContent: 'center'
	},
	header: {
		fontSize: 30,
		textAlign: 'center',
		marginBottom: 40
	},
	inputField: {
		marginVertical: 4,
		height: 50,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 4,
		padding: 10
	},
	button: {
		marginVertical: 15,
		alignItems: 'center',
		backgroundColor: '#111233',
		padding: 12,
		borderRadius: 4
	}
});
export default Login;