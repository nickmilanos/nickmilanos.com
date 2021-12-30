export const moveToTop = (): void => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

export const scrollDown = (target: string): void => document.querySelector(target).scrollIntoView();