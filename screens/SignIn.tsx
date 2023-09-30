import { View, Text } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignIn = ({navigation}:Props) => {
    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                <Text>Sign In page</Text>
            </View>
        </>
    );
  };
  
  export default SignIn;