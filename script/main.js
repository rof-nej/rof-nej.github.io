
const makeDisappear = {
    opacity: 0,
  }
  const moveDown = {
    y: 10,
  }
  const fadeInOrOutDown = {
    ...makeDisappear,
    ...moveDown
  }
  const standardAnimationDurationSeconds = 0.3;
  const standardDurationSeconds = "+=1";
  const longDurationSeconds = "+=4";
  
  const animationTimeline = () => {
    const tl = new TimelineMax();
  
    tl
      .to(".container", 0.1, {
        visibility: "visible"
      })
      .from(".one", standardAnimationDurationSeconds, fadeInOrOutDown)
      .to(
        ".one",
        standardAnimationDurationSeconds,
        fadeInOrOutDown,
        // longDurationSeconds
        "+=13"
      )
      .from(".two",standardAnimationDurationSeconds*10, fadeInOrOutDown)
      .to(
        ".two",
        standardAnimationDurationSeconds*2,
        fadeInOrOutDown,
        // longDurationSeconds
        "+=2"
      )
      .from(".three",standardAnimationDurationSeconds*2, fadeInOrOutDown)
      .to(
        ".three",
        standardAnimationDurationSeconds*2,
        fadeInOrOutDown,
        standardDurationSeconds
      )
      .from(".four",standardAnimationDurationSeconds*2, fadeInOrOutDown)
      .to(
        ".four",
        standardAnimationDurationSeconds*2,
        fadeInOrOutDown,
        "+=6"
      )
      .from(".five",standardAnimationDurationSeconds*2, fadeInOrOutDown)
      .to(
        ".five",
        standardAnimationDurationSeconds*2,
        fadeInOrOutDown,
        "+=10"
      )
      .from(".six",standardAnimationDurationSeconds*2, fadeInOrOutDown)
      .to(
        ".six",
        standardAnimationDurationSeconds,
        fadeInOrOutDown,
        "+=2"
      )
      .from(".seven",standardAnimationDurationSeconds*2, fadeInOrOutDown)
      .to(
        ".seven",
        standardAnimationDurationSeconds,
        fadeInOrOutDown,
        "+=5"
      )
      .from(".eight",standardAnimationDurationSeconds*2, fadeInOrOutDown)
      .to(
        ".eight",
        standardAnimationDurationSeconds,
        fadeInOrOutDown,
        "+=7"
      )
      .from(".junwon",standardAnimationDurationSeconds/3, fadeInOrOutDown)
      .to(
        ".junwon",
        standardAnimationDurationSeconds/3,
        fadeInOrOutDown,
        "+=0.3"
      )
      .from(".nine",standardAnimationDurationSeconds*2, fadeInOrOutDown)
      .to(
        ".nine",
        standardAnimationDurationSeconds,
        fadeInOrOutDown,
        "+=8"
      )
      .from(".ten",standardAnimationDurationSeconds*2, fadeInOrOutDown)
      .to(
        ".ten",
        standardAnimationDurationSeconds,
        fadeInOrOutDown,
        "+=5"
      )
      .from(".eleven",standardAnimationDurationSeconds*2, fadeInOrOutDown)
      .to(
        ".eleven",
        standardAnimationDurationSeconds,
        fadeInOrOutDown,
        "+=2"
      )
      .from(".twelve",standardAnimationDurationSeconds*2, fadeInOrOutDown)
      .to(
        ".twelve",
        standardAnimationDurationSeconds,
        fadeInOrOutDown,
        "+=5"
      )
      .from(".thirteen",standardAnimationDurationSeconds*2, fadeInOrOutDown)
      .to(
        ".thirteen",
        standardAnimationDurationSeconds,
        fadeInOrOutDown,
        "+=2"
      )
      .from(".fourteen",standardAnimationDurationSeconds*2, fadeInOrOutDown)
      .to(
        ".fourteen",
        standardAnimationDurationSeconds,
        fadeInOrOutDown,
        "+=10"
      )
      .from(".end",standardAnimationDurationSeconds*2, fadeInOrOutDown)
      .staggerFromTo(
        ".balloons img",
        2.5,
        {
          opacity: 0.9,
          y: 1400
        },
        {
          opacity: 1,
          y: -1000
        },
        0.2
      )
  
    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
      tl.restart();
    });
  };
  
  animationTimeline();
  