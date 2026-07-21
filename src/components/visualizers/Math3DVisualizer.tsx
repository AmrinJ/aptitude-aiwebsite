'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

// --- Procedural Textures ---
const generateGrassTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 512; canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  const imgData = ctx.createImageData(512, 512);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    const r = 34 + Math.random() * 20;
    const g = 139 + Math.random() * 40;
    const b = 34 + Math.random() * 20;
    data[i] = r; data[i+1] = g; data[i+2] = b; data[i+3] = 255;
  }
  ctx.putImageData(imgData, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(20, 20);
  return tex;
};

const generateWoodTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 256; canvas.height = 256;
  const ctx = canvas.getContext('2d')!;
  const imgData = ctx.createImageData(256, 256);
  const data = imgData.data;
  for (let x = 0; x < 256; x++) {
    for (let y = 0; y < 256; y++) {
      const idx = (y * 256 + x) * 4;
      const noise = Math.sin(x * 0.1 + Math.sin(y * 0.05) * 5) * 20;
      data[idx] = 100 + noise; data[idx+1] = 50 + noise; data[idx+2] = 20 + noise; data[idx+3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);
  return new THREE.CanvasTexture(canvas);
};

const generateConcreteTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 256; canvas.height = 256;
  const ctx = canvas.getContext('2d')!;
  const imgData = ctx.createImageData(256, 256);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    const gray = 150 + Math.random() * 30;
    data[i] = gray; data[i+1] = gray; data[i+2] = gray; data[i+3] = 255;
  }
  ctx.putImageData(imgData, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(5, 5);
  return tex;
};

const generateMetalTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 256; canvas.height = 256;
  const ctx = canvas.getContext('2d')!;
  const imgData = ctx.createImageData(256, 256);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    const gray = 80 + Math.random() * 50;
    data[i] = gray; data[i+1] = gray; data[i+2] = gray; data[i+3] = 255;
  }
  ctx.putImageData(imgData, 0, 0);
  return new THREE.CanvasTexture(canvas);
};

interface Math3DProps {
  params: any;
}

export const Math3DVisualizer: React.FC<Math3DProps> = ({ params }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    
    // Photorealistic Sky
    scene.background = new THREE.Color('#4FA1D8'); // Rich sky blue

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 15, 30);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    mountRef.current.appendChild(renderer.domElement);

    // Advanced Lighting
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xfffff0, 1.2); // Warm sun
    dirLight.position.set(30, 50, -30);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 150;
    dirLight.shadow.camera.left = -50;
    dirLight.shadow.camera.right = 50;
    dirLight.shadow.camera.top = 50;
    dirLight.shadow.camera.bottom = -50;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);

    let animationId: number;
    const group = new THREE.Group();
    scene.add(group);

    // Helpers
    const createSpokedWheel = () => {
      const wheelGroup = new THREE.Group();
      
      const rimGeo = new THREE.TorusGeometry(0.5, 0.1, 16, 32);
      rimGeo.rotateY(Math.PI / 2);
      const m = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.8, roughness: 0.4 });
      const rim = new THREE.Mesh(rimGeo, m);
      rim.castShadow = true;
      wheelGroup.add(rim);

      const hubGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.2, 16);
      hubGeo.rotateX(Math.PI / 2);
      const hub = new THREE.Mesh(hubGeo, m);
      hub.castShadow = true;
      wheelGroup.add(hub);

      for (let i = 0; i < 8; i++) {
        const spokeGeo = new THREE.CylinderGeometry(0.02, 0.02, 1, 8);
        spokeGeo.rotateZ(Math.PI / 2);
        const spoke = new THREE.Mesh(spokeGeo, m);
        spoke.rotation.x = (i * Math.PI) / 4;
        spoke.castShadow = true;
        wheelGroup.add(spoke);
      }
      return wheelGroup;
    };

    const wheels: THREE.Group[] = [];
    const smokeParticles: THREE.Mesh[] = [];

    // Geometry Builder based on params
    if (params.type === 'geometry-3d') {
      scene.background = new THREE.Color('#0b1329');
      let geo;
      const r = params.variables.radius || 2;
      const h = params.variables.height || 5;
      if (params.variables.shape === 'cube') geo = new THREE.BoxGeometry(r, r, r);
      else if (params.variables.shape === 'cylinder') geo = new THREE.CylinderGeometry(r, r, h, 64);
      else if (params.variables.shape === 'sphere') geo = new THREE.SphereGeometry(r, 64, 64);
      else geo = new THREE.ConeGeometry(r, h, 64);

      const mat = new THREE.MeshPhysicalMaterial({ 
        color: 0x818cf8, metalness: 0.1, roughness: 0.2, 
        transmission: 0.9, thickness: 1.5, transparent: true
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true;
      
      const wireframe = new THREE.WireframeGeometry(geo);
      const line = new THREE.LineSegments(wireframe);
      (line.material as any).color.setHex(0xffffff);
      (line.material as any).transparent = true;
      (line.material as any).opacity = 0.2;
      mesh.add(line);
      
      group.add(mesh);
      camera.position.set(0, 5, 20);
      camera.lookAt(0, 0, 0);

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();
    } 
    else if (params.type === 'train' || params.type === 'train-dual') {
      const isDual = params.type === 'train-dual';
      const t1LenScale = (params.variables.trainLen || params.variables.train1Len || 100) / 10;
      const t2LenScale = (params.variables.train2Len || 100) / 10;
      const speed1 = (params.variables.speedKm || params.variables.speed1 || 54) * 0.008;
      const speed2 = (params.variables.speed2 || 54) * 0.008;
      const platLenScale = (params.variables.platformLen || 0) / 5;
      const direction = params.variables.direction || 'opposite';

      const concreteTex = generateConcreteTexture();
      
      // Cinematic Environment: Cyberpunk Sunset Volumetric Sky
      scene.background = new THREE.Color('#0a0c10');
      scene.fog = new THREE.FogExp2(0x0a0c10, 0.015);
      
      const ambient = new THREE.AmbientLight(0xffffff, 0.2);
      scene.add(ambient);
      
      // Giant Blood Orange Sunset
      const sunGeo = new THREE.CircleGeometry(60, 64);
      const sunMat = new THREE.MeshBasicMaterial({ color: 0xff3300, fog: false });
      const sunMesh = new THREE.Mesh(sunGeo, sunMat);
      sunMesh.position.set(300, 100, -400);
      sunMesh.lookAt(0,0,0);
      scene.add(sunMesh);

      const sunLight = new THREE.DirectionalLight(0xff5500, 5);
      sunLight.position.copy(sunMesh.position);
      sunLight.castShadow = true;
      sunLight.shadow.camera.left = -100;
      sunLight.shadow.camera.right = 100;
      sunLight.shadow.camera.top = 100;
      sunLight.shadow.camera.bottom = -100;
      sunLight.shadow.mapSize.width = 2048;
      sunLight.shadow.mapSize.height = 2048;
      scene.add(sunLight);

      // Endless Dark Ground
      const groundGeo = new THREE.PlaneGeometry(2000, 2000);
      const groundMat = new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.8 });
      const ground = new THREE.Mesh(groundGeo, groundMat);
      ground.rotation.x = -Math.PI / 2;
      ground.receiveShadow = true;
      scene.add(ground);

      // Neon Grid (Synthwave style motion)
      const gridHelper = new THREE.GridHelper(2000, 200, 0xff0055, 0x00d4ff);
      gridHelper.position.y = 0.01;
      scene.add(gridHelper);

      // Track Generator
      const buildTrack = (zPos: number) => {
        const tg = new THREE.Group();
        tg.position.z = zPos;
        const railMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, metalness: 1, roughness: 0.1 });
        const tieMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 1 });
        const r1 = new THREE.Mesh(new THREE.BoxGeometry(2000, 0.2, 0.2), railMat);
        r1.position.set(0, 0.1, -1.2); r1.receiveShadow=true; r1.castShadow=true; tg.add(r1);
        const r2 = new THREE.Mesh(new THREE.BoxGeometry(2000, 0.2, 0.2), railMat);
        r2.position.set(0, 0.1, 1.2); r2.receiveShadow=true; r2.castShadow=true; tg.add(r2);
        for(let i=-1000; i<1000; i+=2) {
          const tie = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 3.5), tieMat);
          tie.position.set(i, 0.05, 0); tie.receiveShadow=true; tie.castShadow=true; tg.add(tie);
        }
        return tg;
      };

      if (isDual) {
        scene.add(buildTrack(-3));
        scene.add(buildTrack(3));
      } else {
        scene.add(buildTrack(0));
      }

      // Platform or Pole for single train
      if (!isDual && platLenScale > 0) {
        const pGeo = new THREE.BoxGeometry(platLenScale, 2, 8);
        const pMat = new THREE.MeshStandardMaterial({ map: concreteTex, roughness: 1 });
        const plat = new THREE.Mesh(pGeo, pMat);
        plat.position.set(0, 1, -6);
        plat.receiveShadow = true; plat.castShadow = true;
        const safetyGeo = new THREE.BoxGeometry(platLenScale, 2.02, 0.5);
        const safetyMat = new THREE.MeshStandardMaterial({ color: 0xeab308 });
        const safety = new THREE.Mesh(safetyGeo, safetyMat);
        safety.position.set(0, 1, -2.25);
        scene.add(plat); scene.add(safety);
      } else if (!isDual) {
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 8), new THREE.MeshStandardMaterial({ color: 0x444444 }));
        pole.position.set(0, 4, -3); pole.castShadow = true;
        scene.add(pole);
      }

      // Cinematic Bullet Train Generator
      const buildCinematicTrain = (lenScale: number, isEnemy: boolean) => {
        const tg = new THREE.Group();
        const bodyColor = 0x1a1a1a; // Sleek dark metal
        const bodyMat = new THREE.MeshStandardMaterial({ color: bodyColor, metalness: 0.9, roughness: 0.2 });
        const ledColor = isEnemy ? 0xff003c : 0x00d4ff; // Hero is blue/cyan, enemy is red
        const ledMat = new THREE.MeshBasicMaterial({ color: ledColor });
        const blackGlass = new THREE.MeshStandardMaterial({ color: 0x020202, metalness: 1, roughness: 0 });

        // Pointed Aerodynamic Nose
        const nose = new THREE.Mesh(new THREE.CapsuleGeometry(2.5, 8, 32, 32), bodyMat);
        nose.rotation.z = Math.PI / 2; nose.position.set(4, 3, 0); nose.castShadow = true; tg.add(nose);
        
        const cockpit = new THREE.Mesh(new THREE.CylinderGeometry(2.55, 2.55, 5, 32, 1, false, 0, Math.PI), blackGlass);
        cockpit.rotation.z = Math.PI / 2; cockpit.rotation.x = Math.PI / 2; cockpit.position.set(4, 3, 0); tg.add(cockpit);

        // Neon Racing Stripes
        const strip1 = new THREE.Mesh(new THREE.BoxGeometry(8, 0.1, 5.05), ledMat);
        strip1.position.set(4, 1.5, 0); tg.add(strip1);
        const strip2 = new THREE.Mesh(new THREE.BoxGeometry(8, 0.1, 5.05), ledMat);
        strip2.position.set(4, 4.5, 0); tg.add(strip2);

        // Headlight Volumetric Glow
        const glowMat = new THREE.MeshBasicMaterial({ color: ledColor, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false });
        const glow = new THREE.Mesh(new THREE.PlaneGeometry(15, 15), glowMat);
        glow.position.set(8.5, 3, 0); glow.rotation.y = Math.PI / 2; tg.add(glow);

        const pLight = new THREE.PointLight(ledColor, 100, 100);
        pLight.position.set(10, 3, 0); tg.add(pLight);

        const baseGeo = new THREE.BoxGeometry(8, 1, 4.8);
        const baseMat = new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 1 });
        const locoBase = new THREE.Mesh(baseGeo, baseMat);
        locoBase.position.set(4, 1, 0); tg.add(locoBase);

        // Trailing Cars
        const numCars = Math.max(1, Math.floor(lenScale / 8));
        for (let c = 1; c <= numCars; c++) {
          const car = new THREE.Group();
          const carBody = new THREE.Mesh(new THREE.BoxGeometry(9.8, 5, 5), bodyMat);
          carBody.position.set(0, 3, 0); carBody.castShadow = true; car.add(carBody);
          
          const win = new THREE.Mesh(new THREE.BoxGeometry(8, 1.5, 5.05), blackGlass);
          win.position.set(0, 3.5, 0); car.add(win);
          
          const cStrip1 = new THREE.Mesh(new THREE.BoxGeometry(9.8, 0.1, 5.05), ledMat);
          cStrip1.position.set(0, 1.5, 0); car.add(cStrip1);
          const cStrip2 = new THREE.Mesh(new THREE.BoxGeometry(9.8, 0.1, 5.05), ledMat);
          cStrip2.position.set(0, 4.5, 0); car.add(cStrip2);

          const cBase = new THREE.Mesh(new THREE.BoxGeometry(9.8, 1, 4.8), baseMat);
          cBase.position.set(0, 1, 0); car.add(cBase);
          
          const conn = new THREE.Mesh(new THREE.BoxGeometry(0.4, 4, 3.5), new THREE.MeshStandardMaterial({color: 0x111111}));
          conn.position.set(5, 3, 0); car.add(conn);
          
          car.position.set(-c * 10.2 + 1, 0, 0); tg.add(car);
        }
        return { trainGroup: tg, actualLen: 8 + numCars * 10.2 };
      };

      const t1 = buildCinematicTrain(t1LenScale, false); // Hero train
      scene.add(t1.trainGroup);
      
      let t2: any = null;
      if (isDual) {
        t1.trainGroup.position.z = -3;
        t2 = buildCinematicTrain(t2LenScale, true); // Enemy train
        t2.trainGroup.position.z = 3;
        if (direction === 'opposite') {
          t2.trainGroup.rotation.y = Math.PI;
        }
        scene.add(t2.trainGroup);
      }

      let startX = isDual ? -50 : -(platLenScale / 2) - 50;
      let endX = isDual ? 0 : (platLenScale / 2) + t1.actualLen + 50;
      let t1X = startX;
      let t2X = isDual ? (direction === 'opposite' ? 50 : startX + t1.actualLen + 5) : 0;
      
      // Dynamic Drone Camera Intial Position
      camera.position.set(startX - 20, 25, 35);
      camera.lookAt(t1X, 5, 0);

      let isPaused = false;
      let pauseTimer = 0;
      let time = 0;

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        time += 0.02;
        
        // Endless sense of speed via grid scrolling
        gridHelper.position.x = t1X % 200;

        if (!isPaused) {
          t1X += speed1;
          t1.trainGroup.position.x = t1X;
          
          if (isDual) {
            if (direction === 'opposite') t2X -= speed2;
            else t2X += speed2;
            t2.trainGroup.position.x = t2X;

            let isCrossed = false;
            if (direction === 'opposite') {
              if (t1X - t1.actualLen > t2X + t2.actualLen + 5) isCrossed = true;
            } else {
              if (t1X - t1.actualLen > t2X + 5) isCrossed = true;
            }
            if (isCrossed) { isPaused = true; pauseTimer = Date.now(); }
          } else {
            if (t1X > endX) { isPaused = true; pauseTimer = Date.now(); }
          }
        } else {
          if (Date.now() - pauseTimer > 2000) {
            t1X = startX;
            if (isDual) t2X = direction === 'opposite' ? 50 : startX + t1.actualLen + 5;
            camera.position.set(startX - 20, 25, 35); // Reset drone
            isPaused = false;
          }
        }

        // Drone Camera Choreography (Cinematic Tracking)
        const targetX = isDual ? ((t1.trainGroup.position.x + t2.trainGroup.position.x) / 2) : t1X - t1.actualLen/2;
        
        // Speed warp effect
        const currentSpeed = speed1 + (isDual && direction==='opposite' ? speed2 : 0);
        camera.fov = 45 + currentSpeed * 10;
        camera.updateProjectionMatrix();

        camera.position.x += (targetX + 15 - camera.position.x) * 0.03; // Smooth trailing
        camera.position.y = 15 + Math.sin(time * 2) * 2; // Handheld bob
        camera.position.z = 35 + Math.cos(time * 1.5) * 5; // Slight orbital tracking
        camera.lookAt(targetX, 5, 0);

        renderer.render(scene, camera);
      };
      animate();
    }
    else if (params.type === 'boats') {
      camera.position.set(15, 10, 20);
      
      const waterGeo = new THREE.PlaneGeometry(100, 100, 32, 32);
      const waterMat = new THREE.MeshPhysicalMaterial({ 
        color: 0x0284c7, transmission: 0.8, opacity: 0.9, transparent: true, roughness: 0.1, metalness: 0.1 
      });
      const water = new THREE.Mesh(waterGeo, waterMat);
      water.rotation.x = -Math.PI / 2;
      water.receiveShadow = true;
      scene.add(water);

      const boatGroup = new THREE.Group();
      
      const hullGeo = new THREE.CylinderGeometry(2, 0, 8, 3, 1, false, 0, Math.PI);
      hullGeo.rotateX(Math.PI / 2);
      hullGeo.rotateZ(Math.PI / 2);
      const hullMat = new THREE.MeshStandardMaterial({ color: 0x854d0e, roughness: 0.8 });
      const hull = new THREE.Mesh(hullGeo, hullMat);
      hull.position.y = 0.5;
      hull.castShadow = true;
      boatGroup.add(hull);

      const cabinGeo = new THREE.BoxGeometry(2.5, 2, 3);
      const cabinMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const cabin = new THREE.Mesh(cabinGeo, cabinMat);
      cabin.position.set(0, 2.5, -1);
      cabin.castShadow = true;
      boatGroup.add(cabin);

      scene.add(boatGroup);

      let bZ = params.variables.mode === 'downstream' ? -20 : 20;
      const speed = params.variables.mode === 'downstream' ? 0.2 : 0.08;
      let time = 0;
      
      const pos = waterGeo.attributes.position;
      
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        time += 0.05;

        for (let i = 0; i < pos.count; i++) {
          const u = pos.getX(i);
          const v = pos.getY(i);
          const wave1 = Math.sin(u * 0.2 + time) * 0.5;
          const wave2 = Math.cos(v * 0.2 + time) * 0.5;
          pos.setZ(i, wave1 + wave2);
        }
        pos.needsUpdate = true;

        bZ += params.variables.mode === 'downstream' ? speed : -speed;
        if (bZ > 30) bZ = -30;
        if (bZ < -30) bZ = 30;
        
        boatGroup.position.z = bZ;
        boatGroup.position.y = Math.sin(time * 2) * 0.3; 
        boatGroup.rotation.x = Math.sin(time * 2) * 0.05; 
        boatGroup.rotation.z = Math.cos(time * 1.5) * 0.05; 

        renderer.render(scene, camera);
      };
      animate();
    }
    else if (params.type === 'pipes') {
      scene.background = new THREE.Color('#1e293b');
      camera.position.set(0, 15, 25);
      
      const tankGeo = new THREE.CylinderGeometry(5, 5, 12, 32);
      const tankMat = new THREE.MeshPhysicalMaterial({ 
        color: 0xffffff, transmission: 0.9, opacity: 1, transparent: true, roughness: 0, metalness: 0.1, side: THREE.DoubleSide
      });
      const tank = new THREE.Mesh(tankGeo, tankMat);
      tank.position.y = 6;
      scene.add(tank);

      const baseGeo = new THREE.CylinderGeometry(5.2, 5.2, 0.5, 32);
      const baseMat = new THREE.MeshStandardMaterial({ color: 0x475569 });
      const base = new THREE.Mesh(baseGeo, baseMat);
      scene.add(base);

      const pipeMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.2 });
      
      const inletGroup = new THREE.Group();
      const inletH = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 4), pipeMat);
      inletH.rotation.z = Math.PI / 2;
      inletH.position.set(-5, 13, 0);
      inletGroup.add(inletH);
      const inletV = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 2), pipeMat);
      inletV.position.set(-3, 12, 0);
      inletGroup.add(inletV);
      scene.add(inletGroup);

      const waterGeo = new THREE.CylinderGeometry(4.9, 4.9, 1, 32);
      const waterMat = new THREE.MeshPhysicalMaterial({ color: 0x0ea5e9, transmission: 0.5, opacity: 0.9, transparent: true });
      const water = new THREE.Mesh(waterGeo, waterMat);
      water.position.y = 0.5;
      scene.add(water);

      const streamGeo = new THREE.CylinderGeometry(0.4, 0.4, 12, 16);
      const stream = new THREE.Mesh(streamGeo, waterMat);
      stream.position.set(-3, 6, 0);
      scene.add(stream);

      let wHeight = 0.1;
      const isFilling = params.variables.mode === 'both-fill';
      let time = 0;

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        time += 0.1;
        
        if (isFilling) {
          wHeight += 0.02;
          if (wHeight > 11.5) wHeight = 0.1;
        } else {
          wHeight += 0.005; 
          if (wHeight > 11.5) wHeight = 0.1;
        }
        
        water.scale.y = wHeight;
        water.position.y = wHeight / 2;
        
        const streamLength = 12 - wHeight;
        stream.scale.y = streamLength / 12;
        stream.position.y = wHeight + (streamLength / 2);

        stream.scale.x = 1 + Math.sin(time * 10) * 0.05;
        stream.scale.z = 1 + Math.cos(time * 10) * 0.05;

        renderer.render(scene, camera);
      };
      animate();
    }
    else if (params.type === 'percentage') {
      scene.background = new THREE.Color('#0f172a');
      camera.position.set(0, 10, 20);
      
      const tankGeo = new THREE.CylinderGeometry(4, 4, 10, 32);
      const tankMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transmission: 0.9, opacity: 1, transparent: true, roughness: 0, metalness: 0.1, side: THREE.DoubleSide });
      const tank = new THREE.Mesh(tankGeo, tankMat);
      tank.position.y = 5;
      scene.add(tank);

      const targetHeight = (params.variables.percentage / 100) * 10;
      const fluidGeo = new THREE.CylinderGeometry(3.9, 3.9, 10, 32);
      const fluidMat = new THREE.MeshPhysicalMaterial({ color: 0x3b82f6, transmission: 0.5, opacity: 0.9, transparent: true });
      const fluid = new THREE.Mesh(fluidGeo, fluidMat);
      fluid.position.y = 0;
      scene.add(fluid);

      let currentHeight = 0.01;
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        if (currentHeight < targetHeight) {
          currentHeight += 0.05;
        }
        fluid.scale.y = Math.max(0.01, currentHeight / 10);
        fluid.position.y = currentHeight / 2;
        renderer.render(scene, camera);
      };
      animate();
    }
    else if (params.type === 'profit-loss') {
      scene.background = new THREE.Color('#27272a'); 
      camera.position.set(0, 15, 20);
      
      const woodTex = generateWoodTexture();
      const tableGeo = new THREE.BoxGeometry(20, 1, 10);
      const tableMat = new THREE.MeshStandardMaterial({ map: woodTex, roughness: 0.9 });
      const table = new THREE.Mesh(tableGeo, tableMat);
      table.position.y = -0.5;
      table.receiveShadow = true;
      scene.add(table);

      const coins: THREE.Mesh[] = [];
      const coinGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.2, 16);
      const coinMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 1, roughness: 0.2 });
      
      const isProfit = params.variables.sp >= params.variables.cp;
      const numCoins = isProfit ? 20 : 5;
      
      let time = 0;
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        time += 1;
        
        if (time % 10 === 0 && coins.length < numCoins) {
          const coin = new THREE.Mesh(coinGeo, coinMat);
          coin.position.set((Math.random() - 0.5) * 8, 15, (Math.random() - 0.5) * 4);
          coin.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
          coin.castShadow = true;
          scene.add(coin);
          coins.push(coin);
        }
        
        coins.forEach(c => {
          if (c.position.y > 0.1) {
            c.position.y -= 0.5;
            c.rotation.x += 0.1;
          } else {
            c.position.y = 0.1;
            c.rotation.x = 0;
          }
        });
        
        camera.position.x = Math.sin(time * 0.01) * 5;
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
      };
      animate();
    }
    else if (params.type === 'interest') {
      scene.background = new THREE.Color('#09090b');
      camera.position.set(0, 8, 15);
      
      const metalTex = generateMetalTexture();
      const floorGeo = new THREE.PlaneGeometry(30, 30);
      const floorMat = new THREE.MeshStandardMaterial({ map: metalTex, metalness: 0.8, roughness: 0.5 });
      const floor = new THREE.Mesh(floorGeo, floorMat);
      floor.rotation.x = -Math.PI / 2;
      floor.receiveShadow = true;
      scene.add(floor);

      const bars: THREE.Mesh[] = [];
      const barGeo = new THREE.BoxGeometry(2, 0.5, 1);
      const goldMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 1, roughness: 0.1 });

      const totalInterest = params.variables.interest || 1000;
      const numBars = Math.min(100, Math.max(5, Math.floor(totalInterest / 100)));
      
      let currentBars = 0;
      let time = 0;
      
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        time += 1;
        
        if (time % 5 === 0 && currentBars < numBars) {
          const bar = new THREE.Mesh(barGeo, goldMat);
          const stackX = (Math.floor(currentBars / 10) % 3) * 3 - 3;
          const stackZ = Math.floor(currentBars / 30) * -2;
          const stackY = (currentBars % 10) * 0.5 + 0.25;
          bar.position.set(stackX, 10, stackZ);
          bar.userData = { targetY: stackY };
          bar.castShadow = true;
          scene.add(bar);
          bars.push(bar);
          currentBars++;
        }
        
        bars.forEach(b => {
          if (b.position.y > b.userData.targetY) {
            b.position.y -= 0.8;
          } else {
            b.position.y = b.userData.targetY;
          }
        });

        camera.position.x = Math.sin(time * 0.005) * 8;
        camera.lookAt(0, 2, 0);
        renderer.render(scene, camera);
      };
      animate();
    }
    else if (params.type === 'coding') {
      scene.background = new THREE.Color('#020617');
      camera.position.set(0, 0, 20);
      
      const group = new THREE.Group();
      scene.add(group);
      
      const packetGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const packetMat = new THREE.MeshStandardMaterial({ color: 0x22d3ee, emissive: 0x06b6d4, emissiveIntensity: 1 });
      
      for(let i=0; i<100; i++) {
        const mesh = new THREE.Mesh(packetGeo, packetMat);
        mesh.position.set((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 10);
        group.add(mesh);
      }
      
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        group.children.forEach(m => {
          m.position.y -= 0.2;
          if (m.position.y < -15) m.position.y = 15;
          m.rotation.x += 0.05;
          m.rotation.y += 0.05;
        });
        renderer.render(scene, camera);
      };
      animate();
    }
    else if (params.type === 'number-line') {
      scene.background = new THREE.Color('#1e293b');
      camera.position.set(0, 10, 20);
      
      const concreteTex = generateConcreteTexture();
      const blockGeo = new THREE.BoxGeometry(1.8, 2, 1.8);
      const blockMat = new THREE.MeshStandardMaterial({ map: concreteTex });
      
      for(let i=-5; i<=15; i++) {
        const block = new THREE.Mesh(blockGeo, blockMat);
        block.position.set(i * 2, 0, 0);
        block.receiveShadow = true;
        block.castShadow = true;
        scene.add(block);
      }
      
      const ballGeo = new THREE.SphereGeometry(0.8, 32, 32);
      const ballMat = new THREE.MeshStandardMaterial({ color: 0xf43f5e, emissive: 0xe11d48, emissiveIntensity: 0.5 });
      const ball = new THREE.Mesh(ballGeo, ballMat);
      ball.castShadow = true;
      scene.add(ball);
      
      let ballX = 0;
      const targetX = (params.variables.sum || 1) * 2;
      let time = 0;
      
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        time += 0.05;
        
        if (ballX < targetX) {
          ballX += 0.1;
        }
        ball.position.x = ballX;
        ball.position.y = 1 + Math.abs(Math.sin(time * 5)) * 3;
        
        camera.position.x += (ballX - camera.position.x) * 0.1;
        camera.lookAt(ballX, 0, 0);
        renderer.render(scene, camera);
      };
      animate();
    }
    else {
      // Ultimate Fallback
      scene.background = new THREE.Color('#0f172a');
      const geo = new THREE.BoxGeometry(4, 4, 4);
      const mat = new THREE.MeshStandardMaterial({ color: 0x10b981 });
      const mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);
      camera.position.set(0, 5, 15);
      camera.lookAt(0,0,0);
      
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        mesh.rotation.y += 0.02;
        mesh.rotation.x += 0.01;
        renderer.render(scene, camera);
      };
      animate();
    }

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [params]);

  return <div ref={mountRef} className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-inner" />;
};
