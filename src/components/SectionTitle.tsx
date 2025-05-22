import clsx from "clsx";
import React, { JSX } from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  as: Component = "h2",
  className,
}) => {
  const componentClassName = clsx(
    "text-3xl lg:text-5xl lg:leading-tight font-bold",
    className,
  );

  return <Component className={componentClassName}>{children}</Component>;
};

export default SectionTitle;
