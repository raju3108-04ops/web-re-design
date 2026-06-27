import ServiceCard from './ServiceCard.jsx';

function ServicesGrid({ services }) {
  return (
    <section id="services" className="mt-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-czar-600">Core services</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Designed around the needs of modern businesses.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Four essential compliance services crafted to keep your operations running smoothly and securely.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}

export default ServicesGrid;
