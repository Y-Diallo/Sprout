import { View, Text, StatusBar, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'Picture'>;

const Picture = ({navigation}:Props) => {
    return (
      <>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
          <Text>Landing Page</Text>
          <StatusBar hidden={true} />
        </View>
        <Button color={"green"} title={"Go to Plant Finder"} onPress={()=>navigation.navigate("PlantFinder")}/>
      </>
    );
  };
  
  export default Picture;