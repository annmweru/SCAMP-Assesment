var Fibonnacci = function(t) {
    var c = 0, d = 1, e = 1;
    for(var i = 2; i <= t; i++) {
        e = c + d;
        c = d;
        d = e;
    }
    return e;
};