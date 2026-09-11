const sections=[
['00','General / vehicle information','Identification, maintenance basics, capacities and vehicle familiarization','manuals/00-general/'],
['10','Engine removal & installation','Engine/transmission removal, mounts, lifting points and installation sequence','manuals/10-engine/'],
['13','Fuel injection','ALH injection system, pump, injectors, timing and testing','manuals/13-fuel-injection/'],
['15','Cylinder head & valvetrain','Cylinder head, valves, camshaft, lifters and related seals','manuals/15-cylinder-head/'],
['17','Lubrication','Oil system, oil pump, oil pressure and service procedures','manuals/17-lubrication/'],
['19','Cooling system','Water pump, thermostat, radiator and coolant procedures','manuals/19-cooling/'],
['20','Fuel system','Tank, fuel lines, filter and fuel delivery','manuals/20-fuel-system/'],
['21','Intake / charge air','Intake manifold, EGR, intercooler and charge-air plumbing','manuals/21-intake/'],
['23','Turbocharger','Turbocharger, boost control, N75 and vacuum routing','manuals/23-turbocharger/'],
['26','Exhaust / emissions','Exhaust system, catalyst and emissions components','manuals/26-exhaust/'],
['27','Glow plugs / starting','Glow plugs, relay/control and starting system','manuals/27-glow-plugs/'],
['28','Engine management','ECU, MAF, MAP, coolant-temp, crank/cam sensors and diagnostics','manuals/28-engine-management/'],
['30','Clutch','Clutch, flywheel, hydraulics and service procedures','manuals/30-clutch/'],
['34','02J manual transmission','02J five-speed transmission service and adjustment','manuals/34-02j-transmission/'],
['37','01M automatic transmission','01M four-speed automatic transmission service','manuals/37-01m-transmission/'],
['40','Suspension','Struts, springs, control arms and related chassis repairs','manuals/40-suspension/'],
['46','Steering / axles','Steering, CV joints, driveshafts and wheel bearings','manuals/46-steering-axles/'],
['47','Brakes / ABS','Hydraulic brakes, ABS and brake component procedures','manuals/47-brakes/'],
['50','Body','Doors, hood, locks, windows, trim and exterior mechanisms','manuals/50-body/'],
['80','HVAC','Heating, ventilation, air conditioning and climate control','manuals/80-hvac/'],
['90','Electrical','Relays, modules, battery, charging and electrical troubleshooting','manuals/90-electrical/'],
['97','Wiring diagrams','Current-flow diagrams, connectors, grounds and circuit references','manuals/97-wiring/']
];
const cards=document.querySelector('#cards');
function render(list){cards.innerHTML=list.map(([n,t,d,p])=>`<a class="card" href="${p}"><span class="tag">GROUP ${n}</span><h3>${t}</h3><p>${d}</p><div class="path">${p}</div></a>`).join('');document.querySelector('#resultCount').textContent=`${list.length} sections`;}
render(sections);
document.querySelector('#search').addEventListener('input',e=>{const q=e.target.value.trim().toLowerCase();render(!q?sections:sections.filter(x=>x.join(' ').toLowerCase().includes(q)));});
