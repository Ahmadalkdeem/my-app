import React, { useState } from 'react';
import Select from 'react-select'

const options: any = [
    { value: 'Shirts', label: 'Shirts' },
    { value: 'pants', label: 'pants' },
    { value: 'shoes', label: 'shoes' }
]
const options2: any = [
    { value: 'nike', label: 'nike' },
    { value: 'reboke', label: 'reboke' },
    { value: 'boss', label: 'boss' }
]
const options3: any = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const options4: any = [
    { value: 'medume', label: 'medume' },
    { value: 'small', label: 'small' },
    { value: 'lager', label: 'lager' }
]
let x: any = {
    control: (base: any) => ({
        ...base,
        border: '2.5px solid black',
        borderRadius: '4px',
        boxShadow: 'none',
        textAlign: 'center',
        '&:hover': {
            border: '2.5px solid black'
        }
    }), option: (base: any, state: any) => ({
        ...base,
        color: "#1e2022",
        backgroundColor: state.isSelected ? "green" : "white",
        textAlign: 'center',
        '&:hover': {
            backgroundColor: 'gray'
        }
    })
}

function Editcard() {
    const [category, setcategory] = useState('')
    const [company, setcompany] = useState('')
    const [modal, setmodal] = useState('')
    const [sizes, setsizes] = useState([])
    const [size, setsize] = useState('')
    return (
        <div className='d-flex align-items-center justify-content-center flex-wrap'>
            <Select value={options.find((obj: any) => obj.value === category)} onChange={(e: any) => {
                setcategory(e.value);
                console.log(e.value);
            }} className='w-25 m-3' options={options}
                styles={x} />

            <Select value={options2.find((obj: any) => obj.value === company)} onChange={(e: any) => {
                setcompany(e.value);
                console.log(e.value);
            }} className='w-25 m-3' options={options2}
                styles={x} />

            <Select value={options3.find((obj: any) => obj.value === modal)} onChange={(e: any) => {
                setmodal(e.value);
                console.log(e.value);
            }} className='w-25 m-3' options={options3}
                styles={x} />

            <Select value={options4.find((obj: any) => obj.value === size)} onChange={(e: any) => {
                setsize(e.value);
                // setsizes((e)=>[...e,{}])
                console.log(e.value);
            }} className='w-25 m-3' options={options4}
                styles={x}

            />
            <input type="text" onChange={(e: any) => {
                console.log(e.target.value);
            }} />

        </div>
    )
}

export default Editcard