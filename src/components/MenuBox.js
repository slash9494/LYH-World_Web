import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";

function MenuBox(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshStandardMaterial
        metalness={0.1}
        attach="material"
        color={hovered ? "#f06595" : "#845ef7"}
      />
    </mesh>
  );
}

export default MenuBox;
