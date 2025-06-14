import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react: react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // ✅ Enforce camelCase
      camelcase: ["error", { properties: "always" }],

      // ✅ Enforce TypeScript naming conventions
      "@typescript-eslint/naming-convention": [
        "error",
        // Default rule
        {
          selector: "default",
          format: ["camelCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "forbid",
        },

        // Variables (let, const, var)
        {
          selector: "variable",
          modifiers: ["const"],
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
        },
        {
          selector: "variable",
          format: ["camelCase", "PascalCase"],
        },

        // Function names
        {
          selector: "function",
          format: ["camelCase"],
        },

        // Parameters (function args)
        {
          selector: "parameter",
          format: ["camelCase"],
          leadingUnderscore: "allow", // allows _req, _next, etc.
        },

        // Member variables (class properties)
        {
          selector: "memberLike",
          modifiers: ["private"],
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },

        // Interfaces
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: {
            regex: "^I[A-Z]", // optional: force interfaces to start with "I"
            match: false, // set to true if you want them to start with I
          },
        },

        // Type aliases
        {
          selector: "typeAlias",
          format: ["PascalCase"],
        },

        // Enums
        {
          selector: "enum",
          format: ["PascalCase"],
        },
        {
          selector: "enumMember",
          format: ["UPPER_CASE"],
        },

        // Classes
        {
          selector: "class",
          format: ["PascalCase"],
        },

        // Object literal property names
        {
          selector: "objectLiteralProperty",
          format: null, // allows any format (useful when mapping APIs or external data)
        },

        // Imports
        {
          selector: "import",
          format: ["camelCase", "PascalCase"],
        },

        // Properties (dot notation)
        {
          selector: "property",
          format: null, // allows any format, needed for API response keys like snake_case
        },
      ],
    },
  }
);
