import express from "express";
import docsify from "docsify"; // Verwendet die TypeScript-Defintionen für docsify-cli

const app = express();
const port = 8080; // Der Port, auf dem Docsify laufen soll

// Füge eine Middleware hinzu, um Docsify zu starten
app.use("/", (req, res, next) => {
  // Passe den Pfad zu deinem Docsify-Verzeichnis an
  const docsifyPath = __dirname + "/docs"; // Hier wird angenommen, dass dein Docsify-Verzeichnis "docs" heißt
  docsify.run(["serve", docsifyPath, "--port", port], next);
});

app.listen(port, () => {
  console.log(`Docsify läuft auf Port ${port}`);
});
