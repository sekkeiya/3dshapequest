import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSharedAuthState } from '../hooks/useSharedAuthState';

export default function ProtectedRoute({ children }) {
  const { isAuthed, isLoading } = useSharedAuthState();

  if (isLoading) return null;
  if (!isAuthed) return <Navigate to="/" replace />;
  return children;
}
