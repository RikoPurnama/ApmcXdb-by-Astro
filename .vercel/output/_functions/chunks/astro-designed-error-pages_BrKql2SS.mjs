import { N as NOOP_MIDDLEWARE_HEADER, D as DEFAULT_404_COMPONENT } from './astro/server_BiZfhCPB.mjs';
import { parse } from 'devalue';
import { escape } from 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const ACTION_QUERY_PARAMS = {
  actionName: "_action",
  actionPayload: "_astroActionPayload"
};

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4b3R6b2V2cXdrb2dudXJwY2h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5NTA2NjcsImV4cCI6MjA0ODUyNjY2N30.0YstzNH0Ze9b9vffIWGaWAMS82BqhDqEmC_I3kYQQHg", "PUBLIC_SUPABASE_URL": "https://yxotzoevqwkognurpchv.supabase.co", "SITE": undefined, "SSR": true};
var define_process_env_default = { ACLOCAL_PATH: "C:\\Program Files\\Git\\mingw64\\share\\aclocal;C:\\Program Files\\Git\\usr\\share\\aclocal", ALLUSERSPROFILE: "C:\\ProgramData", ANDROID_HOME: "C:\\Users\\rikop\\AppData\\Local\\Android\\Sdk\\platform-tools", APPDATA: "C:\\Users\\rikop\\AppData\\Roaming", ChocolateyInstall: "C:\\ProgramData\\chocolatey", ChocolateyLastPathUpdate: "133586828528994773", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_7644_RJILLYIDQIRPHLPC", COLOR: "1", COLORTERM: "truecolor", COMMONPROGRAMFILES: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP", COMSPEC: "C:\\WINDOWS\\system32\\cmd.exe", CONFIG_SITE: "C:/Program Files/Git/etc/config.site", DISPLAY: "needs-to-be-defined", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EDITOR: "C:\\WINDOWS\\notepad.exe", EXEPATH: "C:\\Program Files\\Git\\bin", GIT_ASKPASS: "c:\\Users\\rikop\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\rikop", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\rikop", HOSTNAME: "DESKTOP", INFOPATH: "C:\\Program Files\\Git\\mingw64\\local\\info;C:\\Program Files\\Git\\mingw64\\share\\info;C:\\Program Files\\Git\\usr\\local\\info;C:\\Program Files\\Git\\usr\\share\\info;C:\\Program Files\\Git\\usr\\info;C:\\Program Files\\Git\\share\\info", INIT_CWD: "E:\\projects\\Astrojs projects\\ApmcProjects", JAVA_HOME: "C:\\Program Files\\Microsoft\\jdk-17.0.10.7-hotspot\\", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\rikop\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP", MANPATH: "C:\\Program Files\\Git\\mingw64\\local\\man;C:\\Program Files\\Git\\mingw64\\share\\man;C:\\Program Files\\Git\\usr\\local\\man;C:\\Program Files\\Git\\usr\\share\\man;C:\\Program Files\\Git\\usr\\man;C:\\Program Files\\Git\\share\\man", MINGW_CHOST: "x86_64-w64-mingw32", MINGW_PACKAGE_PREFIX: "mingw-w64-x86_64", MINGW_PREFIX: "C:/Program Files/Git/mingw64", MSYS: "enable_pcon", MSYSTEM: "MINGW64", MSYSTEM_CARCH: "x86_64", MSYSTEM_CHOST: "x86_64-w64-mingw32", MSYSTEM_PREFIX: "C:/Program Files/Git/mingw64", NODE: "C:\\Program Files\\nodejs\\node.exe", NODE_ENV: "production", npm_command: "run-script", npm_config_cache: "C:\\Users\\rikop\\AppData\\Local\\npm-cache", npm_config_globalconfig: "C:\\Users\\rikop\\AppData\\Roaming\\npm\\etc\\npmrc", npm_config_global_prefix: "C:\\Users\\rikop\\AppData\\Roaming\\npm", npm_config_init_module: "C:\\Users\\rikop\\.npm-init.js", npm_config_local_prefix: "E:\\projects\\Astrojs projects\\ApmcProjects", npm_config_node_gyp: "C:\\Users\\rikop\\AppData\\Roaming\\npm\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_noproxy: "", npm_config_npm_version: "10.8.1", npm_config_prefix: "C:\\Users\\rikop\\AppData\\Roaming\\npm", npm_config_userconfig: "C:\\Users\\rikop\\.npmrc", npm_config_user_agent: "npm/10.8.1 node/v22.12.0 win32 x64 workspaces/false", npm_execpath: "C:\\Users\\rikop\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js", npm_lifecycle_event: "build", npm_lifecycle_script: "astro check && astro build", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_json: "E:\\projects\\Astrojs projects\\ApmcProjects\\package.json", npm_package_name: "apmcprojects", npm_package_version: "0.0.1", NUMBER_OF_PROCESSORS: "4", OneDrive: "C:\\Users\\rikop\\OneDrive", OneDriveConsumer: "C:\\Users\\rikop\\OneDrive", ORIGINAL_PATH: "C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\rikop\\bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\Python312\\Scripts;C:\\Python312;C:\\Program Files\\Microsoft\\jdk-17.0.10.7-hotspot\\bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Users\\rikop\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\rikop\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\rikop\\AppData\\Local\\Programs\\oh-my-posh\\bin;C:\\Users\\rikop\\AppData\\Roaming\\npm", ORIGINAL_TEMP: "C:/Users/rikop/AppData/Local/Temp", ORIGINAL_TMP: "C:/Users/rikop/AppData/Local/Temp", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", PATH: "E:\\projects\\Astrojs projects\\ApmcProjects\\node_modules\\.bin;E:\\projects\\Astrojs projects\\node_modules\\.bin;E:\\projects\\node_modules\\.bin;E:\\node_modules\\.bin;C:\\Users\\rikop\\AppData\\Roaming\\npm\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Users\\rikop\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\rikop\\bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\Python312\\Scripts;C:\\Python312;C:\\Program Files\\Microsoft\\jdk-17.0.10.7-hotspot\\bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Users\\rikop\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\rikop\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\rikop\\AppData\\Local\\Programs\\oh-my-posh\\bin;C:\\Users\\rikop\\AppData\\Roaming\\npm;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", PKG_CONFIG_PATH: "C:\\Program Files\\Git\\mingw64\\lib\\pkgconfig;C:\\Program Files\\Git\\mingw64\\share\\pkgconfig", PKG_CONFIG_SYSTEM_INCLUDE_PATH: "C:/Program Files/Git/mingw64/include", PKG_CONFIG_SYSTEM_LIBRARY_PATH: "C:/Program Files/Git/mingw64/lib", PLINK_PROTOCOL: "ssh", POSH_INSTALLER: "winget", POSH_THEMES_PATH: "C:\\Users\\rikop\\AppData\\Local\\Programs\\oh-my-posh\\themes", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 78 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "4e03", ProgramData: "C:\\ProgramData", PROGRAMFILES: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", PUBLIC_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4b3R6b2V2cXdrb2dudXJwY2h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5NTA2NjcsImV4cCI6MjA0ODUyNjY2N30.0YstzNH0Ze9b9vffIWGaWAMS82BqhDqEmC_I3kYQQHg", PUBLIC_SUPABASE_URL: "https://yxotzoevqwkognurpchv.supabase.co", PWD: "E:/projects/Astrojs projects/ApmcProjects", SESSIONNAME: "Console", SHELL: "C:\\Program Files\\Git\\usr\\bin\\bash.exe", SHLVL: "2", SSH_ASKPASS: "C:/Program Files/Git/mingw64/bin/git-askpass.exe", SYSTEMDRIVE: "C:", SYSTEMROOT: "C:\\WINDOWS", TEMP: "C:\\Users\\rikop\\AppData\\Local\\Temp", TERM: "xterm-256color", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.95.3", TMP: "C:\\Users\\rikop\\AppData\\Local\\Temp", TMPDIR: "C:\\Users\\rikop\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP", USERDOMAIN_ROAMINGPROFILE: "DESKTOP", USERNAME: "RikoPurnama", USERPROFILE: "C:\\Users\\rikop", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "c:\\Users\\rikop\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "C:\\Users\\rikop\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-ae55a78922-sock", WINDIR: "C:\\WINDOWS", ZES_ENABLE_SYSMAN: "1", _: "C:/Program Files/nodejs/node.exe" };
const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
const statusToCodeMap = Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);
class ActionError extends Error {
  type = "AstroActionError";
  code = "INTERNAL_SERVER_ERROR";
  status = 500;
  constructor(params) {
    super(params.message);
    this.code = params.code;
    this.status = ActionError.codeToStatus(params.code);
    if (params.stack) {
      this.stack = params.stack;
    }
  }
  static codeToStatus(code) {
    return codeToStatusMap[code];
  }
  static statusToCode(status) {
    return statusToCodeMap[status] ?? "INTERNAL_SERVER_ERROR";
  }
  static fromJson(body) {
    if (isInputError(body)) {
      return new ActionInputError(body.issues);
    }
    if (isActionError(body)) {
      return new ActionError(body);
    }
    return new ActionError({
      code: "INTERNAL_SERVER_ERROR"
    });
  }
}
function isActionError(error) {
  return typeof error === "object" && error != null && "type" in error && error.type === "AstroActionError";
}
function isInputError(error) {
  return typeof error === "object" && error != null && "type" in error && error.type === "AstroActionInputError" && "issues" in error && Array.isArray(error.issues);
}
class ActionInputError extends ActionError {
  type = "AstroActionInputError";
  // We don't expose all ZodError properties.
  // Not all properties will serialize from server to client,
  // and we don't want to import the full ZodError object into the client.
  issues;
  fields;
  constructor(issues) {
    super({
      message: `Failed to validate: ${JSON.stringify(issues, null, 2)}`,
      code: "BAD_REQUEST"
    });
    this.issues = issues;
    this.fields = {};
    for (const issue of issues) {
      if (issue.path.length > 0) {
        const key = issue.path[0].toString();
        this.fields[key] ??= [];
        this.fields[key]?.push(issue.message);
      }
    }
  }
}
function getActionQueryString(name) {
  const searchParams = new URLSearchParams({ [ACTION_QUERY_PARAMS.actionName]: name });
  return `?${searchParams.toString()}`;
}
function deserializeActionResult(res) {
  if (res.type === "error") {
    let json;
    try {
      json = JSON.parse(res.body);
    } catch {
      return {
        data: void 0,
        error: new ActionError({
          message: res.body,
          code: "INTERNAL_SERVER_ERROR"
        })
      };
    }
    if (Object.assign(__vite_import_meta_env__, { OS: define_process_env_default.OS, _: define_process_env_default._ })?.PROD) {
      return { error: ActionError.fromJson(json), data: void 0 };
    } else {
      const error = ActionError.fromJson(json);
      error.stack = actionResultErrorStack.get();
      return {
        error,
        data: void 0
      };
    }
  }
  if (res.type === "empty") {
    return { data: void 0, error: void 0 };
  }
  return {
    data: parse(res.body, {
      URL: (href) => new URL(href)
    }),
    error: void 0
  };
}
const actionResultErrorStack = /* @__PURE__ */ function actionResultErrorStackFn() {
  let errorStack;
  return {
    set(stack) {
      errorStack = stack;
    },
    get() {
      return errorStack;
    }
  };
}();

function template({
  title,
  pathname,
  statusCode = 404,
  tabTitle,
  body
}) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}

const DEFAULT_404_ROUTE = {
  component: DEFAULT_404_COMPONENT,
  generate: () => "",
  params: [],
  pattern: /\/404/,
  prerender: false,
  pathname: "/404",
  segments: [[{ content: "404", dynamic: false, spread: false }]],
  type: "page",
  route: "/404",
  fallbackRoutes: [],
  isIndex: false,
  origin: "internal"
};
function ensure404Route(manifest) {
  if (!manifest.routes.some((route) => route.route === "/404")) {
    manifest.routes.push(DEFAULT_404_ROUTE);
  }
  return manifest;
}
async function default404Page({ pathname }) {
  return new Response(
    template({
      statusCode: 404,
      title: "Not found",
      tabTitle: "404: Not Found",
      pathname
    }),
    { status: 404, headers: { "Content-Type": "text/html" } }
  );
}
default404Page.isAstroComponentFactory = true;
const default404Instance = {
  default: default404Page
};

export { DEFAULT_404_ROUTE as D, NOOP_MIDDLEWARE_FN as N, default404Instance as a, deserializeActionResult as d, ensure404Route as e, getActionQueryString as g };
