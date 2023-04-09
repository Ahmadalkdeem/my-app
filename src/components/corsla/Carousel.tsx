import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { AiFillBackward, AiFillForward } from "react-icons/ai";
import css from './css.module.scss'
import './mycss.css'
const MYCarousel = () => {
    return (
        <Carousel interval={null} indicators={false} nextIcon={<AiFillForward size={50} />} prevIcon={<AiFillBackward size={50} />} dir='ltr' className={`w-100 d-flex ${css.corsla}`}  >
            {/* <Carousel.co className='border-1 bg-danger' /> */}
            <Carousel.Item>
                <img
                    className={css.Imgcorsla}
                    src={`https://www.shelvingdesignsystems.com/hs-fs/hub/218229/file-2413766226-jpg/Gallery/cs_pants-store_03.jpg`}
                    alt="First slide"
                />
                <Carousel.Caption className={css.Caption}>
                    <h3>بناطيل فريدة ومريحة</h3>
                    <p>اختر من بين تشكيلتنا الواسعة من البناطيل لتحصل على إطلالة ساحرة ومميزة في أي وقت ومناسبة.</p>
                    <button className={css.btncorsla}>לקניה</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={css.Imgcorsla}
                    src={`https://cdn.pixabay.com/photo/2017/06/21/20/51/tshirt-2428521__480.jpg`}
                    alt="First slide"
                />
                <Carousel.Caption className={css.Caption}>
                    <h3>بناطيل فريدة ومريحة</h3>
                    <p>اختر من بين تشكيلتنا الواسعة من البناطيل لتحصل على إطلالة ساحرة ومميزة في أي وقت ومناسبة.</p>
                    <button className={css.btncorsla}>לקניה</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={css.Imgcorsla}
                    src={`https://whatson.melbourne.vic.gov.au/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxsWXpaak9UTXlOaTB4WXpsakxUUTJOemd0T1dKaE5pMHdOakF3TkRBek5HTTJPR0VHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--74b1bf51a80a623ed3cb65812da642be10371655/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFMb0Eya0NXQUk9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--5c7b32c6a74ee88f2f4469ce3a4ae709d1994efe/142fd9c0-f786-4b60-a6ec-955ebbdae332.jpg`}
                    alt="First slide"
                />
                <Carousel.Caption className={css.Caption}>
                    <h3>بناطيل فريدة ومريحة</h3>
                    <p>اختر من بين تشكيلتنا الواسعة من البناطيل لتحصل على إطلالة ساحرة ومميزة في أي وقت ومناسبة.</p>
                    <button className={css.btncorsla}>לקניה</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default MYCarousel