import type { Product } from './types';

export const products: Product[] = [
  {
    title: 'Green Tea',
    imgUrl:
      'https://images.pexels.com/photos/6545346/pexels-photo-6545346.jpeg?auto=compress&cs=tinysrgb&w=400',
    desc: 'Fresh green tea leafs.',
    price: 3.5,
    category: 'tea',
    id: 1,
  },
  {
    title: 'Fresh Smoothie',
    imgUrl:
      'https://images.pexels.com/photos/4443494/pexels-photo-4443494.jpeg?auto=compress&cs=tinysrgb&w=400',
    desc: 'Smoothie from seasonal fruits.',
    price: 5.5,
    category: 'smoothie',
    id: 2,
  },
  {
    title: 'Coffee',
    imgUrl:
      'https://images.pexels.com/photos/2616172/pexels-photo-2616172.jpeg?auto=compress&cs=tinysrgb&w=400',
    desc: 'Coffee from finest Arabica beans',
    price: 3.5,
    category: 'coffee',
    id: 3,
  },
  {
    title: 'Lavender-lemon Tea',
    imgUrl:
      'https://images.pexels.com/photos/1772124/pexels-photo-1772124.jpeg?auto=compress&cs=tinysrgb&w=400',
    desc: 'Delicious black tea with lavender and lemon',
    price: 3.5,
    category: 'tea',
    id: 4,
  },
  {
    title: 'sandwich',
    imgUrl:
      'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400',
    desc: `Freshly made sandwich - ask for today's ingredietns`,
    price: 4.5,
    category: 'lunch',
    id: 5,
  },
];
