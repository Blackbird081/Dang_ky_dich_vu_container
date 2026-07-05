import type { CSSProperties } from 'react';

export const root = (isMobile: boolean): CSSProperties => ({
  fontFamily: "'Roboto', sans-serif",
  background: '#f0f2f5',
  minHeight: '100vh',
  padding: isMobile ? '8px' : '16px',
});

export const header: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: 20,
};
export const headerTitle: CSSProperties = { margin: 0, fontSize: 22, fontWeight: 700 };
export const headerSub: CSSProperties = { margin: '2px 0 0', color: '#6c757d', fontSize: 12 };
export const headerActions: CSSProperties = { display: 'flex', gap: 10, flexWrap: 'wrap' };

export const mainGrid = (isMobile: boolean): CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
  gap: isMobile ? 10 : 16,
  alignItems: 'start',
});

export const cBtn = (bg: string): CSSProperties => ({
  background: bg,
  color: '#fff',
  border: 'none',
  borderRadius: 6,
  padding: '6px 12px',
  fontWeight: 600,
  cursor: 'pointer',
  fontSize: 13,
});

export const cLabel: CSSProperties = {
  display: 'block', fontSize: 11, fontWeight: 600, color: '#868e96',
  textTransform: 'uppercase', letterSpacing: '0.4px', marginBottom: 3,
};
export const cInput: CSSProperties = {
  width: '100%', border: '1px solid #dee2e6', borderRadius: 4,
  padding: '5px 8px', fontSize: 13, boxSizing: 'border-box',
  outline: 'none', background: '#fff', marginBottom: 0,
};
export const cTh: CSSProperties = {
  textAlign: 'left', padding: '6px 8px', fontSize: 11, fontWeight: 700,
  color: '#6c757d', textTransform: 'uppercase', border: '1px solid #dee2e6',
};
export const cTd: CSSProperties = {
  padding: '5px 8px', border: '1px solid #dee2e6', verticalAlign: 'middle', fontSize: 12,
};

export const modalBackdrop: CSSProperties = {
  position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
  zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
};
export const modalBox = (maxW: number): CSSProperties => ({
  background: '#fff', borderRadius: 8, width: '90%', maxWidth: maxW,
  padding: 24, maxHeight: '90vh', display: 'flex', flexDirection: 'column',
});
export const modalHeader: CSSProperties = { display: 'flex', justifyContent: 'space-between', marginBottom: 16 };
export const modalTitle: CSSProperties = { margin: 0, fontWeight: 'bold' };
export const modalClose: CSSProperties = { border: 'none', background: 'none', cursor: 'pointer', fontSize: 18 };
export const modalActionsRow: CSSProperties = { display: 'flex', gap: 10, marginBottom: 16 };

export const hiddenWrapper: CSSProperties = { position: 'absolute', top: -9999, left: -9999 };
export const a4Page: CSSProperties = {
  width: '210mm', height: '297mm', background: '#fff',
  padding: '15mm', color: '#000', fontFamily: 'Arial, sans-serif',
};

export const previewBorder: CSSProperties = { border: '1px solid #dee2e6', borderRadius: 6, overflow: 'hidden' };
export const previewImg: CSSProperties = { width: '100%', display: 'block' };
export const previewPlaceholder: CSSProperties = {
  border: '2px dashed #dee2e6', borderRadius: 6, aspectRatio: '1/1.414',
  display: 'flex', flexDirection: 'column', alignItems: 'center',
  justifyContent: 'center', color: '#adb5bd', gap: 6,
};
export const previewLabel: CSSProperties = { fontWeight: 600, fontSize: 12 };

// ─── Form Card ───────────────────────────────────────────────────────────────
export const formCard: CSSProperties = {
  background: '#fff', borderRadius: 8, padding: '16px 20px',
  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
};
export const sectionTitle: CSSProperties = {
  fontSize: 15, fontWeight: 700, marginBottom: 12,
  paddingBottom: 8, borderBottom: '1px solid #e9ecef', color: '#343a40',
};
export const fieldRow2: CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 8 };
export const fieldRowSingle: CSSProperties = { marginBottom: 8 };
export const fieldRowNotes: CSSProperties = { marginBottom: 16 };

// ─── Table inline select/input ────────────────────────────────────────────────
export const cInputSm: CSSProperties = { ...cInput, padding: '3px 6px', fontSize: 12 };
export const cInputSmCenter: CSSProperties = { ...cInput, padding: '3px 4px', fontSize: 12, textAlign: 'center' };

export const tableScroll: CSSProperties = { overflowX: 'auto', marginBottom: 8 };
export const table: CSSProperties = { width: '100%', borderCollapse: 'collapse', fontSize: 12 };
export const theadRow: CSSProperties = { background: '#f8f9fa' };

export const addRowBtn: CSSProperties = {
  background: '#4361ee', color: '#fff', border: 'none', borderRadius: 5,
  padding: '6px 14px', fontWeight: 700, cursor: 'pointer', fontSize: 13, marginBottom: 10,
};
export const removeRowBtn: CSSProperties = {
  color: '#dc3545', background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, padding: 0,
};

export const rightCard: CSSProperties = {
  background: '#fff', borderRadius: 8, padding: '16px 20px',
  boxShadow: '0 1px 4px rgba(0,0,0,0.08)', marginBottom: 12,
};
export const actionGrid: CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 };

export const serviceForm: CSSProperties = {
  background: '#f8f9fa', padding: 16, borderRadius: 8, marginBottom: 16,
  display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'flex-end',
};
export const serviceFormName: CSSProperties = { flex: '1 1 200px' };
export const serviceFormUnit: CSSProperties = { flex: '0 0 100px' };

export const importBtn: CSSProperties = {
  background: '#28a745', color: '#fff', padding: '6px 12px',
  borderRadius: 4, cursor: 'pointer', fontSize: 13, fontWeight: 600,
};
export const exportBtn: CSSProperties = {
  background: '#4c6ef5', color: '#fff', border: 'none', borderRadius: 4,
  padding: '6px 12px', fontSize: 13, fontWeight: 600, cursor: 'pointer',
};
export const saveBtn: CSSProperties = {
  background: '#4361ee', color: '#fff', border: 'none', borderRadius: 4,
  padding: '6px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer',
};
export const cancelBtn: CSSProperties = {
  background: '#6c757d', color: '#fff', border: 'none', borderRadius: 4,
  padding: '6px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer',
};
export const editBtn: CSSProperties = {
  background: '#ffc107', color: '#000', border: 'none', borderRadius: 3,
  padding: '4px 8px', fontSize: 12, marginRight: 6, cursor: 'pointer', fontWeight: 600,
};
export const deleteBtn: CSSProperties = {
  background: '#dc3545', color: '#fff', border: 'none', borderRadius: 3,
  padding: '4px 8px', fontSize: 12, cursor: 'pointer', fontWeight: 600,
};

export const historyExportBtn: CSSProperties = {
  background: '#198754', color: '#fff', border: 'none', borderRadius: 4,
  padding: '6px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer',
};
export const historyViewBtn: CSSProperties = {
  background: '#f8f9fa', color: '#000', border: '1px solid #ccc',
  borderRadius: 3, padding: '4px 8px', fontSize: 12, cursor: 'pointer', fontWeight: 600,
};
