import { useState, useEffect } from 'react'
import css from './css.module.scss'
import axios from 'axios'
import Cardlist from '../../components/cardlist2/Cardlist';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addItem3 } from '../../features/cards/cardshose';

function Shose() {
    const [end, setend] = useState<any>(true);
    const { loading3, users3, error3 } = useAppSelector((s) => s.cardshose);
    let x = users3.length
    let Dispatch = useAppDispatch()
    const getData = async () => {
        if (end === true) {
            setend(false)
            axios.get(`http://localhost:3001/uplode/shoesproduct/1/${x}`, {
            }).then((response) => {
                setend(true)

                if (response.data.length < 1) {
                    setend(false)
                }
                Dispatch(addItem3(response.data))
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

    return (
        <div>
            <Cardlist h1='נעליים גבריים' users={users3} />
            <button onClick={() => {
                if (end === true) {
                    console.log('aaa');

                    getData()
                }

            }}>ahmad</button>
        </div>
    )
}

export default Shose