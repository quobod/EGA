window.onload = () => {initApp();};

const initApp = () => {
    const urls = [
        {name: cfc('posts'), url: posts},
        {name: cfc('post'), url: post},
        {name: cfc('photos'), url: photos},
        {name: cfc('comments'), url: comments},
        {name: cfc('users'), url: users},
        {name: cfc('jokes'), url: jokes},
        {name: cfc('albums'), url: albums}
    ];
    const count = urls.length;
    const output = getElement('output');
    
    // Clear output div
    removeElements(output);

    urls.map(url => {
        // Create the parent div
        let parent = createElement('div');

        // Add to the output div
        appendElement(output, parent);
        
        // Add proper attributes
        addAttribute(parent, 'class', 'row');

        // Create the header
        let header = createElement('div');
        
        // Add proper attributes
        addAttribute(header, 'class', 'header');
        
        // Add a header element to header
        let h = createElement('h3');
        h.innerHTML = `${url.name}`;

        // Add it to header
        appendElement(header, h);

        // Add to the parent
        appendElement(parent, header);

        // Create the main body
        let main = createElement('div');
        addAttribute(main, 'class', 'body');

        // Create the body's inners
        main.innerHTML = `<a href="${url.url}" target="_blank">Get ${url.name}</a>`;

        // Add to the parent
        appendElement(parent, main);

        // Create the footer
        let footer = createElement('div');

        // Add a para element to footer
        let p = createElement('p');
        addAttribute(p, 'class', 'v-scroll');
        p.innerHTML = `${url.url} <span class="copyright">Queueb &copy;2018</span>`;

        // Add para to the footer
        appendElement(footer, p);
                
        // Add proper attributes
        addAttribute(footer, 'class', 'footer');
       
        // Add to the parent
        appendElement(parent, footer);

    });

}; 