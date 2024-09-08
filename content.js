
// Function to uncheck the checkbox
function uncheckCheckbox(checkbox) {
  console.log('unchecking checkbox');
  if (checkbox.checked) {
    checkbox.checked = false;
  }
}

// Initial run to uncheck existing checkboxes
const initialCheckboxes = document.querySelectorAll('input[id="follow-company-checkbox"]');
initialCheckboxes.forEach(uncheckCheckbox);

// Create an observer to watch for added checkboxes
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes.length > 0) {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1 && node.classList.contains('ember-checkbox ember-view visually-hidden')) {
          uncheckCheckbox(node);
        } else if (node.querySelectorAll) {
          const newCheckboxes = node.querySelectorAll('input[id="follow-company-checkbox"]');
          newCheckboxes.forEach(uncheckCheckbox);
        }
      });
    }
  });
});

// Start observing the document with a focus on added elements
observer.observe(document.body, {
  childList: true,
  subtree: true
});