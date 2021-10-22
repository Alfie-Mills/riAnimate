function riAnimate(brand="rianimate", options){

    // applies the pre animation class
    document.querySelectorAll(`[${brand}]`).forEach(elem => { 
        elem.classList.add( `${brand}__preanimate-` + elem.getAttribute(brand) );
    });

    let riAnimateObserver = new IntersectionObserver(entries => {
    // Create the observer
        // Loop over the entries
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add( entry.target.getAttribute(brand) );

                // Remove observer once animation class has been applied
                riAnimateObserver.unobserve(entry.target);
            }
        });
    }, options);
    
    // Tell the observer which elements to track
    document.querySelectorAll(`[${brand}]`).forEach(elem => { riAnimateObserver.observe(elem) });
}

export default riAnimate;
//# sourceMappingURL=core.js.map
