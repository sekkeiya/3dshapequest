import React from 'react';
import { Box, Typography, Button, Container, Grid, Paper, Stack } from '@mui/material';
import { useNavigate, Navigate } from 'react-router-dom';
import ExploreIcon from '@mui/icons-material/Explore';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import ChairIcon from '@mui/icons-material/Chair';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { tokens } from '../shared/theme/tokens';
import { AppShell } from '../shared/layout/AppShell';
import { useSharedAuthState } from '../shared/hooks/useSharedAuthState';

export default function HomePage() {
  const navigate = useNavigate();
  const { isAuthed, isLoading } = useSharedAuthState();

  if (isLoading) return null;
  if (isAuthed) return <Navigate to="dashboard" replace />;

  return (
    <AppShell>
      <Box sx={{ minHeight: '100%', bgcolor: 'background.default', pb: 10 }}>
        {/* --- Hero Section --- */}
        <Box sx={{ 
          pt: { xs: 8, md: 15 }, 
          pb: { xs: 8, md: 12 }, 
          px: 3, 
          textAlign: 'center',
          background: `radial-gradient(circle at 50% 0%, rgba(124, 102, 184, 0.15) 0%, transparent 60%)`,
        }}>
          <Container maxWidth="md">
            <Typography variant="h1" gutterBottom sx={{ 
              background: `linear-gradient(135deg, #fff, ${tokens.colors.primary.light})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3
            }}>
              3D Shape Quest
            </Typography>
            <Typography variant="h4" color="text.secondary" sx={{ mb: 5, fontWeight: 400, lineHeight: 1.6 }}>
              建築・インテリアの知識と設計思考を、<br />ストーリーと冒険を通して学ぶ。
            </Typography>
            {isAuthed ? (
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <Button 
                  variant="contained" 
                  size="large" 
                  startIcon={<ExploreIcon />}
                  onClick={() => navigate('/dashboard')}
                  sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
                >
                  冒険を続ける
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  onClick={() => navigate('/dashboard')}
                  sx={{ px: 4, py: 1.5, fontSize: '1.1rem', color: '#fff', borderColor: tokens.colors.border.medium }}
                >
                  ダッシュボードへ
                </Button>
              </Stack>
            ) : (
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <Button 
                  variant="contained" 
                  size="large" 
                  onClick={() => { window.location.assign('/login?return_to=/app/quest/dashboard'); }}
                  sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
                >
                  ログイン
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  onClick={() => { window.location.assign('/signup?return_to=/app/quest/dashboard'); }}
                  sx={{ px: 4, py: 1.5, fontSize: '1.1rem', color: '#fff', borderColor: tokens.colors.border.medium }}
                >
                  アカウント作成
                </Button>
              </Stack>
            )}
          </Container>
        </Box>

        {/* --- Concept Section --- */}
        <Container maxWidth="lg" sx={{ mb: 12 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                設計を「学ぶ」から<br />「体験する」へ
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                単なる動画視聴や記事の閲覧ではありません。クライアントの要望を聞き出し、コンセプトを立て、空間を構築する。実際の設計プロセスをなぞるようなクエスト形式で、実践的なスキルと設計思考を身につけます。
              </Typography>
              <Stack spacing={2}>
                {['ストーリー形式で進む実践課題', '選択肢によって変わるクライアントの反応', '獲得した知識をコレクション'].map((text, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircleOutlineIcon sx={{ color: tokens.colors.primary.main }} />
                    <Typography variant="body1">{text}</Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                height: 400, 
                borderRadius: 4, 
                bgcolor: 'rgba(255,255,255,0.02)', 
                border: `1px solid ${tokens.colors.border.light}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: tokens.shadows.glowPurple
              }}>
                <AutoStoriesIcon sx={{ fontSize: 100, color: tokens.colors.secondary.main, opacity: 0.5 }} />
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* --- Themes Section --- */}
        <Container maxWidth="lg" sx={{ mb: 12 }}>
          <Typography variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
            多様なテーマをマスターする
          </Typography>
          <Grid container spacing={3}>
            {[
              { title: '建築計画', icon: <ArchitectureIcon fontSize="large"/>, desc: '敷地読み取りからゾーニング、動線計画の基礎。' },
              { title: 'インテリアデザイン', icon: <ChairIcon fontSize="large"/>, desc: '空間のコンセプト構築、マテリアル選定と照明計画。' },
              { title: 'クライアントワーク', icon: <AutoStoriesIcon fontSize="large"/>, desc: 'ヒアリング手法と、心を動かすプレゼンテーション。' }
            ].map((theme, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Paper sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-4px)', borderColor: tokens.colors.primary.main } }}>
                  <Box sx={{ color: tokens.colors.primary.main, mb: 2 }}>{theme.icon}</Box>
                  <Typography variant="h5" gutterBottom>{theme.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{theme.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* --- Future Quests Section --- */}
        <Container maxWidth="lg" sx={{ mb: 12 }}>
          <Box sx={{ p: 6, borderRadius: 4, bgcolor: 'rgba(124, 102, 184, 0.05)', border: `1px solid ${tokens.colors.secondary.dark}` }}>
            <Typography variant="h3" align="center" gutterBottom>
              公開予定のクエスト
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
              様々なシチュエーションの課題があなたを待っています。
            </Typography>
            <Grid container spacing={2}>
              {['住宅プラン提案クエスト', 'カフェ内装計画クエスト', 'オフィスレイアウト改善クエスト', '家具選定・レイアウトチャレンジ', '空間コンセプト構築クエスト'].map((q, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Paper sx={{ p: 2, bgcolor: 'background.default', borderLeft: `3px solid ${tokens.colors.primary.main}` }}>
                    <Typography variant="subtitle1" fontWeight={600}>{q}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>

        {/* --- Ecosystem Link --- */}
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            学んだ知識をすぐに実践
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            3D Shape Quest で得たストーリーベースの知識は、SEKKEIYAエコシステム全体で活用できます。<br/>
            Layout でレイアウトを試し、Share でモデルを探し、Presents で提案をまとめましょう。
          </Typography>
          <Button variant="outlined" color="secondary" onClick={() => window.location.assign('/')}>
            SEKKEIYAトップへ戻る
          </Button>
        </Container>

      </Box>
    </AppShell>
  );
}
