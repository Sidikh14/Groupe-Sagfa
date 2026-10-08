type Props = {
  /** "light" = fond clair (Groupe en bleu-nuit, Sagfa en vert) ; "dark" = fond vert/sombre */
  variant?: "light" | "dark";
  /** Affiche la mention « CABINET DE GESTION » et le filet vertical */
  full?: boolean;
  className?: string;
};

export function LogoMark({ variant = "light", className }: { variant?: "light" | "dark"; className?: string }) {
  const c =
    variant === "light"
      ? { a: "#0F4C47", b: "#0F4C47", c: "#8FAA99", d: "#D8C5A5" }
      : { a: "#F7F4EC", b: "#F7F4EC", c: "#8FAA99", d: "#D8C5A5" };
  const s = { strokeWidth: 3, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="-2 -2 104 146" className={className} aria-hidden="true" focusable="false">
      <path d="M0 38 L46 24 L46 70 L0 88Z" fill={c.a} stroke={c.a} {...s} />
      <path d="M50 14 L96 0 L96 49 L50 69Z" fill={c.b} stroke={c.b} {...s} />
      <path d="M0 94 L46 74 L46 112 L0 138Z" fill={c.c} stroke={c.c} {...s} />
      <path d="M50 73 L96 51 L96 88 L50 115Z" fill={c.d} stroke={c.d} {...s} />
    </svg>
  );
}

export default function Logo({ variant = "light", full = false, className = "" }: Props) {
  return (
    <span className={`logo logo--${variant} ${full ? "logo--full" : ""} ${className}`} role="img" aria-label="Groupe Sagfa, cabinet de gestion">
      <LogoMark variant={variant} className="logo__mark" />
      {full && <span className="logo__rule" aria-hidden="true" />}
      <span className="logo__text" aria-hidden="true">
        <span className="logo__top">Groupe</span>
        <span className="logo__bottom">Sagfa</span>
        {full && <span className="logo__tag">Cabinet de gestion</span>}
      </span>
    </span>
  );
}
