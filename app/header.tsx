import { StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
    return <SafeAreaView style={styles.header}/>
}

const styles = StyleSheet.create({  
    header: {
        alignSelf: 'flex-start',
        width: '100%',
        backgroundColor: 'white',
    }
})


export default Header;