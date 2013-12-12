function synchronize(callback) {

    var original_implementation = this.setTimeout;

    this.setTimeout = function(callback) {
        callback();
    };

    try {
        callback();
    }
    finally {
        this.setTimeout = original_implementation
    }
}