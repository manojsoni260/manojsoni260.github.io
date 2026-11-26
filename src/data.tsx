import type { ElementType } from 'react'
import { SiPython, SiDjango, SiAngular, SiReact, SiTypescript, SiJavascript, SiFlutter, SiDart, SiPostgresql, SiMysql, SiRedis, SiElasticsearch, SiSqlite, SiWebrtc, SiCelery, SiNginx, SiGunicorn, SiLinux, SiGit, SiPostman, SiSwagger, SiFigma, SiJira, SiTwilio, SiRazorpay, SiPaytm, SiPhonepe, SiJsonwebtokens } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { Radio, Cable, ShieldCheck, KeyRound, CreditCard, Sparkles, Server } from 'lucide-react'

// ---- Edit these. Empty string hides the link. ----
export const LINKEDIN_URL = ''
export const GITHUB_URL = ''
export const EMAIL = 'manojsoni0495@gmail.com'
export const RESUME_PATH = `${import.meta.env.BASE_URL}Manoj_Soni_Resume.pdf`
export const manojimg1 = `${import.meta.env.BASE_URL}manoj-p-1.png`
export const manojimg2 = `${import.meta.env.BASE_URL}manoj-p-2.png`

export const NAV = ['Home', 'About', 'Skills', 'Portfolio', 'Experience', 'Education', 'Contact']

export type Skill = { name: string; icon: ElementType }
export const SKILLS: Record<string, Skill[]> = {
  Backend: [{ name: 'Python', icon: SiPython }, { name: 'Django', icon: SiDjango }, { name: 'Django REST Framework', icon: Server }, { name: 'Celery', icon: SiCelery }],
  Frontend: [{ name: 'Angular', icon: SiAngular }, { name: 'React', icon: SiReact }, { name: 'TypeScript', icon: SiTypescript }, { name: 'JavaScript', icon: SiJavascript }],
  Mobile: [{ name: 'Flutter', icon: SiFlutter }, { name: 'Dart', icon: SiDart }],
  Databases: [{ name: 'PostgreSQL', icon: SiPostgresql }, { name: 'MySQL', icon: SiMysql }, { name: 'Redis', icon: SiRedis }, { name: 'Elasticsearch', icon: SiElasticsearch }, { name: 'SQLite', icon: SiSqlite }],
  'Real-Time': [{ name: 'WebSockets', icon: Cable }, { name: 'WebRTC', icon: SiWebrtc }, { name: 'RTMP', icon: Radio }],
  Security: [{ name: 'JWT', icon: SiJsonwebtokens }, { name: 'OAuth', icon: KeyRound }, { name: 'RBAC', icon: ShieldCheck }],
  Payments: [{ name: 'Razorpay', icon: SiRazorpay }, { name: 'Paytm', icon: SiPaytm }, { name: 'PhonePe', icon: SiPhonepe }, { name: 'Cashfree', icon: CreditCard }, { name: 'Airpay', icon: CreditCard }],
  'Cloud & Infra': [{ name: 'AWS', icon: FaAws }, { name: 'Nginx', icon: SiNginx }, { name: 'Gunicorn', icon: SiGunicorn }, { name: 'Linux', icon: SiLinux }, { name: 'Twilio', icon: SiTwilio }],
  'Tools & AI': [{ name: 'Git', icon: SiGit }, { name: 'Postman', icon: SiPostman }, { name: 'Swagger/OpenAPI', icon: SiSwagger }, { name: 'Figma', icon: SiFigma }, { name: 'Jira', icon: SiJira }, { name: 'Claude Code', icon: Sparkles }],
}

export const CATEGORIES = ['All', 'Real-Time', 'Education & Careers', 'Business'] as const
export type Category = Exclude<(typeof CATEGORIES)[number], 'All'>
export type Project = { name: string; url: string; category: Category; description: string; stack: string[] }
export const PROJECTS: Project[] = [
  { name: 'Clinic Management CRM', url: 'https://okhealth.in', category: 'Business', description: 'A CRM for managing clinic operations, with a React interface backed by a REST API and Twilio-based communication.', stack: ['Django REST Framework', 'React', 'Vite', 'MUI', 'MySQL', 'Twilio'] },
  { name: 'Security Troops', url: 'https://securitytroops.com', category: 'Real-Time', description: 'A web platform with real-time messaging and audio/video, built on an Angular front end.', stack: ['Angular', 'RxJS', 'Bootstrap', 'REST APIs', 'WebSockets', 'WebRTC'] },
  { name: 'Cricketers Pitch', url: 'https://cricketerspitch.com', category: 'Real-Time', description: 'A cricket platform with live streaming and real-time features.', stack: ['Python', 'Django', 'jQuery', 'WebSockets', 'RTMP', 'WebRTC'] },
  { name: 'Maharashtra Career Portal', url: 'https://maharashtracareerportal.com', category: 'Education & Careers', description: 'A career portal with search-driven discovery and background task processing.', stack: ['Django', 'Celery', 'Elasticsearch', 'MySQL', 'AJAX'] },
  { name: 'Emango Education', url: 'https://emango.global', category: 'Education & Careers', description: 'An education platform deployed on AWS, using Redis caching and Celery for background work.', stack: ['Django', 'PostgreSQL', 'AWS', 'Redis', 'Celery'] },
  { name: 'School Management System', url: 'https://psplogin.com', category: 'Education & Careers', description: 'A school administration system with AJAX-driven screens and Excel import/export for bulk data.', stack: ['Python', 'Django', 'jQuery', 'AJAX', 'Excel Import/Export'] },
  { name: 'Publication Web Platform', url: 'https://mastermindpublication.com', category: 'Business', description: 'A publication website with online payments through the Cashfree gateway.', stack: ['Python', 'Django', 'jQuery', 'Cashfree'] },
  { name: 'TimeStint', url: 'https://timestint.com', category: 'Real-Time', description: 'An Angular web application with live updates over WebSockets.', stack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'WebSockets'] },
]
export const EXPERIENCE_POINTS = ['Multi-tenant backend systems', 'Secure authentication and authorization', 'Redis and Celery for caching and background tasks', 'REST API development', 'Real-time messaging', 'WebRTC audio/video', 'Angular, React and Flutter development', 'Payment gateway integrations', 'AWS and deployment']
export const PROFILE_IMAGE = 'manoj-p-1.png' // e.g. '/profile.png' (put the file in /public). Empty shows an illustration.
