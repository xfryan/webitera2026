---
layout: post.njk
title: "The Wall Was Always There"
date: 2026-06-13
dateDisplay: "June 13, 2026"
lang: en
image: /assets/img/blog/la-pared-siempre-estuvo-ahi.png
imageAlt: "AI-generated illustration about technical debt and system collapse"
excerpt: "The tech team warned. The business prioritized the roadmap. Six months later, at the worst possible moment, the system collapsed. Technical debt isn't the problem — the incentive system that produces it, is."
tags:
  - posts_en
  - Digital Product Management
  - Organizational Transformation
---

Let's say it's March. The product team has two options on the table for the next sprint:

- Refactor the payments-processing module — three years of patches stacked on patches — or
- Ship the express-checkout flow the commercial team has been asking for over the last two months.

The CCO looks at the roadmap committed to the board. The Product Manager notes, with the patience of someone who's explained it before, that the payments module is going to collapse under load if nothing changes. The commercial lead nods… and picks express checkout.

Not because they're ignorant. Because their *bonus depends on the roadmap.* Because the board measures shipped features, not managed debt. Because telling the CEO *"we're not shipping anything visible this quarter"* is a conversation nobody wants to have. The decision is rational within the incentive system that exists.

And so, sprint after sprint, the debt *grows*. Six months later, on *Black Friday*, or at *enrollment peak*, or at the exact worst possible moment, the **system collapses**.

And then something predictable happens: the business panics, looks for someone to blame, and points at engineering. "Tech didn't warn us." "The platform isn't up to par." The engineering team, which raised the flag multiple times and has the tickets to prove it, stays quiet with a clenched jaw.

## The Debt Isn't the Problem. The System That Produces It, Is.

What we just described isn't an isolated case of bad management. It's a pattern widespread enough to have had a name for decades. **Ward Cunningham**, one of the original signers of the **Agile Manifesto**, coined the metaphor of *technical debt* in 1992, precisely so the business side could understand something that had until then been invisible: *that cutting corners in development is like taking out a loan*. Sometimes it makes sense to do it. The problem isn't the debt; it's the interest that never gets paid.

What Cunningham didn't anticipate — or maybe he did, pessimistically — is that the metaphor would get captured by the very system it was meant to correct. Today "technical debt" is the euphemism teams use to justify code nobody wants to touch, and the term the business uses to mean *"engineering's problem."* The financial metaphor got twisted: if it were really a debt, there'd be a creditor, a rate, a due date. Instead, it accumulates *silently* until the interest exceeds the capacity to pay, and at that point it's no longer debt — it's insolvency.

According to **McKinsey** (2022), 30% of CIOs acknowledge that more than a fifth of their "innovation" budget ends up absorbed by technical debt. **CISQ** — the Consortium for Information & Software Quality, the industry standards body co-founded by Carnegie Mellon — estimated that global technical debt exceeded a trillion dollars in 2020 and grows 14% a year.

In other words, this isn't an engineering problem. It's a *balance sheet* problem.

## The Incentive Nobody Wants to Change

The real problem isn't in the code. It's that most digital organizations' incentive systems reward exactly the behavior that produces collapse.

Planning cycles measure *features shipped*, not *architectural health*. Bonuses get calculated on *roadmap compliance*, exclusively. Board conversations revolve around *velocity* and *time-to-market*. There's no *"debt managed this quarter"* metric on the executive dashboard. In that context, asking the business to prioritize *refactoring* over *new features* is asking it to make a decision that hurts it *within the rules of the game currently in effect*. And most won't, not because they're short-sighted or irresponsible, but because the system *pushes* them hard in that direction.

The collapse, when it arrives, produces a false diagnosis: **"the tech team failed."** But the tech team built exactly what the incentive system asked them to build, at the speed that system demanded, with the commitments that system celebrated. The wall didn't appear out of nowhere. It had been growing every sprint where the business rationally chose the short term.

What crashes into the wall isn't the platform. It's the product governance model.

## The Way Out: Making the Invisible Visible

There's no technical fix for an incentive problem. Technical debt doesn't get solved with better engineers or more "cleanup" sprints. It gets solved when the business and technology share a language that makes the real cost of each decision visible at the moment it's made — not six months later, when it's already too late.

In practice, that means three moves:

- First, translate the debt into concrete financial terms: not "the payments module is degraded," but "every month we don't intervene, the cost of intervention grows 15% and the risk of failure under load doubles."
- Second, integrate technical health as an explicit prioritization criterion — not as a backlog item competing with features, but as a condition that enables or blocks scaling.
- Third, build the board conversation before the collapse, with data executives recognize as their own: business risk, opportunity cost, intervention window.

Without those moves, the cycle repeats. With them, technical debt goes back to being what Cunningham meant it to be: a tool for conscious decision-making, not an invisible time bomb.

## At Itera We're Already Having That Conversation

A meaningful part of the work we do with product teams is exactly this: building the bridge between architecture and the boardroom. Not to defend engineers or slow down the roadmap, but so the organization can make decisions with the real cost on the table.

We've seen platforms that had been running "fine" for years hit a scaling point and simply not be able to continue. And we've also seen teams that managed to install that conversation before the collapse turn debt management into a real competitive advantage: platforms that scale without drama, because someone had the uncomfortable conversation at the right moment.

Is that conversation already happening in your organization, or is it still waiting for the next Black Friday to force it?
