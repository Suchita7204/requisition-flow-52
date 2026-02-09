import { RequisitionStatus, Priority } from "@/types/requisition";

const statusConfig: Record<RequisitionStatus, { label: string; className: string }> = {
  pending: { label: "Pending", className: "bg-warning/15 text-warning border-warning/30" },
  approved: { label: "Approved", className: "bg-info/15 text-info border-info/30" },
  issued: { label: "Issued", className: "bg-success/15 text-success border-success/30" },
  rejected: { label: "Rejected", className: "bg-destructive/15 text-destructive border-destructive/30" },
};

const priorityConfig: Record<Priority, { label: string; className: string }> = {
  low: { label: "Low", className: "bg-muted text-muted-foreground" },
  normal: { label: "Normal", className: "bg-secondary text-secondary-foreground" },
  high: { label: "High", className: "bg-destructive/15 text-destructive" },
};

export function StatusBadge({ status }: { status: RequisitionStatus }) {
  const config = statusConfig[status];
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${config.className}`}>
      {config.label}
    </span>
  );
}

export function PriorityBadge({ priority }: { priority: Priority }) {
  const config = priorityConfig[priority];
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${config.className}`}>
      {priority === "high" && "⚡ "}{config.label}
    </span>
  );
}
