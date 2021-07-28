export const pageAnimation = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.75,
            delayChildren: 0.5
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.75,
        }
    }    
}

export const fadeInOut = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7
    }
  }
}

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x:30
  },
  show: {
    opacity: 1,
    x:0,
    transition: {
      duration: 0.7
    }
  }
}

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x:-30
  },
  show: {
    opacity: 1,
    x:0,
    transition: {
      duration: 0.7
    }
  }
}

export const heroTextContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.75,
        staggerChildren: 0.3
      }
    }
  }

export const projectsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4
      }
    }
  }

export const heroTextAnimation = { 
    hidden: {
        opacity: 0,
        x: -30
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeIn",
            
        }
    }
}

export const heroImageAnimations = {
    hidden: {
        opacity: 0,
        x: 50
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
        delay: 2
      }
    }
  }

export const headerAnimations = {
    hidden: {
        opacity: 0,
        y: -30
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
        delay: 0.5
      }
    }
  }

export const leftLinksAnimations = {
    hidden: {
        opacity: 0,
        x: -50
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
        delay: 0.5
      }
    }
  }

  export const techIconsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  }

export const techIcons = {
    hidden: {
        opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  }