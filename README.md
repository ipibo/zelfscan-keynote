## zelfscanner keynote

maak eerst een paar folders in de public folder
namelijk:

- images
- pages
- videos

### database vullen

kopieer de `database example.json` naar `database.json` en vul deze met de juiste gegevens

let daarbij op dat je de juist bestand soort moet aangeven bij het juiste bestand.

- een iframe noem je `page` en een afbeelding noem je `image`

Het is belangrijk dat de fildes die je aan de db toevoegd ook daadwerkelijk in de folders staan. anders werkt het niet.

### starten

belangrijk om eerst even je eigen ip adres te checken. dit moet je vervolgens even aanpassen in de index.html en de show.html !!!!!!!!!

- op een mac doe je dit door `ifconfig` te runnen in de terminal. of op een makkelijkere manier door: `option` ingedrukt te houden en op het wifi icoontje te klikken. dan zie je je ip adres staan.

om het de eerste keer te starten moeten er wat libraries geinstalleerd worden. dit doe je door `npm install` te runnen in de root van het project.

daarna kan je het project starten door `npm start` of `node server.js` te runnen in de root van het project.

### vragen?

- welke file moet ik waar openen?

  - op de zelfscanner open je de index.html
  - op de computer open je de show.html

- geen vragen

### todo's

- [ ] Video kunnen toevoegen, naast afbeeldingen en webpagina’s
- [ ] Keynote: zelfde product een aantal keer kunnen scannen en dan bij elke extra scan een andere afbeelding/pagina/video krijgen
- [ ] Keynote: steekwoorden en instructies vertonen op de scanner
- [ ] Speurtocht: kijken of het mogelijk is om toch een soort “volgende” knop te kunnen toevoegen, zodat het echt een soort point en click adventure kan worden waarbij je soms door een een dialoog heen moet klikken
- [ ] Speurtocht: barcode toevoegen om vroegtijdig te kunnen stoppen, en aan het begin voor verschillende talen
- [ ] Speurtocht: inbouwen dat je in sommige gevallen naar de volgende pagina/afbeelding/video gaat bij het scannen van een willekeurige code (zodat ik bijv. kan zeggen “scan IETS uit een koelschap om verder te gaan”)
- [ ] Speurtocht: melding bij het scannen van het verkeerde product (bijv. “Nee, dit bedoel ik niet. Scan nu [huidig product]”)
- [ ] Speurtocht: optie waarbij, als er na bijv. 5 minuten nog niet het goede product gescand is, de speurtocht toch verder gaat nadat hier eerst een melding over komt
- [ ] Speurtocht: help-knop, zodat ik een raadsel als omschrijving kan geven voor welk product er gescand moet worden en dan staat onder de help-knop staat wat het is
- [ ] Speurtocht: voorkomen dat je “vooruit kan springen” in de tijdlijn/flowchart van de speurtocht
- [ ] Speurtocht: in het verlengde daarvan, soms een pagina hebben waarbij je meerdere opties hebt voor de volgende pagina, kan ook bij de help knop in
