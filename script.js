/* ─── Smooth-scroll active nav + reveal animations ─── */

// ── Translations ──────────────────────────────────────────────────────────────
const translations = {
  en: {
    nav_education: 'Education', nav_research: 'Research', nav_publications: 'Publications',
    nav_conferences: 'Conferences', nav_awards: 'Awards', nav_techniques: 'Techniques',
    hero_tag: 'Researcher · Nanotechnologist · Biomedical Engineer',
    hero_desc: 'I am a young researcher interested in translational medicine and the creation of multidisciplinary projects to solve current medical challenges.',
    hero_cta: 'Learn more ↓',
    edu_heading: 'Academic Background',
    edu_imim: 'International Master in Innovative Medicine (IMIM) — double degree programme.',
    res_heading: 'Research Experience', res_phd_title: 'PhD Candidate',
    res_thesis_title: 'Thesis Student', res_intern_title: 'Research Intern',
    res_sup: 'Supervisors: Prof. Inge Zuhorn, Prof. Ranjita K. Bose, Dr. Jan Willem Haveman',
    res_tech_label: 'Techniques:',
    res_phd_desc: 'Research on oxygen-releasing adhesives to promote anastomotic healing in esophageal surgery.',
    res_grip_desc: 'Modelling the microarchitecture of the physical cancer microenvironment in microfluidic chips.',
    res_umm_desc: 'Analysis of human macrophage responses to titanium-based implant biomaterials.',
    res_hd_desc: 'Alteration of Alzheimer\'s Disease-related gene expression and receptor protein expression in animal models.',
    res_unam1_desc: 'Design, Fabrication, and Evaluation of Ultrasound-Propelled Janus Motors Controlled by Magnetic Fields for Drug Delivery for Breast Cancer Treatment.',
    res_unam2_desc: 'Fabrication and analysis of Janus motors of materials with different densities excited by hydrogen peroxide, ultrasound, and magnetic fields.',
    res_unam3_desc: 'Purification and characterization of proteases from the hepatopancreas of Mytilus sp.',
    pub_heading: 'Publications',
    conf_heading: 'Presentations & Conferences', conf_oral: 'Oral', conf_poster: 'Poster',
    awards_heading: 'Awards & Scholarships',
    award_best_poster: 'Best Poster — ENTEG Day',
    award_garreda: 'Highest grade-point average of the college graduating class.',
    award_emjmd: 'European Masters Joint Marie Skłodowska-Curie scholarship for the IMIM programme.',
    tech_heading: 'Techniques & Tools', tech_lab: 'Laboratory', tech_soft: 'Software',
    tech_lang: 'Languages', tech_lang1: 'Spanish — Native', tech_lang2: 'English — IELTS 7.5', tech_lang3: 'French — B1',
    tech_extra: 'Extracurricular',
    tech_extra1: 'Co-founder & General Secretariat, SE-Nano (2020–2023)',
    tech_extra2: 'Nanochallenge: Solutions for Sustainability organiser (2021)',
    tech_extra3: 'Zpannend Zernike — science outreach for children (2024)',
    tech_extra4: 'Institutional tutoring programme, CNyN (2018–2019)',
  },
  es: {
    nav_education: 'Educación', nav_research: 'Investigación', nav_publications: 'Publicaciones',
    nav_conferences: 'Congresos', nav_awards: 'Premios', nav_techniques: 'Técnicas',
    hero_tag: 'Investigadora · Nanotecnóloga · Ingeniera Biomédica',
    hero_desc: 'Soy una joven investigadora interesada en la medicina traslacional y en la creación de proyectos multidisciplinarios para resolver los retos médicos actuales.',
    hero_cta: 'Saber más ↓',
    edu_heading: 'Formación Académica',
    edu_imim: 'Máster Internacional en Medicina Innovadora (IMIM) — programa de doble titulación.',
    res_heading: 'Experiencia Investigadora', res_phd_title: 'Candidata Doctoral',
    res_thesis_title: 'Estudiante de Tesis', res_intern_title: 'Investigadora en Prácticas',
    res_sup: 'Supervisores: Prof. Inge Zuhorn, Prof. Ranjita K. Bose, Dr. Jan Willem Haveman', res_tech_label: 'Técnicas:',
    res_phd_desc: 'Investigación sobre adhesivos liberadores de oxígeno para promover la cicatrización anastomótica en cirugía esofágica.',
    res_grip_desc: 'Modelización de la microarquitectura del microentorno físico del cáncer en chips microfluídicos.',
    res_umm_desc: 'Análisis de las respuestas de macrófagos humanos a biomateriales de implantes de titanio.',
    res_hd_desc: 'Alteración de la expresión génica relacionada con el Alzheimer y la expresión de proteínas receptoras en modelos animales.',
    res_unam1_desc: 'Diseño, Fabricación y Evaluación de Motores Janus Propulsados por Ultrasonido Controlados por Campos Magnéticos para la Administración de Fármacos en el Tratamiento del Cáncer de Mama.',
    res_unam2_desc: 'Fabricación y análisis de motores Janus de materiales con diferentes densidades excitados por peróxido de hidrógeno, ultrasonido y campos magnéticos.',
    res_unam3_desc: 'Purificación y caracterización de proteasas del hepatopáncreas de Mytilus sp.',
    pub_heading: 'Publicaciones',
    conf_heading: 'Presentaciones y Congresos', conf_oral: 'Oral', conf_poster: 'Póster',
    awards_heading: 'Premios y Becas',
    award_best_poster: 'Mejor Póster — ENTEG Day',
    award_garreda: 'Mejor promedio académico de la generación.',
    award_emjmd: 'Beca Marie Skłodowska-Curie EMJMD para el programa IMIM.',
    tech_heading: 'Técnicas y Herramientas', tech_lab: 'Laboratorio', tech_soft: 'Software',
    tech_lang: 'Idiomas', tech_lang1: 'Español — Nativo', tech_lang2: 'Inglés — IELTS 7.5', tech_lang3: 'Francés — B1',
    tech_extra: 'Actividades Extracurriculares',
    tech_extra1: 'Cofundadora y Secretaría General, SE-Nano (2020–2023)',
    tech_extra2: 'Organizadora de Nanochallenge: Soluciones para la Sostenibilidad (2021)',
    tech_extra3: 'Zpannend Zernike — divulgación científica para niños (2024)',
    tech_extra4: 'Programa de tutoría institucional, CNyN (2018–2019)',
  },
  fr: {
    nav_education: 'Formation', nav_research: 'Recherche', nav_publications: 'Publications',
    nav_conferences: 'Conférences', nav_awards: 'Prix', nav_techniques: 'Techniques',
    hero_tag: 'Chercheuse · Nanotechnologue · Ingénieure Biomédicale',
    hero_desc: 'Je suis une jeune chercheuse passionnée par la médecine translationnelle et la création de projets multidisciplinaires pour relever les défis médicaux actuels.',
    hero_cta: 'En savoir plus ↓',
    edu_heading: 'Parcours Académique',
    edu_imim: 'Master International en Médecine Innovante (IMIM) — programme de double diplôme.',
    res_heading: 'Expérience de Recherche', res_phd_title: 'Doctorante',
    res_thesis_title: 'Étudiante en Thèse', res_intern_title: 'Stagiaire de Recherche',
    res_sup: 'Superviseurs : Prof. Inge Zuhorn, Prof. Ranjita K. Bose, Dr. Jan Willem Haveman', res_tech_label: 'Techniques :',
    res_phd_desc: 'Recherche sur les adhésifs libérateurs d\'oxygène pour favoriser la cicatrisation anastomotique en chirurgie œsophagienne.',
    res_grip_desc: 'Modélisation de la microarchitecture du microenvironnement physique du cancer dans des puces microfluidiques.',
    res_umm_desc: 'Analyse des réponses des macrophages humains aux biomatériaux d\'implants à base de titane.',
    res_hd_desc: 'Modification de l\'expression génique liée à la maladie d\'Alzheimer dans des modèles animaux.',
    res_unam1_desc: 'Conception, Fabrication et Évaluation de Moteurs Janus Propulsés par Ultrasons et Contrôlés par des Champs Magnétiques pour l\'Administration de Médicaments dans le Traitement du Cancer du Sein.',
    res_unam2_desc: 'Fabrication et analyse de moteurs Janus de différentes densités excités par du peroxyde d\'hydrogène, des ultrasons et des champs magnétiques.',
    res_unam3_desc: 'Purification et caractérisation de protéases de l\'hépatopancréas de Mytilus sp.',
    pub_heading: 'Publications',
    conf_heading: 'Présentations & Conférences', conf_oral: 'Oral', conf_poster: 'Poster',
    awards_heading: 'Prix & Bourses',
    award_best_poster: 'Meilleur Poster — ENTEG Day',
    award_garreda: 'Meilleure moyenne académique de la promotion.',
    award_emjmd: 'Bourse Marie Skłodowska-Curie EMJMD pour le programme IMIM.',
    tech_heading: 'Techniques & Outils', tech_lab: 'Laboratoire', tech_soft: 'Logiciels',
    tech_lang: 'Langues', tech_lang1: 'Espagnol — Langue maternelle', tech_lang2: 'Anglais — IELTS 7.5', tech_lang3: 'Français — B1',
    tech_extra: 'Activités Parascolaires',
    tech_extra1: 'Cofondatrice & Secrétariat Général, SE-Nano (2020–2023)',
    tech_extra2: 'Organisatrice de Nanochallenge : Solutions pour la Durabilité (2021)',
    tech_extra3: 'Zpannend Zernike — vulgarisation scientifique pour enfants (2024)',
    tech_extra4: 'Programme de tutorat institutionnel, CNyN (2018–2019)',
  },
  nl: {
    nav_education: 'Opleiding', nav_research: 'Onderzoek', nav_publications: 'Publicaties',
    nav_conferences: 'Conferenties', nav_awards: 'Prijzen', nav_techniques: 'Technieken',
    hero_tag: 'Onderzoeker · Nanotechnoloog · Biomedisch Ingenieur',
    hero_desc: 'Ik ben een jonge onderzoeker met interesse in translationele geneeskunde en het creëren van multidisciplinaire projecten om huidige medische uitdagingen op te lossen.',
    hero_cta: 'Meer weten ↓',
    edu_heading: 'Academische Achtergrond',
    edu_imim: 'International Master in Innovative Medicine (IMIM) — dubbel diplomaprogramma.',
    res_heading: 'Onderzoekservaring', res_phd_title: 'PhD-kandidaat',
    res_thesis_title: 'Scriptiestudent', res_intern_title: 'Onderzoeksstage',
    res_sup: 'Begeleiders: Prof. Inge Zuhorn, Prof. Ranjita K. Bose, Dr. Jan Willem Haveman', res_tech_label: 'Technieken:',
    res_phd_desc: 'Onderzoek naar zuurstofafgevende hechtmiddelen voor het bevorderen van anastomotische genezing bij slokdarmchirurgie.',
    res_grip_desc: 'Modellering van de microarchitectuur van het fysieke kanker-microenvironment in microfluidische chips.',
    res_umm_desc: 'Analyse van menselijke macrofaagresponsen op titanium-gebaseerde implantaatbiomaterialen.',
    res_hd_desc: 'Verandering van Alzheimer-gerelateerde genexpressie en receptoreiwit expressie in diermodellen.',
    res_unam1_desc: 'Ontwerp, Fabricage en Evaluatie van Ultrasoon-Aangedreven Janus-Motors Bestuurd door Magnetische Velden voor Geneesmiddelenafgifte bij Borstkankerbehandeling.',
    res_unam2_desc: 'Fabricage en analyse van Janus-motors van materialen met verschillende dichtheden aangedreven door waterstofperoxide, ultrasoon en magnetische velden.',
    res_unam3_desc: 'Zuivering en karakterisering van proteasen uit het hepatopancreas van Mytilus sp.',
    pub_heading: 'Publicaties',
    conf_heading: 'Presentaties & Conferenties', conf_oral: 'Mondeling', conf_poster: 'Poster',
    awards_heading: 'Prijzen & Beurzen',
    award_best_poster: 'Beste Poster — ENTEG Day',
    award_garreda: 'Hoogste cijfergemiddelde van de afstudeerjaargangklasse.',
    award_emjmd: 'Marie Skłodowska-Curie EMJMD-beurs voor het IMIM-programma.',
    tech_heading: 'Technieken & Tools', tech_lab: 'Laboratorium', tech_soft: 'Software',
    tech_lang: 'Talen', tech_lang1: 'Spaans — Moedertaal', tech_lang2: 'Engels — IELTS 7.5', tech_lang3: 'Frans — B1',
    tech_extra: 'Buitenschoolse Activiteiten',
    tech_extra1: 'Medeoprichter & Algemeen Secretariaat, SE-Nano (2020–2023)',
    tech_extra2: 'Organisator Nanochallenge: Oplossingen voor Duurzaamheid (2021)',
    tech_extra3: 'Zpannend Zernike — wetenschapsoutreach voor kinderen (2024)',
    tech_extra4: 'Institutioneel begeleidingsprogramma, CNyN (2018–2019)',
  },
  el: {
    nav_education: 'Εκπαίδευση', nav_research: 'Έρευνα', nav_publications: 'Δημοσιεύσεις',
    nav_conferences: 'Συνέδρια', nav_awards: 'Βραβεία', nav_techniques: 'Τεχνικές',
    hero_tag: 'Ερευνήτρια · Νανοτεχνολόγος · Βιοϊατρικός Μηχανικός',
    hero_desc: 'Είμαι νέα ερευνήτρια με ενδιαφέρον στη μεταφραστική ιατρική και στη δημιουργία διεπιστημονικών έργων για την αντιμετώπιση σύγχρονων ιατρικών προκλήσεων.',
    hero_cta: 'Μάθετε περισσότερα ↓',
    edu_heading: 'Ακαδημαϊκό Υπόβαθρο',
    edu_imim: 'Διεθνές Μεταπτυχιακό στην Καινοτόμο Ιατρική (IMIM) — πρόγραμμα διπλού πτυχίου.',
    res_heading: 'Ερευνητική Εμπειρία', res_phd_title: 'Υποψήφια Διδάκτορας',
    res_thesis_title: 'Φοιτήτρια Διπλωματικής', res_intern_title: 'Ερευνητική Πρακτική',
    res_sup: 'Επόπτες: Καθ. Inge Zuhorn, Καθ. Ranjita K. Bose, Δρ. Jan Willem Haveman', res_tech_label: 'Τεχνικές:',
    res_phd_desc: 'Έρευνα για κολλητικές ουσίες απελευθέρωσης οξυγόνου για την προώθηση της αναστομωτικής επούλωσης στη χειρουργική του οισοφάγου.',
    res_grip_desc: 'Μοντελοποίηση της μικροαρχιτεκτονικής του φυσικού μικροπεριβάλλοντος του καρκίνου σε μικρορευστομηχανικά τσιπς.',
    res_umm_desc: 'Ανάλυση αποκρίσεων ανθρώπινων μακροφάγων σε βιοϋλικά εμφυτευμάτων τιτανίου.',
    res_hd_desc: 'Τροποποίηση έκφρασης γονιδίων σχετικών με τη νόσο Alzheimer σε ζωικά μοντέλα.',
    res_unam1_desc: 'Σχεδιασμός, Κατασκευή και Αξιολόγηση Κινητήρων Janus Υπερήχων Ελεγχόμενων από Μαγνητικά Πεδία για Χορήγηση Φαρμάκων στη Θεραπεία Καρκίνου του Μαστού.',
    res_unam2_desc: 'Κατασκευή και ανάλυση κινητήρων Janus από υλικά διαφορετικής πυκνότητας διεγερμένων από υπεροξείδιο υδρογόνου, υπερήχους και μαγνητικά πεδία.',
    res_unam3_desc: 'Καθαρισμός και χαρακτηρισμός πρωτεασών από το ηπατοπάγκρεας του Mytilus sp.',
    pub_heading: 'Δημοσιεύσεις',
    conf_heading: 'Παρουσιάσεις & Συνέδρια', conf_oral: 'Προφορική', conf_poster: 'Αφίσα',
    awards_heading: 'Βραβεία & Υποτροφίες',
    award_best_poster: 'Καλύτερη Αφίσα — ENTEG Day',
    award_garreda: 'Υψηλότερος μέσος όρος βαθμολογίας αποφοιτούντων.',
    award_emjmd: 'Υποτροφία Marie Skłodowska-Curie EMJMD για το πρόγραμμα IMIM.',
    tech_heading: 'Τεχνικές & Εργαλεία', tech_lab: 'Εργαστήριο', tech_soft: 'Λογισμικό',
    tech_lang: 'Γλώσσες', tech_lang1: 'Ισπανικά — Μητρική', tech_lang2: 'Αγγλικά — IELTS 7.5', tech_lang3: 'Γαλλικά — B1',
    tech_extra: 'Εξωσχολικές Δραστηριότητες',
    tech_extra1: 'Συνιδρύτρια & Γενική Γραμματεία, SE-Nano (2020–2023)',
    tech_extra2: 'Διοργανώτρια Nanochallenge: Λύσεις για τη Βιωσιμότητα (2021)',
    tech_extra3: 'Zpannend Zernike — επιστημονική εκλαΐκευση για παιδιά (2024)',
    tech_extra4: 'Θεσμικό πρόγραμμα καθοδήγησης, CNyN (2018–2019)',
  },
};

const langLabels = { en: 'EN', es: 'ES', fr: 'FR', nl: 'NL', el: 'ΕΛ' };

function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.getElementById('langLabel').textContent = langLabels[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-option').forEach(o => {
    o.classList.toggle('active', o.dataset.lang === lang);
  });
  localStorage.setItem('lang', lang);
}

// ── Language picker toggle ────────────────────────────────────────────────────
const langPicker   = document.getElementById('langPicker');
const langBtn      = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');

langBtn.addEventListener('click', e => {
  e.stopPropagation();
  const open = langPicker.classList.toggle('open');
  langBtn.setAttribute('aria-expanded', open);
});

langDropdown.addEventListener('click', e => {
  const option = e.target.closest('.lang-option');
  if (!option) return;
  applyLang(option.dataset.lang);
  langPicker.classList.remove('open');
  langBtn.setAttribute('aria-expanded', 'false');
});

document.addEventListener('click', () => {
  langPicker.classList.remove('open');
  langBtn.setAttribute('aria-expanded', 'false');
});

// Restore saved language
applyLang(localStorage.getItem('lang') || 'en');

// ── Theme toggle ──────────────────────────────────────────────────────────────
const toggle = document.getElementById('themeToggle');

// Restore saved preference
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});

// ── Active nav highlight ──────────────────────────────────────────────────────
const sections  = document.querySelectorAll('section[id], header[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const observeNav = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => observeNav.observe(s));

// ── Scroll-reveal ─────────────────────────────────────────────────────────────
const revealTargets = document.querySelectorAll(
  '.timeline-item, .card, .conf-item, .tech-group'
);

const observeReveal = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings slightly
      const siblings = [...entry.target.parentElement.children];
      const idx      = siblings.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * 80);
      observeReveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observeReveal.observe(el));

// ── Navbar shadow on scroll ───────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = '';   // let CSS variable handle it
  navbar.style.backdropFilter = window.scrollY > 10 ? 'blur(16px)' : 'blur(12px)';
});

