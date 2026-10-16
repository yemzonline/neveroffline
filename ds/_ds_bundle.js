/* @ds-bundle: {"format":4,"namespace":"NeverOfflineDesignSystem_99da47","components":[{"name":"ContactSheet","sourcePath":"components/brand/ContactSheet.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Marquee","sourcePath":"components/brand/Marquee.jsx"},{"name":"MetaLine","sourcePath":"components/brand/MetaLine.jsx"},{"name":"RecordsLockup","sourcePath":"components/brand/RecordsLockup.jsx"},{"name":"StatusPill","sourcePath":"components/brand/StatusPill.jsx"},{"name":"SystemStatus","sourcePath":"components/brand/SystemStatus.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"PixelIcon","sourcePath":"components/core/PixelIcon.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"ChromeTitle","sourcePath":"components/print/ChromeTitle.jsx"},{"name":"ScrawlMark","sourcePath":"components/print/ScrawlMark.jsx"},{"name":"Stamp","sourcePath":"components/print/Stamp.jsx"}],"sourceHashes":{"components/brand/ContactSheet.jsx":"6b631ec0dc37","components/brand/Logo.jsx":"a03d3b02b1a6","components/brand/Marquee.jsx":"715d92d48a5a","components/brand/MetaLine.jsx":"fc5fa83b245d","components/brand/RecordsLockup.jsx":"8af933d02ea5","components/brand/StatusPill.jsx":"62a99936b2c1","components/brand/SystemStatus.jsx":"255a52e751c0","components/core/Badge.jsx":"0cc90672a00c","components/core/Button.jsx":"54d199906028","components/core/Card.jsx":"f9a65e166c77","components/core/IconButton.jsx":"40c1b118ec89","components/core/PixelIcon.jsx":"4d09403aabf4","components/core/Tag.jsx":"dafba200c68d","components/feedback/Dialog.jsx":"a8891631689f","components/feedback/Toast.jsx":"0d946a66ea5b","components/feedback/Tooltip.jsx":"c8856d9e3648","components/forms/Checkbox.jsx":"6ee22f0651bd","components/forms/Input.jsx":"fffbe84a472d","components/forms/Radio.jsx":"3299a8a51e80","components/forms/Select.jsx":"659cdc368a55","components/forms/Switch.jsx":"968cccad14a7","components/navigation/NavBar.jsx":"9b04005626a0","components/navigation/Tabs.jsx":"e7eee1a61dfa","components/print/ChromeTitle.jsx":"1fadae5e5e5e","components/print/ScrawlMark.jsx":"f137e205c45a","components/print/Stamp.jsx":"ca2c9e2be8d4","site/data.js":"73c9353e587c","site/site.js":"dfa5869a0638","ui_kits/stream_app/LineupScreen.jsx":"525b7f5156e1","ui_kits/stream_app/LiveScreen.jsx":"faea2b79d839","ui_kits/stream_app/SettingsScreen.jsx":"8ee10e741059","ui_kits/stream_app/SignIn.jsx":"1ce63065328a","ui_kits/stream_app/TicketsScreen.jsx":"cae4eb6b6692","ui_kits/stream_app/shared.jsx":"4cb487b68817","ui_kits/website/Checkout.jsx":"c082ab03085a","ui_kits/website/EventDetail.jsx":"6a9b8fcdee52","ui_kits/website/Home.jsx":"d1b1b29c73d3","ui_kits/website/NotFound.jsx":"a3a69b131dbb","ui_kits/website/StreamPage.jsx":"89740d4af0ac","ui_kits/website/shared.jsx":"96e6e0334965"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NeverOfflineDesignSystem_99da47 = window.NeverOfflineDesignSystem_99da47 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ContactSheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ContactSheet({
  cells = [],
  columns = '2fr 1fr 1fr',
  gap = 3,
  bracket = 'violet',
  height = 280,
  style,
  ...rest
}) {
  const b = 'var(--neon-' + bracket + ')';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: 'var(--border-loud) solid ' + b,
      borderBottom: 'var(--border-loud) solid ' + b,
      padding: gap + 'px 0',
      display: 'grid',
      gridTemplateColumns: columns,
      gap: gap + 'px',
      ...style
    }
  }, rest), cells.map((cell, i) => /*#__PURE__*/React.createElement("figure", {
    key: i,
    style: {
      margin: 0,
      position: 'relative',
      height,
      overflow: 'hidden',
      background: 'var(--steel-400)',
      backgroundImage: 'var(--texture-scanline)',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, cell.src && /*#__PURE__*/React.createElement("img", {
    src: cell.src,
    alt: cell.alt || '',
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), cell.node, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-protect)',
      opacity: .85
    }
  }), cell.caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'relative',
      padding: '10px 11px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: cell.tone ? 'var(--neon-' + cell.tone + ')' : 'var(--white)'
    }
  }, cell.caption))));
}
Object.assign(__ds_scope, { ContactSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ContactSheet.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ART = {
  dark: 'logo-white-on-black.png',
  light: 'logo-black-on-white.png',
  icon: 'logo-icon-dark.png'
};
function Logo({
  variant = 'dark',
  height = 48,
  basePath = '../../assets',
  clearSpace = false,
  style,
  ...rest
}) {
  const src = basePath.replace(/\/$/, '') + '/' + (ART[variant] || ART.dark);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      padding: clearSpace ? String(Math.round(Number(height) * 0.34)) + 'px' : 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Never Offline",
    style: {
      height: typeof height === 'number' ? height + 'px' : height,
      width: 'auto'
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Marquee({
  items = [],
  tone = 'pink',
  speed = 22,
  height = 36,
  separator = '·',
  reverse = false,
  style,
  ...rest
}) {
  const line = items.join('  ' + separator + '  ');
  const content = (line + '  ' + separator + '  ').repeat(4);
  const c = 'var(--neon-' + tone + ')';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflow: 'hidden',
      height,
      display: 'flex',
      alignItems: 'center',
      background: 'var(--ink-000)',
      borderTop: '1px solid var(--line-hairline)',
      borderBottom: '1px solid var(--line-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      whiteSpace: 'nowrap',
      willChange: 'transform',
      animation: 'nof-marquee ' + speed + 's linear infinite' + (reverse ? ' reverse' : '')
    }
  }, [0, 1].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-md)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: c,
      paddingRight: '0'
    }
  }, content))));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/brand/MetaLine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MetaLine({
  items = [],
  tone,
  size = 'md',
  separator = '·',
  wide = false,
  style,
  ...rest
}) {
  const fs = size === 'sm' ? 'var(--mono-sm)' : size === 'lg' ? 'var(--mono-lg)' : 'var(--mono-md)';
  const col = tone ? 'var(--neon-' + tone + ')' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '0 8px',
      fontFamily: 'var(--font-mono)',
      fontSize: fs,
      letterSpacing: wide ? 'var(--track-wide)' : 'var(--track-label)',
      textTransform: 'uppercase',
      color: col,
      lineHeight: 1.6,
      ...style
    }
  }, rest), items.filter(Boolean).map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      opacity: .55
    }
  }, separator), /*#__PURE__*/React.createElement("span", null, it))));
}
Object.assign(__ds_scope, { MetaLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/MetaLine.jsx", error: String((e && e.message) || e) }); }

// components/brand/RecordsLockup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Composed from the SUPPLIED wordmark art plus type — no new mark has been drawn.
   See readme.md > Never Offline Records. */
function RecordsLockup({
  variant = 'dark',
  height = 48,
  basePath = '../../assets',
  division = 'Records',
  orientation = 'stacked',
  tone,
  style,
  ...rest
}) {
  const art = variant === 'light' ? 'logo-black-on-white.png' : 'logo-white-on-black.png';
  const src = basePath.replace(/\/$/, '') + '/' + art;
  const h = typeof height === 'number' ? height : parseInt(height, 10) || 48;
  const ink = tone ? 'var(--neon-' + tone + ')' : variant === 'light' ? 'var(--concrete-500)' : 'var(--concrete-400)';
  const label = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: Math.max(9, Math.round(h * 0.30)) + 'px',
      letterSpacing: orientation === 'stacked' ? '.38em' : '.24em',
      textTransform: 'uppercase',
      color: ink,
      lineHeight: 1,
      paddingLeft: orientation === 'stacked' ? '2px' : 0,
      whiteSpace: 'nowrap'
    }
  }, division);
  if (orientation === 'inline') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: Math.round(h * 0.30) + 'px',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "Never Offline",
      style: {
        height: h + 'px',
        width: 'auto'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: '1px',
        height: Math.round(h * 0.72) + 'px',
        background: 'var(--line-strong)'
      }
    }), label);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: Math.round(h * 0.22) + 'px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Never Offline",
    style: {
      height: h + 'px',
      width: 'auto'
    }
  }), label);
}
Object.assign(__ds_scope, { RecordsLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/RecordsLockup.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MAP = {
  live: {
    c: 'var(--status-live)',
    label: 'Live',
    pulse: true
  },
  online: {
    c: 'var(--status-online)',
    label: 'Online',
    pulse: false
  },
  queued: {
    c: 'var(--status-queued)',
    label: 'Queued',
    pulse: false
  },
  offline: {
    c: 'var(--status-offline)',
    label: 'Offline',
    pulse: false
  },
  soldout: {
    c: 'var(--status-error)',
    label: 'Sold out / 404',
    pulse: false
  },
  error: {
    c: 'var(--status-error)',
    label: 'Error 404',
    pulse: false
  }
};
function StatusPill({
  status = 'live',
  label,
  detail,
  glow = false,
  size = 'md',
  style,
  ...rest
}) {
  const s = MAP[status] || MAP.live;
  const h = size === 'sm' ? '22px' : '28px';
  const fs = size === 'sm' ? 'var(--mono-xs)' : 'var(--mono-sm)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      height: h,
      padding: '0 11px',
      borderRadius: 'var(--radius-pill)',
      background: 'color-mix(in srgb,' + s.c + ' 14%,var(--ink-100))',
      border: 'var(--border-hairline) solid ' + s.c,
      boxShadow: glow ? '0 0 16px -4px ' + s.c : 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: fs,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: s.c,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 7,
      height: 7,
      borderRadius: 'var(--radius-pill)',
      background: s.c,
      boxShadow: '0 0 8px ' + s.c,
      animation: s.pulse ? 'nof-pulse 1.6s var(--ease-standard) infinite' : 'none'
    }
  }), label || s.label, detail && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7,
      fontWeight: 400
    }
  }, detail));
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/brand/SystemStatus.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULTS = [['error', '404'], ['status', 'Not found'], ['location', 'Warehouse / MCR'], ['date', '10.10.2026'], ['sound', 'African dance music'], ['signal', 'Offline'], ['crowd', 'Present']];
function SystemStatus({
  rows,
  title = '> System status',
  tone = 'pink',
  size = 'md',
  framed = true,
  style,
  ...rest
}) {
  const data = rows && rows.length ? rows : DEFAULTS;
  const c = 'var(--neon-' + tone + ')';
  const fs = size === 'sm' ? 'var(--mono-sm)' : size === 'lg' ? 'var(--mono-lg)' : 'var(--mono-md)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: fs,
      letterSpacing: 'var(--track-mono)',
      textTransform: 'uppercase',
      color: 'var(--text-body)',
      border: framed ? 'var(--border-hairline) solid ' + c : 'none',
      background: framed ? 'rgba(0,0,0,.42)' : 'transparent',
      padding: framed ? 'var(--space-5)' : 0,
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      color: c,
      marginBottom: 'var(--space-4)',
      letterSpacing: 'var(--track-label)',
      fontWeight: 'var(--weight-bold)'
    }
  }, title), /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: 'collapse',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("tbody", null, data.map(([k, v], i) => {
    const key = Array.isArray([k, v]) ? k : k,
      val = v;
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '3px 0',
        verticalAlign: 'top',
        color: 'var(--text-faint)',
        whiteSpace: 'nowrap',
        width: '1%'
      }
    }, String(key), ":"), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '3px 0 3px var(--space-4)',
        color: i === 0 ? c : 'var(--text-strong)',
        fontWeight: i === 0 ? 'var(--weight-bold)' : 400
      }
    }, val));
  }))));
}
Object.assign(__ds_scope, { SystemStatus });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SystemStatus.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  pink: 'var(--neon-pink)',
  cyan: 'var(--neon-cyan)',
  lime: 'var(--neon-lime)',
  violet: 'var(--neon-violet)',
  amber: 'var(--neon-amber)',
  neutral: 'var(--concrete-400)'
};
function Badge({
  tone = 'pink',
  variant = 'outline',
  size = 'md',
  children,
  style,
  ...rest
}) {
  const c = TONES[tone] || TONES.pink;
  const pad = size === 'sm' ? '2px 6px' : '4px 9px';
  const fs = size === 'sm' ? 'var(--mono-xs)' : 'var(--mono-sm)';
  const look = variant === 'solid' ? {
    background: c,
    color: 'var(--ink-050)',
    border: 'none'
  } : variant === 'soft' ? {
    background: 'color-mix(in srgb,' + c + ' 16%,transparent)',
    color: c,
    border: '1px solid color-mix(in srgb,' + c + ' 40%,transparent)'
  } : {
    background: 'transparent',
    color: c,
    border: 'var(--border-hairline) solid ' + c
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: pad,
      fontFamily: 'var(--font-mono)',
      fontSize: fs,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-sm)',
      lineHeight: 1.1,
      whiteSpace: 'nowrap',
      ...look,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 'var(--control-sm)',
    px: '12px',
    fs: '11px'
  },
  md: {
    h: 'var(--control-md)',
    px: '18px',
    fs: '12px'
  },
  lg: {
    h: 'var(--control-lg)',
    px: '26px',
    fs: '14px'
  }
};
const TONES = {
  pink: {
    base: 'var(--neon-pink)',
    hot: 'var(--neon-pink-hot)',
    deep: 'var(--neon-pink-deep)'
  },
  cyan: {
    base: 'var(--neon-cyan)',
    hot: 'var(--neon-cyan-hot)',
    deep: 'var(--neon-cyan-deep)'
  },
  lime: {
    base: 'var(--neon-lime)',
    hot: 'var(--neon-lime-hot)',
    deep: 'var(--neon-lime-deep)'
  },
  violet: {
    base: 'var(--neon-violet)',
    hot: 'var(--neon-violet-hot)',
    deep: 'var(--neon-violet-deep)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  tone = 'pink',
  sticker = false,
  fullWidth = false,
  disabled = false,
  iconLeft,
  iconRight,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md,
    t = TONES[tone] || TONES.pink;
  const fill = disabled ? 'var(--action-disabled)' : press ? t.deep : hover ? t.hot : t.base;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    height: s.h,
    padding: '0 ' + s.px,
    minWidth: variant === 'ghost' ? 0 : 'var(--hit-min)',
    width: fullWidth ? '100%' : undefined,
    fontFamily: 'var(--font-mono)',
    fontSize: s.fs,
    fontWeight: 'var(--weight-bold)',
    letterSpacing: 'var(--track-label)',
    textTransform: 'uppercase',
    border: 'var(--border-strong) solid transparent',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    background: 'none',
    whiteSpace: 'nowrap',
    transition: 'background var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)'
  };
  const shove = press && !disabled ? {
    transform: 'translate(1px,1px)'
  } : null;
  let look;
  if (variant === 'primary') {
    look = {
      background: fill,
      color: disabled ? 'var(--action-disabled-text)' : 'var(--action-primary-text)',
      boxShadow: sticker && !disabled ? press ? '2px 2px 0 var(--ink-000)' : 'var(--shadow-sticker)' : 'none'
    };
  } else if (variant === 'secondary') {
    look = {
      background: 'var(--action-secondary)',
      color: disabled ? 'var(--action-disabled-text)' : hover ? 'var(--text-strong)' : 'var(--text-body)',
      borderColor: disabled ? 'var(--action-disabled)' : press ? t.deep : hover ? t.base : 'var(--action-secondary-line)'
    };
  } else if (variant === 'ghost') {
    look = {
      background: press ? 'rgba(255,255,255,.06)' : 'transparent',
      color: disabled ? 'var(--action-disabled-text)' : hover ? t.base : 'var(--text-muted)'
    };
  } else {
    look = {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      borderColor: 'transparent',
      opacity: disabled ? .4 : 1
    };
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...look,
      ...shove,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  label,
  title,
  meta,
  media,
  mediaHeight = 180,
  accent,
  interactive = false,
  footer,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const neon = accent ? 'var(--neon-' + accent + ')' : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-hairline) solid ' + (interactive && hover && neon ? neon : 'var(--line-hairline)'),
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'border-color var(--duration-fast) var(--ease-standard)',
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: mediaHeight,
      background: 'var(--steel-400)',
      backgroundImage: 'var(--texture-scanline)',
      overflow: 'hidden'
    }
  }, typeof media === 'string' ? /*#__PURE__*/React.createElement("img", {
    src: media,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : media, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-protect)',
      opacity: .75
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      flex: 1
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: neon || 'var(--text-muted)'
    }
  }, label), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--heading-2)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-display)',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--text-strong)'
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm)',
      letterSpacing: 'var(--track-mono)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, meta), children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-6)',
      borderTop: '1px solid var(--line-hairline)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  tone = 'pink',
  size = 'md',
  active = false,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const d = SIZES[size] || 40;
  const neon = 'var(--neon-' + tone + ')';
  const on = active || hover;
  const look = variant === 'solid' ? {
    background: disabled ? 'var(--action-disabled)' : press ? 'var(--neon-' + tone + '-deep)' : hover ? 'var(--neon-' + tone + '-hot)' : neon,
    color: 'var(--action-primary-text)',
    border: 'none'
  } : variant === 'outline' ? {
    background: press ? 'rgba(255,255,255,.06)' : 'transparent',
    color: disabled ? 'var(--action-disabled-text)' : on ? neon : 'var(--text-muted)',
    border: 'var(--border-hairline) solid ' + (on && !disabled ? neon : 'var(--line-strong)')
  } : {
    background: press ? 'rgba(255,255,255,.06)' : 'transparent',
    color: disabled ? 'var(--action-disabled-text)' : on ? neon : 'var(--text-muted)',
    border: 'var(--border-hairline) solid transparent'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    style: {
      width: d,
      height: d,
      minWidth: d,
      display: 'inline-grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transform: press && !disabled ? 'translate(1px,1px)' : undefined,
      transition: 'color var(--duration-fast) var(--ease-standard),background var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)',
      ...look,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/PixelIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* pixelarticons (MIT) via CDN — a FLAGGED substitution, see readme.md > ICONOGRAPHY */
const BASE = 'https://unpkg.com/pixelarticons@1.8.1/svg/';
function PixelIcon({
  name,
  size = 20,
  label,
  tone,
  style,
  ...rest
}) {
  const px = typeof size === 'number' ? size + 'px' : size;
  const filter = tone ? 'none' : 'invert(1) opacity(.78)';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: label ? 'img' : 'presentation',
    "aria-label": label,
    "aria-hidden": label ? undefined : 'true',
    style: {
      display: 'inline-block',
      width: px,
      height: px,
      flex: '0 0 ' + px,
      background: tone ? 'var(--neon-' + tone + ')' : 'currentColor',
      WebkitMaskImage: 'url(' + BASE + name + '.svg)',
      maskImage: 'url(' + BASE + name + '.svg)',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      imageRendering: 'pixelated',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { PixelIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PixelIcon.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected = false,
  tone = 'cyan',
  onRemove,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const c = 'var(--neon-' + tone + ')';
  const interactive = !!rest.onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      height: '28px',
      padding: '0 11px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm)',
      letterSpacing: 'var(--track-mono)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      cursor: interactive ? 'pointer' : 'default',
      userSelect: 'none',
      background: selected ? c : 'transparent',
      color: selected ? 'var(--ink-050)' : hover && interactive ? 'var(--text-strong)' : 'var(--text-muted)',
      border: 'var(--border-hairline) solid ' + (selected ? c : hover && interactive ? c : 'var(--line-strong)'),
      transition: 'all var(--duration-fast) var(--ease-standard)',
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      cursor: 'pointer',
      opacity: .7,
      fontSize: '12px',
      lineHeight: 1
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  onClose,
  label,
  title,
  children,
  footer,
  width = 520,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 'var(--z-modal)',
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-6)',
      background: 'rgba(7,7,10,.78)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-raised)',
      border: 'var(--border-hairline) solid var(--line-strong)',
      borderTop: 'var(--border-loud) solid var(--neon-pink)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-raised)',
      animation: 'nof-in var(--duration-base) var(--ease-out-hard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--neon-pink)'
    }
  }, label), title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--heading-1)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-display)',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--text-strong)'
    }
  }, title)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    style: {
      width: 32,
      height: 32,
      background: 'transparent',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-sm)',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-body)',
      fontSize: 'var(--body-md)'
    }
  }, children)), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-7)',
      borderTop: '1px solid var(--line-hairline)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: 'var(--status-info)',
  success: 'var(--status-online)',
  error: 'var(--status-error)',
  warning: 'var(--status-queued)'
};
function Toast({
  tone = 'info',
  label,
  children,
  onDismiss,
  style,
  ...rest
}) {
  const c = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      minWidth: '280px',
      maxWidth: '420px',
      padding: 'var(--space-4) var(--space-5)',
      background: 'var(--glass-fill)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      border: 'var(--border-hairline) solid var(--line-strong)',
      borderLeft: 'var(--border-loud) solid ' + c,
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-raised)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 8,
      height: 8,
      flex: '0 0 8px',
      marginTop: 6,
      borderRadius: 'var(--radius-pill)',
      background: c,
      boxShadow: '0 0 10px ' + c
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '3px'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: c
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--body-sm)',
      color: 'var(--text-body)'
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: 'transparent',
      border: 'none',
      color: 'var(--text-faint)',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: '12px'
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  placement = 'top',
  children,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : placement === 'left' ? {
    right: 'calc(100% + 8px)',
    top: '50%',
    transform: 'translateY(-50%)'
  } : placement === 'right' ? {
    left: 'calc(100% + 8px)',
    top: '50%',
    transform: 'translateY(-50%)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 'var(--z-overlay)',
      ...pos,
      left: placement === 'top' || placement === 'bottom' ? '50%' : undefined,
      transform: placement === 'top' || placement === 'bottom' ? 'translateX(-50%)' : pos.transform,
      padding: '6px 9px',
      background: 'var(--ink-000)',
      color: 'var(--text-strong)',
      border: 'var(--border-hairline) solid var(--neon-cyan)',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm)',
      letterSpacing: 'var(--track-mono)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      pointerEvents: 'none'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  tone = 'lime',
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const c = 'var(--neon-' + tone + ')';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      minHeight: 'var(--hit-min)',
      padding: 'var(--space-2) 0',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (checked === undefined) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '20px',
      height: '20px',
      flex: '0 0 20px',
      marginTop: '2px',
      display: 'grid',
      placeItems: 'center',
      background: on ? c : 'var(--surface-sunken)',
      border: 'var(--border-strong) solid ' + (on ? c : 'var(--line-strong)'),
      borderRadius: 'var(--radius-sm)',
      transition: 'all var(--duration-fast) var(--ease-standard)',
      color: 'var(--ink-050)',
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      fontWeight: 700,
      lineHeight: 1
    }
  }, on ? '✓' : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--body-md)',
      color: 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm)',
      letterSpacing: 'var(--track-mono)',
      color: 'var(--text-faint)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  size = 'md',
  fullWidth = true,
  as = 'input',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 'var(--control-sm)' : size === 'lg' ? 'var(--control-lg)' : 'var(--control-md)';
  const border = error ? 'var(--status-error)' : focus ? 'var(--neon-cyan)' : 'var(--line-strong)';
  const Tag = as;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      width: fullWidth ? '100%' : undefined,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: as === 'textarea' ? undefined : h,
      padding: '0 var(--space-4)',
      background: 'var(--surface-sunken)',
      border: 'var(--border-hairline) solid ' + border,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--glow-cyan)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      display: 'grid',
      placeItems: 'center'
    }
  }, prefix), /*#__PURE__*/React.createElement(Tag, _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-lg)',
      letterSpacing: 'var(--track-mono)',
      padding: as === 'textarea' ? 'var(--space-4) 0' : 0,
      resize: as === 'textarea' ? 'vertical' : undefined,
      minHeight: as === 'textarea' ? '96px' : undefined
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm)'
    }
  }, suffix)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm)',
      letterSpacing: 'var(--track-mono)',
      color: error ? 'var(--status-error)' : 'var(--text-faint)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  name,
  value,
  checked,
  onChange,
  disabled = false,
  tone = 'pink',
  style,
  ...rest
}) {
  const c = 'var(--neon-' + tone + ')';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      minHeight: 'var(--hit-min)',
      padding: 'var(--space-2) 0',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '20px',
      height: '20px',
      flex: '0 0 20px',
      marginTop: '2px',
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-sunken)',
      border: 'var(--border-strong) solid ' + (checked ? c : 'var(--line-strong)'),
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '9px',
      height: '9px',
      borderRadius: 'var(--radius-pill)',
      background: c,
      boxShadow: '0 0 8px ' + c
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--body-md)',
      color: 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm)',
      letterSpacing: 'var(--track-mono)',
      color: 'var(--text-faint)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  size = 'md',
  fullWidth = true,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 'var(--control-sm)' : size === 'lg' ? 'var(--control-lg)' : 'var(--control-md)';
  const border = error ? 'var(--status-error)' : focus ? 'var(--neon-cyan)' : 'var(--line-strong)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      width: fullWidth ? '100%' : undefined,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: h,
      background: 'var(--surface-sunken)',
      border: 'var(--border-hairline) solid ' + border,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--glow-cyan)' : 'none',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: '100%',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-lg)',
      letterSpacing: 'var(--track-mono)',
      textTransform: 'uppercase',
      padding: '0 34px 0 var(--space-4)',
      cursor: 'pointer'
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v,
      style: {
        background: 'var(--ink-200)'
      }
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '12px',
      color: 'var(--neon-cyan)',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      pointerEvents: 'none'
    }
  }, "\u25BC")), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm)',
      color: error ? 'var(--status-error)' : 'var(--text-faint)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  tone = 'cyan',
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const c = 'var(--neon-' + tone + ')';
  const toggle = () => {
    if (disabled) return;
    const n = !on;
    if (checked === undefined) setInner(n);
    onChange && onChange(n);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      minHeight: 'var(--hit-min)',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--body-md)',
      color: 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm)',
      letterSpacing: 'var(--track-mono)',
      color: 'var(--text-faint)'
    }
  }, description)), /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    "aria-label": typeof label === 'string' ? label : 'toggle',
    onClick: toggle,
    disabled: disabled,
    style: {
      width: '46px',
      height: '24px',
      flex: '0 0 46px',
      padding: '2px',
      borderRadius: 'var(--radius-pill)',
      background: on ? c : 'var(--steel-400)',
      border: 'var(--border-hairline) solid ' + (on ? c : 'var(--line-strong)'),
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: on ? 'flex-end' : 'flex-start',
      transition: 'background var(--duration-fast) var(--ease-standard),justify-content var(--duration-fast)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '18px',
      height: '18px',
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--ink-050)' : 'var(--concrete-400)',
      display: 'block'
    }
  })));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  logoSrc = '../../assets/logo-white-on-black.png',
  items = [],
  active,
  onNavigate,
  right,
  sticky = true,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: sticky ? 'sticky' : 'static',
      top: 0,
      zIndex: 'var(--z-sticky)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-9)',
      height: 'var(--header-height)',
      padding: '0 var(--gutter-desktop)',
      background: 'var(--glass-fill)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--line-hairline)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items.length ? typeof items[0] === 'string' ? items[0] : items[0].value : null);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Never Offline",
    style: {
      height: '30px',
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-7)',
      flex: 1
    }
  }, items.map(it => {
    const v = typeof it === 'string' ? it : it.value,
      l = typeof it === 'string' ? it : it.label;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      onClick: () => onNavigate && onNavigate(v),
      style: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '4px 0',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--mono-md)',
        fontWeight: on ? 700 : 400,
        letterSpacing: 'var(--track-label)',
        textTransform: 'uppercase',
        boxShadow: on ? 'inset 0 -2px 0 var(--neon-pink)' : 'none',
        transition: 'color var(--duration-fast) var(--ease-standard)'
      }
    }, l);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      flex: '0 0 auto'
    }
  }, right));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  tone = 'pink',
  bracket = 'bottom',
  style,
  ...rest
}) {
  const first = tabs.length ? typeof tabs[0] === 'string' ? tabs[0] : tabs[0].value : null;
  const [inner, setInner] = React.useState(defaultValue !== undefined ? defaultValue : first);
  const active = value !== undefined ? value : inner;
  const c = 'var(--neon-' + tone + ')';
  const pick = v => {
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      borderBottom: bracket === 'bottom' ? '1px solid var(--line-hairline)' : 'none',
      ...style
    }
  }, rest), tabs.map(t => {
    const v = typeof t === 'string' ? t : t.value,
      l = typeof t === 'string' ? t : t.label,
      count = typeof t === 'object' ? t.count : undefined;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(v),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        padding: '0 0 var(--space-4)',
        minHeight: 'var(--hit-min)',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        boxShadow: on ? 'inset 0 -3px 0 ' + c : 'none',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--mono-md)',
        fontWeight: on ? 700 : 400,
        letterSpacing: 'var(--track-label)',
        textTransform: 'uppercase',
        transition: 'color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)'
      }
    }, l, count !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        color: on ? c : 'var(--text-faint)',
        fontSize: 'var(--mono-sm)'
      }
    }, count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/print/ChromeTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChromeTitle({
  children,
  as = 'div',
  size = 'clamp(56px,12vw,220px)',
  skew = false,
  bleed = false,
  align = 'left',
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: size,
      lineHeight: 'var(--leading-display)',
      letterSpacing: '-.03em',
      textTransform: 'uppercase',
      textAlign: align,
      background: 'var(--chrome-fill)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      transform: skew ? 'skewX(var(--skew-brand))' : undefined,
      transformOrigin: 'left bottom',
      filter: bleed ? 'url(../../assets/filters/inkbleed.svg#inkbleed)' : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { ChromeTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/print/ChromeTitle.jsx", error: String((e && e.message) || e) }); }

// components/print/ScrawlMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* NO REAL HANDWRITING ASSET EXISTS YET.
   The "Atmos" file was a lettering REFERENCE (assets/references/ref-script-lettering.jpg),
   not brand handwriting — it is never placed in a layout.
   Until real scanned words arrive, every scrawl uses the substituted script face.
   See readme.md > Typography. */
function ScrawlMark({
  children,
  size = 64,
  rotate = -6,
  tone = 'pink',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: typeof size === 'number' ? size + 'px' : size,
      lineHeight: 1.05,
      color: tone === 'ink' ? 'var(--ink-print)' : 'var(--neon-' + tone + ')',
      textTransform: 'none',
      letterSpacing: 0,
      display: 'inline-block',
      transform: 'rotate(' + rotate + 'deg)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { ScrawlMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/print/ScrawlMark.jsx", error: String((e && e.message) || e) }); }

// components/print/Stamp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stamp({
  label,
  sub,
  tone = 'pink',
  rotate = -8,
  variant = 'box',
  bleed = true,
  style,
  ...rest
}) {
  const c = tone === 'ink' ? 'var(--ink-print)' : 'var(--neon-' + tone + ')';
  const round = variant === 'round';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2px',
      padding: round ? '0' : '6px 12px',
      minWidth: round ? '86px' : undefined,
      minHeight: round ? '86px' : undefined,
      border: 'var(--border-strong) solid ' + c,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-0)',
      color: c,
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-label)',
      transform: 'rotate(' + rotate + 'deg)',
      opacity: .92,
      filter: bleed ? 'url(../../assets/filters/inkbleed.svg#inkbleed)' : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--mono-md)',
      fontWeight: 'var(--weight-bold)',
      lineHeight: 1.1
    }
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--mono-xs)',
      opacity: .75,
      lineHeight: 1.1
    }
  }, sub));
}
Object.assign(__ds_scope, { Stamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/print/Stamp.jsx", error: String((e && e.message) || e) }); }

// site/data.js
try { (() => {
/* ─────────────────────────────────────────────────────────────
   Never Offline — site content.
   THIS IS THE ONLY FILE YOU EDIT to add events or archive images.
   Nothing else needs touching.
   ───────────────────────────────────────────────────────────── */

/* ══ EVENTS ══════════════════════════════════════════════════
   Empty array = the site shows its "standby / nothing announced"
   state automatically. Add an object here and the homepage grows
   an events section, the ticker updates, and the status block
   switches to "on sale" on its own.

   Template:
   {
     title:   'Error 404',
     date:    '10.10.2026',        // as you want it displayed
     city:    'Manchester',
     venue:   'Warehouse',          // or '' to keep it secret
     time:    '22:00 — 04:00',
     genres:  ['Afrohouse','Amapiano'],
     status:  'onsale',             // onsale | soldout | announced
     price:   'Wave 1 · £10',
     ticket:  'https://…',          // ticket link, or '' to disable
     photo:   'assets/photography/floor-neon-red.jpg'
   }
   ═══════════════════════════════════════════════════════════ */
const EVENTS = [];

/* ══ ARCHIVE ═════════════════════════════════════════════════
   Add an image file to assets/photography/ then add a line here.
   `wide: true` makes a cell span two columns.
   ═══════════════════════════════════════════════════════════ */
const ARCHIVE = [{
  src: 'assets/photography/crowd-spotlight-dark.jpg',
  caption: 'Crowd · Energy',
  wide: true
}, {
  src: 'assets/photography/floor-neon-red.jpg',
  caption: 'Floor · Manchester'
}, {
  src: 'assets/photography/booth-flowerwall.jpg',
  caption: 'Booth · Performance'
}, {
  src: 'assets/photography/crowd-balcony-green.jpg',
  caption: 'Balcony · Room two'
}, {
  src: 'assets/photography/confetti-bottles.jpg',
  caption: 'Close · 04:00'
}, {
  src: 'assets/photography/portraits-violet.jpg',
  caption: 'Crowd · Portraits'
}, {
  src: 'assets/photography/set-03026.jpg',
  caption: 'Set · Residents',
  wide: true
}, {
  src: 'assets/photography/room-wide-green.jpg',
  caption: 'Venue · Production'
}, {
  src: 'assets/photography/set-02970.jpg',
  caption: 'Floor · Birmingham'
}];

/* ══ RESIDENTS & HOSTS ══════════════════════════════════════ */
const ROSTER = ['MK', 'Deejay J3', 'T3BZA', 'DJ Amy', 'Santos', 'DJ AY', 'DJ Muwa', 'Fistoz', 'TwoSync', 'K3', 'Hypegad Sambisa', 'Captain Lulaz', 'Malume MC', 'Biggs', 'JoeTheShow', 'TeedDee', 'Mr Woz'];

/* ══ SIGN-UP ENDPOINT ═══════════════════════════════════════
   PLACEHOLDER — the form will not store anything until you
   replace this. See README.md § 2 for the three-minute setup.
   ═══════════════════════════════════════════════════════════ */
const SIGNUP_ENDPOINT = 'PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE';

/* ══ SOCIAL / CONTACT ═══════════════════════════════════════ */
const SOCIAL = {
  instagram: 'https://instagram.com/neverofflineuk',
  handle: '@neverofflineuk',
  bookings: 'bookings@neveroffline.uk',
  press: 'hello@neveroffline.uk'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/data.js", error: String((e && e.message) || e) }); }

// site/site.js
try { (() => {
/* Never Offline — site behaviour. No dependencies, no build step. */
(function () {
  'use strict';

  /* ── nav: mark current page ─────────────────────────────── */
  var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav a').forEach(function (a) {
    var target = (a.getAttribute('href') || '').toLowerCase();
    if (target === here || here === '' && target === 'index.html') a.setAttribute('aria-current', 'page');
  });

  /* ── year stamps ────────────────────────────────────────── */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ── ticker: duplicated once so the -50% loop is seamless ── */
  var ticker = document.querySelector('[data-ticker]');
  if (ticker) {
    var live = typeof EVENTS !== 'undefined' && EVENTS.length ? EVENTS.map(function (e) {
      return e.title + ' · ' + e.date + ' · ' + e.city;
    }) : ['Nothing announced', 'Manchester · Birmingham', 'Not found · You had to be there', 'Sign up for wave access'];
    var line = live.join('   ·   ') + '   ·   ';
    ticker.innerHTML = '<span>' + line.repeat(4) + '</span><span>' + line.repeat(4) + '</span>';
  }

  /* ── events: renders only when data.js has entries ──────── */
  var slot = document.querySelector('[data-events]');
  if (slot && typeof EVENTS !== 'undefined') {
    if (!EVENTS.length) {
      slot.remove();
    } else {
      var labels = {
        onsale: 'On sale',
        soldout: 'Sold out · 404',
        announced: 'Announced'
      };
      var tones = {
        onsale: 'lime',
        soldout: 'pink',
        announced: 'cyan'
      };
      slot.querySelector('[data-events-grid]').innerHTML = EVENTS.map(function (e) {
        var tone = tones[e.status] || 'cyan';
        return '<article class="card" style="padding:0;overflow:hidden">' + (e.photo ? '<div class="photo" style="aspect-ratio:16/9"><img src="' + e.photo + '" alt=""></div>' : '') + '<div style="padding:clamp(18px,2.4vw,26px);display:flex;flex-direction:column;gap:12px">' + '<div class="mono-sm pink">' + e.date + (e.city ? ' · ' + e.city : '') + '</div>' + '<h3>' + e.title + '</h3>' + '<div class="mono-sm muted">' + [(e.genres || []).join(' · '), e.time, e.venue].filter(Boolean).join(' · ') + '</div>' + '<div style="display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:6px">' + '<span class="mono-sm ' + tone + '">' + (labels[e.status] || '') + (e.price ? ' · ' + e.price : '') + '</span>' + (e.ticket && e.status !== 'soldout' ? '<a class="btn" style="min-height:40px;padding:0 18px" href="' + e.ticket + '">Get pass</a>' : '<span class="btn" aria-disabled="true" style="min-height:40px;padding:0 18px;background:var(--steel-400);color:var(--concrete-500)">' + (e.status === 'soldout' ? 'Sold out' : 'Soon') + '</span>') + '</div>' + '</div></article>';
      }).join('');
      var st = document.querySelector('[data-status-line]');
      if (st) st.textContent = 'On sale';
    }
  }

  /* ── archive grid + lightbox ────────────────────────────── */
  var grid = document.querySelector('[data-archive]');
  if (grid && typeof ARCHIVE !== 'undefined') {
    grid.innerHTML = ARCHIVE.map(function (img, i) {
      return '<button class="cell' + (img.wide ? ' wide' : '') + '" type="button" data-i="' + i + '" aria-label="Open image: ' + img.caption + '">' + '<img src="' + img.src + '" alt="' + img.caption + '" loading="lazy">' + '<span class="cap">' + img.caption + '</span></button>';
    }).join('');
    var lb = document.querySelector('[data-lightbox]');
    if (lb) {
      var lbImg = lb.querySelector('img'),
        lbCap = lb.querySelector('.lb-cap'),
        lastFocus = null;
      var open = function (i) {
        var item = ARCHIVE[i];
        if (!item) return;
        lastFocus = document.activeElement;
        lbImg.src = item.src;
        lbImg.alt = item.caption;
        lbCap.textContent = item.caption;
        lb.classList.add('open');
        lb.querySelector('.lb-close').focus();
      };
      var close = function () {
        lb.classList.remove('open');
        if (lastFocus) lastFocus.focus();
      };
      grid.addEventListener('click', function (e) {
        var cell = e.target.closest('.cell');
        if (cell) open(Number(cell.dataset.i));
      });
      lb.addEventListener('click', function (e) {
        if (e.target === lb || e.target.closest('.lb-close')) close();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lb.classList.contains('open')) close();
      });
    }
  }

  /* ── roster ─────────────────────────────────────────────── */
  var roster = document.querySelector('[data-roster]');
  if (roster && typeof ROSTER !== 'undefined') {
    roster.innerHTML = ROSTER.map(function (n) {
      return '<span>' + n + '</span>';
    }).join('');
  }

  /* ── social links ───────────────────────────────────────── */
  if (typeof SOCIAL !== 'undefined') {
    document.querySelectorAll('[data-ig]').forEach(function (a) {
      a.href = SOCIAL.instagram;
    });
    document.querySelectorAll('[data-handle]').forEach(function (el) {
      el.textContent = SOCIAL.handle;
    });
    document.querySelectorAll('[data-bookings]').forEach(function (a) {
      a.href = 'mailto:' + SOCIAL.bookings;
      a.textContent = SOCIAL.bookings;
    });
    document.querySelectorAll('[data-press]').forEach(function (a) {
      a.href = 'mailto:' + SOCIAL.press;
      a.textContent = SOCIAL.press;
    });
  }

  /* ── sign-up form ───────────────────────────────────────── */
  var form = document.querySelector('[data-signup]');
  if (form) {
    var msg = form.querySelector('.form-msg'),
      btn = form.querySelector('button[type=submit]');
    var say = function (text, isError) {
      msg.querySelector('.form-msg-text').textContent = text;
      msg.classList.toggle('err', !!isError);
      msg.classList.add('show');
    };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var email = (data.get('email') || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        say('That email does not look right. Check it and try again.', true);
        return;
      }
      if (typeof SIGNUP_ENDPOINT === 'undefined' || SIGNUP_ENDPOINT.indexOf('PASTE_YOUR') === 0) {
        say('Form not connected yet — add your endpoint in data.js (see README § 2). Nothing was saved.', true);
        return;
      }
      btn.disabled = true;
      var original = btn.textContent;
      btn.textContent = 'Sending…';
      data.append('submitted', new Date().toISOString());

      /* Apps Script needs no-cors + urlencoded; the response is opaque by design,
         so a resolved promise is our success signal. */
      fetch(SIGNUP_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(data)
      }).then(function () {
        form.reset();
        say('You are on the list. Wave access lands here first.');
      }).catch(function () {
        say('Could not reach the server. Try again, or email ' + (typeof SOCIAL !== 'undefined' ? SOCIAL.press : 'us') + '.', true);
      }).then(function () {
        btn.disabled = false;
        btn.textContent = original;
      });
    });
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/site.js", error: String((e && e.message) || e) }); }

// ui_kits/stream_app/LineupScreen.jsx
try { (() => {
function LineupScreen({
  go
}) {
  const [room, setRoom] = React.useState('All');
  const shown = room === 'All' ? SETS : SETS.filter(s => s.room === room);
  const pill = s => s.state === 'live' ? /*#__PURE__*/React.createElement(StatusPill, {
    status: "live",
    size: "sm"
  }) : s.state === 'next' ? /*#__PURE__*/React.createElement(StatusPill, {
    status: "queued",
    label: "Up next",
    size: "sm"
  }) : s.state === 'done' ? /*#__PURE__*/React.createElement(StatusPill, {
    status: "offline",
    label: "Played",
    size: "sm"
  }) : /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    variant: "soft",
    size: "sm"
  }, s.time);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: "neon",
    height: "150px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-protect)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '28px'
    }
  }, "Error 404"), /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "pink",
    items: ['10.10.2026', '22:00 — 04:00']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, ['All', 'Main', 'Room 2'].map(r => /*#__PURE__*/React.createElement(Tag, {
    key: r,
    selected: room === r,
    onClick: () => setRoom(r)
  }, r))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-5) var(--space-8)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, shown.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    onClick: () => s.state === 'live' && go('live'),
    style: {
      display: 'grid',
      gridTemplateColumns: '58px 1fr auto',
      gap: 'var(--space-4)',
      alignItems: 'center',
      padding: 'var(--space-5) 0',
      borderBottom: '1px solid var(--line-hairline)',
      cursor: s.state === 'live' ? 'pointer' : 'default',
      opacity: s.state === 'done' ? .5 : 1,
      boxShadow: s.state === 'live' ? 'inset 3px 0 0 var(--neon-pink)' : 'none',
      paddingLeft: s.state === 'live' ? 'var(--space-4)' : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-lg)',
      letterSpacing: 'var(--track-mono)',
      color: s.state === 'live' ? 'var(--neon-pink)' : 'var(--text-muted)'
    }
  }, s.time), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--heading-3)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-display)',
      color: 'var(--text-strong)'
    }
  }, s.name), /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    items: [s.room]
  })), pill(s)))), /*#__PURE__*/React.createElement(Marquee, {
    items: ['Up next · MK 00:30', 'Room 2 · DJ Amy 01:45'],
    tone: "violet",
    height: 32
  }));
}
window.LineupScreen = LineupScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/stream_app/LineupScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/stream_app/LiveScreen.jsx
try { (() => {
function LiveScreen({
  go
}) {
  const [muted, setMuted] = React.useState(false);
  const [chat, setChat] = React.useState(true);
  const [msg, setMsg] = React.useState('');
  const [log, setLog] = React.useState(CHAT);
  const send = () => {
    if (!msg.trim()) return;
    setLog([...log, {
      u: 'you',
      t: msg,
      tone: 'pink'
    }]);
    setMsg('');
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: '0 0 240px'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: "dj",
    height: "240px"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'var(--space-4)',
      left: 'var(--space-4)',
      right: 'var(--space-4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: "live",
    detail: "1,284",
    glow: true,
    size: "sm"
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "violet",
    size: "sm"
  }, "Room 1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 'var(--space-8) var(--space-4) var(--space-4)',
      background: 'var(--gradient-protect)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '3px',
      background: 'rgba(255,255,255,.16)',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '34%',
      height: '100%',
      background: 'var(--neon-pink)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Pause",
    variant: "solid",
    icon: /*#__PURE__*/React.createElement(PixelIcon, {
      name: "pause",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: muted ? 'Unmute' : 'Mute',
    tone: "cyan",
    active: !muted,
    onClick: () => setMuted(!muted),
    icon: /*#__PURE__*/React.createElement(PixelIcon, {
      name: muted ? 'volume-x' : 'volume-2',
      size: 18
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "lime",
    items: ['1080p']
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Fullscreen",
    icon: /*#__PURE__*/React.createElement(PixelIcon, {
      name: "external-link",
      size: 18
    })
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-5) var(--space-4)',
      borderBottom: '1px solid var(--line-hairline)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "pink",
    items: ['Now playing', '23:15 — 00:30']
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '26px'
    }
  }, "T3BZA"), /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    items: ['Error 404', 'Warehouse · Manchester', 'Uptime 06:12:44']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-5) 0'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tone: "cyan",
    bracket: "none",
    value: chat ? 'chat' : 'requests',
    onChange: v => setChat(v === 'chat'),
    tabs: [{
      value: 'chat',
      label: 'Chat',
      count: log.length
    }, {
      value: 'requests',
      label: 'Requests'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflow: 'auto',
      padding: 'var(--space-4) var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, chat ? log.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: m.tone,
    items: [m.u]
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--body-sm)',
      color: 'var(--text-body)'
    }
  }, m.t))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    items: ['No requests open']
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Requests open in the last hour of the night."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-5)',
      borderTop: '1px solid var(--line-hairline)',
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Say something",
    size: "sm",
    value: msg,
    onChange: e => setMsg(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') send();
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    tone: "cyan",
    onClick: send
  }, "Send"))));
}
window.LiveScreen = LiveScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/stream_app/LiveScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/stream_app/SettingsScreen.jsx
try { (() => {
function SettingsScreen({
  onSignOut
}) {
  const [toast, setToast] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflow: 'auto',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      flex: '0 0 52px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--steel-400)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: '20px',
      color: 'var(--neon-pink)'
    }
  }, "AM"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--heading-3)',
      textTransform: 'uppercase',
      color: 'var(--text-strong)'
    }
  }, "A. Mensah"), /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    items: ['a.mensah@domain.com', 'Since 2023']
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "cyan",
    items: ['Stream'],
    style: {
      marginBottom: 'var(--space-3)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderTop: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Low-data stream",
    description: "Caps video at 480p",
    style: {
      borderBottom: '1px solid var(--line-hairline)',
      padding: 'var(--space-3) 0'
    }
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Chat visible",
    tone: "lime",
    defaultChecked: true,
    style: {
      borderBottom: '1px solid var(--line-hairline)',
      padding: 'var(--space-3) 0'
    }
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Autoplay when live",
    defaultChecked: true,
    style: {
      borderBottom: '1px solid var(--line-hairline)',
      padding: 'var(--space-3) 0'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "cyan",
    items: ['Playback']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Quality",
    options: [{
      value: 'auto',
      label: 'Auto'
    }, {
      value: '1080',
      label: '1080p · High'
    }, {
      value: '720',
      label: '720p'
    }, {
      value: '480',
      label: '480p · Low data'
    }]
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Audio",
    options: ['Stereo · 256kbps', 'Mono · 96kbps']
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "cyan",
    items: ['Alerts'],
    style: {
      marginBottom: 'var(--space-3)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Text me when doors open",
    description: "One message per event \xB7 no marketing",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Alert me when the stream goes live",
    tone: "lime",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "New dates announced"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    onClick: () => setToast(true)
  }, "Test connection"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    tone: "pink",
    fullWidth: true,
    onClick: onSignOut
  }, "Sign out"), /*#__PURE__*/React.createElement(MetaLine, {
    wide: true,
    size: "sm",
    items: ['Never Offline', '@neverofflineuk', 'Build 2026.1.0']
  })), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--space-5)',
      right: 'var(--space-5)',
      bottom: 'calc(var(--tabbar-height) + var(--space-5))',
      zIndex: 'var(--z-toast)'
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    label: "Signal strong",
    onDismiss: () => setToast(false)
  }, "1080p available \xB7 24ms to the booth.")));
}
window.SettingsScreen = SettingsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/stream_app/SettingsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/stream_app/SignIn.jsx
try { (() => {
function SignIn({
  onDone
}) {
  const [email, setEmail] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: "crowd",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-protect)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 'var(--space-6)',
      padding: 'var(--space-9) var(--space-6) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "dark",
    height: 46,
    basePath: ASSETS
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '34px',
      marginBottom: 'var(--space-3)'
    }
  }, "Sign In"), /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    items: ['Afrohouse', 'Afrotech', 'Gqom', 'Amapiano']
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-sm)',
      color: 'var(--text-body)'
    }
  }, "Your pass email is your login. Replays land here after the room empties."), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@domain.com",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Door code",
    placeholder: "0000",
    hint: "From your pass receipt"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    sticker: true,
    onClick: onDone
  }, "Enter"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    tone: "cyan",
    onClick: onDone
  }, "Browse without a pass"), /*#__PURE__*/React.createElement(StatusPill, {
    status: "live",
    size: "sm",
    detail: "1,284"
  }))));
}
window.SignIn = SignIn;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/stream_app/SignIn.jsx", error: String((e && e.message) || e) }); }

// ui_kits/stream_app/TicketsScreen.jsx
try { (() => {
function TicketsScreen({
  go
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflow: 'auto',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--line-strong)',
      borderTop: 'var(--border-loud) solid var(--neon-pink)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "pink",
    items: ['Pass · Wave 2']
  }), /*#__PURE__*/React.createElement(StatusPill, {
    status: "online",
    label: "Valid",
    size: "sm"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '30px'
    }
  }, "Error 404"), /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    items: ['10.10.2026', 'Warehouse · Manchester', 'Doors 22:00']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-2)'
    }
  }, [['Holder', 'A. Mensah'], ['Order', 'NO-404-2291'], ['Entry', 'Last 01:00'], ['Room', 'Both']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    items: [k]
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-lg)',
      color: 'var(--text-strong)'
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '10px',
      background: 'var(--texture-hazard)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-6)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      borderTop: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 76,
      height: 76,
      flex: '0 0 76px',
      background: 'var(--ink-000)',
      backgroundImage: 'var(--texture-grid)',
      backgroundSize: '8px 8px',
      border: '1px solid var(--line-strong)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "lime",
    items: ['Scan at the door']
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    fullWidth: true,
    onClick: () => setOpen(true)
  }, "Transfer pass")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "violet",
    items: ['Upcoming'],
    style: {
      marginBottom: 'var(--space-4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, [['Piano.wav', 'Sat 28 Nov · Birmingham', 'wave1'], ['Piano.wav 02', 'Fri 12 Dec · Manchester', 'soldout']].map(([t, d, st]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    interactive: true,
    accent: "cyan",
    label: d,
    title: t,
    meta: "Amapiano \xB7 23:00 \u2014 06:00",
    media: /*#__PURE__*/React.createElement(Photo, {
      name: st === 'soldout' ? 'room' : 'floor'
    }),
    mediaHeight: 110,
    footer: st === 'soldout' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusPill, {
      status: "soldout",
      size: "sm"
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      disabled: true
    }, "Sold Out")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Badge, {
      tone: "cyan"
    }, "Wave 1"), /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "Get Pass"))
  })))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: () => setOpen(false),
    label: "Transfer \xB7 NO-404-2291",
    title: "Send this pass",
    width: 330,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      tone: "lime",
      onClick: () => setOpen(false)
    }, "Send"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--body-sm)'
    }
  }, "Passes are non-transferable at the door once scanned."), /*#__PURE__*/React.createElement(Input, {
    label: "Their email",
    placeholder: "them@domain.com",
    size: "sm"
  }))));
}
window.TicketsScreen = TicketsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/stream_app/TicketsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/stream_app/shared.jsx
try { (() => {
/* Never Offline — stream app kit. Mobile surfaces, 390×844. */
const {
  Logo,
  MetaLine,
  StatusPill,
  Marquee,
  Badge,
  Tag,
  Button,
  IconButton,
  Card,
  ContactSheet,
  Tabs,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Dialog,
  Toast,
  PixelIcon,
  SystemStatus
} = window.NeverOfflineDesignSystem_99da47;
const ASSETS = '../../assets';
const PHOTOS = {
  crowd: 'crowd-balcony-green.jpg',
  booth: 'booth-flowerwall.jpg',
  dj: 'set-03026.jpg',
  neon: 'floor-neon-red.jpg',
  room: 'room-wide-green.jpg',
  foil: 'portraits-violet.jpg',
  flyer: 'confetti-bottles.jpg',
  floor: 'crowd-spotlight-dark.jpg'
};

/* Real event photography, kept as shot. */
function Photo({
  name = 'dj',
  height = '100%',
  children,
  style
}) {
  const src = ASSETS + '/photography/' + (PHOTOS[name] || PHOTOS.dj);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      overflow: 'hidden',
      background: 'var(--ink-100)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'var(--texture-scanline)',
      opacity: .6
    }
  }), children);
}
const SETS = [{
  time: '22:00',
  name: 'Deejay J3',
  room: 'Main',
  state: 'done'
}, {
  time: '23:15',
  name: 'T3BZA',
  room: 'Main',
  state: 'live'
}, {
  time: '00:30',
  name: 'MK',
  room: 'Main',
  state: 'next'
}, {
  time: '01:45',
  name: 'DJ Amy',
  room: 'Room 2',
  state: 'queued'
}, {
  time: '03:00',
  name: 'Santos',
  room: 'Room 2',
  state: 'queued'
}];
const CHAT = [{
  u: 'ade.mcr',
  t: 'this rig is unreal',
  tone: 'lime'
}, {
  u: '404_kid',
  t: 'who\u2019s on at 1',
  tone: 'cyan'
}, {
  u: 'selina',
  t: 'stream is crisp tonight',
  tone: 'violet'
}, {
  u: 'jsn',
  t: 'room 2 going off',
  tone: 'lime'
}, {
  u: 'mo_',
  t: 'log drum incoming',
  tone: 'cyan'
}];

/* app chrome ------------------------------------------------------------- */
function AppBar({
  title,
  label,
  left,
  right
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--header-height)',
      flex: '0 0 var(--header-height)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: '0 var(--space-5)',
      background: 'var(--glass-fill)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, left, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '1px'
    }
  }, label && /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "pink",
    items: [label]
  }), title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--heading-3)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-display)',
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title)), right);
}
const TABS = [['live', 'audio-device'], ['lineup', 'list'], ['tickets', 'card'], ['settings', 'sliders']];
function TabBar({
  view,
  go
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      height: 'var(--tabbar-height)',
      flex: '0 0 var(--tabbar-height)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      background: 'var(--ink-100)',
      borderTop: '1px solid var(--line-hairline)'
    }
  }, TABS.map(([v, icon]) => {
    const on = view === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      onClick: () => go(v),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        minHeight: 'var(--hit-min)',
        boxShadow: on ? 'inset 0 3px 0 var(--neon-pink)' : 'none',
        color: on ? 'var(--neon-pink)' : 'var(--text-faint)'
      }
    }, /*#__PURE__*/React.createElement(PixelIcon, {
      name: icon,
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--mono-xs)',
        letterSpacing: 'var(--track-label)',
        textTransform: 'uppercase'
      }
    }, v));
  }));
}
function Phone({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '390px',
      height: '844px',
      flex: '0 0 390px',
      background: 'var(--surface-page)',
      border: '1px solid var(--line-strong)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-raised)'
    }
  }, children);
}
Object.assign(window, {
  Logo,
  MetaLine,
  StatusPill,
  Marquee,
  Badge,
  Tag,
  Button,
  IconButton,
  Card,
  ContactSheet,
  Tabs,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Dialog,
  Toast,
  PixelIcon,
  SystemStatus,
  ASSETS,
  PHOTOS,
  Photo,
  SETS,
  CHAT,
  AppBar,
  TabBar,
  Phone
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/stream_app/shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Checkout.jsx
try { (() => {
function Checkout({
  go
}) {
  const [wave, setWave] = React.useState('2');
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--gutter-desktop) var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "pink",
    items: ['Checkout', 'Error 404', '10.10.2026'],
    style: {
      marginBottom: 'var(--space-5)'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--display-3)',
      marginBottom: 'var(--space-9)'
    }
  }, "Get Your Pass"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 300px',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "violet",
    items: ['01 · Pass'],
    style: {
      marginBottom: 'var(--space-4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderTop: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "w",
    value: "2",
    checked: wave === '2',
    onChange: e => setWave(e.target.value),
    label: "Wave 2",
    description: "\xA318 \xB7 40 left",
    style: {
      borderBottom: '1px solid var(--line-hairline)'
    }
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "w",
    value: "3",
    checked: wave === '3',
    onChange: e => setWave(e.target.value),
    label: "Wave 3",
    description: "\xA325 \xB7 opens Thursday 21:00",
    disabled: true,
    style: {
      borderBottom: '1px solid var(--line-hairline)'
    }
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "w",
    value: "g",
    checked: wave === 'g',
    onChange: e => setWave(e.target.value),
    label: "Guest list",
    description: "Request only \xB7 subject to capacity",
    style: {
      borderBottom: '1px solid var(--line-hairline)'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "violet",
    items: ['02 · You'],
    style: {
      marginBottom: 'var(--space-4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "First and last"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@domain.com",
    hint: "Pass + stream link"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Card",
    placeholder: "0000 0000 0000 0000",
    prefix: /*#__PURE__*/React.createElement(PixelIcon, {
      name: "credit-card",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Expiry \xB7 CVC",
    placeholder: "00/00 \xB7 000"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "I'm 18 or over and accept the door policy",
    tone: "lime"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Text me when doors open",
    description: "One message per event \xB7 no marketing",
    defaultChecked: true
  }))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    items: ['Order']
  }), [['Wave 2 pass', '£18.00'], ['Booking fee', '£1.80'], ['Replay access', 'Included']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-md)',
      letterSpacing: 'var(--track-mono)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line-hairline)',
      paddingTop: 'var(--space-4)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    items: ['Total']
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--heading-2)',
      color: 'var(--text-strong)'
    }
  }, "\xA319.80")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    tone: "lime",
    onClick: () => setDone(true)
  }, "Pay \xA319.80"), /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    items: ['Non-transferable', 'Wave 2 of 3']
  }))), /*#__PURE__*/React.createElement(Dialog, {
    open: done,
    onClose: () => setDone(false),
    label: "Pass secured \xB7 Error 404",
    title: "You're on the list",
    width: 460,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => {
        setDone(false);
        go('home');
      }
    }, "Back to events"), /*#__PURE__*/React.createElement(Button, {
      tone: "cyan",
      onClick: () => {
        setDone(false);
        go('stream');
      }
    }, "Stream"))
  }, "One pass, non-transferable. Your stream link arrives with the receipt.", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: "online",
    label: "Pass live",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "lime",
    size: "sm"
  }, "Wave 2"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 'var(--space-8)',
      bottom: 'var(--space-8)',
      zIndex: 'var(--z-toast)'
    }
  }, done && /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    label: "Pass secured"
  }, "Check your email for the stream link.")), /*#__PURE__*/React.createElement(Footer, null));
}
window.Checkout = Checkout;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Checkout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EventDetail.jsx
try { (() => {
function EventDetail({
  go,
  onCheckout
}) {
  const [tab, setTab] = React.useState('lineup');
  const ev = EVENTS[0];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Photo, {
    name: "neon",
    height: "480px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-protect)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--gutter-desktop)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, ev.genres.map(g => /*#__PURE__*/React.createElement(Badge, {
    key: g,
    tone: "violet"
  }, g)), /*#__PURE__*/React.createElement(Badge, {
    tone: "lime",
    variant: "solid"
  }, "Wave 2 Open"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm"
  }, "18+")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--display-2)',
      transform: 'skewX(var(--skew-brand))',
      transformOrigin: 'left bottom',
      textShadow: 'var(--shadow-sticker)'
    }
  }, ev.title), /*#__PURE__*/React.createElement(MetaLine, {
    size: "lg",
    tone: "pink",
    items: [ev.date, ev.venue, ev.time]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--gutter-desktop) var(--space-12)',
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 'var(--space-11)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: 'lineup',
      label: 'Lineup',
      count: 5
    }, {
      value: 'info',
      label: 'Info'
    }, {
      value: 'venue',
      label: 'Venue'
    }],
    style: {
      marginBottom: 'var(--space-8)'
    }
  }), tab === 'lineup' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, LINEUP.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    style: {
      display: 'grid',
      gridTemplateColumns: '90px 1fr auto auto',
      gap: 'var(--space-5)',
      alignItems: 'center',
      padding: 'var(--space-5) 0',
      borderBottom: '1px solid var(--line-hairline)',
      boxShadow: i === 0 ? 'inset 3px 0 0 var(--neon-pink)' : 'none',
      paddingLeft: i === 0 ? 'var(--space-5)' : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-lg)',
      letterSpacing: 'var(--track-mono)',
      color: i === 0 ? 'var(--neon-pink)' : 'var(--text-muted)'
    }
  }, s.time), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--heading-2)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-display)',
      color: 'var(--text-strong)'
    }
  }, s.name), /*#__PURE__*/React.createElement(Badge, {
    tone: "cyan",
    variant: "soft",
    size: "sm"
  }, s.tag), /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    items: [s.room]
  })))), tab === 'info' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      maxWidth: 'var(--measure-prose)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-lg)',
      color: 'var(--text-strong)'
    }
  }, "Doors 22:00. Last entry 01:00."), /*#__PURE__*/React.createElement("p", null, "A night designed to be not found. Two rooms, one rig, captured multi-camera and released free after the fact. Tickets release in waves \u2014 wave 2 is open now."), /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "lime",
    items: ['600–1,000 capacity', 'Two rooms', '200 free community tickets']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--space-5)',
      background: 'var(--ink-100)',
      borderLeft: 'var(--border-loud) solid var(--neon-amber)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "violet",
    items: ['Notice']
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--body-sm)'
    }
  }, "Wave 1 sold out in four minutes. Wave 3 opens Thursday 21:00."))), tab === 'info' && null, tab === 'venue' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(ContactSheet, {
    height: 230,
    columns: "1fr 1fr",
    bracket: "cyan",
    cells: [{
      node: /*#__PURE__*/React.createElement(Photo, {
        name: "room"
      }),
      caption: 'Venue · Production',
      tone: 'cyan'
    }, {
      node: /*#__PURE__*/React.createElement(Photo, {
        name: "grid"
      }),
      caption: 'Floor plan · Two rooms',
      tone: 'lime'
    }]
  }), /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    items: ['Warehouse space · Manchester', 'Exact location released 48h before doors']
  }))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 'calc(var(--header-height) + var(--space-6))',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      background: 'var(--surface-card)',
      border: '1px solid var(--line-hairline)',
      borderTop: 'var(--border-loud) solid var(--neon-pink)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-7)',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "pink",
    items: ['Tickets', 'Wave 2 of 3']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--heading-1)',
      color: 'var(--text-strong)'
    }
  }, "\xA318"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm)',
      color: 'var(--text-faint)'
    }
  }, "+ \xA31.80 FEE")), /*#__PURE__*/React.createElement(Select, {
    label: "Pass type",
    options: ['Wave 2 · £18', 'Wave 3 · £25 (Thu)', 'Guest list · request']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Quantity",
    options: ['1', '2', '3', '4']
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Text me when doors open",
    description: "One message per event \xB7 no marketing",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    sticker: true,
    onClick: onCheckout
  }, "Get Pass"), /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    items: ['40 left in wave 2']
  }))), /*#__PURE__*/React.createElement(Marquee, {
    items: ['Wave 2 open · £18', 'Doors 22:00', 'Last entry 01:00'],
    tone: "violet"
  }), /*#__PURE__*/React.createElement(Footer, null));
}
window.EventDetail = EventDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EventDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function Home({
  go
}) {
  const [filter, setFilter] = React.useState('All');
  const shown = filter === 'All' ? EVENTS : EVENTS.filter(e => e.genres.includes(filter));
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: "crowd",
    height: "560px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-protect)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--gutter-desktop) var(--space-11)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: "live",
    detail: "1,284 watching",
    glow: true
  }), /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    items: ['Underground premium', 'Live stream', '2025']
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--display-1)',
      transform: 'skewX(var(--skew-brand))',
      transformOrigin: 'left bottom',
      textShadow: 'var(--shadow-sticker)',
      maxWidth: '16ch'
    }
  }, "Error 404"), /*#__PURE__*/React.createElement(MetaLine, {
    size: "lg",
    tone: "pink",
    items: ['10.10.2026', 'Warehouse · Manchester', '22:00 — 04:00']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    sticker: true,
    onClick: () => go('event')
  }, "Get Pass"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    tone: "cyan",
    onClick: () => go('event')
  }, "Lineup"))))), /*#__PURE__*/React.createElement(Marquee, {
    items: ['Error 404 · 10.10.2026 · Manchester', 'Wave 2 open', 'Not found · You had to be there', 'Piano.wav · Sat 28 Nov · Birmingham']
  }), /*#__PURE__*/React.createElement(Section, {
    label: "Upcoming \xB7 4 dates",
    title: "What's On",
    accent: "pink"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-8)'
    }
  }, ['All', 'Afrohouse', 'Afrotech', 'Gqom', 'Amapiano'].map(g => /*#__PURE__*/React.createElement(Tag, {
    key: g,
    selected: filter === g,
    onClick: () => setFilter(g)
  }, g))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
      gap: 'var(--space-6)'
    }
  }, shown.map(e => /*#__PURE__*/React.createElement(Card, {
    key: e.id,
    interactive: true,
    accent: "pink",
    onClick: () => go('event'),
    label: /*#__PURE__*/React.createElement("span", null, e.date, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: .5
      }
    }, "\xB7"), " ", e.venue),
    title: e.title,
    meta: e.genres.join(' · ') + ' · ' + e.time,
    media: /*#__PURE__*/React.createElement(Photo, {
      name: e.photo
    }),
    mediaHeight: 200,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, e.status === 'soldout' ? /*#__PURE__*/React.createElement(StatusPill, {
      status: "soldout",
      size: "sm"
    }) : e.status === 'wave2' ? /*#__PURE__*/React.createElement(Badge, {
      tone: "lime",
      variant: "solid"
    }, "Wave 2 Open") : e.status === 'wave1' ? /*#__PURE__*/React.createElement(Badge, {
      tone: "cyan"
    }, "Wave 1") : /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      variant: "soft"
    }, "Announced"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: e.status === 'soldout' ? 'ghost' : 'primary',
      disabled: e.status === 'soldout'
    }, e.status === 'soldout' ? 'Sold Out' : 'Get Pass'))
  })))), /*#__PURE__*/React.createElement(Section, {
    label: "Archive \xB7 20 nights since 2021",
    title: "The Room",
    accent: "violet"
  }, /*#__PURE__*/React.createElement(ContactSheet, {
    columns: "2fr 1fr 1fr",
    height: 300,
    cells: [{
      node: /*#__PURE__*/React.createElement(Photo, {
        name: "floor"
      }),
      caption: 'Crowd · Energy',
      tone: 'pink'
    }, {
      node: /*#__PURE__*/React.createElement(Photo, {
        name: "booth"
      }),
      caption: 'Artist · Performance',
      tone: 'cyan'
    }, {
      node: /*#__PURE__*/React.createElement(Photo, {
        name: "room"
      }),
      caption: 'Venue · Production',
      tone: 'lime'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: '3px'
    }
  }, ['foil', 'neon', 'grid', 'flyer'].map((p, i) => /*#__PURE__*/React.createElement(Photo, {
    key: p,
    name: p,
    height: "150px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-protect)',
      opacity: .8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      padding: '8px 10px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: '#fff'
    }
  }, ['Texture · Iridescence', 'Brand · Neon', 'Graphic Language', 'Flyer Identity'][i]))))), /*#__PURE__*/React.createElement(Section, {
    label: "Never offline",
    title: "Can't Make The Room?",
    accent: "cyan",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'var(--space-11)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-lg)',
      color: 'var(--text-strong)',
      maxWidth: '46ch'
    }
  }, "Every night is captured by a multi-camera crew and released free after the fact. You could not find it while it was happening. You will wish you had."), /*#__PURE__*/React.createElement(MetaLine, {
    tone: "lime",
    size: "sm",
    items: ['1080p', 'Multi-cam', 'Released free', 'Not found']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "cyan",
    onClick: () => go('stream')
  }, "Watch Live"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('404')
  }, "Replays \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: "dj",
    height: "280px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-protect)',
      opacity: .7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'var(--space-5)',
      left: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: "live",
    detail: "1,284",
    glow: true
  }))))), /*#__PURE__*/React.createElement(Footer, null));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NotFound.jsx
try { (() => {
function NotFound({
  go
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      minHeight: '70vh',
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-12) var(--gutter-desktop)',
      backgroundImage: 'var(--texture-grid)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-6)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: "error",
    label: "Error 404",
    detail: "Not found"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--display-hero)',
      transform: 'skewX(var(--skew-brand))',
      color: 'var(--neon-pink)',
      textShadow: 'var(--shadow-sticker-lg)',
      animation: 'nof-flicker 4s var(--ease-standard) infinite'
    }
  }, "404"), /*#__PURE__*/React.createElement(MetaLine, {
    size: "lg",
    wide: true,
    items: ['Not found', 'You had to be there']
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '44ch'
    }
  }, "This page dropped off the network. The nights don't."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('home')
  }, "What's On"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    tone: "cyan",
    onClick: () => go('stream')
  }, "Watch Live"))));
}
window.NotFound = NotFound;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NotFound.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StreamPage.jsx
try { (() => {
function StreamPage({
  go
}) {
  const [muted, setMuted] = React.useState(true);
  const [chat, setChat] = React.useState(true);
  const msgs = [['k3_', 'log drum incoming'], ['ade.mcr', 'this rig is unreal'], ['404_kid', 'who\u2019s on at 1'], ['selina', 'stream is crisp tonight'], ['jsn', 'room 2 going off']];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: chat ? '1fr 340px' : '1fr',
      height: 'calc(100vh - var(--header-height))',
      minHeight: '620px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--ink-000)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    name: "dj",
    height: "100%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'var(--space-6)',
      left: 'var(--space-6)',
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: "live",
    detail: "1,284 watching",
    glow: true
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "violet"
  }, "Room 1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 'var(--space-9) var(--space-7) var(--space-6)',
      background: 'var(--gradient-protect)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--display-3)'
    }
  }, "T3BZA"), /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "pink",
    items: ['Error 404', 'Warehouse · Manchester', '23:15 — 00:30']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Pause",
    variant: "solid",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(PixelIcon, {
      name: "pause",
      size: 22
    })
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: muted ? 'Unmute' : 'Mute',
    variant: "outline",
    tone: "cyan",
    active: !muted,
    onClick: () => setMuted(!muted),
    icon: /*#__PURE__*/React.createElement(PixelIcon, {
      name: muted ? 'volume-x' : 'volume-2'
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: '4px',
      background: 'rgba(255,255,255,.14)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '0 34% 0 0',
      background: 'var(--neon-pink)'
    }
  })), /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "lime",
    items: ['Uptime 06:12:44', '1080p']
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Chat",
    tone: "lime",
    active: chat,
    onClick: () => setChat(!chat),
    icon: /*#__PURE__*/React.createElement(PixelIcon, {
      name: "message"
    })
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Fullscreen",
    icon: /*#__PURE__*/React.createElement(PixelIcon, {
      name: "external-link"
    })
  })))), chat && /*#__PURE__*/React.createElement("aside", {
    style: {
      borderLeft: '1px solid var(--line-hairline)',
      background: 'var(--ink-100)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tone: "cyan",
    bracket: "none",
    tabs: ['Chat', 'Lineup']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, msgs.map(([u, t], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: i % 3 === 0 ? 'lime' : i % 3 === 1 ? 'cyan' : 'violet',
    items: [u]
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--body-sm)',
      color: 'var(--text-body)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      borderTop: '1px solid var(--line-hairline)',
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Say something",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    tone: "cyan"
  }, "Send")))), /*#__PURE__*/React.createElement(Marquee, {
    items: ['Up next · MK 00:30', 'Replays live for 7 days', 'Room 2 · DJ Amy 01:45'],
    tone: "cyan"
  }), /*#__PURE__*/React.createElement(Footer, null));
}
window.StreamPage = StreamPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StreamPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shared.jsx
try { (() => {
/* Never Offline — website kit shared bits. Loaded as a plain babel script; no imports. */
const {
  Logo,
  MetaLine,
  StatusPill,
  Marquee,
  Badge,
  Tag,
  Button,
  IconButton,
  Card,
  ContactSheet,
  Tabs,
  NavBar,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Dialog,
  Toast,
  Tooltip,
  PixelIcon,
  SystemStatus
} = window.NeverOfflineDesignSystem_99da47;
const ASSETS = '../../assets';
const PHOTOS = {
  crowd: 'crowd-balcony-green.jpg',
  booth: 'booth-flowerwall.jpg',
  dj: 'set-03026.jpg',
  neon: 'floor-neon-red.jpg',
  room: 'room-wide-green.jpg',
  foil: 'portraits-violet.jpg',
  flyer: 'confetti-bottles.jpg',
  grid: 'set-03451.jpg',
  floor: 'crowd-spotlight-dark.jpg',
  set1: 'set-02970.jpg',
  set2: 'set-02991.jpg',
  set3: 'set-03067.jpg',
  set4: 'set-03489.jpg'
};
/* Real event photography, kept as shot (duotone is the exception — see readme.md). */
function Photo({
  name = 'crowd',
  height = '100%',
  duotone = false,
  children,
  style
}) {
  const src = ASSETS + '/photography/' + (PHOTOS[name] || PHOTOS.crowd);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      overflow: 'hidden',
      background: 'var(--ink-100)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: duotone ? 'grayscale(1) contrast(1.25)' : 'none',
      mixBlendMode: duotone ? 'screen' : 'normal'
    }
  }), duotone && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--event-primary)',
      mixBlendMode: 'multiply'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'var(--texture-scanline)',
      opacity: .6
    }
  }), children);
}
const LINEUP = [{
  time: '22:00',
  name: 'Deejay J3',
  room: 'Main',
  tag: 'Afrohouse'
}, {
  time: '23:15',
  name: 'T3BZA',
  room: 'Main',
  tag: 'Afrotech'
}, {
  time: '00:30',
  name: 'MK',
  room: 'Main',
  tag: 'Amapiano'
}, {
  time: '01:45',
  name: 'DJ Amy',
  room: 'Room 2',
  tag: 'Gqom'
}, {
  time: '03:00',
  name: 'Santos',
  room: 'Room 2',
  tag: 'Amapiano'
}];
const EVENTS = [{
  id: '404',
  title: 'Error 404',
  date: '10.10.2026',
  venue: 'Warehouse · Manchester',
  time: '22:00 — 04:00',
  photo: 'crowd',
  status: 'wave2',
  genres: ['Afrohouse', 'Afrotech', 'Gqom', 'Amapiano'],
  event: 'error404'
}, {
  id: 'pianowav',
  title: 'Piano.wav',
  date: 'Sat 28 Nov',
  venue: 'Birmingham',
  time: '23:00 — 06:00',
  photo: 'neon',
  status: 'wave1',
  genres: ['Amapiano'],
  event: 'pianowav'
}, {
  id: 'pianowav-2',
  title: 'Piano.wav 02',
  date: 'Fri 12 Dec',
  venue: 'Manchester',
  time: '22:00 — 05:00',
  photo: 'room',
  status: 'soldout',
  genres: ['Amapiano', 'Gqom'],
  event: 'pianowav'
}, {
  id: '404-2',
  title: 'Error 404 / 02',
  date: 'Sat 20 Feb',
  venue: 'Birmingham',
  time: '21:00 — 06:00',
  photo: 'floor',
  status: 'announced',
  genres: ['Afrohouse', 'Afrotech'],
  event: 'error404'
}];
const Section = ({
  label,
  title,
  children,
  accent = 'pink',
  style
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: 'var(--space-12) var(--gutter-desktop)',
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    ...style
  }
}, (label || title) && /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-4)',
    marginBottom: 'var(--space-9)'
  }
}, label && /*#__PURE__*/React.createElement(MetaLine, {
  tone: accent,
  size: "sm",
  items: [label]
}), title && /*#__PURE__*/React.createElement("h2", {
  style: {
    fontSize: 'var(--display-3)'
  }
}, title)), children);
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--line-hairline)',
      background: 'var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--gutter-desktop) var(--space-8)',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1.4fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "dark",
    height: 44,
    basePath: ASSETS
  }), /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    items: ['Afrohouse', 'Afrotech', 'Gqom', 'Amapiano']
  })), [['Events', ['Upcoming', 'Archive', 'Guest list']], ['Stream', ['Watch live', 'Replays', 'Quality']]].map(([h, ls]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "violet",
    items: [h]
  }), ls.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 'var(--body-sm)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    size: "sm",
    tone: "lime",
    items: ['Signal']
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Doors, times and stream links, straight to you."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "you@domain.com",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    tone: "lime"
  }, "Join")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--gutter-desktop) var(--space-9)',
      borderTop: '1px solid var(--line-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    wide: true,
    size: "sm",
    items: ['Never Offline Entertainment', 'Manchester · Birmingham', 'neveroffline.uk']
  }), /*#__PURE__*/React.createElement(MetaLine, {
    wide: true,
    size: "sm",
    items: ['@neverofflineuk']
  })));
}
Object.assign(window, {
  Logo,
  MetaLine,
  StatusPill,
  Marquee,
  Badge,
  Tag,
  Button,
  IconButton,
  Card,
  ContactSheet,
  Tabs,
  NavBar,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Dialog,
  Toast,
  Tooltip,
  PixelIcon,
  SystemStatus,
  ASSETS,
  PHOTOS,
  Photo,
  LINEUP,
  EVENTS,
  Section,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ContactSheet = __ds_scope.ContactSheet;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.MetaLine = __ds_scope.MetaLine;

__ds_ns.RecordsLockup = __ds_scope.RecordsLockup;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.SystemStatus = __ds_scope.SystemStatus;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.PixelIcon = __ds_scope.PixelIcon;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ChromeTitle = __ds_scope.ChromeTitle;

__ds_ns.ScrawlMark = __ds_scope.ScrawlMark;

__ds_ns.Stamp = __ds_scope.Stamp;

})();
