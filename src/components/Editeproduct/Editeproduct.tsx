import React, { useEffect } from 'react'
import Select from 'react-select'
import { useState } from 'react'
import axios from 'axios';
import css from './css.module.scss'
import { AiOutlineUpload, AiFillDelete } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Cardtype } from '../../@types/Mytypes';
import { useParams } from 'react-router-dom';
// optionstype
import { optionstype } from '../../@types/Mytypes';
import { SizeOptions, brands, SizeOptions2, stylelableOption, categorys, colourOptions, } from '../../arrays/list'
function Editeproduct() {
    const [photo7, setphoto7] = useState<any>([])
    const [photodelte, setphotodelte] = useState<any>([])
    const [photos, setphotos] = useState<any>([])
    const [description, setdescription] = useState('')
    const [titel, settitel] = useState('')
    const [brand, setbrand] = useState('')
    const [Permissivecategory, setPermissivecategory] = useState('')
    const [fcategory, setfcategory] = useState('')
    const [secondarycategory, setsecondarycategory] = useState('')
    const [saleprice, setsaleprice] = useState<any>()
    const [regularprice, setregularprice] = useState<any>()
    const [fcolourOptions, setfcolourOptions] = useState<optionstype[]>([])
    const [fSizeOptions2, setSizeOptions2] = useState<any>([])
    const { id, category } = useParams()
    const { loading3, users3, error3 } = useAppSelector((s) => s.cardshose);
    const { loading2, users2, error2 } = useAppSelector((s) => s.cardPants);
    const { loading, users, error } = useAppSelector((s) => s.cardshirts);
    const update = (x: Cardtype) => {
        setphotos(x.src)
        setdescription(x.description)
        settitel(x.name)
        setbrand(x.brand)
        setPermissivecategory(x.category)
        setfcategory(x.category)
        setsecondarycategory(x.category2)
        setsaleprice(x.price)
        setregularprice(x.price2)
        setSizeOptions2(x.stock)
    }
    const item = () => {
        if (category === 'shoes') {
            let x = users3.find((e: any) => e._id === id)
            if (x === undefined) {
                // getData({ category: 'shoes', id: `${id}` })
            } else {
                update(x)
            }
        }
        if (category === 'Shirts') {
            let x = users.find((e: any) => e._id === id)
            if (x === undefined) {
            } else {
                update(x)
            }
        }
        if (category === 'pants') {
            let x = users2.find((e: any) => e._id === id)
            if (x === undefined) {
            } else {
                update(x)
            }
        }
    }
    useEffect(() => {
        item()
    }, []);




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
        for (let i = 0; i < 8 - photos.length; i++) {
            formData.append('profileImg', photo7[i])
        }
        formData.append('setPermissivecategory', Permissivecategory)
        formData.append('fcategory', fcategory)
        formData.append('categoryselect2', secondarycategory)
        formData.append('titel', titel)
        formData.append('description', description)
        formData.append('saleprice', saleprice)
        formData.append('regularprice', regularprice)
        formData.append('photodelte', JSON.stringify(photodelte))
        formData.append('photos', JSON.stringify(photos))
        formData.append('fSizeOptions2', JSON.stringify(fSizeOptions2))
        axios.put(`http://localhost:3001/update/${id}`, formData, {
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
                    options={categorys}
                    onChange={(e: any) => {
                        console.log(e);
                        setPermissivecategory(e.value)
                    }}
                    styles={stylelableOption}
                    value={{ value: Permissivecategory, label: Permissivecategory }}
                    placeholder='קטגוריה רשית'
                />
                <br />
                <Select
                    value={{ value: secondarycategory, label: secondarycategory }}
                    options={categorys}
                    onChange={(e: any) => {
                        console.log(e);
                        setsecondarycategory(e.value)
                    }}
                    styles={stylelableOption}
                    placeholder='קטגוריה משנית'
                />
                <br />
                <Select
                    options={brands}
                    value={{ value: brand, label: brand }}

                    onChange={(e: any) => {
                        setbrand(e.value)
                    }}
                    styles={stylelableOption}

                    placeholder='שם החברה'
                />
                <br />
                <input value={titel} placeholder='שם המוצר' onChange={(e) => {
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
                    styles={stylelableOption}

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
                    styles={stylelableOption}
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
                <textarea value={description} rows={4} id="description" onChange={(e) => {
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
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                {photos.map((src: string, i: number) =>
                    <div key={i} className={css.mydiv}>
                        <AiFillDelete onClick={() => {
                            let index = photos.findIndex((e: string) => e === src)
                            const newArray = [...photos]; // make a copy of the array
                            newArray.splice(index, 1); // remove the item at the index
                            setphotodelte((e: []) => [...e, src])
                            setphotos(newArray)
                        }} className={css.Mydelteicon} size={30} />
                        <img className={css.Myimg} src={src} alt="" />
                    </div>
                )}
            </div>
            <button className={css.mybtn} onClick={handleSaveStudentClicked}>uplode</button>
        </div>
    )
}

export default Editeproduct 
