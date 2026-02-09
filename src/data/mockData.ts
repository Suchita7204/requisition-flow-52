import { Requisition, InventoryItem, DashboardStats } from "@/types/requisition";

export const mockRequisitions: Requisition[] = [
  {
    id: "REQ-2026-001",
    department: "Computer Science",
    requestedBy: "Dr. Sharma",
    items: [
      { name: "A4 Paper (500 sheets)", quantity: 10, unit: "Ream" },
      { name: "Whiteboard Markers", quantity: 24, unit: "Pcs" },
    ],
    status: "approved",
    priority: "normal",
    dateRequested: "2026-02-05",
    dateApproved: "2026-02-06",
    approvedBy: "Store Officer",
    remarks: "Approved for semester use",
  },
  {
    id: "REQ-2026-002",
    department: "Physics",
    requestedBy: "Prof. Patel",
    items: [
      { name: "Lab Notebooks", quantity: 50, unit: "Pcs" },
      { name: "Pen Drives 32GB", quantity: 5, unit: "Pcs" },
    ],
    status: "pending",
    priority: "high",
    dateRequested: "2026-02-08",
    remarks: "Urgent requirement for lab sessions",
  },
  {
    id: "REQ-2026-003",
    department: "Mathematics",
    requestedBy: "Dr. Kumar",
    items: [
      { name: "Chalk (White)", quantity: 20, unit: "Box" },
      { name: "Duster", quantity: 5, unit: "Pcs" },
    ],
    status: "issued",
    priority: "normal",
    dateRequested: "2026-02-01",
    dateApproved: "2026-02-02",
    dateIssued: "2026-02-03",
    approvedBy: "Store Officer",
    remarks: "Issued from store",
  },
  {
    id: "REQ-2026-004",
    department: "English",
    requestedBy: "Prof. Mehta",
    items: [
      { name: "Printer Cartridge (Black)", quantity: 2, unit: "Pcs" },
    ],
    status: "rejected",
    priority: "low",
    dateRequested: "2026-01-28",
    approvedBy: "Store Officer",
    remarks: "Out of budget allocation",
  },
  {
    id: "REQ-2026-005",
    department: "Computer Science",
    requestedBy: "Dr. Sharma",
    items: [
      { name: "Ethernet Cable (Cat6)", quantity: 10, unit: "Pcs" },
      { name: "Cable Ties", quantity: 100, unit: "Pcs" },
    ],
    status: "pending",
    priority: "normal",
    dateRequested: "2026-02-09",
    remarks: "Lab network maintenance",
  },
];

export const mockInventory: InventoryItem[] = [
  { id: "INV-001", name: "A4 Paper (500 sheets)", category: "Stationery", stock: 150, unit: "Ream", reorderLevel: 50 },
  { id: "INV-002", name: "Whiteboard Markers", category: "Stationery", stock: 80, unit: "Pcs", reorderLevel: 30 },
  { id: "INV-003", name: "Lab Notebooks", category: "Stationery", stock: 12, unit: "Pcs", reorderLevel: 25 },
  { id: "INV-004", name: "Pen Drives 32GB", category: "IT Supplies", stock: 8, unit: "Pcs", reorderLevel: 10 },
  { id: "INV-005", name: "Chalk (White)", category: "Classroom", stock: 45, unit: "Box", reorderLevel: 15 },
  { id: "INV-006", name: "Duster", category: "Classroom", stock: 30, unit: "Pcs", reorderLevel: 10 },
  { id: "INV-007", name: "Printer Cartridge (Black)", category: "IT Supplies", stock: 3, unit: "Pcs", reorderLevel: 5 },
  { id: "INV-008", name: "Ethernet Cable (Cat6)", category: "IT Supplies", stock: 25, unit: "Pcs", reorderLevel: 10 },
  { id: "INV-009", name: "Stapler", category: "Stationery", stock: 15, unit: "Pcs", reorderLevel: 5 },
  { id: "INV-010", name: "File Folders", category: "Stationery", stock: 200, unit: "Pcs", reorderLevel: 50 },
];

export const mockStats: DashboardStats = {
  totalRequests: 42,
  pendingRequests: 8,
  approvedRequests: 18,
  issuedRequests: 12,
  rejectedRequests: 4,
  lowStockItems: 3,
};

export const departments = [
  "Computer Science",
  "Physics",
  "Chemistry",
  "Mathematics",
  "English",
  "History",
  "Economics",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Civil Engineering",
];

export const itemCategories = ["Stationery", "IT Supplies", "Classroom", "Lab Equipment", "Cleaning", "Furniture"];
