import { useState } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  message: ''
};

function ContactForm() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name.';
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) newErrors.message = 'Please add a brief inquiry.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field) => (event) => {
    setForm({ ...form, [field]: event.target.value });
    setErrors({ ...errors, [field]: undefined });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/yourFormId', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message })
      });

      if (response.ok) {
        setStatus('success');
        setForm(INITIAL_STATE);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="mt-16 rounded-[32px] bg-slate-900 p-8 text-white shadow-2xl shadow-slate-900/20 sm:p-10 lg:p-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-czar-300">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Send us a message and we'll respond promptly.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Whether you need help with payroll, recruitment, Factory Act compliance or EPF support, our team is ready to help you move forward confidently.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl bg-slate-800/90 p-6 shadow-xl shadow-slate-950/10 sm:p-8">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-200">
              Full Name
            </label>
            <input
              id="contact-name"
              type="text"
              value={form.name}
              onChange={handleChange('name')}
              className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-czar-400 focus:ring-2 focus:ring-czar-400/30"
            />
            {errors.name && <p className="mt-2 text-sm text-rose-300">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-200">
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-czar-400 focus:ring-2 focus:ring-czar-400/30"
            />
            {errors.email && <p className="mt-2 text-sm text-rose-300">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-200">
              Inquiry Message
            </label>
            <textarea
              id="contact-message"
              rows="5"
              value={form.message}
              onChange={handleChange('message')}
              className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-czar-400 focus:ring-2 focus:ring-czar-400/30"
            />
            {errors.message && <p className="mt-2 text-sm text-rose-300">{errors.message}</p>}
          </div>

          <div className="space-y-3">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-3xl bg-czar-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-czar-700 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
            </button>
            {status === 'success' && (
              <p className="text-sm text-emerald-300">Your message was sent successfully.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-rose-300">Something went wrong. Please try again later.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
