# sinhala-slugify

[![npm version](https://img.shields.io/npm/v/sinhala-slugify.svg)](https://www.npmjs.com/package/sinhala-slugify)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight, zero-dependency Node.js library for converting Sinhala Unicode text into SEO-friendly URL slugs. Built on a phonetic transliteration engine, it maps Sinhala sounds to their closest English equivalents — producing slugs that are both human-readable and search-engine optimized.

---

## Features

- **Phonetic accuracy** — Transliterates Sinhala sounds to English equivalents (e.g., `පුවත්` becomes `puwath`)
- **Complex character support** — Handles vowel modifiers (පිලි), conjunct characters (බැඳි අකුරු), and special clusters including යංශය and රාකෘත්‍යාංශය
- **SEO-ready output** — Strips special characters, normalizes whitespace, and joins words with hyphens
- **Zero dependencies** — No external packages required

---

## Installation

```bash
npm install sinhala-slugify
```

---

## Usage

```javascript
const { sinhalaSlugify } = require('sinhala-slugify');

// Basic usage
console.log(sinhalaSlugify("අලුත් පුවත්"));
// Output: aluth-puwath

// Complex conjunct characters
console.log(sinhalaSlugify("බුද්ධිමය දේපල"));
// Output: budhdhimaya-deepala

// Greeting with punctuation
console.log(sinhalaSlugify("සුබ අලුත් අවුරුද්දක් වේවා!"));
// Output: suba-aluth-awurudhdhak-weewaa
```

---

## Example Test Transliteration Reference

| Sinhala Input | Slug Output |
|---|---|
| ශ්‍රී ලංකා | shrii-lankaa |
| ව්‍යාපෘතිය | wyaapruthiya |
| ඉංජිනේරු | injineeru |
| ව්‍යවස්ථාව | wyawasthaawa |
| බුද්ධිමය | budhdhimaya |
| ප්‍රවෘත්ති | prawruththi |

---

## How It Works

The engine processes each character in the input string sequentially, applying three lookup tables:

- **Consonants** — Maps each Sinhala consonant to its phonetic Roman equivalent
- **Independent vowels** — Handles standalone vowel characters
- **Modifiers** — Handles vowel diacritics (පිලි) and special conjunct sequences (්‍ය, ්‍ර)

After transliteration, the result is lowercased, non-alphanumeric characters are removed, and spaces are replaced with hyphens.

---

## Legal Notice

Copyright (c) 2026 Sushen Nilaweera. All rights reserved.

The core transliteration logic in this library is protected under the Intellectual Property Act of Sri Lanka. Unauthorized reproduction of the logic through reverse engineering or redistribution without attribution is prohibited.

---

## License

This project is licensed under the [MIT License](./LICENSE).

---

## Author

**Sushen Santhush Nilaweera**
- GitHub: [@sushensanthush](https://github.com/sushensanthush)
