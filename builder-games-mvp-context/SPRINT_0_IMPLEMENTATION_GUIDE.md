# Sprint 0 Implementation Guide - Builder Games MVP

## 🎯 Project Context & Sprint Goal

**About Builder Games:** We're building a gamified startup building arena where founders "show up, ship live, and prove it" through public MVP sprints. This is NOT a game builder platform - it's a platform for startup builders to compete and gain credibility.

**Sprint 0 Goal:** Establish complete technical foundation with working navigation between placeholder pages that embodies the PRD's "Kinetic UI/UX" vision. **Authentication and feature development will begin in Sprint 1.**

## 📋 PRD Alignment Checklist

This Sprint 0 implementation directly supports these PRD requirements:
- ✅ **Kinetic UI/UX with HUD-like interface** (Story 1.10: Header component)
- ✅ **Default dark mode** (Story 1.9: Theme system)
- ✅ **Shadcn UI components** (Story 1.9: Component library)
- ✅ **Typography: Space Grotesk + Inter** (Story 1.9: Font system)
- ✅ **6 narrative colors** (Story 1.9: Color system)
- ✅ **Web desktop experience with responsiveness** (Story 1.10: Responsive design)
- ✅ **Secure foundation for authentication** (Story 0.2: Supabase setup)

## 📋 Implementation Order

**CRITICAL:** Follow this exact order due to dependencies. Each story builds on the previous one.

### Story 0.1: Initialize Next.js Project & Version Control
**Status:** ✅ COMPLETE  
**Dependencies:** None  
**Estimate:** 1-2 story points  
**PRD Requirements:** Foundation for web desktop experience

#### What You're Building
- Clean Next.js 15.3.3+ project with TypeScript
- Git repository with proper .gitignore
- ESLint and Prettier configured for code quality

#### Implementation Steps

**⚠️ IMPORTANT: Start in correct directory**
```bash
# Make sure you're in the builder-games-mvp/ subdirectory, NOT the repo root
cd /path/to/BMAD-METHOD-3/builder-games-mvp
```

1. **Create Next.js Project**
   ```bash
   npx create-next-app@latest builder-games-mvp
   # REQUIRED SELECTIONS:
   # ✅ TypeScript - Yes (PRD requirement for maintainability)
   # ✅ ESLint - Yes (PRD requirement for code quality)
   # ✅ Tailwind CSS - Yes (needed for Shadcn UI)
   # ✅ App Router - Yes (modern Next.js pattern)
   # ❌ `src/` directory - No (keep simple structure)
   # ❌ Import alias - No (will configure later if needed)
   
   cd builder-games-mvp
   ```

2. **Verify Configuration**
   ```bash
   npm run dev
   # Should start on http://localhost:3000 without errors
   # Check browser shows default Next.js page
   ```
   
   **Verify these files exist:**
   - `package.json` - contains TypeScript, ESLint, Tailwind dependencies
   - `app/` directory - App Router structure
   - `tailwind.config.ts` - Tailwind configuration
   - `next.config.js` - Next.js configuration

3. **Git Setup**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Setup Next.js project"
   ```

4. **Optional: Remote Repository**
   ```bash
   # Create repo on GitHub/GitLab first, then:
   git remote add origin <your-repo-url>
   git branch -M main
   git push -u origin main
   ```

#### Troubleshooting
- **Node version:** Ensure Node.js 18+ is installed
- **Permission errors:** Try `npx create-next-app@latest` without sudo
- **Port 3000 busy:** Kill other processes or use `npm run dev -- -p 3001`

#### Acceptance Criteria Checklist
- [x] Next.js project runs on `npm run dev` without errors
- [x] TypeScript configured and working (no TS errors in terminal)
- [x] App Router enabled (app/ directory exists)
- [x] ESLint and Prettier working (npm run lint passes)
- [x] Git repository initialized with initial commit
- [x] .gitignore includes Node.js, Next.js, and OS files

**✅ COMPLETED:** Next.js 15.3.3 project created with TypeScript, Tailwind CSS v4, App Router. Git repository connected to GitHub at https://github.com/BlankDigitalMedia/builder-games-mvp.git

---

### Story 0.2: Supabase Project Setup & Environment Configuration
**Status:** ✅ COMPLETE  
**Dependencies:** Story 0.1  
**Estimate:** 2-3 story points  
**PRD Requirements:** Secure authentication foundation, data protection

#### What You're Building
- Supabase project connected to Next.js
- Environment variables configured securely
- Basic connectivity verified for future authentication

#### Implementation Steps

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Sign up/log in with GitHub (recommended)
   - Click "New Project"
   - **Organization:** Create or select existing
   - **Name:** `builder-games-mvp` 
   - **Database Password:** Generate strong password (save it!)
   - **Region:** Choose closest to your users
   - Wait for project creation (2-3 minutes)

2. **Get API Credentials**
   - Go to Settings > API
   - Copy these values:
     - **Project URL:** `https://[project-id].supabase.co`
     - **anon/public key:** `eyJ...` (long string starting with eyJ)
   - ⚠️ **NEVER commit the service_role key to Git**

3. **Install Supabase Client**
   ```bash
   npm install @supabase/supabase-js @supabase/ssr
   ```
   **Why @supabase/ssr:** Provides better SSR support for Next.js 15.3.3

4. **Environment Configuration**
   
   **Create `.env.local`:** (This file is Git-ignored)
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://[your-project-id].supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ[your-anon-key]
   ```
   
   **Create `.env.example`:** (This file IS committed)
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. **Create Supabase Client**
   
   **Create `lib/supabaseClient.ts`:**
   ```typescript
   import { createBrowserClient } from '@supabase/ssr'

   export function createClient() {
     return createBrowserClient(
       process.env.NEXT_PUBLIC_SUPABASE_URL!,
       process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
     )
   }
   ```

6. **Test Connection**
   
   **Add to `app/page.tsx` temporarily:**
   ```typescript
   import { createClient } from '@/lib/supabaseClient'

   export default function Home() {
     const supabase = createClient()
     
     // Test connection on component mount
     React.useEffect(() => {
       const testConnection = async () => {
         const { data, error } = await supabase.from('test').select('*').limit(1)
         console.log('Supabase connection test:', { data, error })
       }
       testConnection()
     }, [])

     return <div>Testing Supabase connection - check console</div>
   }
   ```
   
   **Expected result:** Console shows connection error (table doesn't exist) but no authentication errors

#### Troubleshooting
- **Invalid API key:** Double-check you copied the anon key, not service_role key
- **CORS errors:** Ensure you're using NEXT_PUBLIC_ prefix for client-side vars
- **Module not found:** Make sure both @supabase packages are installed

#### Acceptance Criteria Checklist
- [x] Supabase project created and accessible in dashboard
- [x] Environment variables configured in .env.local
- [x] .env.example created and committed to Git
- [x] Supabase client library installed (@supabase/supabase-js @supabase/ssr)
- [x] Client utility created in lib/supabaseClient.ts
- [x] Basic connectivity verified (no auth errors, table errors are OK)

**✅ COMPLETED:** Supabase project connected using latest `@supabase/ssr` best practices for Next.js 15.3.3. Environment variables configured and connectivity verified.

---

### Story 1.9: Theme & Typography Implementation
**Status:** ✅ COMPLETE  
**Dependencies:** Story 0.1  
**Estimate:** 3-5 story points  
**PRD Requirements:** Kinetic UI/UX, dark mode default, Shadcn UI, typography system, 6 narrative colors

#### What You're Building
- Dark/light theme system with Shadcn UI (PRD: default dark mode)
- Typography system: Space Grotesk + Inter (PRD: exact fonts specified)
- 6 narrative color system (PRD: Pink, Purple, Red, Green, Blue, Orange)
- Theme toggle component for user control

#### PRD Alignment
This story directly implements:
- **"Overall Vision & Experience: Kinetic UI/UX"**
- **"Default dark mode"**
- **"UI components should leverage Shadcn"**
- **"Typography System: Space Grotesk for headings, Inter for body text"**
- **"Color System: Primary (Pink), Progression (Purple), Live/Chaos (Red), Success (Green), Discovery (Blue), Momentum (Orange)"**

#### Implementation Steps

1. **Initialize Shadcn UI**
   ```bash
   npx shadcn-ui@latest init
   ```
   **Selection Guide:**
   - Would you like to use TypeScript? → Yes
   - Which style would you like to use? → **New York** (cleaner, more professional)
   - Which color would you like to use as base color? → **Slate** (good for dark mode)
   - Where is your global CSS file? → `app/globals.css`
   - Do you want to use CSS variables for colors? → **Yes** (easier theming)
   - Where is your tailwind.config.js? → `tailwind.config.ts`
   - Configure the import alias for components? → `@/components`
   - Configure the import alias for utils? → `@/lib/utils`

2. **Install Theme Dependencies**
   ```bash
   npm install next-themes
   ```
   
   **Install Essential Components:**
   ```bash
   npx shadcn-ui@latest add button card input badge toast
   ```

3. **Configure PRD Color System**
   
   **Update `app/globals.css`** - Add AFTER Tailwind imports:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   @theme {
     /* Builder Games Color System from PRD */
     --color-primary: oklch(0.78 0.19 330);          /* Pink */
     --color-progression: oklch(0.7 0.25 280);       /* Purple */  
     --color-live: oklch(0.65 0.22 12);              /* Red */
     --color-success: oklch(0.65 0.15 145);          /* Green */
     --color-discovery: oklch(0.6 0.20 240);         /* Blue */
     --color-momentum: oklch(0.7 0.15 65);           /* Orange */
     
     /* Extend these colors into Tailwind's color palette */
     --color-primary-foreground: oklch(0.98 0.02 330);
     --color-success-foreground: oklch(0.98 0.02 145);
   }
   
   /* Dark mode as default per PRD */
   :root {
     color-scheme: dark;
   }
   ```

4. **Configure PRD Typography System**
   
   **Update `app/layout.tsx`:**
   ```typescript
   import type { Metadata } from 'next'
   import { Inter, Space_Grotesk } from 'next/font/google'
   import './globals.css'

   // PRD Typography: Space Grotesk for headings
   const spaceGrotesk = Space_Grotesk({
     subsets: ['latin'],
     variable: '--font-heading',
     display: 'swap',
   })

   // PRD Typography: Inter for body text
   const inter = Inter({
     subsets: ['latin'],
     variable: '--font-sans',
     display: 'swap',
   })

   export const metadata: Metadata = {
     title: 'Builder Games MVP',
     description: 'Gamified startup building arena',
   }

   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode
   }) {
     return (
       <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
         <body className="font-sans antialiased">
           {children}
         </body>
       </html>
     )
   }
   ```

5. **Create Theme Provider**
   
   **Create `components/theme-provider.tsx`:**
   ```typescript
   "use client"

   import * as React from "react"
   import { ThemeProvider as NextThemesProvider } from "next-themes"
   import { type ThemeProviderProps } from "next-themes/dist/types"

   export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
     return <NextThemesProvider {...props}>{children}</NextThemesProvider>
   }
   ```

6. **Create Theme Toggle Component**
   ```bash
   npx shadcn-ui@latest add dropdown-menu
   ```
   
   **Create `components/theme-toggle.tsx`:**
   ```typescript
   "use client"

   import * as React from "react"
   import { Moon, Sun } from "lucide-react"
   import { useTheme } from "next-themes"

   import { Button } from "@/components/ui/button"
   import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuTrigger,
   } from "@/components/ui/dropdown-menu"

   export function ThemeToggle() {
     const { setTheme } = useTheme()

     return (
       <DropdownMenu>
         <DropdownMenuTrigger asChild>
           <Button variant="outline" size="icon">
             <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
             <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
             <span className="sr-only">Toggle theme</span>
           </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end">
           <DropdownMenuItem onClick={() => setTheme("light")}>
             Light
           </DropdownMenuItem>
           <DropdownMenuItem onClick={() => setTheme("dark")}>
             Dark
           </DropdownMenuItem>
           <DropdownMenuItem onClick={() => setTheme("system")}>
             System
           </DropdownMenuItem>
         </DropdownMenuContent>
       </DropdownMenu>
     )
   }
   ```

7. **Integrate Theme Provider**
   
   **Update `app/layout.tsx`** - wrap children:
   ```typescript
   import { ThemeProvider } from "@/components/theme-provider"

   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode
   }) {
     return (
       <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
         <body className="font-sans antialiased min-h-screen bg-background">
           <ThemeProvider
             attribute="class"
             defaultTheme="dark"
             enableSystem
             disableTransitionOnChange
           >
             {children}
           </ThemeProvider>
         </body>
       </html>
     )
   }
   ```

#### Testing Your Implementation

**Create a test page to verify everything works:**

**Update `app/page.tsx`:**
```typescript
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="font-heading text-4xl font-bold text-primary">
          Builder Games MVP
        </h1>
        <ThemeToggle />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Theme & Typography Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="font-sans">This is Inter body text (normal weight)</p>
          <p className="font-sans font-medium">This is Inter body text (medium weight)</p>
          <p className="font-sans font-semibold">This is Inter body text (semibold weight)</p>
          
          <div className="space-x-2">
            <Badge variant="default" className="bg-primary">Primary (Pink)</Badge>
            <Badge variant="secondary" className="bg-progression text-white">Progression (Purple)</Badge>
            <Badge variant="destructive" className="bg-live text-white">Live/Chaos (Red)</Badge>
            <Badge variant="default" className="bg-success text-white">Success (Green)</Badge>
            <Badge variant="default" className="bg-discovery text-white">Discovery (Blue)</Badge>
            <Badge variant="default" className="bg-momentum text-white">Momentum (Orange)</Badge>
          </div>
          
          <div className="space-x-2">
            <Button variant="default">Default Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
```

#### Troubleshooting
- **Fonts not loading:** Check browser dev tools Network tab for font loading errors
- **Colors not applying:** Verify CSS variables are defined in globals.css
- **Theme not persisting:** Check localStorage in browser dev tools
- **Hydration mismatch:** Ensure suppressHydrationWarning is on html element

#### Acceptance Criteria Checklist
- [x] Shadcn UI initialized with New York style
- [x] Dark/light theme switching works via ThemeToggle component
- [x] All 6 PRD narrative colors defined and usable (pink, purple, red, green, blue, orange)
- [x] Space Grotesk font loaded for headings (font-heading class)
- [x] Inter font loaded for body text (font-sans class)
- [x] ThemeToggle component created and functional
- [x] Theme persists across page reloads
- [x] Default dark mode active per PRD requirement
- [x] Basic Shadcn components render correctly in both themes

**✅ COMPLETED:** Shadcn UI with "new-york" style, next-themes with dark mode default, Builder Games color system using Tailwind v4 @theme with OKLCH colors, Space Grotesk + Inter fonts configured. Essential components (Button, Card, Input, Badge) installed and working.

---

### Story 1.10: Core UI Shell & Navigation Implementation
**Status:** ✅ COMPLETE  
**Dependencies:** Stories 0.1, 1.9  
**Estimate:** 3-5 story points  
**PRD Requirements:** HUD-like interface, web desktop experience with responsiveness

#### What You're Building
- Root layout with Header component (PRD: HUD-like interface)
- Navigation between core pages as specified in PRD
- Placeholder pages for all routes with proper structure
- Theme toggle integration into HUD header
- Responsive design for desktop browsers

#### PRD Alignment
This story implements:
- **"HUD-like interface"** (Header component design)
- **"Core Screens/Views: Login/Signup, Builder Profile, Main Activity Feed"** (page structure)
- **"Web desktop experience with responsiveness"** (responsive navigation)
- **"Action-forward experience"** (clear navigation to key areas)

#### Implementation Steps

1. **Create Root Layout Structure**
   
   **Update `app/layout.tsx`** to include Header:
   ```typescript
   import type { Metadata } from 'next'
   import { Inter, Space_Grotesk } from 'next/font/google'
   import './globals.css'
   import { ThemeProvider } from '@/components/theme-provider'
   import { Header } from '@/components/Header'

   const spaceGrotesk = Space_Grotesk({
     subsets: ['latin'],
     variable: '--font-heading',
     display: 'swap',
   })

   const inter = Inter({
     subsets: ['latin'],
     variable: '--font-sans',
     display: 'swap',
   })

   export const metadata: Metadata = {
     title: 'Builder Games MVP',
     description: 'Gamified startup building arena where founders show up, ship live, and prove it',
   }

   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode
   }) {
     return (
       <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
         <body className="font-sans antialiased min-h-screen bg-background">
           <ThemeProvider
             attribute="class"
             defaultTheme="dark"
             enableSystem
             disableTransitionOnChange
           >
             <Header />
             <main className="pt-16">
               {children}
             </main>
           </ThemeProvider>
         </body>
       </html>
     )
   }
   ```

2. **Create HUD-like Header Component**
   
   **Create `components/Header.tsx`:**
   ```typescript
   "use client"

   import Link from "next/link"
   import { usePathname } from "next/navigation"
   import { ThemeToggle } from "@/components/theme-toggle"
   import { Button } from "@/components/ui/button"
   import { Badge } from "@/components/ui/badge"
   import { cn } from "@/lib/utils"

   export function Header() {
     const pathname = usePathname()

     const navItems = [
       { href: "/feed", label: "Feed" },
       { href: "/profile/demo", label: "Profile" }, // Demo profile for now
     ]

     return (
       <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
         <div className="container flex h-16 items-center justify-between px-4 md:px-8">
           {/* Left: Logo/Brand */}
           <div className="flex items-center space-x-4">
             <Link href="/" className="flex items-center space-x-2">
               <Badge variant="default" className="bg-primary font-heading font-bold px-3 py-1 hidden md:inline-flex">
                 BUILDER GAMES
               </Badge>
               <Badge variant="default" className="bg-primary font-heading font-bold px-2 py-1 md:hidden">
                 BG
               </Badge>
             </Link>
             <div className="hidden md:block text-sm text-muted-foreground">
               MVP Arena
             </div>
           </div>

           {/* Center: Navigation */}
           <nav className="hidden md:flex items-center space-x-6">
             {navItems.map((item) => (
               <Link
                 key={item.href}
                 href={item.href}
                 className={cn(
                   "text-sm font-medium transition-colors hover:text-primary",
                   pathname === item.href
                     ? "text-primary"
                     : "text-muted-foreground"
                 )}
               >
                 {item.label}
               </Link>
             ))}
           </nav>

           {/* Right: Actions */}
           <div className="flex items-center space-x-2 md:space-x-4">
             {/* Mobile Navigation */}
             <div className="flex md:hidden space-x-1">
               {navItems.map((item) => (
                 <Button
                   key={item.href}
                   variant={pathname === item.href ? "default" : "ghost"}
                   size="sm"
                   asChild
                 >
                   <Link href={item.href}>{item.label}</Link>
                 </Button>
               ))}
             </div>

             {/* Auth Actions - Placeholder for now */}
             <Button variant="outline" size="sm" asChild>
               <Link href="/auth">Login</Link>
             </Button>
             
             <ThemeToggle />
           </div>
         </div>
       </header>
     )
   }
   ```

3. **Create Page Structure**
   
   **Create `app/page.tsx` (Landing/Home):**
   ```typescript
   import Link from "next/link"
   import { Button } from "@/components/ui/button"
   import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
   import { Badge } from "@/components/ui/badge"

   export default function HomePage() {
     return (
       <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
         <div className="text-center space-y-6 mb-12">
           <Badge variant="outline" className="mb-4">
             Sprint 0 Foundation Complete
           </Badge>
           <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary">
             Builder Games MVP
           </h1>
           <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
             The gamified startup building arena where founders show up, ship live, and prove it
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button size="lg" asChild>
               <Link href="/auth">Get Started</Link>
             </Button>
             <Button variant="outline" size="lg" asChild>
               <Link href="/feed">View Feed</Link>
             </Button>
           </div>
         </div>

         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
           <Card>
             <CardHeader>
               <CardTitle className="font-heading">Activity Feed</CardTitle>
               <CardDescription>
                 See what builders are working on
               </CardDescription>
             </CardHeader>
             <CardContent>
               <Button variant="outline" className="w-full" asChild>
                 <Link href="/feed">View Feed</Link>
               </Button>
             </CardContent>
           </Card>

           <Card>
             <CardHeader>
               <CardTitle className="font-heading">Builder Profiles</CardTitle>
               <CardDescription>
                 Track progress and build reputation
               </CardDescription>
             </CardHeader>
             <CardContent>
               <Button variant="outline" className="w-full" asChild>
                 <Link href="/profile/demo">Demo Profile</Link>
               </Button>
             </CardContent>
           </Card>

           <Card>
             <CardHeader>
               <CardTitle className="font-heading">Authentication</CardTitle>
               <CardDescription>
                 Sign up and join the arena
               </CardDescription>
             </CardHeader>
             <CardContent>
               <Button variant="outline" className="w-full" asChild>
                 <Link href="/auth">Sign Up</Link>
               </Button>
             </CardContent>
           </Card>
         </div>
       </div>
     )
   }
   ```

   **Create `app/feed/page.tsx`:**
   ```typescript
   import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
   import { Badge } from "@/components/ui/badge"

   export default async function FeedPage() {
     return (
       <div className="container mx-auto px-4 py-8 max-w-4xl">
         <div className="space-y-6">
           <div>
             <h1 className="font-heading text-2xl md:text-4xl font-bold mb-2">
               Activity Feed
             </h1>
             <p className="text-muted-foreground">
               Main feed aggregating updates from all builders. Will implement in Sprint 1.
             </p>
           </div>

           <Badge variant="outline">
             🔄 Coming in Sprint 1: Story 1.4 - Main Activity Feed Display
           </Badge>

           <Card>
             <CardHeader>
               <CardTitle className="font-heading">Planned Features</CardTitle>
               <CardDescription>
                 What you'll see here after Sprint 1 implementation
               </CardDescription>
             </CardHeader>
             <CardContent className="space-y-4">
               <div className="space-y-2">
                 <h4 className="font-heading font-semibold">Feed Display</h4>
                 <p className="text-sm text-muted-foreground">
                   Posts from all builders, sorted by most recent first
                 </p>
               </div>
               <div className="space-y-2">
                 <h4 className="font-heading font-semibold">Tag Filtering</h4>
                 <p className="text-sm text-muted-foreground">
                   Filter by "Update", "Cry for help", "Celebration", "Testers wanted", "Knowledge Share"
                 </p>
               </div>
               <div className="space-y-2">
                 <h4 className="font-heading font-semibold">Real-time Updates</h4>
                 <p className="text-sm text-muted-foreground">
                   New posts appear instantly using Supabase Realtime
                 </p>
               </div>
               <div className="space-y-2">
                 <h4 className="font-heading font-semibold">Post Composer</h4>
                 <p className="text-sm text-muted-foreground">
                   Create new posts directly from this page
                 </p>
               </div>
             </CardContent>
           </Card>
         </div>
       </div>
     )
   }
   ```

   **Create `app/profile/[username]/page.tsx`:**
   ```typescript
   import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
   import { Badge } from "@/components/ui/badge"
   import { notFound } from "next/navigation"

   interface ProfilePageProps {
     params: Promise<{ username: string }>
   }

   export default async function ProfilePage({ params }: ProfilePageProps) {
     const { username } = await params
     
     // For demo purposes, only allow 'demo' username
     if (username !== 'demo') {
       notFound()
     }

     return (
       <div className="container mx-auto px-4 py-8 max-w-4xl">
         <div className="space-y-6">
           <div>
             <h1 className="font-heading text-2xl md:text-4xl font-bold mb-2">
               Builder Profile: {username}
             </h1>
             <p className="text-muted-foreground">
               Individual builder profiles with personal feeds. Will implement in Sprint 1.
             </p>
           </div>

           <Badge variant="outline">
             🔄 Coming in Sprint 1: Story 1.2 - Builder Profile Creation & Display
           </Badge>

           <div className="grid gap-6 md:grid-cols-2">
             <Card>
               <CardHeader>
                 <CardTitle className="font-heading">Profile Card</CardTitle>
                 <CardDescription>Personal information display</CardDescription>
               </CardHeader>
               <CardContent className="space-y-2">
                 <p className="text-sm text-muted-foreground">• Avatar (default or uploaded)</p>
                 <p className="text-sm text-muted-foreground">• Username</p>
                 <p className="text-sm text-muted-foreground">• Bio (editable)</p>
               </CardContent>
             </Card>

             <Card>
               <CardHeader>
                 <CardTitle className="font-heading">XP & Reputation</CardTitle>
                 <CardDescription>Gamification metrics</CardDescription>
               </CardHeader>
               <CardContent className="space-y-2">
                 <p className="text-sm text-muted-foreground">• XP Balance display</p>
                 <p className="text-sm text-muted-foreground">• "Helped X Builders" count</p>
                 <p className="text-sm text-muted-foreground">• "Received X Props" count</p>
               </CardContent>
             </Card>

             <Card className="md:col-span-2">
               <CardHeader>
                 <CardTitle className="font-heading">Personal Feed</CardTitle>
                 <CardDescription>This builder's posts and activity</CardDescription>
               </CardHeader>
               <CardContent className="space-y-2">
                 <p className="text-sm text-muted-foreground">• Personal post history</p>
                 <p className="text-sm text-muted-foreground">• Post composer for quick updates</p>
                 <p className="text-sm text-muted-foreground">• Pagination for large post volumes</p>
               </CardContent>
             </Card>
           </div>
         </div>
       </div>
     )
   }
   ```

   **Create `app/auth/page.tsx`:**
   ```typescript
   import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
   import { Badge } from "@/components/ui/badge"

   export default function AuthPage() {
     return (
       <div className="container mx-auto px-4 py-8 max-w-2xl">
         <div className="space-y-6">
           <div className="text-center">
             <h1 className="font-heading text-2xl md:text-4xl font-bold mb-2">
               Join Builder Games
             </h1>
             <p className="text-muted-foreground">
               Authentication system will be implemented in Sprint 1.
             </p>
           </div>

           <Badge variant="outline" className="w-fit mx-auto">
             🔄 Coming in Sprint 1: Story 1.1 - Builder Account Creation & Login
           </Badge>

           <div className="grid gap-6">
             <Card>
               <CardHeader>
                 <CardTitle className="font-heading">Email/Password Auth</CardTitle>
                 <CardDescription>Traditional signup and login</CardDescription>
               </CardHeader>
               <CardContent className="space-y-2">
                 <p className="text-sm text-muted-foreground">• Secure password hashing</p>
                 <p className="text-sm text-muted-foreground">• Email verification flow</p>
                 <p className="text-sm text-muted-foreground">• Password reset capability</p>
               </CardContent>
             </Card>

             <Card>
               <CardHeader>
                 <CardTitle className="font-heading">OAuth Integration</CardTitle>
                 <CardDescription>Social login options</CardDescription>
               </CardHeader>
               <CardContent className="space-y-2">
                 <p className="text-sm text-muted-foreground">• GitHub OAuth (developer-focused)</p>
                 <p className="text-sm text-muted-foreground">• Google OAuth (broad appeal)</p>
                 <p className="text-sm text-muted-foreground">• Additional providers as needed</p>
               </CardContent>
             </Card>

             <Card>
               <CardHeader>
                 <CardTitle className="font-heading">Session Management</CardTitle>
                 <CardDescription>Secure user sessions</CardDescription>
               </CardHeader>
               <CardContent className="space-y-2">
                 <p className="text-sm text-muted-foreground">• Supabase Auth integration</p>
                 <p className="text-sm text-muted-foreground">• Automatic session refresh</p>
                 <p className="text-sm text-muted-foreground">• Secure logout functionality</p>
               </CardContent>
             </Card>
           </div>
         </div>
       </div>
     )
   }
   ```

   **Create `app/not-found.tsx`:**
   ```typescript
   import Link from 'next/link'
   import { Button } from '@/components/ui/button'
   import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

   export default function NotFound() {
     return (
       <div className="container mx-auto px-4 py-16 max-w-2xl text-center">
         <Card>
           <CardHeader>
             <CardTitle className="font-heading text-2xl">Page Not Found</CardTitle>
             <CardDescription>
               The page you're looking for doesn't exist yet.
             </CardDescription>
           </CardHeader>
           <CardContent className="space-y-4">
             <p className="text-sm text-muted-foreground">
               This might be a feature that's coming in Sprint 1, or you might have mistyped the URL.
             </p>
             <div className="flex flex-col sm:flex-row gap-2 justify-center">
               <Button asChild>
                 <Link href="/">Go Home</Link>
               </Button>
               <Button variant="outline" asChild>
                 <Link href="/feed">View Feed</Link>
               </Button>
             </div>
           </CardContent>
         </Card>
       </div>
     )
   }
   ```

#### Testing Your Implementation

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Test navigation:**
   - Visit http://localhost:3000 - should show landing page
   - Click navigation links - should navigate without page refresh
   - Test mobile responsiveness by resizing browser
   - Verify theme toggle works in header

3. **Test all routes:**
   - `/` - Landing page
   - `/feed` - Activity feed placeholder
   - `/profile/demo` - Demo profile page
   - `/auth` - Authentication placeholder
   - `/profile/invalid` - Should show 404 page

#### Troubleshooting
- **Hydration errors:** Make sure suppressHydrationWarning is in html element
- **Navigation not working:** Check that all Link components import from 'next/link'
- **Mobile nav issues:** Verify responsive classes are applied correctly
- **Theme toggle not in header:** Check Header component import in layout.tsx

#### Acceptance Criteria Checklist
- [x] Root layout includes Header component
- [x] Header has sticky positioning and HUD-like styling per PRD
- [x] Navigation links to /feed, /profile/[username], /auth
- [x] ThemeToggle integrated in Header
- [x] All placeholder pages created and accessible
- [x] Navigation state management works (active states)
- [x] Theme applies correctly across all pages
- [x] Responsive design works on desktop browsers
- [x] Mobile navigation functional (collapsed on mobile)
- [x] 404 page handles invalid routes
- [x] Next.js 15.3.3 async params compatibility

**✅ COMPLETED:** Header component with sticky positioning and backdrop blur. Complete navigation structure with placeholder pages for /feed, /profile/[username], /auth. Mobile responsiveness improvements added. All pages use consistent theming and typography. Next.js 15.3.3 async params compatibility implemented.

---

## 🚀 Getting Started (For New Developers)

### Prerequisites
- **Node.js 18+** (check with `node --version`)
- **Git** installed and configured
- **Code editor** (VS Code recommended)
- **Supabase account** (free tier is fine)

### Quick Start Guide

1. **Navigate to Project Directory**
   ```bash
   cd /path/to/BMAD-METHOD-3/builder-games-mvp
   ```

2. **Follow Implementation Order**
   - ✅ Story 0.1: Next.js & Git setup
   - ✅ Story 0.2: Supabase connection  
   - ✅ Story 1.9: Theme & typography
   - ✅ Story 1.10: Navigation & UI shell

3. **Verify Everything Works**
   ```bash
   npm run dev
   # Should start on http://localhost:3000
   # Test navigation between all pages
   # Test theme toggle functionality
   # Check mobile responsiveness
   ```

### Common Issues for New Developers

**Build Errors:**
- Run `npm install` if dependencies are missing
- Clear `.next` folder: `rm -rf .next && npm run dev`
- Check Node.js version matches requirements

**Supabase Connection Issues:**
- Verify environment variables in `.env.local`
- Check Supabase project is not paused
- Ensure API keys are copied correctly

**Styling Issues:**
- Clear browser cache and hard refresh
- Check Tailwind classes are compiling
- Verify component imports from correct paths

## 🎯 Sprint 0 Success Criteria

When complete, you should have:
- ✅ Working Next.js app with TypeScript and proper code quality tools
- ✅ Supabase connected and configured for authentication
- ✅ Dark/light theme switching with PRD color system
- ✅ HUD-like navigation between all core pages
- ✅ Responsive design working on desktop browsers
- ✅ Foundation ready for Sprint 1 features

## 🏆 SPRINT 0 COMPLETE: 4/4 Stories Complete (100%)

**COMPLETED STORIES:**
- ✅ Story 0.1: Next.js Project & Git Setup
- ✅ Story 0.2: Supabase Setup & Environment
- ✅ Story 1.9: Theme & Typography Implementation
- ✅ Story 1.10: Core UI Shell & Navigation

## 🎯 Next Steps: Sprint 1

**Ready to begin Sprint 1 with these stories in order:**

1. **Story 1.1: Builder Account Creation & Login** *(Start here)*
   - Email/password and OAuth authentication
   - Secure session management
   - Login/signup forms with Shadcn UI

2. Story 1.2: Builder Profile Creation & Display
3. Story 1.3: Builder Post Creation  
4. Story 1.6: PostItem Component Implementation
5. Story 1.4: Main Activity Feed Display
6. Story 1.5: Builder Personal Feed Display
7. Story 1.7: Backend Setup for Notifications Table *(Moved from Sprint 0)*
8. Story 1.8: Frontend Display of Notifications

**Why This Order:** Authentication enables all user-specific features. Profiles, posts, and feeds build on authenticated users. Notifications come after there are users and content to notify about.

## 📞 Need Help?

### Resources
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### PRD Alignment
- All Sprint 0 work directly supports PRD requirements
- Each story clearly states which PRD requirements it fulfills
- Implementation choices match PRD specifications exactly

### Story Files
- All stories have detailed acceptance criteria and technical guidance
- Dependencies are clearly marked
- Implementation steps are numbered and specific 