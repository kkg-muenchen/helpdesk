# Helpdesk

## Getting Started

1. Das Helpdesk hängt von unterschiedlichen Programmen ab.

   - [Node.js](https://nodejs.org/)
   - [MongoDB](https://www.mongodb.com/)

2. Den Code kann man einfach mit Hilfe des Tools Git heruntaerladen (inder Eingabeaufforderung) oder auch mit Hilfe von GitHub Desktop:<br>
   `git clone git@github.com:kkg-muenchen/helpdesk.git` oder `git clone https://github.com/kkg-muenchen/helpdesk.git`<br>
   <small>Man muss zuerst mithilfe des `cd` Commands in der richtigen Order "eintreten"</small>

3. Wenn man dann den Code runtergeladen hat und in VSCode geöffnet hat, kann man in VSCode ein neues Terminal öffen (ggf. muss man das Terminal im richtigen Ordern öffnen). Danach installieren wir die Dependencies (JavaScript) mit Hilfe des `npm install` Commands.

4. Um dann das Helpdesk zu starten fehlen uns noch zwei Schritte. Wir müssen die Datei `example.env` kopieren und in `.env` umbenennen und ggf. anbassen. Zweitens müssen wir die Datei `populatedb.js` mit Hilfe von Node.js ausführen, der Command dazu ist `node populatedb.js`. Damit erstellen wir die MongoDB Datenbank und fügen ein paar Notwendige Informationen zur Datenbank hinzu.

5. Und letztens können wir das Helpdesk starten.

   - `npm run dev` um die Website im Development Modus zu starten, dadurch wir die Website immer neugestartet, wenn bestimmte Dateien berabeitet werden.
   - `npm start` startet die Website, startet sie aber nach änderungen nicht neu.

6. Nachdem das Helpdesk gestart wurde können wir im Browser die Seite [http://localhost:9000/](http://localhost:9000/) öffnen
