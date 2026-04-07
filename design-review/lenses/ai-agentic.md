# AI / Agentic Interface Lens

Apply when reviewing AI-powered features, chatbots, copilots, agentic workflows, or AI-assisted interfaces.

## The Core Problem: Inverted Sequences

Traditional SaaS: constrained inputs → system handles output → user learns through interaction.
AI-first: user declares intent → system generates output → exploration happens after.

This inversion transfers the burden of abstraction from the system to the user. "What do you want to make?" assumes users know outcomes in advance — but users often open tools *because they don't*. Designs that depend on user eloquence are fragile.

## Three Behavioral Forces

### Trust

Users don't need to trust AI before adoption — trust emerges through usage. Human validation of outputs is the biggest driver of trust, over consistently accurate outputs.

**Design for controllability, not perfection.**

- AI should accelerate cognition, not replace it (human-in-the-loop)
- Autonomy must be introduced gradually — earned through interaction, not demanded upfront
- An incorrect suggestion is a minor correction; an incorrect autonomous action is a crisis
- Users trust systems they can interrogate, shape, and verify
- Interaction becomes calibration: confidence builds through use, not blind faith

### Value Perception

Power of a system ≠ whether users see its value. Perceived ease of use has a consistently greater impact on adoption than perceived usefulness.

**Demonstrate before imagining.**

- Prompt-first interfaces ("Ask us anything") require users to *imagine* value — cognitively expensive, rarely converts
- Lead with demonstrated value: surface surprising patterns, highlight risks, present concrete findings, *then* invite exploration
- Users abandon sophisticated systems if engagement costs feel ambiguous
- Show, don't tell

### Cognitive Effort

The blank screen is a bigger risk than feature complexity. Microsoft: "Unaided, free-form prompting is one of the biggest barriers to mainstream adoption."

**Absorb complexity into the system.**

- Structure prompts rather than leaving them open-ended
- Provide contextual suggestions and example prompts
- Propose structure and invite modification — users react rather than invent
- Bad: "Tell me your categories and I'll sort your spending"
- Good: "Here are 10 categories people like you typically use. Should I sort into these?"
- Surface plausible starting points through insight notifications and suggestion-driven interfaces

## The Autonomy–Failure Cost Correlation

As AI becomes more visible and autonomous, failure costs rise exponentially.

- **Assistive/background AI** → low failure cost. Imperfect suggestions can be ignored, inaccuracies corrected. Misaligned recommendations become calibration moments, not crises
- **Autonomous/visible AI** → high failure cost. Acting *for* users rather than *with* them means mistakes trigger disproportionate trust erosion — lost revenue, reputation damage, broken relationships

**Control mechanism:** keep humans in the loop until the system has earned graduated autonomy through repeated successful calibration.

## Evaluation Criteria

- **Does the AI feel integrated or bolted-on?** An AI feature that feels like a separate product inside your product has failed. It should be woven into the workflow
- **Is the AI's role clear to the user?** What's automated, what's manual, what's suggested? Ambiguity about what the AI did vs. what the user did erodes trust
- **Graceful degradation:** what happens when the AI is wrong, slow, or unavailable? The product must still be usable
- **Appropriate trust calibration:** is the UI honest about AI confidence levels? Overconfident AI presentation leads to user disappointment
- **Does the interface preserve user agency?** The user should feel in control. AI should augment, not override. "Accept suggestion" > "AI decided for you"
- **Does the UI lead with demonstrated value?** Or does it ask the user to imagine what AI could do for them? A blank prompt is a value perception failure
- **Is cognitive effort absorbed by the system?** Does the AI propose structure and invite modification, or demand the user articulate from scratch?
- **Is autonomy graduated?** Does the system earn trust through interaction before taking autonomous actions?
- **What's the failure cost at this autonomy level?** Background suggestions have low blast radius. Autonomous actions on behalf of the user have high blast radius. Is the autonomy level appropriate for the trust earned?

## Lens-Specific Provocations

- "If I turn off the AI features, does this product still work? If not, you've built a fragile dependency"
- "How does the user know what the AI did vs. what they did? If it's unclear, trust erodes"
- "What happens when the AI is confidently wrong? Is there an escape hatch?"
- "Is this a blank prompt saying 'ask me anything'? That's asking users to imagine value — show them value first"
- "Does this interface absorb complexity or export it? If the user needs to be a prompt engineer, you've failed"
- "Is the AI acting *with* the user or *for* the user? If *for*, what happens when it's wrong?"
- "Has the system earned the level of autonomy it's exercising? Or is it asking for trust before demonstrating competence?"
- "Could you replace the AI prompt with structured suggestions that invite modification? React > invent"

## References

- Usborne (2025) — Designing AI for trust: three behavioral forces (trust, value perception, cognitive effort), inverted sequences, autonomy–failure cost correlation
- Wroblewski (recent) — AI-native interaction patterns, agentic workflow design
- Nielsen — articulation barrier in unfamiliar interfaces
- Microsoft Research — free-form prompting as adoption barrier
- Google — open-intent paralysis
