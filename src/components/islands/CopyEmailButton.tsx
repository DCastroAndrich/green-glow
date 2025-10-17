import React, { useState } from 'react';

type Props = {
  email: string;
};

const CopyEmailButton: React.FC<Props> = ({ email }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      className="transition-colors hover:text-primary-500 hover:underline"
      aria-label={`Copiar email ${email}`}
    >
      {email}
      {copied && <span className="ml-2 text-xs text-green-500">¡Copiado!</span>}
    </button>
  );
};

export default CopyEmailButton;
