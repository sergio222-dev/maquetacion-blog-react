import React, {useState} from 'react';
import {StyledComponent} from "../../types/components";
import {ToggleButtonGroup, ToggleButton} from '@material-ui/lab';
import {usecustomstyle} from "../hooks";

interface Props extends StyledComponent<Styles> {
    options: options[];
    onChange: any;
}

interface Styles {
    root?: string;
    button?: string;
    selected?: string;
}

type options = {
    label: string;
    value: string | number;
    isDefault?: boolean;
}

export function ZToggleButtonGroup({classes, onChange, options}: Props) {
    let defaultOperator;
    options.forEach(o => {
        if (o.isDefault) {
            defaultOperator = o.value ? o.value : 1;
        }
    });

    const [currentOperator, setOperator] = useState<string | number | undefined>(defaultOperator);
    const styles = usecustomstyle(classes, {});

    const handleChange = (e: any, v: any) => {
        if (onChange) {
            onChange();
        }
        console.log(v ? v : currentOperator);
        setOperator(v ? v : currentOperator);
    };

    return (
        <>
            <ToggleButtonGroup
                value={currentOperator}
                exclusive
                onChange={handleChange}
                classes={{
                    root: styles.root ? styles.root : ''
                }}
            >
                {options.map((e, i) => {
                    return (
                        <ToggleButton
                            key={i}
                            classes={{
                                root: styles.button ? styles.button : '',
                                selected: styles.selected ? styles.selected : '',
                            }}
                            selected={options[i].value === currentOperator}
                            value={options[i].value}
                            href={''}
                        >
                            {options[i].label}
                        </ToggleButton>
                    );
                })}
            </ToggleButtonGroup>
        </>
    );
}