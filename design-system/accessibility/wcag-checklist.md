# WCAG 2.1 Level AA Compliance Checklist

This checklist helps ensure your website meets Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.

## How to Use This Checklist

- ✅ Checkmark items that pass
- ❌ Mark items that fail
- ⚠️ Mark items that need review
- N/A for items that don't apply

## 1. Perceivable

Information and user interface components must be presentable to users in ways they can perceive.

### 1.1 Text Alternatives

#### 1.1.1 Non-text Content (Level A)
- [ ] All images have appropriate alt text
- [ ] Decorative images use `alt=""` or CSS backgrounds
- [ ] Complex images (charts, diagrams) have long descriptions
- [ ] Form inputs have associated labels
- [ ] Icon buttons have accessible names (aria-label or visible text)
- [ ] Audio/video has text alternatives

**Test Method**: Use screen reader, inspect HTML

### 1.2 Time-based Media

#### 1.2.1 Audio-only and Video-only (Level A)
- [ ] Audio-only content has text transcript
- [ ] Video-only content has audio description or transcript

#### 1.2.2 Captions (Prerecorded) (Level A)
- [ ] All prerecorded video with audio has captions

#### 1.2.3 Audio Description or Media Alternative (Level A)
- [ ] Video with audio has audio description or transcript

#### 1.2.4 Captions (Live) (Level AA)
- [ ] Live audio content has captions

#### 1.2.5 Audio Description (Level AA)
- [ ] All prerecorded video has audio description

**Test Method**: Review media content, check for captions/transcripts

### 1.3 Adaptable

#### 1.3.1 Info and Relationships (Level A)
- [ ] Semantic HTML used correctly (headings, lists, tables)
- [ ] Form labels properly associated with inputs
- [ ] Related form controls grouped with `<fieldset>` and `<legend>`
- [ ] Tables use proper markup (`<th>`, `scope`, `<caption>`)
- [ ] ARIA used correctly when HTML semantics insufficient

**Test Method**: Validate HTML, use screen reader, inspect code

#### 1.3.2 Meaningful Sequence (Level A)
- [ ] Reading order matches visual order
- [ ] Tab order is logical
- [ ] Content makes sense when CSS is disabled

**Test Method**: Disable CSS, use keyboard navigation

#### 1.3.3 Sensory Characteristics (Level A)
- [ ] Instructions don't rely solely on sensory characteristics (shape, size, position, sound)
- [ ] Example: Don't say "Click the round button" without additional context

**Test Method**: Review all instructional text

#### 1.3.4 Orientation (Level AA)
- [ ] Content works in both portrait and landscape
- [ ] No orientation restrictions unless essential

**Test Method**: Rotate device, test both orientations

#### 1.3.5 Identify Input Purpose (Level AA)
- [ ] Input fields use appropriate `autocomplete` attributes
- [ ] Common fields (name, email, phone) have proper autocomplete

**Test Method**: Inspect form inputs for autocomplete attributes

### 1.4 Distinguishable

#### 1.4.1 Use of Color (Level A)
- [ ] Color is not the only means of conveying information
- [ ] Links are distinguishable without relying on color alone
- [ ] Form validation errors include text, not just red borders

**Test Method**: Use grayscale mode, review with color blindness simulator

#### 1.4.2 Audio Control (Level A)
- [ ] Auto-playing audio can be paused, stopped, or volume controlled
- [ ] No audio plays automatically for more than 3 seconds

**Test Method**: Check for auto-playing media

#### 1.4.3 Contrast (Minimum) (Level AA)
- [ ] Normal text: 4.5:1 contrast ratio
- [ ] Large text (18pt+/14pt+ bold): 3:1 contrast ratio
- [ ] UI components: 3:1 contrast ratio
- [ ] Graphical objects: 3:1 contrast ratio

**Test Method**: Use contrast checker tool (WebAIM, Chrome DevTools)

#### 1.4.4 Resize Text (Level AA)
- [ ] Text can be resized up to 200% without loss of content/functionality
- [ ] No horizontal scrolling at 200% zoom (1280px width)

**Test Method**: Browser zoom to 200%

#### 1.4.5 Images of Text (Level AA)
- [ ] Text is used instead of images of text (except logos)
- [ ] Images of text only used when essential

**Test Method**: Review all images containing text

#### 1.4.10 Reflow (Level AA)
- [ ] Content reflows at 320px width (400% zoom)
- [ ] No horizontal scrolling required
- [ ] No information loss at 320px width

**Test Method**: Resize browser to 320px, use mobile view

#### 1.4.11 Non-text Contrast (Level AA)
- [ ] UI components have 3:1 contrast against adjacent colors
- [ ] Focus indicators have 3:1 contrast
- [ ] Graphical objects have 3:1 contrast

**Test Method**: Use contrast checker on UI elements

#### 1.4.12 Text Spacing (Level AA)
- [ ] Content adapts when users increase text spacing:
  - Line height: 1.5x font size
  - Paragraph spacing: 2x font size
  - Letter spacing: 0.12x font size
  - Word spacing: 0.16x font size

**Test Method**: Apply text spacing bookmarklet

#### 1.4.13 Content on Hover or Focus (Level AA)
- [ ] Hover/focus content can be dismissed (ESC key)
- [ ] Hover/focus content can be hovered over
- [ ] Hover/focus content remains visible until dismissed

**Test Method**: Test tooltips, dropdowns with keyboard and mouse

## 2. Operable

User interface components and navigation must be operable.

### 2.1 Keyboard Accessible

#### 2.1.1 Keyboard (Level A)
- [ ] All functionality available via keyboard
- [ ] No keyboard traps
- [ ] Custom controls are keyboard accessible

**Test Method**: Navigate entire site with keyboard only

#### 2.1.2 No Keyboard Trap (Level A)
- [ ] Focus can move away from all components
- [ ] Modal dialogs can be closed with keyboard
- [ ] No infinite loops in tab order

**Test Method**: Tab through all interactive elements

#### 2.1.4 Character Key Shortcuts (Level A)
- [ ] Single character shortcuts can be turned off, remapped, or only active on focus

**Test Method**: Test any keyboard shortcuts

### 2.2 Enough Time

#### 2.2.1 Timing Adjustable (Level A)
- [ ] Users can turn off, adjust, or extend time limits
- [ ] Warning given before time expires

**Test Method**: Check for session timeouts, timed content

#### 2.2.2 Pause, Stop, Hide (Level A)
- [ ] Auto-updating content can be paused, stopped, or hidden
- [ ] Carousels have pause button
- [ ] Animations can be stopped

**Test Method**: Check for auto-playing content, carousels

### 2.3 Seizures and Physical Reactions

#### 2.3.1 Three Flashes or Below Threshold (Level A)
- [ ] No content flashes more than 3 times per second
- [ ] Flashing content is below general flash and red flash thresholds

**Test Method**: Review all animations for flashing

### 2.4 Navigable

#### 2.4.1 Bypass Blocks (Level A)
- [ ] Skip navigation link provided
- [ ] Proper heading structure allows navigation
- [ ] Landmarks used (header, nav, main, footer)

**Test Method**: Tab to first element, test skip link

#### 2.4.2 Page Titled (Level A)
- [ ] All pages have descriptive, unique titles
- [ ] Title describes page topic or purpose

**Test Method**: Review `<title>` elements

#### 2.4.3 Focus Order (Level A)
- [ ] Tab order is logical and intuitive
- [ ] Focus order preserves meaning and operability

**Test Method**: Tab through page, verify order

#### 2.4.4 Link Purpose (In Context) (Level A)
- [ ] Link text describes destination
- [ ] Avoid "click here" or "read more" without context
- [ ] Links with same text go to same destination

**Test Method**: Review all link text

#### 2.4.5 Multiple Ways (Level AA)
- [ ] At least two ways to find pages (menu, search, sitemap)

**Test Method**: Verify multiple navigation methods exist

#### 2.4.6 Headings and Labels (Level AA)
- [ ] Headings are descriptive
- [ ] Labels are descriptive
- [ ] Headings and labels are unique where appropriate

**Test Method**: Review all headings and form labels

#### 2.4.7 Focus Visible (Level AA)
- [ ] Keyboard focus indicator is clearly visible
- [ ] Focus indicator has sufficient contrast (3:1)
- [ ] Focus indicator not removed with CSS

**Test Method**: Tab through page, verify focus indicators

### 2.5 Input Modalities

#### 2.5.1 Pointer Gestures (Level A)
- [ ] Multi-point or path-based gestures have single-pointer alternative

**Test Method**: Test drag-and-drop, pinch-to-zoom alternatives

#### 2.5.2 Pointer Cancellation (Level A)
- [ ] Click actions occur on up-event, not down-event
- [ ] Or ability to abort/undo action

**Test Method**: Test click behaviors

#### 2.5.3 Label in Name (Level A)
- [ ] Accessible name contains visible label text
- [ ] Visual label matches programmatic label

**Test Method**: Inspect form inputs and buttons

#### 2.5.4 Motion Actuation (Level A)
- [ ] Motion-triggered functions have UI alternative
- [ ] Motion can be disabled

**Test Method**: Check for shake-to-undo, tilt controls

## 3. Understandable

Information and user interface operation must be understandable.

### 3.1 Readable

#### 3.1.1 Language of Page (Level A)
- [ ] Page language set with `lang` attribute
- [ ] `<html lang="pt-br">` for Portuguese

**Test Method**: Inspect `<html>` tag

#### 3.1.2 Language of Parts (Level AA)
- [ ] Language changes marked with `lang` attribute
- [ ] Foreign phrases marked: `<span lang="en">Hello</span>`

**Test Method**: Review multilingual content

### 3.2 Predictable

#### 3.2.1 On Focus (Level A)
- [ ] Focusing an element doesn't trigger unexpected changes
- [ ] No automatic form submission on focus

**Test Method**: Tab through forms and interactive elements

#### 3.2.2 On Input (Level A)
- [ ] Changing form values doesn't automatically change context
- [ ] Submit button required for form submission

**Test Method**: Test form interactions

#### 3.2.3 Consistent Navigation (Level AA)
- [ ] Navigation is in same relative order across pages
- [ ] Consistent navigation patterns

**Test Method**: Compare navigation across multiple pages

#### 3.2.4 Consistent Identification (Level AA)
- [ ] Components with same functionality labeled consistently
- [ ] Icons mean the same thing across site

**Test Method**: Review repeated elements

### 3.3 Input Assistance

#### 3.3.1 Error Identification (Level A)
- [ ] Errors identified in text
- [ ] Error location indicated
- [ ] Specific guidance provided

**Test Method**: Submit invalid forms

#### 3.3.2 Labels or Instructions (Level A)
- [ ] Labels provided for all form inputs
- [ ] Instructions given when needed
- [ ] Required fields indicated

**Test Method**: Review all forms

#### 3.3.3 Error Suggestion (Level AA)
- [ ] Correction suggestions provided when possible
- [ ] Suggestions are specific and actionable

**Test Method**: Test form validation

#### 3.3.4 Error Prevention (Legal, Financial, Data) (Level AA)
- [ ] Reversible submissions
- [ ] Data checked and user can correct
- [ ] Confirmation page before final submission

**Test Method**: Test critical transactions

## 4. Robust

Content must be robust enough to be interpreted by various user agents.

### 4.1 Compatible

#### 4.1.1 Parsing (Level A) - Deprecated in WCAG 2.2
- [ ] HTML validates (no duplicate IDs, proper nesting)
- [ ] Elements have complete start/end tags

**Test Method**: HTML validator

#### 4.1.2 Name, Role, Value (Level A)
- [ ] All UI components have accessible name
- [ ] Role is programmatically determined
- [ ] States and properties communicated to AT
- [ ] Proper ARIA usage

**Test Method**: Use screen reader, inspect ARIA

#### 4.1.3 Status Messages (Level AA)
- [ ] Status messages use `role="status"` or `aria-live`
- [ ] Loading states announced
- [ ] Success/error messages announced
- [ ] Dynamic content changes announced

**Test Method**: Test with screen reader

## Testing Tools

### Automated Testing
- [ ] WAVE (WebAIM)
- [ ] axe DevTools
- [ ] Lighthouse (Chrome DevTools)
- [ ] Pa11y

### Manual Testing
- [ ] Keyboard navigation
- [ ] Screen reader (NVDA, JAWS, VoiceOver)
- [ ] Color contrast checker
- [ ] Browser zoom to 200%
- [ ] Mobile responsive testing

### Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

## Quick Reference

### Minimum Requirements for AA
1. Color contrast: 4.5:1 (text), 3:1 (UI components)
2. All functionality keyboard accessible
3. Focus indicators visible
4. Proper alt text on images
5. Form labels associated
6. Semantic HTML structure
7. No keyboard traps
8. Resize text to 200%
9. Reflow at 320px
10. Status messages announced

## Sign Off

**Auditor**: ___________________
**Date**: ___________________
**Conformance Level**: ___________________
**Issues Found**: ___________________
**Next Review Date**: ___________________
