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
Component Checklist

- [ ] `<Button>` – Versatile button with variants (primary, secondary, outline, ghost, destructive), sizes, loading state, and icon support
- [ ] `<Input>` – Text input with label, error state, helper text, and prefix/suffix support
- [ ] `<Textarea>` – Multiline text input with auto-resize option
- [ ] `<Label>` – Accessible form label
- [ ] `<Checkbox>` – Single checkbox with indeterminate state
- [ ] `<RadioGroup>` – Radio button group
- [ ] `<Switch>` – Toggle switch
- [ ] `<Select>` – Custom dropdown/select (using Radix + Headless UI style)
- [ ] `<Combobox>` – Autocomplete / searchable dropdown
- [ ] `<Dialog>` (Modal) – Accessible modal with overlay, close button, and focus trap (In-Progress)
- [ ] `<Drawer>` – Slide-in panel (mobile-friendly alternative to modal)
- [ ] `<Popover>` – Small overlay triggered by hover/click
- [ ] `<Tooltip>` – Simple text tooltip
- [ ] `<Toast>` / `<Toaster>` – Notification system
- [ ] `<Alert>` – Info, success, warning, and error alerts
- [ ] `<AlertDialog>` – Destructive/confirm action modal
- [ ] `<Card>` – Flexible card container with header, footer, and content slots
- [ ] `<Avatar>` – Image or fallback avatar with status indicator
- [ ] `<Badge>` – Small status/label badge with multiple variants
- [ ] `<Skeleton>` – Loading placeholder component
- [ ] `<Spinner>` / `<Loader>` – Loading spinners in various sizes
- [ ] `<Separator>` – Horizontal or vertical divider
- [ ] `<Accordion>` – Collapsible content sections
- [ ] `<Tabs>` – Tabbed interface
- [ ] `<DropdownMenu>` – Right-click or button-triggered menu
- [ ] `<NavigationMenu>` – Horizontal navigation with dropdowns (desktop-friendly)
- [ ] `<Breadcrumbs>` – Navigation breadcrumb trail
- [ ] `<Pagination>` – Page navigation with previous/next and page numbers
- [ ] `<Table>` – Responsive data table with sorting, selection, etc.
- [ ] `<DataTable>` – Advanced table with filtering, sorting, pagination (built on TanStack Table)
- [ ] `<Progress>` – Progress bar (determinate & indeterminate)
- [ ] `<Slider>` – Range slider input
- [ ] `<Toggle>` – Single toggle button (like bold/italic in editors)
- [ ] `<ToggleGroup>` – Group of toggle buttons (exclusive or multiple)
- [ ] `<AspectRatio>` – Maintain aspect ratio for images/videos
- [ ] `<Carousel>` – Image/content carousel with swipe support
- [ ] `<Command>` – Fast command palette (like Cmd+K menus)
- [ ] `<Kbd>` – Keyboard key styling component
- [ ] `<CopyButton>` – Button that copies text to clipboard
- [ ] `<HoverCard>` – Card that appears on hover
- [ ] `<ScrollArea>` – Custom scrollbar area for long content
- [ ] `<Sheet>` – Side sheet (alternative drawer implementation)
- [ ] `<Sonner>` integration – Optional beautiful toast alternative
- [ ] `<Form>` + zod integration – Reusable form wrapper with validation
- [x] `<ThemeProvider>` & `<ThemeToggle>` – Dark/light mode switcher
- [ ] `<ErrorBoundary>` – Component-level error boundary with fallback UI
- [ ] `<SuspenseFallback>` – Standardized loading fallback for React Suspense
