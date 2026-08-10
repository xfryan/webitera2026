---
layout: post.njk
title: "The Perfect Architecture That Never Arrived on Time"
date: 2026-06-03
dateDisplay: "June 3, 2026"
lang: en
image: /assets/img/blog/la-arquitectura-perfecta-que-nunca-llego-a-tiempo.png
imageAlt: "AI-generated illustration about evolutionary architecture and platforms built incrementally"
excerpt: "Months of design, review boards, exhaustive documentation — and by the time the project finally has something to show, the business has already moved on. Why the perfect architecture almost never arrives on time."
tags:
  - posts_en
  - Agile Strategy
  - Agile Thinking
---

In 2017, during one of the first public presentations of the concept of evolutionary architecture, Rebecca Parsons — Chief Technology Officer of ThoughtWorks — was approached by an attendee after her talk. The message was direct: what she was proposing was professionally irresponsible. Software architecture, he told her, is the thing that never changes. Designing it to evolve was, in his reading, an invitation to chaos.

Parsons listened. And she probably recognized something in that moment: the person in front of her wasn't a bad architect. He was a good architect with the wrong paradigm.

At itera we've heard variations of that conversation more times than we can count. Not always at conferences. Often in meeting rooms, in project kickoffs, in conversations where someone proposes building a technology platform and the first response is: "First we need to define the complete architecture." What follows is familiar: months of design, review boards, exhaustive documentation, and a project that, by the time it finally has something to show, finds the business has already moved on.

## The Monster and the Paradigm That Produces It

In Latin America we've witnessed an entire generation of technology infrastructure projects sharing the same fate. Enterprise service buses designed to connect the whole organization at once. Microservices platforms conceived to replace legacy systems in a single move. Data architectures that promised to be the foundation for all future analytics. Most ended the same way: unfinished, outdated by the time they shipped, or completely abandoned before delivering real value.

The pattern has a precise cause. It's not a lack of technical talent — the teams that build these systems tend to be highly competent. It's a documented cognitive bias operating under the appearance of professional rigor: the belief that a system that isn't complete is poorly built, and that there's a correct way to build it that must be honored before any part of it can be used.

We call it the Completeness Fallacy and Correctness Bias. And we give its architectural expression its own name: Big Architecture Up Front. The platform-world equivalent of the Big Design Up Front that the software development world took decades to move past.

The problem isn't just that these projects arrive late. It's that they arrive late having built things nobody's going to use. The Standish Group's accumulated research over more than two decades shows that between 64% and 80% of the functionality built into software systems is rarely or never used. That means half the effort invested in designing something "perfect and complete" goes toward functionality that generates no value. And while that whole thing is being built, the world keeps moving. Technology paradigms shift every three to five years. What was the standard when the design started can be obsolete by the time the system is ready to operate. If it ever gets there.

## A Different Way to Understand Soundness

In 2010, software engineer George Fairbanks published a book that should be required reading for any team designing platforms: Just Enough Software Architecture. His central argument is uncomfortable for those carrying the completeness paradigm: the level of architectural rigor should be proportional to the system's actual risk, not to an abstract standard of perfection. Enough isn't the opposite of sound. It's the opposite of waste. And of wasted time, which is the worst waste of all.

That same year, Neal Ford, Rebecca Parsons, and Patrick Kua were developing what they'd publish in 2017 as evolutionary architecture: the principle that a well-designed architecture isn't one that anticipates everything, but one that preserves what matters while the rest evolves. The core mechanism is fitness functions — measurable, automatable criteria the system must satisfy on every iteration. Not "the architecture is secure." Instead, "the architecture passes these security criteria on every change." The difference isn't semantic. It's the difference between a promise made at the start and a property verified continuously.

These two frameworks, read together, dissolve the false dichotomy between soundness and incrementalism. It's not "we do everything right" versus "we move fast." It's "we define what must always be preserved, and we make the rest of the decisions when we have the information to make them well."

## The First Lego Piece Is the Platform

When an organization needs to build a layer of digital capabilities — data, services, integration — the natural temptation is to go straight to the core. To the most complete, most authoritative source. The problem is that path creates direct coupling between the systems that need data and the organization's most critical systems, with no protection, no governance, no architecture that can grow.

The alternative isn't waiting to have the perfect platform. It's building that platform's first building block around the need that's already on the table. Solving the real problem of the moment. Establishing the essential elements of the middle layer. And from there, growing with judgment — not rushed, but not paralyzed by an inability to deliver anything until everything is ready either.

Zhamak Dehghani, in her work on Data Mesh, and Matthew Skelton and Manuel Pais, in Team Topologies, describe this principle from different angles and arrive at the same place: a platform doesn't get finished and then used. It gets built by being used. And the success criterion isn't "is it complete?" but "is it delivering value to its users today?"

## What We're Already Building

At itera we've spent a long time accompanying organizations facing exactly this tension. The pressure to get it right from the start exists — and it's legitimate. What we propose isn't ignoring it, but reframing it: real soundness isn't designed all at once. It's built iteration by iteration, with mechanisms that guarantee what matters gets preserved while the system grows.

We've seen the difference between teams that wait for the perfect architecture and teams that start with the sufficient architecture. The first group arrives late, if they arrive at all. The second group learns, adjusts, and builds something the business can use — and that can keep growing when the paradigm shifts. Because the paradigm always shifts.

If your organization is at that decision point — build the complete platform first, or start delivering it from the first building block — that's a conversation we're interested in having.
