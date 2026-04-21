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
```JavaScript
const { sinhalaSlugify } = require('./src/index');
const slug = sinhalaSlugify("අලුත් පුවත් 2026");
console.log(slug);
```
