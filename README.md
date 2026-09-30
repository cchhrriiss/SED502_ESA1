# Chinas Geschichte im Überblick

Diese Webseite zeigt zwölf ausgewählte Abschnitte der chinesischen Geschichte. Von den frühen Dynastien bis zur Reformpolitik ab 1978. Über ein Auswahlfeld lassen sich die Stationen nach drei Epochen filtern. Die historischen Quellen stehen gesammelt am Ende der Webseite.

## Lokal starten

```bash
npm install
npm run dev
```
- Die von Vite angezeigte lokale Adresse im Browser öffnen. 
- Mit `npm run build` lassen sich die TypeScript-Prüfung und der Produktions-Build ausführen.

## Technische Entscheidungen

- Die Seite verwendet semantische HTML-Elemente wie `header`, `nav`, `main`, `section`, `article` und `aside`.
- Die zwölf Geschichtsabschnitte stehen in einer geordneten Liste. Das Auswahlfeld filtert sie mit TypeScript anhand des Attributs `data-epoche`.
- Der Filter nutzt ein Interface, typisierte Funktionen und die Array-Methode `filter()`. Eine Statusmeldung nennt die Zahl der sichtbaren Stationen.
- Beim Styling wurde nur einfaches CSS verwendet, da dies für die Anforderung ausreichend ist. Um die Seite schöner zu gestalten, könnte man ein CSS-Framework verwenden.
