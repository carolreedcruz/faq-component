# Atlantica – FAQ Page Redesign

This project is a complete redesign of Atlantica’s FAQ page with a strong focus on improving user experience, accessibility, and visual clarity.

## Overview of Improvements

### Accessibility Enhancements

- Semantic HTML is used throughout, including `<section>` tags and `role="region"` to better support screen readers.
- Toggle buttons for FAQ categories and questions use `aria-expanded`, `aria-controls`, and proper heading structure.
- Keyboard navigation is fully supported with logical tab order and clear focus indicators.
- An attempt was made to improve screen reader recognition of decorative and informative images using `alt` text and `role="img"`. However, due to limitations with Windows Narrator, not all images were reliably announced despite correct markup.

### Improved Navigation Structure

- The original site used links in a sidebar to navigate FAQ categories. This was replaced with clearly labeled, equally sized buttons for each category.
- These buttons are easier to interact with, especially on mobile devices, and provide a cleaner, more structured overview.
- On click, the selected section scrolls smoothly into view with intentional spacing above to avoid overlap and confusion.

### Better Interaction Design

- Each FAQ section expands to show related questions. Individual answers can be shown or hidden using toggle buttons.
- When a section is opened, users are guided directly to the content for easier navigation.
- All buttons have visible states when hovered or focused, which helps all users—including those navigating with keyboard or screen readers—understand what is selected.

### Visual and Typographic Improvements

- The hero image includes a radial gradient overlay to ensure that the text remains readable regardless of background contrast.
- The site header and footer were replaced with actual images from Atlantica’s current website for a more branded and realistic prototype.
- Typography has been customized:
  - **Inter** is used for headings and UI elements instead of *27 sans*, which is Atlantica’s original brand font (not freely available).
  - **Montserrat** is used for body text such as FAQ answers to enhance readability.

### Content Flexibility

- All FAQ content is stored in a JSON file, making it easy to scale or update.
- The answer field supports basic HTML formatting for:
  - Paragraph breaks
  - Hyperlinks
  - Bullet lists (with accessible list styling)

## Technical Stack

- **React** + **Vite** for fast development and modular structure.
- **CSS** (custom, no frameworks) for styling and responsive layout.
- **Netlify** for hosting the live version of the project online.

## Summary

This redesign delivers a more accessible, mobile-friendly, and user-centered FAQ experience. While full screen reader support for decorative images was not completely successful, best practices were followed. The layout, navigation, and typography are tailored for clarity and align better with Atlantica’s brand identity resulting in a FAQ page that is easier to navigate and more pleasant to use.
