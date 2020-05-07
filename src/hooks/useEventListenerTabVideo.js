import { useEffect } from "react";

const focusWindow = () => {
  //console.log('unmute all audios...');
  let playingVideo = Array.from(
    document.getElementsByClassName("videoToMuted")
  );
  playingVideo.map((video) => {
    video.classList.remove("videoToMuted");
    video.play();
  });
};
const blurWindow = () => {
  // console.log('mute all audios...');
  let playingVideo = Array.from(
    document.getElementsByTagName("video")
  ).filter((video) => !video.paused);
  playingVideo.map((video) => {
    video.classList.add("videoToMuted");
    video.pause();
  });

};

const useEventListenerTabVideo = (element = window) => {

  useEffect(() => {
    console.log("addEventListener")
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    element.addEventListener("focus", focusWindow);
    element.addEventListener("blur", blurWindow);

    return () => {
      console.log("removeEventListener")
      element.removeEventListener('focus', focusWindow);
      element.removeEventListener('blur', blurWindow);
    };
  }, [element]);
};

export default useEventListenerTabVideo;
