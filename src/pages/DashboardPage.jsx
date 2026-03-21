import React from 'react';
import { Box, Typography,  Grid, Paper, Stack, LinearProgress, Button, Chip } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { tokens } from '../shared/theme/tokens';
import { AppShell } from '../shared/layout/AppShell';

export default function DashboardPage() {

  // Dummy Data
  const currentQuest = {
    title: '第一章: 若手デザイナーの初仕事',
    subtitle: 'クライアントの隠れた要望を引き出せ',
    progress: 35,
    chapter: 1,
  };

  const recommendedCards = [
    { title: '家具のスケール感', tag: 'インテリア', duration: '15 min' },
    { title: '自然光と照明計画', tag: '建築', duration: '20 min' },
    { title: '動線計画の基本法則', tag: '設計思考', duration: '30 min' },
  ];

  return (
    <AppShell>
      <Box sx={{ p: { xs: 3, md: 5 }, maxWidth: 1200, margin: '0 auto' }}>
        
        {/* Welcome Area */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            おかえりなさい、デザイナー。
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            今日の学びと冒険を始めましょう。
          </Typography>
        </Box>

        <Grid container spacing={4}>
          
          {/* Main Column (Current Quest & Recommended) */}
          <Grid item xs={12} md={8}>
            
            {/* Current Quest */}
            <Typography variant="h4" sx={{ mb: 2 }}>進行中のクエスト</Typography>
            <Paper sx={{ 
              p: 4, mb: 6, 
              background: `linear-gradient(145deg, rgba(184, 144, 77, 0.1) 0%, rgba(18, 21, 36, 0.9) 100%)`,
              border: `1px solid ${tokens.colors.primary.dark}`,
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Chip label={`Chapter ${currentQuest.chapter}`} size="small" sx={{ mb: 2, bgcolor: tokens.colors.primary.dark, color: '#fff', fontWeight: 600 }} />
                <Typography variant="h3" gutterBottom>{currentQuest.title}</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  {currentQuest.subtitle}
                </Typography>
                
                <Box sx={{ mb: 4 }}>
                  <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">進行度</Typography>
                    <Typography variant="body2" fontWeight="bold">{currentQuest.progress}%</Typography>
                  </Stack>
                  <LinearProgress 
                    variant="determinate" 
                    value={currentQuest.progress} 
                    sx={{ 
                      height: 8, borderRadius: 4, bgcolor: 'rgba(255,255,255,0.1)',
                      '& .MuiLinearProgress-bar': { bgcolor: tokens.colors.primary.main }
                    }} 
                  />
                </Box>
                
                <Button variant="contained" size="large" startIcon={<PlayArrowIcon />}>
                  続きから始める
                </Button>
              </Box>
              {/* Decorative background element */}
              <AutoStoriesIcon sx={{ position: 'absolute', right: -20, bottom: -20, fontSize: 200, color: tokens.colors.primary.main, opacity: 0.05, zIndex: 1 }} />
            </Paper>

            {/* Recommended */}
            <Typography variant="h4" sx={{ mb: 2 }}>おすすめの知識カード</Typography>
            <Grid container spacing={2}>
              {recommendedCards.map((card, i) => (
                <Grid item xs={12} sm={4} key={i}>
                  <Paper sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', transition: 'all 0.2s', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)', cursor: 'pointer' } }}>
                    <Chip label={card.tag} size="small" sx={{ alignSelf: 'flex-start', mb: 2, bgcolor: 'rgba(255,255,255,0.1)' }} />
                    <Typography variant="subtitle1" sx={{ flexGrow: 1, fontWeight: 600, mb: 2 }}>{card.title}</Typography>
                    <Typography variant="caption" color="text.secondary">{card.duration}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Column (Growth & Stats) */}
          <Grid item xs={12} md={4}>
            
            {/* Stats */}
            <Paper sx={{ p: 3, mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmojiEventsIcon sx={{ color: tokens.colors.primary.main }} />
                現在のステータス
              </Typography>
              
              <Stack spacing={3}>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>学習連続日数</Typography>
                  <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocalFireDepartmentIcon sx={{ color: '#E87D3E' }} />
                    3 Days
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>修了クエスト</Typography>
                  <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AutoStoriesIcon sx={{ color: tokens.colors.secondary.main }} />
                    2 Quests
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>獲得した知識カード</Typography>
                  <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <MenuBookIcon sx={{ color: '#4CAF50' }} />
                    12 Cards
                  </Typography>
                </Box>
              </Stack>
            </Paper>

            {/* Future Navigation Links */}
            <Typography variant="h6" sx={{ mb: 2 }}>ライブラリ</Typography>
            <Stack spacing={1.5}>
              {['すべてのストーリー', '知識カード一覧', '獲得バッジ・称号', 'マイ成長記録'].map((item, i) => (
                <Paper key={i} sx={{ p: 2, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                  <Typography variant="body1">{item}</Typography>
                </Paper>
              ))}
            </Stack>

          </Grid>

        </Grid>
      </Box>
    </AppShell>
  );
}
