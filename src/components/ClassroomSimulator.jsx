import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Play, RotateCcw, ArrowRight, ArrowUp, ArrowDown, ArrowLeft, 
  Sun, Droplets, Compass, CheckCircle2, AlertCircle, HelpCircle, Lightbulb 
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ClassroomSimulator() {
  // Ordered strictly as requested: Kiddy Codey (1st), Phonics (2nd), WonderLab Botany (3rd / Last)
  const [activeTab, setActiveTab] = useState('kiddycodey'); 

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

  // --- BOTANY EXPERIMENT STATE (WONDERLAB - LAST TAB) ---
  const [sunlight, setSunlight] = useState(65);
  const [water, setWater] = useState(70);

  // Growth calculation based on balance
  const growthScore = Math.min(100, Math.round(((sunlight + water) / 2) * (1 - Math.abs(sunlight - water) / 140)));
  const plantStage = growthScore < 25 ? 'dormant' : growthScore < 55 ? 'sprout' : growthScore < 85 ? 'budding' : 'blooming';

  return (
    <section id="simulator" className="py-20 relative overflow-hidden bg-gradient-to-b from-white/40 via-[#F3FAFA] to-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title with Animated Badge */}
        <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-turquoise/20 border border-brand-turquoise/40 text-brand-navy font-bold text-xs mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-brand-turquoise-dark animate-spin" style={{ animationDuration: '8s' }} />
            <span>Interactive Pedagogical Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-display mb-4">
            Try the Classroom Simulator
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/70 leading-relaxed">
            See for yourself how Blooming Era children grasp algorithmic logic, phonemic awareness, and botany without opening a single printed textbook or worksheet.
          </p>

          {/* Simulator Tab Switcher: Kiddy Codey (1st), Phonics (2nd), WonderLab Botany (3rd/Last) */}
          <div className="inline-flex p-1.5 mt-6 rounded-2xl bg-white/80 border border-white shadow-md backdrop-blur-xl flex-wrap justify-center gap-1">
            <button
              onClick={() => setActiveTab('kiddycodey')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all relative ${
                activeTab === 'kiddycodey'
                  ? 'bg-brand-turquoise text-brand-navy shadow-md scale-105'
                  : 'text-brand-navy/70 hover:text-brand-navy hover:bg-white/50'
              }`}
            >
              🤖 1. Kiddy Codey: Tactile Logic
            </button>
            <button
              onClick={() => setActiveTab('phonics')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all relative ${
                activeTab === 'phonics'
                  ? 'bg-brand-navy text-white shadow-md scale-105'
                  : 'text-brand-navy/70 hover:text-brand-navy hover:bg-white/50'
              }`}
            >
              ✨ 2. Sensory Sand Phonics
            </button>
            <button
              onClick={() => setActiveTab('botany')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all relative ${
                activeTab === 'botany'
                  ? 'bg-brand-lime text-brand-navy shadow-md scale-105'
                  : 'text-brand-navy/70 hover:text-brand-navy hover:bg-white/50'
              }`}
            >
              🌱 3. WonderLab: Botany Cycle
            </button>
          </div>
        </ScrollReveal>

        {/* Animated Tab Content Container */}
        <AnimatePresence mode="wait">
          
          {/* ========================================================================= */}
          {/* TAB 1: KIDDY CODEY MAZE (FIRST TAB) */}
          {/* ========================================================================= */}
          {activeTab === 'kiddycodey' && (
            <motion.div
              key="kiddycodey"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel p-5 sm:p-10 border-white/90 shadow-2xl bg-white/85 max-w-5xl mx-auto"
            >
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
                      Preschoolers arrange physical wooden command tiles to route the bee safely through rocks, gather nectar flowers, and reach the hive!
                    </p>
                  </div>

                  {/* Command Controls */}
                  <div className="p-4 rounded-2xl bg-white/80 border border-white shadow-sm space-y-3">
                    <div className="text-xs font-bold text-brand-navy flex justify-between items-center">
                      <span>Place Directional Tiles:</span>
                      <span className="text-[10px] text-brand-navy/50">{commands.length}/8 tiles</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { dir: 'UP', label: 'UP', icon: ArrowUp },
                        { dir: 'DOWN', label: 'DOWN', icon: ArrowDown },
                        { dir: 'LEFT', label: 'LEFT', icon: ArrowLeft },
                        { dir: 'RIGHT', label: 'RIGHT', icon: ArrowRight },
                      ].map(({ dir, label, icon: Icon }) => (
                        <motion.button
                          key={dir}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => addCommand(dir)}
                          disabled={isRunning || commands.length >= 8}
                          className="p-3 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-xs flex flex-col items-center gap-1 active:scale-95 transition-all disabled:opacity-50"
                        >
                          <Icon className="w-4 h-4" />
                          <span>{label}</span>
                        </motion.button>
                      ))}
                    </div>

                    {/* Tile Sequence Ribbon */}
                    <div className="p-3 rounded-xl bg-brand-navy/5 border border-brand-navy/10 min-h-[50px] flex items-center gap-1.5 flex-wrap">
                      {commands.length === 0 ? (
                        <span className="text-[11px] text-brand-navy/40 italic">Click arrow tiles to queue movement steps...</span>
                      ) : (
                        commands.map((cmd, idx) => (
                          <motion.span 
                            key={idx}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="px-2 py-1 rounded-md bg-white border border-brand-navy/15 text-[10px] font-mono font-bold text-brand-navy shadow-xs"
                          >
                            {idx + 1}. {cmd}
                          </motion.span>
                        ))
                      )}
                    </div>

                    {/* Run / Reset Buttons */}
                    <div className="flex gap-2 pt-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={runCodeSequence}
                        disabled={isRunning || commands.length === 0}
                        className="btn-lime flex-1 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 disabled:opacity-50"
                      >
                        <Play className="w-3.5 h-3.5 fill-brand-navy text-brand-navy" />
                        <span>Execute Algorithm</span>
                      </motion.button>
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
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span>🎉 Goal Reached! Bee reached home safely!</span>
                    </motion.div>
                  )}
                  {gameStatus === 'blocked' && (
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="p-3 rounded-xl bg-rose-100 border border-rose-300 text-rose-900 text-xs font-bold flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 text-rose-700" />
                      <span>Oops! Bumped into a rock. Time to debug the algorithm!</span>
                    </motion.div>
                  )}
                  {gameStatus === 'incomplete' && (
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="p-3 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold flex items-center gap-2"
                    >
                      <HelpCircle className="w-4 h-4 text-amber-700" />
                      <span>Path finished, but haven't reached the hive yet. Add more tiles!</span>
                    </motion.div>
                  )}
                </div>

                {/* Right 4x4 Tactile Grid Board */}
                <div className="lg:col-span-7 flex flex-col items-center">
                  <div className="p-4 sm:p-6 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-brand-navy/10 shadow-lg">
                    <div className="grid grid-cols-4 gap-2 sm:gap-3 w-[270px] sm:w-[350px] h-[270px] sm:h-[350px]">
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
                              <span className="absolute top-1 left-1.5 text-[8px] font-mono text-brand-navy/30">
                                {rIdx},{cIdx}
                              </span>

                              {cell === 1 && !isRobot && <span>🪨</span>}
                              {cell === 2 && !isRobot && <span className="animate-pulse">🌸</span>}
                              {cell === 3 && !isRobot && <span>🍯</span>}

                              {isRobot && (
                                <motion.div 
                                  layoutId="beeMascot"
                                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-brand-lime flex items-center justify-center shadow-lg border-2 border-brand-navy"
                                >
                                  <span className="text-xl sm:text-2xl animate-bounce">🐝</span>
                                </motion.div>
                              )}
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>

                  <div className="w-full flex justify-between items-center mt-3 text-xs text-brand-navy/60 px-4">
                    <span>Legend: 🐝 Learner | 🪨 Obstacle | 🌸 Nectar | 🍯 Hive</span>
                    <span className="font-bold text-brand-navy">Nectar Gathered: {collectedFlowers}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: SENSORY SAND PHONICS (SECOND TAB) */}
          {/* ========================================================================= */}
          {activeTab === 'phonics' && (
            <motion.div
              key="phonics"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel p-5 sm:p-10 border-white/90 shadow-2xl bg-white/85 max-w-5xl mx-auto"
            >
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
                      Children build permanent muscular memory and phonological joy through scented beach sand, physical tactile objects, and rhythmic vocal play.
                    </p>
                  </div>

                  {/* Letter Selection Chips */}
                  <div className="flex gap-2">
                    {Object.keys(phonicsCards).map((letter) => (
                      <motion.button
                        key={letter}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.94 }}
                        onClick={() => setSelectedLetter(letter)}
                        className={`w-12 h-12 rounded-2xl font-black text-lg transition-all flex items-center justify-center border ${
                          selectedLetter === letter
                            ? 'btn-lime border-brand-navy shadow-md scale-105 ring-2 ring-brand-navy/20'
                            : 'bg-white/80 hover:bg-white text-brand-navy/70 border-brand-navy/10'
                        }`}
                      >
                        {letter}
                      </motion.button>
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
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]" />
                    
                    {/* Traced Letter Impression */}
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={selectedLetter}
                        initial={{ scale: 0.7, opacity: 0, filter: 'blur(4px)' }}
                        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                        exit={{ scale: 1.1, opacity: 0, filter: 'blur(4px)' }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10 flex flex-col items-center"
                      >
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
                      </motion.div>
                    </AnimatePresence>

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
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: WONDERLAB BOTANY CYCLE (NOW LAST AS REQUESTED + FULLY VISIBLE ON MOBILE) */}
          {/* ========================================================================= */}
          {activeTab === 'botany' && (
            <motion.div
              key="botany"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel p-5 sm:p-10 border-white/90 shadow-2xl bg-white/85 max-w-5xl mx-auto"
            >
              {/* Flex column on mobile (so flower appears first on phone) and grid on desktop */}
              <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-center">
                
                {/* 1. WonderLab Visual Stage (ORDER-FIRST ON MOBILE TO ENSURE 100% VISIBILITY) */}
                <div className="w-full lg:col-span-7 order-1 lg:order-2 flex flex-col items-center">
                  
                  {/* Visual Canvas Container with ample height on mobile (min-h-[360px]) and proper breathing space */}
                  <div className="w-full min-h-[360px] sm:min-h-[420px] rounded-3xl bg-gradient-to-b from-sky-100 via-sky-50 to-amber-100/40 p-4 sm:p-6 flex flex-col justify-between items-center relative border border-white shadow-inner overflow-hidden">
                    
                    {/* Top Canvas Bar: Live Conditions Badge */}
                    <div className="w-full flex items-center justify-between relative z-20">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-xs text-xs font-bold text-brand-navy">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Live Botany Station</span>
                      </div>

                      {/* Dynamic Animated Sun */}
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                        className="rounded-full flex items-center justify-center pointer-events-none transition-all duration-500"
                        style={{
                          width: `${46 + (sunlight * 0.3)}px`,
                          height: `${46 + (sunlight * 0.3)}px`,
                          backgroundColor: sunlight > 75 ? '#F59E0B' : '#FBBF24',
                          boxShadow: `0 0 ${sunlight * 0.7}px rgba(245, 158, 11, ${sunlight / 100})`,
                          opacity: Math.max(0.3, sunlight / 100)
                        }}
                      >
                        <Sun className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>

                    {/* Dynamic Raindrops if water > 40 */}
                    {water > 40 && (
                      <div className="absolute top-14 left-8 flex gap-4 pointer-events-none opacity-70 z-10">
                        <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
                          <Droplets className="w-5 h-5 text-blue-500" />
                        </motion.div>
                        <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 0.9, repeat: Infinity, delay: 0.3 }}>
                          <Droplets className="w-4 h-4 text-blue-500" />
                        </motion.div>
                        <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}>
                          <Droplets className="w-5 h-5 text-blue-500" />
                        </motion.div>
                      </div>
                    )}

                    {/* Plant Stage Graphic (Fully scaled and centered for mobile & desktop) */}
                    <div className="relative z-10 flex flex-col items-center my-auto py-2">
                      {plantStage === 'dormant' && (
                        <motion.div 
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          className="w-10 h-8 rounded-full bg-amber-800 shadow-md border-2 border-amber-950 flex items-center justify-center animate-pulse"
                        >
                          <span className="text-[9px] text-white font-mono font-bold">seed</span>
                        </motion.div>
                      )}

                      {plantStage === 'sprout' && (
                        <motion.div 
                          initial={{ scale: 0.5, y: 15 }}
                          animate={{ scale: 1, y: 0 }}
                          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-11 h-11 rounded-full bg-brand-lime flex items-center justify-center shadow-lg border border-brand-lime-dark text-xl">
                            🌱
                          </div>
                          <div className="w-2.5 h-12 bg-emerald-600 rounded-full"></div>
                          <div className="w-8 h-4 bg-amber-900 rounded-full -mt-1"></div>
                        </motion.div>
                      )}

                      {plantStage === 'budding' && (
                        <motion.div 
                          initial={{ scale: 0.5, y: 20 }}
                          animate={{ scale: 1, y: 0 }}
                          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                          className="flex flex-col items-center"
                        >
                          <div className="flex items-center gap-1">
                            <span className="text-3xl">🌿</span>
                            <span className="text-3xl">🌱</span>
                          </div>
                          <div className="w-3.5 h-24 bg-emerald-600 rounded-full shadow"></div>
                          <div className="w-12 h-5 bg-amber-900 rounded-full -mt-1"></div>
                        </motion.div>
                      )}

                      {plantStage === 'blooming' && (
                        <motion.div 
                          initial={{ scale: 0.3, y: 30 }}
                          animate={{ scale: 1, y: 0 }}
                          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                          className="flex flex-col items-center"
                        >
                          <div className="relative">
                            <span className="text-6xl filter drop-shadow-xl select-none animate-bounce" style={{ animationDuration: '3s' }}>
                              🌻
                            </span>
                            <span className="absolute -top-3 -right-3 text-2xl animate-spin" style={{ animationDuration: '4s' }}>✨</span>
                          </div>
                          <div className="w-4 h-28 bg-emerald-600 rounded-full shadow-md flex flex-col justify-around items-center">
                            <div className="w-11 h-3.5 bg-emerald-500 rounded-full transform -rotate-12"></div>
                            <div className="w-11 h-3.5 bg-emerald-500 rounded-full transform rotate-12"></div>
                          </div>
                          <div className="w-16 h-6 bg-amber-900 rounded-full -mt-2"></div>
                        </motion.div>
                      )}
                    </div>

                    {/* Bottom Cross-Section Soil Bed */}
                    <div className="w-full h-14 bg-gradient-to-r from-amber-900 via-amber-950 to-amber-900 rounded-2xl px-4 flex items-center justify-between text-white border-t-4 border-amber-800 shadow-md relative z-10">
                      <div className="text-[11px] font-mono text-amber-200 font-bold">
                        Cross-Section Root Bed
                      </div>
                      <div className="text-[11px] font-extrabold bg-white/20 px-2.5 py-1 rounded-full border border-white/20">
                        Growth: {growthScore}% ({plantStage.toUpperCase()})
                      </div>
                    </div>

                  </div>

                  <div className="w-full flex justify-between items-center mt-3 text-xs text-brand-navy/60 px-2">
                    <span>Traditional Method: Draw flower on page 14</span>
                    <span className="font-bold text-brand-turquoise-dark">Blooming Era: Touch & nurture live flora</span>
                  </div>
                </div>

                {/* 2. WonderLab Controls & Insights (ORDER-LAST ON MOBILE) */}
                <div className="w-full lg:col-span-5 order-2 lg:order-1 space-y-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-turquoise-dark bg-brand-turquoise/20 px-2 py-0.5 rounded">
                      World 5: Nature & Discovery
                    </span>
                    <h3 className="text-xl font-extrabold text-brand-navy mt-1">
                      Living Germination Station
                    </h3>
                    <p className="text-xs text-brand-navy/70 mt-1">
                      Drag the sliders below to balance sunlight and moisture — watch the flower respond immediately above!
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

                  {/* Dynamic Feedback Card */}
                  <div className="p-4 rounded-2xl bg-brand-lime/20 border border-brand-lime/40 text-brand-navy text-xs space-y-1">
                    <div className="font-extrabold flex items-center gap-1.5">
                      <Lightbulb className="w-4 h-4 text-brand-navy" />
                      Pedagogical Observation Insight:
                    </div>
                    <p className="text-brand-navy/85 font-medium leading-relaxed">
                      {plantStage === 'dormant' && "The seed requires warmth and moisture. The child touches dry soil and notes no root growth yet."}
                      {plantStage === 'sprout' && "The radicle cracks the pericarp! The child sketches the white embryo root in their experiential sketchlog."}
                      {plantStage === 'budding' && "Photosynthesis is balanced! Stems produce vibrant leaves. Children measure growth using colored unifix blocks."}
                      {plantStage === 'blooming' && "Perfect harmony! Bright yellow petals bloom, attracting observation bees. The child completes the 5-Step Experiential Cycle!"}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}
