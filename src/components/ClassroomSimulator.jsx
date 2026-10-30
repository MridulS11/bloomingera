import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Play, RotateCcw, ArrowRight, ArrowUp, ArrowDown, ArrowLeft, 
  Sun, Droplets, Compass, CheckCircle2, AlertCircle, HelpCircle, Lightbulb 
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ClassroomSimulator() {
  const [activeTab, setActiveTab] = useState('botany'); // 'botany' | 'kiddycodey' | 'phonics'

  // --- BOTANY EXPERIMENT STATE ---
  const [sunlight, setSunlight] = useState(60);
  const [water, setWater] = useState(70);

  // Growth calculation based on balance
  const growthScore = Math.min(100, Math.round(((sunlight + water) / 2) * (1 - Math.abs(sunlight - water) / 140)));
  const plantStage = growthScore < 25 ? 'dormant' : growthScore < 55 ? 'sprout' : growthScore < 85 ? 'budding' : 'blooming';

  // --- KIDDY CODEY MAZE STATE ---
  // Grid size 4x4
  // 0: empty, 1: stone (obstacle), 2: flower (star), 3: hive (target)
  const [robotPos, setRobotPos] = useState({ r: 0, c: 0 });
  const [commands, setCommands] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [gameStatus, setGameStatus] = useState('idle'); // 'idle' | 'running' | 'won' | 'blocked'
  const [collectedFlowers, setCollectedFlowers] = useState(0);

  const mazeGrid = [
    [0, 0, 1, 2],
    [1, 0, 0, 0],
    [0, 2, 1, 0],
    [0, 1, 0, 3] // target hive at (3,3)
  ];

  const addCommand = (dir) => {
    if (commands.length < 8 && !isRunning) {
      setCommands([...commands, dir]);
    }
  };

  const resetMaze = () => {
    setRobotPos({ r: 0, c: 0 });
    setCommands([]);
    setIsRunning(false);
    setGameStatus('idle');
    setCollectedFlowers(0);
  };

  const runCodeSequence = async () => {
    if (commands.length === 0 || isRunning) return;
    setIsRunning(true);
    setGameStatus('running');
    let curr = { r: 0, c: 0 };
    let flowers = 0;

    for (let i = 0; i < commands.length; i++) {
      await new Promise((res) => setTimeout(res, 450));
      const cmd = commands[i];
      let nextR = curr.r;
      let nextC = curr.c;

      if (cmd === 'UP') nextR = Math.max(0, curr.r - 1);
      if (cmd === 'DOWN') nextR = Math.min(3, curr.r + 1);
      if (cmd === 'LEFT') nextC = Math.max(0, curr.c - 1);
      if (cmd === 'RIGHT') nextC = Math.min(3, curr.c + 1);

      // Check obstacle
      if (mazeGrid[nextR][nextC] === 1) {
        setRobotPos({ r: nextR, c: nextC });
        setGameStatus('blocked');
        setIsRunning(false);
        return;
      }

      // Collect flower
      if (mazeGrid[nextR][nextC] === 2) {
        flowers++;
      }

      curr = { r: nextR, c: nextC };
      setRobotPos(curr);
      setCollectedFlowers(flowers);

      // Check target
      if (mazeGrid[nextR][nextC] === 3) {
        setGameStatus('won');
        setIsRunning(false);
        return;
      }
    }

    if (curr.r === 3 && curr.c === 3) {
      setGameStatus('won');
    } else {
      setGameStatus('incomplete');
    }
    setIsRunning(false);
  };

  // --- PHONICS STATE ---
  const [selectedLetter, setSelectedLetter] = useState('S');
  const phonicsCards = {
    'S': { sound: '/sss/', word: 'Sun & Sand', sensory: 'Tracing curves through smooth sea sand while voicing the serpentine breath.' },
    'M': { sound: '/mmm/', word: 'Moon & Mint', sensory: 'Smelling crushed fresh mint leaves while humming the nasal /mmm/ vibration.' },
    'R': { sound: '/rrr/', word: 'Rain & River', sensory: 'Splashing rhythm drops on tactile drum skins while rolling the tongue.' },
    'B': { sound: '/buh/', word: 'Bees & Blooms', sensory: 'Popping bubbles between finger pads to feel the explosive bilabial plosive.' }
  };

  return (
    <section id="simulator" className="py-20 relative overflow-hidden bg-gradient-to-b from-white/40 via-[#F3FAFA] to-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-turquoise/20 border border-brand-turquoise/40 text-brand-navy font-bold text-xs mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-turquoise-dark" />
            <span>Interactive Pedagogical Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-display mb-4">
            Try the Classroom Simulator
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/70 leading-relaxed">
            See for yourself how Blooming Era children grasp advanced botany, computational logic, and phonemic awareness without opening a single printed textbook or worksheet.
          </p>

          {/* Simulator Tab Switcher */}
          <div className="inline-flex p-1.5 mt-6 rounded-2xl bg-white/80 border border-white shadow-md backdrop-blur-xl">
            <button
              onClick={() => setActiveTab('botany')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'botany'
                  ? 'bg-brand-lime text-brand-navy shadow-sm'
                  : 'text-brand-navy/70 hover:text-brand-navy hover:bg-white/50'
              }`}
            >
              🌱 WonderLab: Botany Cycle
            </button>
            <button
              onClick={() => setActiveTab('kiddycodey')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'kiddycodey'
                  ? 'bg-brand-turquoise text-brand-navy shadow-sm'
                  : 'text-brand-navy/70 hover:text-brand-navy hover:bg-white/50'
              }`}
            >
              🤖 Kiddy Codey: Tactile Logic
            </button>
            <button
              onClick={() => setActiveTab('phonics')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'phonics'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'text-brand-navy/70 hover:text-brand-navy hover:bg-white/50'
              }`}
            >
              ✨ Sensory Sand Phonics
            </button>
          </div>
        </ScrollReveal>

        {/* --- SIMULATOR TAB 1: BOTANY CYCLE --- */}
        {activeTab === 'botany' && (
          <div className="glass-panel p-6 sm:p-10 border-white/90 shadow-2xl bg-white/85 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Controls */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-turquoise-dark bg-brand-turquoise/20 px-2 py-0.5 rounded">
                    World 5: Nature & Discovery
                  </span>
                  <h3 className="text-xl font-extrabold text-brand-navy mt-1">
                    Living Germination Station
                  </h3>
                  <p className="text-xs text-brand-navy/70 mt-1">
                    Instead of memorizing plant parts from page 42, preschoolers adjust physical garden nutrients to witness live photosynthesis.
                  </p>
                </div>

                {/* Sunlight Slider */}
                <div className="p-4 rounded-2xl bg-white/70 border border-white shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
                      <Sun className="w-4 h-4 text-amber-500" />
                      Sunlight Exposure:
                    </span>
                    <span className="text-xs font-mono font-extrabold text-brand-navy">{sunlight}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sunlight}
                    onChange={(e) => setSunlight(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-2 bg-amber-100 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-brand-navy/50 mt-1">
                    <span>Dim Shade</span>
                    <span>Gentle Morning</span>
                    <span>Warm Noon</span>
                  </div>
                </div>

                {/* Water Slider */}
                <div className="p-4 rounded-2xl bg-white/70 border border-white shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
                      <Droplets className="w-4 h-4 text-blue-500" />
                      Moisture / Water Droplets:
                    </span>
                    <span className="text-xs font-mono font-extrabold text-brand-navy">{water}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={water}
                    onChange={(e) => setWater(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer h-2 bg-blue-100 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-brand-navy/50 mt-1">
                    <span>Dry Clay</span>
                    <span>Hydrated Loam</span>
                    <span>Over-saturated</span>
                  </div>
                </div>

                {/* Dynamic Pedagogical Feedback Card */}
                <div className="p-4 rounded-2xl bg-brand-lime/20 border border-brand-lime/40 text-brand-navy text-xs space-y-1">
                  <div className="font-extrabold flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-brand-navy" />
                    Preschooler Experience Insight:
                  </div>
                  <p className="text-brand-navy/80">
                    {plantStage === 'dormant' && "The seed requires warmth and moisture to soften the seed coat. The child touches dry soil and notes no root growth."}
                    {plantStage === 'sprout' && "The radicle cracks the pericarp! The child sketches the white embryo root in their experiential discovery journal."}
                    {plantStage === 'budding' && "Photosynthesis is balanced! Stems produce vibrant chlorophyll leaves. Children measure height using colored unifix cubes."}
                    {plantStage === 'blooming' && "Perfect harmony! Bright yellow petals bloom, attracting observation bees. The child completes the 5-Step Experiential Cycle!"}
                  </p>
                </div>
              </div>

              {/* Right Interactive Visual Stage */}
              <div className="lg:col-span-7 flex flex-col items-center">
                <div className="w-full aspect-[4/3] rounded-3xl bg-gradient-to-b from-sky-100 via-sky-50 to-amber-100/40 p-6 flex flex-col justify-end items-center relative overflow-hidden border border-white shadow-inner">
                  
                  {/* Dynamic Sun */}
                  <div 
                    className="absolute transition-all duration-500 rounded-full flex items-center justify-center pointer-events-none"
                    style={{
                      top: '15px',
                      right: '25px',
                      width: `${40 + (sunlight * 0.4)}px`,
                      height: `${40 + (sunlight * 0.4)}px`,
                      backgroundColor: sunlight > 75 ? '#F59E0B' : '#FBBF24',
                      boxShadow: `0 0 ${sunlight * 0.8}px rgba(245, 158, 11, ${sunlight / 100})`,
                      opacity: Math.max(0.2, sunlight / 100)
                    }}
                  >
                    <Sun className="w-6 h-6 text-white animate-spin" style={{ animationDuration: '30s' }} />
                  </div>

                  {/* Dynamic Raindrops */}
                  {water > 40 && (
                    <div className="absolute top-10 left-10 flex gap-4 pointer-events-none opacity-60">
                      <Droplets className="w-5 h-5 text-blue-400 animate-bounce" style={{ animationDuration: '1.2s' }} />
                      <Droplets className="w-4 h-4 text-blue-400 animate-bounce" style={{ animationDuration: '0.8s', animationDelay: '0.3s' }} />
                      <Droplets className="w-5 h-5 text-blue-400 animate-bounce" style={{ animationDuration: '1.5s', animationDelay: '0.6s' }} />
                    </div>
                  )}

                  {/* Plant Canvas Simulation */}
                  <div className="relative z-10 flex flex-col items-center mb-8">
                    {plantStage === 'dormant' && (
                      <div className="w-8 h-6 rounded-full bg-amber-800 shadow-md border border-amber-950 flex items-center justify-center animate-pulse">
                        <span className="text-[8px] text-white font-mono">seed</span>
                      </div>
                    )}

                    {plantStage === 'sprout' && (
                      <div className="flex flex-col items-center animate-in zoom-in-75 duration-300">
                        <div className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center shadow-lg border border-brand-lime-dark">
                          🌱
                        </div>
                        <div className="w-2 h-12 bg-emerald-600 rounded-full"></div>
                        <div className="w-6 h-4 bg-amber-900 rounded-full -mt-1"></div>
                      </div>
                    )}

                    {plantStage === 'budding' && (
                      <div className="flex flex-col items-center animate-in zoom-in-75 duration-300">
                        <div className="flex items-center gap-1">
                          <span className="text-2xl">🌿</span>
                          <span className="text-2xl">🌱</span>
                        </div>
                        <div className="w-3 h-24 bg-emerald-600 rounded-full shadow"></div>
                        <div className="w-10 h-4 bg-amber-900 rounded-full -mt-1"></div>
                      </div>
                    )}

                    {plantStage === 'blooming' && (
                      <div className="flex flex-col items-center animate-in zoom-in duration-500">
                        <div className="relative">
                          <span className="text-5xl filter drop-shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>🌻</span>
                          <span className="absolute -top-3 -right-4 text-xl animate-pulse">✨</span>
                        </div>
                        <div className="w-3.5 h-32 bg-emerald-600 rounded-full shadow-md flex flex-col justify-around items-center">
                          <div className="w-10 h-3 bg-emerald-500 rounded-full transform -rotate-12"></div>
                          <div className="w-10 h-3 bg-emerald-500 rounded-full transform rotate-12"></div>
                        </div>
                        <div className="w-16 h-5 bg-amber-900 rounded-full -mt-2"></div>
                      </div>
                    )}
                  </div>

                  {/* Cross-Section Soil Bed */}
                  <div className="w-full h-16 bg-gradient-to-r from-amber-900 via-amber-950 to-amber-900 rounded-2xl p-2.5 flex items-center justify-between text-white border-t-4 border-amber-800">
                    <div className="text-[11px] font-mono text-amber-200">
                      Cross-Section Root Bed
                    </div>
                    <div className="text-[11px] font-bold bg-white/20 px-2.5 py-1 rounded-full">
                      Growth Index: {growthScore}% ({plantStage.toUpperCase()})
                    </div>
                  </div>

                </div>

                <div className="w-full flex justify-between items-center mt-3 text-xs text-brand-navy/60 px-2">
                  <span>Traditional Method: Draw flower on page 14</span>
                  <span className="font-bold text-brand-turquoise-dark">Blooming Era: Touch, balance & nurture live flora</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* --- SIMULATOR TAB 2: KIDDY CODEY MAZE --- */}
        {activeTab === 'kiddycodey' && (
          <div className="glass-panel p-6 sm:p-10 border-white/90 shadow-2xl bg-white/85 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Coding Console */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                    World 6: Tomorrow Thinking
                  </span>
                  <h3 className="text-xl font-extrabold text-brand-navy mt-1">
                    Screen-Free Algorithmic Grid
                  </h3>
                  <p className="text-xs text-brand-navy/70 mt-1">
                    Preschoolers program physical wooden tiles to route the bee safely through rocks, gather nectar flowers, and reach the hive!
                  </p>
                </div>

                {/* Command Controls */}
                <div className="p-4 rounded-2xl bg-white/80 border border-white shadow-sm space-y-3">
                  <div className="text-xs font-bold text-brand-navy flex justify-between items-center">
                    <span>Place Physical Directional Tiles:</span>
                    <span className="text-[10px] text-brand-navy/50">{commands.length}/8 tiles</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    <button
                      onClick={() => addCommand('UP')}
                      disabled={isRunning || commands.length >= 8}
                      className="p-3 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-xs flex flex-col items-center gap-1 active:scale-95 transition-all disabled:opacity-50"
                    >
                      <ArrowUp className="w-4 h-4" />
                      <span>UP</span>
                    </button>
                    <button
                      onClick={() => addCommand('DOWN')}
                      disabled={isRunning || commands.length >= 8}
                      className="p-3 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-xs flex flex-col items-center gap-1 active:scale-95 transition-all disabled:opacity-50"
                    >
                      <ArrowDown className="w-4 h-4" />
                      <span>DOWN</span>
                    </button>
                    <button
                      onClick={() => addCommand('LEFT')}
                      disabled={isRunning || commands.length >= 8}
                      className="p-3 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-xs flex flex-col items-center gap-1 active:scale-95 transition-all disabled:opacity-50"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>LEFT</span>
                    </button>
                    <button
                      onClick={() => addCommand('RIGHT')}
                      disabled={isRunning || commands.length >= 8}
                      className="p-3 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-xs flex flex-col items-center gap-1 active:scale-95 transition-all disabled:opacity-50"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>RIGHT</span>
                    </button>
                  </div>

                  {/* Tile Sequence Ribbon */}
                  <div className="p-3 rounded-xl bg-brand-navy/5 border border-brand-navy/10 min-h-[50px] flex items-center gap-1.5 flex-wrap">
                    {commands.length === 0 ? (
                      <span className="text-[11px] text-brand-navy/40 italic">Click arrows to queue movement steps...</span>
                    ) : (
                      commands.map((cmd, idx) => (
                        <span key={idx} className="px-2 py-1 rounded-md bg-white border border-brand-navy/15 text-[10px] font-mono font-bold text-brand-navy shadow-xs">
                          {idx + 1}. {cmd}
                        </span>
                      ))
                    )}
                  </div>

                  {/* Run / Reset Buttons */}
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={runCodeSequence}
                      disabled={isRunning || commands.length === 0}
                      className="btn-lime flex-1 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 disabled:opacity-50"
                    >
                      <Play className="w-3.5 h-3.5 fill-brand-navy text-brand-navy" />
                      <span>Execute Algorithm</span>
                    </button>
                    <button
                      onClick={resetMaze}
                      disabled={isRunning}
                      className="p-2.5 rounded-xl bg-brand-navy/10 hover:bg-brand-navy/15 text-brand-navy text-xs font-bold transition-colors disabled:opacity-50"
                      title="Reset Board"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Status Feedback */}
                {gameStatus === 'won' && (
                  <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Goal Reached! The bee gathered nectar and reached home safely!</span>
                  </div>
                )}
                {gameStatus === 'blocked' && (
                  <div className="p-3 rounded-xl bg-rose-100 border border-rose-300 text-rose-900 text-xs font-bold flex items-center gap-2 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 text-rose-700" />
                    <span>Oops! The bee bumped into a stone. Time to debug the algorithm!</span>
                  </div>
                )}
                {gameStatus === 'incomplete' && (
                  <div className="p-3 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold flex items-center gap-2 animate-in fade-in">
                    <HelpCircle className="w-4 h-4 text-amber-700" />
                    <span>Path finished, but haven't reached the hive yet. Add more tiles!</span>
                  </div>
                )}
              </div>

              {/* Right 4x4 Tactile Grid Board */}
              <div className="lg:col-span-7 flex flex-col items-center">
                <div className="p-4 sm:p-6 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-brand-navy/10 shadow-lg">
                  <div className="grid grid-cols-4 gap-2 sm:gap-3 w-[280px] sm:w-[360px] h-[280px] sm:h-[360px]">
                    {mazeGrid.map((row, rIdx) =>
                      row.map((cell, cIdx) => {
                        const isRobot = robotPos.r === rIdx && robotPos.c === cIdx;
                        return (
                          <div
                            key={`${rIdx}-${cIdx}`}
                            className={`rounded-2xl border flex items-center justify-center transition-all duration-300 text-2xl relative ${
                              cell === 1 
                                ? 'bg-slate-200 border-slate-300 text-slate-700' 
                                : cell === 3 
                                ? 'bg-amber-200 border-amber-400' 
                                : 'bg-white/80 border-white shadow-xs'
                            }`}
                          >
                            {/* Grid coordinates */}
                            <span className="absolute top-1 left-1.5 text-[8px] font-mono text-brand-navy/30">
                              {rIdx},{cIdx}
                            </span>

                            {cell === 1 && !isRobot && <span>🪨</span>}
                            {cell === 2 && !isRobot && <span className="animate-pulse">🌸</span>}
                            {cell === 3 && !isRobot && <span>🍯</span>}

                            {isRobot && (
                              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-brand-lime flex items-center justify-center shadow-lg border-2 border-brand-navy animate-bounce">
                                <span className="text-xl sm:text-2xl">🐝</span>
                              </div>
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                <div className="w-full flex justify-between items-center mt-3 text-xs text-brand-navy/60 px-4">
                  <span>Legend: 🐝 Learner | 🪨 Obstacle | 🌸 Nectar | 🍯 Target Hive</span>
                  <span className="font-bold text-brand-navy">Nectar Gathered: {collectedFlowers}</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* --- SIMULATOR TAB 3: SENSORY SAND PHONICS --- */}
        {activeTab === 'phonics' && (
          <div className="glass-panel p-6 sm:p-10 border-white/90 shadow-2xl bg-white/85 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Selector */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-navy bg-brand-lime/40 px-2 py-0.5 rounded">
                    World 1: Language Lab
                  </span>
                  <h3 className="text-xl font-extrabold text-brand-navy mt-1">
                    Multi-Sensory Sand Tracing
                  </h3>
                  <p className="text-xs text-brand-navy/70 mt-1">
                    Children build muscular muscle memory and phonological joy through scented beach sand, physical tactile objects, and rhythmic vocal play.
                  </p>
                </div>

                {/* Letter Selection Chips */}
                <div className="flex gap-2">
                  {Object.keys(phonicsCards).map((letter) => (
                    <button
                      key={letter}
                      onClick={() => setSelectedLetter(letter)}
                      className={`w-12 h-12 rounded-2xl font-black text-lg transition-all flex items-center justify-center border ${
                        selectedLetter === letter
                          ? 'btn-lime border-brand-navy shadow-md scale-105'
                          : 'bg-white/80 hover:bg-white text-brand-navy/70 border-brand-navy/10'
                      }`}
                    >
                      {letter}
                    </button>
                  ))}
                </div>

                {/* Selected Letter Breakdown */}
                <div className="p-4 rounded-2xl bg-white/70 border border-white space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-brand-navy">Phonetic Sound:</span>
                    <span className="text-sm font-mono font-black text-brand-turquoise-dark px-2 py-0.5 bg-brand-turquoise/20 rounded">
                      {phonicsCards[selectedLetter].sound}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-brand-navy">Associated Object:</span>
                    <span className="text-xs font-extrabold text-brand-navy">
                      {phonicsCards[selectedLetter].word}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-brand-navy/5 text-xs text-brand-navy/75 leading-relaxed">
                    <strong className="text-brand-navy block mb-0.5">Sensory Experience:</strong>
                    {phonicsCards[selectedLetter].sensory}
                  </div>
                </div>
              </div>

              {/* Right Sand Tray Simulator */}
              <div className="lg:col-span-7 flex flex-col items-center">
                <div className="w-full aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#E8D4B0] via-[#DEBE88] to-[#C99E5E] p-8 border-8 border-amber-950/20 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
                  
                  {/* Sand texture ripple overlays */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]" />
                  
                  {/* Traced Letter Impression */}
                  <div className="relative z-10 flex flex-col items-center">
                    <span 
                      className="text-8xl sm:text-9xl font-extrabold text-amber-950/30 filter drop-shadow-inner select-none tracking-widest font-display"
                      style={{
                        textShadow: 'inset 2px 2px 4px rgba(0,0,0,0.4), 1px 1px 0px rgba(255,255,255,0.8)'
                      }}
                    >
                      {selectedLetter}
                    </span>
                    <div className="mt-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white text-xs font-bold text-brand-navy shadow-sm">
                      Sensory Sand Impression ({phonicsCards[selectedLetter].sound})
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-4 text-[10px] text-amber-950/60 font-mono">
                    Tactile Sensory Wooden Tray #04
                  </div>
                </div>

                <div className="w-full flex justify-between items-center mt-3 text-xs text-brand-navy/60 px-2">
                  <span>No rote copybook drills</span>
                  <span className="font-bold text-brand-navy">Permanent tactile-auditory neurological retention</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
