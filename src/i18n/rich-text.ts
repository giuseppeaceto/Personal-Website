export type RichPart =
  | { type: "text"; value: string }
  | { type: "link"; label: string; href: string };

export type RichParagraph = readonly RichPart[];

export function rich(...parts: RichPart[]): RichParagraph {
  return parts;
}

export function txt(value: string): RichPart {
  return { type: "text", value };
}

export function lnk(label: string, href: string): RichPart {
  return { type: "link", label, href };
}
