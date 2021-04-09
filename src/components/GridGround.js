import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";
const COLORS = {
  codGray: new THREE.Color(0x121212),
  brightTurquoise: new THREE.Color(0x39f5e6),
  wewak: new THREE.Color(0xffd8bb),
  mandy: new THREE.Color(0xe84971),
};
function GridGround() {
  const SIZE = 80;
  const SEGMENTS = 60;
  const gridRef = useRef();
  useFrame(({ clock }) => {
    gridRef.current.position.z =
      (clock.getElapsedTime() % 1) * (SIZE / SEGMENTS);
  });
  return (
    <gridHelper
      ref={gridRef}
      position={[0, -10, 0]}
      args={[SIZE, SEGMENTS, COLORS.brightTurquoise, COLORS.brightTurquoise]}
    />
  );
}

export default GridGround;
