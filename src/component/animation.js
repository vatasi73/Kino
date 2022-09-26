export const itemsVariant = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 1,
    },
  }),
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
  hover: {
    scale: 1.1,
  },
};
export const detailsVariant = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 3,
    },
  }),
  hidden: {
    opacity: 0,
  },
};
