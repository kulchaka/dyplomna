function removeCrds(container) {
    while (container.firstChild) {
        container.firstChild.remove();
    }
}

export {
    removeCrds
};