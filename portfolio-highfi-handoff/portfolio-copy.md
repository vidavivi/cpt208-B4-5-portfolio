# Portfolio Copy

## Section Introduction

This walkthrough presents three high-fidelity frontend functions from the final CPT208 prototype: Album, Mood Jar, and Weekly Echo. For the portfolio version, the interaction is demonstrated through guided screenshot states rather than live backend integration, allowing the interface flow and design rationale to remain visible in a stable, presentation-ready format.

## Function 1: Shared Album with Pet-Carried Notes

**Purpose**

This function lets family members share small photo-based updates, attach short pet-carried notes, and acknowledge one another through lightweight reactions.

**What the user can do**

- Open a family overview and enter a member-specific album view.
- Browse recent photo updates through a compact visual layout.
- Read short pet-carried notes attached to each image.
- Respond with a quick emoji reaction instead of composing a longer message.

**Design rationale**

The Album flow treats family sharing as a low-pressure visual exchange. Large preview cards make recent activity easy to scan, while the reaction layer keeps acknowledgement lightweight and asynchronous. A compact summary card further reduces effort by condensing several updates into a readable recap.

**How it supports design requirements**

This function supports gentle asynchronous family contact and lightweight acknowledgement. It also demonstrates how small individual updates can be accumulated into a broader family narrative rather than remaining isolated media posts.

**Suggested tooltip copy**

- `Choose a family member's album`
  `The overview uses large preview cards so each family member's most recent update can be recognised before opening a detail view.`
- `Acknowledge without starting a chat`
  `Each photo can receive a lightweight reaction, allowing family members to respond without composing a full message.`
- `Reaction feedback stays visible`
  `After selection, the chosen emoji appears directly on the image and the reacting family member is shown below.`
- `Pet notes become a compact recap`
  `The summary card turns multiple short captions into a brief narrative, helping the viewer recover context quickly.`

## Function 2: Mood Jar with Graduated Sharing Controls

**Purpose**

This function allows the student to record a daily mood quickly and decide how much of that mood becomes visible to family members.

**What the user can do**

- Add a mood bead through a short, visually guided editor.
- Choose from a constrained mood vocabulary instead of writing a long diary entry.
- Decide whether the mood stays private, becomes softly visible, or is fully shared.
- View how shared mood information appears to family and how relatives can respond with gentle care gestures.

**Design rationale**

Mood Jar is structured around graduated disclosure. The student-facing input remains brief and manageable, while the family-facing output is filtered and bounded. This separation supports emotional awareness without turning the interface into a surveillance tool or demanding continuous explanation.

**How it supports design requirements**

This function is the strongest expression of privacy control in the prototype. It also supports gentle family connection by turning mood-sharing into a small check-in with bounded response options rather than an open-ended conversation burden.

**Suggested tooltip copy**

- `Start with a single-tap check-in`
  `The jar invites a quick emotional check-in rather than a long written disclosure.`
- `Use a constrained visual mood vocabulary`
  `A fixed set of mood beads allows the user to communicate state quickly with less cognitive load.`
- `Control how much family can see`
  `Private, Soft Share, and Full Share create explicit thresholds between self-tracking and family awareness.`
- `Shared beads are filtered before they reach family`
  `Only entries that pass the chosen share threshold appear in the shared jar and shared-status view.`
- `Family responses stay gentle and bounded`
  `Relatives can reply with small care gestures such as a hug, tea, or pet response.`

## Function 3: Weekly Echo and Keepsake Reflection

**Purpose**

This function turns repeated small interactions into a weekly recap and a keepsake-oriented reflection flow.

**What the user can do**

- Review a weekly recap that combines messages, photo shares, reactions, and mood check-ins.
- Move between boards to inspect activity and keepsake-related content.
- Reveal a weekly keepsake created from cumulative interaction.
- Revisit the reflection through short pet reply prompts.

**Design rationale**

Weekly Echo adds a reflective layer to the product. Instead of leaving activity fragmented across separate screens, the recap board gathers weekly traces into a readable story, and the keepsake reveal turns repeated small actions into a visible family memory object.

**How it supports design requirements**

This function supports cumulative reflection and memory-making. It shows how low-pressure daily traces can become meaningful over time rather than disappearing after each individual interaction.

**Suggested tooltip copy**

- `Review the week as a single calm recap`
  `The recap board condenses several types of family interaction into one readable weekly story.`
- `Turn collected activity into a keepsake`
  `The keepsake board reframes repeated small actions as cumulative progress and offers a clear reveal action.`
- `Reflection continues through lightweight pet prompts`
  `Short reply chips allow the user to revisit the recap conversationally without leaving the reflection surface.`
- `The reward is presented as a memory object`
  `The final state names the keepsake, explains why it was unlocked, and invites it into the pet space.`

## Requirement Alignment Text

- `DR1`
  `The prototype prioritises gentle asynchronous family connection by turning updates into short, low-pressure touchpoints rather than demanding real-time conversation.`
- `DR2`
  `The mood-sharing flow separates private self-tracking from family-visible awareness through explicit share thresholds and a private calendar view.`
- `DR3`
  `Response mechanisms are intentionally lightweight, allowing acknowledgement and care without increasing communication pressure.`
- `DR4`
  `Small daily traces are accumulated into summaries, shared states, and keepsake rewards so that interaction produces longer-term meaning.`
