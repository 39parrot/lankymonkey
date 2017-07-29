// TODO: incapsulate all auth0-lock logic in this component

// TODO: logout doesn't re-render Auth (user's picture stays seen instead of changing to Login)
// most.fromEvent('storage', window).filter(storageEvent => storageEvent.key === "accessToken") -> Auth.props
// ... in order for it to re-render when logout
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
