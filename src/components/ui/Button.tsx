import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "solid" | "outline" | "outline-white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variants = {
  solid: "bg-brand-blue text-white hover:bg-brand-blue-dark",
  outline: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
  "outline-white": "border-2 border-white/40 text-white hover:bg-white/10",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm font-semibold",
  lg: "px-8 py-4 text-base font-semibold",
};

export default function Button({
  href,
  variant = "solid",
  size = "md",
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-md transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
