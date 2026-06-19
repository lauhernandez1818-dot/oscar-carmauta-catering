import Image from "next/image";
import { HeroPhoto } from "@/components/HeroPhoto";
import { TeamPhoto } from "@/components/TeamPhoto";

const whatsappHref =
  "https://wa.me/584242515377?text=Hola%20Oscar%2C%20quiero%20informacion%20sobre%20catering%20para%20un%20evento.";

const services = [
  {
    num: "01",
    title: "Catering corporativo",
    description:
      "Reuniones, jornadas y visitas ejecutivas con montaje impecable y servicio puntual.",
  },
  {
    num: "02",
    title: "Eventos privados",
    description:
      "Celebraciones familiares y encuentros sociales con atencion personalizada.",
  },
  {
    num: "03",
    title: "Servicio para empresas",
    description:
      "Volumen, organizacion y presentacion profesional para equipos y clientes.",
  },
  {
    num: "04",
    title: "Experiencia gastronomica",
    description:
      "Menus adaptables y montaje cuidado pensado para dejar buena impresion.",
  },
];

const reasons = [
  "Experiencia en operaciones gastronomicas y eventos.",
  "Presentacion elegante alineada al tipo de cliente.",
  "Puntualidad antes, durante y despues del servicio.",
  "Coordinacion directa por WhatsApp.",
];

export default function Home() {
  return (
    <main className="bg-[#050505] text-[#f8f1df]">
      {/* ── HERO: mobile apilado · desktop full-width split ── */}
      <section className="relative bg-[#050505] lg:min-h-[100svh] lg:overflow-hidden">
        <header className="relative z-20 flex items-center justify-between px-5 py-5 sm:px-8 lg:absolute lg:inset-x-0 lg:top-0 lg:px-0 lg:py-6">
          <div className="flex w-full lg:grid lg:grid-cols-2">
            <div className="flex w-full items-center justify-between lg:desk-x lg:pr-8">
              <a className="relative block h-10 w-10 shrink-0 sm:h-11 sm:w-11" href="#">
                <Image
                  src="/LOGOOC.jpg"
                  alt="Oscar Carmauta"
                  fill
                  className="object-contain"
                  priority
                />
              </a>
              <a
                className="border border-[#d5aa52]/50 bg-[#050505]/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f7dd9a] backdrop-blur transition hover:bg-[#d5aa52] hover:text-[#050505] lg:bg-[#d5aa52] lg:text-[#050505] lg:shadow-[0_8px_32px_rgba(213,170,82,0.25)] lg:backdrop-blur-none lg:hover:bg-[#f7dd9a]"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
            <div className="hidden lg:block" aria-hidden="true" />
          </div>
        </header>

        <div className="lg:grid lg:min-h-[100svh] lg:grid-cols-2 lg:items-stretch">
          {/* Foto — mobile: arriba · desktop: columna derecha edge-to-edge */}
          <div className="relative order-1 w-full lg:order-2 lg:min-h-[100svh]">
            <div className="relative mx-auto aspect-[4/5] max-h-[62svh] w-full overflow-hidden sm:max-h-[68svh] lg:absolute lg:inset-0 lg:mx-0 lg:aspect-auto lg:max-h-none">
              <HeroPhoto />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#050505]/90 lg:via-[#050505]/25 lg:to-transparent" />
              <div className="pointer-events-none absolute inset-4 border border-[#d5aa52]/25 lg:inset-6 lg:border-l-0" />
            </div>
          </div>

          {/* Texto — mobile: abajo · desktop: columna izquierda centrada */}
          <div className="order-2 px-5 pb-12 pt-6 sm:px-8 lg:order-1 lg:flex lg:flex-col lg:justify-center lg:px-0 lg:pb-0 lg:pt-0">
            <div className="lg:desk-x lg:max-w-xl xl:max-w-2xl">
              <p className="hero-rise hero-rise-1 mb-4 text-[0.65rem] font-bold uppercase tracking-[0.45em] text-[#d5aa52] sm:text-xs">
                Catia La Mar · Vargas
              </p>

              <h1 className="font-display hero-rise hero-rise-2 text-[clamp(2.75rem,11vw,5rem)] font-bold leading-[0.92] text-white lg:text-[clamp(3.5rem,4.5vw,5.5rem)] xl:text-[5.5rem]">
                Oscar
                <br />
                <span className="gold-text italic">Carmauta</span>
              </h1>

              <div className="hero-rise hero-rise-3 my-6 w-16 gold-rule-left sm:w-24 lg:w-32" />

              <p className="hero-rise hero-rise-3 max-w-md text-lg leading-relaxed text-white/78 sm:text-xl lg:max-w-none">
                Catering con presencia.
                <span className="text-[#f7dd9a]"> Tu evento, bien servido.</span>
              </p>

              <div className="hero-rise hero-rise-4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  className="inline-flex items-center justify-center bg-[#d5aa52] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#050505] transition hover:bg-[#f7dd9a]"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Hablar con Oscar
                </a>
                <a
                  className="inline-flex items-center justify-center px-2 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/55 transition hover:text-[#f7dd9a]"
                  href="#servicios"
                >
                  Ver servicios ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="px-5 py-24 sm:px-8 lg:desk-x lg:py-32" id="presentacion">
        <div className="gold-rule-left mb-10 lg:mb-14 lg:w-full lg:max-w-3xl" />
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.45em] text-[#d5aa52]">
          Carta de presentacion
        </p>
        <p className="font-display mt-5 max-w-4xl text-[clamp(1.75rem,5vw,3rem)] font-medium leading-snug text-[#f7dd9a] lg:mt-6 lg:max-w-5xl lg:text-5xl xl:text-[3.25rem] xl:leading-tight">
          No hace falta explicar demasiado cuando la presencia habla primero.
        </p>
        <p className="mt-8 max-w-xl text-base leading-8 text-white/55 lg:mt-10 lg:max-w-2xl lg:text-lg">
          Una primera impresion premium para clientes que buscan catering confiable,
          elegante y bien coordinado. El detalle esta aqui — pero el impacto va primero.
        </p>
      </section>

      {/* ── SERVICIOS: lista editorial (todos visibles en mobile) ── */}
      <section className="border-y border-[#d5aa52]/15 py-24 lg:py-32" id="servicios">
        <div className="mb-12 px-5 sm:px-8 lg:desk-x lg:mb-16">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.45em] text-[#d5aa52]">
            Servicios
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Lo que ofrecemos
          </h2>
        </div>

        <div className="px-5 sm:px-8 lg:desk-x">
          {services.map((service, index) => (
            <article className="group" key={service.num}>
              {index > 0 && <div className="gold-rule-left my-0 opacity-40" />}
              <div className="grid grid-cols-[4rem_1fr] gap-5 py-8 sm:grid-cols-[5rem_1fr] sm:gap-8 lg:grid-cols-[7rem_1fr] lg:gap-10 lg:py-12 xl:grid-cols-[9rem_1fr] xl:gap-16">
                <span className="font-display text-4xl font-bold text-[#d5aa52]/30 transition group-hover:text-[#d5aa52]/60 sm:text-5xl lg:text-5xl xl:text-6xl">
                  {service.num}
                </span>
                <div className="lg:max-w-3xl">
                  <h3 className="font-display text-xl font-semibold text-white sm:text-2xl lg:text-3xl xl:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/50 sm:text-base lg:mt-4 lg:text-base xl:text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CONFIANZA: ASIMETRICO ── */}
      <section className="px-5 py-24 sm:px-8 lg:desk-x lg:py-32" id="confianza">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20 xl:gap-28">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.45em] text-[#d5aa52]">
              Por que Oscar
            </p>
            <h2 className="font-display mt-4 text-[clamp(2rem,6vw,3.5rem)] font-bold leading-tight text-white lg:text-5xl xl:text-6xl">
              Confianza,
              <br />
              <span className="gold-text italic">presencia</span>
              <br />y ejecucion.
            </h2>
          </div>

          <ul className="space-y-0 lg:border-l lg:border-[#d5aa52]/15 lg:pl-12 xl:pl-16">
            {reasons.map((reason, index) => (
              <li className="border-t border-[#d5aa52]/20 py-5" key={reason}>
                <span className="mr-4 text-xs font-bold text-[#d5aa52]/60">
                  0{index + 1}
                </span>
                <span className="text-base text-white/75">{reason}</span>
              </li>
            ))}
            <li className="border-t border-[#d5aa52]/20" />
          </ul>
        </div>
      </section>

      {/* ── EQUIPO: FotoEquipoCompleto full-bleed ── */}
      <section className="border-t border-[#d5aa52]/15" id="equipo">
        <div className="relative aspect-[16/10] w-full max-h-[55vh] sm:aspect-[21/9] sm:max-h-[65vh] lg:max-h-[72vh]">
          <TeamPhoto />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
        </div>
        <div className="px-5 py-10 sm:px-8 lg:desk-x lg:py-14">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.45em] text-[#d5aa52]">
            El equipo
          </p>
          <p className="font-display mt-4 max-w-4xl text-2xl font-medium leading-snug text-white/85 sm:text-3xl lg:text-4xl xl:max-w-5xl">
            Profesionales detras de cada evento — organizacion, presencia y servicio en
            equipo.
          </p>
        </div>
      </section>

      {/* ── CONTACTO: FRANJA DORADA FULL-WIDTH ── */}
      <section className="bg-[#d5aa52] text-[#050505]" id="contacto">
        <div className="grid gap-10 px-5 py-20 sm:px-8 lg:desk-x lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28 xl:gap-20">
          <div>
            <p className="text-[0.65rem] font-black uppercase tracking-[0.45em] text-[#050505]/60">
              Contacto directo
            </p>
            <h2 className="font-display mt-4 text-[clamp(2rem,7vw,4rem)] font-bold leading-[0.95]">
              Coordina tu
              <br />
              evento hoy.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#050505]/70">
              Disponibilidad, tipo de servicio y propuesta inicial — todo empieza con un
              mensaje.
            </p>
          </div>

          <div className="flex flex-col gap-6 border-t border-[#050505]/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#050505]/50">
                WhatsApp
              </p>
              <a
                className="font-display mt-1 block text-3xl font-bold sm:text-4xl"
                href={whatsappHref}
              >
                +58 424-2515377
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#050505]/50">
                Ubicacion
              </p>
              <p className="mt-1 text-xl font-semibold">Catia La Mar, Vargas</p>
            </div>
            <a
              className="inline-flex w-full items-center justify-center bg-[#050505] px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#f7dd9a] transition hover:bg-[#111]"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              Escribir ahora
            </a>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="border-t border-white/5 px-5 py-8 text-center text-xs uppercase tracking-[0.3em] text-white/25 sm:px-8">
        Oscar Carmauta · Catering · {new Date().getFullYear()}
      </footer>
    </main>
  );
}
