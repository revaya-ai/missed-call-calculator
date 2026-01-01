---
name: revaya-brand-guidelines
description: Applies Revaya AI's official brand colors, typography, and voice to any frontend, document, or artifact. Use when building anything for Revaya including websites, calculators, presentations, PDFs, or marketing materials.
---

# Revaya AI Brand Guidelines

## Overview

Use this skill when creating any asset for Revaya AI to ensure consistent brand identity.

**Keywords**: Revaya, branding, brand colors, typography, visual identity, styling, design standards, voice, tone

## Brand Identity

**Company**: Revaya AI
**Tagline**: "Reclaim Time. Build Freedom."
**Positioning**: Long-term growth partner for small businesses through AI automation, consulting, and strategic websites.

## Colors

**Primary Colors:**

- Primary Purple: `#3B3D9F` - Buttons, headers, primary accents, headline emphasis words
- Secondary Teal: `#61BDB4` - Highlights, progress indicators, secondary accents

**Secondary Accent Colors:**

- Coral: `#FF6B6B` - Links, CTAs, attention-grabbing elements
- Mint: `#ABFFBC` - Success states, positive highlights
- Lavender: `#A8A9F4` - Subtle accents, backgrounds

**Neutral Colors:**

- White: `#FFFFFF` - Backgrounds
- Dark Gray: `#1F2937` - Primary text, headlines
- Dark Contrast: `#1A535C` - When dark contrast is needed
- Medium Gray: `#6B7280` - Secondary text
- Light Gray: `#E5E7EB` - Borders, dividers, subtle backgrounds
- Off-White: `#F9FAFB` - Alternate section backgrounds

**Functional Colors:**

- Success Green: `#10B981` - Positive indicators, success states
- Warning Amber: `#F59E0B` - Caution, attention needed
- Error Red: `#EF4444` - Errors, critical alerts

## Typography

**Primary Font**: Montserrat (with system sans-serif fallback)

```css
font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Font Weights:**
- Headings: 600 (semibold) or 700 (bold)
- Body: 400 (regular)
- Emphasis: 500 (medium)

**Font Sizes:**
- H1: 36px / 2.25rem
- H2: 30px / 1.875rem
- H3: 24px / 1.5rem
- H4: 20px / 1.25rem
- Body: 16px / 1rem
- Small: 14px / 0.875rem

**Line Heights:**
- Headings: 1.2
- Body: 1.4

## Headline Treatment

Headlines use Dark Gray (`#1F2937`) as the base color. Highlight the core impact words or key phrases in Primary Purple (`#3B3D9F`) for emphasis.

**Example:**
"How Much Revenue Are You <span style="color: #3B3D9F">Losing to Missed Calls</span>?"

"Most service businesses lose <span style="color: #3B3D9F">$2,000-10,000+</span> monthly"

## Link Styles

- Link Color: `#FF6B6B` (Coral)
- Hover: Underline
- Visited: Slightly darker coral

## Voice & Tone

### The Shannon Voice

Shannon is direct, passionate, and allergic to bullshit. She spent 18 years in corporate marketing at companies like Virgin Mobile, Papa Murphy's, Boost MObile, Ultra Mobile, Intermedia and learned to "make herself small" to fit corporate culture and that led to burout, dispare and feeling lost. Now she refuses to do that. Her voice is:

**Direct and Transactional**
- Gets to the point without excessive fluff
- Says what needs to be said
- Doesn't package feedback in layers 
- Values efficiency in communication

**Passionate but Grounded**
- Deeply enthusiastic about AI and helping businesses
- Excitement comes through naturally, not performatively
- Backs up passion with real experience and results

**Authentic and Unfiltered**
- Speaks like a real person, not a marketing brochure
- Comfortable with casual language
- Shares real stories and struggles
- Doesn't pretend to have all the answers

**Alignment-Focused**
- Only works with people and projects that align with her values
- Believes in mutually beneficial relationships
- Won't compromise integrity for money
- Values freedom and autonomy over traditional success metrics

### Voice Pillars

1. **Warm but direct** - Approachable, never corporate. Say it straight.
2. **Confident but humble** - Know our craft, don't oversell. Let results speak.
3. **Clear and actionable** - No fluff. Get to the point. Give them something to do.
4. **Authentic** - Shannon's real voice comes through. Real person, real experience.

### Critical Rule

**Use "I" not "We"** - Revaya AI is founder-led. Shannon is the voice.

### Shannon's Natural Phrases

Use these naturally in conversational content:
- "Okay, so..."
- "Here's the thing."
- "So I've been thinking..."
- "Let me push back on that."
- "What does your gut say?"
- "That's the move."
- "Fuck it." (when appropriate for audience)
- "Neither here nor there."
- "You know what I mean?"
- "Look..."
- "This is where it gets interesting."

### Tone by Context

**Sales/Marketing Content:**
- Lead with the problem, not the solution
- Be specific about outcomes (hours saved, dollars recovered)
- Don't oversell or make guarantees
- Let curiosity drive, not pressure

**Educational Content:**
- Share what you've learned, including mistakes
- Be generous with knowledge
- Explain the "why" not just the "what"
- Treat the reader as capable of understanding

**Personal Brand Content:**
- Share real stories from corporate and entrepreneurship
- Be vulnerable about struggles (burnout, loneliness, uncertainty)
- Connect business lessons to personal growth
- Don't perform positivity; be honest about challenges

### Words to NEVER Use

- delve
- craft/crafting
- realm
- unlock
- revolutionize
- disruptive
- utilize
- dive deep
- unveil
- pivotal
- intricate
- hence
- furthermore
- cutting-edge
- ever-evolving
- leverage
- synergy
- streamlined
- real results
- no jargon
- real solutions
- empower (overused)

### Words to Minimize

- can
- may
- just
- that
- very
- really
- literally
- certainly
- probably
- basically
- could
- maybe
- exciting
- solutions (don't overuse)

## Button Styles

**Primary Button:**
```css
background-color: #3B3D9F;
color: #FFFFFF;
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;
font-family: 'Montserrat', sans-serif;
```

**Secondary Button:**
```css
background-color: transparent;
color: #3B3D9F;
border: 2px solid #3B3D9F;
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;
font-family: 'Montserrat', sans-serif;
```

**CTA Button (High emphasis):**
```css
background-color: #FF6B6B;
color: #FFFFFF;
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;
font-family: 'Montserrat', sans-serif;
```

**Hover States:**
- Primary: Darken to `#2D2F7A`
- Secondary: Fill with `#3B3D9F`, text to white
- CTA: Darken to `#E55A5A`

## Component Patterns

**Cards:**
- Background: White
- Border: 1px solid `#E5E7EB`
- Border-radius: 12px
- Shadow: `0 1px 3px rgba(0,0,0,0.1)`
- Padding: 24px

**Form Inputs:**
- Border: 1px solid `#E5E7EB`
- Border-radius: 8px
- Focus: Border `#3B3D9F`, ring `#3B3D9F` with 20% opacity
- Padding: 12px 16px
- Font-family: Montserrat

**Progress Bars:**
- Track: `#E5E7EB`
- Fill: `#61BDB4` (teal)
- Height: 8px
- Border-radius: 4px

## Spacing System

Use consistent spacing based on 4px grid:
- 4px (1)
- 8px (2)
- 12px (3)
- 16px (4)
- 24px (6)
- 32px (8)
- 48px (12)
- 64px (16)

## Responsive Breakpoints

- Mobile: 375px
- Tablet: 768px
- Desktop: 1024px
- Large Desktop: 1440px

## Logo Usage

- Primary logo on white/light backgrounds
- Reversed logo on dark/purple backgrounds
- Minimum clear space: Height of the "R" in Revaya on all sides
- Minimum size: 120px width for digital

## Application Summary

| Element | Style |
|---------|-------|
| Headlines | Dark Gray `#1F2937`, key words in Purple `#3B3D9F` |
| Body Text | Dark Gray `#1F2937`, line-height 1.4 |
| Links | Coral `#FF6B6B`, underline on hover |
| Primary CTAs | Purple `#3B3D9F` or Coral `#FF6B6B` buttons |
| Accent Elements | Teal `#61BDB4` |
| Backgrounds | White or Off-White alternating sections |
| Dark Sections | Use `#1A535C` for contrast |
