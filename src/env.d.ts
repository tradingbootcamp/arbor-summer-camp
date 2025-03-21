/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
