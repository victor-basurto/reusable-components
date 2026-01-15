"use client";
import React, { FC, JSX } from "react";
import { IconName, IconSelectorProps } from "@/types/ui";
import {
  Sun,
  Moon,
  Search,
  User,
  Settings,
  Home,
  X,
  CircleX,
  Minus,
  LoaderCircle,
  Info,
  CircleCheck,
  TriangleAlert,
  LogOut,
  Mail,
  AtSign,
  Lock,
  MapPinHouse,
  Building2,
  Binary,
  Phone,
  Check,
  ChevronDown,
} from "lucide-react";

const icons: Record<IconName, FC<{ className?: string }>> = {
  sun: Sun,
  moon: Moon,
  search: Search,
  user: User,
  settings: Settings,
  home: Home,
  minus: Minus,
  close: X,
  circleclose: CircleX,
  circlecheck: CircleCheck,
  info: Info,
  trianglealert: TriangleAlert,
  loader: LoaderCircle,
  logout: LogOut,
  email: Mail,
  atsign: AtSign,
  lock: Lock,
  mapPinHouse: MapPinHouse,
  building: Building2,
  binary: Binary,
  phone: Phone,
  check: Check,
  chevrondown: ChevronDown,
};
/**
 * @name Icon
 * @param IconSelectorProps - name: IconName, className: string
 * @returns [lucide icon]
 *
 * @example usage: <Icon name="settings" className="m-4 inline" />
 */
export const Icon: React.FC<IconSelectorProps> = ({
  name,
  className,
}): JSX.Element => {
  const SelectedIcon = icons[name];
  if (!SelectedIcon) {
    return <span className={className}>({name})?</span>; // default icon or nothing
  }
  return <SelectedIcon className={className} />;
};
