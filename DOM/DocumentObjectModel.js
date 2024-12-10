//talk to David to learn more about these!!

/*
This section has no test question so I have taken notes on what I've learned. 

Introduction to DOM: 

    When a document is loaded the browser creates a Document Object Model called a DOM for short. A DOM is a tree
    representation of the html document which can be modified with the use of Javascript

    Javascript is capable of adding, changing, and removing html elements and attributes, while also being capable 
    of changing all CSS styling or listening to html events like onClick, onScroll etc. 

    You can add Javascript directly to an html document by using the <script> [JavaScript Code Here] </script> tag or you can import a .js
    file into the html by adding the following line: <script> type= "text/javascript" src= "[javaScript File Name]" </script>. Users 
    are not restricted to using one of the above methods at a time. 

Selecting HTML Elements using JavaScript:

    getElementById('html-element-id') is a DOM method. As such in order to call it in a JavaScript file you must use: 
    document.getElementById(). If you are having trouble finding the element id be sure that the JavaScript file is being loaded in
    right before the end of the <body> tag, otherwise the javascript will run before corresponding section of the DOM has been loaded
    resulting in an error. Otherise if no element is found this will return 'Null'

    The following document methods can also be used in a similar manner, each targeting different tags or elements:
        getElementsByClass('html-class-string) - finds elements by class name. Returns an object containing all the relevant data for 
            the class. If NO elements match the class given in the arguments then this returns an empty array.
        getElementsByTagName('html-tag-string') - Same thing but for tag names ^
        
    Exploring around by printing these to the console log is a great way to explore on my own. 

Query Selectors:

    Query Selectors are DOM methods (document.method) that allow you to use CSS selectors to select HTML elements. It is the new way
    in JavaScript to select HTML elements. As such it does not work for old browsers like IE 7 and below. In such cases use the above 
    getElement____() methods listed in the previous section. 
    
    2 options: querySelector() and querySelectorAll()

    querySelector() returns only the first one that it finds. querySelectorAll() returns all elements with matching selectors.

Updateing HTML Elements:

    The .innerHTML property stored all information related to the HTML.
    
    Assigning one of the above selectors to a variable in js allows us to edit the html content as if it were an object.
        For example: Assuming the HTML has one 'countdown' id we can set this html to a js variable like:
            var countDownElement = document.getElementById('countdown')
        countDownElement.innerHTML; will then return all information from the HTML file related to the 'countdown' element ID
        countDownElement.innerHTML = someValue; will change the information in the HTML file

    Element.nameOfProperty is the common pattern to keep in mind for all of this

Updating Styles of HTML Elements:

    Syntax: The below can be used to both add and update element styling. 
        var selectedElement = getElemetnsById('selector')
        -OR-
        var selectedElement = querySelector('selector)
        -Then-
        selectedElement.style.propertyName = value;
        -i.e-
        selectedElement.style.fontSize = 300;
            All properties are converted to camel casing for JS
    
    Any changes made this way are only able to be "In Line Styles" which reset their values when a page is reloaded. This is important
    if using something like the interval() function that updates styles regularly. 

JavaScript Intro To Events:

    What is an event? An event is when some action happens on the webpage. Such as:
        - User clicks their mouse over a specific element
        - User hovers over a specific element
        - User presses a key on the keyboard
        - User resizes or closes the window
        - A webpage finishes loading
        - A form is submitted
        - A video is being played, paused, or finishes playing
    
    Alert function allows for a pop up notification: alert("text to show in the box");  

    Using the syntax from the selectors section we can combine this into something usable. Example below:

        //assign the html ID to the variable btn
        var btn = document.getElementById("desiredIdHere");
        //create a function that creates an alert when a button is pressed!
        btn.onClick = function (){
            alert("Button Clicked");
        }
    In the above example '.onClick' is an example of a Listener. Something that waits for an event before triggering the following code.
    Alternatively a user can call an existing function rather than one created within the scope of the listener event. When doing so be
    be sure to exclude the parenthesis() from the end of the function call or the function will run when the page loads, not when the
    listener event is triggered. Example:
        
        //assign the html ID to the variable btn
        var btn = document.getElementById("desiredIdHere");
        
        //Create a function that creates an alert when called
        function onBtnClick(){
            alert("Button Clicked!");
        }
        
        //Create a listener that responds with the above function when the button is clicked. Remember adding () after function name will
        //call the function when the page loads, not on click. 
        btn.onClick = onBtnClick;

    Alternatively you can achieve the same results as above using the '.addEventListener' method. This method takes two arguments
    1) Type of event: 'Click', 'Hover', 'Mouseover'... etc
    2) Function: What happens when the event
    Example below:
    
        //Use the 'onBtnClick' function and the 'btn' variable from the above example
        btn.addEventListener('click', onBtnClick);
    
Add and Remove Classes from HTML Elements:

    Modern browsers give us access to the property called 'classList' that holds all the classes of a given HTML Element
    To add a class use the .add() method. Example below:

        Syntax: 
        var selectedElement = getElemetnsById('selector')
        -OR-
        var selectedElement = querySelector('selector)
        -Then-
        selectedElement.classList.add('classNameHere')

    Classes are a way to apply styling effects in CSS. Having the ability to add or remove classes has a lot of potential. You can
    quickly apply many style changes to a single element by adding or removing classses. Look into CSS Styling to find out more. 

Javascript - Getting Styles

    There are two ways to get styles depending on how the style is created. Inline Styles or CSS File
    Assuming the same syntax for the selectedElements variable above:
    
    Inline Styles:
        selectedElement.style.{inline-style-property}
    -OR-
    CSS File:
        window.getComputedStyle(selectedElement).{style-property-name}

    When using .getComputedStyle ensure that variable types match, this is less forgiving than .style but can access more.

Javascript - Form Events

    Change - These events occur whenever the content of an input field is changed, or when a drop down option is selected.
    Focus - This event is triggered whenever the input field is focused by the user
    Blur - This event is triggered when a field loses focus
    Submit - This event is triggered whenever the 'submit' button is clicked by the user.

    Example: Setup an event listener that sends a notification to the console when the 'username' input field changes value

        //Setup a variable that points towards the 'username' field for a form
        var username = document.getElementById('username');

        //Setup an event listener that reports when the username field has been changed
        username.addEventListener('change', function() {
            console.log('Value Changed');
        });

        note: This type of event is only triggered after the user moves on to the next field, not on keystroke. If the desired
        response is to be notified per keystroke replace the 'change' event to an 'input' event.

    Example: Setup an event listener that sends a notification to the console log when the username field becomes focused

        //Use the username variable setup in the previous step to setup the appropriate event listener
        username.addEventListener('focus', fuction(){
            console.log('Element Focused');
        });

    Note:The above example can be utilized to listen for when a user is no longer focused on a field by using the 'blur' event listener
    There are a lot of events that can be used in Javascript. Take some time to learn about more options!

JavaScript - Keyboard Events

    - keydown - Triggered whenever any key is pressed on the keyboard
    - keyup - is triggered when any key is released after a keydown event
    - keypressed - is triggered whenever any key besides Shift, Function, or Capslock is in the pressed position

    If you need to only record for a specific key go to keycode.info to find the numerical code associated with the desired keypress.
    Example:
        
        //Create an event listener that checks for a specific keypress and then logs that the key was pressed into the console
        document.body.addEventListener('keydown', function(e){
            var keyCode = e.keyCode
            if (keycode === 13){
                console.log(keyCode + ' key was clicked');
            }
        });

        note: In the above example the function is paired with an (e) this is a placeholder for the event object which seems much more
        important than was shown in the video as it's a major component for how the above functions. Without it we could not use 
        e.keyCode for the following variable. 
    
    Each of the events listed at the start of this section can be used in the same way as above. The only change is when the event is triggered



*/