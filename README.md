<div align="center">

# CRM & Customer Lifecycle

### Segmentation · Retention · Lifecycle Automation · Customer Operations

[**→ Open Live Lifecycle Workspace**](https://crm-customer-lifecycle.vercel.app/)

![React](https://img.shields.io/badge/Frontend-React-4F46E5?style=flat-square)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-6D28D9?style=flat-square)
![CRM](https://img.shields.io/badge/Focus-CRM%20Operations-7C3AED?style=flat-square)
![Status](https://img.shields.io/badge/Status-Live-22C55E?style=flat-square)
![Data](https://img.shields.io/badge/Data-Synthetic-8B5CF6?style=flat-square)

</div>

---

## Overview

This project simulates the **CRM and customer lifecycle operation of a fictional B2B SaaS company**. It connects customer data to lifecycle stages, health signals, segmentation and operational actions instead of treating CRM as a static contact database.

The fictional product is **NexaFlow**, a workflow platform used by growing teams. The portfolio application acts as an internal **Lifecycle Operations workspace** where a CRM/CX team can understand which customers are activating successfully, which accounts need attention and which lifecycle action should happen next.

> NexaFlow, its accounts, lifecycle data, journeys and performance indicators are fictional and use synthetic portfolio data. They do not represent customer or employer information.

---

## Live Lifecycle Workspace

**[Launch the application →](https://crm-customer-lifecycle.vercel.app/)**

The React + TypeScript application contains five operational views:

- **Portfolio** — MRR, health, lifecycle distribution, priority signals and journey overview;
- **Customers** — filterable CRM records with account context, engagement and next-best actions;
- **Segments** — dynamic groups connecting customer attributes to differentiated CRM motions;
- **Journeys** — lifecycle automations modeled as Trigger → Condition → Action;
- **Retention** — exposed MRR, at-risk accounts and an intervention playbook.

---

## Lifecycle Model

```text
Lead
  ↓
Activated
  ↓
Active
  ↓
At Risk
  ↓
Churned
  ↓
Reactivated
```

Lifecycle is not treated as a one-way funnel. Customers can move between healthy and risk states as engagement changes, and churned customers can enter reactivation journeys when appropriate.

---

## Decision Model

```text
Customer data
      ↓
Lifecycle stage
      +
Health & engagement signals
      +
Account context / value
      ↓
Dynamic segment
      ↓
Next-best action
      ↓
Human or automated CRM motion
```

The project deliberately separates **measurement** from **decision-making**: a health score is useful only when it helps determine what the team should do next.

---

## What This Project Demonstrates

| Area | Evidence |
|---|---|
| **CRM Operations** | Lifecycle stages, segmentation, account records and next-best actions |
| **Customer Experience** | Customer context, engagement signals and intervention design |
| **Retention** | Risk identification, save motions, churn context and reactivation |
| **Automation** | Trigger → condition → action lifecycle journeys |
| **Analytics** | Portfolio health, MRR exposure, stage distribution and synthetic operating metrics |
| **Software Engineering** | React + TypeScript + Vite application with typed synthetic CRM data |

---

## Synthetic CRM Dataset

The application contains 12 fictional B2B SaaS accounts across different industries, plans and lifecycle states. Example fields include:

`Lifecycle Stage` · `Health Score` · `MRR` · `Users` · `Usage` · `Last Active` · `NPS` · `Owner` · `Current Signal` · `Next Best Action`

The values are intentionally small enough for a reviewer to inspect the operating logic directly. They are not presented as production benchmarks or business results.

---

## CRM Artifacts

| Artifact | Purpose |
|---|---|
| `crm/lifecycle-model.md` | Defines stage meaning, movement and operational objectives |
| `crm/segmentation-framework.md` | Connects behavioral/account attributes to differentiated CRM actions |
| `retention/playbook.md` | Defines Detect → Validate → Prioritize → Intervene → Learn retention workflow |
| `src/data.ts` | Typed synthetic accounts and lifecycle journeys |
| `src/App.tsx` | Interactive lifecycle operations workspace |

---

## Technical Architecture

```text
Synthetic CRM data
        ↓
Typed TypeScript model
        ↓
React decision views
   ├── Portfolio
   ├── Customers
   ├── Segments
   ├── Journeys
   └── Retention
        ↓
Vite production build
        ↓
Vercel
```

---

## Repository Structure

```text
crm-customer-lifecycle/
├── src/
│   ├── App.tsx
│   ├── data.ts
│   ├── main.tsx
│   ├── styles.css
│   └── vite-env.d.ts
├── crm/
│   ├── lifecycle-model.md
│   └── segmentation-framework.md
├── retention/
│   └── playbook.md
├── package.json
├── tsconfig.app.json
├── vite.config.ts
└── README.md
```

---

## Portfolio Context

I have professional experience in **customer service, CRM platforms, customer relationships, post-sales and operational workflows** and I am currently pursuing **Software Engineering**. This project extends that foundation into a fictional SaaS CRM environment focused on lifecycle operations, segmentation and retention logic.

The application is a portfolio simulation and is not presented as production CRM work performed for a previous employer.

---

<div align="center">

### Sofia Lozano
Customer Experience · Technical Support · CRM & Support Operations

[Live Workspace](https://crm-customer-lifecycle.vercel.app/) · [GitHub Profile](https://github.com/sofialozano-cx)

</div>
