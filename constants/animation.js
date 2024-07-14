export const containerVariants = (delay = 0) => ({
  offscreen: {
    opacity: 0,
    y: 30,
  },

  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 2,
      delay,
    },
  },
});

export const tagVariants = {
  offscreen: {
    opacity: 0,
    y: 10,
  },

  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 2.8,
      delay: 0.4,
    },
  },
};

export const titleVariants = {
  offscreen: {
    opacity: 0,
    y: 30,
  },

  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 2.2,
    },
  },
};

export const desVariants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },

  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 2.6,
      delay: 0.2,
    },
  },
};

export const fadeVariants = {
  offscreen: {
    opacity: 0,
  },

  onscreen: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2.4,
    },
  },
};

export const quickPopUpVariants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
};

// slide in from left to right using a delay variant
export const slideInVariants = {
  offscreen: {
    opacity: 0,
    x: -30,
  },

  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 2.2,
    },
  },
};

// slide in from right to left using a delay variant
export const slideInRightVariants = {
  offscreen: {
    opacity: 0,
    x: 30,
  },

  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 2.2,
    },
  },
};

// tile game flip animation
export const flipVariants = {
  hidden: {
    rotateY: 0,
  },
  visible: {
    rotateY: 180,
    transition: {
      duration: 0.6,
    },
  },
};
