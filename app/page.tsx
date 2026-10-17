import { SiteHeader } from "@/components/SiteHeader";
import { Portrait } from "@/components/Portrait";
import { SealStrip } from "@/components/SealStrip";
import {
  contact,
  firm,
  mapsLink,
  offices,
  partners,
  practiceAreas,
  recognitions,
  seals,
  socials,
  whatsappLink,
} from "@/lib/content";

const channels = [
  {
    label: "WhatsApp",
    value: contact.whatsappDisplay,
    action: "Iniciar conversa",
    href: whatsappLink("Olá, gostaria de falar com o escritório Afonso Nobre Advocacia."),
    external: true,
  },
  { label: "Telefone", value: contact.phoneDisplay, action: "Ligar", href: contact.phoneHref, external: false },
  { label: "E-mail", value: contact.email, action: "Escrever", href: `mailto:${contact.email}`, external: false },
  {
    label: "Instagram",
    value: "@afonsonobreadvocacia",
    action: "Ver perfil",
    href: "https://www.instagram.com/afonsonobreadvocacia/",
    external: true,
  },
];

export default function Home() {
  const yearsActive = new Date().getFullYear() - firm.since;

  return (
    <>
      <a className="an-skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <SiteHeader />

      <main id="conteudo">
        {/* Hero */}
        <section id="inicio" className="an-hero" aria-labelledby="hero-title">
          <div className="an-hero__text">
            <p className="an-hero__place">
              {firm.city} e Paragominas, {firm.state}. Desde {firm.since}.
            </p>
            <h1 id="hero-title" className="an-hero__title">
              Direito agrário, ambiental e empresarial para quem constrói o Pará.
            </h1>
            <p className="an-hero__lead">
              Há {yearsActive} anos, o {firm.name} assessora produtores, investidores, empresas e
              famílias com atendimento especializado e próximo, da regularização da terra ao
              planejamento do patrimônio.
            </p>
            <div className="an-hero__actions">
              <a
                className="an-button an-button--solid"
                href={whatsappLink("Olá, gostaria de falar com o escritório Afonso Nobre Advocacia.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conversar no WhatsApp
              </a>
              <a className="an-button an-button--ghost" href="#atuacao">
                Ver áreas de atuação
              </a>
            </div>
          </div>

          <div className="an-hero__media">
            <Portrait src={partners[0].photo} name={partners[0].name} priority className="an-hero__photo an-hero__photo--a" />
            <Portrait src={partners[1].photo} name={partners[1].name} priority className="an-hero__photo an-hero__photo--b" />
            <p className="an-hero__caption">
              {partners[0].name} e {partners[1].name}, sócias
            </p>
          </div>
        </section>

        {/* Atuação */}
        <section id="atuacao" className="an-practice" aria-labelledby="practice-title">
          <div className="an-practice__inner">
            <div className="an-practice__intro">
              <h2 id="practice-title" className="an-practice__title">
                Onde atuamos
              </h2>
              <p>
                Sete frentes que acompanham a economia do estado: a terra, o meio ambiente, as
                empresas, o porto e as famílias que dão continuidade a tudo isso.
              </p>
              <a className="an-link an-link--light" href="#contato">
                Descreva seu caso e indicamos a área certa
              </a>
            </div>
            <ul className="an-practice__list">
              {practiceAreas.map((area) => (
                <li key={area.title} className="an-practice__item">
                  <h3 className="an-practice__name">{area.title}</h3>
                  <p className="an-practice__summary">{area.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sócias */}
        <section id="socias" className="an-partners" aria-labelledby="partners-title">
          <div className="an-partners__head">
            <h2 id="partners-title" className="an-section-title">
              Quem conduz o escritório
            </h2>
            <p className="an-partners__intro">
              Um escritório moderno e dinâmico, reconhecido pelo atendimento especializado em
              direito agrário, ambiental, agronegócio, civil, empresarial, fundiário e imobiliário.
            </p>
          </div>
          <div className="an-partners__grid">
            {partners.map((partner, index) => (
              <article key={partner.name} className={`an-partner an-partner--${index === 0 ? "first" : "second"}`}>
                <Portrait src={partner.photo} name={partner.name} className="an-partner__photo" />
                <div className="an-partner__body">
                  <h3 className="an-partner__name">{partner.name}</h3>
                  <p className="an-partner__focus">{partner.focus}</p>
                  <p className="an-partner__oab">{partner.oab}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Reconhecimento */}
        <section id="reconhecimento" className="an-awards" aria-labelledby="awards-title">
          <div className="an-awards__inner">
            <div className="an-awards__head">
              <h2 id="awards-title" className="an-section-title">
                Reconhecimento
              </h2>
              <p>
                Presença contínua nos rankings da Análise Advocacia desde 2021, nas edições
                nacional, regional da Região Norte e Mulher.
              </p>
            </div>
            <ol className="an-timeline" reversed>
              {recognitions.map((entry) => (
                <li key={entry.year} className="an-timeline__year">
                  <h3 className="an-timeline__label">{entry.year}</h3>
                  <ul className="an-timeline__items">
                    {entry.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <SealStrip seals={seals} />
          </div>
        </section>

        {/* Contato + Escritórios */}
        <section id="contato" className="an-contact" aria-labelledby="contact-title">
          <div className="an-contact__inner">
            <div className="an-contact__head">
              <h2 id="contact-title" className="an-contact__title">
                Fale com quem entende do seu negócio.
              </h2>
              <p className="an-contact__lead">Escolha o canal que preferir para falar com o escritório.</p>
            </div>

            <ul className="an-channels">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    className="an-channel"
                    href={channel.href}
                    {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <span className="an-channel__label">{channel.label}</span>
                    <span className="an-channel__value">{channel.value}</span>
                    <span className="an-channel__action">{channel.action}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div id="escritorios" className="an-offices">
              {offices.map((office) => (
                <address key={office.city} className="an-office">
                  <h3 className="an-office__city">{office.city}</h3>
                  {office.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                  <a
                    className="an-link an-link--light"
                    href={mapsLink(office.mapsQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir no mapa
                  </a>
                </address>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="an-footer">
        <div className="an-footer__inner">
          <p className="an-footer__name">
            {firm.name}
            <span>Advocacia especializada desde {firm.since}</span>
          </p>
          <ul className="an-footer__links">
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
            <li>
              <a href={firm.site} target="_blank" rel="noopener noreferrer">
                Site institucional
              </a>
            </li>
            <li>
              <a href={firm.privacyPolicy} target="_blank" rel="noopener noreferrer">
                Política de Privacidade
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
