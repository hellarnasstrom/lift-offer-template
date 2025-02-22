
# Serviceavtal Layout Specifikation

## Generell Sidlayout
- Sidstorlek: A4 (210mm × 297mm)
- Marginaler: 25mm på alla sidor
- Typsnitt: Inter (sans-serif)
- Sidhuvud och sidfot på varje sida

## Sidhuvud
- Vänster: Elevata logotyp (höjd: 40px)
- Höger: Sidnumrering "2024-001 : Sida X av Y"
- Teckensnitt sidhuvud: 9pt
- Färg: #333333
- Margin-bottom: 40px

## Sidfot (alla sidor)
- Tredelad layout med kolumner
- Border-top: 1px solid #E5E5E5
- Padding: 8px 0
- Teckensnitt: 7.5pt
- Textfärg: #555555

### Sidfot Kolumner
1. **Adress**
   - ELEVATA HISS AKTIEBOLAG
   - VARBERGSVÄGEN, 2090
   - 43961 FRILLESÅS

2. **Kontakt**
   - Telefon: 010-2040305
   - E-post: info@elevata.se
   - Webbadress: www.elevata.se

3. **Betalningsinformation**
   - Bankgiro: 291-9462
   - Organisationsnr: 556757-6870
   - Momsreg. nr: SE556757687001

## Sida 1 (Framsida)
- Centrerad layout
- Huvudrubrik "OFFERT SERVICEAVTAL"
  - Teckensnitt: text-5xl
  - Färg: #0EA5E9
  - Font-weight: bold
  - Letter-spacing: tight
- Underrubrik "Offertnummer: 2024-001"
  - Teckensnitt: text-lg
  - Färg: #0EA5E9
  - Margin-top: 8 (2rem)

## Sida 2
### Sektion: Avtalets omfattning
- Rubrik: text-xl, font-semibold, färg: #1A1F2C
- Brödtext: normal, färg: #1A1F2C, line-height: relaxed

### Sektion: Servicenivåer och responstider
- Huvudrubrik: samma stil som ovan
- Inledande text i blått (#0EA5E9)
- Tre prioritetsnivåer i grid-layout:
  1. Prioritet 1: Akuta ärenden
  2. Prioritet 2: Driftstopp
  3. Prioritet 3: Övriga ärenden
- Varje prioritet har:
  - Rubrik: font-semibold, #1A1F2C
  - Beskrivning: #8E9196

## Sida 3
### Sektion: Priser och betalningsvillkor
- Tabell med border och rounded corners
- Tabellhuvud: bg-[#F8F9FA]
- Kolumner:
  - Tjänst (text-left, #0EA5E9)
  - Pris (SEK)
  - Enhet
- Rader med border-t border-[#E5E5E5]
- Cell padding: 1rem (p-4)
- Fotnot under tabellen: text-sm, #8E9196

## Sida 4
### Sektion: Avtalstid och uppsägning
- Rubrik: text-xl, font-semibold, #1A1F2C
- Brödtext: #8E9196, line-height: relaxed

### Sektion: Omfattning och villkor
- Rubrik: samma stil som ovan
- Inledande text i lila (#6E59A5)
- Punktlista med:
  - Bullet points i #7E69AB
  - Text i #8E9196
  - Gap mellan punkter: 0.75rem

## Typografi
### Rubriker (h2)
- Storlek: 14pt
- Färg: #1EAEDB
- Margin-bottom: 1rem
- Font-weight: 600
- Text-transform: uppercase
- Letter-spacing: 0.5px

### Brödtext
- Storlek: 10.5pt
- Line-height: 1.6
- Margin-bottom: 0.5rem

## Utskriftsformat
- Ingen bakgrund
- Inga marginaler
- Ingen skugga
- Page-break efter varje sida
- Page-break-inside: avoid för sektioner och tabeller
