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
    title: 'Administracion Web Master',
    text: 'Cuidado mensual del sitio web: estabilidad, contenidos, ajustes visuales, enlaces, imagenes, landings menores y soporte de publicacion.',
  },
  {
    icon: Wrench,
    title: 'Mesa de cambios incluida',
    text: 'Hasta 10 cambios mensuales de pagina incluidos. Despues de ese alcance, cada solicitud adicional tiene una tarifa clara y predecible.',
  },
  {
    icon: Bot,
    title: 'Capacidades Operativas',
    text: 'Activaciones puntuales como Violeta, asistentes internos, flujos comerciales, formularios inteligentes o tableros de seguimiento.',
  },
  {
    icon: Sparkles,
    title: 'Creatividad de marca',
    text: 'Sistemas para producir piezas, imagenes, videos, materiales para representantes, email y contenido social alineado a Sixinch.',
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
  'Las Capacidades Operativas como Violeta se cotizan como pago unico: activacion inicial desde USD 3,000 y nuevas capacidades desde USD 850 cada una.',
  'No incluye pauta publicitaria, licencias externas, produccion fisica, compra de software ni costos de terceros.',
  'Los entregables se trabajan bajo fechas pactadas con el equipo Sixinch Americas para mantener trazabilidad y orden.',
];

const comparisonRows = [
  ['Administracion web durante 12 meses', 'USD 6,420', 'USD 9,300 estimados'],
  ['10 cambios mensuales incluidos', 'Incluido', 'Hasta USD 5,400 al ano solo en cambios simples'],
  ['Soporte y prevencion', 'Continuo', 'Se paga cuando aparece la urgencia'],
  ['Nueva capacidad como Violeta', 'Pago unico aprobado por alcance', 'USD 3,000 inicial + USD 850 por cada nueva capacidad'],
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
            <h1>Web fija. Capacidades nuevas por aprobacion.</h1>
            <p className="hero-text">
              La referencia de partner integral era USD 3,000 mensuales. Para Sixinch proponemos una ruta mas eficiente: Administracion Web Master por USD 535 al mes y activaciones puntuales para capacidades operativas como Violeta, redes, CRM, contenido o reportes.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#cotizacion">
                Ver USD 535 / mes
              </a>
              <a className="button secondary" href="#comparativo">
                Comparar escenarios
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
          <h2>Una decision mensual para sostener la pagina. Pagos unicos para sumar capacidades.</h2>
        </div>
        <p>
          El objetivo no es vender horas tecnicas ni inflar una mensualidad. Es separar lo recurrente de lo nuevo: la web queda cuidada con un valor fijo y cada capacidad adicional se aprueba por alcance, impacto y momento de negocio.
        </p>
      </section>

      <section className="section" id="alcance">
        <div className="section-heading">
          <p className="section-kicker">Alcance principal</p>
          <h2>La mensualidad cubre la operacion normal de la pagina.</h2>
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
          <h2>Capacidades Operativas: el nombre correcto para lo que antes sonaba a desarrollo.</h2>
          <p>
            Violeta y las demas iniciativas no se presentan como proyectos tecnologicos. Se presentan como capacidades que le permiten al equipo atender mejor, producir mas rapido, vender con mas orden o medir con mas claridad.
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
            <p className="section-kicker">Inversion mensual recomendada</p>
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
              <span>Capacidades nuevas</span>
              <strong>Pago unico desde USD 3,000; nuevas capacidades desde USD 850</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section activation-section">
        <div className="section-heading">
          <p className="section-kicker">Pago unico por capacidad</p>
          <h2>Violeta no aumenta la mensualidad de la web. Se activa como una capacidad aparte.</h2>
        </div>
        <div className="activation-grid">
          <article className="activation-card primary-activation">
            <Brain size={28} />
            <span>Activacion inicial</span>
            <h3>USD 3,000</h3>
            <p>Incluye Violeta o una capacidad operativa inicial: definicion de flujo, configuracion, pruebas, tablero base y puesta en marcha.</p>
          </article>
          <article className="activation-card">
            <Sparkles size={28} />
            <span>Nueva capacidad adicional</span>
            <h3>USD 850</h3>
            <p>Aplica cuando Sixinch quiera sumar una nueva habilidad fuera del alcance aprobado: nuevo flujo, nuevo asistente, nuevo tablero o nueva automatizacion.</p>
          </article>
          <article className="activation-card">
            <Handshake size={28} />
            <span>Referencia anterior</span>
            <h3>USD 3,000 / mes</h3>
            <p>Ese valor corresponde a una ruta de partner integral. La propuesta actual separa mantenimiento web de capacidades para que el presupuesto sea mas liviano.</p>
          </article>
        </div>
      </section>

      <section className="section comparison-section" id="comparativo">
        <div className="section-heading">
          <p className="section-kicker">Que los numeros decidan</p>
          <h2>La mensualidad evita que cada movimiento se convierta en una cotizacion.</h2>
        </div>
        <div className="comparison-table" role="table" aria-label="Comparacion entre mensualidad y pagos por demanda">
          <div className="comparison-row comparison-head" role="row">
            <span role="columnheader">Escenario</span>
            <span role="columnheader">Con USD 535 / mes</span>
            <span role="columnheader">Por demanda</span>
          </div>
          {comparisonRows.map(([scenario, monthly, demand]) => (
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
          <span>Administracion Web Master</span>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
