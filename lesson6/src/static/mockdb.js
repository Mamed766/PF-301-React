import { IoHomeOutline } from 'react-icons/io5';
import { LuContact } from 'react-icons/lu';
import { FaBlogger } from 'react-icons/fa';
import { IoMdLogIn } from 'react-icons/io';

export const navbaritem = [
  {
    id: 1,
    name: 'Home',
    icon: <IoHomeOutline />,
    path: '/',
  },
  {
    id: 2,
    name: 'About',
    icon: <IoHomeOutline />,
    path: '/about',
  },
  {
    id: 3,
    name: 'Contact',
    icon: <LuContact />,
    path: '/contact',
  },
  {
    id: 4,
    name: 'Blog',
    icon: <FaBlogger />,
    path: '/blog',
  },
  {
    id: 5,
    name: 'Login',
    icon: <IoMdLogIn />,
    path: '/login',
  },
];

export const cardDb = [
  {
    id: 1,
    title: 'Card 1',
    description: 'Card 1 description',
    price: 100,
    image:
      'https://images.unsplash.com/photo-1721137287642-43b251bd6f00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'Card 2 description',
    price: 200,
    image:
      'https://images.unsplash.com/photo-1721041879224-ff011603ada5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'Card 3 description',
    price: 300,
    image:
      'https://images.unsplash.com/photo-1721058454660-19f3546d588c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'Card 4',
    description: 'Card 4 description',
    price: 400,
    image:
      'https://images.unsplash.com/photo-1720983627245-ca4a6913016f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D',
  },
];
