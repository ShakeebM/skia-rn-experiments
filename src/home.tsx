import { Pressable, Text, View } from "react-native";

export default function HomeScreen({navigation}) {
    return(
        <View style={{flex : 1, flexDirection : "column", justifyContent : "space-evenly", padding : 32}}>
            <Pressable style={{height :40, width : 120, backgroundColor : "#C1C1C1", justifyContent : "center", paddingHorizontal : 12}}>
                <Text style={{fontSize : 18, fontWeight : "500"}} onPress={()=>navigation.navigate("FirstSkia")}>simple</Text>
            </Pressable>

            <Pressable style={{height :40, width : 120, backgroundColor : "#C1C1C1", justifyContent : "center", paddingHorizontal : 12}}>
                <Text style={{fontSize : 18, fontWeight : "500"}} onPress={()=>navigation.navigate("SecondSkia")}>horrible</Text>
            </Pressable>

            <Pressable style={{height :40, width : 120, backgroundColor : "#C1C1C1", justifyContent : "center", paddingHorizontal : 12}}>
                <Text style={{fontSize : 18, fontWeight : "500"}} onPress={()=>navigation.navigate("Wallet")}>terrible</Text>
            </Pressable>

        </View>
    )
}