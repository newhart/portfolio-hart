export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function resolveLocaleFromPath(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment === "en" ? "en" : defaultLocale;
}

const messages = {
  en: {
    metaTitle: "Haritiana's Web Development Portfolio",
    metaDescription:
      "Portfolio of Haritiana, a fullstack web developer specializing in Laravel, Vue.js, React.js, Symfony, WordPress, and more. Explore my projects and skills.",
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    footer: {
      builtWith: "Built with ❤️ and Astro 🚀 by",
    },
    home: {
      title: "Welcome 👋, I'm Haritiana Randriamampionona",
      availableToHelp: "Available to help you with:",
      frontendTitle: "Frontend Development",
      frontendDescription:
        "Expert in creating dynamic and responsive user interfaces using React js and Vue js. I bring your designs to life with clean, efficient, and maintainable code.",
      backendTitle: "Backend Development",
      backendDescription:
        "Skilled in building robust and scalable server-side applications with Laravel and Adonis js. I ensure your backend is secure, efficient, and seamlessly integrated with your frontend.",
      aboutTitle: "About Me",
      shortBioTitle: "Short Bio 🧬",
      bio1: "I'm a passionate Full-Stack Web Developer with experience in Laravel, Vue.js, Node.js, and React.js. I'm dedicated to delivering high-quality code and building reliable, efficient websites.",
      bio2: "Currently, I'm focused on enhancing my skills and contributing to web development projects while continuously learning from the community.",
      bio3: "I enjoy sharing my knowledge and collaborating with others to create innovative solutions.",
      reachOutTitle: "Want to know more? Feel free to reach out!",
      downloadCv: "Download CV",
      latestProjects: "Latest Projects",
      seeAllProjects: "See All Projects",
      contactTitle: "Contact",
    },
    projects: {
      title: "Projects",
      description:
        "I'm always working on new amazing projects, so this list changes very often. Check back sometimes to discover new work.",
    },
    contactForm: {
      scheduleMeeting: "Schedule Meeting",
      yourEmail: "Your Email",
      optionalMessage: "Leave me a message (optional)",
      schedule: "Schedule",
      errorMessage: "Oops, something went wrong! Please, try again.",
      successMessage: "I've received your message, I'll get in contact with you soon.",
      continue: "Continue",
      getStarted: "Get Started",
    },
  },
  fr: {
    metaTitle: "Portfolio de développement web de Haritiana",
    metaDescription:
      "Portfolio de Haritiana, développeuse web full stack spécialisée en Laravel, Vue.js, React.js, Symfony, WordPress et plus encore. Découvrez mes projets et mes compétences.",
    nav: {
      home: "Accueil",
      about: "A propos",
      projects: "Projets",
      contact: "Contact",
    },
    footer: {
      builtWith: "Concu avec ❤️ et Astro 🚀 par",
    },
    home: {
      title: "Bienvenue 👋, je suis Haritiana Randriamampionona",
      availableToHelp: "Disponible pour vous aider avec :",
      frontendTitle: "Developpement Frontend",
      frontendDescription:
        "Experte en creation d'interfaces utilisateur dynamiques et responsives avec React js et Vue js. Je donne vie a vos designs avec un code propre, efficace et maintenable.",
      backendTitle: "Developpement Backend",
      backendDescription:
        "Competente dans la creation d'applications serveur robustes et evolutives avec Laravel et Adonis js. Je veille a un backend securise, efficace et parfaitement integre a votre frontend.",
      aboutTitle: "A propos de moi",
      shortBioTitle: "Bio courte 🧬",
      bio1: "Je suis une developpeuse web Full Stack passionnee avec de l'experience sur Laravel, Vue.js, Node.js et React.js. Je m'engage a livrer un code de qualite et des sites fiables et performants.",
      bio2: "Actuellement, je me concentre sur l'amelioration de mes competences et je contribue a des projets web tout en apprenant continuellement de la communaute.",
      bio3: "J'aime partager mes connaissances et collaborer pour creer des solutions innovantes.",
      reachOutTitle: "Vous voulez en savoir plus ? Contactez-moi !",
      downloadCv: "Telecharger le CV",
      latestProjects: "Derniers projets",
      seeAllProjects: "Voir tous les projets",
      contactTitle: "Contact",
    },
    projects: {
      title: "Projets",
      description:
        "Je travaille regulierement sur de nouveaux projets. Cette liste evolue souvent, revenez de temps en temps pour voir les nouveautes.",
    },
    contactForm: {
      scheduleMeeting: "Planifier un entretien",
      yourEmail: "Votre e-mail",
      optionalMessage: "Laissez-moi un message (optionnel)",
      schedule: "Planifier",
      errorMessage: "Oups, quelque chose s'est mal passe. Veuillez reessayer.",
      successMessage: "J'ai bien recu votre message, je vous recontacterai bientot.",
      continue: "Continuer",
      getStarted: "Commencer",
    },
  },
} as const;

export function getMessages(lang: Locale) {
  return messages[lang];
}
