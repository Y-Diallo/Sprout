import { View, Text, StatusBar } from 'react-native';
import Navbar from '../components/Navbar/Navbar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'Notifications'>;
const Notifications = ({navigation}:Props) => {
    return (
      <>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
          <Text>Landing Page</Text>
          <StatusBar hidden={true} />
        </View>
      </>
    );
  };
  
  export default Notifications;