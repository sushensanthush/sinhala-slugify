/**
 * sinhala-slugify
 * Copyright (c) 2026. Sushen santhush All rights reserved.
 * Licensed under the MIT License.
 */

const charMap = {
    'අ': 'a', 'ආ': 'aa', 'ඇ': 'ae', 'ඈ': 'aee', 'ඉ': 'i', 'ඊ': 'ii',
    'උ': 'u', 'ඌ': 'uu', 'එ': 'e', 'ඒ': 'ee', 'ඓ': 'ai', 'ඔ': 'o', 'ඕ': 'oo',
    'ක': 'ka', 'ග': 'ga', 'ච': 'cha', 'ජ': 'ja', 'ට': 'ta', 'ඩ': 'da',
    'ණ': 'na', 'ත': 'tha', 'ද': 'dha', 'න': 'na', 'ප': 'pa', 'බ': 'ba',
    'ම': 'ma', 'ය': 'ya', 'ර': 'ra', 'ල': 'la', 'ව': 'wa', 'ස': 'sa', 'හ': 'ha'
    // Mama me tika witharai add kre thawa akuru methanata add karanna puluwan
};

function sinhalaSlugify(text) {
    if (!text) return '';

    return text
        .trim()
        .split('')
        .map(char => charMap[char] || char) // අකුර map එකේ නැත්නම් ඒ අකුරම ගන්නවා
        .join('')
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // ඉංග්‍රීසි අකුරු/ඉලක්කම් නොවන දේවල් අයින් කරනවා
        .replace(/\s+/g, '-')         // හිස්තැන් වෙනුවට dash (-) දානවා
        .replace(/-+/g, '-');        // එක ළඟ dash කිහිපයක් තිබ්බොත් එකක් කරනවා
}

module.exports = { sinhalaSlugify };