import Header from './components/Header.jsx';
import ServicesGrid from './components/ServicesGrid.jsx';
import ContactForm from './components/ContactForm.jsx';
import logoImage from './assets/logo.png';

const services = [
  {
    title: 'Payroll Processing',
    description: 'Accurate payroll, deductions, payslips, and statutory filings for every employee.',
    icon: '💼'
  },
  {
    title: 'Recruitment',
    description: 'Legal recruitment compliance and talent placement across India.',
    icon: '👥'
  },
  {
    title: 'Factory Act Compliance',
    description: 'Factory licences, safety audits, statutory registers, and ongoing compliance support.',
    icon: '🏭'
  },
  {
    title: 'EPF & MP Act Compliance',
    description: 'EPF registration, ECRs, challans, returns and social security compliance.',
    icon: '🛡️'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header logoPreview={logoImage} />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="space-y-6 pb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-czar-600">
            Czar Consultancy
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Professional Compliance Services for Payroll, Recruitment, Factory Act and EPF.
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Trusted labour law and compliance advisory for growing companies across India. We help businesses stay aligned with statutory requirements and reduce risk with practical support.
          </p>
        </section>

        <section id="logo" className="mb-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100 sm:p-8">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-czar-600">
                Brand Logo
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Your logo now appears on the live website
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                Place your logo file in the assets folder as logo.png and it will show in the header and on this section.
              </p>
            </div>

            <div className="flex min-h-[180px] w-full max-w-[280px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <img
                src={logoImage}
                alt="Website logo"
                className="max-h-32 w-full object-contain"
              />
            </div>
          </div>
        </section>

        <ServicesGrid services={services} />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/50 sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Ready to discuss your compliance needs?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Submit a quick inquiry and our team will reach out with a tailored advisory plan.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919319095290"
                className="inline-flex items-center justify-center rounded-full bg-czar-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-czar-700"
              >
                Call Us
              </a>
              <a
                href="mailto:compliance@czarconsultancy.com"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
    </div>
  );
}

export default App;
