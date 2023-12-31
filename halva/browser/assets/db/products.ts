const  products = [{
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
img: '/assets/images/mereng.jpg'

},
{
  id: Date.now().toString(16),
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
  img: '/assets/images/tri-shokolada.jpg'
  
  }
]

export default products