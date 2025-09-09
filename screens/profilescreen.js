import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
export default function Profilescreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/pic.jpeg')}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Abdul Manan</Text>
      <Text style={styles.email}>abdullmanan7777@gmail.com</Text>
      <Text style={styles.bio}>
        React Native Developer | Expo | Firebase Enthusiast. Passionate about
        building clean, modern apps with smooth navigation.
      </Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 70,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'red',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
  },
  bio: {
    fontSize: 15,
    marginBottom: 30,
    color: 'black',
    textAlign: 'center',
    lineHeight: 22,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
