import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface LoaderProps {
  className?: string;
  iconSize?: number;
}

export const LoaderRounded: React.FC<LoaderProps> = ({
  className,
  iconSize,
}) => {
  return (
    <Loader2
      size={iconSize ? iconSize : undefined}
      className={cn("animate-spin", className, iconSize ? "" : "h-5 w-5")}
    />
  );
};
