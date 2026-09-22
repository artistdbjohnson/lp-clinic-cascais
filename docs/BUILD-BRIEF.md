# LP CLINIC Cascais — CloudAgent build brief
Source: https://www.lpclinic.pt/ (PT default) + /en
Repo: https://github.com/artistdbjohnson/lp-clinic-cascais (main already has docs/design-meeting.md)
Craft: Motionsites clinical-editorial dental (NOT Farmington equilibrium). Floor: https://txdiepflap.vercel.app/

## Opening LOCKED
Micro-loader crest: LP logo-crest centered on soft cream (light) / charcoal (dark) for 1.2–1.8s → fade into clinical hero.
sessionStorage once; prefers-reduced-motion skip. NOT Farmington still-poster, NOT Boho Ken Burns, NOT BRA splash video.

## Axiom twists LOCKED
1. Smile-journey strip: Consulta → Plano → Tratamento → Resultado (sticky chip mobile)
2. Before/after reveal rail using published case images in /public/cases/
3. International-patient soft dock (glass) — Paciente Internacional + EN + booking

## Hard locks
- PT default + EN twin (locale toggle)
- Dark|light theme toggle (persist localStorage)
- Footer attribution: built by dglxss only
- Disclaimer: Independent design study. Not affiliated with LP CLINIC.
- vercel.json exactly: {"cleanUrls":true,"trailingSlash":false}
- No secrets in public
- scroll-margin-top under sticky nav; nav gutters never overlap
- Ad-grade photography every major section — assets provided in /public; generate additional treatment plates as CSS/gradient editorial if needed OR use case/team photos remapped
- Identity-preserving staff from /public/team only — never invent faces
- Tatiana Marques has no portrait on live site — omit photo or use initials plate only (no fake face)

## Stack
Next.js App Router + Tailwind + TypeScript. Geist or similar calm sans. Playfair optional for display (they use Playfair on live).

## Sections (single page anchors)
#top crest→Hero | #sobre | #tratamentos | #smile-journey | #tecnologia | #casos | #equipa | #internacional | #contacto

## Contacts (exact)
- Address: R. Pinheiros 192B, 2750-606 Cascais
- Hours PT: Segunda a Sexta das 9h às 19h / EN: Monday to Friday from 9am to 7pm
- Phones: (+351) 218 287 636 · (+351) 931 803 555
- Email: geral@lpclinic.pt
- WhatsApp: https://wa.me/351931803555
- Booking: https://www.lpclinic.pt/marcacoes-online (external)
- Maps: Google Maps for address
- Social: Instagram @lpclinic_pt, Facebook lpclinicpt, TikTok @lpclinic_pt
- ERS: Licença 11464/2016 · Registo E129481

## Brand colors
Gold #DC940D, charcoal #282626 / #151414, steel #2b5672, cream #F2F2F2, white. Liquid-glass nav pill with gold accent.

## Hero headlines (exact public)
PT: "Redefina o seu sorriso restaure a sua confiança" · Premium Dental Center
EN: "Redefine your smile restore your confidence" · Premium Dental Center

## CTA
Primary: Marcar consulta → /marcacoes-online outbound
Secondary: WhatsApp / tel

## Assets attached (unpack to repo public/)
See uploads/lp-clinic-assets.tgz → public/brand, public/team, public/cases, recon/inventory.json

## Deliverable
Complete working Next.js site on a branch, PR to main. npm run build must pass. Include README with run instructions. Commit as Douglxss Johnson <artistdbjohnson@gmail.com> via env only (never git config --global).
