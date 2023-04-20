import { useState, useEffect } from 'react'
import css from './css.module.scss'
import axios from 'axios'
import Cardlist from '../../components/cardlist2/Cardlist';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addItem } from '../../features/cards/cardshirts';

function Shose() {
    const [end, setend] = useState<any>(true);
    const { loading, users, error } = useAppSelector((s) => s.cardshirts);
    let Dispatch = useAppDispatch()

    const getData = async () => {
        if (end === true) {
            setend(false)
            axios.get(`http://localhost:3001/uplode/Shirtsproduct/1/${users.length}`, {
            }).then((response) => {
                setend(true)
                if (response.data.length < 1) {
                    setend(false)
                }
                Dispatch(addItem(response.data))
            }).catch((err: any) => {
                console.log(err);
                console.log(err.response.data.error);
            })
        } else {
            console.log('bb');

        }
    };



    window.onscroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.clientHeight;
        const scrollPercentage = (scrollPosition / (bodyHeight - windowHeight)) * 100;

        if (scrollPercentage > 50) {
            getData()
        }
    }
    console.log(users);


    return (
        <>
            <Cardlist h1='חולצות גבריים' users={users} />

            <button onClick={() => {
                if (end === true) {
                    console.log('aaa');

                    getData()
                }

            }}>ahmad</button>
        </>
    )
}

export default Shose