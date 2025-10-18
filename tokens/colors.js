/**
 * Quad Design System - Color Tokens (JavaScript Object)
 * This structure integrates action states and theme overrides for multi-framework consumption.
 */
export const colors = {
  // --- PRIMARY ACTION COLORS ---
  product: {
    // Base colors for status (non-interactive)
    success: "#22C55E",
    error: "#EF4444",
    warning: "#FACC15",
    info: "#5D9BFF",
  },
  
  // --- ACTION STATES (Primary & Secondary) ---
  action: {
    primary: {
      default: "#3BB273",
      hover: "#158650",
      focus: "#158650",
      click: "#23A665",
      loading: "#23A665",
      disabled: "#AFEBC5",
    },
    secondary: {
      // Light Theme Secondary (Default)
      light: {
        default: "#243B55",
        hover: "#2A517A",
        focus: "#2A517A",
        click: "#447EB3",
        loading: "#447EB3",
        disabled: "#CBDCEC",
      },
      // Dark Theme Secondary (Override)
      dark: {
        default: "#CBDCEC",
        hover: "#9CBDDD",
        focus: "#9CBDDD",
        click: "#689BC8",
        loading: "#689BC8",
        disabled: "#447EB3",
      },
    },
  },

  // --- UTILITY / THEME COLORS ---
  light: {
    background: "#F2F2F2",
    surface: "#DCE0E6",
    text: {
      primary: "#111827",
      secondary: "#4B5563",
    },
    border: "#E5E7EB",
  },
  dark: {
    background: "#0F172A",
    surface: "#1E293B",
    text: {
      primary: "#F8FAFC",
      secondary: "#CBD5E1",
    },
    border: "#334155",
  },
};