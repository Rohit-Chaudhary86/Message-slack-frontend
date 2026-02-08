import js from "@eslint/js"
import { defineConfig, globalIgnores } from "eslint/config"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"

export default defineConfig([
  globalIgnores(["dist"]),

  //  Node.js files
  {
    files: ["vite.config.js"],
    languageOptions: {
      globals: globals.node,
    },
  },

  //  Browser / React files
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,

      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react/prop-types": "off",
    },
  },

  //  shadcn/ui OVERRIDE (MUST BE LAST)
  {
    files: ["src/components/ui/**/*.jsx"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
])
