import Link from "next/link"

import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"

interface NavbarItemProps {
  href: string
  children: React.ReactNode
}

interface NavbarSidebarItemProps {
  href: string
  children: React.ReactNode
  onClick: (open: boolean) => void
}

const NavbarSidebarItem = ({
  href,
  children,
  onClick,
}: NavbarSidebarItemProps) => {
  return (
    <Link
      key={href}
      href={href}
      className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
      onClick={() => onClick(false)}
    >
      {children}
    </Link>
  )
}

interface NavbarSidebarProps {
  items: NavbarItemProps[]
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function NavbarSidebar({
  items,
  open,
  onOpenChange,
}: NavbarSidebarProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea>
          {items.map((item) => (
            <NavbarSidebarItem
              key={item.href}
              href={item.href}
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </NavbarSidebarItem>
          ))}
          <div className="border-t">
            <NavbarSidebarItem
              href="/sign-in"
              onClick={() => onOpenChange(false)}
            >
              Login
            </NavbarSidebarItem>

            <NavbarSidebarItem
              href="/sign-in"
              onClick={() => onOpenChange(false)}
            >
              Start selling
            </NavbarSidebarItem>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
