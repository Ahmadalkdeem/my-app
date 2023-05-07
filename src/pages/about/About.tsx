import { useEffect } from 'react';
import css from './css.module.scss'
import Card from 'react-bootstrap/Card';
import { Helmet } from "react-helmet";

function Aboutt() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Helmet>
                <title>מי אנחנו? | חנות האופנה המובילה באינטרנט
                </title>
                <meta name="description" content="פעילותנו מתמקדת במכירת מגוון רחב של אופנה לגברים ונשים, כולל מכנסיים, נעליים וחולצות. הצטרפו אלינו עכשיו ותהיו מרוצים!
" />
                <meta name="keywords" content="מכנסיים, נעליים, חולצות, אופנה, חנות, אינטרנט, קניות" />
            </Helmet>
            <div className={css.div}>
                <div className={css.mydiv}>

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzV_u0UjwQds2dccWrlW8TOF3RoJDRZ0-3Gv-7FUxIA&s' alt="car" className={css.myimg} />
                    <div className='pt-2'>
                        <p className={css.myp}>
                            MTBrands היא רשת חנויות בגדים מובילה המציעה מבחר רחב של בגדים איכותיים ממותגים מובילים בתחום האופנה. החנויות של MTBrands ממוקמות במרכזי קניות ובקניונים מובילים ברחבי הארץ, ומציעות ללקוחותיהן את החוויה הקנייתית הטובה והנוחה ביותר.

                        </p>
                        <p className={css.myp}>
                            בכל חנות של MTBrands תוכלו למצוא מבחר רחב של בגדים עם סגנונות שונים לכל הגילאים והמינים, כגון חולצות, מכנסיים, שמלות, חצאיות, ועוד. בנוסף, החנויות מציעות אביזרים והנעלה שמשלבים עיצוב מהמם עם נוחות ואיכות מעולה.
                        </p>
                    </div>
                </div>
                <div className={css.div3}>
                    <p className={css.myp}>
                        המוצרים של MTBrands נבדקים בקפידה כדי להבטיח את איכותם הגבוהה, ולכן רוב הבגדים נעשים מחומרים איכותיים ונשמעים. חנויות MTBrands מתחייבות לספק ללקוחותיהן את המוצרים הטובים ביותר, ולכן כל הבגדים מגיעים עם אחריות והחזרות ניתנות לפי התנאים המפורטים במדיניות החזרות של החנויות.
                    </p>
                    <p className={css.myp}>
                        בסה"כ, MTBrands היא רשת חנויות בגדים מובילה שמתמקדת באיכות הבגדים ומציעה ללקוחותיה את המוצרים הטובים ביותר, ע
                    </p>
                </div>

                {/* <div className='d-flex justify-content-around align-items-center flex-wrap w-100 g-3'>

<Card
style={{ width: '18rem' }} className={`d-flex flex-column justify-content-center  align-items-center border-0 ${css.card}`}>
<Card.Img className={css.ImgCard} variant="top" src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__480.jpg" />
<Card.Body className={css.bodycard}>
<Card.Title className='text-center'>Card Title</Card.Title>
<Card.Text className='text-center'>
Some quick example text to build on the card title and make up the
bulk of the card's content.
</Card.Text>
</Card.Body>
</Card>
<Card
style={{ width: '18rem' }} className={`d-flex flex-column justify-content-center  align-items-center border-0 ${css.card}`}>
<Card.Img className={css.ImgCard} variant="top" src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__480.jpg" />
<Card.Body className={css.bodycard}>
<Card.Title className='text-center'>Card Title</Card.Title>
<Card.Text className='text-center'>
Some quick example text to build on the card title and make up the
bulk of the card's content.
</Card.Text>
                    </Card.Body>
                </Card>

                
                
            </div> */}

            </div>
        </>
    )
}

export default Aboutt