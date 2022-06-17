import Drinks from '../Images/drinks.png';
import Pinasco from '../Images/pinasco.png';
import Tinder from '../Images/tinder.png';
import Netflix from '../Images/netflix.png';
import Instagram from '../Images/instagram.png';
import Tienda from '../Images/tienda.png';
import Logifer from '../Images/logifer.png';
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { FaNode } from "@react-icons/all-files/fa/FaNode";
import { SiRedux } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiMaterialui } from 'react-icons/si'
import { SiStyledcomponents } from 'react-icons/si'



const img = [
    {
      id: 0,
      alt: 'Drinks',
      url: `${Drinks}`,
      title: 'E-commerce de bebidas',
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
      description: 'Tienda de bebidas - Proyecto final para el curso de Java Script en Coder House',
      link: 'https://franciscof94.github.io/E-commerce/index.html'
    },
    {
      id: 1,
      alt: 'Pinasco',
      url: `${Pinasco}`,
      title: 'Maximo Pinasco',
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
          },
          {
            icon: <FaNode fontSize='32' color='#313131' />,
            name: 'Node Express'
          }
      ],
      description: 'Pagina Web (en proceso) para el concesionario de autos Maximo Pinasco, desarrollada en HTML, CSS y JavaScript, aparte utilice Node Express y Nodemailer para el envio de formularios.',
      link: ''
    },
    {
      id: 2,
      alt: 'Tinder',
      url: `${Tinder}`,
      title: 'Clon de Tinder',
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
      description: 'Clon de Tinder desarrollado en React Js, utilizando tambien Firebase, Redux y Material UI',
      link: 'https://clone-tinder-simpsons.netlify.app/' 
    },
    {
      id: 3,
      alt: 'Netflix',
      url: `${Netflix}`,
      title: 'Clon de Netflix',
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
      description: 'Clon de Netflix desarrollado en React Js, utilizando tambien Firebase, Redux y Material UI',
      link: 'https://nifty-bhabha-c18f88.netlify.app/'
    },
    {
      id: 4,
      alt: 'Instagram',
      url: `${Instagram}`,
      title: 'Clon de Instagram',
      icons : [
        {
          icon: <FaReact fontSize='32' color='#00DBF7' />,
          name: 'React Js'
        },
        {
          icon: <SiStyledcomponents fontSize='32' color='#f5cd66' />,
          name: 'Styled Components'
        },
        {
          icon: <SiFirebase fontSize='32' color='#F7C52B' />,
          name: 'Firebase'
        },
        ],
      description: 'Clon de Instagram desarrollado en React Js, utilizando Styled Components para los estilos y Firebase para almacenar datos.',
      link: 'https://cloninstagram.netlify.app/'
    },
    {
      id: 5,
      alt: 'Tienda de productos(API Fake-Store)',
      url: `${Tienda}`,
      title: 'Tienda de productos(API Fake-store)',
      icons : [
        {
          icon: <FaReact fontSize='32' color='#00DBF7' />,
          name: 'React Js'
        },
        {
          icon: <SiStyledcomponents fontSize='32' color='#f5cd66' />,
          name: 'Styled Components'
        },
        {
          icon: <SiRedux fontSize='32' color='#7248B5' />,
          name: 'Redux'
        },
        ],
      description: 'Tienda de productos desarrollada en React Js con redux(filtrar productos, agregar productos al carrito, eliminarlosy contabilizarlos) y styled components para los estilos.',
      link: 'https://franciscof94.github.io/fake-store-react-redux'
    },
    {
      id: 6,
      alt: 'Web Ferraro Materiales',
      url: `${Logifer}`,
      title: 'Web Ferraro Materiales',
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
          icon: <SiRedux fontSize="32" color="#7248B5" />,
          name: 'Redux'
        },
        ],
      description: 'Pagina web de Ferraro Materiales desarrollada en React js con redux(filtrado de productos) y styled components para los estilos.',
      link: 'https://ferraromateriales.com.ar/'
    }
  ]

  

  export default img