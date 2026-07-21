'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import * as THREE from 'three';
import { Layers, Info } from 'lucide-react';

type ShapeType = 'cube' | 'cylinder' | 'cone' | 'sphere' | 'prism';

export const Geometry3D: React.FC = () => {
  const { t } = useLanguage();
  const mountRef = useRef<HTMLDivElement | null>(null);

  // States
  const [shape, setShape] = useState<ShapeType>('cube');
  const [dim1, setDim1] = useState(3); // side for cube, radius for cylinder/cone/sphere
  const [dim2, setDim2] = useState(4); // height for cylinder/cone, width/depth details
  const [dim3, setDim3] = useState(3); // depth details for prism

  // Three.js References to update geometries on slider changes
  const sceneRef = useRef<THREE.Scene | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  // Surface area & Volume calculations
  const calculateGeometrics = () => {
    let volume = 0;
    let area = 0;
    let volFormula = '';
    let areaFormula = '';

    switch (shape) {
      case 'cube':
        volume = Math.pow(dim1, 3);
        area = 6 * Math.pow(dim1, 2);
        volFormula = 'V = a³';
        areaFormula = 'A = 6a²';
        break;
      case 'cylinder':
        volume = Math.PI * Math.pow(dim1, 2) * dim2;
        area = 2 * Math.PI * dim1 * dim2 + 2 * Math.PI * Math.pow(dim1, 2);
        volFormula = 'V = πr²h';
        areaFormula = 'A = 2πrh + 2πr²';
        break;
      case 'cone':
        volume = (1 / 3) * Math.PI * Math.pow(dim1, 2) * dim2;
        const slantHeight = Math.sqrt(Math.pow(dim1, 2) + Math.pow(dim2, 2));
        area = Math.PI * dim1 * (dim1 + slantHeight);
        volFormula = 'V = 1/3 * πr²h';
        areaFormula = 'A = πr(r + l) ; l = √(r² + h²)';
        break;
      case 'sphere':
        volume = (4 / 3) * Math.PI * Math.pow(dim1, 3);
        area = 4 * Math.PI * Math.pow(dim1, 2);
        volFormula = 'V = 4/3 * πr³';
        areaFormula = 'A = 4πr²';
        break;
      case 'prism':
        // Triangular prism using dim1 as base edge, dim3 as triangle height, dim2 as height of prism
        // Let's assume equilateral triangle base for simplicity
        const baseArea = (Math.sqrt(3) / 4) * Math.pow(dim1, 2);
        volume = baseArea * dim2;
        area = 3 * dim1 * dim2 + 2 * baseArea;
        volFormula = 'V = BaseArea * Height';
        areaFormula = 'A = 3 * (Side * Height) + 2 * BaseArea';
        break;
    }

    return {
      volume: volume.toFixed(1),
      area: area.toFixed(1),
      volFormula,
      areaFormula
    };
  };

  const stats = calculateGeometrics();

  // Set up Three.js scene
  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Dimensions
    const width = currentMount.clientWidth || 300;
    const height = currentMount.clientHeight || 200;

    // Create scene, camera, renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0b1329');
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x818cf8, 0.8);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x34d399, 0.4);
    dirLight2.position.set(-5, -5, 5);
    scene.add(dirLight2);

    // Initial Mesh Creation
    createShapeMesh(scene, shape, dim1, dim2, dim3);

    // Click and drag mouse state for rotation
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !meshRef.current) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      
      meshRef.current.rotation.y += deltaX * 0.01;
      meshRef.current.rotation.x += deltaY * 0.01;

      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z = Math.max(3, Math.min(20, camera.position.z + e.deltaY * 0.01));
    };

    const canvas = renderer.domElement;
    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('wheel', handleWheel, { passive: false });

    // Animation Loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Auto rotation when not dragging
      if (!isDragging && meshRef.current) {
        meshRef.current.rotation.y += 0.005;
        meshRef.current.rotation.x += 0.002;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!currentMount || !rendererRef.current) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('wheel', handleWheel);
      
      if (rendererRef.current && rendererRef.current.domElement.parentNode) {
        rendererRef.current.domElement.parentNode.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update Mesh when slider values or shape type changes
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    createShapeMesh(scene, shape, dim1, dim2, dim3);
  }, [shape, dim1, dim2, dim3]);

  // Helper to create geometries
  const createShapeMesh = (scene: THREE.Scene, type: ShapeType, d1: number, d2: number, d3: number) => {
    // Remove old mesh
    if (meshRef.current) {
      scene.remove(meshRef.current);
      if (meshRef.current.geometry) meshRef.current.geometry.dispose();
      meshRef.current = null;
    }

    let geometry: THREE.BufferGeometry;
    const scale = 0.7; // Scale dimensions for scene view

    switch (type) {
      case 'cube':
        geometry = new THREE.BoxGeometry(d1 * scale, d1 * scale, d1 * scale);
        break;
      case 'cylinder':
        geometry = new THREE.CylinderGeometry(d1 * scale, d1 * scale, d2 * scale, 32);
        break;
      case 'cone':
        geometry = new THREE.ConeGeometry(d1 * scale, d2 * scale, 32);
        break;
      case 'sphere':
        geometry = new THREE.SphereGeometry(d1 * scale, 32, 32);
        break;
      case 'prism':
        // 3-sided cylinder acts as a triangular prism
        geometry = new THREE.CylinderGeometry(d1 * scale, d1 * scale, d2 * scale, 3);
        break;
    }

    // Material with wireframe options to show lines
    const material = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      roughness: 0.2,
      metalness: 0.1,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geometry, material);
    
    // Add wireframe helper overlay to give a premium mathematical layout
    const wireframe = new THREE.WireframeGeometry(geometry);
    const line = new THREE.LineSegments(wireframe);
    (line.material as any).color.setHex(0x312e81);
    (line.material as any).transparent = true;
    (line.material as any).opacity = 0.5;
    mesh.add(line);

    scene.add(mesh);
    meshRef.current = mesh;
  };

  return (
    <div className="glass-panel p-6 rounded-2xl glow-hover flex flex-col gap-6 text-slate-900 dark:text-slate-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            📐 3D Geometry & volume Proofs
          </h3>
          <p className="text-sm opacity-70">
            Rotate and scale 3D solids to visually explore volumes and surface areas. Click and drag in the scene to rotate.
          </p>
        </div>
        <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-xl scrollbar-none overflow-x-auto max-w-full">
          {(['cube', 'cylinder', 'cone', 'sphere', 'prism'] as const).map(sh => (
            <button
              key={sh}
              onClick={() => { setShape(sh); if (sh === 'cube') setDim1(3); else setDim1(2); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize whitespace-nowrap transition-all ${
                shape === sh
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {sh}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Sliders Area */}
        <div className="flex flex-col gap-4 bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl">
          <h4 className="font-bold text-sm text-indigo-500 flex items-center gap-1">
            <Info size={16} /> Dimensions
          </h4>

          {/* Dimension 1 (Side or Radius) */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold flex justify-between">
              <span>{shape === 'cube' ? 'Side Length (a)' : 'Radius (r)'}</span>
              <span className="text-indigo-400">{dim1} cm</span>
            </label>
            <input
              type="range"
              min="1"
              max="5"
              step="0.5"
              value={dim1}
              onChange={e => setDim1(Number(e.target.value))}
              className="accent-indigo-500"
            />
          </div>

          {/* Dimension 2 (Height) - only for cylinder, cone, prism */}
          {(shape === 'cylinder' || shape === 'cone' || shape === 'prism') && (
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold flex justify-between">
                <span>Height (h)</span>
                <span className="text-indigo-400">{dim2} cm</span>
              </label>
              <input
                type="range"
                min="2"
                max="6"
                step="0.5"
                value={dim2}
                onChange={e => setDim2(Number(e.target.value))}
                className="accent-indigo-500"
              />
            </div>
          )}

          {/* Information Summary */}
          <div className="flex flex-col gap-3 p-3 rounded-lg bg-black/10 dark:bg-black/30 mt-2 text-xs">
            <div>
              <span className="text-slate-400 font-semibold block uppercase text-[10px]">Volume Formula</span>
              <span className="font-mono text-emerald-400 font-bold">{stats.volFormula}</span>
            </div>
            <div>
              <span className="text-slate-400 font-semibold block uppercase text-[10px]">Volume Calculated</span>
              <span className="font-bold text-lg">{stats.volume} cm³</span>
            </div>
            <hr className="border-slate-800" />
            <div>
              <span className="text-slate-400 font-semibold block uppercase text-[10px]">Surface Area Formula</span>
              <span className="font-mono text-emerald-400 font-bold">{stats.areaFormula}</span>
            </div>
            <div>
              <span className="text-slate-400 font-semibold block uppercase text-[10px]">Area Calculated</span>
              <span className="font-bold text-lg">{stats.area} cm²</span>
            </div>
          </div>
        </div>

        {/* 3D WebGL Canvas */}
        <div className="lg:col-span-2 relative h-[250px] md:h-[320px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
          <div 
            ref={mountRef} 
            className="w-full h-full cursor-grab active:cursor-grabbing" 
          />
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded text-[10px] text-slate-400 border border-slate-800 font-mono pointer-events-none">
            <Layers size={12} /> Drag to rotate, scroll to zoom
          </div>
        </div>

      </div>
    </div>
  );
};
