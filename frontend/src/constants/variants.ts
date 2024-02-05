export const menuVariants = {
    opened: {
        top: 0,
    },
    closed: {
        top: "-60vh",
    },
};

export const menuItemsVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0 },
    },
    closed: {
        transition: { staggerChildren: 0.07, staggerDirection: -1 },
    },
};

export const menuItemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

export const domainVariants = {
    start: {
        y: 50,
        opacity: 0,
    },
    stop: {
        y: 0,
        opacity: 1,
    },
};

export const projectVariants = domainVariants;