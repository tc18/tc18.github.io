import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Download,
  Terminal,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Cpu,
  Code2,
  Database,
  Globe,
  Shield,
  Activity,
  Command,
  FlaskConical,
  Cloud,
  Network,
  GitBranch,
  Server,
  ShieldCheck,
  Workflow,
  Bot,
  Timer,
  Layers,
  Users,
} from "lucide-react";
import {
  FaJava,
  FaPython,
  FaReact,
  FaAngular,
  FaAws,
  FaDocker,
  FaGithub,
  FaNodeJs,
  FaDrawPolygon,
  FaGitAlt,
  FaJira,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaLinux,
  FaBootstrap,
  FaCode,
  FaTools
} from "react-icons/fa";
import {
  SiSpringboot,
  SiFlask,
  SiTerraform,
  SiPostman,
  SiIntellijidea,
  SiVsco,
  SiGnubash,
  SiGooglecloud,
  SiMysql,
  SiAmazondynamodb,
  SiJenkins,
  SiMui,
  SiEclipseide,
  SiOracle,
  SiKubernetes,
  SiGithubactions,
  SiLinux,
  SiAwslambda,
  SiAmazonapigateway,
  SiTypescript,
  SiTensorflow,
  SiSelenium,
  SiApachehadoop,
  SiSocketdotio,
  SiHibernate,
  SiOllama,
  SiLangchain,
  // SiLanggraph, 
  SiFastapi
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { PiStudentFill } from "react-icons/pi";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Helper Function to handle Bold text in descriptions
  const formatText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong
          key={i}
          className={`${
            darkMode ? "text-blue-400" : "text-blue-700"
          } font-bold`}
        >
          {part.slice(2, -2)}
        </strong>
      ) : (
        part
      )
    );
  };

  const HeroVisuals1 = () => (
    <div className="hidden lg:flex flex-col gap-6 w-full max-w-md animate-in fade-in slide-in-from-right duration-1000">
      <div
        className={`${
          darkMode
            ? "bg-black/50 border-white/10"
            : "bg-slate-100 border-slate-200"
        } border rounded-xl overflow-hidden shadow-2xl backdrop-blur-md`}
      >
        <div className="flex gap-1.5 p-3 border-b border-inherit bg-inherit">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />

          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />

          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />

          <span className="text-[10px] ml-2 opacity-40 uppercase tracking-widest font-black">
            bash — sys_status
          </span>
        </div>

        <div className="p-4 font-mono text-[11px] leading-relaxed">
          <div className="flex gap-2">
            <span className="text-green-500">➜</span>

            <span className="text-blue-400">~/chintan</span>

            <span className="opacity-50 text-white">git status</span>
          </div>

          <div className="mt-1 text-slate-400">
            On branch <span className="text-orange-400 underline">master</span>
          </div>

          <div className="mt-1 text-slate-400">Your branch is up to date.</div>

          <div className="mt-3 flex gap-2">
            <span className="text-green-500">➜</span>

            <span className="text-blue-400">~/chintan</span>

            <span className="opacity-50 text-white">tail -f profile.log</span>
          </div>

          <div className="mt-1 space-y-0.5">
            <div className="text-blue-500/70">
              [SYS] Initializing Cloud_Architect.v3...
            </div>

            <div className="text-blue-500/70">
              [SYS] Location: Overland Park, KS
            </div>

            <div className="text-blue-500/70">
              [SYS] Priority: High_Availability
            </div>

            <div className="flex gap-2 text-white italic animate-pulse">
              <span>_</span>
            </div>
          </div>
        </div>
      </div>

      {/* OPTION 4: TECH ORBIT / CLOUD METRICS */}

      {/* <div className="grid grid-cols-2 gap-4">
        <div
          className={`${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-white border-slate-200 shadow-sm"
          } border p-6 rounded-3xl group hover:border-blue-500/50 transition-all`}
        >
          <div className="flex justify-between items-start mb-4">
            <FaAws className="text-3xl text-orange-400" />

            <Activity size={16} className="text-blue-500 animate-pulse" />
          </div>

          <div className="text-2xl font-black text-white">500+</div>

          <div className="text-[9px] uppercase tracking-tighter opacity-50">
            AWS ACCOUNTS
          </div>
        </div>

        <div
          className={`${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-white border-slate-200 shadow-sm"
          } border p-6 rounded-3xl group hover:border-red-500/50 transition-all`}
        >
          <div className="flex justify-between items-start mb-4">
            <SiOracle className="text-3xl text-red-600" />

            <Shield size={16} className="text-red-500" />
          </div>

          <div className="text-2xl font-black text-white">OCI</div>

          <div className="text-[9px] uppercase tracking-tighter opacity-50">
            Global_Networking
          </div>
        </div>
      </div> */}
    </div>
  );

  const HeroVisuals = () => {
    const [text, setText] = useState("");
    const [isDone, setIsDone] = useState(false);
    const fullText = "tail -f profile.log";

    useEffect(() => {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100); // Speed of typing
        return () => clearTimeout(timeout);
      } else {
        // Small delay after typing finishes before showing the logs
        const timeout = setTimeout(() => setIsDone(true), 500);
        return () => clearTimeout(timeout);
      }
    }, [text]);

    return (
      <div className="hidden lg:flex flex-col gap-6 w-full max-w-md animate-in fade-in slide-in-from-right duration-1000">
        {/* OPTION 1: THE LIVE TERMINAL */}
        <div
          className={`${
            darkMode
              ? "bg-black/50 border-white/10"
              : "bg-slate-100 border-slate-200"
          } border rounded-xl overflow-hidden shadow-2xl backdrop-blur-md min-h-[260px]`}
        >
          {/* Terminal Header */}
          <div className="flex gap-1.5 p-3 border-b border-inherit bg-inherit">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            <span className="text-[10px] ml-2 opacity-40 uppercase tracking-widest font-black">
              bash — sys_status
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-4 font-mono text-[11px] leading-relaxed">
            {/* Static Git Status Section */}
            <div className="flex gap-2">
              <span className="text-green-500">➜</span>
              <span className="text-blue-400">~/chintan</span>
              <span className="opacity-50 text-white">git status</span>
            </div>
            <div className="mt-1 text-slate-400">
              On branch{" "}
              <span className="text-orange-400 underline">master</span>
            </div>
            <div className="mt-1 text-slate-400">
              Your branch is up to date.
            </div>

            {/* Live Typing Section */}
            <div className="mt-3 flex gap-2">
              <span className="text-green-500">➜</span>
              <span className="text-blue-400">~/chintan</span>
              <span className="text-white">
                {text}
                {!isDone && <span className="animate-pulse">|</span>}
              </span>
            </div>

            {/* Log Output Section (Appears after typing is done) */}
            <div
              className={`mt-2 space-y-0.5 transition-opacity duration-500 ${
                isDone ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-blue-500/70">
                [SYS] Initializing Cloud_Architect.v3...
              </div>
              <div className="text-blue-500/70">
                [SYS] Location: Overland Park, KS
              </div>
              <div className="text-blue-500/70">
                [SYS] Priority: High_Availability
              </div>
              <div className="text-blue-500/70">
                [SYS] Status: <span className="text-green-500">Online</span>
              </div>
              <div className="flex gap-2 text-white italic animate-pulse mt-1">
                <span>_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CloudNetworkDiagram = () => (
    <div className="hidden lg:flex relative w-full max-w-lg h-[400px] items-center justify-center animate-in fade-in zoom-in duration-1000">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full" />

      {/* Central Hub: VCN / Core Network */}
      <div className="relative z-10 flex flex-col items-center group">
        <div
          className={`p-6 rounded-2xl border-2 ${
            darkMode
              ? "border-blue-500/50 bg-black"
              : "border-blue-600 bg-white"
          } shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all group-hover:scale-110`}
        >
          <Globe className="text-blue-500 w-10 h-10" />
        </div>
        <span className="mt-3 text-[10px] font-black tracking-widest uppercase text-blue-500">
          OCI_VCN_ROOT
        </span>

        {/* Animated Data Packets (Pings) */}
        <div className="absolute top-1/2 left-full w-32 h-px bg-gradient-to-r from-blue-500 to-transparent">
          <div className="w-1 h-1 bg-white rounded-full animate-ping-right shadow-[0_0_10px_#fff]" />
        </div>
        <div className="absolute top-1/2 right-full w-32 h-px bg-gradient-to-l from-blue-500 to-transparent">
          <div className="w-1 h-1 bg-white rounded-full animate-ping-left shadow-[0_0_10px_#fff]" />
        </div>
      </div>

      {/* Satellite Node 1: Security/IAM */}
      <div className="absolute top-10 right-10 flex flex-col items-center group">
        <div
          className={`p-4 rounded-xl border ${borderColor} ${cardBg} backdrop-blur-md group-hover:border-red-500/50 transition-all`}
        >
          <Shield className="text-red-500 w-6 h-6" />
        </div>
        <span className="mt-2 text-[8px] font-bold opacity-40 uppercase tracking-tighter">
          IAM_Guardrails
        </span>
      </div>

      {/* Satellite Node 2: Database Subnet */}
      <div className="absolute bottom-10 right-10 flex flex-col items-center group">
        <div
          className={`p-4 rounded-xl border ${borderColor} ${cardBg} backdrop-blur-md group-hover:border-orange-500/50 transition-all`}
        >
          <Database className="text-orange-500 w-6 h-6" />
        </div>
        <span className="mt-2 text-[8px] font-bold opacity-40 uppercase tracking-tighter">
          DB_Subnet_AD1
        </span>
      </div>

      {/* Satellite Node 3: Compute/CI-CD */}
      <div className="absolute top-10 left-10 flex flex-col items-center group">
        <div
          className={`p-4 rounded-xl border ${borderColor} ${cardBg} backdrop-blur-md group-hover:border-purple-500/50 transition-all`}
        >
          <Cpu className="text-purple-500 w-6 h-6" />
        </div>
        <span className="mt-2 text-[8px] font-bold opacity-40 uppercase tracking-tighter">
          Autoscale_Pool
        </span>
      </div>

      {/* Satellite Node 4: API Gateway */}
      <div className="absolute bottom-10 left-10 flex flex-col items-center group">
        <div
          className={`p-4 rounded-xl border ${borderColor} ${cardBg} backdrop-blur-md group-hover:border-green-500/50 transition-all`}
        >
          <Activity className="text-green-500 w-6 h-6" />
        </div>
        <span className="mt-2 text-[8px] font-bold opacity-40 uppercase tracking-tighter">
          Service_Gateway
        </span>
      </div>

      {/* Connecting Lines (SVG) */}
      <svg
        className="absolute inset-0 w-full h-full -z-0 pointer-events-none opacity-20"
        viewBox="0 0 400 400"
      >
        <line
          x1="200"
          y1="200"
          x2="350"
          y2="70"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="200"
          y1="200"
          x2="350"
          y2="330"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="200"
          y1="200"
          x2="50"
          y2="70"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="200"
          y1="200"
          x2="50"
          y2="330"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );

  const textColor = darkMode ? "text-white" : "text-slate-900";
  const subTextColor = darkMode ? "text-slate-400" : "text-slate-600";
  const cardBg = darkMode ? "bg-white/[0.03]" : "bg-white shadow-sm";
  const borderColor = darkMode ? "border-white/10" : "border-slate-200";
  const sectionLabel = darkMode ? "text-slate-500" : "text-blue-600 font-black";

  const experiences = [
    {
      company: "ORACLE",
      techIcons: [
        // Cloud & Networking
        <SiOracle
          className="text-red-600"
          title="Oracle Cloud Infrastructure"
        />,
        <Cloud className="text-sky-500" title="Cloud Architecture" />,
        <Network className="text-indigo-500" title="Cloud Networking" />,
        <ShieldCheck className="text-green-500" title="Cloud Security" />,

        // Infrastructure as Code & CI/CD
        <SiTerraform className="text-purple-500" title="Terraform / CDKTF" />,
        <Workflow className="text-orange-500" title="CI/CD Pipelines" />,
        <GitBranch className="text-pink-500" title="Git & PR Automation" />,

        // Containers & Serverless
        <FaDocker className="text-blue-500" title="Docker" />,
        <Server
          className="text-slate-600"
          title="OCI Functions / Serverless"
        />,
        <SiKubernetes
          className="text-blue-600"
          title="Container Orchestration"
        />,

        // Automation & Scripting
        <FaPython className="text-blue-400" title="Python Automation" />,
        <Bot className="text-teal-500" title="Automation Bots" />,
        <Timer className="text-yellow-500" title="Schedulers & Cron Jobs" />,
        <VscJson className="text-gray-100" title="JSON Validation" />,

        // Frontend & Validation Tools
        <FaHtml5 className="text-orange-600" title="HTML5" />,
        <FaCss3Alt className="text-blue-500" title="CSS3" />,
        <FaJsSquare className="text-yellow-400" title="JavaScript" />,

        // Tooling & Collaboration
        <FaJira className="text-blue-600" title="Jira Automation" />,
        <FaDrawPolygon
          className="text-orange-500"
          title="Architecture Diagrams"
        />,
        <SiLinux className="text-black" title="Linux" />,
      ],
      roles: [
        {
          title: "Senior Network Engineer (IC3)",
          date: "Oct 2024 - Present",
          color: "text-red-500",
        },
        {
          title: "Software Developer 2 (IC2)",
          date: "Mar 2023 - Sep 2024",
          color: "text-orange-400",
        },
        {
          title: "Associate Senior Software Developer (IC1)",
          date: "Oct 2022 - Feb 2023",
          color: "text-blue-400",
        },
      ],
      description: [
        "Architected and managed **Cloud Network resources** including VCNs, Subnets, DRGs, and Service Gateways for OHAI engineering teams.",
        "Engineered **automated network validation logic** to ensure compliance with healthcare data residency and security standards.",
        "Built robust **CI/CD pipelines** using **Docker and Python** for OCI Functions, reducing deployment overhead by 40%.",
        "Developed custom **Jira-integrated automation bots** to validate JSON network templates before production deployment.",
        "Optimized resource life-cycle management using **CDKTF** and Python scripting.",
        "Collaborated with global security teams to implement **'Shift-Left' network security** protocols across OCI tenancies.",
        "Provided technical mentorship to **IC1/IC2 developers**, driving best practices in **Infrastructure as Code (IaC)**.",
        "Streamlined the **incident response process** for network connectivity issues within Oracle Health Global Business Unit.",
        "Authored comprehensive **technical documentation and SOPs** for cross-functional cloud migration projects.",
        "Implemented **automated monitoring** for VCN peering and FastConnect circuits to ensure high availability.",
        "Led the migration of **legacy networking components** to OCI native services, improving performance by 25%.",
        "Designed **high-availability architectures** for disaster recovery across multiple OCI regions.",
      ],
    },
    {
      company: "CERNER CORPORATION",
      techIcons: [
        // AWS & Cloud Scale
        <FaAws className="text-orange-400" title="AWS" />,
        <Cloud className="text-sky-500" title="Cloud Engineering" />,
        <Users className="text-indigo-500" title="Multi-Account Management" />,

        // Infrastructure as Code & Automation
        <Layers className="text-purple-500" title="Infrastructure as Code" />,
        <Workflow className="text-orange-500" title="Automation Pipelines" />,

        // CI/CD & GitOps
        <SiGithubactions className="text-gray-800" title="GitHub Actions" />,
        <GitBranch
          className="text-pink-500"
          title="PR Workflows & Auto Merge"
        />,
        <FaGitAlt className="text-red-500" title="Git" />,

        // Backend & Serverless
        <SiAwslambda className="text-orange-500" title="AWS Lambda" />,
        <Server className="text-slate-600" title="Serverless Architecture" />,
        <SiAmazonapigateway className="text-blue-600" title="API Gateway" />,
        <SiAmazondynamodb className="text-blue-600" title="DynamoDB" />,
        <FaPython className="text-blue-400" title="Python" />,

        // Application & UI
        <FaNodeJs className="text-green-600" title="Node.js" />,
        <FaReact className="text-cyan-400" title="React" />,
        <SiTypescript className="text-blue-500" title="TypeScript" />,
        <SiSpringboot className="text-green-500" title="Spring Boot" />,

        // Security & Governance
        <ShieldCheck
          className="text-green-500"
          title="Security & Compliance"
        />,
      ],
      roles: [
        {
          title: "Associate Senior Software Engineer",
          date: "Jun 2022 - Sep 2022",
          color: "text-orange-400",
        },
        {
          title: "Software Engineer",
          date: "Apr 2019 - May 2022",
          color: "text-slate-400",
        },
      ],
      description: [
        "Orchestrated the management of over **500+ AWS accounts** using **Automated Account Vending** systems.",
        "Architected dynamic **AWS CodeBuild pipelines** integrated with GitHub for automated testing and deployment cycles.",
        "Developed **serverless backend architectures** using **AWS Lambda, API Gateway, and DynamoDB**.",
        "Implemented secure **IAM policies** and cross-account access controls to maintain strict data isolation.",
        "Optimized **cloud spend by 25%** through automated resource tagging and lifecycle policies.",
        "Facilitated the migration of legacy monolithic services to **microservices using Amazon ECS and EKS**.",
        "Developed internal **Python-based CLI tools** to automate repetitive DevOps tasks for 100+ developers.",
        "Maintained **99.99% availability** for core infrastructure services through proactive monitoring.",
        "Engaged in **Agile/Scrum ceremonies**, contributing to sprint planning and technical design reviews.",
        "Spearheaded the **'Shift-Left' security initiative**, integrating static analysis into build pipelines.",
        "Redesigned the **internal developer portal** for cloud resource requests, reducing ticket volume by 30%.",
        "Automated the **decommissioning of idle resources**, saving over $150k in annual infrastructure costs.",
      ],
    },
  ];

  const skillGroups = [
    {
      name: "Programming & Web Development",
      skills: [
        { n: "Java", icon: <FaJava className="text-orange-500" /> },
        { n: "Python", icon: <FaPython className="text-blue-400" /> },
        { n: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { n: "Angular", icon: <FaAngular className="text-red-500" /> },
        { n: "MUI", icon: <SiMui className="text-blue-600" /> },
      ],
    },
    {
      name: "Frameworks & Microservices",
      skills: [
        { n: "AWS Serverless", icon: <FaAws className="text-orange-400" /> },
        {
          n: "Spring Boot / MVC",
          icon: <SiSpringboot className="text-green-500" />,
        },
        { n: "Flask", icon: <SiFlask className="text-slate-400" /> },
        { n: "J2EE", icon: <FaJava className="text-orange-500" /> },
        { n: "MEAN Stack", icon: <FaAngular className="text-red-500" /> },
      ],
    },
    {
      name: "Infrastructure as Code",
      skills: [
        { n: "AWS CDK", icon: <FaAws className="text-orange-400" /> },
        { n: "CDKTF", icon: <SiTerraform className="text-purple-500" /> },
        { n: "CloudFormation", icon: <FaAws className="text-orange-400" /> },
        { n: "Terraform", icon: <SiTerraform className="text-purple-500" /> },
      ],
    },
    {
      name: "Scripting",
      skills: [
        { n: "Bash", icon: <SiGnubash className="text-green-400" /> },
        { n: "Shell", icon: <FaGitAlt className="text-green-400" /> },
      ],
    },
    {
      name: "Database",
      skills: [
        { n: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { n: "AWS RDS", icon: <FaAws className="text-orange-400" /> },
        { n: "NoSQL", icon: <SiAmazondynamodb className="text-blue-600" /> },
        { n: "DynamoDB", icon: <SiAmazondynamodb className="text-blue-600" /> },
      ],
    },
    {
      name: "Cloud",
      skills: [
        { n: "AWS", icon: <FaAws className="text-orange-400" /> },
        { n: "OCI", icon: <SiOracle className="text-red-600" /> },
        {
          n: "GCP (Firebase)",
          icon: <SiGooglecloud className="text-blue-500" />,
        },
      ],
    },
    {
      name: "Tools",
      skills: [
        { n: "Git / GitHub", icon: <FaGitAlt className="text-orange-500" /> },
        { n: "Jenkins", icon: <SiJenkins className="text-red-500" /> },
        { n: "Docker", icon: <FaDocker className="text-blue-400" /> },
        { n: "Docker Compose", icon: <FaDocker className="text-blue-400" /> },
        { n: "Postman", icon: <SiPostman className="text-orange-500" /> },
      ],
    },
    {
      name: "Development Suite",
      skills: [
        { n: "VS Code", icon: <SiVsco className="text-blue-500" /> },
        {
          n: "IntelliJ IDEA",
          icon: <SiIntellijidea className="text-red-500" />,
        },
        {
          n: "Eclipse IDE",
          icon: <SiEclipseide className="text-purple-500" />,
        },
      ],
    },
    {
      name: "Visualization Tools",
      skills: [
        { n: "Draw.io", icon: <FaDrawPolygon className="text-blue-500" /> },
      ],
    },
  ];

  const projects = [

    {
      title: "LangGraph-Multi-Agent-Orchestrator",
      field: "AI, RAG, Langchain, Langgraph, agent, tools, FastAPI",
      duration: "Mar 2026",
      metrics: "Architecturing graph and agentic workflows.",
      github: "https://github.com/tc18/LangGraph-Multi-Agent-Orchestrator",
      tech: [
        <SiLangchain className="text-green-400" />,
        // <SiLanggraph className="text-orange-500" />,
        <SiOllama className="text-red-500" />,
      ],
      desc: "A research and network troubleshooting assistant built with FastAPI, LangGraph, and Ollama. This project uses a 'Supervisor' architecture to intelligently route tasks between specialized agents (Math, Network, and RAG Research) while streaming real-time updates to the frontend.",
    },


    {
      title: "RAG-serach-chomaDB",
      field: "AI, RAG, Tools, FastAPI",
      duration: "Mar 2026",
      metrics: "Learning RAG and VectorDB",
      github: "https://github.com/tc18/RAG-serach-chomaDB",
      tech: [
        <SiFastapi className="text-blue-400" />,
        <FaTools className="text-orange-500" />,
        <SiOllama className="text-red-500" />,
      ],
      desc: "Created a test project that can read docs, stores in vectorDB(ChomaDB) and users can ask questions",
    },

    {
      title: "Handwritten Digit Recognition",
      field: "Machine Learning & Deep Learning",
      duration: "Mar 2025",
      metrics: "98% CNN Accuracy",
      github: "https://github.com/tc18/cnn_ai",
      tech: [
        <FaPython className="text-blue-400" />,
        <SiTensorflow className="text-orange-500" />,
        <Cpu className="text-purple-500" />,
        <Database className="text-slate-400" />,
      ],
      desc: "Built multiple digit classification models using MNIST dataset. Implemented Random Forest with Hadoop MapReduce and a CNN-based classifier using TensorFlow. Trained on 60,000 images and evaluated on 10,000 test samples to compare classical ML vs deep learning approaches.",
    },

    {
      title: "Photobooth",
      field: "Full-Stack Web Application",
      duration: "2021",
      metrics: "Instagram-Style Media Platform",
      github: "https://github.com/tc18/Photobooth",
      tech: [
        <SiSpringboot className="text-green-500" />,
        <FaReact className="text-cyan-400" />,
        <SiMysql className="text-blue-500" />,
        <FaDocker className="text-blue-500" />,
      ],
      desc: "Built an Instagram-like photo sharing application using Spring Boot and React.js with Material UI. Implemented RESTful APIs, image uploads, user feeds, and persistence with MySQL, all containerized using Docker for consistent local and production deployments.",
    },

    {
      title: "Repossessed Vehicle Management System",
      field: "Enterprise Web Systems",
      duration: "Jun 2015 - Jul 2017",
      metrics: "1-2M Records Processed",
      github: "https://github.com/tc18/PoniyaAgencyBank",
      tech: [
        <FaJava className="text-orange-500" />,
        <SiMysql className="text-blue-500" />,
        <SiSpringboot className="text-green-500" />,
        <FaLinux className="text-black" />,
      ],
      desc: "Designed and deployed a production-grade web application for repossession agencies. Built large-scale data ingestion pipelines for ambiguous bank Excel files, optimized SQL queries, generated structured PDF reports, and implemented role-based access control. Successfully deployed on a Linux server and used by real clients.",
    },

    {
      title: "Find My Spot - Real-Time Parking Allocation",
      field: "Algorithms & Full-Stack Development",
      duration: "Jan 2017 - May 2017",
      metrics: "Dijkstra-Based Navigation",
      github: "https://github.com/tc18/Find-My-Spot",
      tech: [
        <FaJava className="text-orange-500" />,
        <FaReact className="text-cyan-400" />,
        <Globe className="text-blue-400" />,
        <Code2 className="text-green-400" />,
      ],
      desc: "Developed a real-time parking navigation system using Dijkstra’s shortest path algorithm. Integrated GeoLocation API, dynamic SVG rendering, and backend data sources to guide users to the nearest available parking spot on a campus map.",
    },

    {
      title: "LinkedIn Automation Scraper",
      field: "Automation & Web Scraping",
      duration: "Sep 2017 - Oct 2017",
      metrics: "Profile & Job Data Extraction",
      tech: [
        <FaPython className="text-blue-400" />,
        <SiSelenium className="text-green-500" />,
      ],
      desc: "Developed a Selenium-based automation bot to log in to LinkedIn, extract user profile data, job listings, and save structured outputs into Excel files for offline analysis.",
    },

    {
      title: "Real-Time Chat Application ",
      field: "Computer Networks",
      duration: "Oct 2017 - Dec 2017",
      metrics: "Client-Server Socket Programming",
      github: "https://github.com/tc18/WebsocketChat",
      tech: [
        <FaPython className="text-blue-400" />,
        <Server className="text-slate-600" />,
      ],
      desc: "Built a Python-based socket programming application enabling file transfer and bidirectional chat communication between a server and a single client.",
    },

    {
      title: "Online Workspace & Compiler",
      field: "Web Platforms",
      duration: "Oct 2017 - Dec 2017",
      metrics: "Online Compile & Debug",
      tech: [
        <FaJava className="text-orange-500" />,
        <SiMysql className="text-blue-500" />,
        <FaJsSquare className="text-yellow-400" />,
      ],
      desc: "Contributed to an online IDE platform allowing users to create projects, write code, compile, execute, and download source files. Implemented AJAX-driven workflows and file I/O operations.",
    },

    {
      title: "eCommerce Platform - Clothing & Items",
      field: "Full-Stack Web Development",
      duration: "2016",
      metrics: "MVC-Based Online Store",
      github: "https://github.com/tc18/eCommerce/tree/master",
      tech: [
        <FaJava className="text-orange-500" />,
        <SiMysql className="text-blue-500" />,
        <SiHibernate className="text-yellow-500" />,
        <Code2 className="text-green-500" />,
      ],
      desc: "Developed a full-featured eCommerce web application for clothing and merchandise using J2EE (JSP, JSTL) with Hibernate ORM and MySQL. Implemented a layered MVC architecture with Controllers, DAO, Filters, and Value Objects (VO) to handle product listings, user sessions, cart management, and order processing.",
    },

    {
      title: "Technosparx Festival Website",
      field: "Web Development",
      duration: "Jan 2015 - Feb 2015",
      metrics: "Event Registration Platform",
      github: "https://github.com/tc18/Technospark-15",
      tech: [
        <FaJava className="text-orange-500" />,
        <FaHtml5 className="text-orange-600" />,
        <FaCss3Alt className="text-blue-500" />,
        <FaBootstrap className="text-purple-600" />,
      ],
      desc: "Built a responsive website for a college technical festival featuring event listings, online registrations, and payment integration, optimized for mobile and tablet devices.",
    },
  ];

  const education = [
    {
      degree: "MBA in IT Executive",
      school: "Ottawa University",
      year: "2023",
      icon: <PiStudentFill className="text-blue-500" />,
      details:
        "Focus on **Strategic IT Leadership**, Digital Transformation frameworks, and **IT Governance** in Enterprise Cloud Ecosystems.",
    },
    {
      degree: "M.S. Computer Science",
      school: "SUNY New Paltz",
      year: "2018",
      icon: <PiStudentFill className="text-purple-500" />,
      details:
        "Specialized in **Distributed Systems**, High-Performance Computing, and **Big Data Analytics**.",
    },
    {
      degree: "B.E. Computer Engineering",
      school: "AIT, India",
      year: "2011 - 2015",
      icon: <PiStudentFill className="text-green-500" />,
      details:
        "Core focus on **Software Architecture**, Networking Protocols, and **Relational Database Design**.",
    },
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-[#050505] text-slate-300" : "bg-[#fcfcfd] text-slate-800"
      } min-h-screen font-mono transition-all duration-500`}
    >
      {/* HUD HEADER */}
      <nav
        className={`fixed top-0 w-full z-50 border-b ${borderColor} backdrop-blur-xl px-10 py-5 flex justify-between items-center bg-transparent`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black">
            CT
          </div>
          <span
            className={`font-black text-xs tracking-widest uppercase ${textColor}`}
          >
            CHINTAN.SYS_V3
          </span>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-full border ${borderColor} hover:bg-blue-500/10 transition-all shadow-sm`}
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-500" />
            ) : (
              <Moon size={18} className="text-slate-900" />
            )}
          </button>
          {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-[10px] font-black tracking-widest flex items-center gap-2 transition-all">
            <Download size={14} /> DOWNLOAD_CV
          </button> */}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-20">
        {/* HERO */}
        <header className="mb-40 flex flex-col lg:flex-row justify-between items-center gap-20">
          <div className="flex-1">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-8">
              CHINTAN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
                TIKEKAR
              </span>
            </h1>
            <p
              className={`text-xl max-w-2xl leading-relaxed ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Senior Software Engineer at{" "}
              <span className={darkMode ? "text-white" : "text-slate-900"}>
                Oracle
              </span>
              .
              {formatText(
                " Architecting high-scale **Cloud Infrastructure** and **Distributed Systems**."
              )}
            </p>
          </div>
          {/* RIGHT SIDE CONTENT */}
          <HeroVisuals /> {/* CloudNetworkDiagram  or HeroVisuals*/}
        </header>

        {/* EXPERIENCE SECTION */}
        <section className="mb-40">
          <h2
            className={`text-xs font-black mb-16 uppercase tracking-[0.5em] ${sectionLabel}`}
          >
            [01] EXECUTION_HISTORY
          </h2>
          <div className="space-y-32">
            {experiences.map((exp, i) => (
              <div key={i} className="relative group">
                <div className="flex flex-col md:flex-row justify-between mb-10 border-b border-slate-500/10 pb-6 gap-4">
                  <div className="space-y-4">
                    <h3
                      className={`text-5xl font-black tracking-tighter ${textColor}`}
                    >
                      {exp.company}
                    </h3>
                    {/* Role Icons */}
                    <div className="flex gap-4 text-2xl opacity-60 group-hover:opacity-100 transition-opacity">
                      {exp.techIcons.map((Icon, idx) => (
                        <span key={idx}>{Icon}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 text-right">
                    {exp.roles.map((r, ri) => (
                      <div key={ri} className="flex items-center gap-3">
                        <span
                          className={`text-[10px] font-black uppercase tracking-widest ${r.color}`}
                        >
                          {r.title}
                        </span>
                        <span className="text-[10px] font-mono opacity-40">
                          {r.date}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {exp.description.map((desc, di) => (
                    <div
                      key={di}
                      className={`p-6 rounded-2xl border ${borderColor} ${cardBg} hover:border-blue-500/30 transition-all`}
                    >
                      <p className={`text-xs leading-relaxed ${subTextColor}`}>
                        {formatText(desc)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="mb-40">
          <h2
            className={`text-xs font-black mb-16 uppercase tracking-[0.5em] ${sectionLabel}`}
          >
            [02] SYSTEM_ARTIFACTS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className={`p-10 rounded-[2.5rem] border ${borderColor} ${cardBg} group hover:border-blue-600/40 transition-all`}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="flex gap-4 text-2xl grayscale group-hover:grayscale-0 transition-all">
                    {p.tech.map((Icon, ii) => (
                      <span key={ii}>{Icon}</span>
                    ))}
                  </div>
                  <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">
                    {p.field}
                  </span>
                  <span className="text-[10px] font-mono opacity-40">
                    {p.duration}
                  </span>
                </div>
                <h4 className={`text-3xl font-black mb-4 ${textColor}`}>
                  {p.title}
                </h4>
                <p
                  className={`text-sm leading-relaxed mb-6 border-l-2 border-blue-500/20 pl-4 ${subTextColor}`}
                >
                  "{p.desc}"
                </p>
                <div className="flex items-center w-full">
                  <div className="flex items-center gap-2">
                    <Activity size={14} className="text-blue-500" />
                    <span
                      className={`text-[10px] font-black uppercase ${textColor}`}
                    >
                      {p.metrics}
                    </span>

                      {p.github && (
                        <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto group/btn relative flex  opacity-40 hover:opacity-80 items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full hover:border-blue-500/50 hover:bg-blue-500/5 transition-all"
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="text-green-500 font-bold text-[10px]"><FaCode /></span>
                          <span className={`text-[10px] font-mono uppercase tracking-wider ${textColor} group-hover/btn:text-blue-400`}>
                            view_source
                          </span>
                        </div>
                        <FaGithub size={12} className="opacity-40 group-hover/btn:opacity-100 group-hover/btn:text-blue-400" />
                      </a>
                      )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION - FULL WIDTH ROW DESIGN */}
        <section className="mb-40">
          <h2
            className={`text-xs font-black mb-16 uppercase tracking-[0.5em] ${sectionLabel}`}
          >
            [03] ACADEMIC_FOUNDATION
          </h2>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div
                key={i}
                className={`group p-8 md:p-12 rounded-[2rem] border ${borderColor} ${cardBg} hover:border-blue-500/30 transition-all`}
              >
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-1 flex justify-center">
                    <div className="p-4 bg-blue-500/5 rounded-2xl">
                      {edu.icon}
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <h4 className={`text-2xl font-black ${textColor}`}>
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-bold text-blue-500 mt-1 uppercase tracking-widest">
                      {edu.school}
                    </p>
                  </div>
                  <div className="md:col-span-5">
                    <p className={`text-sm italic ${subTextColor}`}>
                      {formatText(edu.details)}
                    </p>
                  </div>
                  <div className="md:col-span-2 text-right">
                    <span className="text-xs font-mono opacity-40 uppercase tracking-widest">
                      {edu.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="mb-20">
          <h2
            className={`text-xs font-black mb-16 uppercase tracking-[0.5em] ${sectionLabel}`}
          >
            [04] TECHNICAL_STACK
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {skillGroups.map((group, i) => (
              <div key={i} className="space-y-6">
                <p
                  className={`text-[10px] font-black uppercase tracking-widest border-b pb-2 ${borderColor} ${textColor}`}
                >
                  {group.name}
                </p>
                <div className="space-y-4">
                  {group.skills.map((s, si) => (
                    <div
                      key={si}
                      className="flex items-center gap-3 group/item"
                    >
                      <span className="text-2xl group-hover/item:scale-110 transition-transform">
                        {s.icon}
                      </span>
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider ${subTextColor} group-hover/item:text-blue-500 transition-colors`}
                      >
                        {s.n}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="pt-20 border-t border-slate-500/10 text-center">
          <p className="text-[10px] font-black tracking-[1em] opacity-20 uppercase">
            OVERLAND_PARK_KS // CHINTAN_TIKEKAR // 2025
          </p>
        </footer>
      </main>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes ping-right {
          0% { transform: translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(130px); opacity: 0; }
        }
        @keyframes ping-left {
          0% { transform: translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(-130px); opacity: 0; }
        }
        .animate-ping-right { animation: ping-right 3s infinite linear; }
        .animate-ping-left { animation: ping-left 3s infinite linear; }
      `,
        }}
      />
    </div>
  );
};

export default App;
