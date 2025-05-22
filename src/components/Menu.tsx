import { MenuVariant } from "@/data/menuItems";
import clsx from "clsx";
import Link from "next/link";

type LinkProps = {
  url: string;
  text: string;
  variant?: MenuVariant;
};

export default function Menu({ url, text, variant = "default" }: LinkProps) {
  const btnClassName = clsx({
    "text-foreground hover:text-foreground-accent transition-colors":
      variant === "default",
    "text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors":
      variant === "primary",
  });

  return (
    <Link href={url} className={btnClassName}>
      {text}
    </Link>
  );
}
