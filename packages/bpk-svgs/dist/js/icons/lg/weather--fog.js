import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M17.263 17H6.211C3.885 17 2 15.071 2 12.692c0-2.043 1.409-3.755 3.28-4.197A1.52 1.52 0 0 0 6.4 7.416C7.05 4.875 9.312 3 12 3c2.391 0 4.444 1.483 5.327 3.6.175.42.549.726.984.827C20.423 7.915 22 9.846 22 12.154 22 14.83 19.88 17 17.263 17zM3 19a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm2 3a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z" /></svg>);