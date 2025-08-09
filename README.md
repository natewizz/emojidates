# EmojiDates 🎯

A fun and creative app that generates unique date ideas using emojis! Perfect for couples looking for inspiration or anyone wanting to plan memorable experiences.

## ✨ Features

- 🎲 **Dynamic Date Generation**: Generate creative date ideas with 3, 4, or 5 emojis
- 🔗 **Shareable Links**: Every date idea gets a unique, shareable URL
- 🎨 **Beautiful UI**: Modern, responsive design with dark mode support
- ⚡ **Fast Performance**: Built with Next.js 15 and optimized for speed
- 🔒 **Rate Limited**: Protected API with intelligent rate limiting
- 🌐 **SEO Optimized**: Dynamic meta tags and Open Graph images

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Supabase account (for database)
- Upstash Redis account (for rate limiting)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/emojidates.git
   cd emojidates
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # Redis Configuration (Upstash)
   UPSTASH_REDIS_REST_URL=your_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_redis_token
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Architecture

- **Frontend**: Next.js 15 with App Router
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Database**: Supabase (PostgreSQL)
- **Rate Limiting**: Upstash Redis
- **Authentication**: Supabase Auth
- **Deployment**: Vercel

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | ✅ |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | ✅ |
| `UPSTASH_REDIS_REST_URL` | Redis REST API URL | ✅ |
| `UPSTASH_REDIS_REST_TOKEN` | Redis REST API token | ✅ |

## 📦 Production Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository** to Vercel
2. **Add environment variables** in Vercel dashboard
3. **Deploy automatically** on every push to main branch

### Manual Deployment

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 🎯 API Endpoints

- `POST /api/generate-date` - Generate a new date idea
- `GET /api/generate-date` - Get total number of generated dates
- `GET /date/[id]` - View a specific date idea

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Components from [Shadcn/ui](https://ui.shadcn.com/)
- Database powered by [Supabase](https://supabase.com/)
- Rate limiting with [Upstash Redis](https://upstash.com/)
