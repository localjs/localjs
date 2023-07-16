# LocalJS

LocalJS is a lightweight JavaScript library for easy localization of HTML elements. It allows you to replace specific words or phrases with translations based on the selected language.

## Features

- Simple and intuitive API for HTML localization
- Dynamic replacement of words or phrases with translations
- Supports multiple languages and customizable translations
- Lightweight and easy to integrate with existing projects

## Installation

You can install LocalJS using npm. Run the following command in your project directory:

```bash
npm i @localjs/localjs
```
Or Use CDN

```
https://cdn.jsdelivr.net/npm/@localjs/localjs@latest/localjs.js
```
## Usage

### Initialization

To start using LocalJS, follow these steps:

Include the LocalJS script in your HTML file:

```html
<script src="node_modules/@localjs/localjs/dist/localjs.js"></script>
```

1. Add the `translate` class to the HTML elements you want to localize. For example:

   ```html
   <h1 class="translate">Sloka of the Day</h1>
   <p class="translate">Today's sloka is a beautiful verse.</p>
   ```

1. Initialize the library with the desired translations and language selector. For example:

   ```html
   <script>
     var translations = {
       "Sloka of the Day": {
         en: "Sloka of the Day",
         hi: "आज का श्लोक",
         te: "నేటి శ్లోకం",
       },
       "Today's sloka is a beautiful verse": {
         en: "Today's sloka is a beautiful verse",
         hi: "आज का श्लोक एक सुंदर श्लोक है।",
         te: "నేటి శ్లోకం ఒక అందమైన శ్లోకం.",
       },
       "Select Language": {
         en: "Select Language",
         hi: "भाषा चुनें",
         te: "భాషను ఎంచుకోండి",
       },
     };

     localjs.init("en", translations);
   </script>
   ```

## Functions

The **LocalJS** library provides the following methods:

**`init(language, translations)`**
Initialize the library with the language and translations.

- `language` (string): language id

### Supported Languages

> You can add any languages you want to. But make sure you use unique code for each lanh=guage

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

## Demo
```html
<!DOCTYPE html>
<html>
<head>
  <title>LocalJS Example</title>
  <script src="https://cdn.jsdelivr.net/npm/@localjs/localjs@latest/localjs.js"></script>
</head>
<body>
  <h1 class="translate">Sloka of the Day</h1>
  <p class="translate">Today's sloka is a beautiful verse.</p>

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
        "hi": "भाषा चुनें",
        "te": "భాషను ఎంచుకోండి"
      }
    };

    localjs.init("te", translations);
  </script>
</body>
</html>
```
