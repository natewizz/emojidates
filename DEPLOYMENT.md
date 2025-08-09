# 🚀 Vercel Production Deployment Guide

This guide will help you deploy EmojiDates to Vercel for production.

## ✅ Prerequisites

Before deploying, ensure you have:

1. **GitHub Repository** - Your code pushed to GitHub
2. **Supabase Project** - Database and authentication configured
3. **Upstash Redis** - Rate limiting service configured
4. **Vercel Account** - Connected to GitHub

## 🔧 Environment Variables Setup

### Required Environment Variables

You'll need to add these environment variables in your Vercel dashboard:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Redis Configuration (Upstash)
UPSTASH_REDIS_REST_URL=https://your-redis-url.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

### How to Get These Values

#### Supabase Setup
1. Go to [supabase.com](https://supabase.com) and create a new project
2. In your project dashboard, go to Settings > API
3. Copy the "Project URL" and "anon/public" key
4. Create a `dates` table with columns:
   - `id` (uuid, primary key)
   - `emojis` (text)
   - `description` (text)
   - `source` (text)
   - `created_at` (timestamp with time zone, default: now())

#### Upstash Redis Setup
1. Go to [upstash.com](https://upstash.com) and create a Redis database
2. Copy the REST URL and REST Token
3. These will be used for rate limiting

## 🎯 Vercel Deployment Steps

### Step 1: Connect Repository
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Select the repository: `yourusername/emojidates`

### Step 2: Configure Project
1. **Framework Preset**: Next.js (should auto-detect)
2. **Root Directory**: `./` (leave as default)
3. **Build Command**: `npm run build` (should auto-detect)
4. **Output Directory**: `.next` (should auto-detect)
5. **Install Command**: `npm install` (should auto-detect)

### Step 3: Environment Variables
1. In the project configuration, go to "Environment Variables"
2. Add each required variable:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
3. Set all to "Production" environment

### Step 4: Deploy
1. Click "Deploy"
2. Wait for the build to complete (usually 2-3 minutes)
3. Your app will be available at `https://your-project-name.vercel.app`

## 🔄 Automatic Deployments

Once configured, Vercel will automatically:
- Deploy on every push to the `main` branch
- Create preview deployments for pull requests
- Provide instant rollbacks if needed

## 🧪 Testing Production Deployment

### Before Going Live
1. **Test Core Functionality**:
   - Generate date ideas (3, 4, 5 emojis)
   - Copy and share links
   - Verify rate limiting works
   - Test responsive design

2. **Check Performance**:
   - Page load speeds
   - API response times
   - Mobile experience

3. **Verify Security**:
   - Environment variables are set
   - Rate limiting is active
   - No sensitive data in client code

## 📊 Monitoring & Analytics

### Vercel Analytics
- Enable Vercel Analytics in your project dashboard
- Track page views, performance, and user behavior

### Error Monitoring
- Consider adding [Sentry](https://sentry.io) for error tracking
- Monitor API errors and user feedback

## 🔒 Security Checklist

- [ ] Environment variables are set (not hardcoded)
- [ ] Rate limiting is configured and working
- [ ] No sensitive data in public code
- [ ] HTTPS is enforced
- [ ] Security headers are configured
- [ ] CORS is properly configured (if needed)

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check for TypeScript errors: `npm run type-check`
   - Verify all dependencies are installed
   - Check for missing environment variables

2. **Runtime Errors**
   - Check Vercel function logs
   - Verify environment variables are set
   - Test API endpoints manually

3. **Performance Issues**
   - Enable Vercel Analytics
   - Optimize images and assets
   - Check for unnecessary re-renders

### Support Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Upstash Documentation](https://docs.upstash.com/)

## 🎉 Post-Deployment

### Launch Checklist
- [ ] Domain is configured (if using custom domain)
- [ ] SSL certificate is active
- [ ] Analytics are tracking
- [ ] Error monitoring is set up
- [ ] Performance is satisfactory
- [ ] Mobile experience is tested
- [ ] Social sharing works correctly

### Maintenance
- Monitor performance metrics
- Keep dependencies updated
- Review and rotate API keys periodically
- Backup database regularly
- Monitor for security issues

---

**Happy Deploying! 🎯**

Your EmojiDates app will be live and ready to help couples create amazing date experiences! 