import css from './css.module.scss'
import Card from 'react-bootstrap/Card';

function Aboutt() {
    return (
        <div className={css.div}>

            <img className={css.Img} src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/teaching.png" alt="" />

            <p className={css.P}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reprehenderit fugit, asperiores ullam repellat molestias molestiae impedit est inventore quas iusto, doloribus consectetur excepturi cum delectus ipsa laborum harum aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti harum fugit saepe officia iste debitis voluptatum sapiente at impedit culpa, autem aliquid aliquam iure magnam dolor quia accusamus inventore!</p>
            <p className={css.P}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsa provident repellat eveniet architecto culpa nulla laboriosam recusandae! Officia labore qui porro earum est nihil eius iure fuga repellendus temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat suscipit neque quis accusantium excepturi nam facilis minima vero illo modi, recusandae aut nemo rem impedit quam commodi distinctio inventore esse?</p>
            <div className='d-flex justify-content-around align-items-center flex-wrap w-100 g-3'>

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



            </div>
        </div>
    )
}

export default Aboutt