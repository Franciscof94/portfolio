import Drinks from '../Images/drinks.png';
import Pinasco from '../Images/pinasco.png';
import Tinder from '../Images/tinder.png';
import Netflix from '../Images/netflix.png';
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { FaNode } from "@react-icons/all-files/fa/FaNode";
import { SiRedux } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiMaterialui } from 'react-icons/si'



const img = [
    {
      id: 0,
      alt: 'Drinks',
      url: `${Drinks}`,
      title: 'Drinks Store',
      icons : [
      {
        icon: <FaHtml5 fontSize='32' color='#DD4B25' />,
        name: 'HTML'
      },
      {
        icon: <FaCss3Alt fontSize='32' color='#2173F7' />,
        name: 'CSS'
      },
      {
        icon: <SiJavascript fontSize='32' color='#EFD81D' />,
        name: 'JavaScript'
      }
      ], 
      description: 'Drink Shop - Final project for the JavaScript course at CoderHouse',
      link: 'https://franciscof94.github.io/E-commerce/index.html'
    },
    {
      id: 1,
      alt: 'Pinasco',
      url: `${Pinasco}`,
      title: 'Maximo Pinasco(in process)',
      icons : [
          {
            icon: <FaReact fontSize='32' color='#DD4B25' />,
            name: 'HTML'
          },
          {
            icon: <FaCss3Alt fontSize='32' color='#2173F7' />,
            name: 'CSS'
          },
          {
            icon: <SiJavascript fontSize='32' color='#EFD81D' />,
            name: 'JavaScript'
          },
          {
            icon: <FaNode fontSize='32' color='#313131' />,
            name: 'Node Express'
          }
      ],
      description: 'Web page (in process) for the Maximo Pinasco car dealership made with HTML, CSS and JavaScript, apart from using Node express and Nodemailer for contact forms.',
      link: ''
    },
    {
      id: 2,
      alt: 'Tinder',
      url: `${Tinder}`,
      title: 'Tinder Clone',
      icons : [
        {
          icon: <FaReact fontSize='32' color='#00DBF7' />,
          name: 'React Js'
        },
        {
          icon: <SiMaterialui fontSize='32' color='#00AAF7' />,
          name: 'Materal UI'
        },
        {
          icon: <SiFirebase fontSize='32' color='#F7C52B' />,
          name: 'Firebase'
        },
        {
          icon: <SiRedux fontSize='32' color='#7248B5' />,
          name: 'Redux'
        }
        ],
      description: 'Tinder clone developed in React Js using Firebase, Redux and Material UI',
      link: 'https://clone-tinder-simpsons.netlify.app/' 
    },
    {
      id: 3,
      alt: 'Netflix',
      url: `${Netflix}`,
      title: 'Netflix Clone',
      icons : [
        {
          icon: <FaReact fontSize='32' color='#00DBF7' />,
          name: 'React Js'
        },
        {
          icon: <SiMaterialui fontSize='32' color='#00AAF7' />,
          name: 'Materal UI'
        },
        {
          icon: <SiFirebase fontSize='32' color='#F7C52B' />,
          name: 'Firebase'
        },
        {
          icon: <SiRedux fontSize='32' color='#7248B5' />,
          name: 'Redux'
        }
        ],
      description: 'Netflix clone developed in React Js using Firebase, Redux and Material UI',
      link: 'https://nifty-bhabha-c18f88.netlify.app/'
    }
  ]

  

  export default img