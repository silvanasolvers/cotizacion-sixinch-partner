import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
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
    title: 'Administracion Web Master',
    text: 'Cuidado mensual del sitio web: estabilidad, contenidos, ajustes visuales, enlaces, imagenes, landings menores y soporte de publicacion.',
  },
  {
    icon: Wrench,
    title: 'Mesa de cambios incluida',
    text: 'Hasta 10 cambios mensuales de pagina incluidos. Despues de ese alcance, cada solicitud adicional tiene una tarifa clara y predecible.',
  },
  {
    icon: Check,
    title: 'Control de contenido',
    text: 'Revision de textos, botones, imagenes, enlaces, secciones existentes y pequenas paginas internas para mantener la experiencia al dia.',
  },
  {
    icon: Wrench,
    title: 'Soporte preventivo',
    text: 'Seguimiento mensual de estabilidad, publicacion y pendientes para que la pagina no dependa de urgencias ni cotizaciones sueltas.',
  },
];

const capabilities = [
  ['Violeta ya construida con habilidades y conocimientos base para apoyar al equipo', MessageSquare],
  ['Parrilla generadora y hub centralizado para redes sociales', Share2],
  ['Material comercial actualizado para representantes y distribuidores', Store],
  ['Herramientas para crear imagenes y videos alineados a la marca', Image],
  ['Email marketing, newsletters, nurturing y lead generation', Mail],
  ['CRM inteligente, reportes ejecutivos y pipeline comercial', FileBarChart],
  ['Diseño paramétrico CAD y apoyo a flujos de producto', PenTool],
  ['Modernizacion operativa por etapas, sin inflar la mensualidad base', DatabaseZap],
];

const monthlyFlow = [
  'Recepcion y priorizacion de solicitudes web del mes.',
  'Ejecucion de hasta 10 cambios incluidos en la pagina.',
  'Revision preventiva de enlaces, contenido, estabilidad y experiencia.',
  'Reporte corto con cambios hechos, pendientes y proximas decisiones.',
];

const conditions = [
  'La Administracion Web Master tiene un valor fijo de USD 535 mensuales.',
  'La mensualidad de la web incluye hasta 10 cambios mensuales sobre paginas, textos, imagenes, enlaces, botones o secciones existentes.',
  'Cambios adicionales: USD 45 por cambio simple, USD 120 por bloque avanzado y USD 260 por landing interna o pagina corta.',
  'Violeta ya existe con habilidades y conocimientos base para apoyar al equipo Sixinch. No tiene mensualidad adicional.',
  'Los nuevos poderes de Violeta se aprueban por solicitud: USD 850 por poder simple, desde USD 1,450 por poder avanzado y desde USD 2,800 por capacidad estrategica.',
  'Cada ciclo de ajuste, prueba o refinamiento posterior a una habilidad aprobada tiene un valor desde USD 450.',
  'No incluye pauta publicitaria, licencias externas, produccion fisica, compra de software ni costos de terceros.',
  'La recomendacion es mantener la web con mensualidad fija y activar poderes de Violeta solo cuando Sixinch los necesite y apruebe.',
];

const webComparisonRows = [
  ['Administracion web durante 12 meses', 'USD 6,420', 'USD 9,300 estimados'],
  ['10 cambios mensuales incluidos', 'Incluido', 'Hasta USD 5,400 al ano solo en cambios simples'],
  ['Soporte y prevencion', 'Continuo', 'Se paga cuando aparece la urgencia'],
  ['Violeta', 'Sin mensualidad adicional', 'Nuevos poderes se cotizan por solicitud'],
];

const capabilityComparisonRows = [
  ['Violeta base', 'Ya disponible para el equipo', 'Sin mensualidad adicional'],
  ['Poder simple', 'Se aprueba cuando sea necesario', 'USD 850 por solicitud'],
  ['Poder avanzado', 'Se define por alcance antes de iniciar', 'Desde USD 1,450'],
  ['Capacidad estrategica', 'Requiere alcance, pruebas y entregable formal', 'Desde USD 2,800 + ajustes desde USD 450'],
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
            Ver propuesta <ArrowUpRight size={16} />
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Propuesta de continuidad digital</p>
            <h1>Web mensual. Violeta por poderes.</h1>
            <p className="hero-text">
              Sixinch cuenta con una ruta clara: Administracion Web Master por USD 535 al mes para mantener la pagina activa, y Violeta sin mensualidad adicional. Los nuevos poderes de Violeta se activan por solicitud, solo cuando el equipo los necesite y los apruebe.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#cotizacion">
                Ver mensualidad web
              </a>
              <a className="button secondary" href="#comparativo">
                Ver comparativo
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
              <strong>Una operacion digital alrededor de la marca.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-band">
        <div>
          <p className="section-kicker">Para el equipo de Sixinch Americas</p>
          <h2>Una mensualidad para la pagina. Nuevos poderes de Violeta solo bajo aprobacion.</h2>
        </div>
        <p>
          El objetivo es separar lo recurrente de lo evolutivo. La pagina requiere continuidad mensual; Violeta ya esta construida y sus nuevas habilidades se cotizan como pagos puntuales para que Sixinch conserve control sobre cada decision.
        </p>
      </section>

      <section className="section" id="alcance">
        <div className="section-heading">
          <p className="section-kicker">Oferta 1</p>
          <h2>Administracion Web Master: la operacion normal de la pagina.</h2>
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
          <p className="section-kicker">Violeta y nuevos poderes</p>
          <h2>Violeta ya esta construida. Lo que crece son sus poderes.</h2>
          <p>
            La base de Violeta ya ayuda al equipo con conocimientos y habilidades iniciales. Lo que se cotiza son nuevas habilidades, flujos, automatizaciones, reportes o herramientas que Sixinch vaya necesitando con el uso real.
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
          <h2>Un ciclo claro para mantener la pagina con control.</h2>
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
            <p className="section-kicker">Mensualidad recomendada | Web</p>
            <h2>USD 535</h2>
            <p className="quote-subtitle">Administracion Web Master para mantener la pagina de Sixinch activa, cuidada y actualizada cada mes.</p>
          </div>
          <div className="quote-details">
            <div className="detail-line">
              <span>Modalidad</span>
              <strong>Mensualidad fija web</strong>
            </div>
            <div className="detail-line">
              <span>Incluye</span>
              <strong>10 cambios mensuales de pagina</strong>
            </div>
            <div className="detail-line">
              <span>Adicionales web</span>
              <strong>Desde USD 45 por cambio simple fuera del alcance</strong>
            </div>
            <div className="detail-line">
              <span>Violeta</span>
              <strong>Sin mensualidad; nuevos poderes por pago puntual</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section activation-section">
        <div className="section-heading">
          <p className="section-kicker">Violeta | Poderes por solicitud</p>
          <h2>Violeta no tiene mensualidad. Sus nuevos poderes se aprueban uno por uno.</h2>
        </div>
        <div className="activation-grid">
          <article className="activation-card primary-activation">
            <Brain size={28} />
            <span>Violeta existente</span>
            <h3>Sin mensualidad</h3>
            <p>Violeta ya cuenta con habilidades y conocimientos base para apoyar al equipo Sixinch. No se cobra una mensualidad por mantenerla activa.</p>
          </article>
          <article className="activation-card">
            <Sparkles size={28} />
            <span>Poder simple por solicitud</span>
            <h3>USD 850</h3>
            <p>Nuevo conocimiento, respuesta, plantilla, mini flujo o ajuste operativo concreto solicitado por Sixinch.</p>
          </article>
          <article className="activation-card">
            <Handshake size={28} />
            <span>Poder avanzado por solicitud</span>
            <h3>USD 1,450+</h3>
            <p>Automatizacion, tablero, integracion, flujo comercial o capacidad mas compleja, con alcance aprobado antes de iniciar.</p>
          </article>
        </div>
      </section>

      <section className="section comparison-section" id="comparativo">
        <div className="section-heading">
          <p className="section-kicker">Comparativo financiero</p>
          <h2>La mensualidad evita que cada movimiento se convierta en una cotizacion.</h2>
        </div>
        <div className="comparison-label">Oferta 1: Administracion Web Master</div>
        <div className="comparison-table" role="table" aria-label="Comparacion entre mensualidad y pagos puntuales">
          <div className="comparison-row comparison-head" role="row">
            <span role="columnheader">Escenario</span>
            <span role="columnheader">Con USD 535 / mes</span>
            <span role="columnheader">Pago puntual</span>
          </div>
          {webComparisonRows.map(([scenario, monthly, demand]) => (
            <div className="comparison-row" role="row" key={scenario}>
              <span role="cell">{scenario}</span>
              <strong role="cell">{monthly}</strong>
              <strong role="cell">{demand}</strong>
            </div>
          ))}
          <div className="comparison-row comparison-total" role="row">
            <span role="cell">Decision recomendada</span>
            <strong role="cell">Costo fijo, cambios incluidos y control mensual</strong>
            <strong role="cell">Mas aprobaciones, mas espera y mas costos sueltos</strong>
          </div>
        </div>

        <div className="comparison-label comparison-label-spaced">Violeta: poderes por aprobacion</div>
        <div className="comparison-table" role="table" aria-label="Comparacion del programa de capacidades operativas">
          <div className="comparison-row comparison-head" role="row">
            <span role="columnheader">Escenario</span>
            <span role="columnheader">Estado recomendado</span>
            <span role="columnheader">Pago puntual</span>
          </div>
          {capabilityComparisonRows.map(([scenario, monthly, demand]) => (
            <div className="comparison-row" role="row" key={scenario}>
              <span role="cell">{scenario}</span>
              <strong role="cell">{monthly}</strong>
              <strong role="cell">{demand}</strong>
            </div>
          ))}
          <div className="comparison-row comparison-total" role="row">
            <span role="cell">Lectura financiera</span>
            <strong role="cell">Sixinch conserva control: Violeta no genera mensualidad fija.</strong>
            <strong role="cell">Si se acumulan poderes, conviene priorizar y aprobar por etapas.</strong>
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
          <span>Web mensual + poderes puntuales</span>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
