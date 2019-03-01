// @flow

const HoverMonitor = () => {
  let hoverEnabled = true;

  function enableHover() {
    if (!hoverEnabled) {
      hoverEnabled = true;
    }
  }

  function disableHover() {
    if (hoverEnabled) {
      hoverEnabled = false;
    }
  }

  /* eslint-disable no-undef */
  if (typeof document !== 'undefined') {
    document.addEventListener('touchstart', disableHover, true);
    document.addEventListener('mousemove', enableHover, true);
    /* eslint-enable no-undef */
  } else {
    hoverEnabled = false;
  }

  return {
    get hoverEnabled() {
      return hoverEnabled;
    },
  };
};

export default HoverMonitor;
