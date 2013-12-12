describe('Simple styles', function() {

    var $editor, $popline;

    beforeEach(function() {
        $('<div class="editor" contenteditable="true">Text goes here</div><div class="not-editor"></div>').appendTo('body');
        $editor = $('.editor');

        $editor.popline();
        $popline = $('.popline');
    });

    afterEach(function () {
        $editor.popline('destroy');
        $popline.remove();
        $editor.remove();
    });

    describe('Italic button', function() {

        beforeEach(function() {
            $editor.showPopline();
        });

        it('should make the text italic after first click', function() {
            expect($editor.has('i').length).toBeFalsy();
            $popline.applyStyle('italic');
            expect($editor.has('i').length).toBeTruthy();
        });

        it('should remove the italic from the text when clicked twice', function() {
            expect($editor.has('i').length).toBeFalsy();
            $popline.applyStyle('italic').applyStyle('italic');
            expect($editor.has('i').length).toBeFalsy();
        });

    });

    describe('Bold button', function() {

        beforeEach(function() {
            $editor.showPopline();
        });

        it('should make the text bold after first click', function() {
            expect($editor.has('b').length).toBeFalsy();
            $popline.applyStyle('bold');
            expect($editor.has('b').length).toBeTruthy();
        });

        it('should remove the bold from the text when clicked twice', function() {
            expect($editor.has('b').length).toBeFalsy();
            $popline.applyStyle('bold').applyStyle('bold');
            expect($editor.has('b').length).toBeFalsy();
        });

    });

    describe('Compound styles', function() {

        beforeEach(function() {
            $editor.showPopline();
        });

        it('should allow multiple styles to be applied to the text', function() {
            $popline.applyStyle('bold').applyStyle('italic');
            expect($editor.has('b').length).toBeTruthy();
            expect($editor.has('i').length).toBeTruthy();
        });

        it('should allow multiple styles to be removed from the text', function() {
            $popline.applyStyle('bold').applyStyle('italic');
            $popline.applyStyle('bold').applyStyle('italic');
            expect($editor.has('b').length).toBeFalsy();
            expect($editor.has('i').length).toBeFalsy();
        });
    });

});