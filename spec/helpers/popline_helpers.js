jQuery.fn.showPopline = function() {
    var element = $(this);
    synchronize(function() {
        element.selectText();
        element.mousedown();
        element.mouseup();
    });
    return this;
};

jQuery.fn.applyStyle = function(type){
    var element = $(this);
    element.find('.icon-' + type).click();
    return this;
};