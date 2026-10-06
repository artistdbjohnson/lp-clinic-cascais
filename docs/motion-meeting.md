# LP CLINIC Cascais — motion meeting
Date: 2026-10-06
Branch: `worktree/grok-motion-lp-clinic`
Seats: Vale (restraint), Reed (craft floor), Glyph (mark and type), Ash (access), Axiom (locked twists)

Path A is already shipped. This pass adds motion only. Fonts, brand colors, layout chrome, copy, logos, and `/equipa` plates stay as frozen.

## Reference (attitude and timing only)
https://www.prompt-motion.com/ — a public collection of short motion films. Indexed entries were read for attitude and timing character, not for shots to recreate.

What the table took:

- One gesture in the beat, then air. The gesture finishes. It does not loop.
- Neighbors are offset. They do not share a start frame or a stop frame.
- Easing arrives and settles. No bounce, no spring overshoot, no linear crawl, no constant zoom.
- An accent is scarce. It travels once and then leaves the frame.
- Durations stay short: a mark can enter in under a second and hold; a path across a few steps can travel for about a second; a small piece of chrome can arrive in about a third of a second.

A direct browser open in this environment stopped at the site’s bot check and was not bypassed. No films were rehosted. No prompt packs were copied into this repo.

Rejected as sources for this clinic: product-launch choreography (cursors, whip-pans, springing cards), Batley quiet-open, Boho Ken Burns, Farmington still-poster.

## What already ships
Crest micro-loader is the locked open (`components/crest-loader.tsx`, `sessionStorage` key `lp-crest-seen`, hold 1500ms inside the 1.2–1.8s window, fade 700ms, skip on `prefers-reduced-motion` and on any hash).

Vale: that open stays the only intro. A second open would stack.

Glyph: the mark can settle. It should not scale. Scaling the crest reads as a pop.

## Candidates

| Motion | Proposal | Fate |
| --- | --- | --- |
| Smile-journey path | A 1.5px gold hairline draws once across the four plates (Consulta → Plano → Tratamento → Resultado), then fades out. Plates settle 6px with a 110ms stagger. Once per session, only when the rail reaches the viewport. Rested layout matches the freeze. | **WIN** |
| International dock arrival | The soft dock eases in over 340ms and 10px when it shows, and eases out when it hides. Same settle curve. Not an intro, so it may replay with the dock’s own show/hide. | **WIN** |
| Crest settle | Keep the open. Drop the scale. Opacity + 6px, settle curve, 850ms. Hold and fade durations unchanged. | **REFINE** (not a new element) |
| Hero Ken Burns / still poster / full-page quiet fade | Second open, or a pattern another clinic already owns. | Reject |
| Before/after wipe, slider, or seam on the plates | Would restage published clinical pairs and pressure the two-up reading. | Reject |
| Equipa plate stagger | Identity-preserving plates stay still. | Reject |
| Section fade-up on every block | Kinetic template. One path is the idea. | Reject |
| Dock bounce / spring | Vestibular, and it fights the matte chrome. | Reject |
| Instagram marquee retiming | Already a slow loop. Do not add another. | Leave |

## Vote

| Seat | Position |
| --- | --- |
| Vale | Yes to the path and the dock arrival. No second open. The thread must leave so the rested page matches the freeze. No motion on photography. |
| Reed | Yes. The path is the craft beat: one gesture, overlap, under 1.4s, then gone. The dock fixes a pop without becoming a second idea. Crest scale goes; the hold stays. |
| Glyph | Yes if type, logo, and staff plates do not move. The journey title and the lead line stay still. The thread uses the existing gold hairline, with no glow. |
| Ash | Yes if reduced motion never hides content, deep links do not blank the rail, there is no layout shift, and the dock is not focusable while invisible. Once-per-session applies to the path, not to the dock. |
| Axiom | Yes. Motion lives on the primary twist (smile journey) and the dock only arrives. The before/after rail already shows both plates; this pass does not restage them. |

**Winner to implement:** smile-journey path + international dock arrival. Crest easing is a light refine of the locked open, not a second intro.

## Spec (the contract)

### 1. Smile-journey path
- Rail only. Title, lead line, and the mobile chip do not move.
- Thread: existing gold, 1.5px, transparent at the ends, no shadow. Draws from the left, holds, fades to nothing. 1350ms, `cubic-bezier(0.22, 1, 0.36, 1)`.
- Plates: opacity and `translateY(6px)` only. No scale, no blur, no Ken Burns. 720ms, same curve. Delays 180 / 290 / 400 / 510ms.
- Armed only while the rail is still below the fold, so the hide is off-screen. Plays when the rail meets the viewport.
- `sessionStorage` key `lp-journey-thread`, written when the gesture finishes. A later load in the same session shows the rested rail.
- Any URL hash skips the gesture and shows the rested rail (same rule as the crest: deep links are content, not an intro).
- `prefers-reduced-motion: reduce`: no thread, plates at rest, no session write from the reduced path. CSS forces the rested plates if the attribute is ever set.

### 2. International dock arrival
- Show/hide stays the same (after a short scroll, hidden again over `#contacto`, desktop only).
- Opacity and 10px, 340ms, same settle curve. No spring.
- Reduced motion: opacity snaps, no travel.
- Invisible dock is `inert` and `aria-hidden`. It does not take clicks.

### 3. Crest refine
- Entrance 850ms, same settle curve, opacity and 6px, no scale.
- Hold 1500ms and fade 700ms unchanged. Session, hash, and reduced-motion skips unchanged.

## Locks reaffirmed
- Exact public copy and logos. No new clinical claims.
- `/equipa` plates unchanged, including the initials plate where no portrait was published.
- PT default + EN twin. Dark and light. Matte chrome. Brand gold `#DC940D` only as the existing accent.
- `vercel.json` untouched.
