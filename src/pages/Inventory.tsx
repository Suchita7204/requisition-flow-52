import { mockInventory } from "@/data/mockData";
import { AlertTriangle } from "lucide-react";

export default function Inventory() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-header">Inventory</h1>
        <p className="page-subtitle">Current stock levels and item availability</p>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Item</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Category</th>
              <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Stock</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Unit</th>
              <th className="text-right px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Reorder Level</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {mockInventory.map((item) => {
              const isLow = item.stock <= item.reorderLevel;
              return (
                <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-3 font-medium text-foreground">{item.name}</td>
                  <td className="px-5 py-3 text-muted-foreground">{item.category}</td>
                  <td className={`px-5 py-3 text-right font-mono font-medium ${isLow ? "text-destructive" : "text-foreground"}`}>
                    {item.stock}
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{item.unit}</td>
                  <td className="px-5 py-3 text-right font-mono text-muted-foreground">{item.reorderLevel}</td>
                  <td className="px-5 py-3">
                    {isLow ? (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-warning">
                        <AlertTriangle className="h-3.5 w-3.5" /> Low Stock
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-success">In Stock</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
