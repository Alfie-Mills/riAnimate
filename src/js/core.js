export function riAnimate(){

    // applies the pre animation class
    document.querySelectorAll('[rianimate]').forEach(elem => { 
        elem.classList.add( "riAnimation_" + elem.getAttribute('rianimate') );
    });

    let riAnimateObserver = new IntersectionObserver(entries => {
    // Create the observer
        // Loop over the entries
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add( entry.target.getAttribute('rianimate') );

                // Remove observer once animation class has been applied
                riAnimateObserver.unobserve(entry.target);
            }
        });
    });
    
    // Tell the observer which elements to track
    document.querySelectorAll('[rianimate]').forEach(elem => { riAnimateObserver.observe(elem) });
}