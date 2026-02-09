import { FileText, Clock, CheckCircle, Package, XCircle, AlertTriangle } from "lucide-react";
import { mockStats, mockRequisitions } from "@/data/mockData";
import StatCard from "@/components/StatCard";
import { StatusBadge, PriorityBadge } from "@/components/StatusBadge";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const recentRequests = mockRequisitions.slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-header">Dashboard</h1>
        <p className="page-subtitle">Overview of requisition activity and inventory status</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard title="Total Requests" value={mockStats.totalRequests} icon={FileText} />
        <StatCard title="Pending" value={mockStats.pendingRequests} icon={Clock} variant="warning" />
        <StatCard title="Approved" value={mockStats.approvedRequests} icon={CheckCircle} variant="info" />
        <StatCard title="Issued" value={mockStats.issuedRequests} icon={Package} variant="success" />
        <StatCard title="Rejected" value={mockStats.rejectedRequests} icon={XCircle} />
        <StatCard title="Low Stock" value={mockStats.lowStockItems} icon={AlertTriangle} variant="warning" />
      </div>

      <div className="bg-card border border-border rounded-lg">
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="text-sm font-semibold text-foreground">Recent Requisitions</h2>
          <Link to="/requests" className="text-xs font-medium text-primary hover:underline">
            View All →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">ID</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Department</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Items</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Priority</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {recentRequests.map((req) => (
                <tr key={req.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-3 font-mono text-xs font-medium text-primary">{req.id}</td>
                  <td className="px-5 py-3 text-foreground">{req.department}</td>
                  <td className="px-5 py-3 text-muted-foreground">
                    {req.items.map((i) => i.name).join(", ")}
                  </td>
                  <td className="px-5 py-3"><PriorityBadge priority={req.priority} /></td>
                  <td className="px-5 py-3"><StatusBadge status={req.status} /></td>
                  <td className="px-5 py-3 text-muted-foreground">{req.dateRequested}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
