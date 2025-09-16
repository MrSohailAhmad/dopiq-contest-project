## Dopiq – Design Contests & Marketplace (Next.js App Router)

Modern design marketplace with contests, direct hire, designer onboarding, and admin dashboards. Built with Next.js App Router, React, and Tailwind CSS.

### Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, Tailwind CSS v4, `lucide-react`
- **State/Context**: `FormProvider` (custom), `next-themes` for dark mode
- **Charts**: `recharts`
- **Images**: Next Image with remote domains (`images.unsplash.com`, `plus.unsplash.com`, `lh3.googleusercontent.com`)

### Scripts

```bash
npm run dev     # Start dev server on http://localhost:3000
npm run build   # Create production build
npm run start   # Run production server
npm run lint    # Lint the project
```

### Prerequisites

- Node.js 18+ recommended
- PNPM/NPM/Yarn (any package manager)

### Run Locally

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## How Routing Works (App Router)

This project uses Next.js App Router. Folders in `src/app` map directly to routes. A `page.tsx` inside a folder becomes a route; a `layout.tsx` wraps all nested routes.

- **Root layout**: `src/app/layout.tsx` – wraps the entire app with `FormProvider` and Theme `Providers`.
- **Root page**: `src/app/page.tsx` – landing page with two primary flows: Customer and Designer.
- **Nested layouts**: Feature areas can define their own `layout.tsx` to wrap nested routes (e.g., `home/layout.tsx`, `form/layout.tsx`, `admin-dashboard/layout.tsx`).

### Route Map

- `/` → Landing: choose Customer (`/form/customer`) or Designer (`/form/designer`).
- `/login` → Public login page.
- `/home` → Authenticated home shell (uses its own `layout.tsx`).

- `/form`

  - `/form/customer` → Multi‑step customer onboarding
    - Steps (components under `src/app/form/customer/`): `LetsGetStarted`, `BusinessInformation`, `ProjectPreference`, `ContactAndPayment`, `VerifyYourEmail`, `Credentials`.
  - `/form/designer` → Designer onboarding
    - Steps (under `src/app/form/designer/`): `Step1`, `Language`, `ProfessionalInfo`, `SkillSelection`, `Pricing`, `Payment`, `EmailVerification`.

- `/user-dashboard` → End‑user workspace

  - Components: `HeroSection`, `DashboardCards`, `ContestsSection`, `ContestCard`, `LiveContest`, `MyContest`, `DesignerContest`, `DesignerOngoingContest`, `DirectHire`, `DesignMarketPlace`, `Chat`, `AILogoForm`, `AILogoGenerate`, `AIlogoFirstStep`, `AISelectIndustry`, `IndustryStep`, `StyleStep`, `LogoStyle`, `LogoVariationStep`, `GeneratedLogoVariations`, `MySubmissionCard`, `MyRecentDesign`, `MyLibrary`, `AvailableBalance`, `Payments`, `TransectionHistory`, `WithDrawFunds`, `ProfileSetting`, `Footer`, `UserDashboardHeader`, `DesignerSideBar`.

- `/admin-dashboard` → Admin area (with nested pages)
  - `/admin-dashboard` → Root index
  - `/admin-dashboard/dashboard` → Overview dashboard
  - `/admin-dashboard/ai` → AI analytics (components: `AiStatsCards`, `CreditChart`, `CreditConsumpsion`, `LogoGenTrends`, `LogoTrendChart`, `RecentUsageActivity`, `TopUserAndCreditConsumption`)
  - `/admin-dashboard/analytics` → Business analytics (components: `AnaliticsCards`, `AnalyticsAreaChart`, `AnalyticsCharts`, `AnalyticsTable`, `AnaliticsPieChart`, `PieChart`)
  - `/admin-dashboard/payment-management` → Payments (components: `PaymentCards`, `PaymentPieChart`, `PieChart`, `PlatformFreeReportTable`, `ContestPerformance`, `ContestPerformances`)
  - `/admin-dashboard/dispute-management` → Disputes (components: `DisputeCasesList`, `DisputeCasesListChart`, `DisputesByStatusPieChart`, `PaymentCards`, `PaymentPieChart`, `PlatformFreeReportTable`)
  - `/admin-dashboard/contest-management` → Contests (components: `ActiveContests`)
  - `/admin-dashboard/announcements` → Admin announcements feed

> Note: Admin shared UI: `src/app/admin-dashboard/components/` (`AdminDashboardNav`, `SideBar`, `Header`, `AdminStatsCards`, `AnalyticsInsights`, `RevenueGraph`, `RevenueChar`, `LatestWithDrawalsAndOpenDeputes`, `LatestWithDrawls`, `OpenDesputes`, `RecentContest`, `SystemHealthMonitor`, `SystemMonitorLineChart`, `UserGrowth`, `UserGrowthChart`).

---

## Key Directories

- `src/app/` – App Router routes, layouts, and pages
  - `ThemeProvider.tsx` – wraps `next-themes` Provider
  - `globals.css` – Tailwind base styles
  - `home/` – additional app shell with `layout.tsx` and `page.tsx`
  - `login/` – login page
  - `form/` – customer and designer onboarding flows
  - `user-dashboard/` – user dashboard feature area
  - `admin-dashboard/` – admin suite (analytics, payments, disputes, contests, announcements)
- `src/components/` – shared components
  - `Navbar/` – top navigation
  - `DataTable/` – data table primitive
  - `Tabs/`, `StepIndicator/`, `ui/button.tsx`, `PhotoUploader.tsx`
- `src/context/FormContext.tsx` – multi‑step form state across onboarding
- `src/assets/` – images and static assets

---

## How to Use the App (Flows)

- **Customer Flow**

  1. Visit `/` and choose “I need creative design work.”
  2. You are taken to `/form/customer` and progress through the steps: getting started → business info → project preferences → contact & payment → verify email → credentials.
  3. After onboarding, access user features under `/user-dashboard` (contests, direct hire, AI logo tools, payments, profile).

- **Designer Flow**

  1. Visit `/` and choose “I’m here to design & earn.”
  2. Complete `/form/designer` steps: basics → language → professional info → skills → pricing → payment → email verification.
  3. Use `/user-dashboard` designer views to see ongoing contests, submit designs, and manage earnings.

- **Admin Flow**
  1. Navigate to `/admin-dashboard`.
  2. Explore nested pages for overview (`/dashboard`), AI usage analytics (`/ai`), general analytics (`/analytics`), payments, disputes, contest management, and announcements.

> Authentication/authorization wiring is not shown in this repo snapshot. If you need protected routes, add middleware and session handling as needed.

---

## Theming & Providers

- Dark/light mode via `next-themes` provider in `src/app/ThemeProvider.tsx` and consumed in `src/app/layout.tsx`.
- Global form state via `FormProvider` in `src/context/FormContext.tsx` wraps the entire app (`src/app/layout.tsx`).

## Images Configuration

Configured in `next.config.ts` to allow Unsplash and Google user content domains for `next/image` optimization.

```ts
// next.config.ts (excerpt)
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com' },
    { protocol: 'https', hostname: 'plus.unsplash.com' },
    { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
  ],
}
```

---

## Component Highlights

- Shared UI primitives in `src/components`: `Navbar`, `DataTable`, `Tabs`, `StepIndicator`, `ui/button`, `PhotoUploader`.
- Extensive feature‑scoped components under `user-dashboard` and `admin-dashboard` to keep pages light and composable.

---

## Deployment

- Build: `npm run build`
- Start: `npm run start`
- Vercel/Node hosting both supported. Ensure environment variables and auth strategy (if added) are configured in your platform.

---

## Contributing

1. Create a feature branch.
2. Keep components feature‑scoped under their route folder or `src/components` if shared.
3. Run `npm run lint` before opening a PR.
