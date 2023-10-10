var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ZMFWD3PQ.css";

// app/root.tsx
import { Link } from "@remix-run/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { Fragment, jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: /* @__PURE__ */ jsxDEV2(Layout, { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxDEV2(Fragment, { children: [
    /* @__PURE__ */ jsxDEV2("nav", { className: "px-10 pt-5", children: /* @__PURE__ */ jsxDEV2(Link, { to: "/", prefetch: "intent", className: "text-2xl font-semibold", children: [
      "Move",
      /* @__PURE__ */ jsxDEV2("span", { className: "text-teal-500", children: "DB" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("main", { children }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/movie.$id.comments.tsx
var movie_id_comments_exports = {};
__export(movie_id_comments_exports, {
  action: () => action,
  default: () => Comments,
  loader: () => loader
});
import { Form, useLoaderData, useNavigation, useParams } from "@remix-run/react";
import { json } from "@remix-run/node";

// app/utils/db.server.ts
import { PrismaClient } from "@prisma/client";
var db;
process.env.NOVE_ENV === "production" ? db = new PrismaClient() : (global.__db__ || (global.__db__ = new PrismaClient()), db = global.__db__, db.$connect());

// app/routes/movie.$id.comments.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
async function loader({ params }) {
  let data = await db.comment.findMany({
    where: {
      movieId: params.id
    },
    orderBy: {
      createAt: "desc"
    }
  });
  return json({ data });
}
async function action({ request }) {
  let formData = await request.formData(), data = await db.comment.create({
    data: {
      message: formData.get("comment"),
      movieId: formData.get("id")
    }
  });
  return json({ data });
}
function Comments() {
  let { id } = useParams(), navigation = useNavigation(), { data } = useLoaderData();
  return /* @__PURE__ */ jsxDEV3("div", { className: "rounded-lg border p-3", children: [
    /* @__PURE__ */ jsxDEV3("h1", { className: "text-xl font-semibold mb-5", children: "Your Opinion" }, void 0, !1, {
      fileName: "app/routes/movie.$id.comments.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { children: [
      /* @__PURE__ */ jsxDEV3(Form, { method: "POST", children: [
        /* @__PURE__ */ jsxDEV3("textarea", { name: "comment", className: "w-full border border-teal-500 rounded-lg p-2" }, void 0, !1, {
          fileName: "app/routes/movie.$id.comments.tsx",
          lineNumber: 43,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV3("input", { type: "hidden", name: "id", value: id }, void 0, !1, {
          fileName: "app/routes/movie.$id.comments.tsx",
          lineNumber: 45,
          columnNumber: 21
        }, this),
        navigation.state === "submitting" ? /* @__PURE__ */ jsxDEV3(
          "button",
          {
            type: "button",
            disabled: !0,
            className: "bg-teal-500 px-4 py-2 rounded-lg text-white",
            children: "Loading..."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/movie.$id.comments.tsx",
            lineNumber: 47,
            columnNumber: 25
          },
          this
        ) : /* @__PURE__ */ jsxDEV3("button", { type: "submit", className: "bg-teal-500 px-4 py-2 rounded-lg text-white", children: "Add Comment" }, void 0, !1, {
          fileName: "app/routes/movie.$id.comments.tsx",
          lineNumber: 55,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/movie.$id.comments.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "mt-5 flex flex-col gap-y-3", children: data.map((post) => /* @__PURE__ */ jsxDEV3("div", { children: /* @__PURE__ */ jsxDEV3("p", { children: post.message }, void 0, !1, {
        fileName: "app/routes/movie.$id.comments.tsx",
        lineNumber: 63,
        columnNumber: 25
      }, this) }, post.id, !1, {
        fileName: "app/routes/movie.$id.comments.tsx",
        lineNumber: 62,
        columnNumber: 25
      }, this)) }, void 0, !1, {
        fileName: "app/routes/movie.$id.comments.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/movie.$id.comments.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/movie.$id.comments.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this);
}

// app/routes/movie.$id.tsx
var movie_id_exports = {};
__export(movie_id_exports, {
  default: () => MovieId,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";
import { Link as Link2, Outlet as Outlet2, useLoaderData as useLoaderData2 } from "@remix-run/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
async function loader2({ params }) {
  let url = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGNhNWRhODc0OTkyYmQ2ZjhjOTIzZGUwNDlmZGQyMiIsInN1YiI6IjY1MjQzYWUxZWE4NGM3MDE0ZTAxYTgyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Hp3Tz8AoS_nzCzItX8hOudV9MuKp8vdidGWhi08MY4"
      }
    }
  );
  return json2(await url.json());
}
function MovieId() {
  let data = useLoaderData2();
  return console.log(data), /* @__PURE__ */ jsxDEV4("div", { className: "min-h-screen p-10", children: [
    /* @__PURE__ */ jsxDEV4(
      "img",
      {
        src: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`,
        alt: "",
        className: "h-[40vh] object-cover w-full rounded-lg"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/movie.$id.tsx",
        lineNumber: 24,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV4("h1", { className: "text-4xl font-bold text-center pt-5", children: data.title }, void 0, !1, {
      fileName: "app/routes/movie.$id.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "flex gap-x-10 mt-10", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "w-1/2 font-medium", children: [
        /* @__PURE__ */ jsxDEV4("h1", { children: [
          /* @__PURE__ */ jsxDEV4("span", { className: "underline", children: "Homepage:" }, void 0, !1, {
            fileName: "app/routes/movie.$id.tsx",
            lineNumber: 34,
            columnNumber: 25
          }, this),
          " ",
          " ",
          /* @__PURE__ */ jsxDEV4(Link2, { to: data.homepage, target: "_blank", children: "Link" }, void 0, !1, {
            fileName: "app/routes/movie.$id.tsx",
            lineNumber: 35,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/movie.$id.tsx",
          lineNumber: 33,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV4("h1", { children: [
          /* @__PURE__ */ jsxDEV4("span", { className: "underline", children: "Original Language:" }, void 0, !1, {
            fileName: "app/routes/movie.$id.tsx",
            lineNumber: 41,
            columnNumber: 25
          }, this),
          " ",
          data.original_language
        ] }, void 0, !0, {
          fileName: "app/routes/movie.$id.tsx",
          lineNumber: 40,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { children: [
          /* @__PURE__ */ jsxDEV4("span", { className: "underline", children: "Overview:" }, void 0, !1, {
            fileName: "app/routes/movie.$id.tsx",
            lineNumber: 45,
            columnNumber: 25
          }, this),
          " ",
          data.overview
        ] }, void 0, !0, {
          fileName: "app/routes/movie.$id.tsx",
          lineNumber: 44,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { children: [
          /* @__PURE__ */ jsxDEV4("span", { className: "underline", children: "Release Date:" }, void 0, !1, {
            fileName: "app/routes/movie.$id.tsx",
            lineNumber: 47,
            columnNumber: 24
          }, this),
          " ",
          data.release_date
        ] }, void 0, !0, {
          fileName: "app/routes/movie.$id.tsx",
          lineNumber: 47,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/movie.$id.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "w-1/2 ", children: /* @__PURE__ */ jsxDEV4(Outlet2, {}, void 0, !1, {
        fileName: "app/routes/movie.$id.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/movie.$id.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/movie.$id.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/movie.$id.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader3,
  meta: () => meta
});
import { json as json3 } from "@remix-run/node";
import { Link as Link3 } from "@remix-run/react";
import { useLoaderData as useLoaderData3 } from "@remix-run/react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Remix tutorial" },
  { name: "description", content: "Welcome to Remix!!!" }
];
async function loader3({}) {
  let url = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    {
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGNhNWRhODc0OTkyYmQ2ZjhjOTIzZGUwNDlmZGQyMiIsInN1YiI6IjY1MjQzYWUxZWE4NGM3MDE0ZTAxYTgyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Hp3Tz8AoS_nzCzItX8hOudV9MuKp8vdidGWhi08MY4"
      }
    }
  );
  return json3(await url.json());
}
function Index() {
  let data = useLoaderData3();
  return /* @__PURE__ */ jsxDEV5("div", { className: "bg-white py-6 sm:py-8 lg:py-12", children: /* @__PURE__ */ jsxDEV5("div", { className: "mx-auto max-w-screen-2xl px-4 md:px-8", children: [
    /* @__PURE__ */ jsxDEV5("div", { className: "mb-10 md:mb-16", children: /* @__PURE__ */ jsxDEV5("h2", { className: "mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl", children: "Top Trending Movies" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8", children: data.results.map((movie) => /* @__PURE__ */ jsxDEV5("div", { className: "flex flex-col overflow-hidden rounded-lg border bg-white", children: [
      /* @__PURE__ */ jsxDEV5(Link3, { prefetch: "intent", className: "group relative block h-48 overflow-hidden bg-gray-100 md:h-64", to: `movie/${movie.id}/comments`, children: /* @__PURE__ */ jsxDEV5(
        "img",
        {
          src: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
          alt: "",
          className: "absolute inset-0 h-full w-full object-cover object-center transition duration-288 group-hover:scale-110"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 39,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "flex flex-1 flex-col p-4 sm:p-6", children: [
        /* @__PURE__ */ jsxDEV5("h2", { className: "mb-2 text-lg font-semibold text-gray-800", children: /* @__PURE__ */ jsxDEV5(Link3, { to: "movie/${movie.id}/comments", prefetch: "intent", className: "transition duration-100 hover:text-indigo-500 active:text-indigo-600", children: movie.title }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV5("p", { className: "text-gray-500 line-clamp-3", children: movie.overview }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 51,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 28,
    columnNumber: 4
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-EUFJB4HS.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-7V5SOTDA.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-4MR4CUBV.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RW2DO7R4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-WKKT3O45.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/movie.$id": { id: "routes/movie.$id", parentId: "root", path: "movie/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/movie.$id-WZVKVFW7.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/movie.$id.comments": { id: "routes/movie.$id.comments", parentId: "routes/movie.$id", path: "comments", index: void 0, caseSensitive: void 0, module: "/build/routes/movie.$id.comments-O732MMUP.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 } }, version: "13b08c61", hmr: { runtime: "/build/_shared\\chunk-4MR4CUBV.js", timestamp: 1696892713063 }, url: "/build/manifest-13B08C61.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/movie.$id.comments": {
    id: "routes/movie.$id.comments",
    parentId: "routes/movie.$id",
    path: "comments",
    index: void 0,
    caseSensitive: void 0,
    module: movie_id_comments_exports
  },
  "routes/movie.$id": {
    id: "routes/movie.$id",
    parentId: "root",
    path: "movie/:id",
    index: void 0,
    caseSensitive: void 0,
    module: movie_id_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
