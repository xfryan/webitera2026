---
layout: post.njk
title: "Domain-Driven Design Just Turned Twenty-Three, and Only Now Became Urgent"
date: 2026-07-29
dateDisplay: "July 29, 2026"
lang: en
image: /assets/img/blog/domain-driven-design-cumple-veintitres-anos-recien-ahora-se-volvio-urgente.png
imageAlt: "AI-generated illustration about Domain-Driven Design and shared language across organizations"
excerpt: "Five departments answered what an 'active customer' means, and all five were right. The problem isn't the ambiguity — it's that no AI agent is going to notice it before acting on it."
tags:
  - posts_en
  - AI-First
  - Agile Practices
  - Organizational Transformation
---

**The question came up in a board meeting, almost as a formality, because two reports showed different numbers: what is an active customer?**

Five departments answered, and all five were right. For Sales, an active customer is one who bought in the last twelve months, because that's how quota and commissions are calculated. For Finance, it's one with an active contract and ongoing billing, because that's what revenue recognition depends on. For Operations, it's one who used the service in the last thirty days, because that's what capacity planning is based on. For Marketing, it's one who opened an email or logged into the app in the last ninety days, because nobody segments campaigns around people who show no signal. For Support, it's one whose account is current, because a delinquent account gets handled differently.

None of these definitions is wrong. Each one is exact for what it was built for. The problem is that nowhere was it written down that they were different.

## What Changed Isn't the Argument

The consequences of this don't live in a conceptual discussion — they live in the operation. The churn formula takes the numerator from one department and the denominator from another, so the metric reported upward every month measures nothing, even though it's calculated without errors. The reactivation campaign is built on Marketing's definition, so it emails "we miss you" to someone who used the service that same morning; the customer posts about it and the team finds out that way. The propensity model was trained on Operations' definition, but the contact list was generated with Sales', so it calls late, after the decision has already been made. A salesperson earns commission on an account Finance doesn't count, and that gap gets patched by hand, every month, in a spreadsheet someone maintains and nobody documented.

None of this is a system error. These are five truths coexisting, as they have for fifteen years, held together by people who catch the mismatch at every handoff and translate.

For two decades, the case for DDD was the same as for so many practices: quality, maintainability, future cost. All true, and all postponable. And postponing it was rational, because the organization absorbed the cost with people. Someone would ask. Someone knew that in Collections "active customer" meant something else. Someone knew the context, or at least knew who to call.

An AI agent does none of that. It doesn't ask, doesn't infer, doesn't know the hallway conversations. It executes on whatever definition it finds, at machine speed and without witnesses. That's why McKinsey's article *Building the foundations for agentic AI at scale* (April 2, 2026) warns that, without a shared semantic foundation, agents can act on incomplete or contradictory interpretations of the same data, and that error and operational risk grow as you scale. The same article offers the number that frames the conversation: roughly two-thirds of companies worldwide have already experimented with agents, but fewer than ten percent have managed to scale them into tangible value.

Put differently: ambiguity of meaning stopped being tolerable debt and became operational risk. And that happens exactly when we ask agents to resolve end-to-end processes, not tasks within a silo. An end-to-end process crosses departmental boundaries constantly. Before, every handoff had a human who translated. Now it doesn't.

## Where This All Comes From

In August 2003, Eric Evans published *Domain-Driven Design: Tackling Complexity in the Heart of Software* (Addison-Wesley), known in the community as "the blue book." Evans came from complex projects where the problem was never the technology: it was that the model living in the business people's heads and the model living in the system were different, and nobody noticed until it got expensive.

His thesis is that the greatest value of a well-built business model is that it provides *"a common language between domain experts and technical people."* DDD's instrument isn't a technology or an architecture. It's language.

## The Five DDD Concepts Whose Absence Will Fatally Confuse an Agent

1. **Ubiquitous language.** One vocabulary, used the same way by the business, the team, and the code. If the meeting says "enrollment" and the database table is called something else with a different rule, two truths are coexisting. *Why it matters now:* that language is, literally, what the agent reads to decide.

2. **Bounded context.** The most counterintuitive idea, and the most valuable one. DDD says you shouldn't force a single definition across the whole company, because the same word legitimately means different things in different areas: Sales' "customer" isn't Support's "customer," nor Finance's, and that's fine. What you need to do is delimit where each meaning applies and make it explicit. *Why it matters now:* it's the direct answer to the instinct to build a single source of truth, a central model meant to serve everything. Zhamak Dehghani, creator of data mesh, says it plainly in her book: don't expect a single source of truth.

3. **Context map.** The document showing how those contexts relate to each other and what gets translated when crossing from one to another. *Why it matters now:* it's exactly the map an agent needs to cross from one area to another without breaking anything, and it's what almost no organization has written down.

4. **Anti-corruption layer.** A translation layer that protects your model when you integrate with a system that has a different one — typically a legacy system, or one that arrived through an acquisition — so its logic doesn't contaminate yours. *Why it matters now:* it's the specific tool for coexisting with the old without becoming a prisoner of its definitions.

5. **Core domain and subdomains.** Not everything deserves the same effort. The core domain is what the organization actually competes on; the rest is support or commodity. *Why it matters now:* it answers the question that comes after understanding everything else, which is where to start. And it lines up with what McKinsey's own article recommends: pick a few high-value flows, don't redesign everything at once.

## And How It's Done, in Practice

The most widely used technique for this is **EventStorming**, created by Alberto Brandolini in 2013, building on experiments he'd presented the year before. It's a very low-tech workshop: paper on the wall, colored sticky notes, and the people who know — business and technical, together — reconstructing the process as a sequence of events, in chronological order, until the inconsistencies surface.

It's worth noting what this means. When McKinsey's framework asks, as its first step, to map end-to-end workflows before agentifying them, it doesn't explain how. EventStorming is a proven answer to that "how," available for more than a decade.

## Why It Costs More Here

In organizations that grew fast, or went through acquisitions, mergers, or changes in direction, the challenge is bigger, and it's worth saying plainly. Absorbing so many different technologies rarely left time for a structural review, and the organization survived on bridge solutions. The architecture ended up being a big plan living in some slide deck — often several plans, none of them fully pursued or followed through, always for legitimate reasons of urgency.

In those organizations, the problem isn't a missing map. It's that there are too many maps nobody followed. And that's where DDD has a concrete advantage over any master plan: it doesn't require unifying anything before you start. It lets you delimit one context, give it explicit language, protect it with a translation layer, and move forward. It's incremental by design, which is the only way these things actually happen.

This lineage has also already reached data. When Dehghani proposed data mesh in 2019, she explicitly took Evans' domain and bounded context and brought them into the world of data, with domain ownership and data as a product. A good part of the vocabulary circulating in technology committees today comes from there.

## Where We're Working

If tomorrow an agent had to resolve one of your area's processes end to end…

> which definition of your key terms would it be deciding on?

That's the conversation we're interested in having.

At Itera we've been accompanying this whole journey: team culture, world-class technical practices, and, when the work starts spilling past the team's boundaries, domain-driven design. Not as an architecture project, but as what it actually is: the way an organization agrees on what things mean, while respecting that they mean something different in each place.
