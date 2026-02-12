import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import music from "../Content/love.mp3";
import Swiperr from "./swiper";
import hearttt from "../Content/heart.gif";

export default function ValentinesPage() {
  const [hearts, setHearts] = useState([]);
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 100,
        size: 20 + Math.random() * 30,
        duration: 4 + Math.random() * 4,
      };
      setHearts((prev) => [...prev.slice(-40), newHeart]);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        flexDirection:"column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        position: "relative",
        overflow: "hidden",
        background: "black",
        fontFamily: "cursive",
      }}
    >
      {/* Spotify Style Floating Player */}
      <motion.div
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: [0, -6, 0], opacity: 1 }}
        transition={{
          y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
          opacity: { duration: 0.6 },
        }}
        style={{
          position: "fixed",
          top: 25,
          transform: "translateX(-50%)",
          background: "linear-gradient(145deg,#121212,#1e1e1e)",
          borderRadius: 25,
          padding: "12px 25px",
          display: "flex",
          alignItems: "center",
          gap: 20,
          boxShadow: "0 15px 40px rgba(0,0,0,0.7)",
          zIndex: 2000,
          border: "1px solid #282828",
        }}
      >
        <div style={{ color: "white" }}>
          <div style={{ fontSize: 14, opacity: 0.6 }}>Now Playing</div>
          <div style={{ fontSize: 18, fontWeight: "bold" }}>
            I wanna be yours
          </div>
        </div>

        <motion.button
          onClick={toggleMusic}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            background: playing
              ? "linear-gradient(135deg,#1db954,#1ed760)"
              : "#2a2a2a",
            border: "none",
            width: 55,
            height: 55,
            borderRadius: "50%",
            color: "white",
            fontSize: 20,
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: playing
              ? "0 0 25px rgba(29,185,84,0.7)"
              : "0 0 10px rgba(255,255,255,0.1)",
            transition: "0.3s",
          }}
        >
          {playing ? "⏸" : "▶"}
        </motion.button>

        <audio ref={audioRef} src={music} loop />
      </motion.div>

      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: -300, opacity: 0.7 }}
          animate={{ y: "110vh", opacity: 0.7 }}
          transition={{ duration: heart.duration, ease: "linear" }}
          style={{
            position: "absolute",
            left: `${heart.left}%`,
            zIndex: 1,
          }}
        >
          <img src={hearttt} alt=""  />
        </motion.div>
      ))}

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "black",
          borderRadius: 28,
          boxShadow: "0px 5px 40px pink",
          border: "1px solid white",
          padding: 40,
          maxWidth: 520,
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <h1 style={{ fontSize: 42, color: "white", marginBottom: 20 }}>
          ❤️ Happy Valentine’s Day Darling ❤️
        </h1>

        <Swiperr />
      </motion.div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <h1>This text is dedicated to the most gorgeous,splendid,wonderful,stunning,breathtaking girl.</h1>
        <hr width="900px"/>
        <p style={{textAlign:"center"}}>It feels realy weird to write a letter in programing tool but nvm.Dariga ,you are the person i admire the most ,the person who i can't imagine my life without.<br/>You take all  my problems away just by being in my life.I wake up thinking about you,i go through the day thinking about you and i fall asleep thinking about you.<br/> You always make me feel so special and i want to make you feel this way too ,i hope i'm doing good.I'm realy grateful that you apeared in my life and you did this in the most significant way.<br/>Everything with you would be better,traveling,hooping,cooking i mean EVERYTHING.Words can't describe my feelings honestly.I want to make you happy ,i want to make you smile ,cause you have the pretiest smile,<br/>the smile that  makes people lose their mind(Mine for example)<br/>I tried my best doing this website ,i hope i did well.<br/>I love you. </p>
      </div>
    </div>
    
  );
}
