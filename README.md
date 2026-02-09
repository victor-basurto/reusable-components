This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Goal 🚀

### NextJS Reusable Components Library

This project is a collection of reusable UI components built with Next.js (App Router), TypeScript, Tailwind CSS, and Radix UI primitives (where needed).
Feel free to copy any component into your own project, extend it, or contribute new ones!
Component Checklist:

#### Navigation

- [ ] `<Breadcrumbs>` – Navigation breadcrumb trail
- [x] `<Drawer>` – Slide-in panel (mobile-friendly alternative to modal)
- [ ] `<DropdownMenu>` – Right-click or button-triggered menu
- [ ] `<NavigationMenu>` – Horizontal navigation with dropdowns (desktop-friendly)
- [ ] `<Pagination>` – Page navigation with previous/next and page numbers
- [ ] `<Tabs>` – Tabbed interface

#### Cards

- [ ] `<Avatar>` – Image or fallback avatar with status indicator
- [ ] `<Badge>` – Small status/label badge with multiple variants
- [ ] `<Card>` – Flexible card container with header, footer, and content slots
- [ ] `<HoverCard>` – Card that appears on hover
- [ ] `<Skeleton>` – Loading placeholder component

#### Dialogs

- [x] `<Alert>` – Info, success, warning, and error alerts
- [x] `<AlertDialog>` – Destructive/confirm action modal
- [ ] `<Combobox>` – Autocomplete / searchable dropdown
- [x] `<Dialog>` (Modal) – Accessible modal with overlay, close button, and focus trap (In-Progress)
- [x] `<Icon>` – Simple Icon selector using Lucide Icons
- [x] `<Popover>` – Small overlay triggered by hover/click
- [ ] `<Sonner>` integration – Optional beautiful toast alternative
- [x] `<Tooltip>` – Simple text tooltip
- [x] `<Toast>` / `<Toaster>` – Notification system

#### Form

- [x] `<Button>` – Versatile button with variants (primary, secondary, outline, ghost, destructive), sizes, loading state, and icon support
- [x] `<Checkbox>` – Single checkbox with indeterminate state
- [x] `<Form>` + zod integration – Reusable form wrapper with validation
- [x] `<Input>` – Text input with label, error state, helper text, and prefix/suffix support
- [x] `<Label>` – Accessible form label
- [x] `<Progress>` – Progress bar (determinate & indeterminate)
- [x] `<RadioGroup>` – Radio button group
- [x] `<Switch>` – Toggle switch
- [x] `<Select>` – Custom dropdown/select
- [x] `<Slider>` – Range slider input
- [x] `<Spinner>` / `<Loader>` – Loading spinners in various sizes
- [x] `<Textarea>` – Multiline text input with auto-resize option
- [x] `<Toggle>` – Single toggle button (like bold/italic in editors)
- [x] `<ToggleGroup>` – Group of toggle buttons (exclusive or multiple)

#### Table

- [x] `<DataTable>` – Advanced table with filtering, sorting, pagination (built on TanStack Table)
- [x] `<Separator>` – Horizontal or vertical divider
- [x] `<Table>` – Responsive data table with sorting, selection, etc.

#### Misc

- [ ] `<Accordion>` – Collapsible content sections
- [ ] `<AspectRatio>` – Maintain aspect ratio for images/videos
- [ ] `<Carousel>` – Image/content carousel with swipe support
- [ ] `<Command>` – Fast command palette (like Cmd+K menus)
- [ ] `<CopyButton>` – Button that copies text to clipboard
- [ ] `<ErrorBoundary>` – Component-level error boundary with fallback UI
- [ ] `<Kbd>` – Keyboard key styling component
- [ ] `<ScrollArea>` – Custom scrollbar area for long content
- [ ] `<Sheet>` – Side sheet (alternative drawer implementation)
- [ ] `<SuspenseFallback>` – Standardized loading fallback for React Suspense
- [x] `<ThemeProvider>` & `<ThemeToggle>` – Dark/light mode switcher
