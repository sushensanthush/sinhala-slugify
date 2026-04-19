/**
 * sinhala-slugify
 * Copyright (c) 2026. All rights reserved.
 */

const consonants = {
    'ක': 'k', 'ඛ': 'kh', 'ග': 'g', 'ඝ': 'gh', 'ඞ': 'n',
    'ච': 'ch', 'ඡ': 'ch', 'ජ': 'j', 'ඣ': 'jh', 'ඤ': 'ny',
    'ට': 't', 'ඨ': 'th', 'ඩ': 'd', 'ඪ': 'dh', 'ණ': 'n',
    'ත': 'th', 'ථ': 'th', 'ද': 'dh', 'ධ': 'dh', 'න': 'n',
    'ප': 'p', 'ඵ': 'ph', 'බ': 'b', 'භ': 'bh', 'ම': 'm',
    'ය': 'y', 'ර': 'r', 'ල': 'l', 'ව': 'w', 'ශ': 'sh', 'ෂ': 'sh', 'ස': 's', 'හ': 'h', 'ළ': 'l', 'ෆ': 'f',
    'ං': 'n', 'ඃ': 'h' // බිංදුව සහ විසර්ගය
};

const vowels = {
    'අ': 'a', 'ආ': 'aa', 'ඇ': 'ae', 'ඈ': 'aee', 'ඉ': 'i', 'ඊ': 'ii',
    'උ': 'u', 'ඌ': 'uu', 'ඍ': 'ru', 'එ': 'e', 'ඒ': 'ee', 'ඓ': 'ai', 'ඔ': 'o', 'ඕ': 'oo', 'ඖ': 'au'
};

const modifiers = {
    'ා': 'aa', 'ැ': 'ae', 'ෑ': 'aee', 'ි': 'i', 'ී': 'ii',
    'ු': 'u', 'ූ': 'uu', 'ෘ': 'ru', 'ෙ': 'e', 'ේ': 'ee', 'ෛ': 'ai',
    'ො': 'o', 'ෝ': 'oo', 'ෞ': 'au',
    '්‍ය': 'ya', // යංශය
    '්‍ර': 'ra', // රාකෘත්යාංශය
    '්': '' // හල් කිරීම
};

function sinhalaSlugify(text) {
    if (!text) return '';

    let result = '';
    let i = 0;

    while (i < text.length) {
        let char = text[i];
        
        if (consonants[char]) {
            let sound = consonants[char];
            let nextPart = "";
            
            // ඉන්පසු එන අකුරු පරීක්ෂාව (Modifiers/Special clusters)
            let foundModifier = false;
            
            // Check for multi-character modifiers like ්‍ය or ්‍ර
            let doubleChar = text.substring(i + 1, i + 3);
            if (modifiers[doubleChar] !== undefined) {
                sound += modifiers[doubleChar];
                i += 2;
                foundModifier = true;
            } else {
                let nextChar = text[i + 1];
                if (nextChar && modifiers[nextChar] !== undefined) {
                    sound += modifiers[nextChar];
                    i++;
                    foundModifier = true;
                }
            }

            // කිසිම පිල්ලක් නැත්නම් 'a' එකතු කරන්න (හැබැයි බිංදුවට 'a' එපා)
            if (!foundModifier && char !== 'ං' && char !== 'ඃ') {
                sound += 'a';
            }
            result += sound;
        } else if (vowels[char]) {
            result += vowels[char];
        } else {
            result += char;
        }
        i++;
    }

    return result
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

module.exports = { sinhalaSlugify };

// Test Updates
console.log("1. බුද්ධිමය:", sinhalaSlugify("බුද්ධිමය"));
console.log("2. ශ්‍රී ලංකා:", sinhalaSlugify("ශ්‍රී ලංකා"));
console.log("3. ව්‍යාපෘතිය:", sinhalaSlugify("ව්‍යාපෘතිය"));
console.log("4. ප්‍රවෘත්ති:", sinhalaSlugify("ප්‍රවෘත්ති"));
console.log("6. ඉංජිනේරු (Engineer):", sinhalaSlugify("ඉංජිනේරු"));
console.log("5. ව්‍යවස්ථාව (Constitution):", sinhalaSlugify("ව්‍යවස්ථාව"));
console.log("5. සුබ අලුත් අවුරුද්දක් වේවා!:", sinhalaSlugify("සුබ අලුත් අවුරුද්දක් වේවා"));