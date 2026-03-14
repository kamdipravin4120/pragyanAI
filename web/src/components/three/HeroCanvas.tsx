"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ParticleField } from "./ParticleField";
import { CrystalMesh } from "./CrystalMesh";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function HeroFallback() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.08)_0%,transparent_70%)]" />
    </div>
  );
}

export function HeroCanvas() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  if (prefersReducedMotion) {
    return <HeroFallback />;
  }

  return (
    <div className="absolute inset-0">
      <HeroFallback />
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          dpr={[1, 1.5]}
          className="!absolute inset-0"
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.1} />
          <ParticleField count={isMobile ? 200 : 800} />
          <CrystalMesh />
        </Canvas>
      </Suspense>
    </div>
  );
}
