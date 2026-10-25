export const WHATSAPP_NUMBER = "5541999999999";
export type Photo = { src: string; alt: string };
type Service = {
  name: string;
  description: string;
  price: number;
  duration: string;
  message: string;
  featured?: boolean;
};
type SiteContent = {
  name: string;
  tagline: string;
  url: string;
  title: string;
  description: string;
  nav: { label: string; href: string }[];
  labels: {
    skip: string;
    navigation: string;
    book: string;
    services: string;
    reserve: string;
    floating: string;
    minutes: string;
    featured: string;
    routes: string;
    address: string;
    hours: string;
    map: string;
  };
  whatsapp: { message: string; authorMessage: string };
  hero: {
    location: string;
    title: string;
    description: string;
    note: string;
    photo: Photo;
    caption: string;
  };
  services: { title: string; intro: string; note: string; items: Service[] };
  team: {
    title: string;
    intro: string;
    people: { name: string; role: string; description: string; photo: Photo }[];
  };
  gallery: {
    title: string;
    intro: string;
    photos: (Photo & { caption: string })[];
  };
  testimonials: {
    title: string;
    intro: string;
    items: { name: string; detail: string; quote: string }[];
  };
  visit: {
    title: string;
    intro: string;
    street: string;
    neighborhood: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    notice: string;
    mapUrl: string;
    routesUrl: string;
    hours: {
      label: string;
      value: string;
      days: string[];
      opens?: string;
      closes?: string;
    }[];
  };
  closing: { title: string; description: string };
  footer: { credit: string; note: string };
};
const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;
export const site: SiteContent = {
  name: "Navalha & Co.",
  tagline: "Barbearia no Batel",
  url: "https://navalha-co.vercel.app",
  title: "Navalha & Co. | Barbearia no Batel, Curitiba",
  description:
    "Corte, barba e cuidado nos detalhes no Batel, Curitiba. Corte por R$ 50, barba por R$ 40 e combo por R$ 80. Agende pelo WhatsApp. Projeto demonstrativo.",
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Barbeiros", href: "#barbeiros" },
    { label: "Cortes", href: "#galeria" },
    { label: "Onde estamos", href: "#visite" },
  ],
  labels: {
    skip: "Pular para o conteúdo",
    navigation: "Navegação principal",
    book: "Agende pelo WhatsApp",
    services: "Conheça os serviços",
    reserve: "Agendar",
    floating: "Conversar pelo WhatsApp",
    minutes: "min",
    featured: "O ritual completo",
    routes: "Abrir região no Google Maps",
    address: "Nosso endereço",
    hours: "Horários de funcionamento",
    map: "Mapa da região do Batel, Curitiba",
  },
  whatsapp: {
    message:
      "Olá, Navalha & Co.! Gostaria de consultar os horários para um agendamento.",
    authorMessage:
      "Olá, Anderson! Vi a demo da Navalha & Co. e gostaria de conversar sobre um site para meu negócio.",
  },
  hero: {
    location: "Batel, Curitiba • Desde 2018",
    title: "BOM CORTE.\nBOA PROSA.\nSEM PRESSA.",
    description:
      "Da primeira passada da máquina ao último detalhe na navalha. Um tempo só seu, na sua barbearia do Batel.",
    note: "Atendimento com hora marcada. Café por nossa conta.",
    photo: {
      src: photo("photo-1503951914875-452162b0f3f1"),
      alt: "Barbeiro aparando a barba de um cliente reclinado na cadeira",
    },
    caption: "Técnica de hoje. Cuidado de sempre.",
  },
  services: {
    title: "O clássico nunca perde o corte.",
    intro: "Escolha seu cuidado. A gente cuida do resto.",
    note: "Lavagem e finalização incluídas. Valores fictícios para esta demonstração.",
    items: [
      {
        name: "Corte",
        description:
          "Na tesoura ou na máquina, com acabamento preciso e um estilo que funciona no seu dia a dia.",
        price: 50,
        duration: "40",
        message:
          "Olá! Gostaria de agendar um corte (R$ 50) na Navalha & Co. Quais horários estão disponíveis?",
      },
      {
        name: "Barba",
        description:
          "Desenho, toalha quente e navalha. Um ritual de cuidado, do contorno à hidratação.",
        price: 40,
        duration: "30",
        message:
          "Olá! Gostaria de agendar uma barba (R$ 40) na Navalha & Co. Quais horários estão disponíveis?",
      },
      {
        name: "Corte + barba",
        description:
          "O encontro dos dois rituais. Saia com o cabelo alinhado e a barba do jeito certo.",
        price: 80,
        duration: "70",
        featured: true,
        message:
          "Olá! Gostaria de agendar o combo corte + barba (R$ 80) na Navalha & Co. Quais horários estão disponíveis?",
      },
    ],
  },
  team: {
    title: "Gente que conhece o ofício.",
    intro:
      "Antes da tesoura, a conversa. Entender o que você quer faz parte de um bom corte.",
    people: [
      {
        name: "Rafael Costa",
        role: "Cortes clássicos & tesoura",
        description:
          "Dez anos de cadeira, atenção ao caimento e respeito ao seu estilo.",
        photo: {
          src: photo("photo-1500648767791-00dcc994a43e"),
          alt: "Retrato ilustrativo de Rafael Costa",
        },
      },
      {
        name: "Lucas Almeida",
        role: "Degradê & desenho de barba",
        description:
          "Transições suaves, linhas bem feitas e nenhum detalhe pela metade.",
        photo: {
          src: photo("photo-1506794778202-cad84cf45f1d"),
          alt: "Retrato ilustrativo de Lucas Almeida",
        },
      },
    ],
  },
  gallery: {
    title: "O detalhe faz o corte.",
    intro:
      "Clássico, curto ou com textura. Referências de estilo para a sua próxima visita.",
    photos: [
      {
        src: photo("photo-1622296089863-eb7fc530daa8"),
        alt: "Corte masculino com degradê e risco lateral",
        caption: "Acabamento preciso",
      },
      {
        src: photo("photo-1503951914875-452162b0f3f1"),
        alt: "Barba sendo aparada com precisão",
        caption: "Barba bem desenhada",
      },
      {
        src: photo("photo-1599351431202-1e0f0137899a"),
        alt: "Detalhes do cuidado com um corte masculino",
        caption: "Estilo no dia a dia",
      },
    ],
  },
  testimonials: {
    title: "A melhor indicação vem da cadeira.",
    intro: "Relatos fictícios que ilustram a experiência da nossa barbearia.",
    items: [
      {
        name: "Pedro M.",
        detail: "Cliente de corte e barba",
        quote:
          "Expliquei como queria e o Rafael acertou de primeira. O corte continua bom mesmo depois de algumas semanas.",
      },
      {
        name: "André L.",
        detail: "Cliente de corte",
        quote:
          "Agendei pelo WhatsApp no intervalo do trabalho. Atendimento no horário, boa conversa e um acabamento impecável.",
      },
      {
        name: "Gustavo R.",
        detail: "Cliente do combo",
        quote:
          "A toalha quente já vale a visita. Dá para perceber o cuidado em cada etapa. Virei cliente do combo.",
      },
    ],
  },
  visit: {
    title: "Sua próxima parada no Batel.",
    intro:
      "Reserve um horário e venha com calma. A cadeira e o café esperam por você.",
    street: "Rua do Ofício, 128",
    neighborhood: "Batel",
    city: "Curitiba",
    region: "PR",
    postalCode: "80420-000",
    country: "BR",
    notice:
      "Endereço fictício. O mapa mostra apenas a região do Batel; não indica uma loja real.",
    mapUrl:
      "https://www.google.com/maps?q=Batel%2C%20Curitiba&z=14&hl=pt-BR&output=embed",
    routesUrl:
      "https://www.google.com/maps/search/?api=1&query=Batel%2C%20Curitiba",
    hours: [
      {
        label: "Segunda a sexta",
        value: "09h às 20h",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        label: "Sábado",
        value: "09h às 18h",
        days: ["Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
      { label: "Domingo", value: "Fechado", days: ["Sunday"] },
    ],
  },
  closing: {
    title: "Sua cadeira está esperando.",
    description:
      "Mande uma mensagem. Escolha seu horário. Deixe o resto com a gente.",
  },
  footer: {
    credit: "Demo por Anderson Dias",
    note: "Projeto de portfólio. Marca, equipe e depoimentos fictícios. Fotos ilustrativas do Unsplash.",
  },
};
