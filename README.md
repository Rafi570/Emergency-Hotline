1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- getElementById(id): Finds a single element by its unique id. Since IDs are unique, this method is very fast.
- getElementsByClassName(className): Finds all elements that have the given class name. It returns a live HTMLCollection.
- querySelector(selector): Finds the first element that matches a CSS selector (like #id, .class, tag, or attribute).
- querySelectorAll(selector): Finds all elements that match a CSS selector. It returns a static NodeList.

Example:
document.getElementById("myId");
document.getElementsByClassName("myClass");
document.querySelector(".myClass");
document.querySelectorAll("p");
2. How do you create and insert a new element into the DOM?
let newDiv = document.createElement("div");
document.body.appendChild(newDiv);
3. What is Event Bubbling and how does it work?
Event bubbling means when an event happens on a child element, it travels upward through its parent elements until the root of the DOM.

- Direction: starts from the target element and moves upward.
- Default: bubbling happens by default.
- Order: child’s event listener runs first, then the parent’s, and so on.

Example:
document.getElementById("child").addEventListener("click", function() {
    console.log("Child clicked");
});
document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked");
});
4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation means attaching a single event listener on a parent element to handle events from its child elements. This works because of event bubbling.

Why it is useful?
- Efficient: one listener instead of many.
- Handles dynamic content: works even for elements added later.
- Cleaner code: easier to maintain and manage.

Example:
document.getElementById("list").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        console.log("List item clicked: " + e.target.innerText);
    }
});
5. What is the difference between preventDefault() and stopPropagation() methods?
- event.preventDefault(): Prevents the default action of an element from happening.

Example:
document.getElementById("myLink").addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Link click prevented");
});

- event.stopPropagation(): Stops the event from bubbling up (or capturing down) the DOM. Parent listeners will not run.

Example:
document.getElementById("child").addEventListener("click", function(e) {
    e.stopPropagation();
    console.log("Child clicked, bubbling stopped");
});
document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked");
});
