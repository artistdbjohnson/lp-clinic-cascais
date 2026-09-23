import Image from "next/image";
import { ExtLink } from "@/components/ext-link";
import { cn } from "@/lib/cn";

export function MediaCard({
  img,
  title,
  body,
  href,
  kicker,
  className,
}: {
  img: string;
  title: string;
  body: string;
  href?: string;
  kicker?: string;
  className?: string;
}) {
  const inner = (
    <>
      <div className="relative aspect-[4/3] bg-[color:var(--bg)]">
        <Image src={img} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {kicker ? (
          <p className="text-[11px] font-semibold tracking-[0.18em] text-gold uppercase">{kicker}</p>
        ) : null}
        <h3 className={cn("text-base font-semibold tracking-tight", kicker && "mt-2")}>{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">{body}</p>
      </div>
    </>
  );

  const classes = cn(
    "flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elev)]/50",
    className,
  );

  if (href) {
    return (
      <ExtLink href={href} className={classes}>
        {inner}
      </ExtLink>
    );
  }

  return <article className={classes}>{inner}</article>;
}
