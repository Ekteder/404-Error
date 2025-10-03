import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/NotFound.module.css";

export default function NotFoundPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glitchText, setGlitchText] = useState("404");
  const [isScanning, setIsScanning] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  const [showTerminal, setShowTerminal] = useState(false);

  const terminalMessages = [
    "Initializing quantum scanner...",
    "Scanning digital dimensions...",
    "ERROR: Page fragmented across reality",
    "Attempting dimensional repair...",
    "FAILED: Reality matrix corrupted",
    "Recommendation: Return to base",
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Glitch effect for the 404 text
    const glitchInterval = setInterval(() => {
      const glitchChars = ["4", "0", "4", "█", "▓", "▒", "░", "◆", "◇", "◊"];
      const randomGlitch = Array.from(
        { length: 3 },
        () => glitchChars[Math.floor(Math.random() * glitchChars.length)]
      ).join("");

      setGlitchText(randomGlitch);

      setTimeout(() => setGlitchText("404"), 150);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(glitchInterval);
    };
  }, []);

  const handleScan = () => {
    setIsScanning(true);
    setShowTerminal(true);
    setTerminalText("");

    let messageIndex = 0;
    const typeMessage = () => {
      if (messageIndex < terminalMessages.length) {
        const message = terminalMessages[messageIndex];
        let charIndex = 0;

        const typeChar = () => {
          if (charIndex < message.length) {
            setTerminalText((prev) => prev + message[charIndex]);
            charIndex++;
            setTimeout(typeChar, 50);
          } else {
            setTerminalText((prev) => prev + "\n");
            messageIndex++;
            setTimeout(typeMessage, 800);
          }
        };

        typeChar();
      } else {
        setTimeout(() => {
          setIsScanning(false);
          setTimeout(() => {
            setShowTerminal(false);
            setTerminalText("");
          }, 2000);
        }, 1000);
      }
    };

    setTimeout(typeMessage, 500);
  };

  return (
    <div className={styles.container}>
      {/* Animated background particles */}
      <div className={styles.particles}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive cursor glow */}
      <div
        className={styles.cursorGlow}
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
        }}
      />

      {/* Grid background */}
      <div className={styles.grid} />

      {/* Radar sweep effect */}
      <div className={styles.radar}>
        <div className={styles.radarSweep} />
      </div>

      {/* Main content */}
      <div className={styles.content}>
        {/* Holographic 404 */}
        <div className={styles.errorCodeContainer}>
          <div className={styles.errorCode}>
            <span className={styles.glitchText}>{glitchText}</span>
            <div className={styles.hologramEffect} />
          </div>
        </div>

        {/* Error message */}
        <div className={styles.messageContainer}>
          <h1 className={styles.title}>
            <span className={styles.neonText}>SYSTEM ERROR</span>
          </h1>
          <p className={styles.subtitle}>
            The requested page has been lost in the digital void
          </p>
          <div className={styles.scanLines} />
        </div>

        {/* Action buttons */}
        <div className={styles.actions}>
          <Link href="/" className={styles.homeButton}>
            <span className={styles.buttonText}>RETURN TO BASE</span>
            <div className={styles.buttonGlow} />
          </Link>

          <button
            className={`${styles.scanButton} ${
              isScanning ? styles.scanning : ""
            }`}
            onClick={handleScan}
            disabled={isScanning}
          >
            <span className={styles.buttonText}>
              {isScanning ? "SCANNING..." : "RETRY SCAN"}
            </span>
            <div className={styles.buttonGlow} />
            {isScanning && <div className={styles.scanningEffect} />}
          </button>
        </div>

        {/* Terminal output */}
        {showTerminal && (
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={styles.terminalTitle}>QUANTUM_SCANNER_v2.1</span>
              <div className={styles.terminalControls}>
                <span className={styles.terminalDot} />
                <span className={styles.terminalDot} />
                <span className={styles.terminalDot} />
              </div>
            </div>
            <div className={styles.terminalContent}>
              <pre className={styles.terminalText}>{terminalText}</pre>
              <span className={styles.cursor}>▋</span>
            </div>
          </div>
        )}

        {/* Status display */}
        <div className={styles.statusDisplay}>
          <div className={styles.statusLine}>
            <span className={styles.statusLabel}>STATUS:</span>
            <span className={styles.statusValue}>CONNECTION LOST</span>
          </div>
          <div className={styles.statusLine}>
            <span className={styles.statusLabel}>ERROR:</span>
            <span className={styles.statusValue}>RESOURCE_NOT_FOUND</span>
          </div>
          <div className={styles.statusLine}>
            <span className={styles.statusLabel}>TIME:</span>
            <span className={styles.statusValue}>
              {new Date().toLocaleTimeString()}
            </span>
          </div>
          <div className={styles.statusLine}>
            <span className={styles.statusLabel}>DIMENSION:</span>
            <span className={styles.statusValue}>UNKNOWN</span>
          </div>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className={styles.geometricShapes}>
        <div className={styles.hexagon} />
        <div className={styles.triangle} />
        <div className={styles.circle} />
        <div className={styles.diamond} />
      </div>

      {/* Energy rings */}
      <div className={styles.energyRings}>
        <div className={styles.ring} />
        <div className={styles.ring} />
        <div className={styles.ring} />
      </div>
    </div>
  );
}
