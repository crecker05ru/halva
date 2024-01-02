import { Product } from "../../app/shared/product"

const  products:Product[] = [{
id: Date.now().toString(16),
title: 'Меренговый рулет',
description: 'Нежный и воздушный, словно сделан из облаков. Легкая кислинка в начинке прекрасно оттеняет сладость меренги. Это совсем не похоже на безе.',
price: 700,
weight: 1200,
nutritions: 
  {
    kKal: 579,
    proteins: 7,
    fats: 26,
    carbs: 80
  },
img: './assets/images/mereng.jpg'

},
{
  id: (Date.now() - 2).toString(16),
  title: 'Три шоколада',
  description: 'Невероятно вкусный торт! Нежный, с ярко выраженным вкусом шоколада — оценят и взрослые, и дети. А уж про шоколадоголиков вообще молчу )',
  price: 1300,
  weight: 1500,
  nutritions: 
    {
      kKal: 988,
      proteins: 16,
      fats: 68,
      carbs: 79
    },
  img: './assets/images/tri-shokolada.jpg'
  },{
    id: (Date.now() - 3).toString(16),
    title: 'Торт Красный бархат',
    description: 'Красные бархатные коржи с творожным кремом играют ванильно-молочными нотками сладкого послевкусия.',
    price: 1300,
    weight: 1500,
    nutritions: 
      {
        kKal: 988,
        proteins: 16,
        fats: 68,
        carbs: 79
      },
    img: './assets/images/krasniy-barhat.JPG'
    },{
      id: (Date.now() - 4).toString(16),
      title: 'Медовик',
      description: 'Воздушные коржи со сладким ароматом цветочного меда и нежный сливочно-сметанный крем с добавлением вареной сгущенки.Оформлен медово-бисквитной крошкой и декоративной сахарной пудрой и декоративной сахарной пудрой',
      price: 900,
      weight: 1500,
      nutritions: 
        {
          kKal: 988,
          proteins: 16,
          fats: 68,
          carbs: 79
        },
      img: './assets/images/medovik.JPG'
      },{
        id: (Date.now() - 5).toString(16),
        title: 'Венский пирог',
        description: '',
        price: 800,
        weight: 1500,
        nutritions: 
          {
            kKal: 988,
            proteins: 16,
            fats: 68,
            carbs: 79
          },
        img: './assets/images/venski-pirog.JPG'
        },{
          id: (Date.now() - 6).toString(16),
          title: 'Курагавая каша',
          description: '',
          price: 300,
          weight: 1500,
          nutritions: 
            {
              kKal: 988,
              proteins: 16,
              fats: 68,
              carbs: 79
            },
          img: './assets/images/kuragovaya-casha.HEIC'
          }
]

export default products