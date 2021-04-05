export const moveToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

export const scrollDown = (target) => document.querySelector(target).scrollIntoView();