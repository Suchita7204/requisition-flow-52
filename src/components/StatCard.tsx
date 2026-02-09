import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  variant?: "default" | "warning" | "success" | "info";
}

const variantStyles = {
  default: "text-foreground",
  warning: "text-warning",
  success: "text-success",
  info: "text-info",
};

export default function StatCard({ title, value, icon: Icon, variant = "default" }: StatCardProps) {
  return (
    <div className="stat-card flex items-start justify-between">
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{title}</p>
        <p className={`text-3xl font-bold mt-1 ${variantStyles[variant]}`}>{value}</p>
      </div>
      <div className={`p-2.5 rounded-lg bg-muted`}>
        <Icon className={`h-5 w-5 ${variantStyles[variant] === "text-foreground" ? "text-muted-foreground" : variantStyles[variant]}`} />
      </div>
    </div>
  );
}
