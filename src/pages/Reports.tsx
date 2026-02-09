import { mockRequisitions, mockStats } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const statusData = [
  { name: "Pending", value: mockStats.pendingRequests, color: "hsl(38, 92%, 50%)" },
  { name: "Approved", value: mockStats.approvedRequests, color: "hsl(215, 70%, 45%)" },
  { name: "Issued", value: mockStats.issuedRequests, color: "hsl(160, 50%, 42%)" },
  { name: "Rejected", value: mockStats.rejectedRequests, color: "hsl(0, 72%, 51%)" },
];

const deptData = Object.entries(
  mockRequisitions.reduce<Record<string, number>>((acc, r) => {
    acc[r.department] = (acc[r.department] || 0) + 1;
    return acc;
  }, {})
).map(([name, count]) => ({ name, count }));

export default function Reports() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-header">Reports</h1>
        <p className="page-subtitle">Analytics and summary of requisition activity</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Requests by Status</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={statusData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" paddingAngle={3}>
                  {statusData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            {statusData.map((s) => (
              <div key={s.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                {s.name} ({s.value})
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Requests by Department</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deptData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 88%)" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="count" fill="hsl(215, 70%, 45%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
