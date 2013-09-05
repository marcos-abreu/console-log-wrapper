window.log = function() {
    log.history = log.history || [];
    log.history.push(arguments);
    if (typeof console !== "undefined" && console.log) {
        return console.log.apply(this, arguments);
    }
};
