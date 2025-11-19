# Form Input Components

Form inputs are interactive elements that allow users to enter and edit data.

## Text Input

### Structure

```html
<div class="form-field">
  <label for="email" class="form-label">
    Email Address
    <span class="required-indicator" aria-label="required">*</span>
  </label>
  <input
    type="email"
    id="email"
    name="email"
    class="form-input"
    placeholder="you@example.com"
    required
    aria-required="true"
    aria-describedby="email-help email-error"
  />
  <p id="email-help" class="form-help">
    We'll never share your email with anyone else.
  </p>
  <p id="email-error" class="form-error" role="alert" aria-live="polite">
    <!-- Error message appears here -->
  </p>
</div>
```css

### Sizes

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| Small | 32px | 8px 12px | sm (0.875rem) |
| Medium | 40px | 10px 14px | base (1rem) |
| Large | 48px | 12px 16px | lg (1.125rem) |

### States

#### Default
```css
.form-input {
  width: 100%;
  padding: var(--spacing-2-5) var(--spacing-3-5);
  font-size: var(--font-size-base);
  font-family: var(--font-family-sans);
  color: var(--color-neutral-900);
  background-color: var(--color-neutral-0);
  border: 1px solid var(--color-neutral-300);
  border-radius: var(--radius-md);
  transition: all var(--duration-base) var(--easing-out);
}
```css

#### Focus
```css
.form-input:focus {
  outline: none;
  border-color: var(--color-primary-600);
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
}
```css

#### Error
```css
.form-input.is-invalid,
.form-input:invalid {
  border-color: var(--color-error-500);
}

.form-input.is-invalid:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
```css

#### Success
```css
.form-input.is-valid {
  border-color: var(--color-success-500);
}
```css

#### Disabled
```css
.form-input:disabled {
  background-color: var(--color-neutral-100);
  color: var(--color-neutral-500);
  cursor: not-allowed;
  opacity: 0.6;
}
```css

## Textarea

```html
<div class="form-field">
  <label for="message" class="form-label">Message</label>
  <textarea
    id="message"
    name="message"
    class="form-textarea"
    rows="4"
    placeholder="Enter your message..."
    aria-describedby="message-help"
  ></textarea>
  <p id="message-help" class="form-help">
    Maximum 500 characters
  </p>
</div>
```html

## Select Dropdown

```html
<div class="form-field">
  <label for="country" class="form-label">Country</label>
  <select
    id="country"
    name="country"
    class="form-select"
    aria-describedby="country-help"
  >
    <option value="">Select a country</option>
    <option value="br">Brazil</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
  </select>
  <p id="country-help" class="form-help">
    Choose your country of residence
  </p>
</div>
```html

## Checkbox

```html
<div class="form-checkbox">
  <input
    type="checkbox"
    id="terms"
    name="terms"
    class="form-checkbox__input"
    required
    aria-required="true"
    aria-describedby="terms-help"
  />
  <label for="terms" class="form-checkbox__label">
    I agree to the terms and conditions
  </label>
  <p id="terms-help" class="form-help">
    Please read our terms carefully
  </p>
</div>
```html

### Checkbox Group

```html
<fieldset class="form-fieldset">
  <legend class="form-legend">Select your interests</legend>

  <div class="form-checkbox">
    <input type="checkbox" id="tech" name="interests" value="tech" class="form-checkbox__input" />
    <label for="tech" class="form-checkbox__label">Technology</label>
  </div>

  <div class="form-checkbox">
    <input type="checkbox" id="design" name="interests" value="design" class="form-checkbox__input" />
    <label for="design" class="form-checkbox__label">Design</label>
  </div>

  <div class="form-checkbox">
    <input type="checkbox" id="business" name="interests" value="business" class="form-checkbox__input" />
    <label for="business" class="form-checkbox__label">Business</label>
  </div>
</fieldset>
```html

## Radio Buttons

```html
<fieldset class="form-fieldset">
  <legend class="form-legend">
    Subscription Plan
    <span class="required-indicator" aria-label="required">*</span>
  </legend>

  <div class="form-radio">
    <input
      type="radio"
      id="plan-free"
      name="plan"
      value="free"
      class="form-radio__input"
      required
      aria-required="true"
    />
    <label for="plan-free" class="form-radio__label">
      <span class="form-radio__title">Free</span>
      <span class="form-radio__description">Basic features</span>
    </label>
  </div>

  <div class="form-radio">
    <input
      type="radio"
      id="plan-pro"
      name="plan"
      value="pro"
      class="form-radio__input"
    />
    <label for="plan-pro" class="form-radio__label">
      <span class="form-radio__title">Pro</span>
      <span class="form-radio__description">Advanced features</span>
    </label>
  </div>
</fieldset>
```html

## Accessibility Requirements

### WCAG 2.1 Level AA Compliance

#### 1.3.1 Info and Relationships
- ✅ Use `<label>` elements properly associated with inputs
- ✅ Use `<fieldset>` and `<legend>` for grouped inputs
- ✅ Semantic HTML structure

#### 1.3.5 Identify Input Purpose
- ✅ Use `autocomplete` attribute for common fields
- ✅ Use appropriate input `type` attributes

#### 1.4.3 Contrast (Minimum)
- ✅ Input text: 4.5:1 contrast ratio
- ✅ Label text: 4.5:1 contrast ratio
- ✅ Placeholder text: 4.5:1 contrast ratio (don't rely on placeholders alone)

#### 2.1.1 Keyboard
- ✅ All form controls keyboard accessible
- ✅ Tab order follows visual order
- ✅ No keyboard traps

#### 2.4.6 Headings and Labels
- ✅ Descriptive labels for all form controls
- ✅ Labels clearly identify purpose

#### 2.5.3 Label in Name
- ✅ Visible label text matches accessible name

#### 3.2.2 On Input
- ✅ No automatic context changes on input
- ✅ Changes occur on explicit user action (button click)

#### 3.3.1 Error Identification
- ✅ Errors identified in text
- ✅ Error messages use `role="alert"` or `aria-live`
- ✅ Specific guidance provided

#### 3.3.2 Labels or Instructions
- ✅ Clear labels provided
- ✅ Instructions given when needed
- ✅ Required fields indicated

#### 3.3.3 Error Suggestion
- ✅ Suggestions provided when errors can be detected
- ✅ Specific, actionable correction guidance

#### 3.3.4 Error Prevention (Legal, Financial, Data)
- ✅ Confirmation step for critical actions
- ✅ Review before submission
- ✅ Ability to reverse submissions when possible

#### 4.1.2 Name, Role, Value
- ✅ Proper ARIA attributes
- ✅ State changes communicated to AT
- ✅ Error states announced

### Required ARIA Patterns

```html
<!-- Required field -->
<input
  required
  aria-required="true"
/>

<!-- Invalid field -->
<input
  aria-invalid="true"
  aria-describedby="field-error"
/>

<!-- Field with help text -->
<input
  aria-describedby="field-help"
/>

<!-- Field with multiple descriptions -->
<input
  aria-describedby="field-help field-error"
/>
```html

## Autocomplete Attributes

Use appropriate autocomplete values for better UX and accessibility:

```html
<!-- Name fields -->
<input type="text" autocomplete="name" />
<input type="text" autocomplete="given-name" />
<input type="text" autocomplete="family-name" />

<!-- Email -->
<input type="email" autocomplete="email" />

<!-- Phone -->
<input type="tel" autocomplete="tel" />

<!-- Address -->
<input type="text" autocomplete="street-address" />
<input type="text" autocomplete="address-line1" />
<input type="text" autocomplete="address-line2" />
<input type="text" autocomplete="postal-code" />
<input type="text" autocomplete="country" />

<!-- Authentication -->
<input type="text" autocomplete="username" />
<input type="password" autocomplete="current-password" />
<input type="password" autocomplete="new-password" />
```html

## Validation Patterns

### Client-Side Validation

```html
<!-- HTML5 validation -->
<input
  type="email"
  required
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  title="Please enter a valid email address"
/>

<!-- Custom validation with ARIA -->
<input
  type="text"
  id="username"
  aria-invalid="false"
  aria-describedby="username-error"
/>
<p id="username-error" role="alert" aria-live="polite">
  <!-- Error message injected by JavaScript -->
</p>
```html

### Error Message Best Practices

```html
<!-- ✅ Good: Specific error message -->
<p class="form-error" role="alert">
  Email address must include an @ symbol
</p>

<!-- ❌ Bad: Vague error message -->
<p class="form-error">
  Invalid input
</p>

<!-- ✅ Good: Actionable guidance -->
<p class="form-error" role="alert">
  Password must be at least 8 characters and include a number
</p>
```css

## Responsive Behavior

```css
/* Mobile: Full width inputs */
@media (max-width: 640px) {
  .form-input,
  .form-textarea,
  .form-select {
    width: 100%;
  }

  /* Prevent zoom on iOS */
  .form-input {
    font-size: 16px;
  }
}

/* Desktop: Constrained width for better readability */
@media (min-width: 768px) {
  .form-input {
    max-width: 400px;
  }

  .form-textarea {
    max-width: 600px;
  }
}
```markdown

## Best Practices

### Do ✅
- Always use `<label>` elements
- Associate labels with inputs using `for` and `id`
- Use appropriate input types (email, tel, url, etc.)
- Provide help text for complex fields
- Indicate required fields clearly
- Show errors inline near the field
- Maintain focus on error fields
- Use autocomplete attributes
- Test with keyboard only
- Test with screen readers

### Don't ❌
- Use placeholder as label
- Rely on color alone for validation
- Remove focus indicators
- Use custom checkboxes/radios without proper ARIA
- Auto-advance fields
- Disable paste in password fields
- Use CAPTCHA without alternatives
- Make forms too long
- Require perfect formatting (e.g., phone numbers)

## Testing Checklist

- [ ] All inputs have associated labels
- [ ] Tab order is logical
- [ ] Focus indicators are clearly visible
- [ ] Error messages are announced to screen readers
- [ ] Required fields are indicated and announced
- [ ] Form can be completed with keyboard only
- [ ] Error states have sufficient color contrast
- [ ] Help text is programmatically associated
- [ ] Autocomplete works correctly
- [ ] Form doesn't auto-submit on input
- [ ] Works with browser zoom up to 200%
- [ ] Touch targets are at least 44x44px
