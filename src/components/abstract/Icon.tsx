import { FC, JSX } from "react";
import { IconName, IconSelectorProps } from "@/types/ui";
import { Sun, Moon, Search, User, Settings, Home } from "lucide-react";

const icons: Record<IconName, FC<{ className?: string }>> = {
  sun: Sun,
  moon: Moon,
  search: Search,
  user: User,
  settings: Settings,
  home: Home,
};
/**
 * @name Icon
 * @param IconSelectorProps - name: IconName, className: string
 * @returns [lucide icon]
 *
 * @example usage: <Icon name="settings" className="m-4 inline" />
 */
export const Icon = ({ name, className }: IconSelectorProps): JSX.Element => {
  const SelectedIcon = icons[name];
  return <SelectedIcon className={className} />;
};
