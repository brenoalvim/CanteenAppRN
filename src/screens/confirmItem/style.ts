import { StyleSheet } from "react-native"



export const styles = StyleSheet.create({
    

   
        container:{
            flex:1,
            backgroundColor: "#0F172A",
            padding: 24,
           
           
        },
        infoProduct:{
            flexDirection:"row",
            justifyContent:"space-between"
        },

        infoProductDynamic:{
            marginTop:20,
            flexDirection:"row",
            justifyContent:"space-between",
            

        },
        infoValueMult:{
            flex:1
        },
        infoValueMultText:{
            textAlign:"right",
            fontSize:22,
        },
        infoValue:{
            fontSize:22,
        },
        containerControll:{
            flexDirection:"row",
            justifyContent:"space-around",
            marginBottom:20,
           // backgroundColor:"red"
        },
        buttonDecrease:{
            padding:40,
            backgroundColor:"#A6D3E7",
            borderRadius:40,
            justifyContent:"center",
           
            alignItems:"center",
        },

        buttonIncrease:{
          
             padding:40,
            backgroundColor:"#0EA5E9",
             borderRadius:40,
           justifyContent:"center",
           
           alignItems:"center",

        },
        buttonNumber:{
            
            padding:40,
            backgroundColor:"#D9D9D9",
            borderRadius:20,
            justifyContent:"center",
           
            alignItems:"center",

        },
        textDecrease:{
           fontSize:44
          

        }



    

})