"use client";

import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

type ModelViewerProps = {
  url: string;
};

function Model({ url }: ModelViewerProps) {
  const gltf = useGLTF(url);
  return <primitive object={gltf.scene} />;
}

export default function ModelViewer({ url }: ModelViewerProps) {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03]">
      <div className="absolute left-3 top-3 z-20 rounded-full border border-white/15 bg-black/80 px-3 py-1 text-[11px] text-white/80">
        Interactive 3D model
      </div>

      <div className="absolute bottom-3 left-3 z-20 text-[11px] text-white/50">
        Drag to rotate · Scroll to zoom
      </div>

      <Canvas
        className="h-full w-full"
        camera={{ position: [0, 0, 8], fov: 32 }}
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.7} adjustCamera={false}>
            <Bounds fit clip observe margin={1.25}>
              <Model url={url} />
            </Bounds>
          </Stage>

          <OrbitControls
            makeDefault
            enablePan
            enableZoom
            enableRotate
            autoRotate
            autoRotateSpeed={0.8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}