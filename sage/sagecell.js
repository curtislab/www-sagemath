// https://github.com/sagemath/sagecell/blob/master/doc/embedding.rst

$(sagecell.init(
    function() {
	if ($('.sagecell-plot').length) { 
		sagecell.makeSagecell({
		    inputLocation: '.sagecell-plot', 
		    // languages: sagecell.allLanguages, 
		    replaceOutput: true,
		    autoeval: false,
		    linked: false,
		    hide: ['messages', 'computationID', 'files', 'sageMode', 'editorToggle', 'sessionTitle', 'done', 'permalink'],
		    evalButtonText: 'Go!'});
	}

	if ($('.sagecell-linked').length) {
		sagecell.makeSagecell({
		    inputLocation: '.sagecell-linked', 
		    // languages: sagecell.allLanguages, 
		    replaceOutput: true,
		    autoeval: false,
		    linked: true,
		    hide: ['messages', 'computationID', 'files', 'sageMode', 'editorToggle', 'sessionTitle', 'done', 'permalink'],
		    evalButtonText: 'Go!'});
	}

	if ($('.sagecell-auto').length) {
		sagecell.makeSagecell({
		    inputLocation: '.sagecell-auto', 
		    // languages: sagecell.allLanguages, 
		    replaceOutput: true,
		    autoeval: true,
		    linked: false,
		    hide: ['messages', 'computationID', 'files', 'sageMode', 'editorToggle', 'sessionTitle', 'done', 'permalink'],
		    evalButtonText: 'Go!'});
	}

	if ($('.sagecell-auto-hide').length) {
		sagecell.makeSagecell({
		    inputLocation: '.sagecell-auto-hide', 
		    // languages: sagecell.allLanguages, 
		    replaceOutput: true,
		    autoeval: true,
		    linked: false,
		    hide: ['messages', 'computationID', 'files', 'sageMode', 'editorToggle', 'sessionTitle', 'done', 'permalink', 'editor', 'evalButton'],
		    evalButtonText: 'Go!'});
	}
    }
 ))
