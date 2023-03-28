import React, { useState } from 'react';
import Select from 'react-select'
// import { useState } from 'react'
export interface ColourOption {
    value: string;
    label: string;

}

export const colourOptions: ColourOption[] = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green' },
    { value: 'forest', label: 'Forest' },
    { value: 'slate', label: 'Slate' },
    { value: 'silver', label: 'Silver' },
];



const options: any = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
export let x: any = {
    control: (base: any) => ({
        ...base,
        height: '10px !important',
        border: '2px solid black',
        borderRadius: '4px',
        boxShadow: 'none',
        '&:hover': {
            border: '2px solid black'
        }
    }), option: (base: any, state: any) => ({
        ...base,
        padding: '0 0 4px 0',
        color: "#1e2022",
        backgroundColor: state.isSelected ? "green" : "white",
        textAlign: 'center',
        '&:hover': {
            backgroundColor: 'gray'
        }
    })
}

function Reactselect() {
    const [state, setState] = useState('')

    return (
        <>
            <Select value={options.find((obj: any) => obj.value === state)} onChange={(e: any) => {
                setState(e.value);
                console.log(e.value);
            }} className='m-3' options={options}
                styles={x}
            />

            <Select
                closeMenuOnSelect={false}
                defaultValue={[colourOptions[0], colourOptions[1]]}
                isMulti
                options={colourOptions}
                onChange={(e: any) => {
                    // setState(e.value);
                    console.log(e);
                }}
            // styles={colourStyles}
            />
        </>

    )
}

export default Reactselect