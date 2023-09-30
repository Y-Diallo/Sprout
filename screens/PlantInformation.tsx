import { View, Text, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'PlantInformation'>;

const PlantInformation = ({navigation}:Props) => {
    return (
      <>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
          <Text>Landing Page hi</Text>
          <StatusBar hidden={true} />
        </View>
      </>
    );
  };
  
  export default PlantInformation;