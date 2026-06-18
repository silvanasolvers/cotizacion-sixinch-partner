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
  ['Violeta como capacidad comercial de atencion y seguimiento', MessageSquare],
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
  'Incluye hasta 10 cambios mensuales sobre paginas, textos, imagenes, enlaces, botones o secciones existentes.',
  'Cambios adicionales: USD 45 por cambio simple, USD 120 por bloque avanzado y USD 260 por landing interna o pagina corta.',
  'El Programa de Capacidades Operativas es una segunda oferta separada y opcional, con valor de USD 1,650 mensuales.',
  'Por demanda, una capacidad individual inicia desde USD 4,800; cada nueva habilidad adicional desde USD 1,450; y cada ciclo de ajuste desde USD 450.',
  'No incluye pauta publicitaria, licencias externas, produccion fisica, compra de software ni costos de terceros.',
  'Ambas ofertas pueden aprobarse juntas o por separado, con alcance, responsables y fechas pactadas con Sixinch Americas.',
];

const webComparisonRows = [
  ['Administracion web durante 12 meses', 'USD 6,420', 'USD 9,300 estimados'],
  ['10 cambios mensuales incluidos', 'Incluido', 'Hasta USD 5,400 al ano solo en cambios simples'],
  ['Soporte y prevencion', 'Continuo', 'Se paga cuando aparece la urgencia'],
  ['Capacidades Operativas', 'No incluidas en esta mensualidad', 'Se aprueban en una oferta separada'],
];

const capabilityComparisonRows = [
  ['Programa durante 6 meses', 'USD 9,900', 'USD 14,750 estimados'],
  ['Violeta + nuevas habilidades', 'Roadmap mensual incluido', 'USD 4,800 inicial + USD 1,450 por habilidad'],
  ['Ajustes, pruebas y medicion', 'Incluidos dentro del ciclo mensual', 'USD 450 por cada ciclo de ajuste'],
  ['Decision recomendada', 'Mensualidad fija si habra evolucion continua', 'Pago unico solo si es una necesidad aislada'],
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
            <h1>Dos ofertas separadas. Una decision clara.</h1>
            <p className="hero-text">
              La Administracion Web Master mantiene la pagina por USD 535 al mes. El Programa de Capacidades Operativas, donde entran Violeta, CRM, contenido, reportes o automatizaciones, es una segunda oferta independiente con una mensualidad propia.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#cotizacion">
                Ver USD 535 / mes
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
              <strong>A digital operation built around the brand.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-band">
        <div>
          <p className="section-kicker">Para el equipo de Sixinch Americas</p>
          <h2>La pagina se administra con una mensualidad. Las capacidades operativas se venden aparte.</h2>
        </div>
        <p>
          El objetivo es que Sixinch pueda decidir con orden. Primero, una base fija para cuidar la web. Segundo, una oferta distinta para construir capacidades como Violeta sin llamarlo desarrollo tecnologico y sin mezclarlo con el mantenimiento.
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
          <p className="section-kicker">Oferta 2 separada</p>
          <h2>Programa de Capacidades Operativas: el nombre correcto para lo que antes sonaba a desarrollo.</h2>
          <p>
            Violeta y las demas iniciativas no hacen parte de los USD 535 de la web. Se presentan como una oferta aparte para que el equipo atienda mejor, produzca mas rapido, venda con mas orden o mida con mas claridad.
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
          <h2>Un ciclo claro para que cada mes tenga control.</h2>
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
            <p className="section-kicker">Oferta 1 | Web</p>
            <h2>USD 535</h2>
            <p className="quote-subtitle">Administracion Web Master para mantener la pagina de Sixinch activa, cuidada y actualizada.</p>
          </div>
          <div className="quote-details">
            <div className="detail-line">
              <span>Modalidad</span>
              <strong>Mensualidad fija</strong>
            </div>
            <div className="detail-line">
              <span>Incluye</span>
              <strong>10 cambios mensuales de pagina</strong>
            </div>
            <div className="detail-line">
              <span>Adicionales</span>
              <strong>Desde USD 45 por cambio simple fuera del alcance</strong>
            </div>
            <div className="detail-line">
              <span>No incluye</span>
              <strong>Violeta, CRM, automatizaciones o nuevas capacidades operativas</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section activation-section">
        <div className="section-heading">
          <p className="section-kicker">Oferta 2 | Operacion</p>
          <h2>Para Violeta y nuevas habilidades conviene una mensualidad separada.</h2>
        </div>
        <div className="activation-grid">
          <article className="activation-card primary-activation">
            <Brain size={28} />
            <span>Programa mensual</span>
            <h3>USD 1,650 / mes</h3>
            <p>Incluye roadmap mensual, evolucion de Violeta, nuevas habilidades operativas, pruebas, ajustes y seguimiento de adopcion.</p>
          </article>
          <article className="activation-card">
            <Sparkles size={28} />
            <span>Compra por demanda</span>
            <h3>USD 4,800</h3>
            <p>Activacion individual de una capacidad como Violeta. Funciona para una necesidad puntual, pero se vuelve mas costosa si se siguen sumando habilidades.</p>
          </article>
          <article className="activation-card">
            <Handshake size={28} />
            <span>Nueva habilidad adicional</span>
            <h3>USD 1,450</h3>
            <p>Cada nueva habilidad, flujo, tablero, automatizacion o mejora fuera del alcance inicial se cotiza aparte cuando no existe mensualidad operativa.</p>
          </article>
        </div>
      </section>

      <section className="section comparison-section" id="comparativo">
        <div className="section-heading">
          <p className="section-kicker">Que los numeros decidan</p>
          <h2>La mensualidad evita que cada movimiento se convierta en una cotizacion.</h2>
        </div>
        <div className="comparison-label">Oferta 1: Administracion Web Master</div>
        <div className="comparison-table" role="table" aria-label="Comparacion entre mensualidad y pagos por demanda">
          <div className="comparison-row comparison-head" role="row">
            <span role="columnheader">Escenario</span>
            <span role="columnheader">Con USD 535 / mes</span>
            <span role="columnheader">Por demanda</span>
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

        <div className="comparison-label comparison-label-spaced">Oferta 2: Programa de Capacidades Operativas</div>
        <div className="comparison-table" role="table" aria-label="Comparacion del programa de capacidades operativas">
          <div className="comparison-row comparison-head" role="row">
            <span role="columnheader">Escenario</span>
            <span role="columnheader">Con USD 1,650 / mes</span>
            <span role="columnheader">Por demanda</span>
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
            <strong role="cell">6 meses: USD 9,900 con continuidad y prioridades claras</strong>
            <strong role="cell">6 meses por demanda: aprox. USD 14,750 si agregan habilidades y ajustes</strong>
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
          <span>Dos ofertas separadas</span>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
