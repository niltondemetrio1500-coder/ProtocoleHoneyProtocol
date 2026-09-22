import { createElement, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, UserRound } from "lucide-react";

const VSL_REVEAL_SECONDS = 180;
const CHECKOUT_URL = "https://pay.hotmart.com/T107723445C";

const benefits = [
  "Découvrez la véritable cause des pertes de mémoire que les médecins ne vous révèlent jamais.",
  "Des recettes simples à préparer chez vous avec des ingrédients disponibles dans n'importe quel supermarché.",
  "Accédez au protocole où que vous soyez, à tout moment, sans rendez-vous ni attente.",
  "Basé sur des recherches menées à Harvard, au MIT et auprès de populations centenaires.",
  "Suivez un programme d'application de 90 jours et mesurez vos progrès cognitifs.",
  "Rejoignez plus de 22 000 personnes qui ont déjà amélioré leurs capacités de mémoire.",
];

const reviews = [
  ["« J'étais sceptique au début, mais le Protocole Neuro-Honey a tout changé. Mon brouillard mental s'est dissipé en quelques semaines et je peux enfin me souvenir des noms et des conversations. C'était comme retrouver ma vie. »", "Donna Martinez", "Houston, TX — Age 67"],
  ["« Mon brouillard mental a pratiquement disparu. Je résous des mots croisés en un clin d'œil maintenant. Ma fille suit aussi le protocole ! »", "Vicky Nelson, 58", ""],
  ["« Mon cerveau ressemblait à un grenier en désordre. Maintenant, il ressemble à une bibliothèque bien organisée. Toutes les personnes de mon âge devraient y avoir accès. »", "Ronnie Lambert, 65", ""],
  ["« En 34 ans de mariage, c'était la première fois que ma femme louait ma capacité de concentration. Je suis comme un nouveau grand-père pour mes petits-enfants. »", "Richard Barlow, 71", ""],
];

const faqs = [
  ["Comment vais-je recevoir le protocole?", "Vous recevrez un e-mail immédiatement après votre achat, avec un lien sécurisé pour accéder au protocole complet et à tout le contenu bonus. Comme il s'agit d'un produit numérique, il n'y a pas d'attente de livraison."],
  ["Quand pourrai-je constater les premiers résultats ?", "De nombreux utilisateurs rapportent une plus grande clarté et une acuité mentale accrue dès les premières semaines. Les résultats varient selon les personnes, mais le protocole est conçu pour aider dès le premier jour. Les améliorations les plus significatives se produisent entre les semaines 3 et 8."],
  ["Et si cela ne fonctionne pas pour moi ?", "Aucun problème — vous bénéficiez d'une garantie de remboursement inconditionnelle de 180 jours. Si ce n'est pas pour vous, demandez simplement un remboursement. Sans questions, sans tracas."],
  ["Les ingrédients sont-ils faciles à trouver ?", "Oui ! Le protocole a été spécialement conçu avec des ingrédients disponibles dans n'importe quelle épicerie ou magasin de produits naturels. Le Guide des Ingrédients Certifiés vous indique exactement où tout trouver."],
  ["Est-il compatible avec d'autres médicaments ?", "Le Protocole Neuro-Honey utilise des ingrédients naturels généralement compatibles avec la plupart des traitements. Cependant, nous recommandons toujours de consulter votre médecin si vous prenez des médicaments pour des affections neurologiques."],
];

function OfferCard() {
  return (
    <div className="source-offer-card" id="checkout-configure">
      <div className="source-offer-tag">OFFRE</div>
      <div className="source-price-row"><span className="source-discount">-70%</span><strong>29<small>,00 €</small></strong></div>
      <p>Prix habituel : <s>97 €</s></p>
      <a href={CHECKOUT_URL}>ACCÉDER IMMÉDIATEMENT</a>
    </div>
  );
}

function Countdown() {
  const [seconds, setSeconds] = useState(15 * 60);
  useEffect(() => {
    const id = window.setInterval(() => setSeconds((value) => value > 0 ? value - 1 : 0), 1000);
    return () => window.clearInterval(id);
  }, []);
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  return <div className="source-countdown"><div><b>00</b><span>HEURES</span></div><div><b>{min}</b><span>MINUTES</span></div><div><b>{sec}</b><span>SECONDES</span></div></div>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [offersUnlocked, setOffersUnlocked] = useState(() => new URLSearchParams(window.location.search).get("preview") === "1");
  const revealTimer = useRef<number | null>(null);
  const timerStarted = useRef(false);

  useEffect(() => {
    const scriptId = "vturb-player-6ab2848941fb62489316cee3";
    if (document.getElementById(scriptId)) return;
    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.src = "https://scripts.converteai.net/dc8ab8c0-f9ac-47c3-af12-a4174ba40c45/players/6ab2848941fb62489316cee3/v4/player.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const startRevealTimer = () => {
    if (timerStarted.current || offersUnlocked) return;
    timerStarted.current = true;
    revealTimer.current = window.setTimeout(() => setOffersUnlocked(true), VSL_REVEAL_SECONDS * 1000);
  };

  useEffect(() => () => {
    if (revealTimer.current !== null) window.clearTimeout(revealTimer.current);
  }, []);

  return (
    <div className="source-page">
      <header className="source-header">
        <button aria-label="Menu"><Menu size={18} /></button>
        <img src="/manus-storage/nyt-logo_396aef8d.png" alt="The New York Times" />
        <button aria-label="Profil"><UserRound size={15} fill="currentColor" /></button>
      </header>

      <main>
        <h1 className="source-headline">URGENT : Des scientifiques découvrent une solution naturelle contre les pertes de mémoire que vous pouvez préparer chez vous.</h1>

        <section className="source-video" aria-label="VSL">
          <div className="source-video-inner" onClick={startRevealTimer}>
            {createElement("vturb-smartplayer", { id: "vid-6ab2848941fb62489316cee3", style: { display: "block", margin: "0 auto", width: "100%", maxWidth: "400px" } }, createElement("div", { className: "vturb-player-placeholder" }))}
          </div>
        </section>

        <section className={`source-revealed ${offersUnlocked ? "is-unlocked" : "is-locked"}`} aria-label={`Offre visible après ${Math.floor(VSL_REVEAL_SECONDS / 60)} minutes et ${VSL_REVEAL_SECONDS % 60} secondes`}>
          <OfferCard />

          <section className="source-intro">
            <h2>Commencez dès aujourd'hui votre parcours vers un esprit plus vif</h2>
            <p>Accédez immédiatement au Protocole Neuro-Honey et commencez à retrouver vos capacités cognitives, même si rien d'autre n'a fonctionné jusqu'à présent.</p>
            <p className="source-mini-label">Méthode Neuro-Honey</p>
            <OfferCard />
          </section>

          <section className="source-guarantee">
            <div className="source-seal">180<br /><small>JOURS</small></div>
            <h3>100 % satisfait ou remboursé</h3>
            <h4>Garantie de 180 jours</h4>
            <p>Nous sommes tellement convaincus que vous obtiendrez des résultats incroyables que nous garantissons le Protocole Neuro-Honey à 100 % pendant 180 jours. Commencez à l'utiliser dès sa réception et, en quelques jours, vous pourriez remarquer une augmentation d'énergie, un esprit plus clair et une réduction des fringales. En poursuivant votre parcours, vous commencerez à voir des résultats progressifs, ce qui en fait le moment idéal pour suivre vos progrès. Si, après plusieurs semaines ou même des mois, vous n'êtes pas entièrement satisfait, nous vous rembourserons intégralement. Avec le Protocole Neuro-Honey, vous êtes vraiment maître de votre parcours.</p>
            <div className="source-disclaimer"><p>Les déclarations figurant sur ce site n'ont pas été évaluées par la Food and Drug Administration. Les produits ne sont pas destinés à diagnostiquer, traiter, guérir ou prévenir une quelconque maladie.</p><p>Le contenu de ce site et le produit proposé à la vente sont basés sur l'opinion de l'auteur et sont fournis uniquement sur une base « TEL QUEL » et « TEL QUE DISPONIBLE ». Vous devez effectuer vos propres recherches et confirmer les informations auprès d'autres sources lorsque vous recherchez des informations concernant des problèmes de santé...</p><p>© MindHero Research 2026. Tous droits réservés.</p></div>
          </section>

          <section className="source-benefits">
            <h2>Retrouvez un esprit clair, sans brouillard mental</h2>
            <p>Le Protocole Neuro-Honey vous fournit tout ce dont vous avez besoin pour inverser le diabète cérébral et éliminer les toxines, sans science compliquée ni compléments coûteux, uniquement grâce à une approche naturelle.</p>
            <a className="source-gold-button" href={CHECKOUT_URL}>ACCÉDER IMMÉDIATEMENT</a>
            <ul>{benefits.map((benefit) => <li key={benefit}><i />{benefit}</li>)}</ul>
          </section>

          <section className="source-reviews">
            <h2>Ce que les utilisateurs disent du protocole</h2>
            {reviews.map(([quote, name, detail]) => <article key={name}><p>{quote}</p><div><span>{name.slice(0, 1)}</span><strong>{name}<small>{detail}</small></strong></div></article>)}
          </section>

          <section className="source-final">
            <h2>Obtenez votre Protocole Neuro-Honey dès maintenant</h2>
            <p>Ne laissez pas passer cette opportunité</p>
            <Countdown />
            <OfferCard />
          </section>

          <section className="source-faq">
            <h2>Questions fréquentes</h2>
            {faqs.map(([question, answer], index) => <div className={`source-faq-item ${openFaq === index ? "active" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><ChevronDown size={13} /></button><div><p>{answer}</p></div></div>)}
          </section>
        </section>
      </main>

      <footer className={`source-footer ${offersUnlocked ? "is-unlocked" : "is-locked"}`}><p>© 2026 Neuro-Honey Protocol. Tous droits réservés.</p><p>Ce produit n'est pas destiné à diagnostiquer, traiter, guérir ou prévenir une quelconque maladie. Consultez un professionnel de santé avant de commencer tout nouveau protocole de santé.</p></footer>
    </div>
  );
}
