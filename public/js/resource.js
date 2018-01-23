const group = [],
	days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
	week = days,
	months = ["January","February","March","April","May","June","July","August","September","October","November","December"],
	calendar = months;

// External APIs
const posts = 'https://jsonplaceholder.typicode.com/posts';
const post = 'https://jsonplaceholder.typicode.com/posts/';
const photos = 'https://jsonplaceholder.typicode.com/photos';
const comments = 'https://jsonplaceholder.typicode.com/comments';
const users = 'https://jsonplaceholder.typicode.com/users';
const albums = 'https://jsonplaceholder.typicode.com/albums';
const todos = 'https://jsonplaceholder.typicode.com/users';
const githubapi = 'https://api.github.com/users';
const jokes = 'http://api.icndb.com/jokes/random';
const list = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];
const urls = [
    posts,
    photos,
    comments,
    users,
    albums,
    todos
];

// Root file path
const root = 'assets/data/';

// Utils
const my_test = (arg = '\n\n\n\t\t\t\t\t\t\tThis is only a test') => console.log(arg);
const log = (arg = '') => console.log(arg);
const cls = () => console.clear();
const message = (arg = '') => window.alert(arg);

// Dummy data structures
const times = {
    title: 'Time Formats',
    body: [
        new Date().getHours(),
        new Date().getMinutes(),
        new Date().getSeconds()
    ]
};

const moelester = {
    name: 'Moe Lester',
    username: 'moelester',
    email: 'mlest@excite.com'
};

const chrispbacon = {
    name: 'Chris P. Bacon',
    username: 'chrispbacon',
    email: 'chrispbacon@@news.net'
};

const loudonclaire = {
    name: 'Loudon Claire',
    username: 'lclaire',
    email: 'loudonc@@gathering.org'
};

const dummies = [
    moelester,
    chrispbacon,
    loudonclaire
];

// Global
/**
*   Empty*/

/*


    @desc Inserts a text node in an element - chooses element based on class name|ID
    @params arg {property : class|id, text: newTextnodeValue}|[property,textNodevalue]|comma-separated string   e.g. className|ID,newTextNodeValue
    @return false default
*/
const msg = (arg) => {
    let element = null;
    let property = '',
       value = '',
       textNode = null;

    if (null != arg && 'undefined' != arg) {
        // If the argument is an Array
        if (Array.isArray(arg)) {
            if (null != (element = document.querySelector('.' + arg[0]))) {
                textNode = document.querySelector('#' + arg[1]);
                element.appendChild(textNode);
                element.appendChild(document.createElement('br'));
                return true;
            } 
            else if (null != (element = document.querySelector('#' + arg[0]))) {
                textNode = document.createTextNode(arg[1]);
                element.appendChild(textNode);
                element.appendChild(document.createElement('br'));
                return true;
            }
        }
        // If the argument is an Object
        else if ((arg instanceof Object) && !(arg instanceof Array)) {
            if (null != (element = document.querySelector('.' + arg.property))) {
                textNode = document.createTextNode(arg.text);
                element.appendChild(textNode);
                element.appendChild(document.createElement('br'));
                return true;
            } 
            else if (null != (element = document.querySelector('#' + arg.property))) {      
                textNode = document.createTextNode(arg.text);
                element.appendChild(textNode);
                element.appendChild(document.createElement('br'));
                return true;
            }
        }
        // If the argument is a String
        else if (typeof arg === 'string' && arg.length > 0) {
            if (arg.includes(',')) {
                let argSplit = arg.trim().split(',');
                if (null != (element = document.querySelector('.' + argSplit[0]))) {         
                    let newText = (argSplit[1]);
                    textNode = document.createTextNode(newText);
                    element.appendChild(textNode);
                    element.appendChild(document.createElement('br'));
                    return true;
                }
                else if (null != (element = document.querySelector('#' + argSplit[0]))) {     
                    let newText = (argSplit[1]);
                    textNode = document.createTextNode(newText);
                    element.appendChild(textNode);
                    element.appendChild(document.createElement('br'));
                    return true;
                }
            }
        }
    }

    return false;
};

/*
    @desc Returns the number with correct suffix e.g. 51st, 82nd, 33rd, 112th
    @param arg String|Number
    @return boolean false if argument is invalid
*/
const suffix = (arg) => {
    if (null != arg && 'undefined' != arg) {
        const pattern = /[0-9]+/;
        if (pattern.test(arg)) {
            let strNum = arg.toString();
            let index = (strNum.length - 1);
            switch(strNum.substring(index)) {
                case '1':
                    return arg + 'st';

                case '2':
                    return arg + 'nd';

                case '3':
                    return arg + 'rd';

                default:
                    return arg + 'th';
            }
        }
    }
    return false;
};

/*
    @desc Adds an event handler to an element
    @param object - reference to the element
    @param event - the name of the event to register
    @param handler - the function to fire for the event*/
const addHandler =  (object, event, handler) => {
    object.addEventListener(event, handler, true);
};

const insertHandler = (classNameOrId, event, handler) => {
    let element = null;
    if (null != (element = document.querySelector('.' + classNameOrId)) &&
    'undefined' != (element = document.querySelector('.' + classNameOrId))) {
        element.addEventListener(event, handler, true);
    }
    else if (null != (element = document.querySelector('#' + classNameOrId)) &&
    'undefined' != (element = document.querySelector('#' + classNameOrId))) {
        element.addEventListener(event, handler, true);
    }
};

/*
    @desc Adds or replaces an element's changable properties
    @param object - reference to the element
    @param property - the name of the property to insert or change
    @param value - the new value of the property*/
const addAttribute = (object, property, value) => {
    object.setAttribute(property, value);
}

/*
    @desc Returns a B element that contains the current date and time*/
const stamp = () => {
	return date() + '  ' + time();
};

/*
    @desc Returns the current time - formatted as hours:minutes:seconds*/
const time = () => {
	let d = new Date(),
		seconds = null,
		minutes = null,
		hours = null;
	
	switch (d.getSeconds()) {
		case 0:
			seconds = '00';
			break;
		case 1:
			seconds = '01';
			break;
		
		case 2:
			seconds = '02';
			break;
			
		case 3:
			seconds = '03';
			break;
			
		case 4:
			seconds = '04';
			break;
			
		case 5:
			seconds = '05';
			break;
			
		case 6:
			seconds = '06';
			break;
			
		case 7:
			seconds = '07';
			break;
			
		case 8:
			seconds = '08';
			break;
			
		case 9:
			seconds = '09';
			break;
			
		default:
			seconds = d.getSeconds();
			break;
	}
	
	switch (d.getMinutes()) {
		
		case 0:
			minutes = '00';
			break;
		case 1:
			minutes = '01';
			break;
		
		case 2:
			minutes = '02';
			break;
			
		case 3:
			minutes = '03';
			break;
			
		case 4:
			minutes = '04';
			break;
			
		case 5:
			minutes = '05';
			break;
			
		case 6:
			minutes = '06';
			break;
			
		case 7:
			minutes = '07';
			break;
			
		case 8:
			minutes = '08';
			break;
			
		case 9:
			minutes = '09';
			break;
			
		default:
			minutes = d.getMinutes();
			break;
	}
	
	switch (d.getHours()) {
		
		case 0:
			hours = '00';
			break;
		case 1:
			hours = '01';
			break;
		
		case 2:
			hours = '02';
			break;
			
		case 3:
			hours = '03';
			break;
			
		case 4:
			hours = '04';
			break;
			
		case 5:
			hours = '05';
			break;
			
		case 6:
			hours = '06';
			break;
			
		case 7:
			hours = '07';
			break;
			
		case 8:
			hours = '08';
			break;
			
		case 9:
			hours = '09';
			break;
			
		default:
			hours = d.getHours();
			break;
	}
	
	let time = hours + '\:' + minutes + '\:' + seconds;
	return time;
};

/*
    @desc Returns the current date - formatted as day month date full year */
const date = () => {
	let d = new Date();
	let date = days[d.getDay()] +  ' ' + months[d.getMonth()] + ' ' + suffix(d.getDate('Greenwich Mean Time')) + ' ' + d.getFullYear();
	return date;
};

/*
    @desc Continuously executes the given method
    @param method The function to execute
    @param count The number of seconds
    @returns integer The setInterval value */
const startInterval = (method, count = 3) => {
	return setInterval(function(){
		switch (typeof(method)) {
			case 'function':
				method();
				break;
		}
	},(count*1000));
};

/*
    @desc Stops the doInterval execution*/
const stopInterval = (object) => {
	clearInterval(object);
	object = 0;
};

// Document utils
const getElement = (classOrId) => {
    return document.querySelector('#' + classOrId) || document.querySelector('.' + classOrId) || null;
};

const createElement = (type) => { return document.createElement(type); };

const createTextNode = (str) => { return document.createTextNode(str); };

const appendElement = (parent, child) => { parent.appendChild(child); };

const prependElement = (parent, child, index) => { parent.insertBefore(child,parent.childNodes[index]); };

const replaceElement = (parent, newElement) => {
	if (parent.childNodes.length >= 1) {
        removeElements(parent);
	}
    
    appendElement(parent,newElement);
};

const removeElement = (parent, child) => { parent.removeChild(child); };

const removeElements = (parent) => {
    if (parent.childNodes.length > 0) {
        for (let i = 0; i<parent.childNodes.length; i++ ){
            let child = parent.childNodes[i];
            parent.removeChild(child);
        }
    }
};

const removeElementsFrom = (parent, index) => {
	for (;index < (parent.childNodes.length); index++) {
		parent.removeChild(parent.childNodes[index]);
	}
};

const childCount = (parent) => { return parent.childNodes.length; };

const clearOutput = () => { if (getElement('output')){removeElements(getElement('output')); console.clear();} };

/**
    Regex Patterns*/

// Capture state's abbreviation
const statePattern = (arg) => {
    // const capture = / +?([^aeiouy]{2})$/;
     const capture = /[a-z]{2}/i;
    let captured = capture.exec(arg);
    // log(`Word:${arg}\nPattern: ${capture}\nCaptured: ${captured}`);
    return capture.test(arg);
};

let interval = 0;



/*
    @desc Fetching External Data
    @param url String example: 'http://api.icndb.com/jokes/random' */
function getData(url = null) {
    if (null == url || 'undefined' == url || (typeof url === 'string' && url.length < 1)) {
        return {Error: 'Invalid URL'};
    }
        // Create an XHR object
        const xhr = new XMLHttpRequest();

        // Open
        xhr.open('GET', url, true);

        // Optional 
        xhr.onprogress = () => {
            if (getElement('output')) {
                replaceElement(getElement('output'), createTextNode('Fetching...'));
            } else {
                log('Fetching...');
            }
        };

        xhr.onerror = function() {
            if (getElement('output')) {
                replaceElement(getElement('output'), createTextNode('Error occurred'));
            } else {
                log('Error occurred');
            }
        }

        xhr.onload = function(){
            switch(this.status) {
                case 200:
                    switch(this.readyState) {
                        case 4:
                            // log(this.responseText);
                            let response = JSON.parse(this.responseText);
                            response.value.forEach((joke) => {
                                let li = createElement('li');
                                li.innerHTML = '<b>' + joke.joke + '</b>';
                                appendElement(getElement('jokes'), li);
                            });
                            break;
                        
                        default:
                            break;
                    }
                    break;
                
                default:
                    break;
            }
        }

        // Send
        xhr.send();
}