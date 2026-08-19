export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  timing: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  text: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  tag: string;
}

export const services: Service[] = [
  {
    id: 'landings',
    title: 'Лендинги',
    description: 'Разработка продающих лендингов для привлечения клиентов',
    image: 'https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Уникальный дизайн под ваш бренд',
      'Анимации и микровзаимодействия',
      'Адаптивная вёрстка под все устройства',
      'SEO-оптимизация и скорость загрузки',
    ],
  },
  {
    id: 'webapps',
    title: 'Веб-приложения',
    description: 'Создание функциональных веб-приложений',
    image: 'https://images.pexels.com/photos/33433724/pexels-photo-33433724.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Сложная логика и интеграции с API',
      'Личный кабинет и панель управления',
      'Авторизация и работа с базами данных',
      'Реальное время и интерактивность',
    ],
  },
  {
    id: 'launch',
    title: 'Запуск',
    description: 'Организация запуска веб-проектов',
    image: 'https://images.pexels.com/photos/17323801/pexels-photo-17323801.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Настройка хостинга и домена',
      'Деплой и конфигурация сервера',
      'Тестирование всех функций',
      'Подключение аналитики и метрик',
    ],
  },
  {
    id: 'refinement',
    title: 'Доработка',
    description: 'Улучшение и оптимизация существующих веб-проектов',
    image: 'https://images.pexels.com/photos/6424588/pexels-photo-6424588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Аудит и рефакторинг кода',
      'Оптимизация скорости загрузки',
      'Исправление багов и ошибок',
      'Добавление нового функционала',
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: 'step1',
    number: '01',
    title: 'Анализ задачи',
    description: 'Определяю цели и задачи проекта, сроки выполнения.',
    timing: '1–2 дня',
  },
  {
    id: 'step2',
    number: '02',
    title: 'Разработка',
    description: 'Создаю структуру и концепцию лендинга или веб-приложения.',
    timing: '2–4 дня',
  },
  {
    id: 'step3',
    number: '03',
    title: 'Реализация',
    description: 'Осуществляю разработку в соответствии с техническими требованиями.',
    timing: '5–14 дней',
  },
  {
    id: 'step4',
    number: '04',
    title: 'Запуск',
    description: 'Публикую проект, тестирую и передаю результат заказчику.',
    timing: '1–2 дня',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Анна',
    role: 'Клиент',
    avatar: 'https://images.pexels.com/photos/34761515/pexels-photo-34761515.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    text: 'Очень впечатляющий подход к дизайну лендингов! Видно, что специалист вкладывает душу в свою работу. Буду рекомендовать вас своим знакомым!',
  },
  {
    id: 't2',
    name: 'Максим',
    role: 'Клиент',
    avatar: 'https://images.pexels.com/photos/7752805/pexels-photo-7752805.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    text: 'Профессионально и качественно выполненное веб-приложение. Видно, что учтены все детали и особенности проекта. Обязательно буду обращаться ещё!',
  },
  {
    id: 't3',
    name: 'Екатерина',
    role: 'Клиент',
    avatar: 'https://images.pexels.com/photos/16160809/pexels-photo-16160809.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    text: 'Спасибо за отличную работу! Ваш подход к запуску лендинга был очень эффективен, результаты превзошли все ожидания.',
  },
  {
    id: 't4',
    name: 'Сергей',
    role: 'Клиент',
    avatar: 'https://images.pexels.com/photos/26150470/pexels-photo-26150470.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    text: 'Очень доволен результатом доработки моего веб-приложения. Все изменения были внесены вовремя и в соответствии с моими пожеланиями. Спасибо!',
  },
];

export const articles: Article[] = [
  {
    id: 'a1',
    title: 'Тенденции веб-дизайна',
    description: 'Обзор последних тенденций в веб-дизайне и их применение в современных проектах.',
    image: 'https://images.pexels.com/photos/29355999/pexels-photo-29355999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    date: '15 июля 2026',
    tag: 'Дизайн',
  },
  {
    id: 'a2',
    title: 'Лучшие практики лендинга',
    description: 'Руководство по созданию эффективных лендингов, включая примеры успешных кейсов.',
    image: 'https://images.pexels.com/photos/7191162/pexels-photo-7191162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    date: '28 июня 2026',
    tag: 'Маркетинг',
  },
  {
    id: 'a3',
    title: 'Как работает адаптивный дизайн',
    description: 'Подробное объяснение принципов адаптивного дизайна и его важности для веб-приложений.',
    image: 'https://images.pexels.com/photos/34140/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
    date: '10 июня 2026',
    tag: 'Разработка',
  },
];
