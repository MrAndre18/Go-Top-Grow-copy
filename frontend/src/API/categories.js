const data = [
  {
    "id": 26,
    "name": "Авиация",
    "slug": "aviatsiya",
    "tree_id": 1,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 23,
    "name": "Алкогольные напитки",
    "slug": "alkogolnyie-napitki",
    "tree_id": 2,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 15,
    "name": "Безопасность и охрана правопорядка",
    "slug": "bezopasnost-i-ohrana-pravoporyadka",
    "tree_id": 3,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 24,
    "name": "Благотворительность. Пожертвования и Исламские дела.",
    "slug": "blagotvoritelnost-pozhertvovaniya-i-islamskie-dela",
    "tree_id": 4,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 19,
    "name": "Внешнеэкономическая деятельность. Таможня",
    "slug": "vneshneekonomicheskaya-deyatelnost-tamozhnya",
    "tree_id": 6,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 3,
    "name": "Государство",
    "slug": "gosudarstvo",
    "tree_id": 7,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 8,
    "name": "Гражданское право",
    "slug": "grazhdanskoe-pravo",
    "tree_id": 8,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 4,
    "name": "Здравоохранение. Здоровье и спорт. Ветеринария.",
    "slug": "zdravoohranenie-zdorove-i-sport-veterinariya",
    "tree_id": 10,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 14,
    "name": "Информация и информатизация",
    "slug": "informatsiya-i-informatizatsiya",
    "tree_id": 11,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 20,
    "name": "Компании и Бизнес",
    "slug": "kompanii-i-biznes",
    "tree_id": 12,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 28,
    "name": "Награждение. Культура. Туризм.",
    "slug": "nagrazhdenie-kultura-turizm",
    "tree_id": 13,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 27,
    "name": "Налоги. Сборы.",
    "slug": "nalogi-sboryi",
    "tree_id": 14,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 1,
    "name": "Недвижимость и Cобственность",
    "slug": "nedvizhimost-i-cobstvennost",
    "tree_id": 15,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 29,
    "name": "Аренда",
    "slug": "arenda",
    "tree_id": 15,
    "level": 1,
    "parent_id": 1,
    "children": []
  },
  {
    "id": 68,
    "name": "Арендадатель",
    "slug": "arendadatel",
    "tree_id": 15,
    "level": 2,
    "parent_id": 29,
    "children": []
  },
  {
    "id": 67,
    "name": "Арендатор",
    "slug": "arendator",
    "tree_id": 15,
    "level": 2,
    "parent_id": 29,
    "children": []
  },
  {
    "id": 69,
    "name": "Субарендатор",
    "slug": "subarendator",
    "tree_id": 15,
    "level": 3,
    "parent_id": 67,
    "children": []
  },
  {
    "id": 56,
    "name": "Договор Аренды",
    "slug": "dogovor-arendyi",
    "tree_id": 15,
    "level": 2,
    "parent_id": 29,
    "children": []
  },
  {
    "id": 40,
    "name": "ЭДЖАРИ",
    "slug": "edzhari",
    "tree_id": 15,
    "level": 3,
    "parent_id": 56,
    "children": []
  },
  {
    "id": 39,
    "name": "Разрешение споров",
    "slug": "razreshenie-sporov",
    "tree_id": 15,
    "level": 2,
    "parent_id": 29,
    "children": []
  },
  {
    "id": 37,
    "name": "Государственные объекты недвижимости",
    "slug": "gosudarstvennaya-sobstvennost",
    "tree_id": 15,
    "level": 1,
    "parent_id": 1,
    "children": []
  },
  {
    "id": 55,
    "name": "Залог имущества",
    "slug": "zalog-imuschestva",
    "tree_id": 15,
    "level": 1,
    "parent_id": 1,
    "children": []
  },
  {
    "id": 33,
    "name": "Земля",
    "slug": "zemlya",
    "tree_id": 15,
    "level": 1,
    "parent_id": 1,
    "children": []
  },
  {
    "id": 60,
    "name": "Жилая земля",
    "slug": "zhilaya-zemlya",
    "tree_id": 15,
    "level": 2,
    "parent_id": 33,
    "children": []
  },
  {
    "id": 59,
    "name": "Земля предоставленная ассоциациям, представляющим общественные интересы",
    "slug": "zemlya-predostavlennaya-assotsiatsiyam-predstavlyayusc",
    "tree_id": 15,
    "level": 2,
    "parent_id": 33,
    "children": []
  },
  {
    "id": 58,
    "name": "Коммерческая земля",
    "slug": "predostavlennaya-kommercheskaya-zemlya",
    "tree_id": 15,
    "level": 2,
    "parent_id": 33,
    "children": []
  },
  {
    "id": 63,
    "name": "Образовательная земля",
    "slug": "obrazovatelnaya-zemlya",
    "tree_id": 15,
    "level": 2,
    "parent_id": 33,
    "children": []
  },
  {
    "id": 57,
    "name": "Промышленная земля",
    "slug": "predostavlennaya-promyishlennaya-zemlya",
    "tree_id": 15,
    "level": 2,
    "parent_id": 33,
    "children": []
  },
  {
    "id": 61,
    "name": "Районы для владения недвижимостью лицами, не являющимися гражданами ОАЭ",
    "slug": "rajonyi-dlya-vladeniya-nedvizhimostyu-litsami-ne-yavly",
    "tree_id": 15,
    "level": 2,
    "parent_id": 33,
    "children": []
  },
  {
    "id": 35,
    "name": "Инвестиции в недвижимость",
    "slug": "investitsii-v-nedvizhimost",
    "tree_id": 15,
    "level": 1,
    "parent_id": 1,
    "children": []
  },
  {
    "id": 30,
    "name": "Ипотека",
    "slug": "ipoteka",
    "tree_id": 15,
    "level": 1,
    "parent_id": 1,
    "children": []
  },
  {
    "id": 54,
    "name": "Наследство",
    "slug": "nasledstvo",
    "tree_id": 15,
    "level": 1,
    "parent_id": 1,
    "children": []
  },
  {
    "id": 64,
    "name": "Приобретение недвижимого имущества в общественных интересах",
    "slug": "priobretenie-nedvizhimogo-imuschestva-v-obschestvennyi",
    "tree_id": 15,
    "level": 1,
    "parent_id": 1,
    "children": []
  },
  {
    "id": 36,
    "name": "Проблемы c владением",
    "slug": "problemyi-c-vladeniem",
    "tree_id": 15,
    "level": 1,
    "parent_id": 1,
    "children": []
  },
  {
    "id": 73,
    "name": "Разрешение споров",
    "slug": "razreshenie-sporov-f9594a55",
    "tree_id": 15,
    "level": 2,
    "parent_id": 36,
    "children": []
  },
  {
    "id": 71,
    "name": "Брокер по недвижимости",
    "slug": "real-estate-broker",
    "tree_id": 15,
    "level": 2,
    "parent_id": 34,
    "children": []
  },
  {
    "id": 72,
    "name": "Профессия оценщика",
    "slug": "professiya-otsenschika",
    "tree_id": 15,
    "level": 2,
    "parent_id": 34,
    "children": []
  },
  {
    "id": 32,
    "name": "Регистрация",
    "slug": "registratsiya",
    "tree_id": 15,
    "level": 1,
    "parent_id": 1,
    "children": []
  },
  {
    "id": 42,
    "name": "Промежуточный реестр недвижимости",
    "slug": "promezhutochnyij-reestr-nedvizhimosti",
    "tree_id": 15,
    "level": 2,
    "parent_id": 32,
    "children": []
  },
  {
    "id": 70,
    "name": "Регистрация договора аренды",
    "slug": "registratsiya-dogovora-arendyi",
    "tree_id": 15,
    "level": 2,
    "parent_id": 32,
    "children": []
  },
  {
    "id": 41,
    "name": "Регистрация земли",
    "slug": "registratsiya-zemli",
    "tree_id": 15,
    "level": 2,
    "parent_id": 32,
    "children": []
  },
  {
    "id": 48,
    "name": "Дубайское Управление по Электро- и Водоснабжению",
    "slug": "dubajskoe-upravlenie-po-elektro-i-vodosnabzheniyu",
    "tree_id": 15,
    "level": 2,
    "parent_id": 38,
    "children": []
  },
  {
    "id": 43,
    "name": "Земельный Департамент Дубая",
    "slug": "zemelnyij-departament",
    "tree_id": 15,
    "level": 2,
    "parent_id": 38,
    "children": []
  },
  {
    "id": 45,
    "name": "Комитет по оценке земель",
    "slug": "komitet-po-otsenke-zemel",
    "tree_id": 15,
    "level": 2,
    "parent_id": 38,
    "children": []
  },
  {
    "id": 65,
    "name": "Международный финансовый центр Дубая",
    "slug": "mezhdunarodnyij-finansovyij-tsentr-dubaya",
    "tree_id": 15,
    "level": 2,
    "parent_id": 38,
    "children": []
  },
  {
    "id": 50,
    "name": "Регулирующее агентство в сфере безопасности",
    "slug": "reguliruyuschee-agentstvo-v-sfere-bezopasnosti",
    "tree_id": 15,
    "level": 2,
    "parent_id": 38,
    "children": []
  },
  {
    "id": 46,
    "name": "Управление Гражданской Авиации Дубая",
    "slug": "dubai-civil-aviation-authority",
    "tree_id": 15,
    "level": 2,
    "parent_id": 38,
    "children": []
  },
  {
    "id": 47,
    "name": "Управление Здравоохранения Дубая",
    "slug": "dubai-health-authority",
    "tree_id": 15,
    "level": 2,
    "parent_id": 38,
    "children": []
  },
  {
    "id": 49,
    "name": "Управление автомобильных дорог и транспорта",
    "slug": "upravlenie-avtomobilnyih-dorog-i-transporta",
    "tree_id": 15,
    "level": 2,
    "parent_id": 38,
    "children": []
  },
  {
    "id": 44,
    "name": "Управление по регулированию недвижимости",
    "slug": "rera",
    "tree_id": 15,
    "level": 2,
    "parent_id": 38,
    "children": []
  },
  {
    "id": 66,
    "name": "Центр урегулирования споров по аренде жилья",
    "slug": "tsentr-uregulirovaniya-sporov-po-arende-zhilya-v-emira",
    "tree_id": 15,
    "level": 2,
    "parent_id": 38,
    "children": []
  },
  {
    "id": 62,
    "name": "Совместно находящаяся недвижимость",
    "slug": "sovmestno-nahodyaschayasya-nedvizhimost",
    "tree_id": 15,
    "level": 1,
    "parent_id": 1,
    "children": []
  },
  {
    "id": 31,
    "name": "Строительство",
    "slug": "stroeniya",
    "tree_id": 15,
    "level": 1,
    "parent_id": 1,
    "children": []
  },
  {
    "id": 53,
    "name": "Генеральный план",
    "slug": "generalnyij-plan",
    "tree_id": 15,
    "level": 2,
    "parent_id": 31,
    "children": []
  },
  {
    "id": 51,
    "name": "Пожарная безопасность и безопасность жизнедеятельности",
    "slug": "pozharnaya-bezopasnost-i-bezopasnost-zhiznedeyatelnost",
    "tree_id": 15,
    "level": 2,
    "parent_id": 31,
    "children": []
  },
  {
    "id": 52,
    "name": "Электричество и вода",
    "slug": "elektrichestvo-i-voda",
    "tree_id": 15,
    "level": 2,
    "parent_id": 31,
    "children": []
  },
  {
    "id": 16,
    "name": "Оборонительные силы",
    "slug": "oboronitelnyie-silyi",
    "tree_id": 16,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 9,
    "name": "Образование. Наука.",
    "slug": "obrazovanie-nauka",
    "tree_id": 17,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 17,
    "name": "Окружающая среда и природные ресурсы",
    "slug": "okruzhayuschaya-sreda-i-prirodnyie-resursyi",
    "tree_id": 18,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 21,
    "name": "Свободная зона",
    "slug": "svobodnaya-zona",
    "tree_id": 21,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 18,
    "name": "Сельское хозяйство",
    "slug": "selskoe-hozyajstvo",
    "tree_id": 22,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 11,
    "name": "Социальное обеспечение и защита",
    "slug": "sotsialnoe-obespechenie-i-zaschita",
    "tree_id": 24,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 12,
    "name": "Труд и занятость населения",
    "slug": "trud-i-zanyatost-naseleniya",
    "tree_id": 25,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 7,
    "name": "Уголовное право. Наказания. Штрафы.",
    "slug": "ugolovnoe-pravo-nakazaniya-shtrafyi",
    "tree_id": 26,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 13,
    "name": "Хозяйственная деятельность",
    "slug": "hozyajstvennaya-deyatelnost",
    "tree_id": 27,
    "level": 0,
    "parent_id": null,
    "children": []
  },
  {
    "id": 2,
    "name": "Экономика. Финансы",
    "slug": "ekonomika-finansyi",
    "tree_id": 28,
    "level": 0,
    "parent_id": null,
    "children": []
  }
]

export const getCurrentCategory = (categories, slug) => {
  return categories.find(category => category.slug === slug)
}

export const getParentCategory = (categories, slug) => {
  const currentCategory = getCurrentCategory(categories, slug);

  const result = currentCategory ?
    categories.find(category => category.id === currentCategory.parent_id) :
    undefined

  return result
}

export const getCategoriesList = (categories, slug) => {
  const currentCategory = getCurrentCategory(categories, slug);

  const result = currentCategory ?
    categories.filter(category => category.parent_id === currentCategory.id) :
    categories.filter(category => category.level === 0)

  return result
}

export const getCategoriesTree = (categories) => {
  const map = Object.assign({}, ...categories.map(v =>
    ({ [v.id]: Object.assign(v, { children: [] }) })
  ))

  const tree = Object.values(map).filter(v =>
    !(v.parent_id && map[v.parent_id] !== undefined && map[v.parent_id].children.push(v))
  )

  return tree
}

const test = getCategoriesTree(data)

export const getCategoriesByID = (categories, idArray) => {
  let result = []

  idArray && idArray.forEach(id => {
    result.push(categories.find(category => category.id === id))
  })

  return result
}
