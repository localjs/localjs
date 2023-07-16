# LocalJS

LocalJS is a lightweight JavaScript library for easy localization of HTML elements. It allows you to replace specific words or phrases with translations based on the selected language.

## Features

- Simple and intuitive Library for HTML localization
- Dynamic replacement of words or phrases with translations
- Supports multiple languages and customizable translations
- Lightweight and easy to integrate with existing projects

## Installation

You can install LocalJS using npm. Run the following command in your project directory:

```bash
npm i @localjs/localjs
```
Alternatively, you can use the following CDN link to include LocalJS directly in your HTML file:


```html
<script src="https://cdn.jsdelivr.net/npm/@localjs/localjs@stable/localjs.js"></script>
```
## Usage

### Initialization

To start using LocalJS, follow these steps:

Include the LocalJS script in your HTML file:

```html
<script src="node_modules/@localjs/localjs/dist/localjs.js"></script>
```

1. Add the `translate` attribute to the HTML elements you want to localize.

    ```html
      <h1 translate>Sloka of the Day</h1>
      <p translate>Today's sloka is a beautiful verse.</p>
    ```

1. Initialize the library with the desired translations and language selector. For example:

    ```html
    <script>
      var translations = {
        "Sloka of the Day": {
          "en": "Sloka of the Day",
          "hi": "आज का श्लोक",
          "te": "నేటి శ్లోకం"
        },
        "Today's sloka is a beautiful verse": {
          "en": "Today's sloka is a beautiful verse",
          "hi": "आज का श्लोक एक सुंदर श्लोक है।",
          "te": "నేటి శ్లోకం ఒక అందమైన శ్లోకం."
        }
      };

      localjs.init("en", translations);
    </script>
    ```
## Functions

The **LocalJS** library provides the following methods:

### **`init(language, translations)`**
Initialize the library with the language and translations.

- `language` (string): language id

### **`update(language, translations)`**
Update the localization with a new language and translations.

- `language` (string): language id

## Supported Languages

LocalJS supports multiple languages. You can add any language translations you want by providing the language code and corresponding translations.


#### Example

| Language   | Code |
| ---------- | ---- |
| English    | en   |
| Telugu     | te   |
| Hindi      | hi   |
| Tamil      | ta   |
| Kannada    | kn   |
| Malayalam  | ml   |
| Bengali    | bn   |
| Gujarati   | gu   |
| Marathi    | mr   |
| Punjabi    | pa   |
| Urdu       | ur   |
| Spanish    | es   |
| French     | fr   |
| German     | de   |
| Italian    | it   |
| Portuguese | pt   |
| Dutch      | nl   |
| Russian    | ru   |
| Japanese   | ja   |
| Korean     | ko   |

**`translations`** (object): An object containing the translations for the words or phrases you want to replace.

#### Example

Here's an example implementation of LocalJS:

```json
{
  "Sloka of the Day": {
    "en": "Sloka of the Day",
    "hi": "आज का श्लोक",
    "te": "నేటి శ్లోకం"
  },
  "Today's sloka is a beautiful verse": {
    "en": "Today's sloka is a beautiful verse",
    "hi": "आज का श्लोक एक सुंदर श्लोक है।",
    "te": "నేటి శ్లోకం ఒక అందమైన శ్లోకం."
  },
  "Select Language": {
    "en": "Select Language",
    "hi": "भाषा चुनें",
    "te": "భాషను ఎంచుకోండి"
  }
}
```

## Demos

### Demo 1

```html

<!DOCTYPE html>
<html>
<head>
  <title>LocalJS Example</title>
  <script src="path/to/localjs.js"></script>
</head>
<body>
  <h1 translate>Sloka of the Day</h1>
  <p translate>Today's sloka is a beautiful verse.</p>

  <script>
    var translations = {
      "Sloka of the Day": {
        "en": "Sloka of the Day",
        "hi": "आज का श्लोक",
        "te": "నేటి శ్లోకం"
      },
      "Today's sloka is a beautiful verse": {
        "en": "Today's sloka is a beautiful verse",
        "hi": "आज का श्लोक एक सुंदर श्लोक है।",
        "te": "నేటి శ్లోకం ఒక అందమైన శ్లోకం."
      }
    };

    localjs.init("en", translations);
  </script>
</body>
</html>
```

### Demo 2 (with language select dropdown)

```html

<!DOCTYPE html>
<html>
<head>
  <title>Localization Example</title>
  <meta charset="UTF-8"> <!-- Add this line to specify the character encoding -->
</head>
<body>
  <h1 translate>Sloka of the Day</h1>
  <p translate>Today's sloka is a beautiful verse.</p>

  <h4 translate>Sloka of the Day</h4>

  <h2>Hello</h2>
  
  <div>
    <label for="languageSelector" translate>Select Language:</label>
    <select id="languageSelector">
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="te">Telugu</option>
    </select>
  </div>

  <script src="path/to/localjs.js"></script>

  <script>
    var translations = {
      "Sloka of the Day": {
        "en": "Sloka of the Day",
        "hi": "आज का श्लोक",
        "te": "నేటి శ్లోకం"
      },
      "Today's sloka is a beautiful verse": {
        "en": "Today's sloka is a beautiful verse",
        "hi": "आज का श्लोक एक सुंदर श्लोक है।",
        "te": "నేటి శ్లోకం ఒక అందమైన శ్లోకం."
      },
      "Select Language": {
        "en": "Select Language",
        "hi": "भाषा चुनिए",
        "te": "భాషను ఎంచుకోండి"
      }
    };

    var languageSelector = document.getElementById("languageSelector");
    var initialLanguage = languageSelector.value;

    localjs.init(initialLanguage, translations);

    languageSelector.addEventListener("change", function() {
      var selectedLanguage = languageSelector.value;
      localjs.update(selectedLanguage, translations);
    });
  </script>
</body>
</html>
```