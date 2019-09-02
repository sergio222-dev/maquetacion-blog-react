import {withStyles, Theme, Typography} from "@material-ui/core";
import {ZNavItem} from "../../../components/ZNavItem";

export const Title = withStyles(
    (theme: Theme) => {
        return {
            root: {
                fontFamily: '"Nautilus", sans-serif',
                color: 'white',
                fontSize: '1.5em'
            }
        }
    }
)(Typography);

export const NavItem = withStyles(
    (theme: Theme) => {
        return {
            selector: {
                backgroundColor: theme.colors.primary,
            },
            root: {
                padding: '10px 10px',
                fontFamily: '"Proxima Nova Regular", sans-serif',
                fontSize: '1em',
                '&:hover': {
                    fontFamily: '"Proxima Nova Bold", sans-serif',
                }
            }
        }
    }
)(ZNavItem);