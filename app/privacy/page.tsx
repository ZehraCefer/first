"use client";
import React from 'react';
import { InformationCircleIcon, ShieldCheckIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const Privacy = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-[#121212] rounded-lg shadow-md mt-12 mb-32">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">Datenschutzerklärung</h1>
      <p className="text-white mb-6 text-lg text-center">
        Ihre Privatsphäre ist uns wichtig. Diese Richtlinie beschreibt die Arten von Daten, die wir sammeln, wie wir sie verwenden und die Schritte, die wir unternehmen, um deren Sicherheit zu gewährleisten.
      </p>

      <div className="space-y-8">
        {/* Information We Collect Section */}
        <div className="flex items-start bg-[#121212] p-4 border-l-4 border-[#9013fe] rounded-lg transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-lg">
          <InformationCircleIcon className="h-8 w-8 text-[#9013fe] mr-4 transition-transform duration-300 group-hover:scale-110" />
          <div>
            <h2 className="text-2xl font-semibold text-[#9013fe] mb-2">Informationen, die wir sammeln</h2>
            <p className="text-white text-base">
              Wir sammeln bestimmte persönliche Informationen, wenn Sie unsere Website nutzen, ein Konto erstellen oder uns kontaktieren. Dazu gehören möglicherweise Ihr Name, Ihre E-Mail-Adresse und Details zu Ihren Interaktionen auf unserer Seite.
            </p>
          </div>
        </div>

        {/* How We Use Your Data Section */}
        <div className="flex items-start bg-[#121212] p-4 border-l-4 border-[#9013fe] rounded-lg transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-lg">
          <ShieldCheckIcon className="h-8 w-8 text-[#9013fe] mr-4 transition-transform duration-300 group-hover:scale-110" />
          <div>
            <h2 className="text-2xl font-semibold text-[#9013fe] mb-2">Unsere Verwendung Ihrer Daten</h2>
            <p className="text-white text-base">
              Wir nutzen die gesammelten Daten, um unsere Dienstleistungen zu verbessern, mit Ihnen in Kontakt zu bleiben und Ihre Erfahrung auf unserer Plattform persönlicher und angenehmer zu gestalten.
            </p>
          </div>
        </div>

        {/* Cookies and Tracking Technologies Section */}
        <div className="flex items-start bg-[#121212] p-4 border-l-4 border-[#9013fe] rounded-lg transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-lg">
          <UserCircleIcon className="h-8 w-8 text-[#9013fe] mr-4 transition-transform duration-300 group-hover:scale-110" />
          <div>
            <h2 className="text-2xl font-semibold text-[#9013fe] mb-2">Cookies und Tracking</h2>
            <p className="text-white text-base">
              Wir verwenden Cookies und ähnliche Tracking-Technologien, um Ihre Erfahrung zu verbessern und den Website-Verkehr zu analysieren. Diese Tools helfen uns, Ihr Engagement auf unserer Seite besser zu verstehen.
            </p>
          </div>
        </div>

        {/* Data Security Section */}
        <div className="flex items-start bg-[#121212] p-4 border-l-4 border-[#9013fe] rounded-lg transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-lg">
          <ShieldCheckIcon className="h-8 w-8 text-[#9013fe] mr-4 transition-transform duration-300 group-hover:scale-110" />
          <div>
            <h2 className="text-2xl font-semibold text-[#9013fe] mb-2">Schutz Ihrer Daten</h2>
            <p className="text-white text-base">
              Wir legen großen Wert auf die Sicherheit Ihrer Daten und setzen strenge Maßnahmen gegen unbefugten Zugriff, Änderungen oder Verlust ein, um sicherzustellen, dass Ihre persönlichen Informationen sicher bleiben.
            </p>
          </div>
        </div>

        {/* Your Rights Section */}
        <div className="flex items-start bg-[#121212] p-4 border-l-4 border-[#9013fe] rounded-lg transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-lg">
          <InformationCircleIcon className="h-8 w-8 text-[#9013fe] mr-4 transition-transform duration-300 group-hover:scale-110" />
          <div>
            <h2 className="text-2xl font-semibold text-[#9013fe] mb-2">Ihre Datenschutzrechte</h2>
            <p className="text-white text-base">
              Sie haben das Recht, Zugriff auf Ihre bei uns gespeicherten persönlichen Informationen zu verlangen sowie Aktualisierungen oder Löschungen zu beantragen. Wir sind bestrebt, diese Rechte im Einklang mit den geltenden Gesetzen zu achten.
            </p>
          </div>
        </div>

        {/* Changes to This Policy Section */}
        <div className="flex items-start bg-[#121212] p-4 border-l-4 border-[#9013fe] rounded-lg transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-lg">
          <UserCircleIcon className="h-8 w-8 text-[#9013fe] mr-4 transition-transform duration-300 group-hover:scale-110" />
          <div>
            <h2 className="text-2xl font-semibold text-[#9013fe] mb-2">Aktualisierungen dieser Richtlinie</h2>
            <p className="text-white text-base">
              Wir können diese Richtlinie von Zeit zu Zeit aktualisieren. Änderungen werden hier veröffentlicht, und wir empfehlen Ihnen, die Richtlinie gelegentlich zu überprüfen, um über unsere Praktiken informiert zu bleiben.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
