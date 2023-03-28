import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import css from './card.module.scss'
import { BsFillCartCheckFill } from "react-icons/bs";
import { Cardtype } from '../../@types/Mytypes';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function MyCard(props: Cardtype) {

    return (
        <Link className={css.mmlink} to='/'>
            <Card className={css.MyCard}>
                <div className={`d-flex justify-content-between ${css.myediticon}`}>
                    <Link className={css.mmlink} to='/about'>    <AiFillDelete className={css.Icons} size={30} />
                    </Link >
                    <Link className={css.mmlink} to='/about'>    <AiFillEdit className={css.Icons} size={30} />
                    </Link >

                </div>
                <Card.Img className={`${css.MyImg}`} variant="top" src={props.src} alt={props.name} />
                <Card.Body>
                    <Card.Title className={css.Mytitel}>{props.name}</Card.Title>
                    <Card.Text className={css.Myp}>
                        {props.description}
                    </Card.Text>
                    <div className={css.MyEndcard}>
                        <BsFillCartCheckFill className={css.MyIcon} size={35} />
                        <Button className={`${css.MyBtn} bg-dark border-0 `}>{props.price}$</Button>
                    </div>
                </Card.Body>
            </Card>
        </Link >
    )
}

export default MyCard