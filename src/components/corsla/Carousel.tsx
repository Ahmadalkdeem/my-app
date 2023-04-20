import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { AiFillBackward, AiFillForward } from "react-icons/ai";
import css from './css.module.scss'
import './mycss.css'
const MYCarousel = () => {
    return (
        <Carousel interval={null} indicators={false} controls={false} nextIcon={<AiFillForward size={50} />} prevIcon={<AiFillBackward size={50} />} dir='ltr' className={`w-100 d-flex ${css.corsla}`}  >
            {/* <Carousel.co className='border-1 bg-danger' /> */}
            <Carousel.Item>
                <img
                    className={css.Imgcorsla}
                    src={`https://media.istockphoto.com/id/1255047767/photo/colorful-polo-t-shirt-stack-on-shelf-in-large-department-store-shop-copy-space-on-white-sign.jpg?b=1&s=170667a&w=0&k=20&c=aj-HtwlQGdA_Qzb-W3SkKbhOvRk1Z3WNOmaM1WXtJMk=`}
                    alt="First slide"
                />
                <Carousel.Caption className={css.Caption}>
                    <h3 className={css.h3}>גלה את הסטייל שלך</h3>
                    <p className={css.p}>חנות הבגדים המובילה עם המבחר הכי גדול של מוצרי אופנה</p>
                    <button className={css.btncorsla}>לקניה</button>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}

export default MYCarousel