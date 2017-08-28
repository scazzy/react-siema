export default (() => {
    if(typeof document !== 'undefined') {
        const { transform } = document.documentElement.style;
        if (typeof transform === 'string') {
            return 'transform';
        }
    }
    return 'WebkitTransform';
})();
