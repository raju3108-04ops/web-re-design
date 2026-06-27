function ServiceCard({ icon, title, description }) {
  return (
    <article className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-czar-50 text-2xl shadow-sm shadow-czar-100/70">
        <span>{icon}</span>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-czar-600 transition group-hover:text-czar-700">
        Learn more
        <span aria-hidden="true">→</span>
      </div>
    </article>
  );
}

export default ServiceCard;
