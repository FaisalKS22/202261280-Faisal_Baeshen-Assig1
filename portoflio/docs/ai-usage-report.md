# AI Usage Report

## Tools Used & Use Cases

| Tool | How It Was Used |
|------|-----------------|
| **Claude (Anthropic)** | Generated initial HTML structure, CSS styling, and JavaScript interactivity. Used for code review, debugging, and documentation drafting. |
| **GitHub Copilot** | Assisted with code completion and inline suggestions while editing in VS Code. |

### Specific Examples

- **HTML scaffolding** — Claude helped generate a semantic HTML5 layout with proper accessibility attributes (`aria-label`, `aria-expanded`), SEO meta tags, and a logical section structure.
- **CSS theming system** — AI suggested using CSS custom properties for a dark-teal colour palette, making it easy to maintain consistent styling and support a theme toggle.
- **JavaScript features** — Copilot assisted with the Intersection Observer setup for scroll-based fade-in animations and the localStorage-based theme persistence logic.
- **Documentation** — Claude helped draft this report and the technical documentation with proper Markdown formatting.

---

## Benefits & Challenges

### Benefits
- **Faster prototyping** — AI-generated boilerplate code significantly reduced the time needed to set up the project structure.
- **Learning new APIs** — The AI introduced me to the Intersection Observer API, which I hadn't used before.
- **Code quality** — Suggestions included best practices like `loading="lazy"` on images, `aria` attributes for accessibility, and CSS custom properties for maintainability.

### Challenges
- **Over-reliance risk** — It was tempting to accept AI output without fully understanding it; I had to slow down and read through each suggestion.
- **Context limitations** — The AI sometimes generated code that didn't match my exact colour palette or design vision, requiring manual adjustments.
- **Debugging AI output** — Occasionally the generated CSS had specificity issues or the JavaScript had minor logic errors that needed manual fixing.

---

## Learning Outcomes

1. **CSS Custom Properties** — Learned how to build a complete theming system using CSS variables, enabling a one-line theme switch.
2. **Intersection Observer API** — Understood how to trigger animations when elements enter the viewport, replacing older scroll-event-based approaches.
3. **Responsive design patterns** — Gained practical experience with CSS Grid and Flexbox for building layouts that adapt across breakpoints.
4. **Accessibility** — Learned the importance of `aria` attributes for interactive elements like the hamburger menu and theme toggle.
5. **Workflow improvement** — Discovered how to use AI as a "pair programmer" — asking it to generate drafts, then reviewing, modifying, and testing the output rather than copying it verbatim.

---

## Responsible Use & Modifications

All AI-generated code was treated as a **starting point**, not a final product. The following steps were taken to ensure academic integrity:

1. **Review** — Every suggestion was read line-by-line to understand what it does and why.
2. **Modification** — I customised the colour palette, layout structure, content, and animations to suit my personal portfolio vision. For example, the default AI theme used purple/blue tones, which I replaced with a dark teal-green palette (`#040D12`, `#183D3D`, `#5C8374`, `#93B1A6`).
3. **Testing** — All features were manually tested across different screen sizes and browsers to verify correctness.
4. **Documentation** — This report transparently documents every way AI was used in the project.

> I understand that AI tools are assistants, not replacements for learning. I ensured that I can explain every part of my code and the decisions behind it.
