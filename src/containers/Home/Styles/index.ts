import {Theme, withStyles} from "@material-ui/core";
import {GenericButton as BaseButton} from "../../../components/GenericButton";

export const GenericButton = withStyles(
    (theme: Theme) => {
        return {
            root: {
                paddingTop: '10px',
                paddingBottom: '10px',
                fontSize: '1.5em',
                backgroundColor: theme.colors.primary,
                fontFamily: 'ProximaNovaSoftW03-Regular',
            }
        }
    }
)(BaseButton);

export const ScrollButton = withStyles(
    (theme: Theme) => {
        return {
            root: {
                position: 'absolute',
                bottom: '20px',
                fontFamily: 'Proxima Nova ',
                fontSize: theme.font.fontSize,
                color: 'black',
                backgroundColor: 'rgba(255,255,255,0.5)',
            }
        }
    }
)(BaseButton);

//
// export const usestyle = makeStyles(
//     (theme) => createStyles({
//         root: {
//             width: '100%',
//             backgroundImage: `url(${bg})`,
//             backgroundSize: '100% 100%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100vh',
//             minHeight: '700px',
//             textAlign: 'center',
//         },
//         title: {
//             fontSize: '55px',
//             fontWeight: 'bold',
//             color: theme.colors.primary,
//             paddingBottom: '1em',
//         },
//         button: {
//             paddingTop: '10px',
//             paddingBottom: '10px',
//             fontSize: '2.5em',
//             backgroundColor: theme.colors.primary,
//         },
//         scrollDown: {
//             position: 'absolute',
//             bottom: '20px',
//             fontSize: theme.font.fontSize,
//             color: 'black',
//             backgroundColor: 'rgba(255,255,255,0.5)',
//         },
//         arrow: {
//             verticalAlign: 'bottom',
//             marginLeft: '5px',
//         }
//     })
// );
