import { useState, useEffect } from 'react'
import css from './css.module.scss'
import axios from 'axios'
import Cardlist from '../../components/cardlist2/Cardlist';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addItem2 } from '../../features/cards/cardPants';
// import { fetchUsers2 } from '../../features/cards/cardPants';
function Shose() {
    const [end, setend] = useState<any>(true);
    const { loading2, users2, error2 } = useAppSelector((s) => s.cardPants);
    let x = users2.length
    console.log(users2);

    let Dispatch = useAppDispatch()
    const getData = async () => {
        if (end === true) {
            setend(false)
            axios.get(`http://localhost:3001/uplode/pantsproduct/1/${x}`, {
            }).then((response) => {
                setend(true)
                if (response.data.length < 1) {
                    setend(false)
                }
                Dispatch(addItem2(response.data))
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

            <Cardlist h1='מכנסיים גבריים' users={users2} />
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