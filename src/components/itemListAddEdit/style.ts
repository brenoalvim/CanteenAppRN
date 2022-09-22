import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
   

    containerList:{
        flexDirection:"row",
        backgroundColor:"#222",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:5,
        paddingVertical:20,
        borderRadius:5
    },
    listTextProduct:{
        flex:5,
        fontSize:18,
        padding:10
    },
    listTextUni:{
        flex:1,
        fontSize:18,
        padding:10,
        backgroundColor:"#3097FF",
        borderRadius:10,
      
        textAlign:"center",
        
        
    },
    listTextPrice:{
        flex:2,
        fontSize:16,
        padding:10,
        textAlign:"center",
        justifyContent:"center",
        alignContent:"center"
    },
    listProductRemove:{
        flex:2,
        
        fontSize:18,
        padding:10,
        backgroundColor:"#998e16",
        justifyContent:"center",
        alignContent:"center"
    },
    listTextProductRemove:{
        textAlign:"center",
        fontSize:20
    }
    
})