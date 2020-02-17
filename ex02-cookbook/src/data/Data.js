// Data borrowed from http://przepisy.pl

const data = {
    breakfasts : [
        {
            id: 1,
            category: 'Śniadanie',
            title: 'jajecznica z pomidorami',
            description: 'Jakiś opis tu musi być',
            ingredients: ['jajka 4szt.', 'Przyprawy (pieprz, sół)', 'Masło 1 łyżka', 'pomidor 1szt.'],
            steps: '',
            time: 30,
            difficulty: 1,
            image: 'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/jajecznica-z-pomidorami.jpg',
        },
        {
            id: 2,
            category: 'Śniadanie',
            title: 'placki owsiane',
            description: 'Jakiś opis tu musi być',
            ingredients: ['płatki owsiane 150g', 'banan 1szt.', 'mleko 0,5szklanki', 'jajko 1szt.', 'olej do smażenia 0,5 szklanki', 'Cynamon z Wietnamu Knorr 1łyżeczka', 'rodzynki 2 łyżki'],
            time: 30,
            steps: '',
            difficulty: 2,
            image: 'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/placki-owsiane.jpg',
        },
        {
            id: 3,
            category: 'Śniadanie',
            title: 'francuskie tosty serowe',
            description: 'Jakiś opis tu musi być',
            ingredients: ['pieczywo tostowe 6szt.', 'Rama', 'Delikat przyprawa uniwersalna Knorr 3 łyżki', 'jajko 2szt.', 'ser żółty 80g', 'natka pietruszki 0,5 pęczka'],
            time: 15,
            steps: '',
            difficulty: 1,
            image: 'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/francuskie-tosty-serowe.jpg',
        },
        {
            id: 4,
            category: 'Śniadanie',
            title: 'omlet z kurczakiem i brokułami',
            description: 'Jakiś opis tu musi być',
            ingredients: ['filet z kurczaka 1szt.', 'Przyprawa do kurczaka Knorr 1 opakowanie', 'mały brokuł 1szt.', 'jajko 10szt.', 'oliwa z oliwek', 'masło'],
            time: 30,
            steps: '',
            difficulty: 1,
            image: 'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/omlet-z-kurczakiem-i-brokulami592132.jpg',
        },
        {
            id: 5,
            category: 'Śniadanie',
            title: 'jajka faszerowane szpinakiem',
            description: 'Jakiś opis tu musi być',
            ingredients: ['jajka 12szt.', 'Bulion na włoszczyźnie Knorr 1szt.', 'swieży szpinak 200g', 'starty ser żółty 3 łyżki', 'Papryka słodka z Hiszpanii Knorr 1 łyżeczka', 'Gałka muszkatołowa z Indonezji Knorr 0,5 łyżeczki', 'masło 20g', 'kiełki 1 łyżeczka'],
            time: 30,
            steps: '',
            difficulty: 1,
            image: 'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/jaja-faszerowane-szpinakiem-2.jpg'
        }
        ],
    dinners: [
        {
            id: 1,
            category: 'Obiad',
            title: 'makaron w sosie pieczarkowym',
            description: 'Jakiś opis tu musi być',
            ingredients: ['filety z piersi kurczaka 500g', 'Fix Świderki z kurczakiem w sosie serowym Knorr 1 opakowanie', 'makaron tagliatelle 250g', 'pieczarki 500g', 'mleko 150ml', 'cebula 1szt.', 'musztarda 2 łyżki', 'świeża natka pietruszki 2 łyżki', 'olej rzepakowy 1 łyżka'],
            time: 20,
            steps: '',
            difficulty: 1,
            image: 'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/cheesy-chicken-and-pasta_a9727.jpg'
        },
        {
            id: 2,
            category: 'Obiad',
            title: 'pomidorowa z makaronem',
            description: 'Jakiś opis tu musi być',
            ingredients: ['pomidory z puszki bez skóry 400g', 'Rosół z kury Knorr 2szt.', 'makaron np. świderki 150g', 'cebula 1szt.', 'ząbek czosnku 2szt.', 'natka pietruszki lub koperek 1 łyżka', 'oliwa 1 łyżka'],
            time: 90,
            steps: '',
            difficulty: 2,
            image: 'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/tomato-soup_a85673.jpg'
        },
    ],
    suppers: [
        {
            id: 1,
            category: 'Kolacja',
            title: 'naleśniki',
            description: 'Ciasto na słodkie naleśniki',
            ingredients: ['mąka pszenna 1 szklanka', 'jajka 2szt.', 'mleko 0,5 szklanki', 'woda mineralna 0,5 szklanki', 'cukier waniliowy 1 łyżka', 'miód 1 łyżka', 'olej 30ml', 'sół 1 szczypta'],
            time: 15,
            steps: '',
            difficulty: 1,
            image: 'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/ciasto-nalesnikowe-na-slodko.jpg'
        },
        {
            id: 2,
            category: 'Kolacja',
            title: 'kapusta pekińska z jajkiem i kukurydzą',
            description: 'Jakiś opis tu musi być',
            ingredients: ['kapusta pekińska 1szt.', 'Sos sałatkowy czosnkowy Knorr 1 opakowanie', 'papryka czerwona 1 sztuka', 'kukurydza 1 opkaowanie', 'jajka na twardo 3 sztuki', 'pieczarki konserwowe 1 opakowanie', 'Majonez Hellmanns Babuni 4 łyżki', 'natka pietruszki do dekoracji'],
            time: 15,
            steps: '',
            difficulty: 1,
            image: 'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/kapusta-pekinska-z-jajkiem-i-kukurydza.jpg'
        },
    ]
}


// object sample
/*
{
    id: 1,
    category: 'Obiad',
    title: '',
    description: 'Jakiś opis tu musi być',
    ingredients: [],
    time: 20,
    steps: '',
    difficulty: 1,
    image: 'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/cheesy-chicken-and-pasta_a9727.jpg'
},
*/
export default data;