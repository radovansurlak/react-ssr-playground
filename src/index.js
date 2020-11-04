const http = require("http");
const ReactDOMServer = require("react-dom/server");
const React = require("react");

require("babel-register")({
  presets: ["react"]
});

const { App } = require("./Component.jsx");

const html = ReactDOMServer.renderToString(
  React.createElement(App, { name: "RADOVAN" })
);

http
  .createServer(function (req, res) {
    res.write(`
    <div id="root">${html}</div>
    <script
      crossorigin
      src="https://unpkg.com/react@17/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    ></script>
    
    <script>
      "use strict";
    
      function _slicedToArray(arr, i) {
        return (
          _arrayWithHoles(arr) ||
          _iterableToArrayLimit(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          _nonIterableRest()
        );
      }
    
      function _nonIterableRest() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.In order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
    
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
    
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    
      function _iterableToArrayLimit(arr, i) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
          for (
            var _i = arr[Symbol.iterator](), _s;
            !(_n = (_s = _i.next()).done);
            _n = true
          ) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }
        return _arr;
      }
    
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
    
      function App() {
        var _React$useState = React.useState(0),
          _React$useState2 = _slicedToArray(_React$useState, 2),
          count = _React$useState2[0],
          setCount = _React$useState2[1];
    
        function handleClick() {
          setCount(count + 1);
        }
    
        return /*#__PURE__*/ React.createElement(
          "div",
          null,
          "Hello ",
          count,
          " from react ",
          /*#__PURE__*/ React.createElement(
            "button",
            {
              onClick: handleClick,
            },
            "button"
          )
        );
      }

      setTimeout(() => {
        ReactDOM.hydrate(React.createElement(App), document.getElementById("root"));
        alert('ready')
      },5000)
    
    </script>
    
      `);
    res.end();
  })
  .listen(8080);
