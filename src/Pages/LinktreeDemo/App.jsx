import { useState } from 'react'
import logo from '/logobeta.png'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function LinksTree() {
  const links = [
    { title: "Ver modelo Funil de Vendas + Quiz", url: "/funnel", targetBlank: false },
    { title: "Ver modelo de Página de Apresentação", url: "/", targetBlank: false },
    { title: "@FastWebBr", url: "https://instagram.com/fastwebbr", logo: <FaInstagram size={24} />, targetBlank: true },
    { title: "Falar comigo no WhatsApp", url: "https://wa.me/5585991169830?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20projetos%20da%20FastWebBR.", logo: <FaWhatsapp size={24} />, targetBlank: true },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <Link key="/links" to="/"><img src={logo} alt="FastWebBR" className="w-24 mb-4 rounded-full" /></Link>
      <h1 className="text-2xl font-bold mb-2"><Link key="/links" to="/">FastWebBR</ Link> </h1>
      <p className="mb-6 text-center">Landing Pages prontas em 48h. A partir de R$97</p>
      <div className="flex flex-col gap-3 w-full max-w-sm">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.url}
            target={link.targetBlank ? "_blank": ""}
            className="relative bg-white text-black py-3 px-4 rounded-lg flex items-center justify-center hover:bg-gray-300 transition"
          >
            {/* Logo fixo no canto esquerdo */}
            <span className="absolute left-4 flex items-center">{link.logo}</span>
          
            {/* Texto centralizado */}
            <span>{link.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

