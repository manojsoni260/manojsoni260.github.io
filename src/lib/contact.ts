
export type ContactPayload = {
  name: string
  email: string
  message: string
}

type Web3FormsResponse = {
  success: boolean
  message?: string
}

export async function submitContact(
  payload: ContactPayload
): Promise<void> {
  const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  if (!ACCESS_KEY) {
    throw new Error('NOT_CONFIGURED')
  }

  const formData = new FormData()

  formData.append('access_key', ACCESS_KEY)
  formData.append('name', payload.name)
  formData.append('email', payload.email)
  formData.append('message', payload.message)
  formData.append(
    'subject',
    `Portfolio enquiry from ${payload.name}`
  )
  formData.append('from_name', 'Manoj Soni Portfolio')
  formData.append('botcheck', '')

  try {
    const res = await fetch(
      'https://api.web3forms.com/submit',
      {
        method: 'POST',
        body: formData,
      }
    )

    if (!res.ok) {
      throw new Error('FAILED')
    }

    const result: Web3FormsResponse = await res.json()

    if (!result.success) {
      throw new Error(result.message || 'FAILED')
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }

    throw new Error('FAILED')
  }
}
