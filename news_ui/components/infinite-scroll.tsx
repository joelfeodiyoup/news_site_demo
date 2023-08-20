import { ReactNode, useEffect, useMemo, useRef, useState } from "react";

/**
 * Component takes in children which is the main content.
 * When the bottom of the block of children is visible, then the function 'loadMore' is called.
 * loadMore can be used to add more content to children, making it bigger.
 * @param param0 
 * @returns 
 */
export const InfiniteScroll = ({ children, loadMore }: {children: ReactNode, loadMore: () => void} ) => {
    const bottomOfPageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
            loadMore();
        }
      },
      { threshold: 1}
    );

    if (bottomOfPageRef.current) {
      observer.observe(bottomOfPageRef.current);
    }

    return () => {
        if (bottomOfPageRef.current) {
            observer.unobserve(bottomOfPageRef.current);
        }
    }
  });

    return (
        <>
        {children}
        {/* load more when this div is in view */}
        <div
          // add some margin below so that it actually appears
          style={{marginBottom: '10px'}}
          ref={bottomOfPageRef}
        ></div>
        </>
    )
}