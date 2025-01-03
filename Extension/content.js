// Function to remove border-radius from any elements with border-radius
function removeBorderRadius() {
    const allElements = document.querySelectorAll('*');

    allElements.forEach((element) => {
        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.borderRadius !== '0px' && computedStyle.borderRadius !== 'none') {
            element.style.borderRadius = '0';
        }
    });
}

// Create a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver((mutations) => {
    // Run the border radius removal function whenever a mutation occurs
    removeBorderRadius();
});

// Start observing the entire document
observer.observe(document.body, {
    attributes: true,
    childList: true,
    subtree: true,
});

// Run the function initially to remove existing border-radius
removeBorderRadius();
