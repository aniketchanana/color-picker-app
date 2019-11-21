import bg from '../bg.svg';
export default {
    root:{
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"red",
        backgroundImage:`url(${bg})`,
        // overflow:"scroll"
    },
    container:{
        width:"70%"
    },
    nav:{
        width:"97%",
        color:"white",
        margin:"1rem",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        "& a":{
            color:"white",
            fontSize:"1.3rem"
        }
    },
    palettes:{
        // display:"flex",
        // flexDirection: "row",
        // justifyContent:"space-between",
        // alignItems:"center",
        // border:"1px solid white",
        // flexWrap:"wrap",
    }
}