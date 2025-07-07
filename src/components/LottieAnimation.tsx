import { useEffect, useState } from "react";
import Player from "lottie-react";
import { texts } from "../config/texts";

interface LottieAnimationProps {
  animationData?: any;
  url?: string;
  className?: string;
  id?: string;
}

function LottieAnimation({
  animationData,
  url,
  className,
  id,
}: LottieAnimationProps) {
  const [fetchedData, setFetchedData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;
    let isMounted = true;
    setLoading(true);
    setError(null);
    setFetchedData(null);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load Lottie JSON");
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setFetchedData(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [url]);

  const data = animationData || fetchedData;

  if (url && loading) {
    return (
      <div id={id} className={className + " flex items-center justify-center"}>
        <span className="text-white/50 text-xs animate-pulse">
          {texts.lottie.loading}
        </span>
      </div>
    );
  }

  if ((url && (error || !data)) || (!animationData && !url)) {
    return (
      <div id={id} className={className + " flex items-center justify-center"}>
        <span className="text-red-400 text-xs">{texts.lottie.error}</span>
      </div>
    );
  }

  return (
    <Player
      id={id}
      className={className}
      autoplay
      loop
      animationData={data}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export default LottieAnimation;
