Contributing to the Quad Design System
We welcome contributors across all major front-end frameworks (React, Vue, Svelte, etc.)! We maintain a single source of truth for design, and your task is to translate those rules into code.

1. Legal Requirements (The CLA)
All code contributions require a signed Contributor License Agreement (CLA).
By submitting a Pull Request, you assert that you have read and agreed to the terms of the CLA. This ensures that the Quad Design System can freely use your contribution and maintain the project's intellectual property.

2. Design System Authority & Rules
The Figma files are the definitive source of truth for all visual rules, spacing, and component behavior.
A. Design Tokens (Colors, Spacing, Typography)
Responsibility: Contributors are responsible for maintaining the integrity of the core CSS Variables (Tokens).
Guideline: All colors, spacing, and sizing must reference the semantic tokens (e.g., --color-product-primary). Do not use hardcoded hex values.
Theming: All Light/Dark Mode color switching must be implemented by updating the CSS variables within the appropriate media queries.
B. Component Implementation (The Code)
Visual Fidelity: Your component implementation (in whatever framework you are using) must visually and functionally match the Figma Component Variants exactly.
Core Requirements:
Responsiveness: Must implement the required size changes for all defined Viewports (Mobile, Tablet, Desktop, TV) using CSS Media Queries.
States: Must implement all interactive states (Hovered, Active, Disabled) using the appropriate CSS pseudo-classes and the provided design tokens (e.g., --color-product-primary-hover).

3. Getting Started
Fork the repository.
Clone your fork locally.
Ensure your new component passes all visual checks in Storybook/your documentation environment by comparing it directly to the Figma specification.
Submit a Pull Request.
