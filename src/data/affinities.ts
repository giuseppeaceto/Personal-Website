export type Affinity = {
  id: string;
  name: string;
  href: string;
  src: string;
};

/** Curated free-software / digital-rights projects — not sponsorships. */
export const affinities: readonly Affinity[] = [
  {
    id: "tor",
    name: "Tor Project",
    href: "https://www.torproject.org/",
    src: "/images/affinities/tor.svg",
  },
  {
    id: "eff",
    name: "Electronic Frontier Foundation",
    href: "https://www.eff.org/",
    src: "/images/affinities/eff.svg",
  },
  {
    id: "gnu",
    name: "GNU Project",
    href: "https://www.gnu.org/",
    src: "/images/affinities/gnu.svg",
  },
  {
    id: "creativecommons",
    name: "Creative Commons",
    href: "https://creativecommons.org/",
    src: "/images/affinities/creativecommons.svg",
  },
  {
    id: "wikipedia",
    name: "Wikipedia",
    href: "https://www.wikipedia.org/",
    src: "/images/affinities/wikipedia.svg",
  },
  {
    id: "internetarchive",
    name: "Internet Archive",
    href: "https://archive.org/",
    src: "/images/affinities/internetarchive.svg",
  },
  {
    id: "mozilla",
    name: "Mozilla",
    href: "https://www.mozilla.org/",
    src: "/images/affinities/mozilla.svg",
  },
  {
    id: "signal",
    name: "Signal",
    href: "https://signal.org/",
    src: "/images/affinities/signal.svg",
  },
  {
    id: "matrix",
    name: "Matrix",
    href: "https://matrix.org/",
    src: "/images/affinities/matrix.svg",
  },
  {
    id: "mastodon",
    name: "Mastodon",
    href: "https://joinmastodon.org/",
    src: "/images/affinities/mastodon.svg",
  },
  {
    id: "peertube",
    name: "PeerTube",
    href: "https://joinpeertube.org/",
    src: "/images/affinities/peertube.svg",
  },
  {
    id: "nextcloud",
    name: "Nextcloud",
    href: "https://nextcloud.com/",
    src: "/images/affinities/nextcloud.svg",
  },
  {
    id: "cryptpad",
    name: "CryptPad",
    href: "https://cryptpad.org/",
    src: "/images/affinities/cryptpad.svg",
  },
  {
    id: "syncthing",
    name: "Syncthing",
    href: "https://syncthing.net/",
    src: "/images/affinities/syncthing.svg",
  },
  {
    id: "bitwarden",
    name: "Bitwarden",
    href: "https://bitwarden.com/",
    src: "/images/affinities/bitwarden.svg",
  },
  {
    id: "protonmail",
    name: "Proton Mail",
    href: "https://proton.me/mail",
    src: "/images/affinities/protonmail.svg",
  },
  {
    id: "duckduckgo",
    name: "DuckDuckGo",
    href: "https://duckduckgo.com/",
    src: "/images/affinities/duckduckgo.svg",
  },
  {
    id: "openstreetmap",
    name: "OpenStreetMap",
    href: "https://www.openstreetmap.org/",
    src: "/images/affinities/openstreetmap.svg",
  },
  {
    id: "kiwix",
    name: "Kiwix",
    href: "https://kiwix.org/",
    src: "/images/affinities/kiwix.svg",
  },
  {
    id: "libreoffice",
    name: "LibreOffice",
    href: "https://www.libreoffice.org/",
    src: "/images/affinities/libreoffice.svg",
  },
] as const;
