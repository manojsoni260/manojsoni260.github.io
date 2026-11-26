export type ContactPayload = { name: string; email: string; message: string }
/**
 * BACKEND INTEGRATION POINT
 * Set VITE_CONTACT_ENDPOINT (see .env.example) to a server endpoint that accepts
 * POST JSON { name, email, message } and returns a 2xx status on success.
 * Until then this throws NOT_CONFIGURED and nothing is sent.
 */
export async function submitContact(payload: ContactPayload): Promise<void> {
  const url = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined
  if (!url) throw new Error('NOT_CONFIGURED')
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
  if (!res.ok) throw new Error('FAILED')
}
