import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Bot,
  Brain,
  Check,
  DatabaseZap,
  FileBarChart,
  Globe,
  Handshake,
  Image,
  Mail,
  MessageSquare,
  PenTool,
  Share2,
  Sparkles,
  Store,
  Wrench,
} from 'lucide-react';
import './styles.css';

const sixinchCrownUrl = 'https://szlfbylxjeqvoaetyove.supabase.co/storage/v1/object/public/public-media/crown.png';

const serviceBlocks = [
  {
    icon: Globe,
    title: 'Servicio Web Master',
    text: 'Administracion integral del sitio web: contenidos, actualizaciones, mejoras visuales, rebranding, landings, catalogos digitales y soporte de performance.',
  },
  {
    icon: Wrench,
    title: 'Herramientas a la medida',
    text: 'Desarrollo de soluciones internas para apoyar la gestion del equipo: automatizaciones, portales, formularios, dashboards y flujos conectados al negocio.',
  },
  {
    icon: Bot,
    title: 'Operacion con agentes',
    text: 'Implementacion y entrenamiento de agentes para pauta digital, gestion de redes, asistentes comerciales e internos, respuestas operativas y seguimiento.',
  },
  {
    icon: Sparkles,
    title: 'Tecnologia creativa de punta',
    text: 'Implementacion de herramientas avanzadas para que el equipo pueda crear imagenes, videos, piezas de marca y material de apoyo para ventas, reps, email y contenido social.',
  },
];

const capabilities = [
  ['Diseño paramétrico CAD', PenTool],
  ['Pauta digital asistida por agentes y seguimiento de rendimiento', Share2],
  ['Asistentes de gestion interna y externa, incluyendo Violeta', MessageSquare],
  ['Herramientas para crear imágenes y videos alineados a la marca', Image],
  ['Email marketing, newsletters, nurturing y lead generation', Mail],
  ['Portal para representantes y material comercial actualizado', Store],
  ['CRM inteligente, reportes ejecutivos y pipeline comercial', FileBarChart],
  ['ERP empresarial y modernizacion tecnologica por etapas', DatabaseZap],
];

const monthlyFlow = [
  'Diagnostico y priorizacion del backlog tecnologico.',
  'Ejecucion de mejoras web, automatizaciones y piezas operativas.',
  'Seguimiento de canales, pauta, contenido y captacion.',
  'Reporte mensual con avances, prioridades y proximas decisiones.',
];

const conditions = [
  'Contrato de gestion mensual como partner tecnologico.',
  'Incluye direccion, ejecucion, soporte y mejora continua de las iniciativas descritas.',
  'No incluye costos de pauta publicitaria, licencias externas, produccion fisica, compra de software ni costos de terceros; estos costos operativos son asumidos por Sixinch Americas.',
  'Los entregables se trabajan bajo fechas pactadas con el equipo Sixinch Americas para mantener trazabilidad y orden.',
];

function LogoMark() {
  return (
    <div className="logo-mark" aria-label="Sixinch Americas">
      <img src={sixinchCrownUrl} alt="" aria-hidden="true" />
      <div>
        <span>six</span>
        <strong>inch</strong>
        <small>americas</small>
      </div>
    </div>
  );
}

function App() {
  return (
    <main>
      <section className="hero-section">
        <nav className="nav">
          <LogoMark />
          <a className="nav-link" href="#cotizacion">
            Ver cotizacion <ArrowUpRight size={16} />
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Cotizacion de servicios mensuales</p>
            <h1>Partner tecnologico para Sixinch Americas</h1>
            <p className="hero-text">
              Proponemos una gestion mensual para sostener, evolucionar y modernizar el ecosistema digital de Sixinch Americas: web, herramientas internas, agentes, marketing, reportes y tecnologia comercial.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#alcance">
                Revisar alcance
              </a>
              <a className="button secondary" href="#cotizacion">
                USD 3,000 / mes
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Sixinch sculptural coated foam furniture">
            <img
              src="https://szlfbylxjeqvoaetyove.supabase.co/storage/v1/object/public/public-media/Sixinch-2017A-B-024web.jpg"
              alt="Sixinch Americas sculptural coated foam furniture"
            />
            <div className="visual-caption">
              <span>No frames. No limits.</span>
              <strong>Technology built around the brand.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-band">
        <div>
          <p className="section-kicker">Para el equipo de Sixinch Americas</p>
          <h2>Un solo partner para mantener la operacion digital viva, ordenada y creciendo.</h2>
        </div>
        <p>
          El paquete concentra direccion tecnologica, automatizacion, herramientas creativas y soporte mensual. No buscamos reemplazar al equipo actual, sino proporcionarle herramientas y acompanamiento para que no necesite expandirse mas y pueda potenciar su eficiencia operativa actual.
        </p>
      </section>

      <section className="section" id="alcance">
        <div className="section-heading">
          <p className="section-kicker">Alcance principal</p>
          <h2>Gestion mensual organizada en cuatro frentes.</h2>
        </div>
        <div className="service-grid">
          {serviceBlocks.map((item) => {
            const Icon = item.icon;
            return (
              <article className="service-card" key={item.title}>
                <Icon size={26} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section split-section">
        <div className="sticky-title">
          <p className="section-kicker">Capacidades incluidas</p>
          <h2>Soporte transversal para web, marketing, ventas y gestion interna.</h2>
          <p>
            Cada mes se define un backlog de prioridades y se ejecutan las iniciativas que mayor impacto tengan sobre captacion, eficiencia, comunicacion y experiencia de marca.
          </p>
        </div>
        <div className="capability-list">
          {capabilities.map(([label, icon]) => {
            const Icon = icon;
            return (
              <div className="capability-row" key={label}>
                <Icon size={20} />
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="process-section">
        <div className="section-heading">
          <p className="section-kicker">Operacion mensual</p>
          <h2>Un ciclo claro para avanzar sin friccion.</h2>
        </div>
        <div className="process-grid">
          {monthlyFlow.map((item, index) => (
            <div className="process-step" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="quote-section" id="cotizacion">
        <div className="quote-card">
          <div>
            <p className="section-kicker">Inversion mensual</p>
            <h2>USD 3,000</h2>
            <p className="quote-subtitle">Gestion continua como partner tecnologico de Sixinch Americas.</p>
          </div>
          <div className="quote-details">
            <div className="detail-line">
              <span>Modalidad</span>
              <strong>Retainer mensual</strong>
            </div>
            <div className="detail-line">
              <span>Forma de pago</span>
              <strong>Mensual o quincenal, segun definicion interna del equipo</strong>
            </div>
            <div className="detail-line">
              <span>Enfoque</span>
              <strong>Web, agentes, marketing y sistemas</strong>
            </div>
            <div className="detail-line">
              <span>Direccion</span>
              <strong>Equipo SolversAI</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section conditions">
        <div className="section-heading compact">
          <p className="section-kicker">Condiciones</p>
          <h2>Claridad desde el inicio.</h2>
        </div>
        <div className="condition-list">
          {conditions.map((item) => (
            <div className="condition" key={item}>
              <Check size={18} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div>
          <LogoMark />
          <p>Propuesta preparada para el equipo de Sixinch Americas.</p>
        </div>
        <div className="footer-badge">
          <Handshake size={18} />
          <span>Partner tecnologico mensual</span>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
