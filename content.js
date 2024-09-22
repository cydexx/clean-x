function cleanX() {
	// Remove the entire right sidebar column
	const sidebarColumn = document.querySelector(
		'[data-testid="sidebarColumn"]'
	)
	if (sidebarColumn) {
		sidebarColumn.remove()
	}

	// Remove elements from the left side nav
	const navItemsToRemove = ["Grok", "Jobs", "Premium", "Business"]

	// Updated selector to target the left side navigation items
	const navItems = document.querySelectorAll('nav[aria-label="Primary"] a')
	navItems.forEach((item) => {
		const itemText = item.textContent.trim()
		if (navItemsToRemove.includes(itemText)) {
			item.remove()
		}
	})
}

// Run the cleaning function when the page loads
cleanX()

// Create a MutationObserver to handle dynamic content loading
const observer = new MutationObserver((mutations) => {
	mutations.forEach((mutation) => {
		if (mutation.addedNodes.length) {
			cleanX()
		}
	})
})

// Start observing the document body for changes
observer.observe(document.body, { childList: true, subtree: true })
