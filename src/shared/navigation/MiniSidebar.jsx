import React, { useState } from 'react';
import { Box, Tooltip, IconButton, Divider, Avatar, Menu, MenuItem, ListItemIcon } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import MapIcon from '@mui/icons-material/Map';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AppsIcon from '@mui/icons-material/Apps';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { tokens } from '../theme/tokens';

export function MiniSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const [userAnchorEl, setUserAnchorEl] = useState(null);
  const handleUserClick = (e) => setUserAnchorEl(e.currentTarget);
  const handleUserClose = () => setUserAnchorEl(null);

  const NavItem = ({ icon, label, target, active }) => (
    <Tooltip title={label} placement="right" arrow>
      <IconButton
        onClick={() => navigate(target)}
        sx={{
          color: active ? tokens.colors.primary.main : tokens.colors.text.secondary,
          bgcolor: active ? 'rgba(184, 144, 77, 0.1)' : 'transparent',
          borderRadius: 2,
          mb: 1,
          width: 40,
          height: 40,
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            color: '#fff',
          }
        }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );

  return (
    <Box
      sx={{
        width: 64,
        flexShrink: 0,
        height: '100%',
        bgcolor: 'rgba(11, 13, 23, 0.95)',
        borderRight: `1px solid ${tokens.colors.border.light}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 2,
        zIndex: 1200,
      }}
    >
      {/* App Logo / Home */}
      <Tooltip title="3D Shape Quest トップ" placement="right" arrow>
        <IconButton onClick={() => navigate('/')} sx={{ mb: 2 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: '8px',
              background: `linear-gradient(135deg, ${tokens.colors.primary.light}, ${tokens.colors.primary.dark})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 800,
              fontSize: 16,
              boxShadow: tokens.shadows.glowGold,
            }}
          >
            Q
          </Box>
        </IconButton>
      </Tooltip>

      <Divider sx={{ width: 40, mb: 2, borderColor: tokens.colors.border.light }} />

      {/* Primary Nav */}
      <NavItem icon={<DashboardIcon />} label="ダッシュボード" target="/dashboard" active={path === '/dashboard'} />
      <NavItem icon={<MapIcon />} label="クエスト一覧" target="/dashboard" active={path.startsWith('/quest')} />
      <NavItem icon={<LibraryBooksIcon />} label="知識カード" target="/dashboard" active={false} />
      <NavItem icon={<EmojiEventsIcon />} label="成長・実績" target="/dashboard" active={false} />

      <Box sx={{ flexGrow: 1 }} />

      {/* App Switcher (Stub) */}
      <Tooltip title="SEKKEIYA アプリ切替" placement="right" arrow>
        <IconButton
          onClick={() => { window.location.assign('/dashboard'); }}
          sx={{ color: tokens.colors.text.secondary, '&:hover': { color: '#fff' }, mb: 1 }}
        >
          <AppsIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="メニュー" placement="right" arrow>
        <IconButton onClick={handleUserClick} sx={{ mb: 1 }}>
          <Avatar 
            sx={{ 
              width: 32, 
              height: 32, 
              bgcolor: tokens.colors.primary.main,
              border: `2px solid ${userAnchorEl ? 'white' : 'transparent'}`,
            }}
          >
            Q
          </Avatar>
        </IconButton>
      </Tooltip>
      
      <Menu
        anchorEl={userAnchorEl}
        open={Boolean(userAnchorEl)}
        onClose={handleUserClose}
        transformOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        slotProps={{
          paper: {
            sx: {
              bgcolor: 'rgba(11, 13, 23, 0.95)',
              color: '#fff',
              border: `1px solid ${tokens.colors.border.light}`,
              minWidth: 180,
              mt: -1,
              ml: 1
            }
          }
        }}
      >
        <MenuItem onClick={() => { handleUserClose(); window.location.assign('/login?return_to=/app/quest/'); }}>
          <ListItemIcon><LoginRoundedIcon fontSize="small" sx={{ color: '#fff' }} /></ListItemIcon>
          ログイン
        </MenuItem>
        <MenuItem onClick={() => { handleUserClose(); window.location.assign('/signup?return_to=/app/quest/'); }}>
          <ListItemIcon><PersonAddRoundedIcon fontSize="small" sx={{ color: '#fff' }} /></ListItemIcon>
          新規登録
        </MenuItem>
        <Divider sx={{ borderColor: tokens.colors.border.light }} />
        <MenuItem onClick={() => { handleUserClose(); window.location.assign('/dashboard'); }}>
          <ListItemIcon><DashboardRoundedIcon fontSize="small" sx={{ color: '#fff' }} /></ListItemIcon>
          SEKKEIYA ダッシュボード
        </MenuItem>
        <MenuItem onClick={() => { handleUserClose(); window.location.assign('/logout?return_to=/app/quest/'); }}>
          <ListItemIcon><LogoutRoundedIcon fontSize="small" sx={{ color: '#fff' }} /></ListItemIcon>
          ログアウト
        </MenuItem>
      </Menu>
    </Box>
  );
}
