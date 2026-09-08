export type Stage='Lead'|'Activated'|'Active'|'At Risk'|'Churned'|'Reactivated';
export type Customer={id:string;name:string;industry:string;plan:string;stage:Stage;health:number;mrr:number;users:number;lastActive:number;usage:number;nps:number|null;owner:string;signal:string;nextAction:string};
export const customers:Customer[]=[
{id:'NX-1001',name:'Aster Labs',industry:'Technology',plan:'Scale',stage:'Active',health:92,mrr:2400,users:84,lastActive:0,usage:88,nps:9,owner:'CSM Team A',signal:'Expansion-ready',nextAction:'Review expansion opportunity'},
{id:'NX-1002',name:'Bloom Commerce',industry:'Retail',plan:'Growth',stage:'At Risk',health:41,mrr:1250,users:31,lastActive:9,usage:38,nps:5,owner:'CSM Team B',signal:'Usage decline',nextAction:'Launch risk-recovery outreach'},
{id:'NX-1003',name:'Cedar Health',industry:'Healthcare',plan:'Scale',stage:'Activated',health:73,mrr:2100,users:46,lastActive:1,usage:61,nps:null,owner:'Onboarding',signal:'Activation incomplete',nextAction:'Complete key workflow setup'},
{id:'NX-1004',name:'Dune Finance',industry:'Fintech',plan:'Growth',stage:'Active',health:86,mrr:1450,users:39,lastActive:0,usage:81,nps:8,owner:'CSM Team A',signal:'Healthy',nextAction:'Maintain success cadence'},
{id:'NX-1005',name:'Ember Studio',industry:'Creative',plan:'Starter',stage:'Lead',health:58,mrr:0,users:3,lastActive:2,usage:24,nps:null,owner:'Sales',signal:'Trial engagement',nextAction:'Send activation guidance'},
{id:'NX-1006',name:'Fjord Systems',industry:'Technology',plan:'Scale',stage:'At Risk',health:34,mrr:2800,users:96,lastActive:14,usage:29,nps:4,owner:'CSM Team B',signal:'High-value risk',nextAction:'Priority retention intervention'},
{id:'NX-1007',name:'Grove People',industry:'HR Tech',plan:'Growth',stage:'Reactivated',health:69,mrr:1100,users:27,lastActive:1,usage:57,nps:7,owner:'Lifecycle',signal:'Returned after churn',nextAction:'Reactivation success check'},
{id:'NX-1008',name:'Halo Logistics',industry:'Logistics',plan:'Growth',stage:'Churned',health:18,mrr:0,users:0,lastActive:67,usage:0,nps:3,owner:'Lifecycle',signal:'Churned — low adoption',nextAction:'Enter 60-day win-back journey'},
{id:'NX-1009',name:'Iris Legal',industry:'Legal Tech',plan:'Starter',stage:'Activated',health:77,mrr:650,users:12,lastActive:0,usage:66,nps:null,owner:'Onboarding',signal:'Strong early adoption',nextAction:'Drive second key workflow'},
{id:'NX-1010',name:'Juniper Data',industry:'Analytics',plan:'Scale',stage:'Active',health:95,mrr:3200,users:118,lastActive:0,usage:94,nps:10,owner:'CSM Team A',signal:'Champion account',nextAction:'Request advocacy / case study'},
{id:'NX-1011',name:'Kite Works',industry:'Services',plan:'Starter',stage:'At Risk',health:47,mrr:590,users:9,lastActive:11,usage:35,nps:6,owner:'Lifecycle',signal:'Low engagement',nextAction:'Send value reminder + use case'},
{id:'NX-1012',name:'Luma Market',industry:'Retail',plan:'Growth',stage:'Active',health:82,mrr:1350,users:42,lastActive:1,usage:78,nps:8,owner:'CSM Team B',signal:'Healthy',nextAction:'Maintain success cadence'}];
export const journeys=[
{name:'Activation Accelerator',trigger:'Account created',condition:'Key workflow not completed within 3 days',action:'Education email + in-app checklist + CSM task',goal:'Reach first value faster',status:'Active'},
{name:'Usage Risk Recovery',trigger:'7-day usage decline ≥ 35%',condition:'Paid account + health score < 55',action:'Personalized outreach + use-case recommendation',goal:'Recover engagement before churn',status:'Active'},
{name:'High-Value Risk',trigger:'Health score < 45',condition:'MRR ≥ $2,000',action:'Priority CSM task + account review',goal:'Protect high-value revenue',status:'Active'},
{name:'Win-back 60',trigger:'60 days after churn',condition:'Churn reason eligible for reactivation',action:'Product update + tailored return offer',goal:'Reactivation',status:'Draft'},
{name:'Advocacy',trigger:'NPS ≥ 9 + health ≥ 85',condition:'Active for 90+ days',action:'Advocacy / case-study request',goal:'Turn healthy customers into advocates',status:'Active'}];
