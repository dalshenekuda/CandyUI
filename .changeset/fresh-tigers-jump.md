---
'@dalshenekuda/candy-ui': patch
---

Ship the two bundled fonts as real files under `build/fonts/` instead of inlining them as base64 in `style.css`. Drops the published stylesheet from ~147KB to ~33KB and lets browsers cache fonts separately from CSS.
