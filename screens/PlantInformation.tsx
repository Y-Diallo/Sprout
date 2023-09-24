import { View, Text, StatusBar } from 'react-native';
const PlantInformation = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
        <Text>Landing Page</Text>
        <StatusBar hidden={true} />
      </View>
    );
  };
  
  export default PlantInformation;