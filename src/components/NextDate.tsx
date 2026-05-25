import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export function NextDate() {
  const [noClicks, setNoClicks] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const noScale = Math.max(0, 1 - noClicks * 0.18);
  const noGone = noScale <= 0.05;

  if (accepted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        className="glass relative w-full max-w-lg rounded-3xl p-8 sm:p-10 text-center float"
      >
        <div className="absolute -top-3 -right-3 rounded-full bg-[var(--gradient-emerald)] p-2 shadow-[var(--shadow-glow-emerald)]">
          <Sparkles className="h-5 w-5 text-primary-foreground" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-gradient-emerald mb-4">
          ¡Lo sabía! 💚
        </h2>

        <div className="overflow-hidden rounded-2xl border border-border mb-5 aspect-video bg-black/30">
          <img
            src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
            alt="Celebración feliz"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
          Te prometo que esta vez{" "}
          <span className="text-gradient-emerald font-semibold">
            no llego tarde
          </span>
          … bueno, casi. 😅
          <br />
          <span className="inline-flex items-center gap-1 mt-2 text-muted-foreground text-sm">
            <Heart className="h-4 w-4 fill-[oklch(0.7_0.2_22)] text-[oklch(0.7_0.2_22)]" />
            Prepara una buena playlist.
          </span>
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="glass w-full max-w-lg rounded-3xl p-8 sm:p-12 text-center float"
    >
      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
        <Heart className="h-3 w-3 fill-[oklch(0.7_0.2_22)] text-[oklch(0.7_0.2_22)]" />
        Next Date
      </div>

      <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
        ¿Habrá segunda salida? <span className="inline-block">👀</span>
      </h1>

      <p className="mt-3 text-muted-foreground text-sm sm:text-base">
        La pregunta más importante del universo (después de "¿pizza o sushi?").
      </p>

      <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          onClick={() => setAccepted(true)}
          className="rounded-2xl px-7 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-glow-emerald)] focus:outline-none focus:ring-2 focus:ring-ring"
          style={{ background: "var(--gradient-emerald)" }}
        >
          Sí 💚
        </motion.button>

        <AnimatePresence>
          {!noGone && (
            <motion.button
              key="no-btn"
              initial={false}
              animate={{ scale: noScale, opacity: noScale }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              onClick={() => setNoClicks((c) => c + 1)}
              className="rounded-2xl px-7 py-3.5 font-semibold text-white border border-white/15 focus:outline-none"
              style={{ background: "var(--gradient-red)" }}
            >
              No ❌
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {noClicks > 0 && !noGone && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-xs text-muted-foreground"
        >
          Mmm… ¿seguro? Sigue intentando, a ver qué pasa. 😏
        </motion.p>
      )}
    </motion.div>
  );
}
