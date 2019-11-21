import sizes from './sizes';
import chroma from 'chroma-js';
const styles = {
    root:{
        height:"25%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        "& svg:hover":{
            color:"white",
            transform:"scale(1.2)"
        },
        [sizes.down("lg")]:{
            width:"20%",
            height:"20%"
        },
        [sizes.down("md")]:{
            width:"50%",
            height:"10%"
        },
        [sizes.down("xs")]:{
            width:"100%",
            height:"5%"
        }
    },
    boxContent:{
        height:"100%",
        padding: "10px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"flex-end",
        color:props=>chroma(props.color).luminance() <= 0.08 ? "white" : "black",
    },
    deleteIcon:{
        transition:"0.2s ease-in-out"
    }
}

export default styles;