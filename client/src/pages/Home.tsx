import { useEffect, useState } from "react";
import {
  ChevronDown,
  CircleUserRound,
  Clock3,
  Menu,
  Play,
  ShieldCheck,
  Sparkles,
  Volume2,
} from "lucide-react";

const CHECKOUT_URL = "#offer";

const benefits = [
  "Comprendre les habitudes quotidiennes qui peuvent favoriser une meilleure concentration.",
  "Découvrir des recettes simples, conçues avec des ingrédients accessibles.",
  "Consulter le programme où que vous soyez, sans rendez-vous ni délai.",
  "Suivre une méthode guidée, à votre propre rythme, pendant 90 jours.",
  "Mettre en place des rituels mesurables pour organiser votre progression.",
  "Rejoindre une communauté qui échange autour du bien-être cognitif au quotidien.",
];

const testimonials = [
  {
    quote:
      "J'avais besoin d'une méthode claire et rassurante. Les exercices ont surtout rendu mon quotidien plus organisé et plus serein.",
    name: "Élise M.",
    detail: "Lyon — 64 ans",
    initials: "ÉM",
    tone: "from-[#d7a46d] to-[#f3d8b3]",
  },
  {
    quote:
      "La présentation est simple, les étapes sont faciles à suivre et j'aime pouvoir avancer sans me sentir dépassée.",
    name: "Camille R.",
    detail: "Bordeaux — 58 ans",
    initials: "CR",
    tone: "from-[#7ca3a3] to-[#d5e4dd]",
  },
  {
    quote:
      "Ce que j'apprécie le plus, c'est la régularité. Le programme m'a aidé à créer une vraie routine autour de mon bien-être.",
    name: "Marc L.",
    detail: "Nantes — 67 ans",
    initials: "ML",
    tone: "from-[#8e9565] to-[#d7d9a7]",
  },
  {
    quote:
      "Les explications sont directes et les idées concrètes. C'est devenu un moment que je partage avec ma famille.",
    name: "Thierry B.",
    detail: "Annecy — 71 ans",
    initials: "TB",
    tone: "from-[#a9776f] to-[#e9c6b6]",
  },
];

const faqs = [
  {
    question: "Comment vais-je recevoir le programme ?",
    answer:
      "Après votre inscription, vous recevez immédiatement un e-mail contenant un lien sécurisé vers votre espace de contenu et ses ressources numériques.",
  },
  {
    question: "Quand puis-je commencer ?",
    answer:
      "Le contenu est disponible dès la confirmation de votre commande. Vous avancez ensuite à votre rythme, en suivant les séquences proposées.",
  },
  {
    question: "Et si le programme ne me convient pas ?",
    answer:
      "La page prévoit une garantie de remboursement de 180 jours. Les conditions précises doivent être confirmées avec le vendeur avant toute commande.",
  },
  {
    question: "Les ingrédients sont-ils faciles à trouver ?",
    answer:
      "Les recettes de cette démonstration sont conçues autour d'ingrédients courants. Vérifiez toujours la liste exacte et les précautions associées au produit choisi.",
  },
  {
    question: "Puis-je suivre ce contenu avec un traitement médical ?",
    answer:
      "Ce contenu ne remplace pas un avis médical. En cas de traitement, de symptôme ou de condition particulière, demandez conseil à un professionnel de santé qualifié.",
  },
];

function Countdown() {
  const [seconds, setSeconds] = useState(15 * 60);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSeconds((current) => (current > 0 ? current - 1 : 15 * 60));
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const parts = [
    { value: hours, label: "HEURES" },
    { value: minutes, label: "MINUTES" },
    { value: remainingSeconds, label: "SECONDES" },
  ];

  return (
    <div className="countdown" aria-label="Compte à rebours de l'offre">
      {parts.map((part) => (
        <div className="countdown-unit" key={part.label}>
          <strong>{String(part.value).padStart(2, "0")}</strong>
          <span>{part.label}</span>
        </div>
      ))}
    </div>
  );
}

function OfferCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`offer-card ${compact ? "offer-card-compact" : ""}`} id={compact ? "offer" : undefined}>
      <div className="offer-label">OFFRE DE DÉCOUVERTE</div>
      <div className="offer-price-row">
        <span className="offer-discount">−70%</span>
        <span className="offer-price">
          29<sup>,00 €</sup>
        </span>
      </div>
      <p className="offer-regular">Prix indicatif : <s>97 €</s></p>
      <a className="gold-button" href={CHECKOUT_URL} onClick={(event) => {
        if (CHECKOUT_URL === "#offer") {
          event.preventDefault();
          document.querySelector("#offer")?.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }}>
        Accéder au programme <span aria-hidden="true">→</span>
      </a>
      <p className="offer-note">Lien de commande à configurer avant publication</p>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="landing-shell">
      <header className="editorial-header">
        <button className="header-icon" aria-label="Ouvrir le menu"><Menu size={19} strokeWidth={1.8} /></button>
        <div className="masthead" aria-label="Cahier Santé">
          <span>CAHIER</span>
          <em>Santé</em>
        </div>
        <button className="header-icon" aria-label="Profil"><CircleUserRound size={19} strokeWidth={1.8} /></button>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="eyebrow"><span></span> Dossier bien-être &amp; vitalité</div>
          <h1 id="hero-title">
            Une routine naturelle, pensée pour vous aider à <em>prendre soin de votre clarté au quotidien.</em>
          </h1>
          <p className="hero-intro">
            Découvrez une approche structurée autour de l'alimentation, du repos et de petits rituels faciles à intégrer chez vous.
          </p>

          <div className="video-stage" aria-label="Présentation vidéo du programme">
            <div className="video-grain"></div>
            <div className="video-copy">
              <span className="video-kicker"><Sparkles size={14} /> Présentation privée</span>
              <p>Un parcours pratique pour remettre de l'intention dans vos habitudes.</p>
            </div>
            <button className="play-control" aria-label="Lire la présentation">
              <Play size={24} fill="currentColor" />
            </button>
            <div className="video-status"><Volume2 size={14} /> Activez le son</div>
            <div className="video-timeline"><span></span></div>
          </div>
          <p className="video-caption"><Clock3 size={14} /> Présentation de démonstration — remplacez par votre vidéo ou player.</p>
        </section>

        <section className="offer-intro section-wrap" aria-label="Offre de lancement">
          <OfferCard />
          <div className="intro-copy">
            <div className="ornament">✦</div>
            <h2>Commencez un parcours plus intentionnel, dès aujourd'hui.</h2>
            <p>
              Un guide numérique clair pour structurer vos habitudes, observer vos progrès et réintroduire de la simplicité dans votre quotidien.
            </p>
          </div>
          <div className="product-visual" aria-hidden="true">
            <div className="product-sun"></div>
            <div className="product-book product-book-back"></div>
            <div className="product-book product-book-front">
              <span>LE GUIDE</span>
              <strong>Clarté<br />quotidienne</strong>
              <i>90 jours pour créer vos repères</i>
            </div>
            <div className="product-jar"><span>H</span></div>
            <div className="product-shadow"></div>
          </div>
        </section>

        <section className="guarantee-panel section-wrap" aria-label="Garantie et précautions">
          <div className="seal" aria-hidden="true">
            <span>180</span>
            <small>JOURS</small>
          </div>
          <div className="guarantee-content">
            <span className="section-overline light">Sérénité incluse</span>
            <h2>Votre décision mérite d'être prise en toute confiance.</h2>
            <p className="guarantee-highlight">Garantie de remboursement annoncée pendant 180 jours</p>
            <p>
              La structure reproduit une page d'offre avec une promesse de garantie. Avant toute mise en ligne, remplacez ce texte par vos conditions commerciales réelles, vos mentions légales et votre politique de remboursement.
            </p>
          </div>
          <div className="trust-row" aria-label="Indicateurs de confiance">
            <span><ShieldCheck size={18} /> Accès numérique</span>
            <span><ShieldCheck size={18} /> Paiement sécurisé</span>
            <span><ShieldCheck size={18} /> Support client</span>
          </div>
          <div className="disclaimer">
            <strong>Information importante.</strong> Cette maquette ne constitue pas une recommandation médicale et ne doit pas être utilisée pour diagnostiquer, traiter, guérir ou prévenir une maladie. Consultez un professionnel de santé pour toute question médicale.
          </div>
        </section>

        <section className="benefits-section section-wrap" aria-labelledby="benefits-title">
          <div className="benefit-heading">
            <span className="section-overline">Un cadre simple</span>
            <h2 id="benefits-title">Retrouvez des repères pour un quotidien plus clair.</h2>
            <p>
              La page est organisée pour présenter une proposition de valeur, détailler les bénéfices et guider naturellement vers l'offre.
            </p>
            <a className="gold-button inline-button" href="#offer">Voir l'offre de découverte <span aria-hidden="true">→</span></a>
          </div>
          <ul className="benefit-list">
            {benefits.map((benefit, index) => (
              <li key={benefit}>
                <span className="benefit-index">0{index + 1}</span>
                <p>{benefit}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="reviews-section" aria-labelledby="reviews-title">
          <div className="section-wrap">
            <div className="reviews-heading">
              <span className="section-overline">Paroles de lecteurs</span>
              <h2 id="reviews-title">Ce que partage notre communauté.</h2>
            </div>
            <div className="review-grid">
              {testimonials.map((testimonial) => (
                <article className="review-card" key={testimonial.name}>
                  <span className="quote-mark">“</span>
                  <p>{testimonial.quote}</p>
                  <footer>
                    <div className={`avatar ${testimonial.tone}`}>{testimonial.initials}</div>
                    <div><strong>{testimonial.name}</strong><small>{testimonial.detail}</small></div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-offer section-wrap" aria-labelledby="final-offer-title">
          <span className="section-overline">Accès immédiat</span>
          <h2 id="final-offer-title">Prêt à créer vos nouveaux repères ?</h2>
          <p>Ne laissez pas cette invitation rester une simple intention.</p>
          <Countdown />
          <div className="final-layout">
            <div className="guide-mini" aria-hidden="true">
              <span>LE GUIDE</span>
              <strong>Clarté<br />quotidienne</strong>
              <div className="guide-mini-line"></div>
              <small>ÉDITION NUMÉRIQUE</small>
            </div>
            <OfferCard compact />
          </div>
        </section>

        <section className="faq-section section-wrap" aria-labelledby="faq-title">
          <span className="section-overline">Tout savoir</span>
          <h2 id="faq-title">Questions fréquentes</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <article className={`faq-item ${isOpen ? "is-open" : ""}`} key={faq.question}>
                  <button onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}>
                    <span>{faq.question}</span>
                    <ChevronDown size={20} />
                  </button>
                  <div className="faq-answer"><p>{faq.answer}</p></div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="page-footer">
        <div className="masthead footer-mark"><span>CAHIER</span><em>Santé</em></div>
        <p>© 2026 Cahier Santé. Maquette de landing page — informations et intégrations à personnaliser avant diffusion.</p>
        <p>Cette page est une démo d'interface; les avantages, prix, conditions de garantie et liens de paiement doivent être validés par le responsable de l'offre.</p>
      </footer>
    </div>
  );
}
