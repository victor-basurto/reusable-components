"use client";
import { ButtonProps, ButtonVariantStyles, ButtonSizeStyles } from "@/types/ui";
import Link from "next/link";
import React, { forwardRef } from "react";
import { Icon } from "../abstract/Icon";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      isLoading,
      children,
      disabled,
      href,
      ...props
    },
    ref,
  ) => {
    // Base styles that apply to every button
    const baseStyles =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    // Mapping variants to Tailwind classes
    const variantStyles: ButtonVariantStyles = {
      primary: "bg-primary text-primary-fg hover:opacity-90 shadow-md",
      outline:
        "border border-border bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-foreground",
      ghost: "hover:bg-gray-100 dark:hover:bg-gray-800 text-foreground",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };

    // Mapping sizes to Tailwind classes
    const sizeStyles: ButtonSizeStyles = {
      sm: "h-9 px-3",
      md: "h-10 px-4 py-2",
      lg: "h-11 px-8 text-base",
      none: "",
    };

    // Constructing the final class string manually
    const combinedClasses = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className, // Allows overriding or adding extra margins/padding from the parent
    ]
      .join(" ")
      .trim();

    const content = (
      <>
        {isLoading && <Icon name="loader" className="inline w-4 h-4 mr-1" />}
        {children}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={combinedClasses}
          ref={ref as React.Ref<HTMLAnchorElement>}
          prefetch={props.prefetch}
          target={props.target}
          rel={props.rel ?? "_blank"}
        >
          {content}
        </Link>
      );
    }
    return (
      <button
        ref={ref}
        className={combinedClasses}
        disabled={isLoading || disabled}
        {...props}
      >
        {content}
      </button>
    );
  },
);
Button.displayName = "Button";
export { Button };
