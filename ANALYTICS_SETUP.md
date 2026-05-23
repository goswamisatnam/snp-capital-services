# Analytics Setup – S&P Capital Services

## 1. Get Your GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/) and sign in.
2. Navigate to **Admin** (gear icon, bottom-left).
3. Under the **Property** column, click **Data Streams**.
4. Select your web stream (or create one pointing to your domain).
5. Copy the **Measurement ID** — it starts with `G-` (e.g. `G-ABC1234567`).
6. Paste it into `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-ABC1234567
   ```

## 2. Verify Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console/) and sign in.
2. Click **Add property**, choose **URL prefix**, and enter your site URL.
3. Under the verification options, select **HTML tag**.
4. Copy the `content` attribute value from the tag shown (e.g. `abc123xyz`).
5. Open `src/app/layout.tsx` and replace `YOUR_GSC_VERIFICATION_CODE` with that value:
   ```ts
   verification: { google: 'abc123xyz' },
   ```
6. Deploy, then click **Verify** in Search Console.

## 3. Submit Your Sitemap

1. In [Google Search Console](https://search.google.com/search-console/), select your property.
2. In the left sidebar, click **Sitemaps**.
3. In the **Add a new sitemap** field, enter `sitemap.xml`.
4. Click **Submit**.
5. Google will crawl the sitemap and confirm the number of URLs discovered.

## 4. Read Core Web Vitals

1. In [Google Search Console](https://search.google.com/search-console/), select your property.
2. In the left sidebar, click **Core Web Vitals** (under Experience).
3. View the **Mobile** and **Desktop** reports — they show pages grouped by status: Good, Needs Improvement, or Poor.
4. Click into any issue group to see affected URLs and the specific metric failing (LCP, INP, CLS).
5. Data is sourced from Chrome User Experience Report (CrUX) and typically has a 28-day lag.
