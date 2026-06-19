"use client";

import Image from "next/image";
import { useState } from "react";

const HERO_PHOTO = "/fotososcarinicio.jpg";
const FALLBACK = "/oscar-placeholder.svg";

type HeroPhotoProps = {
  className?: string;
  priority?: boolean;
};

export function HeroPhoto({ className = "", priority = true }: HeroPhotoProps) {
  const [src, setSrc] = useState(HERO_PHOTO);

  return (
    <Image
      src={src}
      alt="Oscar Carmauta"
      fill
      priority={priority}
      sizes="100vw"
      className={`object-cover object-[center_22%] ${className}`}
      onError={() => setSrc(FALLBACK)}
    />
  );
}
