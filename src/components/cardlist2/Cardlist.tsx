import Select from 'react-select'
import { useState, useEffect } from 'react'
import MyCard from '../card/Card'
import css from './css.module.scss'
import { Cardtype } from "../../@types/Mytypes"
import { Container, Row, Col } from 'react-bootstrap';
import { stylelableOption } from '../../arrays/list'
function Cardlist(props: { h1: string, users: [] }) {
    const SizeOptions: any = [];
    const SizeOptions2: any = [];
    props.users.forEach((e: Cardtype) => {
        let x = SizeOptions.find((ee: any) => ee.value === e.name)
        let y = SizeOptions2.find((ee: any) => ee.value === e.category2)
        if (x === undefined) SizeOptions.push({ value: e.name, label: e.name })
        if (y === undefined) SizeOptions2.push({ value: e.category2, label: e.category2 })
    })

    const [serahre, setserahre] = useState('');
    const [size, setsize] = useState('');
    const [mylist, setmylist] = useState('');
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <h1 className={css.h1}>{props.h1}</h1>
            <div className={css.selestdiv}>

                <Select
                    id='SizeOptions'
                    options={SizeOptions}
                    onChange={(e: any) => {
                        console.log(e);
                        setmylist('')

                        setsize(e.value)
                    }}
                    styles={stylelableOption}
                    onMenuOpen={() => {
                        setmylist('SizeOptions')
                    }}
                    onMenuClose={() => {
                        setmylist('')
                    }}
                    className={mylist === 'SizeOptions' ? `${css.selest}` : `${css.selest2}`}
                    placeholder='שם מוצר'
                />
                <Select
                    id='SizeOptions2'
                    options={SizeOptions2}
                    onChange={(e: any) => {
                        setmylist('')
                        setserahre(e.value)
                    }}
                    styles={stylelableOption}
                    onMenuOpen={() => {
                        setmylist('SizeOptions2')
                    }}

                    onMenuClose={() => {
                        setmylist('')
                    }}
                    className={mylist === 'SizeOptions2' ? `${css.selest}` : `${css.selest2}`}
                    placeholder='קטגוריה משנית'
                />
            </div>
            <Container className={`Container ${css.Container}`} fluid>
                <Row xs={2} sm={3} lg={4} xxl={5}>

                    {props.users.length > 0 && props.users.filter((val: Cardtype) => {
                        if (size === '' && serahre === '') {
                            return val
                        } else if (val.name.includes(size) && serahre === '') {
                            return val
                        } else if (val.category2.includes(serahre) && size === '') { return val }
                        else if (val.category2.includes(serahre) && val.name.includes(size)) { return val }
                    }).map(((product: any, i: number) => (
                        <Col key={i} className="mt-2 p-1">
                            <MyCard key={i}
                                {...product} />
                        </Col>)))}
                </Row>
            </Container>
        </>
    )
}

export default Cardlist