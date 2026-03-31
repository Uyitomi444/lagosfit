/**
 * fix-sublocality.mjs  (v2 — regex-based block extraction)
 * Run with: node scripts/fix-sublocality.mjs
 */
import { readFileSync, writeFileSync, copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = resolve(__dirname, '../src/data/quiz_data.ts');

// ─── Content Generator ────────────────────────────────────────────────────────
function generateContent(areaName, locality) {
    const loc = locality.toLowerCase();
    const isEstate = loc.includes('estate') || loc.includes('gra') || loc.includes('phase') || loc.includes('garden') || loc.includes('parkview') || loc.includes('ramat') || loc.includes('crown') || loc.includes('diamond') || loc.includes('emperor') || loc.includes('atlantic');
    const isMarket = loc.includes('market') || loc.includes('alaba') || loc.includes('balogun') || loc.includes('idumota');
    const isWater = loc.includes('beach') || loc.includes('jetty') || loc.includes('waterfront') || loc.includes('lagoon') || loc.includes('fish') || loc.includes('creek') || loc.includes('marine');
    const isUni = loc.includes('unilag') || loc.includes('university') || loc.includes('college') || loc.includes('finbarr') || loc.includes('fed. coll') || loc.includes('polytechnic');
    const isRoad = loc.includes('road') || loc.includes('avenue') || loc.includes('street') || loc.includes('way') || loc.includes('drive') || loc.includes('crescent');
    const isAvenue = /^\d+(st|nd|rd|th) avenue$/i.test(locality);
    const isBorder = loc.includes('border') || loc.includes('junction') || loc.includes('bus stop') || loc.includes('underbridge') || loc.includes('bus park') || loc.includes('t-junction');
    const isNight = loc.includes('allen') || loc.includes('computer village') || loc.includes('opebi') || loc.includes('toyin') || loc.includes('admiralty');
    const isIsland = loc.includes('island') || loc.includes('marina') || loc.includes('cms') || loc.includes('broad') || loc.includes('tinubu') || loc.includes('water front');

    if (isAvenue) {
        return {
            places: [
                { name: `${locality}, Festac Town` },
                { name: 'Festac Town Park & Gardens' },
                { name: 'Community recreational hall' },
            ],
            foods: [
                { name: 'Neighbourhood buka rice & stew' },
                { name: 'Evening suya & grills' },
                { name: 'Fast food on Festac main road' },
            ],
            sports: [
                { name: 'Festac community football pitch', type: 'Football' },
                { name: 'Estate jogging route', type: 'Other' },
                { name: 'Private estate gym', type: 'Gym' },
            ],
        };
    }

    if (isEstate) return {
        places: [
            { name: `${locality}` },
            { name: `${areaName} estate parks & green spaces` },
            { name: 'Estate recreational & community facilities' },
        ],
        foods: [
            { name: 'Estate canteen & café' },
            { name: 'Local suya & grills near estate gate' },
            { name: 'Restaurants on the nearby main road' },
        ],
        sports: [
            { name: 'Estate football pitch', type: 'Football' },
            { name: 'Private estate gym', type: 'Gym' },
            { name: 'Estate jogging route', type: 'Other' },
        ],
    };

    if (isWater) return {
        places: [
            { name: `${locality} waterfront` },
            { name: 'Lagoon / riverside viewpoint' },
            { name: `${areaName} beach / creek access` },
        ],
        foods: [
            { name: 'Fresh fish pepper soup (waterfront stalls)' },
            { name: 'Grilled fish & fresh seafood joints' },
            { name: 'Smoked fish market stalls' },
        ],
        sports: [
            { name: 'Lagoon boat rides & water sports', type: 'Other' },
            { name: 'Community beach football', type: 'Football' },
            { name: 'Swimming & fishing activities', type: 'Other' },
        ],
    };

    if (isMarket) return {
        places: [
            { name: `${locality} Market` },
            { name: `${areaName} commercial hub` },
            { name: 'Wholesale stalls & trading spots' },
        ],
        foods: [
            { name: 'Mama-put buka spots' },
            { name: 'Amala & ewedu (market canteen)' },
            { name: 'Street moi-moi, puff-puff & akara' },
        ],
        sports: [
            { name: 'Nearby community football pitch', type: 'Football' },
            { name: 'Local gym near market area', type: 'Gym' },
        ],
    };

    if (isUni) return {
        places: [
            { name: `${locality} campus axis` },
            { name: 'Student arts & culture spaces' },
            { name: `${areaName} tech & learning hubs` },
        ],
        foods: [
            { name: 'Campus canteen & cafeteria' },
            { name: 'Student-belt buka joints' },
            { name: 'Indomie, shawarma & fast food' },
        ],
        sports: [
            { name: 'Campus football pitch', type: 'Football' },
            { name: 'Campus sports complex', type: 'Other' },
            { name: 'Basketball courts', type: 'Basketball' },
        ],
    };

    if (isIsland) return {
        places: [
            { name: `${locality} commercial corridor` },
            { name: `${areaName} heritage landmarks & architecture` },
            { name: 'Banks, offices & business hubs' },
        ],
        foods: [
            { name: 'Quick-serve restaurants & lunch joints' },
            { name: 'Street buka & canteen options' },
            { name: 'Fine dining on nearby waterfront' },
        ],
        sports: [
            { name: 'Nearby indoor recreation center', type: 'Other' },
            { name: 'Road jogging route', type: 'Other' },
        ],
    };

    if (isNight) return {
        places: [
            { name: `${locality} nightlife strip` },
            { name: `${areaName} lounges & event centres` },
            { name: 'Shopping & lifestyle spots' },
        ],
        foods: [
            { name: 'Late-night grills & shawarma' },
            { name: 'Lounge bites & cocktail bars' },
            { name: 'Premium cafés & brunch spots' },
        ],
        sports: [
            { name: 'Premium gym studios', type: 'Gym' },
            { name: 'Indoor sports & recreation', type: 'Other' },
            { name: 'Tennis clubs', type: 'Tennis' },
        ],
    };

    if (isBorder) return {
        places: [
            { name: `${locality} transit & connecting axis` },
            { name: `Local market near ${locality}` },
            { name: 'Community gathering spots' },
        ],
        foods: [
            { name: 'Street puff-puff & akara stalls' },
            { name: 'Buka rice & stew' },
            { name: 'Roasted corn & suya spots' },
        ],
        sports: [
            { name: 'Community football pitch nearby', type: 'Football' },
            { name: 'Local gym near boundary road', type: 'Gym' },
        ],
    };

    if (isRoad) return {
        places: [
            { name: `${locality} corridor` },
            { name: `Shops & services along ${locality}` },
            { name: `Local hangout spots near ${locality}` },
        ],
        foods: [
            { name: 'Roadside food kiosks & buka joints' },
            { name: 'Evening suya & grills' },
            { name: 'Street shawarma & small chops' },
        ],
        sports: [
            { name: 'Roadside football centers', type: 'Football' },
            { name: 'Road jogging route', type: 'Other' },
            { name: 'Local gym on the road', type: 'Gym' },
        ],
    };

    // Default — general residential
    return {
        places: [
            { name: `${locality}, ${areaName}` },
            { name: `Local market in ${locality}` },
            { name: 'Community park & open spaces' },
        ],
        foods: [
            { name: 'Amala & ewedu joints' },
            { name: 'Street suya & bole evening spots' },
            { name: 'Local buka & canteen' },
        ],
        sports: [
            { name: 'Community football pitch', type: 'Football' },
            { name: 'Local private gym', type: 'Gym' },
            { name: 'Road jogging route', type: 'Other' },
        ],
    };
}

// ─── Format a single SD entry block ──────────────────────────────────────────
function formatSDEntry(locality, areaName) {
    const safe = (s) => s.replace(/'/g, "\\'");
    const { places, foods, sports } = generateContent(areaName, locality);
    const I = '            '; const II = '                '; const III = '                    ';

    let out = `${I}'${safe(locality)}': {\r\n`;
    out += `${II}placesToVisit: [\r\n`;
    for (const p of places) {
        const url = p.url ? `, url: '${p.url}'` : '';
        out += `${III}{ name: '${safe(p.name)}'${url} },\r\n`;
    }
    out += `${II}],\r\n`;
    out += `${II}whatToEat: [\r\n`;
    for (const f of foods) {
        const url = f.url ? `, url: '${f.url}'` : '';
        out += `${III}{ name: '${safe(f.name)}'${url} },\r\n`;
    }
    out += `${II}],\r\n`;
    out += `${II}sports: [\r\n`;
    for (const s of sports) {
        const url = s.url ? `, url: '${s.url}'` : '';
        out += `${III}{ name: '${safe(s.name)}', type: '${s.type}'${url} },\r\n`;
    }
    out += `${II}]\r\n`;
    out += `${I}},\r\n`;
    return out;
}

// ─── Extract subLocalityDetails keys using a simple line scan ────────────────
// We only look at lines that are at EXACTLY 12-space indent (the direct children of subLocalityDetails)
// We validate by tracking the context flag set when we see "subLocalityDetails: {"
function extractSDKeys(areaBlock) {
    const lines = areaBlock.split('\n');
    const keys = [];
    let inSD = false;
    let sdDepth = 0;

    for (const line of lines) {
        if (!inSD && line.match(/^\s{8}subLocalityDetails:\s*\{/)) {
            inSD = true;
            sdDepth = 0;
            continue;
        }
        if (inSD) {
            // Only count actual { and } characters NOT inside strings
            // Simple approach: strip string content first
            const stripped = line.replace(/'[^']*'/g, "''").replace(/"[^"]*"/g, '""');
            const opens = (stripped.match(/\{/g) || []).length;
            const closes = (stripped.match(/\}/g) || []).length;
            sdDepth += opens - closes;

            // A direct child key of subLocalityDetails is at depth=0 when we see the opening {
            // (after depth becomes 1 from the opening { of the key block itself, we're inside it)
            if (sdDepth === 0 && line.match(/^\s{12}'([^']+)':\s*\{/)) {
                keys.push(line.match(/^\s{12}'([^']+)':\s*\{/)[1]);
            }
            // When sdDepth goes negative, we've closed the subLocalityDetails block
            if (sdDepth < 0) break;
        }
    }
    return keys;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
console.log('📂 Reading quiz_data.ts...');
let content = readFileSync(filePath, 'utf-8');

// Backup
const backupPath = filePath.replace('.ts', '.ts.bak');
copyFileSync(filePath, backupPath);
console.log(`💾 Backup saved\n`);

// Split into individual area objects by finding area boundaries
// Each area starts with exactly "    {" and name: at 8-space indent
// We'll work on the content string directly using a regex that finds each area's subLocalityDetails block

let totalAdded = 0;
let totalFixed = 0;

// Strategy: we process the file area by area
// For each area we find: innerLocalities array, subLocalityDetails block
// We insert missing keys right before the closing } of subLocalityDetails

// Find all [area name + innerLocalities + subLocalityDetails closing brace] positions
// Use a careful line-by-line scan

const lines = content.split(/\r?\n/);
const EOL = content.includes('\r\n') ? '\r\n' : '\n';

// State machine
let areaName = '';
let innerLocalities = [];
let inSDBlock = false;
let sdDepth = 0;
let sdExistingKeys = [];
let sdCloseLineIndex = -1;
const insertions = []; // { lineIndex, text }

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect area name (8-space indent)
    if (line.match(/^        name:\s*'([^']+)'/)) {
        areaName = line.match(/^        name:\s*'([^']+)'/)[1];
    }

    // Detect innerLocalities
    if (line.match(/^        innerLocalities:\s*\[(.+)\]/)) {
        const raw = line.match(/^        innerLocalities:\s*\[(.+)\]/)[1];
        innerLocalities = [...raw.matchAll(/'([^']+)'/g)].map(m => m[1]);
    }

    // Detect subLocalityDetails open
    if (!inSDBlock && line.match(/^\s{8}subLocalityDetails:\s*\{/)) {
        inSDBlock = true;
        sdDepth = 0;
        sdExistingKeys = [];
        sdCloseLineIndex = -1;
        continue;
    }

    if (inSDBlock) {
        // Strip strings to avoid counting { } inside strings
        const stripped = line.replace(/'(?:[^'\\]|\\.)*'/g, "''").replace(/"(?:[^"\\]|\\.)*"/g, '""');
        const opens = (stripped.match(/\{/g) || []).length;
        const closes = (stripped.match(/\}/g) || []).length;
        sdDepth += opens - closes;

        // Direct child key at 12-space indent
        if (line.match(/^            '([^']+)':\s*\{/)) {
            const key = line.match(/^            '([^']+)':\s*\{/)[1];
            if (!sdExistingKeys.includes(key)) sdExistingKeys.push(key);
        }

        // Closing of the subLocalityDetails block (depth goes back to -1 from 0)
        if (sdDepth < 0) {
            inSDBlock = false;
            sdCloseLineIndex = i; // This is the line with the closing }

            // Determine missing entries
            const missing = innerLocalities.filter(loc => !sdExistingKeys.includes(loc));

            if (missing.length > 0) {
                console.log(`▶ [${areaName}] — Adding ${missing.length}: ${missing.join(', ')}`);
                const insertText = missing.map(loc => formatSDEntry(loc, areaName)).join('');
                insertions.push({ lineIndex: sdCloseLineIndex, text: insertText });
                totalAdded += missing.length;
            }

            // Reset for next area
            innerLocalities = [];
            sdExistingKeys = [];
        }
    }
}

// Apply insertions bottom-to-top to preserve line numbers
insertions.sort((a, b) => b.lineIndex - a.lineIndex);

for (const ins of insertions) {
    const newLines = ins.text.split(/\r?\n/);
    // Remove trailing empty string from split
    if (newLines[newLines.length - 1] === '') newLines.pop();
    lines.splice(ins.lineIndex, 0, ...newLines);
}

let newContent = lines.join(EOL);

// ─── Fix Festac: 'First Avenue' → '1st Avenue' ───────────────────────────────
const festacFixes = (newContent.match(/'First Avenue':\s*\{/g) || []).length;
if (festacFixes > 0) {
    newContent = newContent.replace(/'First Avenue':\s*\{/g, "'1st Avenue': {");
    console.log(`\n🔧 Fixed Festac mismatch: 'First Avenue' → '1st Avenue' (${festacFixes} occurrence)`);
    totalFixed += festacFixes;
}

// ─── Fix Gbagada: Remove duplicate standalone 'Phase 2' key ──────────────────
// Pattern: find a block that is 'Phase 2': { ... } directly inside Gbagada's SD
// and remove it if 'Gbagada Phase 2' already exists
const gbagadaDupMatch = newContent.match(/('Phase 2':\s*\{[\s\S]*?\n            \},\n)([\s\S]*?'Gbagada Phase 2':)/);
if (gbagadaDupMatch) {
    newContent = newContent.replace(gbagadaDupMatch[1], '');
    console.log('🔧 Removed duplicate Gbagada "Phase 2" entry (kept "Gbagada Phase 2")');
    totalFixed++;
}

// ─── Write output ─────────────────────────────────────────────────────────────
writeFileSync(filePath, newContent, 'utf-8');

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`✅ Done!`);
console.log(`   📝 Entries added   : ${totalAdded}`);
console.log(`   🔧 Mismatches fixed: ${totalFixed}`);
console.log(`   💾 File: src/data/quiz_data.ts`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
