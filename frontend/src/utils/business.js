export const businessAnchors = [
  {
    id: 1,
    slug: 'companies-types',
    title: {
      ru: 'Виды компаний',
      en: 'Types of companies'
    }
  },
  {
    id: 2,
    slug: 'open-business',
    title: {
      ru: 'Открытие бизнеса',
      en: 'Starting a business'
    }
  },
  {
    id: 3,
    slug: 'licenses-types',
    title: {
      ru: 'Виды лицензий',
      en: 'Types of licenses'
    }
  },
]

export const companiesTypes = {
  ru: [
    {
      id: 1,
      href: 'companies-types/local-companies',
      name: 'Local (Main Land) Companies – Местные компании',
      description: `Местные (материковые, оншорные) компании регистрируются на материковой части ОАЭ (не в свободных зонах) и предназначены для полномасштабной деятельности в ОАЭ. Материковые компании могут осуществлять свою деятельность как на территории ОАЭ, так и за ее пределами.
      С 1 июня 2021 года местные компании в ОАЭ могут полностью принадлежать иностранцам.`
    },
    {
      id: 2,
      href: 'companies-types/companies-in-ftz',
      name: 'Companies in FTZ – (Оншорные компании)',
      description: `Оншорные компании, деятельность в которых ограничена свободной экономической зоной, в которой они зарегистрированы. Такие фирмы могут на 100% принадлежать иностранным гражданам, вести международную деятельность, арендовать помещения, расположенные в СЭЗ, претендовать на определенное количество резидентских виз (в зависимости от рабочей площади) и т.д. Главный недостаток такого типа предприятий – невозможность выводить свой бизнес в другие регионы ОАЭ за пределы СЭЗ.`
    },
    {
      id: 3,
      href: 'companies-types/offshore-companies',
      name: 'Offshore companies – (Офшорные компании)',
      description: `Оффшорные компании, которые, получая юридический адрес в СЭЗ ОАЭ, не могут вести свою деятельность даже в ее пределах, не говоря уже о других территориях Арабских Эмиратов. Такой тип компании чаще всего выбирают те, кто имеет налаженный бизнес у себя дома, но стремится сократить налоговые расходы и получить возможность открыть банковских счет в ОАЭ. Ни арендовать помещения, ни рассчитывать на резидентские визы владельцы таких предприятий не могут.`
    },
  ],
  en: [
    {
      id: 1,
      href: 'companies-types/local-companies',
      name: 'Local (Main Land) Companies',
      description: `Local (mainland, onshore) companies are registered in the mainland of the UAE (not in free zones) and are intended for full-scale activities in the UAE. Mainland companies can operate both in the UAE and abroad.
      From June 1, 2021, local companies in the UAE can be fully owned by foreigners.`
    },
    {
      id: 2,
      href: 'companies-types/companies-in-ftz',
      name: 'Companies in FTZ',
      description: `Onshore companies whose activities are limited by the free economic zone in which they are registered. Such firms can be 100% owned by foreign citizens, conduct international activities, rent premises located in the FEZ, apply for a certain number of resident visas (depending on the working area), etc. The main disadvantage of this type of enterprise is the inability to bring their business to other regions of the UAE outside the FEZ.`
    },
    {
      id: 3,
      href: 'companies-types/offshore-companies',
      name: 'Offshore companies',
      description: `Offshore companies that, having received a legal address in the UAE FEZ, cannot conduct their activities even within its borders, not to mention other territories of the Arab Emirates. This type of company is most often chosen by those who have an established business at home, but seek to reduce tax costs and get the opportunity to open a bank account in the UAE. The owners of such enterprises cannot rent premises or count on resident visas.`
    },
  ]
}

export const companiesForms = {
  ru: [
    {
      id: 1,
      title: 'Limited Liability Company - компания с ограниченной ответственностью',
      content: `<p class="accordion-item__content-item">Публичное акционерное общество в ОАЭ – это компания, капитал которой разделен на равные и оборотные акции. Учредители подписываются на часть таких акций, а остальные акции предлагаются для публичной подписки. Учредителями публичного акционерного общества могут быть не менее пяти лиц (за исключением случаев преобразования общества иных организационно-правовых форм в публичное общество).</p>`
    },
    {
      id: 2,
      title: 'Private Joint Stock Companies – частная акционерная компания',
      content: `<p class="accordion-item__content-item">Публичное акционерное общество в ОАЭ – это компания, капитал которой разделен на равные и оборотные акции. Учредители подписываются на часть таких акций, а остальные акции предлагаются для публичной подписки. Учредителями публичного акционерного общества могут быть не менее пяти лиц (за исключением случаев преобразования общества иных организационно-правовых форм в публичное общество).</p>`
    },
    {
      id: 3,
      title: 'Public Joint Stock Companies – публичная акционерная компания',
      content: `<p class="accordion-item__content-item">Публичное акционерное общество в ОАЭ – это компания, капитал которой разделен на равные и оборотные акции. Учредители подписываются на часть таких акций, а остальные акции предлагаются для публичной подписки. Учредителями публичного акционерного общества могут быть не менее пяти лиц (за исключением случаев преобразования общества иных организационно-правовых форм в публичное общество).</p>`
    },
    {
      id: 4,
      title: 'Joint Liability Company – общество с совместной ответственностью',
      content: `<p class="accordion-item__content-item">Публичное акционерное общество в ОАЭ – это компания, капитал которой разделен на равные и оборотные акции. Учредители подписываются на часть таких акций, а остальные акции предлагаются для публичной подписки. Учредителями публичного акционерного общества могут быть не менее пяти лиц (за исключением случаев преобразования общества иных организационно-правовых форм в публичное общество).</p>`
    },
    {
      id: 5,
      title: 'Limited Partnerships (or Simple Commandite Companies) – простое коммандитное товарищество',
      content: `<p class="accordion-item__content-item">Публичное акционерное общество в ОАЭ – это компания, капитал которой разделен на равные и оборотные акции. Учредители подписываются на часть таких акций, а остальные акции предлагаются для публичной подписки. Учредителями публичного акционерного общества могут быть не менее пяти лиц (за исключением случаев преобразования общества иных организационно-правовых форм в публичное общество).</p>`
    },
  ],
  en: [
    {
      id: 1,
      title: 'Limited Liability Company',
      content: `<p class="accordion-item__content-item">A public joint stock company in the UAE is a company whose capital is divided into equal and negotiable shares. The founders subscribe to some of these shares, and the rest of the shares are offered for public subscription. At least five persons may be founders of a public joint-stock company (except in cases of transformation of a company of other organizational and legal forms into a public company).</p>`
    },
    {
      id: 2,
      title: 'Private Joint Stock Companies',
      content: `<p class="accordion-item__content-item">A public joint stock company in the UAE is a company whose capital is divided into equal and negotiable shares. The founders subscribe to some of these shares, and the rest of the shares are offered for public subscription. At least five persons may be founders of a public joint-stock company (except in cases of transformation of a company of other organizational and legal forms into a public company).</p>`
    },
    {
      id: 3,
      title: 'Public Joint Stock Companies',
      content: `<p class="accordion-item__content-item">A public joint stock company in the UAE is a company whose capital is divided into equal and negotiable shares. The founders subscribe to some of these shares, and the rest of the shares are offered for public subscription. At least five persons may be founders of a public joint-stock company (except in cases of transformation of a company of other organizational and legal forms into a public company).</p>`
    },
    {
      id: 4,
      title: 'Joint Liability Company',
      content: `<p class="accordion-item__content-item">A public joint stock company in the UAE is a company whose capital is divided into equal and negotiable shares. The founders subscribe to some of these shares, and the rest of the shares are offered for public subscription. At least five persons may be founders of a public joint-stock company (except in cases of transformation of a company of other organizational and legal forms into a public company).</p>`
    },
    {
      id: 5,
      title: 'Limited Partnerships (or Simple Commandite Companies)',
      content: `<p class="accordion-item__content-item">A public joint stock company in the UAE is a company whose capital is divided into equal and negotiable shares. The founders subscribe to some of these shares, and the rest of the shares are offered for public subscription. At least five persons may be founders of a public joint-stock company (except in cases of transformation of a company of other organizational and legal forms into a public company).</p>`
    },
  ]
}

export const businessOpen = {
  ru: [
    {
      title: 'Шаги по открытию бизнеса на материковой части ОАЭ',
      list: [
        {
          item: 'Определить характер вашей предпринимательской деятельности'
        },
        {
          item: 'Определить юридическую структуру компании'
        },
        {
          item: 'Регистрация фирменного наименования'
        },
        {
          item: 'Подача заявки на первоначальное одобрение'
        },
        {
          item: 'Создание МОА'
        },
        {
          item: 'Выбрать местоположение бизнеса'
        },
        {
          item: 'Подать заявку на получение дополнительных правительственных разрешений'
        },
        {
          item: 'Подать необходимые документы'
        },
        {
          item: 'Оплата сборов и получение лицензии'
        },
        {
          item: 'Регистрация компании на материковой части ОАЭ'
        },
      ]
    },
    {
      title: 'Шаги по открытию бизнеса на свободной экономической зоне',
      list: [
        {
          item: 'Определить характер вашей предпринимательской деятельности'
        },
        {
          item: 'Определить юридическую структуру компании'
        },
        {
          item: 'Регистрация фирменного наименования'
        },
        {
          item: 'Выбрать местоположение бизнеса'
        },
        {
          item: 'Получение первоначального одобрения'
        },
        {
          item: 'Регистрация компании и оплата пошлин'
        },
      ]
    },
  ],
  en: [
    {
      title: 'Steps to open a business in the UAE Mainland',
      list: [
        {
          item: 'Determine the nature of your business activities'
        },
        {
          item: 'Determine the legal structure of the company'
        },
        {
          item: 'Registration of a company name'
        },
        {
          item: 'Applying for initial approval'
        },
        {
          item: 'Creating a MOA'
        },
        {
          item: 'Choose a business location'
        },
        {
          item: 'Apply for additional government permits'
        },
        {
          item: 'Submit the necessary documents'
        },
        {
          item: 'Payment of fees and obtaining a license'
        },
        {
          item: 'Company registration in the UAE mainland'
        },
      ]
    },
    {
      title: 'Steps to open a business in the free economic zone',
      list: [
        {
          item: 'Determine the nature of your business activities'
        },
        {
          item: 'Determine the legal structure of the company'
        },
        {
          item: 'Registration of a company name'
        },
        {
          item: 'Choose a business location'
        },
        {
          item: 'Getting initial approval'
        },
        {
          item: 'Company registration and payment of fees'
        },
      ]
    },
  ]
}