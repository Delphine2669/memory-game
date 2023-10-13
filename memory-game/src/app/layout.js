import "./globals.css";
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Memory Game",
  description:
    "Memory est une application react nextJs. C'est un jeu de mémoire. Vous devez retrouver les 2 cartes identiques, parmi un jeu de 16.Sélectionnez les. Si vous trouvez une paire, vous gagnez 2 points, sinon vous devez recommencer. La partie s'arrête lorsque vous avez découvert toutes les cartes. A vous de jouer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon-16x16.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/assets/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/assets/android-chrome-512x512.png"
        />
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.ico" />

        <meta
          name="description"
          content="Memory Game est une application react nextJs. C'est un jeu de mémoire. Disponible en plusieurs niveaux. Vous devez retrouver toutes les paires dans le jeu. Sélectionnez les. Si vous trouvez une paire, vous gagnez 2 points, sinon vous devez recommencer. La partie s'arrête lorsque vous avez découvert toutes les cartes. A vous de jouer"
        />
        <meta name="author" content=" Waheb.C Delphine.T" />
        <meta
          property="og:title"
          content="Memory Game, faites travailler votre mémoire en vous amusant"
        />
        <meta
          property="og:url"
          content="https://memory-game.delphine-t-2669.com"
        />
        <meta
          property="og:description"
          content="Memory Game est une application react nextJs. C'est un jeu de mémoire.  Disponible en plusieurs niveaux. Vous devez retrouver toutes les paires dans le jeu.Sélectionnez les. Si vous trouvez une paire, vous gagnez 2 points, sinon vous devez recommencer. La partie s'arrête lorsque vous avez découvert toutes les cartes. A vous de jouer"
        />
        <meta
          property="og:image"
          content="https://github.com/Delphine2669/memory-game/raw/dev/memory-game/public/assets/MemoryScreen.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="delphine-t-2669.com/" />
        <meta
          property="twitter:url"
          content="https://memory-game.delphine-t-2669.com"
        />
        <meta
          name="twitter:title"
          content="Memory Game, faites travailler votre mémoire en vous amusant"
        />
        <meta
          name="twitter:description"
          content="Memory Game est une application react nextJs. C'est un jeu de mémoire. Disponible en plusieurs niveaux. Vous devez retrouver toutes les paires, dans le jeu.Sélectionnez les. Si vous trouvez une paire, vous gagnez 2 points, sinon vous devez recommencer. La partie s'arrête lorsque vous avez découvert toutes les cartes. A vous de jouer"
        />
        <meta
          name="twitter:image"
          content="https://github.com/Delphine2669/memory-game/raw/dev/memory-game/public/assets/MemoryScreen.png"
        />
        <title>Memory Game</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
