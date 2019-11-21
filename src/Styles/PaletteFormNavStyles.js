import {drawerWidth} from '../constant';
import sizes from './sizes';
const styles = theme => ({
    root:{
      display:"flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      height:"64px"
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20
    },
    navBtns:{
      marginRight:"1rem",
      "& a":{
        textDecoration:"none",
        width:"300px"
      },
      display:"flex",
      justifyContent:"center",
      [sizes.down("xs")]:{
        display:"block",
        marginRight:"0rem"
      }
    },
    button:{
      width:"200px",
      [sizes.down("xs")]:{
        width:"400px",
        marginRight:"0rem",
        padding:"0"
      }
    }
  })

  export default styles;