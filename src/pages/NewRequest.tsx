import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { departments, mockInventory } from "@/data/mockData";
import { Plus, Trash2, Send } from "lucide-react";
import { toast } from "sonner";

interface RequestItem {
  name: string;
  quantity: string;
  unit: string;
}

export default function NewRequest() {
  const [department, setDepartment] = useState("");
  const [priority, setPriority] = useState("normal");
  const [remarks, setRemarks] = useState("");
  const [items, setItems] = useState<RequestItem[]>([{ name: "", quantity: "", unit: "" }]);

  const addItem = () => setItems([...items, { name: "", quantity: "", unit: "" }]);

  const removeItem = (index: number) => {
    if (items.length > 1) setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: keyof RequestItem, value: string) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    // Auto-fill unit from inventory
    if (field === "name") {
      const inv = mockInventory.find((i) => i.name === value);
      if (inv) updated[index].unit = inv.unit;
    }
    setItems(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Requisition submitted successfully!", {
      description: "Your request has been sent for approval.",
    });
    setDepartment("");
    setPriority("normal");
    setRemarks("");
    setItems([{ name: "", quantity: "", unit: "" }]);
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="page-header">New Requisition</h1>
        <p className="page-subtitle">Submit a new request for supplies or materials</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Department</Label>
            <Select value={department} onValueChange={setDepartment}>
              <SelectTrigger><SelectValue placeholder="Select department" /></SelectTrigger>
              <SelectContent>
                {departments.map((d) => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Priority</Label>
            <Select value={priority} onValueChange={setPriority}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label>Items Requested</Label>
            <Button type="button" variant="outline" size="sm" onClick={addItem}>
              <Plus className="h-3.5 w-3.5 mr-1" /> Add Item
            </Button>
          </div>
          {items.map((item, index) => (
            <div key={index} className="flex gap-3 items-end">
              <div className="flex-1 space-y-1">
                {index === 0 && <span className="text-xs text-muted-foreground">Item Name</span>}
                <Select value={item.name} onValueChange={(v) => updateItem(index, "name", v)}>
                  <SelectTrigger><SelectValue placeholder="Select item" /></SelectTrigger>
                  <SelectContent>
                    {mockInventory.map((inv) => (
                      <SelectItem key={inv.id} value={inv.name}>
                        {inv.name} (Stock: {inv.stock})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-24 space-y-1">
                {index === 0 && <span className="text-xs text-muted-foreground">Qty</span>}
                <Input
                  type="number"
                  min="1"
                  placeholder="0"
                  value={item.quantity}
                  onChange={(e) => updateItem(index, "quantity", e.target.value)}
                />
              </div>
              <div className="w-20 space-y-1">
                {index === 0 && <span className="text-xs text-muted-foreground">Unit</span>}
                <Input value={item.unit} readOnly className="bg-muted" />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeItem(index)}
                className="text-muted-foreground hover:text-destructive shrink-0"
                disabled={items.length === 1}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <Label>Remarks / Justification</Label>
          <Textarea
            placeholder="Provide any additional details or justification..."
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            rows={3}
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit" className="gap-2">
            <Send className="h-4 w-4" /> Submit Requisition
          </Button>
        </div>
      </form>
    </div>
  );
}
