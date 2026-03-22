# Hostel Project Starter Guide

Ye repository aapke **hostel discovery platform** ke liye starter monorepo hai. Isme teen parts cover kiye gaye hain:

1. **Backend API** - Node.js + Express + MongoDB
2. **Website** - Next.js student + owner/admin web app
3. **Mobile App** - Flutter starter structure

## 1. Final MVP Decide Karna

Aapke ideas bahut strong hain, lekin launch ke liye hume features ko 3 buckets me divide karna chahiye.

### A. Must Have MVP
- Student login/signup
- Owner login/signup
- Hostel listing page
- Jaipur area search
- Filters: budget, girls/boys, AC/non-AC, rating, environment
- Hostel details page
- Reviews and food rating
- Amenities grid
- Admin/Owner dashboard: add hostel, upload photos, manage listings
- Seat availability indicator
- Wishlist/save hostel

### B. Phase 2 Features
- College/coaching distance
- Hostel compare (2-3 hostels)
- Community feed
- Expert chat box
- Verification badge
- Rules/timing/contact display
- Why choose this hostel section

### C. Phase 3 Features
- Rent payment section
- Coupon engine
- Ads section
- In-app multiplayer games like Ludo
- Advanced analytics dashboard

## 2. Recommended Folder Structure

```text
hostelproject/
├── backend/
├── web/
├── mobile/
└── docs/
```

## 3. VS Code Me Kaunse Files Banane Hain

### Backend files
- `backend/package.json`
- `backend/.env.example`
- `backend/src/server.js`
- `backend/src/app.js`
- `backend/src/config/db.js`
- `backend/src/models/User.js`
- `backend/src/models/Hostel.js`
- `backend/src/models/Review.js`
- `backend/src/controllers/authController.js`
- `backend/src/controllers/hostelController.js`
- `backend/src/controllers/reviewController.js`
- `backend/src/middleware/authMiddleware.js`
- `backend/src/routes/authRoutes.js`
- `backend/src/routes/hostelRoutes.js`
- `backend/src/routes/reviewRoutes.js`

### Web files
- `web/package.json`
- `web/app/layout.js`
- `web/app/page.js`
- `web/app/hostels/page.js`
- `web/app/hostels/[id]/page.js`
- `web/app/login/page.js`
- `web/app/owner/page.js`
- `web/app/globals.css`
- `web/components/Header.js`
- `web/components/FilterSidebar.js`
- `web/components/HostelCard.js`
- `web/lib/api.js`

### Mobile files
- `mobile/pubspec.yaml`
- `mobile/lib/main.dart`
- `mobile/lib/screens/home_screen.dart`
- `mobile/lib/screens/hostel_listing_screen.dart`
- `mobile/lib/screens/hostel_detail_screen.dart`
- `mobile/lib/screens/login_screen.dart`
- `mobile/lib/services/api_service.dart`
- `mobile/lib/widgets/hostel_card.dart`

## 4. Database Design

### Users Collection
- `name`
- `mobile`
- `email`
- `password`
- `role` => `student`, `owner`, `admin`
- `wishlist` => hostel ids
- `createdAt`

### Hostels Collection
- `name`
- `slug`
- `description`
- `area`
- `city`
- `address`
- `location.coordinates`
- `rent`
- `securityDeposit`
- `genderType`
- `acType`
- `roomTypes`
- `facilities`
- `images`
- `foodRating`
- `averageRating`
- `reviewsCount`
- `environmentTags`
- `rules`
- `timings`
- `contactName`
- `contactPhone`
- `seatStatus`
- `nearbyColleges`
- `nearbyCoachings`
- `owner`
- `isVerified`

### Reviews Collection
- `user`
- `hostel`
- `rating`
- `foodRating`
- `comment`
- `createdAt`

## 5. Build Order

### Step 1 - Backend
1. MongoDB connect karo
2. Auth APIs banao
3. Hostel CRUD APIs banao
4. Review APIs banao
5. Search/filter query support add karo

### Step 2 - Web
1. Home page
2. Listing page with filters
3. Detail page
4. Login/signup
5. Owner dashboard

### Step 3 - Mobile App
1. Same APIs consume karo
2. Hostel listing and detail screens banao
3. Login flow banao
4. Wishlist sync karo

### Step 4 - Integrations
1. Cloudinary image upload
2. Google Maps distance
3. Deployment on Vercel / Render / Atlas

## 6. Important Advice

- **MVP ke liye games mat build karo** unless core hostel booking/discovery stable ho.
- Payment section high-risk hai, ise Phase 3 me rakho.
- Expert chat simple enquiry form se start karo.
- Verification badge manual admin approval se start karo.

## 7. Is repo me kya diya gaya hai

- Backend starter API structure
- Next.js website starter pages
- Flutter app starter structure
- MVP planning document

Detailed explanation ke liye `docs/mvp-plan.md` bhi dekho.
