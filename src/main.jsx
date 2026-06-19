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
  MessageSquare,
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
    title: 'Cambios sin limite',
    text: 'La mensualidad permite atender cambios de pagina sin limite fijo, priorizados con el equipo Sixinch dentro del ciclo mensual de trabajo.',
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
  ['Violeta se entrega con todo lo laborado hasta el momento', MessageSquare],
  ['Habilidades y conocimientos base disponibles para que el equipo pueda conocerla', Brain],
  ['Uso inicial orientado a validar que tan util seria para la operacion de Sixinch', Check],
  ['Optimizacion futura definida a partir de hallazgos reales del equipo', DatabaseZap],
  ['Configurador como herramienta adicional de apoyo comercial y operativo', Store],
  ['Gestion mensual del configurador para ajustes, soporte y seguimiento', Wrench],
  ['Materiales, reportes o mejoras futuras se priorizan despues de la validacion', FileBarChart],
  ['Cada nuevo alcance se aprueba con claridad antes de iniciar', Handshake],
];

const monthlyFlow = [
  'Recepcion y priorizacion de solicitudes web del mes.',
  'Ejecucion de cambios web sin limite fijo, organizados por prioridad y disponibilidad mensual.',
  'Revision preventiva de enlaces, contenido, estabilidad y experiencia.',
  'Reporte corto con cambios hechos, pendientes y proximas decisiones.',
];

const conditions = [
  'La Administracion Web Master tiene un valor fijo de USD 1,200 mensuales.',
  'La mensualidad de la web incluye cambios sin limite fijo sobre paginas, textos, imagenes, enlaces, botones o secciones existentes.',
  'El alcance se organiza por prioridad mensual para mantener orden, trazabilidad y buena ejecucion.',
  'El configurador tiene un valor de implementacion de USD 1,500.',
  'La gestion mensual del configurador tiene un valor de USD 300 mensuales.',
  'Violeta se entrega como obsequio con todo lo laborado hasta el momento para que Sixinch pueda conocer la herramienta, usarla con el equipo y evaluar su utilidad real.',
  'La optimizacion futura de Violeta se define despues de que Sixinch pruebe la herramienta y determine que ajustes o mejoras necesita.',
  'No incluye pauta publicitaria, licencias externas, produccion fisica, compra de software ni costos de terceros.',
];

const webComparisonRows = [
  ['Administracion web durante 12 meses', 'USD 14,400', 'Mayor costo si cada ajuste se cotiza por separado'],
  ['Cambios mensuales de pagina', 'Sin limite fijo', 'Cada solicitud requiere aprobacion y cotizacion individual'],
  ['Soporte y prevencion', 'Continuo', 'Se paga cuando aparece la urgencia'],
  ['Control operativo', 'Prioridades, seguimiento y trazabilidad mensual', 'Mas espera, mas aprobaciones y mas costos sueltos'],
];

const capabilityComparisonRows = [
  ['Configurador digital', 'Implementacion inicial', 'USD 1,500'],
  ['Gestion del configurador', 'Acompanamiento, ajustes y soporte mensual', 'USD 300 / mes'],
  ['Violeta', 'Obsequio del trabajo realizado hasta el momento', 'Sin costo inicial y sin mensualidad'],
  ['Optimizacion futura de Violeta', 'Se define despues de la prueba con el equipo', 'Alcance por aprobar si Sixinch lo solicita'],
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
            <h1>Web sin limite. Configurador y Violeta.</h1>
            <p className="hero-text">
              Sixinch cuenta con una propuesta clara: Administracion Web Master por USD 1,200 al mes con cambios sin limite fijo, configurador por USD 1,500 con gestion mensual de USD 300, y Violeta como obsequio del trabajo realizado hasta el momento.
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
          <h2>Una mensualidad para administrar la pagina con libertad de cambios.</h2>
        </div>
        <p>
          El objetivo es que Sixinch tenga una web activa, cuidada y flexible, sin convertir cada ajuste en una cotizacion. El configurador se incorpora como un entregable adicional y Violeta se entrega para que el equipo pueda conocerla, probarla y optimizarla con criterio.
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
          <p className="section-kicker">Violeta obsequiada</p>
          <h2>Violeta se entrega como obsequio para que Sixinch la conozca en uso real.</h2>
          <p>
            Todo lo laborado hasta el momento queda a disposicion de Sixinch para que el equipo explore la herramienta, identifique oportunidades y determine que tan util puede ser en su operacion diaria.
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
            <h2>USD 1,200</h2>
            <p className="quote-subtitle">Administracion Web Master para mantener la pagina de Sixinch activa, cuidada y actualizada, con cambios sin limite fijo cada mes.</p>
          </div>
          <div className="quote-details">
            <div className="detail-line">
              <span>Modalidad</span>
              <strong>Mensualidad fija web</strong>
            </div>
            <div className="detail-line">
              <span>Incluye</span>
              <strong>Cambios web sin limite fijo</strong>
            </div>
            <div className="detail-line">
              <span>Configurador</span>
              <strong>USD 1,500 implementacion + USD 300 / mes gestion</strong>
            </div>
            <div className="detail-line">
              <span>Violeta</span>
              <strong>Obsequio del trabajo realizado hasta el momento</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section activation-section">
        <div className="section-heading">
          <p className="section-kicker">Entregables adicionales</p>
          <h2>Configurador con gestion mensual. Violeta como obsequio para el equipo.</h2>
        </div>
        <div className="activation-grid">
          <article className="activation-card primary-activation">
            <Brain size={28} />
            <span>Violeta</span>
            <h3>Obsequio</h3>
            <p>Se entrega todo lo laborado hasta el momento para que Sixinch pueda conocer la herramienta, probarla con el equipo y optimizarla con base en uso real.</p>
          </article>
          <article className="activation-card">
            <Sparkles size={28} />
            <span>Configurador</span>
            <h3>USD 1,500</h3>
            <p>Implementacion del configurador como herramienta adicional para apoyar la experiencia comercial y operativa de Sixinch.</p>
          </article>
          <article className="activation-card">
            <Handshake size={28} />
            <span>Gestion mensual configurador</span>
            <h3>USD 300 / mes</h3>
            <p>Acompanamiento mensual para ajustes, seguimiento, soporte y mejoras relacionadas con el configurador.</p>
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
            <span role="columnheader">Con USD 1,200 / mes</span>
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
            <strong role="cell">Costo fijo, cambios sin limite fijo y control mensual</strong>
            <strong role="cell">Mas aprobaciones, mas espera y mas costos sueltos</strong>
          </div>
        </div>

        <div className="comparison-label comparison-label-spaced">Configurador y Violeta</div>
        <div className="comparison-table" role="table" aria-label="Comparacion del programa de capacidades operativas">
          <div className="comparison-row comparison-head" role="row">
            <span role="columnheader">Escenario</span>
            <span role="columnheader">Propuesta</span>
            <span role="columnheader">Valor</span>
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
            <strong role="cell">Sixinch recibe Violeta como obsequio para validar su utilidad.</strong>
            <strong role="cell">El configurador se separa con implementacion y gestion mensual claras.</strong>
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
          <span>Web + configurador + Violeta</span>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
