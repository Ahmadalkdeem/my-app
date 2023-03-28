import React from 'react'
import Reactselect from '../Reactselect/Reactselect'
import Select from 'react-select'
import { useState } from 'react'
import axios from 'axios';
import css from './css.module.scss'
import { AiOutlineUpload } from "react-icons/ai";
export interface ColourOption {
    value: string;
    label: string;

}

export const brands: ColourOption[] = [
    { value: 'boss', label: 'boos' },
    { value: 'underarmur', label: 'underarmur' },
    { value: 'kelvenkline', label: 'kelvenkline' },

];
export const category: ColourOption[] = [
    { value: 'חולצות', label: 'חולצות' },
    { value: 'מכנסים', label: 'מכנסים' },
    { value: 'נעלים', label: 'נעלים' },

];
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
export const SizeOptions: ColourOption[] = [
    { value: 'XS', label: 'XSmall' },
    { value: 'S', label: 'Small' },
    { value: 'M', label: 'Medume' },
    { value: 'L', label: 'Large' },
    { value: 'XL', label: 'XLarge' },
    { value: '2XL', label: '2XLarge' },
    { value: '3XL', label: '3XLarge' },
    { value: '4XL', label: '4XLarge' },
    { value: '5XL', label: '5XLarge' },
    { value: '6XL', label: '6XLarge' },
];


let xx: any = {
    control: (base: any) => ({
        ...base,
        border: '1.5px solid black',
        borderRadius: '4px',
        boxShadow: 'none',
        '&:hover': {
            border: '1.5px solid black'
        }
    }), option: (base: any, state: any) => ({
        ...base,
        color: "#1e2022",
        textAlign: 'center',

    })
}
function Editpage() {
    const [photo7, setphoto7] = useState<any>([])
    const [description, setdescription] = useState('')
    const [titel, settitel] = useState('')
    const [Permissivecategory, setPermissivecategory] = useState('')
    const [secondarycategory, setsecondarycategory] = useState('')
    const [saleprice, setsaleprice] = useState('')
    const [regularprice, setregularprice] = useState('')
    const [fcolourOptions, setfcolourOptions] = useState<ColourOption[]>([])
    const [fSizeOptions2, setSizeOptions2] = useState<any>([])

    let x: any[] = []
    function poo(eq: any) {
        eq.forEach((ee: any) => {
            let zxc = fSizeOptions2.find((e: any) => e.size === ee.value)
            if (zxc === undefined) {
                let colors: { color: string }[] = []
                fcolourOptions.forEach((cc) => {
                    colors.push({ color: cc.value })
                })

                console.log(fSizeOptions2.find((e: any) => e.size === ee.value));
                console.log(fSizeOptions2.findIndex((e: any) => e.size === ee.value));

                setSizeOptions2((err: any) => [...err, { size: ee.value, colors: colors }])

            } else {


            }


        })

    }


    const handleSaveStudentClicked = async () => {
        const formData = new FormData()
        for (let i = 0; i < 8; i++) {
            formData.append('profileImg', photo7[i])
        }
        formData.append('setPermissivecategory', Permissivecategory)
        formData.append('categoryselect2', secondarycategory)
        formData.append('titel', titel)
        formData.append('description', description)
        formData.append('saleprice', saleprice)
        formData.append('regularprice', regularprice)
        formData.append('fSizeOptions2', JSON.stringify(fSizeOptions2))
        // formData.append('fSizeOptions2', JSON.stringify(fSizeOptions2[1]))

        console.log(formData);

        axios.post("http://localhost:3001/uplode/user-profile", formData, {
        }).then((res: any) => {
            console.log(res.data)

        }).catch((err: any) => {
            console.log(err);
            console.log(err.response.data.error);

            const term = err.response.data
            const regex = /Only .png, .jpg and .jpeg format allowed!/g
            const regex2 = /File too large/g
            const isExist = term.match(regex)
            const isExist2 = term.match(regex2)
            if (isExist) console.log("Image must be one of type jpg...");
            if (isExist2) console.log("File too large");



        })
    }

    return (
        <div className={css.myfdiv}>
            <h3>הוספת מוצר:</h3>
            <div className="label-input d-flex flex-column">
                <Select
                    options={category}
                    onChange={(e: any) => {
                        console.log(e);
                        setPermissivecategory(e.value)
                    }}
                    styles={xx}

                    placeholder='קטגוריה רשית'
                />
                <br />
                <Select
                    options={category}
                    onChange={(e: any) => {
                        console.log(e);
                        setsecondarycategory(e.value)
                    }}
                    styles={xx}

                    placeholder='קטגוריה משנית'
                />
                <br />
                <input placeholder='שם המוצר' onChange={(e) => {
                    settitel(e.target.value)
                }} className={css.Myinput2} type="text" id='titel' />
                <br />
                <input value={saleprice} placeholder='מחיר המכירה' onChange={(e: any) => {

                    if (e.target.value < 0) { }
                    else if (e.target.value[0] == 0) { }
                    else if (e.target.value.length < 4) {
                        setsaleprice(e.target.value)
                    }

                }} className={css.Myinput2} type="number" id='titel' />
                <br />
                <input value={regularprice} placeholder='מחיר הרגיל' onChange={(e: any) => {
                    if (e.target.value < 0) {
                    }
                    else if (e.target.value[0] == 0) {


                    }
                    else if (e.target.value.length < 4) {
                        setregularprice(e.target.value)
                        console.log(e.target.value[0]);

                    }
                }} className={css.Myinput2} type="number" id='titel' />
                <br />
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    options={colourOptions}
                    onChange={(e: any) => {
                        console.log(e);
                        setfcolourOptions(e);
                    }}
                    styles={xx}

                    placeholder='צבעים'
                />
                <br />
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    options={SizeOptions}
                    onChange={(e: any) => {
                        poo(e)
                    }}
                    styles={xx}
                    placeholder='מידות'
                />


                <table onClick={(event) => {
                    if (event.detail === 2) {
                        setSizeOptions2([])
                    }
                }} >

                    {fSizeOptions2.map((val: any, key: number) => {
                        return (
                            <tr key={key}>
                                <td>{val.size}</td>

                                {val.colors.map((val2: any, key2: any) => {
                                    return (

                                        <td key={key2} className='m-2'>{val2.color}</td>

                                    )
                                })}

                            </tr>
                        )
                    })}
                </table>


                <br />
                <textarea rows={4} id="description" onChange={(e) => {
                    setdescription(e.target.value)
                }}
                    className={css.Myinput2}
                    placeholder="description"
                />
            </div>
            <label className={css.mylable} htmlFor="files">
                <AiOutlineUpload size={50} />
                <h5>תבחר תמונות</h5>
            </label>
            <input id='files' onChange={(e: any) => { setphoto7(e.target.files); }} type="file" accept=".jpg, .jpeg, .png, .svg, .gif" name="file" multiple className={css.Myinput} />
            <br />
            <button className={css.mybtn} onClick={handleSaveStudentClicked}>uplode</button>
        </div>
    )
}

export default Editpage 
