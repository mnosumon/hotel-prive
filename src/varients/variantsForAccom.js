const fadeIn = (direction, delay, screenSize) => {
    const distance = getResponsiveValue(40, screenSize);
    const duration = getResponsiveValue(1.5, screenSize);
  
    return {
      hidden: {
        y: direction === "up" ? distance : direction === "down" ? -distance : 0,
        x: direction === "left" ? distance : direction === "right" ? -distance : 0,
        opacity: 0, // Initial opacity set to 0 for a fade-in effect
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1, // Final opacity set to 1 for a fade-in effect
        transition: {
          type: 'tween',
          duration: duration,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };