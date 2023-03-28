
import Card from 'react-bootstrap/Card';
import css from './card.module.scss'

import { Cardtype } from '../../@types/Mytypes';
import { Link, useNavigate } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Carousel from 'react-bootstrap/Carousel';

function MyCard(props: any) {
    const navigate = useNavigate();
    return (
        <Card className={css.MyCard}>

            <div className={`d-flex justify-content-between ${css.myediticon}`}>
                <Link className={css.mmlink} to='/'>    <AiFillDelete className={css.Icons} size={30} />
                </Link >
                <Link className={css.mmlink} to='/'>    <AiFillEdit className={css.Icons} size={30} />
                </Link >
            </div>


            <Carousel indicators={false} dir="ltr" className={`${css.mycorsla}`}>

                {props?.src.map((e: any, i: number) =>
                    <Carousel.Item key={i} interval={100000000000000} >
                        <img
                            onClick={() => {
                                navigate(`/${props.category}/${props.category2}/${props._id}`);
                            }}
                            className={css.MyImg}
                            src={`${e}`}
                            alt="First slide"
                        />
                    </Carousel.Item>
                )}
            </Carousel>


            <Card.Body className={css.bodycard}>

                <Card.Title onClick={() => {
                    navigate(`/${props.category}/${props.category2}/${props._id}`);
                }} className={css.Mytitel}>{props.name}</Card.Title>
                <Card.Text onClick={() => {
                    navigate(`/${props.category}/${props.category2}/${props._id}`);
                }} className={css.Myp}>
                    {props.price}₪
                </Card.Text>
                <button className={css.mybtn}>ADD TO CART</button>
            </Card.Body>
        </Card>
    )
}

export default MyCard