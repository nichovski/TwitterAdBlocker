const observer = new MutationObserver(() => {
    const promotedTextElements = document.querySelectorAll('span');
    [...promotedTextElements].forEach(promoted => {
        if (promoted.textContent == "Promoted") {
            const parent = promoted.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            parent.remove();
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

window.addEventListener('scroll', () => {
    const promotedTextElements = document.querySelectorAll('span');
    [...promotedTextElements].forEach(promoted => {
        if (promoted.textContent == "Promoted") {
            const parent = promoted.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            parent.remove();
        }
    });
});