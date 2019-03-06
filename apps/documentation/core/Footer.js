// @flow

import React from 'react';

/*::

type Props = {
  config: {
    copyright: string
  }
};

*/

module.exports = function Footer(props /*: Props */) {
  return (
    <footer className="nav-footer" id="footer">
      <section className="copyright">{props.config.copyright}</section>
    </footer>
  );
};
