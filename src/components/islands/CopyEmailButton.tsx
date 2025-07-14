import React, { useState } from 'react'

type Props = {
  email: string
}

const CopyEmailButton: React.FC<Props> = ({ email }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <button
      type='button'
      onClick={handleCopy}
      className='hover:underline hover:text-primary-500 transition-colors'
      aria-label={`Copiar email ${email}`}
    >
      {email}
      {copied && (
        <span className='ml-2 text-green-500 text-xs'>¡Copiado!</span>
      )}

    </button>
  )
}

export default CopyEmailButton