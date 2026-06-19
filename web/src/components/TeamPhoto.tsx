"use client";

import Image from "next/image";
import { useState } from "react";

const TEAM_PHOTO = "/FotoEquipoCompleto.jpg";
const FALLBACK = "/oscar-placeholder.svg";

export function TeamPhoto() {
  const [src, setSrc] = useState(TEAM_PHOTO);

  return (
    <Image
      src={src}
      alt="Equipo de Oscar Carmauta"
      fill
      sizes="100vw"
      className="object-cover object-center"
      onError={() => setSrc(FALLBACK)}
    />
  );
}
