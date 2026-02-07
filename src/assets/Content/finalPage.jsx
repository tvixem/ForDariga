import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import music from "../Content/love.mp3"
import Swiperr from "./swiper";



export default function ValentinesPage() {
  const [hearts, setHearts] = useState([]);
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // Photo slider
  const photos = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 100,
        size: 15 + Math.random() * 25,
        duration: 4 + Math.random() * 4
      };
      setHearts((prev) => [...prev.slice(-40), newHeart]);
    }, 350);

    return () => clearInterval(interval);
  }, []);

  // Autoplay music
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };


  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg,#ff9a9e 0%,#fad0c4 40%,#fad0c4 60%,#ffdde1 100%)",
        fontFamily: "cursive"
      }}
    >
      {/* Floating Player */}
      <div
        style={{
          position: "fixed",
          width:"250px",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          background: "linear-gradient(145deg,#111,#1f1f1f)",
          borderRadius: 20,
          padding: "12px 18px",
          display: "flex",
          alignItems: "center",
          gap: 15,
          boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
          zIndex: 1000,
          justifyContent:"space-between"
        }}
      >
        <div style={{ color: "white", fontSize: 14 }}>I wanna be YOURS </div>

        <button
          onClick={toggleMusic}
          style={{
            background: "linear-gradient(135deg,#1db954,#1ed760)",
            border: "none",
            width: 40,
            height: 40,
            borderRadius: "50%",
            color: "white",
            fontSize: 18,
            cursor: "pointer"
          }}
        >
          {playing ? "⏸" : "▶"}
        </button>

        <audio ref={audioRef} src={music} loop />
      </div>

      {/* Hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: "110vh", opacity: 1 }}
          transition={{ duration: heart.duration, ease: "linear" }}
          style={{
            position: "absolute",
            left: `${heart.left}%`,
            fontSize: heart.size
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(14px)",
          borderRadius: 28,
          boxShadow: "0 20px 60px rgba(255,0,90,0.25)",
          padding: 40,
          maxWidth: 520,
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 10
        }}
      >
        <h1 style={{ fontSize: 42, color: "#ff2e63", marginBottom: 20 }}>
          ❤️ Happy Valentine’s Day ❤️
        </h1>

        <Swiperr/>
        
      </motion.div>
    </div>
  );
}