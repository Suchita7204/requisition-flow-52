export type RequisitionStatus = "pending" | "approved" | "rejected" | "issued";
export type Priority = "low" | "normal" | "high";
export type UserRole = "department" | "store_officer" | "admin";

export interface RequisitionItem {
  name: string;
  quantity: number;
  unit: string;
}

export interface Requisition {
  id: string;
  department: string;
  requestedBy: string;
  items: RequisitionItem[];
  status: RequisitionStatus;
  priority: Priority;
  dateRequested: string;
  dateApproved?: string;
  dateIssued?: string;
  approvedBy?: string;
  remarks?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  stock: number;
  unit: string;
  reorderLevel: number;
}

export interface DashboardStats {
  totalRequests: number;
  pendingRequests: number;
  approvedRequests: number;
  issuedRequests: number;
  rejectedRequests: number;
  lowStockItems: number;
}
