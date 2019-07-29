import {Theme, withStyles, Typography} from "@material-ui/core";
import {PageTitle as BasePageTitle} from "../../../components/PageTitle";
import {GenericButton as Button} from "../../../components/GenericButton";
import {ZToggleButtonGroup as BaseToggler} from "../../../components/ZToggleButtonGroup";
import React from 'react';

export const PageTitle = withStyles(
    (theme: Theme) => {
        return {
            root: {
                marginBottom: '50px',
            },
            hr: {
                width: '50px',
                border: `1px ${theme.colors.primaryDarken} solid`,
            }
        }
    }
)(BasePageTitle);

export const TypographyTitle = withStyles(
    (theme: Theme) => {
        return {
            root: {
                color: theme.colors.primaryDarken,
                fontSize: '20px',
                fontFamily: '"Montserrat ", sans-serif',
                fontWeight: 400,
            }
        }
    }
)(Typography);

export const TypographySubTitle = withStyles(
    (theme: Theme) => {
        return {
            root: {
                color: theme.colors.primaryDarken,
                fontFamily: 'Open Sans , sans-serif',
                fontWeight: 200,
            }
        }
    }
)(Typography);

export const ZToggleButtonGroup = withStyles(
    (theme: Theme) => {
        return {
            root: {
                backgroundColor: 'white',
                borderRadius: '30px',
                marginRight: '40px',
                // overflow: 'hidden',
            },
            button: {
                fontFamily: 'Proxima Nova Regular, sans-serif',
                textTransform: 'none',
                border: 'none',
                borderRight: '1px solid ' + theme.colors.primaryDarken,
                borderLeft: '1px solid ' + theme.colors.primaryDarken,
                color: theme.colors.primaryDarken,
                height: '30px',
                minWidth: '80px',
                '&:first-child': {
                    borderTopLeftRadius: '30px',
                    borderBottomLeftRadius: '30px',
                },
                '&:last-child': {
                    borderTopRightRadius: '30px',
                    borderBottomRightRadius: '30px',
                },
                '&$selected': {
                    backgroundColor: theme.colors.primaryDarken,
                    color: 'white',
                    '&:hover': {
                        backgroundColor: theme.colors.primary,
                    }
                }
            },
            selected: {},
            label: {
                backgroundColor: theme.colors.primaryDarken,
            }
        }
    }
)(BaseToggler);

export const GenericButton = withStyles(
    (theme: Theme) => {
        return {
            root: {
                color: 'white',
                backgroundColor: theme.colors.primaryDarken,
            }
        }
    }
)(Button);

export const ViewMoreButton = withStyles(
    (theme: Theme) => {
        return {
            root: {
                color: 'white',
                backgroundColor: theme.colors.primaryDarken,
                fontFamily: 'Proxima Nova Regular, sans-serif',
                fontSize: '18px',
            }
        }
    }
)(Button);