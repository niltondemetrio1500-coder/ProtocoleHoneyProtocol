import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "vturb-smartplayer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        "original-id"?: string;
      };
    }
  }
}

export {};
