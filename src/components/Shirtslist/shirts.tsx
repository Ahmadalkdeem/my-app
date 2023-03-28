import { useState, useEffect } from 'react'
import css from './css.module.scss'
import axios from 'axios'
import Cardlist from '../cardlist2/Cardlist';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addItem } from '../../features/cards/cardshirts';
// import { fetchUsers } from '../../features/cards/cardshirts';
function Shose() {
    const [end, setend] = useState<any>(true);
    const { loading, users, error } = useAppSelector((s) => s.cardshirts);
    // setarr(users)
    console.log(users);
    let x = users.length
    let Dispatch = useAppDispatch()
    const getData = async () => {
        axios.get(`http://localhost:3001/uplode/Shirtsproduct/1/${users.length}`, {
        }).then((response) => {
            if (response.data.length < 1) {
                setend(false)
            }
            Dispatch(addItem(response.data))
        }).catch((err: any) => {
            console.log(err);
            console.log(err.response.data.error);
        })
    };


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const bodyHeight = document.body.clientHeight;
            const scrollPercentage = (scrollPosition / (bodyHeight - windowHeight)) * 100;

            if (scrollPercentage > 95) {
                if (end === true) {
                    console.log('aaa');

                    getData()
                }


            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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