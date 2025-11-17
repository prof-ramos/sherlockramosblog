# Accessibility Audit Framework

A comprehensive framework for conducting accessibility audits on web projects.

## Audit Process Overview

```
1. Planning → 2. Automated Testing → 3. Manual Testing → 4. User Testing → 5. Reporting → 6. Remediation
```

## 1. Planning Phase

### Define Scope
- [ ] Identify pages/features to audit
- [ ] Determine conformance level target (A, AA, AAA)
- [ ] Identify critical user journeys
- [ ] Set timeline and milestones

### Assemble Team
- [ ] Accessibility specialist
- [ ] Developers
- [ ] Designers
- [ ] QA testers
- [ ] Content creators
- [ ] Users with disabilities (for testing)

### Gather Resources
- [ ] Testing tools and licenses
- [ ] Screen readers (NVDA, JAWS, VoiceOver)
- [ ] Assistive technologies
- [ ] Various devices (desktop, mobile, tablet)
- [ ] Different browsers

## 2. Automated Testing

### Tools Setup

#### Browser Extensions
```
- WAVE (WebAIM)
- axe DevTools
- Lighthouse
- IBM Equal Access
- ANDI (Accessible Name & Description Inspector)
```

#### Command Line Tools
```bash
# Pa11y
npm install -g pa11y
pa11y https://example.com

# axe-core CLI
npm install -g @axe-core/cli
axe https://example.com

# Lighthouse CI
npm install -g @lhci/cli
lhci autorun
```

#### Continuous Integration
```yaml
# .github/workflows/accessibility.yml
name: Accessibility Tests

on: [push, pull_request]

jobs:
  a11y:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Pa11y
        run: |
          npm install -g pa11y
          pa11y-ci
```

### Automated Tests Checklist

- [ ] HTML validation (W3C Validator)
- [ ] Color contrast analysis
- [ ] ARIA usage validation
- [ ] Heading structure
- [ ] Form label association
- [ ] Alt text presence
- [ ] Language declaration
- [ ] Page titles
- [ ] Landmark regions

### Automated Testing Limitations

**What automated tools CAN'T catch**:
- Quality of alt text (only presence)
- Logical heading order
- Keyboard navigation flow
- Screen reader experience
- Context and meaning
- User experience issues

## 3. Manual Testing

### Keyboard Navigation Testing

#### Test Procedure
1. Disconnect mouse/disable trackpad
2. Use Tab key to navigate forward
3. Use Shift+Tab to navigate backward
4. Use Enter/Space to activate controls
5. Use arrow keys for complex widgets

#### Checklist
- [ ] All interactive elements reachable
- [ ] Tab order is logical
- [ ] Focus indicators clearly visible
- [ ] No keyboard traps
- [ ] Dropdown menus keyboard accessible
- [ ] Modal dialogs can be closed with keyboard
- [ ] Skip navigation link works
- [ ] Custom widgets (tabs, accordions) work with arrows

#### Test Each Page
```
Homepage: _________ Pass/Fail
Blog List: _________ Pass/Fail
Blog Post: _________ Pass/Fail
Contact Form: _______ Pass/Fail
Search: ____________ Pass/Fail
```

### Screen Reader Testing

#### Screen Readers to Test
- **Windows**: NVDA (free), JAWS (paid)
- **macOS**: VoiceOver (built-in)
- **iOS**: VoiceOver (built-in)
- **Android**: TalkBack (built-in)

#### NVDA Quick Start
```
Installation: Download from nvaccess.org
Start: Ctrl + Alt + N
Stop: Insert + Q
Read next: Down arrow
Read previous: Up arrow
Read all: Insert + Down arrow
Elements list: Insert + F7
```

#### Testing Checklist
- [ ] Page title announced
- [ ] Headings navigable (H key in NVDA/JAWS)
- [ ] Landmarks navigable (D key)
- [ ] Links descriptive and navigable (Tab or L key)
- [ ] Images have appropriate alt text
- [ ] Forms labels read correctly
- [ ] Error messages announced
- [ ] Dynamic content updates announced
- [ ] Tables navigable with headers read
- [ ] ARIA widgets work correctly

#### Critical User Journeys
Test with screen reader:
1. **Navigation**: Can user navigate the site?
2. **Content**: Can user consume blog posts?
3. **Forms**: Can user submit contact form?
4. **Search**: Can user search and find content?

### Visual Testing

#### Color Contrast
```
Tool: WebAIM Contrast Checker
URL: https://webaim.org/resources/contrastchecker/

Test:
- Body text on background
- Headings on background
- Link text on background
- Button text on button color
- Form labels and inputs
- Error messages
- Focus indicators
```

#### Color Blindness Simulation
```
Tools:
- Chromatic Vision Simulator (browser extension)
- Stark (Figma plugin)
- ColorOracle (desktop app)

Test for:
- Deuteranopia (red-green)
- Protanopia (red-green)
- Tritanopia (blue-yellow)
```

#### Zoom and Reflow Testing
```
Test at:
- 100% (baseline)
- 200% (WCAG AA requirement)
- 400% (WCAG AAA, 320px width)

Verify:
- Content readable
- No horizontal scrolling
- Functionality preserved
- Layout adapts appropriately
```

### Touch Target Testing

#### Minimum Sizes
- **WCAG AAA**: 44x44 CSS pixels
- **WCAG AA (2.5.8 in 2.2)**: 24x24 CSS pixels
- **Best Practice**: 48x48 CSS pixels

#### Test Procedure
```javascript
// Bookmarklet to highlight small touch targets
javascript:(function(){
  document.querySelectorAll('button, a, input, select, textarea').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.width < 44 || rect.height < 44) {
      el.style.outline = '3px solid red';
    }
  });
})();
```

### Form Testing

#### Test Each Form Field
- [ ] Label properly associated
- [ ] Required fields indicated
- [ ] Validation messages clear and helpful
- [ ] Errors announced to screen readers
- [ ] Autocomplete attributes present
- [ ] Field purpose clear from label
- [ ] Logical tab order
- [ ] Submit button keyboard accessible

#### Test Error Handling
1. Submit form with errors
2. Verify errors identified clearly
3. Check error announcement with screen reader
4. Verify focus moves to first error
5. Confirm suggestions provided
6. Test error correction

## 4. User Testing

### Recruit Participants
- Users with various disabilities
- Different assistive technology users
- Various skill levels
- Diverse demographics

### Testing Protocol

#### Pre-Session
- [ ] Consent form signed
- [ ] Compensation arranged
- [ ] Recording permission obtained
- [ ] Equipment tested

#### During Session
- [ ] Observe without interfering
- [ ] Take detailed notes
- [ ] Record session (with permission)
- [ ] Ask open-ended questions
- [ ] Note pain points and successes

#### Post-Session
- [ ] Debrief with participant
- [ ] Gather additional feedback
- [ ] Provide compensation
- [ ] Thank participant

### Test Scenarios

#### Scenario 1: Find Information
```
Task: Find a blog post about [topic]
Success criteria:
- User can navigate to blog
- User can search or browse
- User can find relevant post
- User can read post content
```

#### Scenario 2: Contact Form
```
Task: Submit contact form
Success criteria:
- User can locate form
- User understands all fields
- User can complete form
- User receives confirmation
```

## 5. Reporting

### Report Structure

#### Executive Summary
- Overall conformance level
- Critical issues count
- Priority recommendations
- Timeline for remediation

#### Detailed Findings

```markdown
## Issue #1: Missing Alt Text on Images

**Severity**: High
**WCAG Criterion**: 1.1.1 (Level A)
**Affected Pages**: Blog posts (15 instances)

**Description**:
Images throughout blog posts are missing alternative text, making content inaccessible to screen reader users.

**Impact**:
Users who rely on screen readers cannot access the information conveyed by images.

**Remediation**:
Add descriptive alt text to all images:
```html
<!-- Before -->
<img src="chart.png">

<!-- After -->
<img src="chart.png" alt="Bar chart showing 50% increase in sales from Q1 to Q2">
```

**Priority**: P0 - Fix immediately
**Estimated Effort**: 4 hours
```

#### Priority Levels
- **P0**: Blocker - Prevents access to core functionality
- **P1**: Critical - Significantly impacts user experience
- **P2**: Important - Affects some users or features
- **P3**: Nice to have - Minor improvements

### Metrics

#### Conformance Score
```
WCAG 2.1 Level AA Conformance:

A: 47/50 criteria met (94%)
AA: 38/42 criteria met (90%)

Overall: 85/92 criteria met (92%)
```

#### Issues by Severity
```
Critical (P0): 3 issues
High (P1): 8 issues
Medium (P2): 15 issues
Low (P3): 22 issues
Total: 48 issues
```

#### Issues by Category
```
Perceivable: 12 issues
Operable: 18 issues
Understandable: 10 issues
Robust: 8 issues
```

## 6. Remediation

### Prioritization Matrix

| Severity | Impact | Effort | Priority |
|----------|--------|--------|----------|
| Critical | High | Low | P0 - Do now |
| Critical | High | High | P0 - Do now |
| High | High | Low | P1 - This sprint |
| High | High | High | P1 - This sprint |
| Medium | Medium | Low | P2 - Next sprint |
| Low | Low | Any | P3 - Backlog |

### Remediation Plan

```markdown
## Sprint 1 (Week 1-2)
- [ ] Add alt text to all images (P0)
- [ ] Fix keyboard navigation issues (P0)
- [ ] Improve focus indicators (P0)

## Sprint 2 (Week 3-4)
- [ ] Add ARIA labels to icon buttons (P1)
- [ ] Fix form validation errors (P1)
- [ ] Improve heading structure (P1)

## Sprint 3 (Week 5-6)
- [ ] Add skip navigation link (P2)
- [ ] Improve color contrast (P2)
- [ ] Add autocomplete attributes (P2)

## Backlog
- [ ] AAA color contrast (P3)
- [ ] Extended descriptions for complex images (P3)
```

### Regression Testing

After remediation:
1. Re-run automated tests
2. Verify fixes manually
3. Test with assistive technologies
4. Confirm no new issues introduced
5. Update documentation

## Best Practices

### Do ✅
- Test early and often
- Involve users with disabilities
- Fix issues as they're found
- Document everything
- Educate team members
- Build accessibility into process
- Use both automated and manual testing
- Test with real assistive technologies

### Don't ❌
- Rely solely on automated tools
- Wait until end of project to test
- Ignore user feedback
- Fix without understanding
- Test with only one screen reader
- Skip keyboard testing
- Forget about mobile accessibility
- Treat accessibility as one-time task

## Resources

### Testing Tools
- **WAVE**: https://wave.webaim.org/
- **axe DevTools**: https://www.deque.com/axe/devtools/
- **Pa11y**: https://pa11y.org/
- **Lighthouse**: https://developers.google.com/web/tools/lighthouse

### Screen Readers
- **NVDA**: https://www.nvaccess.org/
- **JAWS**: https://www.freedomscientific.com/products/software/jaws/
- **VoiceOver**: Built into macOS/iOS

### Learning Resources
- **WebAIM**: https://webaim.org/
- **A11y Project**: https://www.a11yproject.com/
- **Deque University**: https://dequeuniversity.com/
- **WCAG 2.1**: https://www.w3.org/WAI/WCAG21/quickref/

## Appendix

### Common Issues and Fixes

#### Missing Alt Text
```html
<!-- ❌ Bad -->
<img src="logo.png">

<!-- ✅ Good -->
<img src="logo.png" alt="Company Logo">

<!-- ✅ Decorative -->
<img src="divider.png" alt="">
```

#### Poor Color Contrast
```css
/* ❌ Bad - 3:1 ratio */
color: #767676;
background: #ffffff;

/* ✅ Good - 4.6:1 ratio */
color: #595959;
background: #ffffff;
```

#### Missing Form Labels
```html
<!-- ❌ Bad -->
<input type="text" placeholder="Email">

<!-- ✅ Good -->
<label for="email">Email</label>
<input type="email" id="email" name="email">
```

#### No Keyboard Access
```html
<!-- ❌ Bad -->
<div onclick="submit()">Submit</div>

<!-- ✅ Good -->
<button type="submit">Submit</button>
```
