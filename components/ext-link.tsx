import { cn } from "@/lib/cn";

export function ExtLink({
  href,
  className,
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
      {...rest}
    >
      {children}
    </a>
  );
}
