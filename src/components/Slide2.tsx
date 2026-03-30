import React from 'react';
import { Slide, SlideHeader } from './Slide';
import { Diamond } from 'lucide-react';

export default function Slide2() {
  const months = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  
  return (
    <Slide>
      <SlideHeader 
        title="Construction is the governing path; probable delay sits in the approval–civil–PEB–MEP–installation handover chain."
        subtitle="The likely slip mechanism is sequential delay across approvals, foundations, PEB, MEP, and installation readiness; each step compresses the next because float is limited at the handover points."
      />

      <div className="flex-1 flex flex-col p-4 gap-3 min-h-0 bg-white">
        
        {/* Middle Section: Gantt + Table */}
        <div className="grid grid-cols-12 gap-4 flex-1 min-h-0">
          
          {/* Left Gantt */}
          <div className="col-span-7 flex flex-col relative">
            <h2 className="text-base font-bold text-[#94C9FD] uppercase tracking-wider mb-2 shrink-0">Construction control schedule</h2>
            
            <div className="flex flex-col relative">
              {/* Timeline Header */}
              <div className="flex gap-4 mb-2 items-end">
                <div className="w-[280px] shrink-0"></div>
                <div className="flex-1 flex border-b-2 border-slate-300">
                  {months.map(m => (
                    <div key={m} className="flex-1 text-center text-xs font-bold text-slate-500 pb-1">{m}</div>
                  ))}
                </div>
              </div>

              {/* Gantt Rows */}
              <div className="flex flex-col gap-1 relative z-0">
                <ConstructionRow 
                  label="Design finalization / approvals / PO" 
                  start={0} end={2} 
                  milestone="start-of-work approval" 
                />
                <ConstructionRow 
                  label="Civil substructure and concrete path" 
                  start={1} end={6} 
                  milestone="foundation / plinth completion" 
                />
                <ConstructionRow 
                  label="PEB finalization, fabrication, delivery, and erection" 
                  start={0} end={7} 
                  milestone="structural / roofing completion" 
                />
                <ConstructionRow 
                  label="Floor, shell completion, and finishing envelope" 
                  start={4} end={9} 
                  milestone="installable building condition" 
                />
                <ConstructionRow 
                  label="MEP finalization and commissioning" 
                  start={1} end={7} 
                  milestone="MEP commissioning complete" 
                />
                
                {/* Final Marker */}
                <div className="flex gap-4 items-center h-8 mt-1">
                  <div className="w-[280px] shrink-0 text-[12px] font-bold text-[#C00000] leading-tight">ASRS installation start</div>
                  <div className="flex-1 relative h-full flex items-center border-l border-slate-200">
                    <div className="absolute" style={{ left: '72.2%', transform: 'translateX(-50%)' }}>
                      <div className="flex flex-col items-center">
                        <Diamond className="w-4 h-4 text-[#C00000] fill-[#C00000]" />
                        <span className="text-[10px] font-bold text-[#C00000] mt-1 whitespace-nowrap bg-white px-1.5 py-0.5 rounded border border-red-100 shadow-sm">18 Aug 2026</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Milestones */}
              <div className="flex gap-4 absolute inset-0 pointer-events-none z-20">
                <div className="w-[280px] shrink-0"></div>
                <div className="flex-1 relative">
                  <Milestone left="22.2%" top="10%" label="Govt approval / start-of-work clearance" align="center" />
                  <Milestone left="11.1%" top="30%" label="Civil start" align="center" />
                  <Milestone left="77.7%" top="50%" label="PEB delivery complete" align="center" />
                  <Milestone left="77.7%" top="70%" label="MEP commissioning complete" align="center" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Table */}
          <div className="col-span-5 flex flex-col overflow-hidden">
            <h2 className="text-base font-bold text-[#C00000] uppercase tracking-wider mb-2 shrink-0">Present risks and probable delay</h2>
            
            <div className="flex-1 pr-2">
              <table className="w-full text-[13px] text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-300 text-slate-700">
                    <th className="pb-2 w-[20%] font-bold">Risk</th>
                    <th className="pb-2 w-[30%] font-bold">Probable delay mechanism</th>
                    <th className="pb-2 w-[20%] font-bold text-[#C00000]">Likely impact if unmanaged</th>
                    <th className="pb-2 w-[30%] font-bold">Immediate control</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <RiskRow 
                    risk="Approval closure lag" 
                    mech="statutory and construction-start approvals move sequentially" 
                    impact="1–2 weeks slip to civil start" 
                    control="daily closure tracker with Holostik India and named internal approver" 
                  />
                  <RiskRow 
                    risk="Civil precision / handover lag" 
                    mech="excavation, footing, plinth, trimix, or tolerance acceptance slips" 
                    impact="2–4 weeks slip to installable area release" 
                    control="formal handover checklist and no-release without precision sign-off" 
                  />
                  <RiskRow 
                    risk="PEB fabrication / dispatch / erection lag" 
                    mech="fabrication or dispatch drift compresses erection and roofing window" 
                    impact="2–3 weeks slip to shell readiness" 
                    control="weekly factory-to-site review and committed dispatch tracker" 
                  />
                  <RiskRow 
                    risk="MEP package / commissioning squeeze" 
                    mech="delayed PO, material delivery, installation, or commissioning" 
                    impact="2–4 weeks slip to installation readiness" 
                    control="separate red-path review for electrical, fire, and pneumatic" 
                  />
                  <RiskRow 
                    risk="Interface compression at install start" 
                    mech="shell, MEP, access, laydown, and supplier readiness converge too tightly" 
                    impact="1–3 weeks slip to ASRS install start" 
                    control="integrated readiness review before release to Addverb" 
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Vendors */}
        <div className="flex flex-col gap-1 shrink-0 mt-4">
          <h2 className="text-sm font-bold text-[#94C9FD] uppercase tracking-wider">Primary execution parties</h2>
          <div className="grid grid-cols-3 gap-6">
            <VendorBox name="ASRS vendor — Addverb" desc="Engineering, FAT, dispatch, installation, SAT, support readiness" />
            <VendorBox name="Civil construction vendor — Fateh Buildcon" desc="Civil works, structure, shell, floor readiness, execution sequencing" />
            <VendorBox name="Liaisoning vendor — Holostik India" desc="Approvals, statutory closures, permit path, authority coordination" />
          </div>
        </div>
      </div>
    </Slide>
  );
}

function ConstructionRow({ label, start, end, milestone }: { label: string, start: number, end: number, milestone: string }) {
  const totalMonths = 9; // Feb to Oct
  const left = (start / totalMonths) * 100;
  const width = ((end - start) / totalMonths) * 100;
  
  return (
    <div className="flex gap-4 items-center h-10">
      <div className="w-[280px] shrink-0 text-[13px] font-bold text-slate-800 leading-tight">{label}</div>
      <div className="flex-1 relative h-full flex items-center border-l border-slate-200">
        <div 
          className="h-5 bg-[#94C9FD] rounded-sm absolute flex items-center shadow-sm"
          style={{ left: `${left}%`, width: `${width}%` }}
        >
          <span className="absolute top-full mt-1 right-0 text-[11px] font-medium text-slate-500 italic whitespace-nowrap">
            {milestone}
          </span>
        </div>
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

function RiskRow({ risk, mech, impact, control }: { risk: string, mech: string, impact: string, control: string }) {
  return (
    <tr className="hover:bg-red-50/40 transition-colors">
      <td className="py-2.5 font-bold text-slate-800 pr-4 align-top">{risk}</td>
      <td className="py-2.5 text-slate-600 pr-4 align-top leading-snug">{mech}</td>
      <td className="py-2.5 font-bold text-[#C00000] pr-4 align-top leading-snug">{impact}</td>
      <td className="py-2.5 text-slate-700 font-semibold align-top leading-snug">{control}</td>
    </tr>
  );
}

function VendorBox({ name, desc }: { name: string, desc: string }) {
  return (
    <div className="bg-white border border-slate-200 rounded-md p-4 shadow-sm">
      <div className="text-[13px] font-bold text-slate-800">{name}</div>
      <div className="text-[12px] text-slate-600 leading-snug mt-1">{desc}</div>
    </div>
  );
}
