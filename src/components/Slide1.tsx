import React from 'react';
import { Slide, SlideHeader } from './Slide';
import { Diamond } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Slide1() {
  const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  
  return (
    <Slide>
      <SlideHeader 
        title="ASRS is on track with watchouts; schedule protection now depends on synchronized delivery across seven sub-projects."
        subtitle="Vendor onboarding and execution planning are complete; management focus is now on cross-stream coordination across civil, technical infrastructure, supplier delivery, systems readiness, operating readiness, and cutover planning."
      />

      <div className="flex-1 flex flex-col p-4 gap-3 min-h-0 bg-white">
        
        {/* Gantt Section */}
        <div className="flex flex-col gap-1.5 shrink-0 relative">
          <div className="flex justify-between items-end mb-1">
            <h2 className="text-base font-bold text-[#2563EB] uppercase tracking-wider">Integrated Program Plan (Mar 2026 - Oct 2026)</h2>
            <div className="flex space-x-6 text-xs text-slate-600 font-medium">
              <span className="flex items-center"><div className="w-4 h-4 bg-[#2563EB] mr-2 rounded-sm"></div> Physical Execution</span>
              <span className="flex items-center"><div className="w-4 h-4 bg-[#2563EB]/20 mr-2 rounded-sm"></div> Planning/Readiness</span>
            </div>
          </div>

          <div className="flex flex-col relative">
            {/* Timeline Header */}
            <div className="flex gap-4 mb-2 items-end">
              <div className="w-[300px] shrink-0"></div>
              <div className="flex-1 flex border-b-2 border-slate-300">
                {months.map(m => (
                  <div key={m} className="flex-1 text-center text-xs font-bold text-slate-500 pb-1">{m}</div>
                ))}
              </div>
            </div>

            {/* Today Line */}
            <div className="absolute top-8 bottom-0 left-[300px] w-full pointer-events-none z-10 flex gap-4">
              <div className="w-[300px] shrink-0 hidden"></div>
              <div className="flex-1 relative">
                <div className="absolute top-0 bottom-0 left-[12.5%] border-r-2 border-red-500 border-dashed">
                  <div className="absolute -top-6 -right-6 text-xs text-red-500 font-bold bg-white px-2 py-0.5 rounded shadow-sm border border-red-100">30 Mar</div>
                </div>
              </div>
            </div>

            {/* Gantt Rows */}
            <div className="flex flex-col gap-1 relative z-0">
              <GanttRow label="Site readiness & enabling" start={0} end={2} type="solid" />
              <GanttRow label="Civil / warehouse shell" start={0} end={8} type="solid" />
              <GanttRow label="Utilities / MEP / technical infrastructure" start={0} end={7} type="solid" />
              <GanttRow label="ASRS supplier engineering → FAT → dispatch → install → SAT" start={0} end={8} type="solid" />
              <GanttRow label="SAP / systems / devices / labeling" start={0} end={7} type="solid" />
              <GanttRow label="Warehouse process / people readiness (planning)" start={0} end={2} type="light" />
              <GanttRow label="Migration / cutover planning" start={1} end={6} type="light" />
            </div>

            {/* Milestones Overlay */}
            <div className="flex gap-4 absolute inset-0 pointer-events-none z-20">
              <div className="w-[300px] shrink-0"></div>
              <div className="flex-1 relative">
                <Milestone left="12.5%" top="10%" label="Site ready for main civil works" align="center" />
                <Milestone left="25%" top="25%" label="Civil execution start" align="center" />
                <Milestone left="62.5%" top="55%" label="ASRS installation start" align="center" />
                <Milestone left="100%" top="55%" label="SAT / proving complete" align="right" />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Table */}
        <div className="flex flex-col flex-1 min-h-0">
          <h2 className="text-base font-bold text-[#2563EB] uppercase tracking-wider mb-1.5 shrink-0">Program status by stream</h2>
          <div className="flex-1 pr-2">
            <table className="w-full text-[13px] text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-300 text-slate-700">
                  <th className="pb-2 w-[20%] font-bold">Stream</th>
                  <th className="pb-2 w-[30%] font-bold">Current position</th>
                  <th className="pb-2 w-[25%] font-bold">Watchout</th>
                  <th className="pb-2 w-[25%] font-bold">Next gate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <TableRow stream="Site readiness" pos="Enabling actions underway" watch="approvals and area-release discipline" gate="site ready for main civil works" />
                <TableRow stream="Civil / shell" pos="Construction mobilization and early civil path activated" watch="tolerance, handover, and sequential trade coordination" gate="foundation / structure release" />
                <TableRow stream="Utilities / MEP" pos="Scope finalization and package closure required ahead of field execution" watch="power, fire, pneumatic, and commissioning convergence" gate="MEP package lock / commissioning readiness" />
                <TableRow stream="Addverb supplier" pos="Vendor onboarded; engineering, FAT, dispatch, and install path defined" watch="installation start depends on handover chain, not supplier activity alone" gate="engineering closure / FAT readiness" />
                <TableRow stream="SAP / systems" pos="Stack ownership and interface definition now critical" watch="interface accountability and test compression" gate="owner matrix / environment readiness" />
                <TableRow stream="Warehouse readiness" pos="Operating model, SOP, fallback, and training planning in progress" watch="must stay ahead of physical readiness" gate="SOP / fallback / training approval" />
                <TableRow stream="Cutover planning" pos="Migration logic and control framework in planning" watch="should not run ahead of actual installation readiness" gate="pilot and cutover control pack" />
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-[#2563EB] text-white shrink-0">
        <p className="text-[13px] font-medium">
          <span className="font-bold">Management message:</span> The project remains on track; the main watchouts are cross-stream handoff latency and late convergence across construction, utilities, and systems.
        </p>
      </div>
    </Slide>
  );
}

function GanttRow({ label, start, end, type }: { label: string, start: number, end: number, type: 'solid' | 'light' }) {
  const totalMonths = 8;
  const left = (start / totalMonths) * 100;
  const width = ((end - start) / totalMonths) * 100;
  
  return (
    <div className="flex gap-4 items-center h-5">
      <div className="w-[300px] shrink-0 text-[11px] font-semibold text-slate-800 leading-tight pr-2">{label}</div>
      <div className="flex-1 relative h-full flex items-center border-l border-slate-200">
        <div 
          className={cn("h-3.5 rounded-sm absolute", type === 'solid' ? "bg-[#2563EB]" : "bg-[#2563EB]/20")}
          style={{ left: `${left}%`, width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function Milestone({ left, top, label, align = 'center' }: { left: string, top: string, label: string, align?: 'left' | 'center' | 'right' }) {
  let transform = 'translateX(-50%)';
  if (align === 'left') transform = 'translateX(0)';
  if (align === 'right') transform = 'translateX(-100%)';

  return (
    <div className="absolute flex flex-col items-center z-10" style={{ left, top, transform }}>
      <Diamond className="w-3 h-3 text-[#C00000] fill-[#C00000]" />
      <span className="text-[9px] font-bold text-[#C00000] mt-0.5 whitespace-nowrap bg-white/95 px-1.5 py-0.5 rounded shadow-sm border border-red-100">
        {label}
      </span>
    </div>
  );
}

function TableRow({ stream, pos, watch, gate }: { stream: string, pos: string, watch: string, gate: string }) {
  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="py-1.5 font-bold text-slate-800 align-top pr-4">{stream}</td>
      <td className="py-1.5 text-slate-600 align-top pr-4 leading-snug">{pos}</td>
      <td className="py-1.5 text-[#C00000] font-medium align-top pr-4 leading-snug">{watch}</td>
      <td className="py-1.5 text-slate-700 font-semibold align-top leading-snug">{gate}</td>
    </tr>
  );
}
