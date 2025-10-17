import { Button, type ButtonProps } from '@/components/ui/button';
import type React from 'react';

export interface ButtonLinkProps extends ButtonProps {
  href: string;
  children: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <Button {...props} asChild>
      <a href={href}>{children} </a>
    </Button>
  );
};

export { ButtonLink };
