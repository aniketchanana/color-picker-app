import Chroma from 'chroma-js';
import sizes from './sizes';
const mystyles = {
    copyText:{
        color:(props)=> Chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    },
    colorName:{
        color:(props)=> Chroma(props.background).luminance() <= 0.08 ? "white" : "black"
    },
    seeMore:{
        background: "rgba(255,255,255,0.3)",
        position: "absolute",
        right: "0",
        bottom: "0",
        padding: "4px",
        textTransform: "uppercase",
        color:(props)=> Chroma(props.background).luminance() >= 0.4 ? "black" : "white",
    },
    ColorBox:{
        width: "20%",
        height: (props)=>{return props.showMoreBtn?"25%":"50%"},
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-5px",
        "&:hover button":{
            opacity:"1"
        },
        [sizes.down("lg")]:{
            width:"25%",
            height: (props)=>{return props.showMoreBtn?"20%":"33.333%"}
        },
        [sizes.down("md")]:{
            width:"50%",
            height: (props)=>{return props.showMoreBtn?"10%":"20%"}
        },
        [sizes.down("xs")]:{
            width:"100%",
            height: (props)=>{return props.showMoreBtn?"5%":"10%"
        }
    }
    },
    copyButton:{
        color:(props)=> Chroma(props.background).luminance() >= 0.4 ? "black" : "white",
        width: "100px",
        height: "30px",
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255,255,255,0.3)",
        lineHeight: "30px",
        texTransform: "uppercase",
        border: "none",
        opacity: "0",
        transition: "0.5s ease"
    },
    boxContent:{
        position: "absolute",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        "& span":{
            color:(props)=> Chroma(props.background).luminance() >= 0.4 ? "black" : "white",
        }
    },
    copyOverlay:{
        position: "fixed",
        display: "none",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: "2",
        cursor: "pointer"
    },
    showOverlay:{
        display: "block"
    },
    overalyText:{
        background: "rgba(255,255,255,0.3)",
        fontSize: "4rem",
        textTransform: "uppercase",
        marginTop: "18%",
        color:(props)=> Chroma(props.background).luminance() >= 0.7 ? "black" : "white",
        [sizes.down("xs")]:{
            fontSize:"2rem"
        }
    },
    copymsg:{
        textAlign: "center",
        "& p":{
            fontSize: "2rem"
        }
    }     
}

console.log(mystyles);
export default mystyles;