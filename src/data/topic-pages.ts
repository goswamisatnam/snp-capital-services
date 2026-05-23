import type { TopicPageData } from '@/components/TopicPage'

export const TOPIC_PAGES: Record<string, TopicPageData> = {

  // ── PERSONAL FINANCE ─────────────────────────────────────

  budgeting: {
    title: 'Budgeting',
    description: 'Take control of your money with proven budgeting frameworks that work for any income level.',
    emoji: '📊',
    parentLabel: 'Personal Finance',
    parentHref: '/personal-finance',
    overview: 'A budget is the foundation of every strong financial plan. Without knowing where your money goes, you cannot build wealth, eliminate debt, or achieve financial goals. The good news: budgeting is not about restricting yourself — it is about directing your money intentionally so it works for you.',
    sections: [
      {
        heading: 'The 50/30/20 Rule',
        body: 'The most popular budgeting framework splits your after-tax income into three buckets: 50% for needs, 30% for wants, and 20% for savings and debt repayment. It is simple enough to follow without tracking every rupee or dollar.',
        bullets: [
          'Needs (50%): Rent/mortgage, groceries, utilities, transport, minimum debt payments',
          'Wants (30%): Dining out, streaming, vacations, clothing beyond basics, hobbies',
          'Savings/Debt (20%): Emergency fund, investments, extra debt payments, retirement contributions',
          'Adjust the split based on your income — high earners should push savings above 30%',
        ],
      },
      {
        heading: 'Zero-Based Budgeting',
        body: 'Every rupee/dollar gets assigned a job. Income minus all planned expenses equals zero. This does not mean spending everything — "savings" and "investments" are categories that receive money.',
        bullets: [
          'List all monthly income sources (salary, freelance, rental)',
          'List every planned expense including irregular ones (insurance, car maintenance)',
          'Allocate the remainder to savings and investment categories',
          'Use apps like YNAB (US) or Wallet by BudgetBakers (India) to track',
        ],
      },
      {
        heading: 'Envelope Method (Cash or Digital)',
        body: 'Divide your spending money into envelopes — each labeled for a category. Once an envelope is empty, spending in that category stops for the month. Digitally, this maps to separate savings "pots" in apps.',
        bullets: [
          'Works best for overspending categories like dining, shopping, entertainment',
          'Digital versions: Monzo pots, Fi Money jars, Revolut vaults',
          'Forces awareness of exactly how much is left before the month ends',
        ],
      },
      {
        heading: 'Building Your First Budget in 5 Steps',
        body: 'Starting is the hardest part. Here is a practical step-by-step process that takes under an hour.',
        bullets: [
          'Step 1: Track last 3 months of spending — bank statements and card statements',
          'Step 2: Categorize every transaction (needs / wants / savings)',
          'Step 3: Calculate your average monthly spending in each category',
          'Step 4: Set realistic targets — do not cut wants to zero immediately',
          'Step 5: Automate savings on payday so you never see that money to spend',
        ],
      },
    ],
    keyTakeaways: [
      'Start with the 50/30/20 rule — it works for most income levels',
      'Automate savings before spending — pay yourself first',
      'Review your budget monthly and adjust for irregular expenses',
      'Use a digital tool to track spending in real time',
      'A budget that is 80% followed consistently beats a perfect budget abandoned after two weeks',
    ],
    tip: 'Set up an automatic transfer to savings on the day your salary arrives. The best budget system is one that removes willpower from the equation entirely.',
    warning: 'Irregular expenses (annual insurance, car registration, holiday gifts) kill budgets. Divide each annual cost by 12 and add that amount to a dedicated "irregular expenses" savings account each month.',
    relatedTopics: [
      { label: 'Emergency Fund', href: '/personal-finance/emergency-fund' },
      { label: 'Credit Scores', href: '/personal-finance/credit-scores' },
      { label: 'Tax Planning', href: '/personal-finance/tax-planning' },
    ],
    ctaLabel: 'Try SIP Calculator',
    ctaHref: '/calculators',
  },

  insurance: {
    title: 'Insurance',
    description: 'Protect your wealth with the right insurance coverage. Know what you need, what to skip, and how much to pay.',
    emoji: '🛡️',
    parentLabel: 'Personal Finance',
    parentHref: '/personal-finance',
    overview: 'Insurance is not an investment — it is risk transfer. You pay a premium to shift the financial impact of a catastrophic event onto an insurance company. The goal is to protect your existing wealth and income, not to generate returns. Understanding which policies are essential and which are unnecessary can save you thousands annually.',
    sections: [
      {
        heading: 'Term Life Insurance — The Most Important Policy',
        body: 'Pure life insurance with no investment component. Pays a large lump sum to your family if you die during the policy term. Premiums are a fraction of traditional whole-life or ULIP products.',
        bullets: [
          'Coverage: 10–20× your annual income is the standard recommendation',
          'Term: Cover until at least age 60–65, or until your youngest child is financially independent',
          'India: Online term plans from LIC, HDFC Life, Max Life — ₹1 crore cover from ~₹800/month at age 30',
          'US: 20-30 year term from companies like Banner Life, Pacific Life — $1M cover from ~$30–50/month at age 30',
          'Avoid mixing insurance and investment — avoid ULIPs, endowment plans, and whole life policies',
        ],
      },
      {
        heading: 'Health Insurance — Non-Negotiable',
        body: 'A single hospitalisation without health insurance can wipe out years of savings. Medical inflation runs at 12–15% annually in India and healthcare costs in the US are the leading cause of bankruptcy.',
        bullets: [
          'India: Individual plan with ₹10–25 lakh cover + super top-up for larger needs',
          'US: If employer offers it, choose the plan with the best out-of-pocket maximum',
          'US: For self-employed, an HSA-compatible high-deductible plan maximises tax benefits',
          'Check: network hospitals, claim settlement ratio, no-claim bonus, pre-existing disease waiting period',
        ],
      },
      {
        heading: 'Disability Insurance',
        body: 'Your most valuable asset is your ability to earn income. Disability is far more likely than death during your working years — yet most people ignore this coverage.',
        bullets: [
          'Long-term disability should replace 60–70% of pre-disability income',
          'US: Most employers offer group LTD — check the definition of disability (own-occupation vs any-occupation)',
          'India: Personal accident + critical illness plans together cover most disability scenarios',
          'Look for policies that cover your specific occupation',
        ],
      },
      {
        heading: 'Insurance to Skip (Or Minimise)',
        body: 'The insurance industry profits from policies that sound useful but have poor risk/reward ratios for consumers.',
        bullets: [
          'ULIPs: High charges eat returns — buy term + invest the difference in mutual funds',
          'Extended warranties: Self-insure by keeping an appliance/repair fund',
          'Credit card insurance: Rarely pays out — check exclusions carefully',
          'Mortgage protection insurance: Usually overpriced vs a simple term plan',
          'Travel insurance with credit cards: Check if your card already provides coverage',
        ],
      },
    ],
    keyTakeaways: [
      'Buy term life insurance early — premiums are lowest when you are young and healthy',
      'Never use insurance as an investment vehicle — returns are poor after charges',
      'Health insurance with a high sum insured protects against medical inflation',
      'Disability is more likely than death during working years — do not ignore income protection',
      'Review your policies annually as life changes (marriage, children, mortgage)',
    ],
    tip: 'Buy term insurance before age 35. A ₹1 crore policy costs 2–3× more at 45 versus 30. Every year of delay permanently increases your premium.',
    warning: 'Read the exclusions section of any health insurance policy carefully. Pre-existing conditions, specific treatments, and waiting periods are the most common reasons claims are rejected.',
    relatedTopics: [
      { label: 'Emergency Fund', href: '/personal-finance/emergency-fund' },
      { label: 'Tax Planning', href: '/personal-finance/tax-planning' },
      { label: 'Retirement', href: '/personal-finance/retirement' },
    ],
  },

  'tax-planning': {
    title: 'Tax Planning',
    description: 'Legally reduce your tax liability with smart use of deductions, tax-advantaged accounts, and timing strategies.',
    emoji: '🧾',
    parentLabel: 'Personal Finance',
    parentHref: '/personal-finance',
    overview: 'Tax planning is the legal arrangement of your finances to minimise tax liability within the framework of the law. It is different from tax evasion, which is illegal. Every rupee saved in taxes is a rupee that compounds in your investment portfolio for decades. The most powerful tax-saving tools are also the best wealth-building vehicles.',
    sections: [
      {
        heading: 'India: Section 80C Deductions (₹1.5 Lakh Limit)',
        body: 'Section 80C of the Income Tax Act allows deductions up to ₹1.5 lakh from taxable income. Choosing where to invest this ₹1.5 lakh wisely makes a significant difference.',
        bullets: [
          'ELSS (Equity Linked Savings Scheme): 3-year lock-in, market-linked returns, best for long-term wealth',
          'PPF (Public Provident Fund): 15-year lock-in, 7.1% tax-free interest, sovereign guarantee',
          'NPS (National Pension System): Additional ₹50,000 deduction under 80CCD(1B) beyond 80C',
          'EPF contributions (employee + employer): Already included for salaried employees',
          'ULIP, NSC, tax-saving FDs: Less efficient — ELSS + PPF is a better combination',
        ],
      },
      {
        heading: 'US: Tax-Advantaged Retirement Accounts',
        body: 'The US tax code strongly incentivises retirement saving through accounts that either defer taxes or eliminate them entirely.',
        bullets: [
          '401(k) Traditional: Pre-tax contributions reduce taxable income now; $23,500 limit (2025)',
          'Roth IRA: After-tax contributions, tax-free growth and withdrawals; $7,000 limit (2025)',
          'HSA (Health Savings Account): Triple tax advantage — deductible, grows tax-free, withdraws tax-free for medical',
          'FSA (Flexible Spending Account): Up to $3,300 (2025) pre-tax for medical/dependent care',
          'Strategy: Contribute enough to 401(k) for full employer match → max HSA → max Roth IRA → return to 401(k)',
        ],
      },
      {
        heading: 'Capital Gains Tax Planning',
        body: 'When you sell investments matters as much as which investments you sell. Timing your sales can significantly reduce your tax bill.',
        bullets: [
          'India LTCG: Equity held >12 months taxed at 12.5% above ₹1.25 lakh exemption — harvest gains each year up to the exemption',
          'India STCG: Equity held <12 months taxed at 20% — avoid short-term churning',
          'US: Long-term capital gains (held >1 year) taxed at 0%, 15%, or 20% — far lower than short-term rates',
          'Tax-loss harvesting: Sell losing positions to offset gains; repurchase after 30 days (US wash-sale rule)',
          'Donate appreciated securities to charity instead of selling — avoid the capital gains entirely',
        ],
      },
      {
        heading: 'Deductions and Credits Most People Miss',
        body: 'Legitimate deductions reduce your taxable income. Credits directly reduce your tax bill — even more valuable.',
        bullets: [
          'India: HRA exemption, home loan interest (Section 24), medical insurance premium (Section 80D)',
          'India: LTA (Leave Travel Allowance) for domestic travel, education loan interest (Section 80E)',
          'US: Student loan interest deduction (up to $2,500), mortgage interest deduction',
          'US: Child tax credit ($2,000 per child), Earned Income Tax Credit for lower incomes',
          'US: Home office deduction for self-employed — requires dedicated space',
        ],
      },
    ],
    keyTakeaways: [
      'Max out tax-advantaged accounts every year before investing in taxable accounts',
      'India: ELSS is better than most 80C options — 3-year lock-in with market returns',
      'Hold investments longer than the long-term capital gains threshold to cut your tax rate significantly',
      'Tax-loss harvesting can save meaningful amounts in a volatile market',
      'Consult a CA (India) or CPA (US) for strategies specific to your income bracket',
    ],
    tip: 'In India, book ₹1.25 lakh of equity LTCG each March before financial year-end — it is completely tax-free and resets your cost basis, reducing future tax liability.',
    relatedTopics: [
      { label: 'Retirement Planning', href: '/personal-finance/retirement' },
      { label: 'Investing Basics', href: '/investing' },
      { label: 'India Markets', href: '/markets/india' },
    ],
    ctaLabel: 'LTCG Calculator',
    ctaHref: '/calculators',
  },

  retirement: {
    title: 'Retirement Planning',
    description: 'Build a retirement corpus that sustains your lifestyle for 25–30 years after you stop working.',
    emoji: '🏖️',
    parentLabel: 'Personal Finance',
    parentHref: '/personal-finance',
    overview: 'Retirement planning is the process of building enough wealth to replace your active income for life after work. The biggest risk is outliving your money — with life expectancy increasing, a retirement at 60 may need to fund 30+ years of expenses, adjusted for inflation. Starting early is the single most powerful action you can take.',
    sections: [
      {
        heading: 'How Much Do You Need to Retire?',
        body: 'The 4% rule (US) or a similar withdrawal rate framework helps calculate your target corpus. You need a corpus large enough that withdrawing 4% annually covers your expenses indefinitely.',
        bullets: [
          '4% Rule: Annual expenses × 25 = target corpus (e.g. $60,000/year × 25 = $1.5M)',
          'India variant: Use 3.5% withdrawal rate given higher inflation — expenses × 28-30',
          'Adjust for pension/EPF/Social Security income that reduces your portfolio withdrawal need',
          'Account for healthcare cost inflation (12-15% in India, significant in US)',
          'Use our Retirement Planner calculator for a personalised projection',
        ],
      },
      {
        heading: 'India: Retirement Account Options',
        body: 'India offers several tax-efficient retirement vehicles, each with different risk-return profiles.',
        bullets: [
          'NPS (National Pension System): Market-linked, 40% annuity on maturity, additional ₹50K 80CCD deduction',
          'EPF (Employee Provident Fund): 8.25% return (FY24), mandatory for salaried — VPF for extra contributions',
          'PPF: 7.1% tax-free, 15-year tenure, extendable in blocks of 5 years',
          'ELSS Mutual Funds: Best long-term equity returns with 80C benefit',
          'Annuity plans: Convert corpus to guaranteed income at retirement — consider inflation erosion',
        ],
      },
      {
        heading: 'US: Retirement Account Options',
        body: 'The US retirement system centres around employer-sponsored 401(k) plans and individual IRAs, offering powerful tax advantages.',
        bullets: [
          '401(k): $23,500 limit (2025), employer match is free money — always capture 100%',
          'Roth IRA: $7,000 limit (2025), tax-free in retirement — ideal if you expect higher future tax rates',
          'Traditional IRA: Tax-deductible contributions if under income limit, tax-deferred growth',
          'Solo 401(k): For self-employed — up to $70,000 total contribution (2025)',
          'Social Security: Maximise benefit by delaying to age 70 — 77% more than claiming at 62',
        ],
      },
      {
        heading: 'The Power of Starting Early',
        body: 'Compound growth rewards patience enormously. The earlier you start, the more decades your money has to multiply.',
        table: {
          headers: ['Start Age', 'Monthly SIP', 'Stop Age', 'Corpus at 60', 'Total Invested'],
          rows: [
            ['25', '₹5,000', '60 (35 yrs)', '₹3.5 crore', '₹21 lakh'],
            ['30', '₹5,000', '60 (30 yrs)', '₹2.0 crore', '₹18 lakh'],
            ['35', '₹5,000', '60 (25 yrs)', '₹1.1 crore', '₹15 lakh'],
            ['40', '₹10,000', '60 (20 yrs)', '₹1.0 crore', '₹24 lakh'],
          ],
        },
      },
    ],
    keyTakeaways: [
      'Start contributing to retirement accounts as soon as you earn your first salary',
      'Always capture the full employer 401(k) match — it is a 50-100% instant return',
      'Target saving 15% of gross income for retirement across all accounts',
      'Inflation erodes purchasing power — equity must form the core of a long-horizon retirement portfolio',
      'The 4% rule: multiply your annual expenses by 25 to find your retirement corpus target',
    ],
    tip: 'Increase your retirement contribution by 1% of salary every year when you receive a raise. You will not miss money you never see, and the compounding effect over decades is enormous.',
    warning: 'Early withdrawal from retirement accounts (before 59½ in the US or maturity in India) triggers taxes plus penalties. Treat these accounts as completely untouchable.',
    relatedTopics: [
      { label: 'Tax Planning', href: '/personal-finance/tax-planning' },
      { label: 'ELSS / PPF / NPS', href: '/markets/india/elss-ppf-nps' },
      { label: '401(k) Guide', href: '/markets/us/401k-guide' },
    ],
    ctaLabel: 'Retirement Planner',
    ctaHref: '/calculators',
  },

  'emergency-fund': {
    title: 'Emergency Fund',
    description: 'Build and maintain a financial safety net that protects your investments during life\'s unexpected moments.',
    emoji: '🆘',
    parentLabel: 'Personal Finance',
    parentHref: '/personal-finance',
    overview: 'An emergency fund is liquid money set aside exclusively for genuine financial emergencies — job loss, medical crisis, urgent home repairs, or unexpected travel. It is not an investment; its job is to be available immediately. Without it, every financial setback forces you to sell investments at the worst possible moment or take on high-interest debt.',
    sections: [
      {
        heading: 'How Much Should You Save?',
        body: 'The standard recommendation is 3–6 months of essential living expenses. Your target depends on your income stability and personal circumstances.',
        bullets: [
          '3 months: Dual-income households with stable salaried jobs and no dependents',
          '6 months: Single-income households, variable income (freelancer/business), those with dependents',
          '9-12 months: Self-employed, commission-based income, industries prone to layoffs',
          'Calculate based on essential expenses only: rent, food, utilities, EMIs, insurance — not total spending',
        ],
      },
      {
        heading: 'Where to Keep Your Emergency Fund',
        body: 'Safety and instant accessibility trump returns. The emergency fund should never be at risk of loss or locked up.',
        bullets: [
          'India: High-yield savings account (DCB, RBL, IndusInd paying 7–8%), liquid mutual funds (same-day redemption)',
          'US: High-yield savings account (SoFi, Marcus, Ally paying 4.5–5% APY), money market account',
          'Avoid: Fixed deposits with penalties, equity funds, crypto — any instrument that could lose value or have delay in redemption',
          'Liquid funds in India offer better returns than savings accounts with T+1 redemption — a good option for the bulk of your fund',
        ],
      },
      {
        heading: 'How to Build It Systematically',
        body: 'Most people struggle to build an emergency fund because they try to save whatever is left at the end of the month. Nothing is ever left. The solution is automation.',
        bullets: [
          'Open a separate account labelled "Emergency Fund" — psychological separation matters',
          'Set up an automatic transfer of a fixed amount on salary day',
          'Start with ₹1,000–2,000/month (India) or $100–200/month (US) if starting from zero',
          'Direct any windfalls (bonus, tax refund, gift) to accelerate the fund',
          'Once built, replenish any withdrawal within 3–6 months as a priority',
        ],
      },
    ],
    keyTakeaways: [
      '3-6 months of essential expenses is the standard target; more if your income is variable',
      'Keep emergency funds in liquid, zero-risk accounts — returns are secondary to availability',
      'A separate labelled account reduces temptation to spend emergency savings',
      'Replenish immediately after any withdrawal — the fund is only useful if it is always full',
      'Without an emergency fund, one setback can destroy years of investing progress',
    ],
    tip: 'Keep 1 month of expenses in your savings account for immediate access, and the remaining 2-5 months in a liquid mutual fund (India) or high-yield savings account for better returns while maintaining fast access.',
    relatedTopics: [
      { label: 'Budgeting', href: '/personal-finance/budgeting' },
      { label: 'Insurance', href: '/personal-finance/insurance' },
    ],
  },

  'credit-scores': {
    title: 'Credit Scores',
    description: 'Understand what drives your credit score and how to build excellent credit that saves you money for life.',
    emoji: '⭐',
    parentLabel: 'Personal Finance',
    parentHref: '/personal-finance',
    overview: 'A credit score is a three-digit number that summarises your creditworthiness based on your borrowing and repayment history. Lenders use it to decide whether to approve loans and at what interest rate. A high credit score means lower interest rates on mortgages, car loans, and credit cards — saving you hundreds of thousands over a lifetime.',
    sections: [
      {
        heading: 'India: CIBIL Score (300–900)',
        body: 'TransUnion CIBIL is the most widely used credit bureau in India. A score above 750 is considered excellent and qualifies you for the best interest rates.',
        bullets: [
          '750–900: Excellent — best loan terms, lowest rates, easy approvals',
          '700–749: Good — most loans approved, slightly higher rates',
          '650–699: Fair — some lenders may hesitate, higher rates',
          'Below 650: Poor — limited options, very high rates or rejections',
          'Check free at: CIBIL.com (1 free report/year), or BankBazaar, Paisabazaar for unlimited free checks',
        ],
      },
      {
        heading: 'US: FICO Score (300–850)',
        body: 'Most US lenders use FICO scores. A score above 740 is considered very good; 800+ is exceptional.',
        bullets: [
          '800+: Exceptional — best rates on everything',
          '740–799: Very Good — near-best rates',
          '670–739: Good — average rates available',
          '580–669: Fair — subprime rates, higher costs',
          'Below 580: Poor — very limited options',
          'Check free: AnnualCreditReport.com (official), Credit Karma, Experian app',
        ],
      },
      {
        heading: 'The 5 Factors That Determine Your Score',
        body: 'Understanding these factors shows you exactly where to focus to improve your score.',
        table: {
          headers: ['Factor', 'FICO Weight', 'What Helps'],
          rows: [
            ['Payment History', '35%', 'Never miss a payment — set autopay for minimums'],
            ['Credit Utilisation', '30%', 'Keep balances below 30% of credit limit; below 10% for best scores'],
            ['Credit Age', '15%', 'Keep oldest accounts open; do not close old cards'],
            ['Credit Mix', '10%', 'Having both revolving (cards) and instalment (loans) helps'],
            ['New Credit', '10%', 'Avoid opening multiple accounts in a short period'],
          ],
        },
      },
      {
        heading: 'How to Build or Repair Your Credit Score',
        body: 'Whether starting from scratch or recovering from past problems, these steps consistently improve scores over 6–12 months.',
        bullets: [
          'Pay every bill on or before the due date — even one missed payment hurts significantly',
          'Reduce credit card balances to below 30% of the limit (10% is ideal)',
          'Do not close old credit card accounts — length of history matters',
          'Dispute any errors on your credit report — errors are more common than people realise',
          'Become an authorised user on a family member\'s old, well-managed account',
          'A secured credit card (India: against FD; US: cash deposit) builds credit from zero',
        ],
      },
    ],
    keyTakeaways: [
      'Payment history is the single biggest factor — never miss a due date',
      'Keep credit card utilisation below 30% of your total credit limit at all times',
      'Do not close old accounts — credit age counts in your score calculation',
      'Check your report annually for errors and dispute anything inaccurate',
      'A good credit score saves significant money on every loan for the rest of your life',
    ],
    tip: 'Set all credit card minimum payments to autopay. This eliminates the risk of a missed payment from forgetfulness — the number one credit score killer.',
    relatedTopics: [
      { label: 'Budgeting', href: '/personal-finance/budgeting' },
      { label: 'Emergency Fund', href: '/personal-finance/emergency-fund' },
    ],
  },

  // ── INVESTING ────────────────────────────────────────────

  'stock-markets': {
    title: 'Stock Markets',
    description: 'Learn how stock markets work, how companies are valued, and how to start investing in equities with confidence.',
    emoji: '📊',
    parentLabel: 'Investing',
    parentHref: '/investing',
    overview: 'A stock market is an exchange where buyers and sellers trade ownership stakes in publicly listed companies. When you buy a share, you become a part-owner of that company. Stock markets are the most powerful long-term wealth-building vehicles available — the S&P 500 has returned approximately 10.4% annually since 1957, and Nifty 50 has returned roughly 12–14% CAGR since inception.',
    sections: [
      {
        heading: 'How Stock Markets Work',
        body: 'Companies raise capital by selling shares to the public through an Initial Public Offering (IPO). After listing, those shares trade on exchanges between investors — the company does not receive money from secondary market transactions.',
        bullets: [
          'Primary market: IPO — company sells new shares to raise capital',
          'Secondary market: Exchange trading — existing shares change hands between investors',
          'Price discovery: Driven by supply and demand, earnings expectations, and macroeconomic factors',
          'Market hours: India (NSE/BSE) — 9:15 AM to 3:30 PM IST; US (NYSE/NASDAQ) — 9:30 AM to 4:00 PM EST',
        ],
      },
      {
        heading: 'How to Value a Stock',
        body: 'Valuation determines whether a stock is cheap or expensive relative to its earnings power and growth prospects.',
        bullets: [
          'P/E Ratio (Price-to-Earnings): Stock price ÷ EPS. Lower can mean value; higher means growth expectations',
          'EPS (Earnings Per Share): Company profits divided by total shares outstanding',
          'Market Cap: Share price × total shares — classifies companies as large, mid, or small-cap',
          'P/B Ratio (Price-to-Book): Useful for banks and asset-heavy companies',
          'Free Cash Flow: Actual cash generated after capex — the truest measure of profitability',
        ],
      },
      {
        heading: 'How to Start Investing in Stocks',
        body: 'Getting started is straightforward. You need a brokerage account and a basic understanding of what you are buying.',
        bullets: [
          'India: Open a Demat + trading account with Zerodha, Groww, or Upstox (takes 1–2 days online)',
          'US: Open an account with Fidelity, Charles Schwab, or TD Ameritrade ($0 minimum, $0 commission)',
          'Start with index funds or ETFs before picking individual stocks',
          'Invest only money you will not need for at least 5 years — markets are volatile short-term',
          'Use SIP/dollar-cost averaging to invest regularly regardless of market levels',
        ],
      },
      {
        heading: 'Direct Stocks vs Index Funds',
        body: 'Most individual investors underperform the index because stock picking is genuinely difficult. Index funds offer a simpler, more reliable path to market returns.',
        table: {
          headers: ['Approach', 'Expected Return', 'Time Required', 'Risk', 'Suitable For'],
          rows: [
            ['Index Fund/ETF', 'Market average (~12% CAGR)', 'Minimal', 'Market risk only', 'Most investors'],
            ['Diversified Equity MF', 'Market ± 2-3%', 'Low (periodic review)', 'Market risk', 'Beginners to intermediate'],
            ['Direct Stock Picking', 'Varies widely', 'Significant', 'Company + market risk', 'Experienced investors'],
          ],
        },
      },
    ],
    keyTakeaways: [
      'Stocks represent ownership in businesses — their value follows business performance long-term',
      'Index funds reliably beat most active fund managers over 10+ year periods',
      'Time in the market beats timing the market — stay invested through volatility',
      'Diversify across sectors and geographies to manage company-specific risk',
      'Invest via SIP to benefit from rupee/dollar-cost averaging',
    ],
    tip: 'If you are unsure where to start, invest in a Nifty 50 or S&P 500 index fund via monthly SIP and keep adding for 20+ years. This alone has made thousands of ordinary people wealthy.',
    relatedTopics: [
      { label: 'Mutual Funds', href: '/investing/mutual-funds' },
      { label: 'ETFs', href: '/investing/etfs' },
      { label: 'NSE & BSE', href: '/markets/india/nse-bse' },
    ],
    ctaLabel: 'CAGR Calculator',
    ctaHref: '/calculators',
  },

  'mutual-funds': {
    title: 'Mutual Funds',
    description: 'Pool your money with thousands of investors to access professional fund management and instant diversification.',
    emoji: '🏦',
    parentLabel: 'Investing',
    parentHref: '/investing',
    overview: 'A mutual fund pools money from many investors and invests it in a diversified portfolio of stocks, bonds, or other assets managed by a professional fund manager. They offer instant diversification, professional management, and regulatory oversight — making them the most popular investment vehicle for retail investors in India.',
    sections: [
      {
        heading: 'Types of Mutual Funds',
        body: 'Mutual funds are classified by what they invest in. Each type has a different risk-return profile suited to different investor goals and time horizons.',
        bullets: [
          'Equity Funds: Primarily invest in stocks — higher risk, higher returns; ideal for 5+ year goals',
          'Debt Funds: Invest in bonds and money market instruments — lower risk, moderate returns',
          'Hybrid Funds: Mix of equity and debt — balanced risk; good for medium-term goals',
          'Index Funds: Track a specific index (Nifty 50, S&P 500) — low cost, no manager risk',
          'ELSS: Equity funds with 80C tax benefit and 3-year lock-in',
          'Liquid Funds: Ultra-short-term debt — used as emergency fund parking or cash management',
        ],
      },
      {
        heading: 'SIP vs Lump Sum',
        body: 'SIP (Systematic Investment Plan) means investing a fixed amount monthly. Lump sum means investing a large amount at once.',
        bullets: [
          'SIP removes timing risk — you buy at all prices, averaging your cost over time',
          'Lump sum is better when deployed at market lows (20%+ correction from highs)',
          'For most salaried investors with monthly income: SIP is the optimal strategy',
          'Even ₹500/month via SIP in a Nifty 50 fund can build significant wealth over 20 years',
        ],
      },
      {
        heading: 'How to Choose a Mutual Fund',
        body: 'Selecting funds based on recent performance is the most common — and costly — mistake. Here is what actually matters.',
        bullets: [
          'Expense ratio: Lower is better — index funds charge 0.05–0.2%; actively managed charge 0.5–2%',
          'Consistency: 5-year and 10-year rolling returns vs benchmark — not just 1-year returns',
          'Fund size (AUM): Very small funds have liquidity risk; very large funds struggle to outperform',
          'Fund manager tenure: Consistent management delivers more predictable outcomes',
          'Check ratings: CRISIL, Value Research, Morningstar ratings provide independent assessments',
        ],
      },
      {
        heading: 'Platforms to Invest in India',
        body: 'Direct plans (bought without a distributor) always have lower expense ratios than regular plans. This difference compounds significantly over years.',
        bullets: [
          'Coin by Zerodha: Direct plans, zero commission, clean interface',
          'Groww: Best for beginners, intuitive UI, direct plans available',
          'Kuvera: 100% direct plans, goal-based investing, excellent for tracking',
          'MF Central / AMC websites: Directly from fund houses, zero cost',
          'AVOID: Traditional agents and bank advisors who push regular plans for commission',
        ],
      },
    ],
    keyTakeaways: [
      'Always invest in direct plans — they have lower expense ratios than regular plans',
      'For most investors, a Nifty 50 index fund + a flexi-cap fund covers most needs',
      'Do not chase last year\'s top-performing fund — past performance does not predict future returns',
      'SIP is more powerful than timing the market for salaried investors',
      'Equity funds need a minimum 5-year horizon to smooth out market volatility',
    ],
    tip: 'Start with a Nifty 50 index fund. Add a mid-cap fund when you understand equity markets better. Keep total number of funds to 3-4 maximum — more funds just create overlap and confusion.',
    relatedTopics: [
      { label: 'ETFs', href: '/investing/etfs' },
      { label: 'ELSS / PPF / NPS', href: '/markets/india/elss-ppf-nps' },
      { label: 'Tax Planning', href: '/personal-finance/tax-planning' },
    ],
    ctaLabel: 'SIP Calculator',
    ctaHref: '/calculators',
  },

  etfs: {
    title: 'ETFs (Exchange-Traded Funds)',
    description: 'Low-cost, flexible funds that trade like stocks. ETFs are the building blocks of modern portfolio construction.',
    emoji: '📦',
    parentLabel: 'Investing',
    parentHref: '/investing',
    overview: 'An ETF (Exchange-Traded Fund) is a collection of securities — stocks, bonds, or commodities — that trades on an exchange like a single stock. ETFs offer the diversification of a mutual fund with the flexibility of stock trading, at extremely low costs. Index ETFs in particular have revolutionised investing by making market returns accessible to everyone at minimal cost.',
    sections: [
      {
        heading: 'ETFs vs Mutual Funds: Key Differences',
        body: 'Both are pooled investment vehicles, but they differ in how they are traded, priced, and managed.',
        table: {
          headers: ['Feature', 'ETF', 'Mutual Fund'],
          rows: [
            ['Trading', 'Any time during market hours', 'Once daily at NAV'],
            ['Minimum Investment', 'Price of 1 unit', 'Usually ₹500–1,000'],
            ['Expense Ratio', '0.03–0.5%', '0.1–2.5%'],
            ['SIP Facility', 'Not directly (brokers may offer)', 'Yes, standard feature'],
            ['Tax Efficiency (US)', 'Very high — in-kind redemption', 'Lower — capital gain distributions'],
          ],
        },
      },
      {
        heading: 'Types of ETFs',
        body: 'ETFs cover virtually every asset class and strategy. The most useful for retail investors are simple index ETFs.',
        bullets: [
          'Index ETFs: Track market indexes like Nifty 50, S&P 500 — lowest cost, highest reliability',
          'Sector ETFs: Focus on specific industries (IT, pharma, banking) — for tactical allocation',
          'Bond ETFs: Fixed income exposure — stability component of a portfolio',
          'Gold ETFs: Physical gold exposure without storage risk (India: Nippon Gold ETF, SBI Gold ETF)',
          'International ETFs: Access foreign markets (India investors: Motilal NASDAQ 100 ETF)',
          'Factor ETFs: Low volatility, momentum, quality — for those who want tilted exposure',
        ],
      },
      {
        heading: 'Best ETFs for Indian Investors',
        body: 'These are the most widely used and liquid ETFs available on Indian exchanges.',
        bullets: [
          'Nifty 50 ETF: Nippon India ETF Nifty 50, HDFC Nifty 50 ETF — core large-cap exposure',
          'Nifty Next 50 ETF: Mid-large cap blend with higher growth potential',
          'NIFTY Bank ETF: Financial sector concentration — higher volatility',
          'Gold ETF: Nippon India ETF Gold BeES — hedge against inflation and currency risk',
          'Nifty IT ETF: Technology sector exposure — high concentration risk',
        ],
      },
      {
        heading: 'Best ETFs for US Investors',
        body: 'These Vanguard, BlackRock, and Fidelity ETFs form the core of most American investor portfolios.',
        bullets: [
          'VTI (Vanguard Total Market ETF): Entire US market, 0.03% expense ratio',
          'VOO (Vanguard S&P 500 ETF): S&P 500, 0.03% expense ratio',
          'QQQ (Invesco NASDAQ-100 ETF): Tech-heavy, higher growth and higher volatility',
          'BND (Vanguard Bond ETF): US bond market, 0.03% — stability component',
          'VXUS (Vanguard Total International ETF): All non-US markets, 0.07%',
        ],
      },
    ],
    keyTakeaways: [
      'Index ETFs are the lowest-cost way to achieve broad market diversification',
      'ETFs trade like stocks — you can buy and sell intraday at market prices',
      'Expense ratios for index ETFs are 10–50× lower than most actively managed funds',
      'In the US, ETFs are more tax-efficient than mutual funds due to in-kind redemption',
      'A two-fund portfolio (VTI + VXUS or equivalent) covers the entire global market',
    ],
    tip: 'For long-term investors in India, index mutual funds (not ETFs) are often more convenient because they support SIP directly. ETFs require a Demat account and active buying.',
    relatedTopics: [
      { label: 'Mutual Funds', href: '/investing/mutual-funds' },
      { label: 'Stock Markets', href: '/investing/stock-markets' },
      { label: 'S&P 500 Basics', href: '/markets/us/sp500-basics' },
    ],
  },

  cryptocurrency: {
    title: 'Cryptocurrency',
    description: 'Understand what crypto is, how blockchain works, and how to approach digital assets with appropriate caution.',
    emoji: '₿',
    parentLabel: 'Investing',
    parentHref: '/investing',
    overview: 'Cryptocurrency is a digital or virtual currency that uses cryptography for security and operates on a decentralised network — typically a blockchain. Bitcoin, launched in 2009, was the first. Today there are thousands of cryptocurrencies. They represent a genuinely new asset class, but also one of the most volatile and speculative investments available.',
    sections: [
      {
        heading: 'How Blockchain Works',
        body: 'A blockchain is a distributed ledger — a record of transactions maintained simultaneously across thousands of computers. No single entity controls it, making it resistant to censorship or manipulation.',
        bullets: [
          'Transactions are grouped into "blocks" and chained together cryptographically',
          'Every participant has a copy of the entire chain — altering history requires changing all copies simultaneously',
          'Consensus mechanisms (Proof of Work, Proof of Stake) determine how new blocks are validated',
          'Bitcoin uses Proof of Work (mining); Ethereum switched to Proof of Stake in 2022',
        ],
      },
      {
        heading: 'Major Cryptocurrencies',
        body: 'The cryptocurrency market is dominated by a handful of assets with genuine use cases, alongside thousands of speculative tokens.',
        bullets: [
          'Bitcoin (BTC): Digital gold — limited supply of 21 million, store of value narrative',
          'Ethereum (ETH): Programmable blockchain — smart contracts, DeFi, NFTs run on it',
          'Stablecoins (USDC, USDT): Pegged to the US dollar — useful for transactions, not investment',
          'Altcoins (SOL, BNB, XRP etc): Higher risk, higher speculative potential, often highly correlated to BTC',
        ],
      },
      {
        heading: 'Risks Every Investor Must Understand',
        body: 'Cryptocurrency carries risks that do not exist in traditional markets. These are not theoretical — they have materialised repeatedly.',
        bullets: [
          'Extreme volatility: Bitcoin has dropped 80%+ multiple times; altcoins have gone to zero',
          'Regulatory risk: India introduced 30% flat tax on crypto gains + 1% TDS in 2022; rules evolve constantly',
          'Exchange risk: FTX, a top-5 exchange, collapsed in 2022 — $8 billion in customer funds lost',
          'Scam prevalence: $11.36 billion lost to crypto scams globally in 2024',
          'No consumer protection: Unlike banks, there is no government guarantee or recourse',
        ],
      },
      {
        heading: 'How to Approach Crypto Responsibly',
        body: 'For those who choose to allocate to crypto, position sizing and security are the most important considerations.',
        bullets: [
          'Limit allocation to 1-5% of total portfolio — only money you can afford to lose entirely',
          'Stick to Bitcoin and Ethereum — they have the longest track records and deepest liquidity',
          'Use regulated exchanges: CoinDCX, WazirX (India); Coinbase, Kraken (US)',
          'Move large holdings to a hardware wallet (Ledger, Trezor) — not your keys, not your coins',
          'Never invest borrowed money, retirement savings, or emergency funds in crypto',
        ],
      },
    ],
    keyTakeaways: [
      'Crypto is a high-risk, speculative asset class — position-size accordingly (1-5% max)',
      'Bitcoin and Ethereum have the best risk-adjusted profiles among cryptocurrencies',
      'India taxes crypto gains at a flat 30% with 1% TDS — factor this into return calculations',
      'Never keep large amounts on exchanges — withdraw to self-custody hardware wallets',
      'Most altcoins have no lasting value — focus on assets with genuine use cases',
    ],
    warning: 'Do not invest in any cryptocurrency because of social media hype, celebrity endorsements, or promises of guaranteed returns. These are the most reliable markers of scams.',
    relatedTopics: [
      { label: 'Stock Markets', href: '/investing/stock-markets' },
      { label: 'ETFs', href: '/investing/etfs' },
    ],
  },

  bonds: {
    title: 'Bonds',
    description: 'The stability component of every portfolio. Learn how bonds work, their types, and when to own them.',
    emoji: '📜',
    parentLabel: 'Investing',
    parentHref: '/investing',
    overview: 'A bond is a loan you make to a government or corporation. In return, you receive regular interest payments (coupon) and the principal back at maturity. Bonds are the traditional counterweight to equities in a portfolio — they tend to hold value or appreciate when stocks fall, reducing overall portfolio volatility.',
    sections: [
      {
        heading: 'How Bonds Work',
        body: 'Understanding the relationship between bond prices and interest rates is fundamental.',
        bullets: [
          'Face value (par): The amount paid at maturity, typically ₹1,000 (India) or $1,000 (US)',
          'Coupon rate: Annual interest rate as a percentage of face value',
          'Yield: Actual return based on current price — if price falls, yield rises (inverse relationship)',
          'Duration: Sensitivity of the bond price to interest rate changes — longer bonds are more sensitive',
          'When interest rates rise, existing bond prices fall; when rates fall, bond prices rise',
        ],
      },
      {
        heading: 'Types of Bonds',
        body: 'Different bond types offer different risk-return profiles. Credit quality is the key variable.',
        bullets: [
          'Government bonds: Lowest risk — backed by government; India G-Secs, US Treasuries',
          'Corporate bonds: Higher yield, higher risk — quality varies by company credit rating',
          'Municipal bonds (US): Tax-exempt interest — valuable for high-income investors',
          'Sovereign Gold Bonds (India): Gold-linked return + 2.5% interest, tax-free at maturity',
          'RBI Floating Rate Savings Bonds: Linked to NSC rate, currently 8.05% (2025)',
        ],
      },
      {
        heading: 'Bonds in a Portfolio',
        body: 'The traditional 60/40 portfolio (60% stocks, 40% bonds) is a time-tested allocation for moderate-risk investors.',
        bullets: [
          'Young investors (20s-30s): Lower bond allocation (10-20%) — time horizon is long, can ride volatility',
          'Mid-career (40s-50s): Increasing bond allocation (20-40%) — capital preservation gains importance',
          'Near/at retirement: Higher allocation (40-60%) — income and stability over growth',
          'In India, debt mutual funds (which hold bonds) provide easier access than direct bond buying',
        ],
      },
    ],
    keyTakeaways: [
      'Bond prices and interest rates move in opposite directions — understand this before buying',
      'Government bonds are the safest; corporate bonds offer higher yield for more risk',
      'In India, debt mutual funds and SGBs are often better than direct bonds for retail investors',
      'Bonds provide stability and income — essential in any portfolio approaching retirement',
      'Duration risk is the main risk in a rising interest rate environment',
    ],
    relatedTopics: [
      { label: 'Mutual Funds', href: '/investing/mutual-funds' },
      { label: 'Retirement Planning', href: '/personal-finance/retirement' },
      { label: 'ELSS / PPF / NPS', href: '/markets/india/elss-ppf-nps' },
    ],
  },

  'real-estate': {
    title: 'Real Estate Investing',
    description: 'Physical property, REITs, and real estate funds — how to build wealth through real estate.',
    emoji: '🏠',
    parentLabel: 'Investing',
    parentHref: '/investing',
    overview: 'Real estate is one of the oldest and most reliable wealth-building assets in history. It offers rental income, capital appreciation, inflation hedge, and leverage. However, it requires large capital, is illiquid, has high transaction costs, and requires active management. REITs offer a more accessible alternative for most retail investors.',
    sections: [
      {
        heading: 'Direct Real Estate Investment',
        body: 'Buying physical property offers the most control but requires the most capital and involvement.',
        bullets: [
          'Residential rental: Steady income but management-intensive; gross rental yield in India: 2-4%',
          'Commercial property: Higher yields (6-9%) but larger capital requirement and vacancy risk',
          'Key metrics: Gross rental yield = annual rent ÷ property price; cap rate for commercial',
          'Leverage amplifies returns but also losses — mortgage risk is real in falling markets',
          'Transaction costs: Stamp duty, registration, brokerage add 8-12% to purchase cost in India',
        ],
      },
      {
        heading: 'REITs (Real Estate Investment Trusts)',
        body: 'REITs allow you to invest in large commercial real estate portfolios through stock exchange-traded units, starting with small amounts.',
        bullets: [
          'India REITs: Embassy Office Parks, Mindspace, Nexus Malls — listed on NSE/BSE',
          'India REITs must distribute 90% of net distributable income as dividends',
          'Typical yield: 6-8% dividend yield plus capital appreciation potential',
          'US REITs: VNQ (Vanguard Real Estate ETF) provides broad US REIT exposure; $0 minimum',
          'Advantages: Liquidity (tradeable daily), diversification, no management burden',
        ],
      },
      {
        heading: 'Real Estate vs Equities: The Honest Comparison',
        body: 'Many people believe real estate is always a better investment than stocks. Historical data tells a more nuanced story.',
        table: {
          headers: ['Factor', 'Real Estate', 'Equities (Index Funds)'],
          rows: [
            ['10-yr avg return (India)', '8-12% CAGR (location-dependent)', '12-15% CAGR (Nifty 50)'],
            ['Minimum investment', 'High (₹20L+)', 'Low (₹500)'],
            ['Liquidity', 'Low (months to sell)', 'High (instant)'],
            ['Leverage available', 'Yes (mortgage)', 'Limited (avoid margin)'],
            ['Passive income', 'Rental yield 2-4%', 'Dividend yield 1-2%'],
            ['Management required', 'Significant', 'Minimal'],
          ],
        },
      },
    ],
    keyTakeaways: [
      'REITs provide real estate exposure with stock-like liquidity and low minimum investment',
      'Residential property in India has low rental yields (2-4%) — appreciation is the main return driver',
      'Transaction costs of 8-12% mean real estate requires long holding periods to be profitable',
      'Use EMI calculators to model the true cost of home loans before buying',
      'Never buy investment property you cannot comfortably afford without rental income',
    ],
    relatedTopics: [
      { label: 'Mutual Funds', href: '/investing/mutual-funds' },
      { label: 'Bonds', href: '/investing/bonds' },
    ],
    ctaLabel: 'EMI Calculator',
    ctaHref: '/calculators',
  },

  // ── TRADING ─────────────────────────────────────────────

  'trading-introduction': {
    title: 'Introduction to Trading',
    description: 'Understand what trading is, how it differs from investing, and whether it is right for you.',
    emoji: '📖',
    parentLabel: 'Trading',
    parentHref: '/trading',
    overview: 'Trading involves buying and selling financial instruments — stocks, futures, options, currencies, or commodities — over shorter time horizons to profit from price movements. Unlike investing, which builds wealth over years through business ownership, trading seeks to capture short-term price fluctuations. It demands significant skill, discipline, and risk management.',
    sections: [
      { heading: 'Trading vs Investing', body: 'The distinction is primarily time horizon and intent. Investing means buying and holding assets for long-term appreciation. Trading means buying and selling frequently to capture short-term moves.', table: { headers: ['Aspect', 'Trading', 'Investing'], rows: [['Time horizon', 'Seconds to weeks', 'Years to decades'], ['Analysis used', 'Technical analysis primarily', 'Fundamental analysis primarily'], ['Tax treatment', 'STCG — higher rates', 'LTCG — lower rates'], ['Skill required', 'Very high', 'Moderate'], ['Time commitment', 'High to very high', 'Low'], ['Historical success rate', '~10% of traders profitable', '>90% long-term investors profitable']] } },
      { heading: 'Types of Trading', body: 'Different trading styles suit different personalities, capital sizes, and time availability.', bullets: ['Scalping: Holding trades for seconds to minutes — highest intensity, smallest moves', 'Day trading: All positions closed by end of day — requires full-time attention', 'Swing trading: Holding days to weeks to capture price swings — part-time feasible', 'Position trading: Weeks to months — sits between trading and investing', 'Algorithmic trading: Computer-executed strategies — requires programming and data skills'] },
      { heading: 'Who Should (and Should Not) Trade', body: 'Trading is not for everyone. Understanding the prerequisites prevents costly mistakes.', bullets: ['You should trade if: You have capital you can afford to lose, significant time to learn, emotional discipline, and genuine interest in markets', 'Avoid trading if: You need the money short-term, are trading on borrowed funds, or expect quick profits with minimal effort', 'SEBI data: 89% of F&O retail traders lose money; 70%+ of day traders quit within 2 years', 'For most people, a monthly SIP in index funds will outperform active trading over a lifetime'] },
    ],
    keyTakeaways: ['Trading requires active management, skill, and discipline — it is not passive income', 'Most retail traders lose money — approach with extreme caution and realistic expectations', 'Start with paper trading (simulated) for at least 3-6 months before risking real capital', 'If trading appeals to you, swing trading has more forgiving time demands than day trading', 'Taxes on trading profits are significantly higher than long-term investment gains'],
    tip: 'Before live trading, paper trade for 6 months. If you cannot make consistent simulated profits, you will not make real profits — the markets are harder in live conditions due to emotions and slippage.',
    relatedTopics: [{ label: 'How to Start Trading', href: '/trading/how-to-start' }, { label: 'Trading Strategies', href: '/trading/strategies' }],
  },

  'trading-how-to-start': {
    title: 'How to Start Trading',
    description: 'A practical step-by-step guide to setting up your trading infrastructure and making your first trades.',
    emoji: '🚀',
    parentLabel: 'Trading',
    parentHref: '/trading',
    overview: 'Starting to trade requires choosing a broker, opening an account, funding it, learning your trading platform, and developing a clear strategy with defined risk rules. Rushing any of these steps is the most common reason beginners lose money quickly. Take the infrastructure setup seriously before placing your first live trade.',
    sections: [
      { heading: 'Step 1: Choose Your Broker', body: 'Your broker is your gateway to the markets. Choose based on fees, platform quality, customer service, and regulation.', bullets: ['India equity/F&O: Zerodha (market leader), Upstox (fast platform), Angel One (full-service)', 'India commodity: Zerodha, Sharekhan, Angel One', 'US stocks/options: Tastytrade (best for options), TD Ameritrade/thinkorswim (best platform), Interactive Brokers (lowest margin rates)', 'Key criteria: Regulatory compliance, uptime during volatility, margin rates, order execution quality'] },
      { heading: 'Step 2: Set Up Your Workspace', body: 'Serious trading requires proper infrastructure to monitor markets, analyse charts, and execute orders efficiently.', bullets: ['Charting: TradingView (best free/paid charting), Zerodha Kite Charts, TD Ameritrade thinkorswim', 'Two monitors strongly recommended — one for charts, one for order entry', 'Reliable, fast internet connection is essential — consider a backup mobile hotspot', 'Trading journal: Edgewonk, TraderVue, or a simple spreadsheet — mandatory for improvement'] },
      { heading: 'Step 3: Capital and Risk Management', body: 'How much capital you need and how to protect it are the most important decisions you will make.', bullets: ['Minimum viable capital: ₹1-2 lakh for India intraday; ₹5-10 lakh for F&O (due to lot sizes)', 'The 1% rule: Never risk more than 1% of trading capital on a single trade', 'Maximum daily loss limit: Set a hard stop at 2-3% of capital — if hit, stop trading that day', 'Only trade with capital you can afford to lose entirely — never borrow to trade'] },
      { heading: 'Step 4: Paper Trade First', body: 'Simulated trading with virtual money is the lowest-risk way to test your strategy and platform before using real capital.', bullets: ['Zerodha Varsity paper trading for India markets', 'Thinkorswim paper money account for US markets', 'Trade exactly as you would live — same position sizes, same rules', 'Track every trade in a journal — review weekly to identify patterns', 'Only go live after 3+ months of consistent simulated profitability'] },
    ],
    keyTakeaways: ['Open a Demat + trading account with a regulated discount broker', 'Master your trading platform through paper trading before risking real money', 'Define risk rules before entering any trade — position size, stop loss, max daily loss', 'A trading journal is non-negotiable — you cannot improve what you do not measure', 'Start with one market and one strategy; add complexity only after consistent results'],
    relatedTopics: [{ label: 'Introduction to Trading', href: '/trading/introduction' }, { label: 'Trading Strategies', href: '/trading/strategies' }, { label: 'Top 10 Brokers', href: '/trading/top-10-brokers' }],
  },

  'trading-learn': {
    title: 'Learn Trading',
    description: 'Master technical analysis, chart reading, and the analytical skills every trader needs.',
    emoji: '🎓',
    parentLabel: 'Trading',
    parentHref: '/trading',
    overview: 'Technical analysis is the study of price action and volume to forecast future price movements. It is the primary toolkit for short-term traders who believe all known information is reflected in price. While no analysis guarantees success, understanding technical concepts significantly improves a trader\'s ability to identify high-probability setups and manage risk.',
    sections: [
      { heading: 'Chart Types', body: 'Different chart types reveal different information about price action.', bullets: ['Candlestick charts: Most widely used — each candle shows open, high, low, close for a time period', 'Bar charts: Same information as candlesticks but less visual — older standard', 'Line charts: Close price only — useful for identifying major trends', 'Heikin-Ashi: Modified candlesticks that filter noise — useful for trend traders', 'Point & Figure: Volume-independent, noise-filtered — used by professional analysts'] },
      { heading: 'Key Technical Indicators', body: 'Indicators are mathematical calculations applied to price/volume data to reveal trends, momentum, and potential reversals.', bullets: ['Moving Averages (SMA/EMA): Smooth price data to identify trend direction; 20, 50, 200-day EMA are most used', 'RSI (Relative Strength Index): Momentum oscillator 0-100; above 70 = overbought, below 30 = oversold', 'MACD (Moving Average Convergence Divergence): Trend + momentum — crossovers signal potential entries', 'Bollinger Bands: Volatility indicator — price touching bands signals potential mean reversion', 'Volume: Confirms price moves — high volume breakouts are more reliable than low volume ones'] },
      { heading: 'Support, Resistance, and Chart Patterns', body: 'Price tends to respect historical levels. Learning to identify these zones is fundamental to technical trading.', bullets: ['Support: Price level where buying repeatedly stops declines — demand zone', 'Resistance: Price level where selling repeatedly caps advances — supply zone', 'Breakout: Price closing decisively above resistance or below support on high volume', 'Head and Shoulders: Reversal pattern — reliable signal of trend change', 'Double Top/Bottom: Common reversal patterns easily visible on daily charts', 'Triangles (ascending, descending, symmetrical): Continuation or reversal — confirm with volume'] },
    ],
    keyTakeaways: ['Candlestick charts are the universal language of technical trading', 'Never use a single indicator in isolation — confluence of multiple signals improves probability', 'Price action (support/resistance, patterns) is more reliable than lagging indicators alone', 'Volume confirms the strength of any price move — always check volume on breakouts', 'Technical analysis works because enough traders use the same tools — self-fulfilling at key levels'],
    tip: 'Learn to read price action before adding indicators. A clean chart with just price and volume teaches you more than a screen covered in conflicting indicators.',
    relatedTopics: [{ label: 'Trading Strategies', href: '/trading/strategies' }, { label: 'Futures & Options', href: '/trading/futures-and-options' }],
  },

  'trading-strategies': {
    title: 'Trading Strategies',
    description: 'Proven trading strategies — how they work, when they work, and the discipline required to execute them.',
    emoji: '🎯',
    parentLabel: 'Trading',
    parentHref: '/trading',
    overview: 'A trading strategy is a systematic approach to entering and exiting trades based on defined rules. Successful traders do not wing it — they have explicit entry criteria, exit rules, position sizing formulas, and maximum risk parameters. Without a defined strategy, trading becomes gambling.',
    sections: [
      { heading: 'Trend Following', body: 'The most time-tested trading strategy: trade in the direction of the prevailing trend.', bullets: ['Logic: Trends persist — buy high and sell higher; sell short low and cover lower', 'Entry signals: Price above 200-day EMA (bullish); pullbacks to 20/50 EMA as entry points', 'Exit: When trend reverses; when price crosses below the trailing moving average', 'Best markets: Trending markets (indices during bull runs, commodity trends)', 'Weakness: Whipsaws and losses in sideways/ranging markets'] },
      { heading: 'Breakout Trading', body: 'Entering when price breaks out of a consolidation range or key resistance/support level on high volume.', bullets: ['Setup: Identify tight consolidation range (triangle, rectangle, flag pattern)', 'Entry: Buy the first close above resistance; sell short the first close below support', 'Volume confirmation is critical — breakouts on low volume fail frequently (false breakouts)', 'Stop loss: Below the breakout level; tight and well-defined risk', 'Reward: Breakouts often lead to sustained moves equal to the base pattern height'] },
      { heading: 'Mean Reversion', body: 'Prices revert to their average over time. This strategy sells extreme up moves and buys extreme down moves.', bullets: ['Basis: Most stocks and indices oscillate around a mean — extreme deviations self-correct', 'Signals: RSI below 30 (oversold buy) or above 70 (overbought short); Bollinger Band extremes', 'Works best: Range-bound, sideways markets and sectors', 'Risk: Mean reversion fails spectacularly in strong trends — a stock can go from "overbought" to much higher', 'Risk management: Strict stop losses are essential — the mean can shift'] },
      { heading: 'Momentum Trading', body: 'Stocks that have performed strongly recently tend to continue outperforming in the short term.', bullets: ['Logic: Institutional money flows into winners — momentum persists', 'India: NSE 52-week high/low breakout strategies with volume', 'US: Relative strength momentum — buy top quartile performers of S&P 500 vs the index', 'Caution: Momentum reverses violently — tight risk management and defined exits are essential', 'Timeframe: Works best on weekly and monthly timeframes; shorter timeframes add noise'] },
    ],
    keyTakeaways: ['Every successful trading strategy has defined entry rules, exit rules, and risk parameters', 'No strategy works 100% of the time — a 50-60% win rate with good risk:reward is excellent', 'Position sizing (risking 1% of capital per trade) determines long-term survival', 'Backtest any strategy on historical data before trading it live', 'The best strategy is one you can execute consistently with discipline'],
    tip: 'Focus on one strategy until you have 100+ trades of track record before adding another. Strategy-hopping is the surest path to consistent losses.',
    relatedTopics: [{ label: 'Learn Trading', href: '/trading/learn' }, { label: 'Derivatives', href: '/trading/derivatives' }],
  },

  'top-10-brokers': {
    title: 'Top 10 Brokers',
    description: 'The best stock brokers in India and the US — ranked by features, cost, and suitability for different trader types.',
    emoji: '🏆',
    parentLabel: 'Trading',
    parentHref: '/trading',
    overview: 'Choosing the right broker is one of the most important trading decisions you will make. Factors to consider include: brokerage fees, platform quality, margin rates, customer service, order execution, and regulatory compliance. Here are the leading brokers in India and the US as of 2025.',
    sections: [
      { heading: 'Top India Brokers', body: 'India\'s discount brokerage revolution has driven commissions to near-zero for equity delivery.', table: { headers: ['Broker', 'Type', 'Equity Delivery', 'F&O/Intraday', 'Best For'], rows: [['Zerodha', 'Discount', '₹0', '₹20/order', 'Overall best — largest customer base, best platform'], ['Upstox', 'Discount', '₹0', '₹20/order', 'Fastest platform; good for active traders'], ['Groww', 'Discount', '₹0', '₹20/order', 'Beginners — simplest UI'], ['Angel One', 'Full-service', '₹0', '₹20/order', 'Research + advisory + trading'], ['ICICI Direct', 'Bank-broker', '0.25-0.55%', 'Varies', 'Convenience; linked to ICICI bank']] } },
      { heading: 'Top US Brokers', body: 'US brokers offer $0 commission on stocks and ETFs. Differentiation is in options commissions, margin rates, and platform quality.', table: { headers: ['Broker', 'Stock/ETF', 'Options', 'Margin Rate', 'Best For'], rows: [['Fidelity', '$0', '$0.65/contract', '9.25%', 'Overall best; best customer service'], ['Charles Schwab', '$0', '$0.65/contract', '11.825%', 'Research + ETFs; best for long-term investors'], ['Interactive Brokers', '$0', '$0.65/contract', '5.83%', 'Professional traders; cheapest margin rates'], ['Tastytrade', '$0', '$1/contract (cap $10)', 'N/A', 'Best for options trading; unique tools'], ['TD Ameritrade (Schwab)', '$0', '$0.65/contract', '12.5%', 'Thinkorswim platform is best in class']] } },
      { heading: 'What to Look For in a Broker', body: 'Beyond commissions (now near-zero), these factors separate excellent brokers from merely adequate ones.', bullets: ['Regulatory compliance: SEBI-registered (India); FINRA/SIPC member (US)', 'Platform reliability during high volatility: Check uptime records during market crashes', 'Order execution quality: PFOF vs direct routing affects the actual price you get', 'Customer support: Response time during a trade emergency can be critical', 'Educational resources: Zerodha Varsity (India) and Schwab Learning Center (US) are excellent'] },
    ],
    keyTakeaways: ['Zerodha dominates India with best platform, zero delivery brokerage, and trusted brand', 'For US, Fidelity wins on overall quality; Interactive Brokers for professional traders', 'Never choose a broker based on referral bonuses — choose based on platform quality and reliability', 'Check if your broker is SEBI-registered (India) or FINRA/SIPC member (US) before depositing', 'Discount brokers are almost always better than bank-affiliated brokers for cost-conscious traders'],
    relatedTopics: [{ label: 'How to Start Trading', href: '/trading/how-to-start' }, { label: 'Demat Account', href: '/markets/india/demat-account' }],
  },

  derivatives: {
    title: 'Derivatives',
    description: 'Financial contracts that derive their value from an underlying asset — the essential guide to futures, options, swaps, and forwards.',
    emoji: '📉',
    parentLabel: 'Trading',
    parentHref: '/trading',
    overview: 'A derivative is a financial contract whose value is derived from the performance of an underlying asset, index, or rate. Derivatives include futures, options, forwards, and swaps. They are used for hedging risk, speculating on price movements, and creating leveraged exposure to assets. The global derivatives market is many times larger than the stock market.',
    sections: [
      { heading: 'Types of Derivatives', body: 'Each derivative type has different risk profiles, uses, and settlement mechanisms.', bullets: ['Futures: Standardised contracts to buy/sell at a set price on a future date; exchange-traded; daily MTM settlement', 'Options: Right (not obligation) to buy/sell at strike price before expiry; buyer has limited risk', 'Forwards: Customised OTC agreements to buy/sell at agreed price; used by businesses for currency/commodity hedging', 'Swaps: Exchange of cash flows — interest rate swaps, currency swaps used by banks and corporations', 'CFDs (Contracts for Difference): Popular in Europe/Asia for leveraged speculation; not legal in the US'] },
      { heading: 'Derivatives for Hedging', body: 'The original purpose of derivatives was to hedge (reduce) risk — a legitimate and important financial function.', bullets: ['An exporter expecting USD income buys USD/INR put options to lock a minimum exchange rate', 'An equity fund manager buys Nifty put options to protect the portfolio against a market crash', 'An airline hedges jet fuel prices using crude oil futures to fix their cost structure', 'A wheat farmer sells wheat futures to lock in a selling price before harvest', 'This is the legitimate, risk-reducing use of derivatives — the opposite of speculation'] },
      { heading: 'Derivatives for Speculation — Risks', body: 'The same leverage that makes derivatives powerful for hedging makes them extremely dangerous for uninformed speculation.', bullets: ['Leverage: ₹1 lakh margin controls ₹10 lakh in futures — both gains and losses are amplified 10×', 'Mark-to-market: Daily losses debited from margin account — can receive margin calls requiring immediate top-up', 'Time decay (options): Options lose value every day due to time erosion (theta) — buyers fight a daily clock', 'Unlimited loss potential: Futures and short options positions can lose far more than the initial investment', 'SEBI study: 89% of F&O retail participants lost money averaging ₹1.1 lakh per person annually'] },
    ],
    keyTakeaways: ['Derivatives are leverage instruments — gains and losses are magnified relative to the underlying', 'Futures have unlimited risk in either direction; long options limit buyer risk to premium paid', 'Options sellers receive premium income but face significant to unlimited loss potential', 'Hedging is the legitimate purpose of derivatives; speculation requires deep expertise', 'Learn paper trading with derivatives extensively before committing real capital'],
    warning: 'Never trade derivatives without a defined stop-loss. A single unmanaged futures position can wipe out an entire trading account and more.',
    relatedTopics: [{ label: 'Futures & Options', href: '/trading/futures-and-options' }, { label: 'Indian F&O', href: '/markets/india/indian-fno' }],
  },

  'futures-and-options': {
    title: 'Futures & Options',
    description: 'Deep dive into F&O trading — contracts, Greeks, strategies, and how professional traders use them.',
    emoji: '⚙️',
    parentLabel: 'Trading',
    parentHref: '/trading',
    overview: 'Futures and Options (F&O) are the most actively traded derivatives in India and the US. Understanding them opens up strategies ranging from simple directional bets to sophisticated income generation and portfolio hedging. NSE is the world\'s largest derivatives exchange by number of contracts. This guide covers the key concepts every F&O trader needs.',
    sections: [
      { heading: 'Futures Contracts Deep Dive', body: 'Key concepts every futures trader must understand.', bullets: ['Contract specifications: Lot size, tick size, contract value, expiry date', 'Margin: Initial margin (SPAN) required to open position; maintenance margin minimum', 'Mark-to-market (MTM): Daily settlement of gains/losses to margin account', 'Rollover: Moving from expiring contract to next month before expiry', 'Basis: Difference between spot price and futures price; converges to zero at expiry', 'Contango vs Backwardation: Futures above or below spot — driven by carrying costs and expectations'] },
      { heading: 'Options Contracts: The Greeks', body: 'The "Greeks" measure how an option\'s price changes in response to various market factors.', table: { headers: ['Greek', 'Measures', 'Impact'], rows: [['Delta', 'Price change per ₹1/$1 underlying move', 'ATM call ~0.5; deep ITM ~1; deep OTM ~0'], ['Gamma', 'Rate of Delta change', 'Highest near ATM; spikes near expiry'], ['Theta', 'Time decay per day', 'Negative for buyers; positive for sellers'], ['Vega', 'Sensitivity to implied volatility changes', 'High IV = expensive options; buy on low IV'], ['Rho', 'Interest rate sensitivity', 'Minor factor for most traders']] } },
      { heading: 'Basic F&O Strategies', body: 'These are the most widely used strategies across retail and professional traders.', bullets: ['Covered Call: Own the stock + sell call — generates income, caps upside', 'Protective Put: Own stock + buy put — portfolio insurance against crash', 'Bull Call Spread: Buy lower strike call + sell higher strike call — defined risk bullish bet', 'Bear Put Spread: Buy higher strike put + sell lower strike put — defined risk bearish bet', 'Iron Condor: Sell OTM call + buy further OTM call + sell OTM put + buy further OTM put — income strategy in range-bound markets', 'Straddle: Buy ATM call + ATM put — profits from large moves in either direction (pre-earnings)'] },
    ],
    keyTakeaways: ['Always trade F&O with defined risk — spreads and bought options limit maximum loss', 'Options sellers earn premium income but need large capital and manage significant risk', 'Theta (time decay) works FOR sellers and AGAINST buyers — time is an option buyer\'s enemy', 'Never hold short options naked (unhedged) into weekly expiry — gamma risk spikes dramatically', 'Understand all your Greeks before selling options spreads — Vega exposure can be more dangerous than Delta'],
    tip: 'Start with buying options (defined risk) before selling them. Selling options feels like steady income until a black swan event turns premium collection into catastrophic loss.',
    relatedTopics: [{ label: 'Derivatives', href: '/trading/derivatives' }, { label: 'Indian F&O', href: '/markets/india/indian-fno' }, { label: 'Trading Strategies', href: '/trading/strategies' }],
  },

  // ── MARKETS: INDIA ───────────────────────────────────────

  'nse-bse': {
    title: 'NSE & BSE',
    description: 'India\'s two primary stock exchanges — how they work, their differences, and how to trade on them.',
    emoji: '🇮🇳',
    parentLabel: 'India Markets',
    parentHref: '/markets/india',
    overview: 'India has two major stock exchanges: the Bombay Stock Exchange (BSE), established in 1875 and Asia\'s oldest, and the National Stock Exchange (NSE), founded in 1992. Together they form the backbone of India\'s capital markets. BSE hosts over 5,000 listed companies; NSE is the world\'s largest derivatives exchange by contract volume.',
    sections: [
      {
        heading: 'BSE vs NSE: Key Differences',
        body: 'While both exchanges list similar companies, there are meaningful differences in their products and market share.',
        table: {
          headers: ['Feature', 'BSE (Bombay SE)', 'NSE (National SE)'],
          rows: [
            ['Founded', '1875', '1992'],
            ['Benchmark Index', 'SENSEX (30 stocks)', 'NIFTY 50 (50 stocks)'],
            ['Listed Companies', '5,500+', '2,000+'],
            ['Trading Volume', 'Lower (cash equity)', 'Higher (dominant in F&O)'],
            ['Derivatives', 'Limited F&O', 'World\'s largest by contracts'],
            ['Settlement', 'T+1 rolling', 'T+1 rolling'],
          ],
        },
      },
      {
        heading: 'Trading Hours and Sessions',
        body: 'Indian markets follow a structured trading schedule with different sessions for different purposes.',
        bullets: [
          'Pre-open session: 9:00 AM – 9:15 AM (order collection and price discovery)',
          'Regular market: 9:15 AM – 3:30 PM IST (main trading session)',
          'Post-close session: 3:40 PM – 4:00 PM (block deals and order modification)',
          'Currency derivatives: 9:00 AM – 5:00 PM IST',
          'Commodity derivatives (MCX): 9:00 AM – 11:30 PM IST (extending to global markets)',
        ],
      },
      {
        heading: 'Key Indices',
        body: 'India has numerous indices tracking different market segments. These are the most important.',
        bullets: [
          'NIFTY 50: Top 50 large-cap companies by free-float market cap — the primary benchmark',
          'SENSEX: Top 30 BSE-listed companies — the oldest and most globally recognised Indian index',
          'NIFTY Bank: 12 most liquid banking stocks — highly traded for F&O',
          'NIFTY Next 50: The next tier of large-caps after NIFTY 50',
          'NIFTY Midcap 150 / Smallcap 250: Broader market coverage',
        ],
      },
      {
        heading: 'Circuit Breakers and Market-Wide Limits',
        body: 'SEBI has circuit breaker rules that halt trading when markets move sharply, preventing panic-driven crashes.',
        bullets: [
          '10% move: 45-minute trading halt (15-minute halt after 2:30 PM)',
          '15% move: 1 hour 45-minute halt (2-hour halt after 1 PM; remainder of day if after 2 PM)',
          '20% move: Markets closed for the rest of the trading day',
          'Individual stocks also have upper/lower circuit limits (5%, 10%, 20% depending on category)',
        ],
      },
    ],
    keyTakeaways: [
      'NSE dominates equity derivatives; BSE leads in currency derivatives',
      'Nifty 50 (NSE) is the primary benchmark for Indian equity market performance',
      'Both exchanges use the same T+1 settlement cycle as of 2023',
      'India markets trade 9:15 AM – 3:30 PM IST on weekdays excluding public holidays',
      'Circuit breakers exist to prevent extreme market-wide crashes — a SEBI-mandated safety mechanism',
    ],
    relatedTopics: [
      { label: 'SEBI Rules', href: '/markets/india/sebi-rules' },
      { label: 'Demat Account', href: '/markets/india/demat-account' },
      { label: 'Indian F&O', href: '/markets/india/indian-fno' },
    ],
  },

  'sebi-rules': {
    title: 'SEBI Rules & Regulations',
    description: 'How India\'s market regulator protects investors and what every market participant needs to know.',
    emoji: '⚖️',
    parentLabel: 'India Markets',
    parentHref: '/markets/india',
    overview: 'SEBI (Securities and Exchange Board of India) is the regulatory authority for India\'s securities market, established in 1988 and given statutory powers in 1992. Its mandate is to protect investor interests, develop and regulate the securities market, and promote fair market practices. Understanding key SEBI regulations helps investors make informed decisions and avoid violations.',
    sections: [
      {
        heading: 'SEBI\'s Core Investor Protection Rules',
        body: 'SEBI has enacted numerous rules designed to safeguard retail investor interests against fraud, manipulation, and unfair practices.',
        bullets: [
          'KYC (Know Your Customer): All investors must complete KYC before trading — Aadhaar-based e-KYC simplified this significantly',
          'T+1 Settlement: Shares and funds settle the next trading day, reducing counterparty risk',
          'Margin requirements: SEBI mandates specific margin collection to reduce excessive leverage',
          'Insider trading prohibition: Trading on material non-public information is illegal with severe penalties',
          'SEBI SCORES: Online complaint redressal system for investor grievances',
        ],
      },
      {
        heading: 'F&O Rules: Peak Margin and Position Limits',
        body: 'SEBI overhauled F&O margin requirements in 2021, significantly increasing the capital required to trade derivatives.',
        bullets: [
          'Peak margin rule: Brokers must collect margin at the intraday peak exposure, not just at EOD',
          'This effectively reduced leverage available for intraday F&O trading by 50-70%',
          'Position limits: Individual and institutional position limits prevent excessive concentration',
          'Options seller margin: Selling options now requires SPAN + Exposure margin upfront',
        ],
      },
      {
        heading: 'Recent SEBI Reforms (2023-2025)',
        body: 'SEBI has been active in tightening regulations, especially around F&O participation and mutual fund disclosures.',
        bullets: [
          'F&O lot size increase (2024): NIFTY lot size increased to 25 from 50, contract value raised to ~₹15 lakh minimum',
          'Weekly options restrictions: Only Nifty 50 and Sensex weekly expiries permitted — reduced speculative instruments',
          'MF expense ratio caps: SEBI regularly reviews and reduces total expense ratio limits',
          'Direct plan mandate: All AMCs must offer direct plans with lower costs',
          'Skin in the game: Fund managers required to invest minimum % of salary in their own funds',
        ],
      },
    ],
    keyTakeaways: [
      'SEBI regulates all market participants: exchanges, brokers, AMCs, depositories',
      'Complete KYC before investing — it is mandatory and protects you',
      'Report grievances through SEBI SCORES portal for faster resolution',
      'F&O margin rules were significantly tightened in 2021 — understand requirements before trading derivatives',
      'SEBI\'s recent reforms aim to protect retail investors from speculative losses in options',
    ],
    relatedTopics: [
      { label: 'NSE & BSE', href: '/markets/india/nse-bse' },
      { label: 'Indian F&O', href: '/markets/india/indian-fno' },
      { label: 'Demat Account', href: '/markets/india/demat-account' },
    ],
  },

  'demat-account': {
    title: 'Demat Account',
    description: 'Everything you need to know about opening and managing a Demat account to invest in Indian markets.',
    emoji: '💼',
    parentLabel: 'India Markets',
    parentHref: '/markets/india',
    overview: 'A Demat (Dematerialised) account holds shares and securities in electronic form — eliminating the need for physical share certificates. It is mandatory for trading on Indian stock exchanges. Linked to a trading account and a bank account, the Demat-Trading-Bank trinity is what every Indian investor needs to participate in equity markets.',
    sections: [
      {
        heading: 'Demat vs Trading vs Bank Account',
        body: 'Three accounts work together seamlessly once linked. Understanding each one\'s role prevents confusion.',
        bullets: [
          'Demat account: Holds your shares electronically (with NSDL or CDSL depository)',
          'Trading account: Interface for placing buy/sell orders on exchanges (with your broker)',
          'Bank account: Source and destination of funds for all transactions',
          'When you buy shares: Money debits from bank → shares credit to Demat (T+1)',
          'When you sell shares: Shares debit from Demat → money credits to bank (T+1)',
        ],
      },
      {
        heading: 'How to Open a Demat Account',
        body: 'Opening a Demat account is fully online and takes 15–30 minutes with the right documents ready.',
        bullets: [
          'Step 1: Choose a broker — Zerodha (₹200/order flat), Groww, Upstox, Angel One',
          'Step 2: Documents needed — PAN card, Aadhaar (for e-KYC), bank account, signature',
          'Step 3: Complete e-KYC via Aadhaar OTP (instant) or in-person verification',
          'Step 4: IPV (In-Person Verification) — video call or webcam selfie',
          'Step 5: Account active within 24-48 hours; fund it to start trading',
        ],
      },
      {
        heading: 'Charges to Know',
        body: 'Every broker has a slightly different fee structure. Understanding charges prevents surprise deductions.',
        table: {
          headers: ['Charge', 'Zerodha', 'Groww', 'Upstox'],
          rows: [
            ['Account opening', '₹200', 'Free', 'Free'],
            ['Annual maintenance (AMC)', '₹300/yr', '₹0 (for now)', '₹150/yr'],
            ['Equity delivery brokerage', '₹0', '₹0', '₹0'],
            ['Intraday brokerage', '₹20 or 0.03%', '₹20 or 0.05%', '₹20 or 0.05%'],
            ['F&O brokerage', '₹20/order', '₹20/order', '₹20/order'],
          ],
        },
      },
    ],
    keyTakeaways: [
      'A Demat account is mandatory for investing in Indian stocks, ETFs, and bonds',
      'Choose a discount broker (Zerodha, Groww, Upstox) — lower costs than full-service banks',
      'Delivery trades are free at most discount brokers — only intraday and F&O have brokerage',
      'Shares are held with NSDL or CDSL depository — not with your broker (so broker bankruptcy is not a risk to your shares)',
      'Link Aadhaar for instant e-KYC — it makes account opening a 15-minute process',
    ],
    tip: 'Enable DDPI (Demat Debit and Pledge Instruction) or maintain a Power of Attorney with your broker to enable seamless selling of shares from your Demat account without additional confirmation steps for each transaction.',
    relatedTopics: [
      { label: 'NSE & BSE', href: '/markets/india/nse-bse' },
      { label: 'SEBI Rules', href: '/markets/india/sebi-rules' },
    ],
  },

  'elss-ppf-nps': {
    title: 'ELSS, PPF & NPS',
    description: 'India\'s three most powerful tax-saving investment instruments explained and compared.',
    emoji: '💹',
    parentLabel: 'India Markets',
    parentHref: '/markets/india',
    overview: 'ELSS, PPF, and NPS are India\'s most important long-term tax-saving investment instruments. Each serves a different purpose: ELSS for wealth creation with equity returns, PPF for safe tax-free debt returns, and NPS for retirement corpus building with an additional tax benefit. Together they form the backbone of tax-efficient financial planning for salaried Indians.',
    sections: [
      {
        heading: 'ELSS (Equity Linked Savings Scheme)',
        body: 'Equity mutual funds with 80C tax benefit and the shortest lock-in among all 80C instruments — 3 years.',
        bullets: [
          'Tax benefit: Up to ₹1.5 lakh deduction under Section 80C',
          'Lock-in: 3 years — shortest among all 80C options',
          'Returns: Market-linked; historical 5-year average 12-15% CAGR (no guarantee)',
          'LTCG: Gains above ₹1.25 lakh taxed at 12.5% on redemption',
          'Best for: Investors with 5+ year horizon seeking both tax saving and wealth creation',
          'Top funds (direct): Mirae Asset ELSS, Quant ELSS, Canara Robeco ELSS',
        ],
      },
      {
        heading: 'PPF (Public Provident Fund)',
        body: 'A government-backed savings instrument with sovereign guarantee, completely tax-free returns, and 15-year tenure.',
        bullets: [
          'Current interest: 7.1% per annum (reviewed quarterly by government)',
          'Tax status: EEE — contribution deductible (80C), interest tax-free, maturity tax-free',
          'Tenure: 15 years, extendable in blocks of 5 years',
          'Contribution: ₹500 minimum, ₹1.5 lakh maximum per year',
          'Liquidity: Partial withdrawal from year 7; loan facility from year 3',
          'Best for: Conservative investors, those in high tax brackets wanting completely tax-free returns',
        ],
      },
      {
        heading: 'NPS (National Pension System)',
        body: 'A market-linked pension scheme with unique tax benefits and mandatory partial annuity at retirement.',
        bullets: [
          'Additional deduction: ₹50,000 under Section 80CCD(1B) — OVER and above the ₹1.5L 80C limit',
          'Asset allocation: Choose between equity (up to 75%), corporate bonds, and government securities',
          'Returns: Market-linked; Tier-I accounts have seen 10-12% returns over 10 years (equity-heavy)',
          'Maturity: At 60, withdraw 60% tax-free; must buy annuity with 40% (annuity income taxable)',
          'Lock-in: Until age 60 (with limited early exit provisions)',
          'Best for: Salaried individuals wanting retirement savings + the extra ₹50K deduction',
        ],
      },
      {
        heading: 'Which One Should You Choose?',
        body: 'The right answer depends on your tax bracket, time horizon, and need for liquidity.',
        table: {
          headers: ['Instrument', 'Risk', 'Returns', 'Lock-in', 'Tax Treatment', 'Best For'],
          rows: [
            ['ELSS', 'High', '12-15%*', '3 years', 'EET (LTCG on gains)', 'Growth + tax saving'],
            ['PPF', 'Zero', '7.1%', '15 years', 'EEE (fully exempt)', 'Guaranteed + tax-free'],
            ['NPS', 'Medium-High', '10-12%*', 'Till 60', 'EET (60% tax-free exit)', 'Retirement + extra ₹50K deduction'],
          ],
        },
      },
    ],
    keyTakeaways: [
      'NPS gives an extra ₹50,000 deduction beyond the ₹1.5L 80C limit — use it if in 30% bracket',
      'PPF is the safest 80C option — government-backed, fully tax-free',
      'ELSS offers market returns with the shortest lock-in — best for long-term wealth creation',
      'All three can be used together — they complement rather than compete with each other',
      'Use the new tax regime calculator to check if 80C deductions are still beneficial vs the flat lower rate',
    ],
    relatedTopics: [
      { label: 'Tax Planning', href: '/personal-finance/tax-planning' },
      { label: 'Mutual Funds', href: '/investing/mutual-funds' },
      { label: 'Retirement Planning', href: '/personal-finance/retirement' },
    ],
    ctaLabel: 'SIP Calculator',
    ctaHref: '/calculators',
  },

  'indian-fno': {
    title: 'Indian F&O (Futures & Options)',
    description: 'How India\'s derivatives market works, who should trade it, and the risks most retail traders underestimate.',
    emoji: '📉',
    parentLabel: 'India Markets',
    parentHref: '/markets/india',
    overview: 'India has the world\'s largest derivatives market by number of contracts. Futures and Options on the NSE allow traders to speculate on price movements or hedge existing positions using leverage. However, SEBI data shows that 89% of individual F&O traders lose money — the majority losing more than ₹50,000 annually. This is a market that demands respect and education.',
    sections: [
      {
        heading: 'Futures: Obligation to Buy or Sell',
        body: 'A futures contract is an agreement to buy or sell an underlying asset at a specified price on a future date. Both buyer and seller are obligated to fulfil the contract.',
        bullets: [
          'Nifty Futures: Contract to buy/sell Nifty 50 index at today\'s agreed price on expiry',
          'Lot size: 25 units (Nifty) — contract value ~₹5.75 lakh at Nifty 23,000',
          'Margin required: ~10-15% of contract value (SPAN + Exposure margin)',
          'Daily MTM settlement: Profits/losses credited/debited daily — not at expiry',
          'Expiry: Last Thursday of each month for monthly contracts; weekly for Nifty (Thursday)',
        ],
      },
      {
        heading: 'Options: Right Without Obligation',
        body: 'An options buyer pays a premium for the right (not obligation) to buy (Call) or sell (Put) an underlying asset at a specific price before expiry.',
        bullets: [
          'Call option: Right to BUY at the strike price — profits when underlying goes UP',
          'Put option: Right to SELL at the strike price — profits when underlying goes DOWN',
          'Premium: Maximum loss for option buyer is the premium paid',
          'Option seller (writer): Receives premium but has theoretically unlimited risk',
          'Greeks: Delta, Gamma, Theta, Vega — measure option sensitivity to various factors',
        ],
      },
      {
        heading: 'SEBI\'s 2024 F&O Reforms',
        body: 'After studies showed massive retail losses, SEBI implemented significant changes to reduce speculative excess in the options market.',
        bullets: [
          'Only one weekly options expiry per exchange: Nifty 50 (NSE) and Sensex (BSE) only',
          'Minimum contract value of ₹15 lakh: Increased lot sizes for most contracts',
          'Intraday monitoring of position limits: Real-time enforcement vs end-of-day',
          'Calendar spread margin benefit: Removed on expiry day to prevent last-day speculation',
          'Upfront collection of option premiums from buyers',
        ],
      },
    ],
    keyTakeaways: [
      '89% of F&O retail traders lose money according to SEBI\'s own study — approach with extreme caution',
      'Options buyers lose the entire premium if the view is wrong — size positions accordingly',
      'Options selling (writing) generates regular income but carries unlimited or large loss potential',
      'SEBI has restricted weekly expiries to Nifty and Sensex only as of 2024',
      'Paper trade for at least 6 months before risking real capital in F&O',
    ],
    warning: 'F&O is a zero-sum game — every rupee a trader gains, another trader loses. Adding transaction costs means the aggregate of all traders is negative. Only trade F&O if you have a clear edge and treat it as a business.',
    relatedTopics: [
      { label: 'Derivatives', href: '/trading/derivatives' },
      { label: 'Futures & Options', href: '/trading/futures-and-options' },
      { label: 'SEBI Rules', href: '/markets/india/sebi-rules' },
    ],
  },

  'nri-investing': {
    title: 'NRI Investing in India',
    description: 'How Non-Resident Indians can invest in Indian stocks, mutual funds, and real estate — routes, accounts, and taxes.',
    emoji: '🌏',
    parentLabel: 'India Markets',
    parentHref: '/markets/india',
    overview: 'Non-Resident Indians (NRIs) can invest in Indian financial markets through FEMA (Foreign Exchange Management Act) compliant routes. The key accounts are NRE (Non-Resident External) and NRO (Non-Resident Ordinary) accounts. NRIs can invest in stocks, mutual funds, real estate, fixed deposits, and government bonds — each with specific rules and tax implications.',
    sections: [
      {
        heading: 'NRE vs NRO Account: The Foundation',
        body: 'The type of account determines what you can invest in and how you can repatriate money.',
        table: {
          headers: ['Feature', 'NRE Account', 'NRO Account'],
          rows: [
            ['Currency', 'Foreign currency deposits, INR balance', 'INR only'],
            ['Source of funds', 'Foreign income only', 'Indian income (rent, dividends)'],
            ['Repatriation', 'Fully repatriable', 'Limited ($1M/year with CA certificate)'],
            ['Tax on interest', 'Completely exempt in India', 'Taxable in India'],
            ['Joint holding', 'With another NRI only', 'With resident Indian allowed'],
          ],
        },
      },
      {
        heading: 'Investing in Stocks & Mutual Funds',
        body: 'NRIs can invest in Indian equities through the Portfolio Investment Scheme (PIS) — a SEBI-mandated route through a designated bank.',
        bullets: [
          'NRE PIS account: Investments from foreign funds, repatriable',
          'NRO account: Investments from Indian income — not fully repatriable',
          'Most AMCs allow NRI investments in mutual funds (some restrict US/Canada-based NRIs)',
          'Important: US and Canada NRIs face restrictions from many AMCs due to FATCA compliance costs',
          'SIP via NRE/NRO: Auto-debit SIPs are fully supported by most fund houses',
        ],
      },
      {
        heading: 'NRI Tax on Indian Investments',
        body: 'NRIs are taxed only on income earned or received in India. Tax rates are generally the same as residents for capital gains.',
        bullets: [
          'Equity LTCG (>1 year): 12.5% above ₹1.25 lakh exemption — same as residents',
          'Equity STCG (<1 year): 20% — same as residents',
          'Dividend income: Taxable at slab rate; 20% TDS withheld at source',
          'FD interest (NRO): 30% TDS withheld; NRE FD interest is tax-free in India',
          'DTAA benefit: If India has a tax treaty with your country of residence, you may be able to claim credit for taxes paid in India',
        ],
      },
    ],
    keyTakeaways: [
      'NRE accounts allow tax-free interest and full repatriation — ideal for long-term Indian investments',
      'US/Canada-based NRIs face mutual fund restrictions — many AMCs refuse due to FATCA',
      'PIS account is mandatory for NRI stock market investments through designated bank',
      'DTAA treaties can reduce double taxation — always check the treaty between India and your resident country',
      'Consult a CA experienced in NRI taxation before making significant investment decisions',
    ],
    relatedTopics: [
      { label: 'DTAA Benefits', href: '/markets/us/dtaa-benefits' },
      { label: 'US Tax for NRI', href: '/markets/us/us-tax-for-nri' },
      { label: 'Tax Planning', href: '/personal-finance/tax-planning' },
    ],
  },

  // ── MARKETS: US ──────────────────────────────────────────

  'nyse-nasdaq': {
    title: 'NYSE & NASDAQ',
    description: 'The world\'s two largest stock exchanges — how they differ and what they mean for investors.',
    emoji: '🇺🇸',
    parentLabel: 'US Markets',
    parentHref: '/markets/us',
    overview: 'The New York Stock Exchange (NYSE) and NASDAQ are the two dominant US stock exchanges, collectively listing over 6,500 companies with a combined market cap exceeding $40 trillion. NYSE is the world\'s largest exchange by market capitalisation; NASDAQ is the second-largest and is synonymous with technology stocks.',
    sections: [
      {
        heading: 'NYSE vs NASDAQ: Key Differences',
        body: 'While both list major companies, they have different structures, histories, and market characters.',
        table: {
          headers: ['Feature', 'NYSE', 'NASDAQ'],
          rows: [
            ['Founded', '1792', '1971'],
            ['Market cap listed', '~$27 trillion', '~$22 trillion'],
            ['Trading model', 'Hybrid (specialists + electronic)', 'Fully electronic'],
            ['Listing fees', 'Higher', 'Lower'],
            ['Notable listings', 'JPMorgan, Walmart, Coca-Cola', 'Apple, Microsoft, Amazon, Google'],
            ['Index', 'Dow Jones, NYSE Composite', 'NASDAQ Composite, NASDAQ-100'],
          ],
        },
      },
      {
        heading: 'Key US Market Indices',
        body: 'Multiple indices track US market performance, each with different composition and purpose.',
        bullets: [
          'S&P 500: 500 largest US companies — the most widely used benchmark for US equities',
          'Dow Jones Industrial Average (DJIA): 30 large "blue chip" companies — oldest index, price-weighted',
          'NASDAQ Composite: All NASDAQ-listed stocks (~3,000+) — technology-heavy',
          'NASDAQ-100 (QQQ): Top 100 non-financial NASDAQ stocks — tech giants dominate',
          'Russell 2000: 2,000 small-cap US companies — leading small-cap benchmark',
        ],
      },
      {
        heading: 'Trading Hours and Pre/After Market',
        body: 'US markets offer extended trading hours beyond the regular session.',
        bullets: [
          'Regular hours: 9:30 AM – 4:00 PM Eastern Time (ET)',
          'Pre-market: 4:00 AM – 9:30 AM ET (lower volume, wider spreads)',
          'After-hours: 4:00 PM – 8:00 PM ET (earnings announcements often move stocks here)',
          'India time equivalents: Market opens at 7:00 PM IST (10:00 PM IST in winter)',
          'Extended hours trading is riskier due to lower liquidity and larger bid-ask spreads',
        ],
      },
    ],
    keyTakeaways: [
      'NYSE lists traditional blue-chip companies; NASDAQ is home to most major tech companies',
      'S&P 500 is the definitive US equity benchmark — use it to measure portfolio performance',
      'US markets trade 9:30 AM – 4:00 PM ET; for Indian investors that is 7 PM – 1:30 AM IST',
      'Both exchanges are fully electronic — routing your order to NYSE vs NASDAQ depends on your broker',
      'For long-term investors, the index matters more than the exchange — buy VOO/VTI not individual exchange exposure',
    ],
    relatedTopics: [
      { label: 'S&P 500 Basics', href: '/markets/us/sp500-basics' },
      { label: 'ETFs', href: '/investing/etfs' },
    ],
  },

  '401k-guide': {
    title: '401(k) Guide',
    description: 'Maximise your employer retirement benefit — contribution limits, investment choices, and withdrawal rules.',
    emoji: '💼',
    parentLabel: 'US Markets',
    parentHref: '/markets/us',
    overview: 'A 401(k) is an employer-sponsored retirement savings account that allows employees to contribute pre-tax or after-tax (Roth) dollars, with many employers matching a portion. It is the cornerstone of American retirement planning — the combination of tax advantages and employer matching makes it the highest-return "investment" available to most employees.',
    sections: [
      {
        heading: '2025 Contribution Limits',
        body: 'IRS contribution limits increase periodically with inflation. Contributing the maximum is one of the most impactful financial decisions you can make.',
        bullets: [
          'Employee contribution limit: $23,500 (2025) — $31,000 if age 50+ (catch-up provision)',
          'Total limit (employee + employer): $70,000 (2025)',
          'At minimum: Contribute enough to get the full employer match — that is a 50-100% guaranteed return',
          'Even $200/month invested from age 25 at 8% average return = $700,000+ by age 65',
        ],
      },
      {
        heading: 'Traditional vs Roth 401(k)',
        body: 'Most employers now offer both options. The key question: do you expect to be in a higher or lower tax bracket in retirement?',
        table: {
          headers: ['Feature', 'Traditional 401(k)', 'Roth 401(k)'],
          rows: [
            ['Tax treatment', 'Pre-tax contributions (reduces income now)', 'After-tax (no reduction now)'],
            ['Growth', 'Tax-deferred', 'Tax-free'],
            ['Withdrawals', 'Taxed as ordinary income', 'Tax-free (qualified)'],
            ['RMDs', 'Required at 73', 'No RMDs (after 2024 SECURE 2.0)'],
            ['Best if...', 'High tax bracket now, lower in retirement', 'Lower tax bracket now, higher in retirement'],
          ],
        },
      },
      {
        heading: 'Investment Choices Inside a 401(k)',
        body: 'Most 401(k) plans offer a limited menu of mutual funds. Choosing wisely within this limited selection is critical.',
        bullets: [
          'Target-date funds: Auto-allocate based on retirement year — set and forget, but check the expense ratio',
          'S&P 500 index fund: If available, usually the best option — lowest cost, market returns',
          'Company stock: Limit to <5% of portfolio — concentration risk from employer failure (Enron lesson)',
          'Total market funds, bond index funds: Build a simple 2-3 fund portfolio inside the plan',
          'Avoid: High-expense-ratio actively managed funds — cost drag compounds against you for decades',
        ],
      },
      {
        heading: 'Withdrawals and Rules',
        body: 'Understanding the rules prevents costly mistakes.',
        bullets: [
          'Age 59½: Penalty-free withdrawals begin (taxes still apply for traditional)',
          'Age 73: Required Minimum Distributions (RMDs) must begin',
          'Early withdrawal: 10% penalty + income tax — avoid at almost any cost',
          'Hardship withdrawals: Available for specific circumstances but always a last resort',
          'Rollover: If you leave your employer, roll over to an IRA or new employer plan — do not cash out',
        ],
      },
    ],
    keyTakeaways: [
      'Always contribute at least enough to get the full employer match — it is free money',
      '2025 limit is $23,500 — maxing this out is one of the most powerful wealth-building decisions',
      'Choose low-cost index funds over actively managed funds inside your 401(k)',
      'Never cash out when switching jobs — roll over to preserve tax advantages and avoid penalties',
      'Roth 401(k) is better if you expect higher taxes in retirement; traditional if you expect lower',
    ],
    tip: 'Increase your 401(k) contribution by 1% each year when you receive a pay raise. Most people never notice the extra savings, but the compounding effect over decades is enormous.',
    relatedTopics: [
      { label: 'Roth IRA', href: '/markets/us/roth-ira' },
      { label: 'Retirement Planning', href: '/personal-finance/retirement' },
      { label: 'Tax Planning', href: '/personal-finance/tax-planning' },
    ],
    ctaLabel: '401(k) Calculator',
    ctaHref: '/calculators',
  },

  'roth-ira': {
    title: 'Roth IRA',
    description: 'The most powerful tax-free retirement account available to US investors — rules, limits, and strategies.',
    emoji: '🏦',
    parentLabel: 'US Markets',
    parentHref: '/markets/us',
    overview: 'A Roth IRA (Individual Retirement Account) allows you to invest after-tax dollars that grow completely tax-free. Unlike traditional IRAs or 401(k)s, qualified withdrawals in retirement are 100% tax-free — including all decades of investment gains. For young investors especially, the Roth IRA is one of the most powerful wealth-building tools in existence.',
    sections: [
      {
        heading: '2025 Contribution Rules',
        body: 'Roth IRA contributions have income limits. High earners may need to use the backdoor Roth strategy.',
        bullets: [
          'Contribution limit: $7,000/year (2025); $8,000 if age 50+ (catch-up)',
          'Income limit (single): Full contribution below $150,000 MAGI; phase-out $150,000-$165,000',
          'Income limit (married filing jointly): Full below $236,000; phase-out $236,000-$246,000',
          'Backdoor Roth: If over income limits, contribute to Traditional IRA then convert — legal strategy',
          'Must have earned income equal to or greater than your contribution amount',
        ],
      },
      {
        heading: 'Roth IRA vs Traditional IRA',
        body: 'The right choice depends on your current vs expected future tax rate.',
        table: {
          headers: ['Feature', 'Roth IRA', 'Traditional IRA'],
          rows: [
            ['Contributions', 'After-tax (no deduction)', 'Pre-tax (deductible if eligible)'],
            ['Growth', 'Tax-free', 'Tax-deferred'],
            ['Withdrawals in retirement', 'Tax-free', 'Taxed as ordinary income'],
            ['Early withdrawal of contributions', 'Penalty-free (not earnings)', 'Taxed + 10% penalty'],
            ['RMDs', 'None during owner\'s lifetime', 'Required at age 73'],
            ['Income limits', 'Yes', 'For deductibility only'],
          ],
        },
      },
      {
        heading: 'Roth IRA Investment Strategy',
        body: 'What you put inside the Roth IRA matters as much as the account itself. High-growth assets benefit most from tax-free compounding.',
        bullets: [
          'Best assets for Roth IRA: High-growth stocks, REITs, small-cap ETFs — anything with high expected returns',
          'Core holding: VTI (Total US Market) or VOO (S&P 500) — low cost, maximum diversification',
          'Avoid bonds in Roth IRA — their lower returns waste the tax-free growth advantage',
          'Asset location: Keep bonds in tax-deferred accounts; keep highest-growth assets in Roth',
        ],
      },
      {
        heading: 'The Roth IRA Flexibility Advantage',
        body: 'Unlike most retirement accounts, Roth IRA contributions (not earnings) can be withdrawn at any time without penalty — making it serve double duty as an emergency fund.',
        bullets: [
          'Contributions (not earnings) can be withdrawn any time, no tax, no penalty',
          'Earnings withdrawn before 59½ are taxed + 10% penalty (with some exceptions)',
          'This flexibility makes Roth IRA a backup emergency fund for young investors',
          'First-time home purchase: Up to $10,000 in earnings can be withdrawn penalty-free',
        ],
      },
    ],
    keyTakeaways: [
      'Tax-free growth and withdrawals make Roth IRA the most powerful account for young investors',
      'Contribute the maximum $7,000/year as early in each year as possible',
      'Over income limits? Use the backdoor Roth IRA — it is legal and widely used',
      'Hold your highest-growth assets inside the Roth IRA to maximise the tax-free advantage',
      'Roth IRA has no RMDs — your account can continue growing tax-free throughout your lifetime',
    ],
    tip: 'Open and fund your Roth IRA as early as possible each year — ideally January 1. This maximises the time your money grows tax-free within the year.',
    relatedTopics: [
      { label: '401(k) Guide', href: '/markets/us/401k-guide' },
      { label: 'Retirement Planning', href: '/personal-finance/retirement' },
      { label: 'Tax Planning', href: '/personal-finance/tax-planning' },
    ],
  },

  'sp500-basics': {
    title: 'S&P 500 Basics',
    description: 'The world\'s most watched stock market index — what it is, how it works, and how to invest in it.',
    emoji: '📈',
    parentLabel: 'US Markets',
    parentHref: '/markets/us',
    overview: 'The S&P 500 (Standard & Poor\'s 500) is a stock market index tracking the 500 largest publicly traded companies in the United States by market capitalisation. It represents approximately 80% of total US stock market value and is widely considered the best single gauge of US large-cap equity performance. Since 1957, it has returned approximately 10.4% annually including dividends.',
    sections: [
      {
        heading: 'How the S&P 500 Works',
        body: 'The index is market-cap weighted, meaning larger companies have proportionally more influence on the index level.',
        bullets: [
          'Maintained by S&P Dow Jones Indices — a committee selects and reviews constituents',
          'Inclusion criteria: US company, $18B+ market cap, positive earnings, liquidity requirements',
          'Market-cap weighting: Apple (~7% weight) moves the index more than a small company',
          'Rebalanced quarterly; typically 20-30 companies replaced each year',
          'Total return version includes dividends reinvested; price return version does not',
        ],
      },
      {
        heading: 'Historical Performance',
        body: 'Long-term S&P 500 returns are remarkably consistent, despite severe short-term volatility.',
        table: {
          headers: ['Period', 'Annualised Return', 'Notable Events'],
          rows: [
            ['1950–2024 (74 yrs)', '~10.5% CAGR', 'Multiple recessions, wars, crises'],
            ['2000–2009 "Lost Decade"', '-0.95% CAGR', 'Dot-com bust + 2008 GFC'],
            ['2010–2019', '13.6% CAGR', 'Long bull market post-GFC'],
            ['2020–2024', '15.1% CAGR', 'COVID crash and recovery, AI boom'],
            ['Average bear market', '-35% peak-to-trough', 'Recovers average 2.5 years'],
          ],
        },
      },
      {
        heading: 'How to Invest in the S&P 500',
        body: 'You cannot buy the index directly, but S&P 500 index funds and ETFs track it at very low cost.',
        bullets: [
          'VOO (Vanguard S&P 500 ETF): 0.03% expense ratio — $1 per year on $3,333 invested',
          'SPY (SPDR S&P 500 ETF): 0.09% — oldest, most liquid ETF in the world',
          'FXAIX (Fidelity S&P 500 Index Fund): 0.015% — cheapest S&P 500 mutual fund',
          'IVV (iShares Core S&P 500 ETF): 0.03% — BlackRock\'s S&P 500 ETF',
          'India investors: Mirae Asset S&P 500 Top 50 ETF or Franklin Feeder fund on NSE',
        ],
      },
    ],
    keyTakeaways: [
      'The S&P 500 has returned ~10.5% annually since 1957 — it is the gold standard benchmark',
      'Market-cap weighting means technology megacaps (Apple, Microsoft, NVIDIA) drive much of the return',
      'A simple monthly investment in VOO or FXAIX has made millions of ordinary Americans wealthy',
      'Bear markets are temporary; the long-term trend is upward. Never sell in panic.',
      'The expense ratio on index funds is 0.03–0.09% — almost zero cost for market returns',
    ],
    tip: 'Set up automatic monthly investments in an S&P 500 index fund and ignore the daily news. Investors who check their portfolio the least perform the best statistically.',
    relatedTopics: [
      { label: 'ETFs', href: '/investing/etfs' },
      { label: 'NYSE & NASDAQ', href: '/markets/us/nyse-nasdaq' },
    ],
    ctaLabel: 'CAGR Calculator',
    ctaHref: '/calculators',
  },

  'us-tax-for-nri': {
    title: 'US Tax for NRI',
    description: 'How Non-Resident Indians living in the US are taxed — residency status, FBAR, FATCA, and filing requirements.',
    emoji: '🧾',
    parentLabel: 'US Markets',
    parentHref: '/markets/us',
    overview: 'Indians living in the US on visas (H-1B, L1, F-1 OPT, Green Card) face a complex tax situation involving both US and Indian tax obligations. The US taxes residents on worldwide income; India taxes NRIs only on Indian-source income. Understanding your tax residency status in both countries is the critical first step to avoiding double taxation.',
    sections: [
      {
        heading: 'US Tax Residency Status',
        body: 'Your US tax status depends on your visa type and days present. This determines how broadly you are taxed.',
        bullets: [
          'US Person (Citizen, Green Card holder): Taxed on worldwide income regardless of where you live',
          'Resident Alien (H-1B, L1 after Substantial Presence Test): Taxed on worldwide income',
          'Non-Resident Alien (F-1, new H-1B, short stays): Taxed only on US-source income',
          'Substantial Presence Test: 31 days this year + 1/3 days year prior + 1/6 days two years prior ≥ 183',
          'Dual-status year: Year of arrival/departure — complex; consider filing with a CPA',
        ],
      },
      {
        heading: 'FBAR and FATCA: Foreign Account Reporting',
        body: 'US persons with foreign financial accounts above certain thresholds must report them annually.',
        bullets: [
          'FBAR (FinCEN 114): File if foreign accounts exceeded $10,000 at any point during the year',
          'FATCA (Form 8938): File if foreign assets exceed $50,000 on last day of year (or $75,000 at any point)',
          'Indian bank accounts, mutual funds, Demat accounts, PPF all count as foreign financial assets',
          'Penalties: Willful FBAR failure — up to $100,000 or 50% of account value per violation',
          'File electronically via FinCEN BSA E-Filing System (FBAR) and with tax return (Form 8938)',
        ],
      },
      {
        heading: 'Common Tax Situations for Indian-Americans',
        body: 'Most H-1B holders and Green Card holders face these scenarios regularly.',
        bullets: [
          'NRO account interest: Taxable in US at ordinary income rates; credit for Indian TDS deducted',
          'India mutual fund gains: PFIC (Passive Foreign Investment Company) rules may apply — complex and punitive',
          'India stock gains: Report on Schedule D; claim foreign tax credit for Indian taxes paid',
          'NRE account interest: Tax-free in India but taxable in US for US residents',
          'India employer income: If working remotely for Indian company from US, likely taxable in US',
        ],
      },
    ],
    keyTakeaways: [
      'US persons are taxed on worldwide income — Indian income must be reported on US tax returns',
      'FBAR filing is mandatory if Indian accounts exceeded $10,000 at any point — penalties are severe',
      'India mutual funds may be treated as PFICs — consult a CPA experienced in cross-border tax',
      'Foreign Tax Credit prevents most double taxation — taxes paid to India can offset US liability',
      'Hire a CPA who specialises in US-India cross-border taxation — generalise CPAs often miss critical rules',
    ],
    warning: 'PFIC rules for Indian mutual funds are extremely punitive under US tax law. Many H-1B holders unknowingly hold Indian mutual funds in violation of optimal US tax strategy. Consult a cross-border CPA before investing.',
    relatedTopics: [
      { label: 'DTAA Benefits', href: '/markets/us/dtaa-benefits' },
      { label: 'NRI Investing', href: '/markets/india/nri-investing' },
      { label: 'Tax Planning', href: '/personal-finance/tax-planning' },
    ],
  },

  'dtaa-benefits': {
    title: 'DTAA Benefits (India-US)',
    description: 'How the Double Taxation Avoidance Agreement between India and the US prevents you from paying tax twice on the same income.',
    emoji: '🤝',
    parentLabel: 'US Markets',
    parentHref: '/markets/us',
    overview: 'India and the United States have a Double Taxation Avoidance Agreement (DTAA) — a bilateral tax treaty that determines which country has the right to tax specific income and provides mechanisms to avoid being taxed twice. For NRIs and Indian-Americans, the India-US DTAA signed in 1989 is one of the most important documents in their financial lives.',
    sections: [
      {
        heading: 'What DTAA Covers',
        body: 'The treaty covers most types of income earned by residents of one country from the other.',
        bullets: [
          'Employment income: Salary earned in the US while living there is typically only taxed in the US',
          'Dividends: Covered under Article 10 — maximum withholding rates specified',
          'Interest income: Article 11 — sets limits on withholding tax',
          'Capital gains: Article 13 — generally taxed in country of residence',
          'Business income: Article 7 — typically only taxed where business operations occur',
        ],
      },
      {
        heading: 'Foreign Tax Credit: The Main Relief Mechanism',
        body: 'Even where both countries have taxing rights, the Foreign Tax Credit prevents actual double taxation.',
        bullets: [
          'US tax: Calculated on worldwide income first',
          'Foreign Tax Credit (Form 1116): Dollar-for-dollar credit for taxes paid to India',
          'Example: $1,000 dividend income; India withholds $200 TDS; US tax would be $220; net US tax = $20',
          'Excess foreign tax credits can be carried back 1 year or forward 10 years',
          'Limitation: FTC cannot reduce US tax below zero; cannot shelter US income from US tax',
        ],
      },
      {
        heading: 'Claiming DTAA Benefits in India',
        body: 'NRIs can claim reduced TDS rates on Indian income by submitting a Tax Residency Certificate (TRC) to Indian payers.',
        bullets: [
          'Obtain TRC from IRS (Form 6166) — proves you are a US tax resident',
          'Submit TRC + Form 10F to Indian bank/fund house before each financial year',
          'Example benefit: India-US DTAA Article 11 limits interest withholding to 15% vs standard 30% TDS',
          'Dividend withholding: Standard 20% TDS may be reduced to 15% for US residents under DTAA',
          'File ITR in India even if no tax due — required if TDS was deducted on Indian income',
        ],
      },
    ],
    keyTakeaways: [
      'The India-US DTAA prevents most instances of double taxation through the Foreign Tax Credit',
      'File Form 6166 with the IRS each year to get a Tax Residency Certificate for claiming DTAA benefits in India',
      'Submit TRC + Form 10F to Indian banks and fund houses to get reduced withholding tax rates',
      'Most capital gains are taxed only in your country of residence under the DTAA',
      'Keep detailed records of all cross-border income and taxes paid — needed for both country filings',
    ],
    relatedTopics: [
      { label: 'US Tax for NRI', href: '/markets/us/us-tax-for-nri' },
      { label: 'NRI Investing', href: '/markets/india/nri-investing' },
    ],
  },

}
