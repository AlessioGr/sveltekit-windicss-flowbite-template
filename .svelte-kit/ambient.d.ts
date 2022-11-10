
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into public-facing code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const COREPACK_ROOT: string;
	export const MANPATH: string;
	export const npm_package_exports___vite_import: string;
	export const npm_package_exports___hooks_import: string;
	export const NODE: string;
	export const npm_package_dependencies_sade: string;
	export const INIT_CWD: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies__types_marked: string;
	export const npm_package_homepage: string;
	export const npm_package_devDependencies_vite: string;
	export const TERM: string;
	export const SHELL: string;
	export const npm_package_dependencies_devalue: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const npm_package_scripts_lint: string;
	export const CONDA_SHLVL: string;
	export const npm_package_dependencies_set_cookie_parser: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const npm_package_dependencies_cookie: string;
	export const TERM_SESSION_ID: string;
	export const npm_config_registry: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_package_repository_url: string;
	export const __INTELLIJ_COMMAND_HISTFILE__: string;
	export const npm_package_exports___node_import: string;
	export const USER: string;
	export const npm_package_exports___package_json: string;
	export const npm_package_license: string;
	export const COMMAND_MODE: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_package_exports___import: string;
	export const CONDA_EXE: string;
	export const npm_package_repository_directory: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_config__OWNER_registry: string;
	export const npm_package_bin_svelte_kit: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies__types_sade: string;
	export const LOGIN_SHELL: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_dependencies__sveltejs_vite_plugin_svelte: string;
	export const _CE_CONDA: string;
	export const npm_package_scripts_postinstall: string;
	export const PATH: string;
	export const npm_package_devDependencies_rollup: string;
	export const npm_package_dependencies_magic_string: string;
	export const TERMINAL_EMULATOR: string;
	export const npm_config_engine_strict: string;
	export const _: string;
	export const CONDA_PREFIX: string;
	export const __CFBundleIdentifier: string;
	export const npm_package_devDependencies__types_mime: string;
	export const PWD: string;
	export const npm_package_bugs_url: string;
	export const npm_package_devDependencies_uvu: string;
	export const npm_lifecycle_event: string;
	export const npm_package_types: string;
	export const npm_package_devDependencies_marked: string;
	export const npm_package_repository_type: string;
	export const npm_package_name: string;
	export const npm_package_scripts_test_integration: string;
	export const npm_package_devDependencies__types_connect: string;
	export const npm_package_dependencies_mime: string;
	export const npm_package_scripts_build: string;
	export const npm_package_exports___node_polyfills_import: string;
	export const npm_package_exports___types: string;
	export const XPC_FLAGS: string;
	export const npm_package_dependencies_tiny_glob: string;
	export const npm_package_engines_node: string;
	export const npm_package_dependencies_sirv: string;
	export const npm_config_node_gyp: string;
	export const npm_package_version: string;
	export const _CE_M: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_dependencies_undici: string;
	export const npm_package_type: string;
	export const SHLVL: string;
	export const HOME: string;
	export const npm_package_scripts_test: string;
	export const npm_package_scripts_check_all: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_package_scripts_format: string;
	export const npm_package_peerDependencies_vite: string;
	export const CONDA_PYTHON_EXE: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const npm_package_peerDependencies_svelte: string;
	export const LC_CTYPE: string;
	export const npm_package_devDependencies__types_set_cookie_parser: string;
	export const CONDA_DEFAULT_ENV: string;
	export const npm_config_user_agent: string;
	export const npm_package_files_3: string;
	export const npm_package_dependencies__types_cookie: string;
	export const npm_package_scripts_types: string;
	export const npm_package_files_2: string;
	export const npm_package_devDependencies__types_node: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const npm_package_files_1: string;
	export const npm_package_files_0: string;
	export const npm_package_files_7: string;
	export const npm_package_dependencies_kleur: string;
	export const npm_package_files_6: string;
	export const npm_package_scripts_check: string;
	export const npm_package_files_5: string;
	export const npm_node_execpath: string;
	export const npm_package_scripts_test_unit: string;
	export const npm_package_files_4: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into public-facing code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		COREPACK_ROOT: string;
		MANPATH: string;
		npm_package_exports___vite_import: string;
		npm_package_exports___hooks_import: string;
		NODE: string;
		npm_package_dependencies_sade: string;
		INIT_CWD: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies__types_marked: string;
		npm_package_homepage: string;
		npm_package_devDependencies_vite: string;
		TERM: string;
		SHELL: string;
		npm_package_dependencies_devalue: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		npm_package_scripts_lint: string;
		CONDA_SHLVL: string;
		npm_package_dependencies_set_cookie_parser: string;
		CONDA_PROMPT_MODIFIER: string;
		npm_package_dependencies_cookie: string;
		TERM_SESSION_ID: string;
		npm_config_registry: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_package_repository_url: string;
		__INTELLIJ_COMMAND_HISTFILE__: string;
		npm_package_exports___node_import: string;
		USER: string;
		npm_package_exports___package_json: string;
		npm_package_license: string;
		COMMAND_MODE: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_package_exports___import: string;
		CONDA_EXE: string;
		npm_package_repository_directory: string;
		SSH_AUTH_SOCK: string;
		npm_config__OWNER_registry: string;
		npm_package_bin_svelte_kit: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		npm_package_devDependencies__types_sade: string;
		LOGIN_SHELL: string;
		npm_package_devDependencies_svelte: string;
		npm_package_dependencies__sveltejs_vite_plugin_svelte: string;
		_CE_CONDA: string;
		npm_package_scripts_postinstall: string;
		PATH: string;
		npm_package_devDependencies_rollup: string;
		npm_package_dependencies_magic_string: string;
		TERMINAL_EMULATOR: string;
		npm_config_engine_strict: string;
		_: string;
		CONDA_PREFIX: string;
		__CFBundleIdentifier: string;
		npm_package_devDependencies__types_mime: string;
		PWD: string;
		npm_package_bugs_url: string;
		npm_package_devDependencies_uvu: string;
		npm_lifecycle_event: string;
		npm_package_types: string;
		npm_package_devDependencies_marked: string;
		npm_package_repository_type: string;
		npm_package_name: string;
		npm_package_scripts_test_integration: string;
		npm_package_devDependencies__types_connect: string;
		npm_package_dependencies_mime: string;
		npm_package_scripts_build: string;
		npm_package_exports___node_polyfills_import: string;
		npm_package_exports___types: string;
		XPC_FLAGS: string;
		npm_package_dependencies_tiny_glob: string;
		npm_package_engines_node: string;
		npm_package_dependencies_sirv: string;
		npm_config_node_gyp: string;
		npm_package_version: string;
		_CE_M: string;
		XPC_SERVICE_NAME: string;
		npm_package_dependencies_undici: string;
		npm_package_type: string;
		SHLVL: string;
		HOME: string;
		npm_package_scripts_test: string;
		npm_package_scripts_check_all: string;
		HOMEBREW_PREFIX: string;
		npm_package_scripts_format: string;
		npm_package_peerDependencies_vite: string;
		CONDA_PYTHON_EXE: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		npm_package_peerDependencies_svelte: string;
		LC_CTYPE: string;
		npm_package_devDependencies__types_set_cookie_parser: string;
		CONDA_DEFAULT_ENV: string;
		npm_config_user_agent: string;
		npm_package_files_3: string;
		npm_package_dependencies__types_cookie: string;
		npm_package_scripts_types: string;
		npm_package_files_2: string;
		npm_package_devDependencies__types_node: string;
		npm_package_devDependencies__playwright_test: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		npm_package_files_1: string;
		npm_package_files_0: string;
		npm_package_files_7: string;
		npm_package_dependencies_kleur: string;
		npm_package_files_6: string;
		npm_package_scripts_check: string;
		npm_package_files_5: string;
		npm_node_execpath: string;
		npm_package_scripts_test_unit: string;
		npm_package_files_4: string;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: string]: string | undefined;
	}
}
