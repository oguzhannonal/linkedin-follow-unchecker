document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggle-switch');
    console.log(toggleSwitch);
    // Load saved state
    chrome.storage.local.get(['isEnabled'], (result) => {
        toggleSwitch.checked = result.isEnabled !== false;
    });

    // Save state on change
    toggleSwitch.addEventListener('change', () => {
        chrome.storage.local.set({ isEnabled: toggleSwitch.checked });
    });
});

