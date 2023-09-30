import { View, Text, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';


type NavbarProps = {
  navigation : any;
}
const Navbar = ({navigation}: NavbarProps) => {
    return (
      <View className='absolute bottom-0 w-full'>
        <View className='flex flex-row justify-center'>
          <View className='grow bg-green-600 flex items-center h-32 mt-auto justify-center'>
            <TouchableOpacity onPress={()=> navigation.navigate('PlantFinder')}>
              <Ionicons name="home-outline" size={60} color="#fff"/>
            </TouchableOpacity>
          </View>
          <View className='grow flex items-center'>
            <View className='bg-green-600 w-full h-52 flex items-center rounded-t-[40%] pt-6'>
              <TouchableOpacity onPress={()=> navigation.navigate('Picture')}>
                <Ionicons name="image-outline" size={100} color="#fff"/>
              </TouchableOpacity>
            </View>
          </View>
          <View className='grow bg-green-600 flex items-center h-32 mt-auto justify-center' >
            <TouchableOpacity onPress={()=> navigation.navigate('Garden')}>
              <Ionicons  name="earth-outline" size={60} color="#fff"/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  
  export default Navbar;