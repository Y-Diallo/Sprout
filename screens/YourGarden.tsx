import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Navbar from '../components/Navbar/Navbar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'YourGarden'>;

const YourGarden = ({navigation}:Props) => {
    return (
      <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Your Garden</Text>
          <Text style={styles.headerSubtitle}>Here's the plants in your garden!</Text>
        </View>

        <View style={styles.grid}>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1553025299-0d3f63d5d49c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
              }}
              style={styles.cardImage}
              alt="Plant 1"
            />
          </View>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1445510491599-c391e8046a68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
              }}
              style={styles.cardImage}
              alt="Plant 2"
            />
          </View>
        </View>
      </ScrollView>
      <Navbar navigation={navigation}/>
    </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white', // Set background color to white
      paddingHorizontal: 16, // Add horizontal padding for better spacing
    },
    header: {
      marginVertical: 20,
      alignSelf: 'flex-start', // Align header to the left
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingTop: 20,
      textAlign: 'left', // Align header text to the left
    },
    headerSubtitle: {
      fontSize: 16,
      textAlign: 'left', // Align subtitle text to the left
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between', // Arrange images in 2x2 formation
    },
    card: {
      width: '48%', // Adjust card width to fit two images in a row
      aspectRatio: 9 / 12, // 9:16 aspect ratio (portrait orientation)
      marginVertical: 8,
      borderRadius: 10,
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 5,
    },
    cardImage: {
      width: '100%',
      height: '100%', // Set the image height to 100% of the card
      borderRadius: 10,
    },
  });

  export default YourGarden;