import openingBusinessImg from '../assets/images/services/opening-a-business.png';
import openingAccountImg from '../assets/images/services/opening-a-bank-account.png';
import residencyImg from '../assets/images/services/UAE-Residency-Visa.png';
import legalSupportImg from '../assets/images/services/legal-support.png';
import customerSupportImg from '../assets/images/services/customer-support.png';

export const services = [
  {
    id: 1,
    description: [
      {
        id: 1,
        text: 'There are various types of legal entities available in this region. For example, LLCs, PJSCs, JSCs, sole proprietorships, and branches.'
      },
      {
        id: 2,
        text: 'In addition to the legal structure, all businesses are also divided into "territorial locations", which serve as a gateway to the Arab Emirates market. Choosing the right location lays the foundation for future activities and potential business opportunities.'
      }
    ],
    href: '#',
    category: 'Business',
    number: '01',
    title: 'Opening a business',
    img: openingBusinessImg
  },
  {
    id: 2,
    description: [
      {
        id: 1,
        text: 'Having a bank account upon registering a company in the UAE will give the business credibility, trust from customers and partners, as well as provide access to international markets.'
      },
      {
        id: 2,
        text: 'When ordering the service, we will make a personal account for free'
      }
    ],
    href: '#',
    category: 'Account',
    number: '02',
    title: 'Opening a bank account',
    img: openingAccountImg
  },
  {
    id: 3,
    description: [
      {
        id: 1,
        text: 'Obtaining a UAE residence visa allows you to live and work in the UAE, travel freely within the country, own a business and open a local bank account, among other benefits. It is a mandatory requirement for all foreigners who wish to stay in the UAE for an extended period of time.'
      },
    ],
    href: '#',
    category: 'Residency',
    number: '03',
    title: 'UAE Residency (Visa)',
    img: residencyImg
  },
  {
    id: 4,
    description: [
      {
        id: 1,
        text: 'We provide assistance with the preparation of contracts, agreements, and other internal documents based on the terms of reference provided by the client and in accordance with the UAE legal framework.'
      },
      {
        id: 2,
        text: 'We can also advise you on any issues related to setting up a company and conducting business in Dubai, UAE.'
      }
    ],
    href: '#',
    category: 'Law',
    number: '04',
    title: 'Legal support',
    img: legalSupportImg
  },
  {
    id: 5,
    description: [
      {
        id: 1,
        text: 'Our managers speak three languages: Russian, English, and Arabic. We can help you with any issues you may have and accompany you to government agencies and banks if needed.'
      },
    ],
    href: '#',
    category: 'Support',
    number: '05',
    title: 'Customer support',
    img: customerSupportImg
  },
]