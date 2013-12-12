describe('Popline editor', function() {

    var $editor, $not_editor, $popline;

    describe('Before initialization', function() {

        beforeEach(function() {
            $('<div class="editor" contenteditable="true">Text goes here</div><div class="not-editor"></div>').appendTo('body');
            $editor = $('.editor');
            $popline = $('.popline');
        });

        afterEach(function () {
            $editor.remove();
        });

        it('should initially have no editor on the page', function() {
            expect($popline.length).toEqual(0);
        });

    });

    describe('After initialization', function() {

        beforeEach(function() {
            $('<div class="editor" contenteditable="true">Text goes here</div><div class="not-editor"></div>').appendTo('body');
            $editor = $('.editor');
            $not_editor = $('.not-editor');

            $editor.popline();
            $popline = $('.popline');
        });

        afterEach(function () {
            $editor.popline('destroy');
            $popline.remove();
            $editor.remove();
        });

        it('should add the popline editor to the page', function() {
            expect($popline.length).toEqual(1);
        });

        it('should show popline editor after editor text has been selected', function() {
            expect($popline.is(':visible')).toBeFalsy();

            synchronize(function() {
                $editor.selectText();
                $editor.mousedown();
                $editor.mouseup();
            });

            expect($popline.is(':visible')).toBeTruthy();
        });
    });
});






























