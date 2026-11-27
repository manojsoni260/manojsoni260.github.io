import { useState, type FormEvent, type ReactNode } from 'react'
import { Github, Linkedin, Mail, MapPin, MessageSquare, User } from 'lucide-react'
import { Section, SectionHead, Reveal } from './Section'
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../data'
import { submitContact } from '../lib/contact'
type K = 'name' | 'email' | 'message'
type Errs = Partial<Record<K, string>>

type Status =
  | 'idle'
  | 'sending'
  | 'sent'
  | 'unconfigured'
  | 'error'

const FIELDS: {
  k: K
  label: string
  ph: string
  icon: ReactNode
}[] = [
  {
    k: 'name',
    label: 'Name',
    ph: 'e.g. Manoj Soni',
    icon: <User size={16} />,
  },
  {
    k: 'email',
    label: 'Email',
    ph: 'e.g. vikas@mail.com',
    icon: <Mail size={16} />,
  },
  {
    k: 'message',
    label: 'Message',
    ph: 'Write your message...',
    icon: <MessageSquare size={16} />,
  },
]

const circle =
  'flex h-10 w-10 items-center justify-center rounded-full bg-ink text-bg transition hover:bg-brand hover:text-onbrand'

export default function Contact() {
  const [errs, setErrs] = useState<Errs>({})
  const [status, setStatus] = useState<Status>('idle')
  const [draft, setDraft] = useState({
    name: '',
    message: '',
  })

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const f = new FormData(form)

    const v = {
      name: String(f.get('name') || '').trim(),
      email: String(f.get('email') || '').trim(),
      message: String(f.get('message') || '').trim(),
    }

    // Validate form fields
    const er: Errs = {}

    if (v.name.length < 2) {
      er.name = 'Please enter your name.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) {
      er.email = 'Please enter a valid email address.'
    }

    if (v.message.length < 10) {
      er.message = 'Message should be at least 10 characters.'
    }

    setErrs(er)
    setDraft({
      name: v.name,
      message: v.message,
    })

    if (Object.keys(er).length > 0) {
      return
    }

    // Submit to Web3Forms
    setStatus('sending')

    try {
      await submitContact(v)

      setStatus('sent')
      setErrs({})
      form.reset()
    } catch (x) {
      const error = x as Error

      if (error.message === 'NOT_CONFIGURED') {
        setStatus('unconfigured')
      } else {
        setStatus('error')
      }
    }
  }

  // Fallback email if Web3Forms is unavailable
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    'Portfolio enquiry from ' + draft.name
  )}&body=${encodeURIComponent(draft.message)}`

  const cls = (k: K) =>
    `w-full rounded-md border bg-bg py-2.5 pl-10 pr-3 text-sm outline-none transition focus:ring-2 focus:ring-brand/50 ${
      errs[k] ? 'border-red-500' : 'border-transparent'
    }`

  return (
    <Section id="contact">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Contact information */}
        <div>
          <SectionHead
            id="contact"
            label="Contact"
            title="Have Any Project? Please Drop a Message"
            text="Get in touch and let me know how I can help. Fill out the form and I’ll be in touch as soon as possible."
          />

          <Reveal className="space-y-6 text-sm">
            <div className="flex gap-3">
              <MapPin
                size={20}
                className="mt-0.5 text-mut"
                aria-hidden="true"
              />

              <div>
                <p className="font-bold">Location:</p>
                <p className="text-mut">
                  Jaipur, Rajasthan, India
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail
                size={20}
                className="mt-0.5 text-mut"
                aria-hidden="true"
              />

              <div>
                <p className="font-bold">Email:</p>

                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all text-mut hover:text-brand"
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email Manoj"
                className={circle}
              >
                <Mail size={18} />
              </a>

              {LINKEDIN_URL && (
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={circle}
                >
                  <Linkedin size={18} />
                </a>
              )}

              {GITHUB_URL && (
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={circle}
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </Reveal>
        </div>

        {/* Contact form */}
        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="space-y-4 rounded-2xl bg-card p-6 shadow-card"
          >
            {FIELDS.map(({ k, label, ph, icon }) => (
              <div key={k}>
                <label
                  htmlFor={k}
                  className="text-xs font-bold"
                >
                  {label}
                </label>

                <div className="relative mt-1">
                  <span
                    className={`pointer-events-none absolute left-3 text-mut ${
                      k === 'message'
                        ? 'top-3'
                        : 'top-1/2 -translate-y-1/2'
                    }`}
                    aria-hidden="true"
                  >
                    {icon}
                  </span>

                  {k === 'message' ? (
                    <textarea
                      id={k}
                      name={k}
                      rows={5}
                      placeholder={ph}
                      className={cls(k)}
                      aria-invalid={!!errs[k]}
                      aria-describedby={
                        errs[k] ? `${k}-e` : undefined
                      }
                      required
                    />
                  ) : (
                    <input
                      id={k}
                      name={k}
                      type={k === 'email' ? 'email' : 'text'}
                      autoComplete={
                        k === 'email' ? 'email' : 'name'
                      }
                      placeholder={ph}
                      className={cls(k)}
                      aria-invalid={!!errs[k]}
                      aria-describedby={
                        errs[k] ? `${k}-e` : undefined
                      }
                      required
                    />
                  )}
                </div>

                {errs[k] && (
                  <p
                    id={`${k}-e`}
                    className="mt-1 text-xs text-red-500"
                  >
                    {errs[k]}
                  </p>
                )}
              </div>
            ))}

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-ink py-3 text-xs font-bold uppercase tracking-wider text-bg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending'
                ? 'Sending…'
                : status === 'sent'
                  ? 'Send Another Message'
                  : 'Send Message'}
            </button>

            {/* Submission status */}
            <div
              aria-live="polite"
              aria-atomic="true"
              className="text-sm"
            >
              {status === 'sent' && (
                <p className="rounded-lg bg-green-100 p-3 text-green-700">
                  Thanks! Your message has been sent successfully.
                  I'll get back to you soon.
                </p>
              )}

              {status === 'error' && (
                <p className="rounded-lg bg-red-100 p-3 text-red-600">
                  Something went wrong while sending your message.
                  Please try again or email me directly at{' '}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-semibold underline"
                  >
                    {EMAIL}
                  </a>.
                </p>
              )}

              {status === 'unconfigured' && (
                <p className="rounded-lg bg-amber-100 p-3 text-amber-900">
                  This form isn't configured yet, so your message
                  wasn't sent.{' '}
                  <a
                    href={mailto}
                    className="font-semibold underline"
                  >
                    Send it by email instead
                  </a>.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
