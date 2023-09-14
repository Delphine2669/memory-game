(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 8684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5283);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2206);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3847);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8789)), "/Users/d/Desktop/memory-game/memory-game/src/app/page.js"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2793)), "/Users/d/Desktop/memory-game/memory-game/src/app/layout.js"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3939, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["/Users/d/Desktop/memory-game/memory-game/src/app/page.js"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 8908:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2840, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7801, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1735, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7458, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2733, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1010, 23))

/***/ }),

/***/ 7461:
/***/ (() => {



/***/ }),

/***/ 1016:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8826))

/***/ }),

/***/ 8826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/noop-head.js
var noop_head = __webpack_require__(9001);
var noop_head_default = /*#__PURE__*/__webpack_require__.n(noop_head);
;// CONCATENATED MODULE: ./public/Items.json
const Items_namespaceObject = {};
// EXTERNAL MODULE: ./src/components/Card.css
var components_Card = __webpack_require__(5924);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Card.jsx
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}





const Card_Card = ()=>{
    const { 0: count, 1: setCount } = useState(0);
    const { 0: cards, 1: setCards } = useState([]);
    const { 0: flippedCards, 1: setFlippedCards } = useState({
        items
    });
    const handleCardClick = (clickedCard)=>{
        if (!clickedCard.isFlipped && flippedCards.length < 2) {
            const updatedCards = cards.map((card1)=>card1.id === clickedCards.id ? _objectSpread(_objectSpread({}, card1), {}, {
                    isFlipped: true
                }) : card1);
            setCards(updatedCards);
            setFlippedCards([
                ...flippedCards,
                card
            ]);
            if (flippedCards.length === 1) {
                const [firstCard] = flippedCards;
                if (firstCard.src === card.src) {
                    setFlippedCards([]);
                } else {
                    setTimeout(()=>{
                        const resetCards = cards.map((c)=>card.isFlipped ? _objectSpread(_objectSpread({}, card), {}, {
                                isFlipped: false
                            }) : c);
                        setCards(resetCards);
                        setFlippedCards([]);
                    }, 1000);
                }
            }
        }
    };
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "score-counter",
                children: count
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "card-contain",
                children: cards.map((card1)=>/*#__PURE__*/ _jsx("div", {
                        className: `card ${card1.isFlipped ? "flipped" : ""}`,
                        onClick: ()=>handleCardClick(card1),
                        children: card1.isFlipped ? /*#__PURE__*/ _jsxs("div", {
                            className: "card-body",
                            children: [
                                /*#__PURE__*/ _jsx("h5", {
                                    className: "card-title",
                                    children: card1.title
                                }),
                                /*#__PURE__*/ _jsx("img", {
                                    src: card1.src,
                                    alt: card1.title
                                })
                            ]
                        }) : /*#__PURE__*/ _jsx("div", {
                            className: "card-back"
                        })
                    }, card1.id))
            })
        ]
    });
};
/* harmony default export */ const src_components_Card = ((/* unused pure expression or super */ null && (Card_Card)));

;// CONCATENATED MODULE: ./src/components/Grid.jsx


function Grid() {
    return /*#__PURE__*/ _jsx("div", {
        className: "grid-container",
        children: /*#__PURE__*/ _jsx(Card, {})
    });
}
/* harmony default export */ const components_Grid = ((/* unused pure expression or super */ null && (Grid)));

// EXTERNAL MODULE: ./src/components/Game.css
var Game = __webpack_require__(8800);
;// CONCATENATED MODULE: ./src/components/Game.jsx





function Game_Game() {
    const BLANK_CARD = "assets/wall.jpeg";
    const images = [
        "assets/Arya.png",
        "assets/cersei.png",
        "assets/daenerys.png",
        "assets/johnSnow.png",
        "assets/khaldrogo.png",
        "assets/sansa.png",
        "assets/tyrion.png",
        "assets/brienne.png"
    ];
    const { 0: points, 1: setPoints } = (0,react_.useState)(0);
    const { 0: chosenCards, 1: setChosenCards } = (0,react_.useState)([]);
    const { 0: imagesArray, 1: setImagesArray } = (0,react_.useState)([]);
    const { 0: chosenCardsIds, 1: setChosenCardsIds } = (0,react_.useState)([]);
    const { 0: openCards, 1: setOpenCards } = (0,react_.useState)([]);
    function createCardBoard() {
        const imagesGenerated = images?.concat(...images);
        console.log(imagesGenerated);
        const shuffledArray = shuffleArray(imagesGenerated);
        setImagesArray(shuffledArray);
    }
    function flipImage(image, index) {
        console.log(image, index);
        if (chosenCardsIds?.length === 1 && chosenCardsIds[0] === index) {
            return;
        }
        if (chosenCards?.length < 2) {
            setChosenCards((Chosen)=>chosenCards?.concat(image));
            setChosenCardsIds((chosenCardsIds)=>chosenCardsIds?.concat(index));
            if (chosenCards?.length === 1) {
                if (chosenCards[0] === image) {
                    setPoints((points)=>points + 2);
                    setOpenCards((openCards)=>openCards?.concat([
                            chosenCards[0],
                            image
                        ]));
                }
                setTimeout(()=>{
                    setChosenCardsIds([]);
                    setChosenCards([]);
                }, 700);
            }
        }
    }
    function isCardChosen(image, index) {
        return chosenCardsIds?.includes(index) || openCards?.includes(image);
    }
    function shuffleArray(array) {
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [
                array[j],
                array[i]
            ];
        }
        console.log(array);
        return array;
    }
    function startOver() {
        setChosenCardsIds([]);
        setChosenCards([]);
        setPoints(0);
        setOpenCards([]);
    }
    (0,react_.useEffect)(()=>{
        createCardBoard();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card-header",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                        className: "counter",
                        children: [
                            "Points:",
                            points
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: startOver,
                        className: "button-start-over",
                        children: "Start over"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "card-container",
                children: imagesArray?.map((image, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-4 col-lg-2",
                        onClick: ()=>flipImage(image, index),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: isCardChosen(image, index) ? image : BLANK_CARD,
                            alt: "",
                            className: `img-fluid img-fixed`
                        })
                    }, index);
                })
            })
        ]
    });
}
/* harmony default export */ const components_Game = (Game_Game);

;// CONCATENATED MODULE: ./src/app/MyContext.js
// MyContext.js

const MyContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext()));
const useMyContext = ()=>{
    return useContext(MyContext);
};
/* harmony default export */ const app_MyContext = ((/* unused pure expression or super */ null && (MyContext)));

// EXTERNAL MODULE: ./src/app/page.css
var page = __webpack_require__(8225);
;// CONCATENATED MODULE: ./public/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.18fc5df6.png","height":376,"width":498,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAATlBMVEXxxEDxxD/xwz/wwz/xxEDxwz/wwz/xxD/xxEDxxEDxxEDxwz/xxEDxxEDxxEDwwz/xxEDxxEDxxEDxxEDxxEDxxEDxxEHxxEHxxEHxxEGsrxGYAAAAGnRSTlMAAAAAAQEBAgMEDRsfOkNNUVJ3iY6U4urw8o4gDewAAAA1SURBVHjaDcbHAcAgDANAxQLS6XX/RfHrDnQkxRFW3lx+nriRZq/KBb9G0xg8MXxioBPCHhsqzAGDNucRxAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/app/page.js
/* __next_internal_client_entry_do_not_use__ default auto */ 









function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((noop_head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon-32x32.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon-16x16.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "192x192",
                        href: "/android-chrome-192x192.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "512x512",
                        href: "/android-chrome-512x512.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/svg+xml",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Memory est une application react nextJs. C'est un jeu de memoire. Vous devez retrouver les 2 cartes identiques, parmi un jeu de 16.Selectionnez les. Si vous trouvez un jeu identique, vous gagnez un point, sinon vous devez recommencer. La partie s'arrete lorsque vous avez decouvert toutes les cartes. A vous de jouer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: " Waheb.C Delphine.T"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "Memory Game, faites travailler votre memoire en vous amusant"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: "https://gradient-generator.delphine-t-2669.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: "Memory est une application react nextJs. C'est un jeu de memoire. Vous devez retrouver les 2 cartes identiques, parmi un jeu de 16.Selectionnez les. Si vous trouvez un jeu identique, vous gagnez un point, sinon vous devez recommencer. La partie s'arrete lorsque vous avez decouvert toutes les cartes. A vous de jouer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "https://github.com/Delphine2669/memory-game/raw/dev/memory-game/public/assets/MemoryScreen.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image:width",
                        content: "1200"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image:height",
                        content: "630"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:domain",
                        content: "delphine-t-2669.com/"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:url",
                        content: "https://gradient-generator.delphine-t-2669.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:title",
                        content: "Memory Game, faites travailler votre memoire en vous amusant"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:description",
                        content: "Memory est une application react nextJs. C'est un jeu de memoire. Vous devez retrouver les 2 cartes identiques, parmi un jeu de 16.Selectionnez les. Si vous trouvez un jeu identique, vous gagnez un point, sinon vous devez recommencer. La partie s'arrete lorsque vous avez decouvert toutes les cartes. A vous de jouer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image",
                        content: "https://github.com/Delphine2669/memory-game/raw/dev/memory-game/public/assets/MemoryScreen.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Memory Game"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "Header",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/logo.png",
                                alt: "",
                                className: "logo"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "MEMORY GAME "
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Game, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1871);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
 //import { Inter } from 'next/font/google'
//const inter = Inter({ subsets: ["latin"] });

const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("body", {
            children: children
        })
    });
}


/***/ }),

/***/ 8789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9372);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/d/Desktop/memory-game/memory-game/src/app/page.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 1871:
/***/ (() => {



/***/ }),

/***/ 8225:
/***/ (() => {



/***/ }),

/***/ 5924:
/***/ (() => {



/***/ }),

/***/ 8800:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [959], () => (__webpack_exec__(8684)));
module.exports = __webpack_exports__;

})();