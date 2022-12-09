/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IS_DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
