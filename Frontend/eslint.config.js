// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import pluginQuery from "@tanstack/eslint-plugin-query";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [js.configs.recommended, {
    ...reactPlugin.configs.flat.recommended,
    settings: {
        react: {
            version: "detect",
        },
    },
}, reactPlugin.configs.flat["jsx-runtime"], ...pluginQuery.configs["flat/recommended"], {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
        parser: tsParser,
        parserOptions: {
            project: "./tsconfig.json",
        },
        globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
        "@typescript-eslint": tseslint,
    },
    rules: {
        ...tseslint.configs.recommended.rules,
        "react/no-unescaped-entities": "off",
        "react/prop-types": "off",
    },
}, prettier, ...storybook.configs["flat/recommended"], ...storybook.configs["flat/recommended"], ...storybook.configs["flat/recommended"]];
