export const fullNameRegex = /^[\p{L}\p{M}\p{Zs}'-]+([\p{Zs}'-][\p{L}\p{M}\p{Zs}'-]+)*$/u;
export const valMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
export const valpassword = /^[a-zA-Z]\w{7,14}$/
export const valusername = /^[א-ת][א-תא-ת]{2,10}(?: [א-ת][א-תא-ת]*){0,10}$/
export const addressRegex = /^[\p{L}\p{M}\p{Zs}0-9]+$/u;
export const cityRegex = /^[\p{L}\p{M}\p{Zs}]+$/u;
export const isZipRegex = /^\d{7}(?:[-\s]\d{4})?$/;

let arr: any = [
    {
        src: ['https://www.renuar.co.il/dw/image/v2/BDRJ_PRD/on/demandware.static/-/Sites-renuar-master/default/dwf59f2fc1/images/large/423604901/423604901-1.jpg?sh=1000', 'https://www.renuar.co.il/dw/image/v2/BDRJ_PRD/on/demandware.static/-/Sites-renuar-master/default/dwe5a35da6/images/large/423604901/423604901-2.jpg?sh=1000'],
        description: `מק”ט 423604901
טישרט חלקה בגזרת בוקס טרנדית שנותנת פייט לחולצת הבייסיק הבנאלית, עשויה 100% כותנה עם צווארון ניקי ושרוולים קצרים.`,
        name: 'טישירט רומא',
        category: 'Shirts',
        category2: '',
        price: '299',
        price2: '399',
        stoke: [
            {
                size: 'S', colors: [
                    {
                        color: 'gray'
                    },
                    {
                        color: 'red'
                    },
                    {
                        color: 'blue'
                    }
                ]
            },
            {
                size: 'M', colors: [
                    {
                        color: 'gray'
                    },
                    {
                        color: 'red'
                    },
                    {
                        color: 'blue'
                    }
                ]
            },
        ]
    },
    {
        src: ['https://www.renuar.co.il/dw/image/v2/BDRJ_PRD/on/demandware.static/-/Sites-renuar-master/default/dw470e76c4/images/large/423601074/423601074-1.jpg?sh=1000', 'https://www.renuar.co.il/dw/image/v2/BDRJ_PRD/on/demandware.static/-/Sites-renuar-master/default/dw9259b2d4/images/large/423601074/423601074-2.jpg?sh=1000'],
        description: `מק”ט 423604901
טישרט חלקה בגזרת בוקס טרנדית שנותנת פייט לחולצת הבייסיק הבנאלית, עשויה 100% כותנה עם צווארון ניקי ושרוולים קצרים.`,
        name: `טישירט אדג' גוד לייף`,
        category: 'Shirts',
        category2: '',
        price: '299',
        price2: '399',
        stoke: [
            {
                size: 'S', colors: [
                    {
                        color: 'gray'
                    },
                    {
                        color: 'red'
                    },
                    {
                        color: 'blue'
                    }
                ]
            },
            {
                size: 'M', colors: [
                    {
                        color: 'gray'
                    },
                    {
                        color: 'red'
                    },
                    {
                        color: 'blue'
                    }
                ]
            },
        ]
    },
    {
        src: ['https://www.renuar.co.il/dw/image/v2/BDRJ_PRD/on/demandware.static/-/Sites-renuar-master/default/dwf59f2fc1/images/large/423604901/423604901-1.jpg?sh=1000', 'https://www.renuar.co.il/dw/image/v2/BDRJ_PRD/on/demandware.static/-/Sites-renuar-master/default/dwe5a35da6/images/large/423604901/423604901-2.jpg?sh=1000'],
        description: `מק”ט 423604901
טישרט חלקה בגזרת בוקס טרנדית שנותנת פייט לחולצת הבייסיק הבנאלית, עשויה 100% כותנה עם צווארון ניקי ושרוולים קצרים.`,
        name: 'טישירט רומא',
        category: 'Shirts',
        category2: '',
        price: '299',
        price2: '399',
        stoke: [
            {
                size: 'S', colors: [
                    {
                        color: 'gray'
                    },
                    {
                        color: 'red'
                    },
                    {
                        color: 'blue'
                    }
                ]
            },
            {
                size: 'M', colors: [
                    {
                        color: 'gray'
                    },
                    {
                        color: 'red'
                    },
                    {
                        color: 'blue'
                    }
                ]
            },
        ]
    }
]



