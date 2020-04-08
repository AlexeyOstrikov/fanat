import React, {useState} from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import PickerImage from '../components/PickerImage';

const styles = EStyleSheet.create({
	page: {
		flex: 1,
		paddingHorizontal: '30rem',
		paddingVertical: '30rem',
		flexDirection: 'column',
	},
});

const RegisterScreen = (props) => {
	const nextHandler = () => props.navigation.navigate('Login');
	const [avatar, setAvatar] = useState('');
	return (
		<ScreenContainer>
			<View style={styles.page}>
				<PickerImage
					avatar={avatar}
					savePhoto={setAvatar}
				/>
				<Button onPress={nextHandler} title={'Далее'}/>
			</View>
		</ScreenContainer>
	);
};

export default RegisterScreen;