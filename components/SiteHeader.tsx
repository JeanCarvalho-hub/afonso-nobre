"use client";

import { useEffect, useState } from "react";
import { firm } from "@/lib/content";
import { useImageFailed } from "./useImageFailed";

const links = [
  { href: "#atuacao", label: "Atuação" },
  { href: "#socias", label: "Sócias" },
  { href: "#reconhecimento", label: "Reconhecimento" },
  { href: "#escritorios", label: "Escritórios" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const logo = useImageFailed();

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.classList.add("is-locked");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("is-locked");
    };
  }, [open]);

  return (
    <header className="an-header">
      <div className="an-header__inner">
        <a className="an-header__brand" href="#inicio" aria-label={`${firm.name}, voltar ao início`}>
          {logo.failed ? (
            <span className="an-header__wordmark">
              Afonso Nobre <span>Advocacia</span>
            </span>
          ) : (
            <img
              src={firm.logo}
              alt={firm.name}
              width={180}
              height={52}
              className="an-header__logo"
              ref={logo.ref}
              onError={logo.onError}
            />
          )}
        </a>

        <button
          type="button"
          className="an-header__toggle"
          aria-expanded={open}
          aria-controls="an-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="an-header__toggle-bars" aria-hidden="true" />
          <span className="an-visually-hidden">{open ? "Fechar menu" : "Abrir menu"}</span>
        </button>

        <nav id="an-nav" className={`an-header__nav${open ? " is-open" : ""}`} aria-label="Principal">
          <ul className="an-header__list">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="an-header__link" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contato" className="an-button an-button--solid an-header__cta" onClick={() => setOpen(false)}>
            Fale conosco
          </a>
        </nav>
      </div>
    </header>
  );
}
