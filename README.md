# SmartNibas Billing SaaS - Clean Deployable Rebuild

This is a clean Next.js rebuild focused on successful Vercel deployment first.

## What is included
- Next.js App Router structure
- SmartNibas branding, logo, GST, address, bank details
- Dashboard
- Login screen with Google OAuth-ready API placeholder
- Admin user approval screen
- Invoice / Quotation / Proforma create page
- Draft/final UI structure
- A4 direct print layout with multi-page safe CSS
- Hostinger MySQL schema
- Razorpay webhook placeholder
- Vercel environment template

## Deploy Steps
1. Unzip this project on your PC.
2. Open GitHub repository.
3. Delete old broken files from repo or create a new repo.
4. Upload all files from inside this folder.
5. Go to Vercel > Add New Project > Import GitHub repo.
6. Keep Framework Preset as Next.js and Root Directory as `./`.
7. Click Deploy.

## Important
Do not upload this to Hostinger `public_html`. Next.js must be deployed on Vercel or any Node.js server.

## MySQL
Use `sql/schema.sql` in Hostinger MySQL/phpMyAdmin to create tables.

## Real OAuth/Razorpay
After first successful deploy, add credentials in Vercel Project Settings > Environment Variables using `.env.example`.
