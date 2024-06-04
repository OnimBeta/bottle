import React from 'react';
import Link from "next/link";
import Image from "next/image";

interface IBottomButtonProps {
  href: string
  src: string
  alt: string
  className?: string
  iconSize?: number
}
const BottomButton = ({
                        href,
                        src,
                        alt,
                        className,
                        iconSize = 80
} : IBottomButtonProps) => {
  
  return (
    <Link href={href} className={className}>
      <Image
        src={src}
        alt={alt || 'Bottom button'}
        width={iconSize}
        height={iconSize}
      />
    </Link>
  );
};

export default BottomButton;