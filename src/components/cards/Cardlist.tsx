import React from 'react'
import MyCard from '../card/Card'
import css from './css.module.scss'
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Myslider from '../slider/Slider';
import MYCarousel from '../corsla/Carousel';

function Cardlist() {
    const { loading, users, error } = useAppSelector((s) => s.cardshirts);
    const { loading3, users3, error3 } = useAppSelector((s) => s.cardshose);
    const navigate = useNavigate();
    return (
        <>
            <MYCarousel />
            <Myslider />
            <h2 className={css.h2}>המוצרים החמים</h2>
            <Container className={`Container ${css.Container}`} fluid>
                <Row xs={2} sm={3} lg={4} xxl={5}>
                    {users.map((product: any, index: number) => (
                        <Col key={index} className="mt-2 p-1">
                            <MyCard key={index}
                                {...product} />
                        </Col>
                    ))}
                    {users.map((product: any, index: number) => (
                        <Col key={index} className="mt-2 p-1">
                            <MyCard key={index}
                                {...product} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container className={`Container ${css.Container}`} fluid>
                <Row xs={2} sm={3} lg={4} xxl={5}>
                    {users3.map((product: any, index: number) => (
                        <Col key={index} className="mt-2 p-1">
                            <MyCard key={index}
                                {...product} />
                        </Col>
                    ))}

                </Row>
            </Container>


            <div className={css.Div}>
                <div onClick={() => {
                    navigate(`/Shirts`);
                }} className={`${css.divlink}`}>
                    <img className={css.Img} src="https://media.istockphoto.com/id/1125110782/photo/young-man-isolated-on-gray-textured-wall-smiling-while-pointing-with-index-finger-to-black-t.jpg?s=612x612&w=0&k=20&c=NVobF35a4ogVyf9PrSCIwASDL2vsH9evJiYYGXSBKKI=" alt="" />

                    <div className='d-flex justify-content-center'>

                        <button className={css.btn}>חולצות</button>
                    </div>
                </div>
                <div onClick={() => {
                    navigate(`/pants`);
                }} className={`${css.divlink}`}>
                    <img className={css.Img} src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/1968251_MEDIUMOZONEWASH?$pra_pdp@2x$&v=1679388927" alt="" />
                    <div className='d-flex justify-content-center'>

                        <button className={css.btn}>מכנסיים</button>
                    </div>

                </div>
                <div onClick={() => {
                    navigate(`/shoes`);
                }} className={`${css.divlink}`}>
                    <img className={css.Img} src="https://preview.colorlib.com/theme/winter/img/feature_3.png" alt="" />
                    <div className='d-flex justify-content-center'>

                        <button className={css.btn}>נעליים</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cardlist