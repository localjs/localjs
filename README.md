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
npm install @localjs/localjs
```

## Usage
### Initialization
To start using LocalJS, follow these steps:

Include the LocalJS script in your HTML file:

```html
<script src="node_modules/@localjs/localjs/dist/localjs.js"></script>
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
    },
    "Select Language": {
      "en": "Select Language",
      "hi": "भाषा चुनें",
      "te": "భాషను ఎంచుకోండి"
    }
  };

  localjs.init("#languageSelector", translations);
</script>
```