import React from 'react';
import { Box } from '@mui/material';
import { MiniSidebar } from '../navigation/MiniSidebar';

export function AppShell({ children }) {
  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <MiniSidebar />
      <Box sx={{ flexGrow: 1, height: '100%', overflow: 'auto', position: 'relative' }}>
        {children}
      </Box>
    </Box>
  );
}
