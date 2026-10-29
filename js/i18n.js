/* =========================================================
   WebMint — ენები (ქართული / English)
   HTML-ში ტექსტი ქართულადაა. ინგლისურზე გადართვისას ყოველი
   ტექსტი და ატრიბუტი (aria-label, placeholder, alt...) ამ
   ლექსიკონით ითარგმნება, უკან დაბრუნებისას კი პირიქით.

   ტექსტის შეცვლისას: ქართული გასაღები ზუსტად უნდა ემთხვეოდეს
   HTML-ის ტექსტს (ზედმეტი ჰარები და ხაზის გადატანა არ ითვლება).
   ========================================================= */
(() => {
    'use strict';

    const EN = {
        /* ---------- ფონის მცურავი სიტყვები (მხოლოდ JS) ---------- */
        'საიტი': 'Website',
        'მაღაზია': 'Store',

        /* ---------- head ---------- */
        'WebMint — ციფრული სტუდია': 'WebMint — Digital Studio',
        'WebMint — თანამედროვე ვებსაიტები და ვებ-აპლიკაციები, მორგებული ყველა მოწყობილობაზე.':
            'WebMint — modern websites and web apps, tailored to every device.',

        /* ---------- ნავიგაცია ---------- */
        'მთავარი ნავიგაცია': 'Main navigation',
        'WebMint — მთავარი': 'WebMint — Home',
        'სტუდია': 'Studio',
        'პროექტები': 'Projects',
        'სერვისები': 'Services',
        'პროცესი': 'Process',
        'კონტაქტი': 'Contact',
        'დაგვიკავშირდით': 'Contact us',
        'ღამის რეჟიმი': 'Dark mode',
        'დღის რეჟიმი': 'Light mode',
        'მენიუს გახსნა': 'Open menu',
        'მენიუს დახურვა': 'Close menu',

        /* ---------- ჰედერი ---------- */
        'ზრდა იწყება ვებსაიტით, აპლიკაციით, სისტემით და დიზაინით და გრძელდება შედეგით.':
            'Growth starts with a website, an app, a system and design, and continues with results.',
        'ზრდა იწყება': 'Growth starts with',
        'ვებსაიტით': 'a website',
        'აპლიკაციით': 'an app',
        'სისტემით': 'a system',
        'დიზაინით': 'design',
        'და გრძელდება': 'and continues with',
        'შედეგით': 'results',
        'დიზაინი და დეველოპმენტი, რომელიც თქვენს იდეას ციფრულ პროდუქტად აქცევს.':
            'Design and development that turn your idea into a digital product.',
        'წელი': 'years',
        'გამოცდილება': 'of experience',
        'დასრულებული': 'completed',
        'პროექტი': 'projects',
        'ტექნოლოგიები': 'Technologies',
        'გაიგეთ მეტი': 'Learn more',

        /* ---------- სტუდია ---------- */
        '01 — სტუდია': '01 — Studio',
        'დიზაინი, რომელიც ჩანს.': 'Design that stands out.',
        'კოდი, რომელიც მუშაობს.': 'Code that works.',
        'გამოცდილება, რომელიც რჩება.': 'Experiences that stick.',
        'WebMint ციფრული სტუდიაა, რომელიც დიზაინსა და დეველოპმენტს ერთ გუნდში აერთიანებს. იდეიდან დიზაინამდე და დიზაინიდან გაშვებამდე ყველაფერი ერთ ხელშია და ერთ მიზანს ემსახურება: თქვენი ბიზნესის ზრდას.':
            'WebMint is a digital studio that brings design and development together in one team. From idea to design and from design to launch, everything is in one pair of hands and serves one goal: growing your business.',
        'ნახეთ ნამუშევრები': 'See our work',
        'კოდის მაგალითი': 'Code example',
        '"თქვენი იდეა"': '"your idea"',
        '// → ზრდა': '// → growth',
        'ტერმინალი': 'Terminal',
        'webmint new "თქვენი პროექტი": ბრენდის იდენტობა შექმნილია, დიზაინი დამტკიცებულია, ვებსაიტი აწყობილია, ტესტირება გავლილია. ზრდა იწყება.':
            'webmint new "your project": brand identity created, design approved, website built, tests passed. Growth begins.',
        '"თქვენი პროექტი"': '"your project"',
        'ბრენდის იდენტობა': 'Brand identity',
        'შექმნილია': 'created',
        'დამტკიცებულია': 'approved',
        'აწყობილია': 'built',
        'ტესტირება': 'Testing',
        'გავლილია': 'passed',
        'ზრდა იწყება...': 'Growth begins...',

        /* ---------- პროექტები ---------- */
        '02 — პროექტები': '02 — Projects',
        'შერჩეული ნამუშევრები': 'Selected work',
        'დავიწყოთ თქვენი': 'Start yours',
        'Marteo — პროექტის დეტალები': 'Marteo — project details',
        'SunLeon — პროექტის დეტალები': 'SunLeon — project details',
        'Botanica — პროექტის დეტალები': 'Botanica — project details',
        'ბიზნესის მართვის პლატფორმა · 2026': 'Business management platform · 2026',
        'Marteo-ს მართვის პანელი': 'Marteo dashboard',
        'შეკვეთები, მარაგები და ხარჯები ერთ სივრცეში, მოგების ავტომატური დათვლითა და ანალიტიკით.':
            'Orders, inventory and expenses in one place, with automatic profit tracking and analytics.',
        'UI/UX დიზაინი': 'UI/UX design',
        'დეველოპმენტი': 'Development',
        'ონლაინ მაღაზია': 'Online store',
        'SunLeon-ის ონლაინ მაღაზია': 'SunLeon online store',
        'პრემიუმ ჩანთების მაღაზია ელეგანტური, ორნამენტული ვიზუალით.':
            'A premium handbag store with an elegant, ornamental look.',
        'დიზაინი': 'Design',
        'E-commerce · კონცეფცია': 'E-commerce · Concept',
        'Botanica-ს ონლაინ მაღაზიის მთავარი გვერდი': 'Botanica online store homepage',
        'მცენარეული დანამატების ბრენდის ონლაინ მაღაზია, მშვიდი და ბუნებრივი ესთეტიკით.':
            'An online store for a herbal supplement brand, with a calm, natural aesthetic.',

        /* ---------- პროექტის ფანჯარა ---------- */
        'ფანჯრის დახურვა': 'Close window',
        'შემდეგი პროექტი': 'Next project',
        'მოკლედ': 'In short',
        'ამოცანა': 'Challenge',
        'გადაწყვეტა': 'Solution',
        'იდეა': 'Idea',
        'ძირითადი ფუნქციები': 'Key features',
        'რა გავაკეთეთ': 'What we did',
        'კონცეფცია': 'Concept',

        'პლატფორმის ნახვა ↗': 'View platform ↗',
        'Marteo-ს მთავარი პანელი: გაყიდვები, მოგება, ხარჯები': 'Marteo main dashboard: sales, profit, expenses',
        'Marteo მცირე და საშუალო ბიზნესისთვის შექმნილი მართვის პლატფორმაა. მფლობელი აქ ამატებს შეკვეთებს, შესყიდვებსა და მარაგებს, სისტემა კი თავად ითვლის მოგებას და ბიზნესის სრულ სურათს აჩვენებს.':
            'Marteo is a management platform built for small and medium-sized businesses. Owners add orders, purchases and inventory, and the system calculates profit on its own and shows the full picture of the business.',
        'მცირე ბიზნესები აღრიცხვას ხშირად რვეულში ან Excel-ის ცხრილებში აწარმოებენ. მონაცემები სხვადასხვა ადგილას იფანტება, მოგება ხელით ითვლება, ხოლო ზუსტი სურათი, თუ რა იყიდება და სად იხარჯება ფული, არავის აქვს.':
            'Small businesses often keep their records in a notebook or in Excel spreadsheets. Data ends up scattered, profit is calculated by hand, and nobody has a clear picture of what sells and where the money goes.',
        'შევქმენით ერთი, მარტივად გასაგები პანელი, სადაც ბიზნესის ყველა ციფრი ერთ ეკრანზე ჩანს. მომხმარებელი მხოლოდ მონაცემებს ამატებს, დანარჩენს — დათვლასა და ანალიზს — სისტემა აკეთებს.':
            'We built a single, easy-to-understand dashboard where every number in the business is visible on one screen. Users simply add data — the system handles the rest, from calculations to analysis.',
        'შეკვეთების მართვა და ისტორია': 'Order management and history',
        'მარაგების რეალურ დროში აღრიცხვა': 'Real-time inventory tracking',
        'შესყიდვებისა და ხარჯების კონტროლი': 'Purchase and expense control',
        'სუფთა მოგების ავტომატური დათვლა': 'Automatic net profit calculation',
        'ანალიტიკა და სტატისტიკა გრაფიკებით': 'Analytics and statistics with charts',
        'მომხმარებლების ბაზა': 'Customer database',
        'კონტენტ-კალენდარი': 'Content calendar',
        'ფრონტენდ დეველოპმენტი': 'Frontend development',
        'ბექენდ დეველოპმენტი': 'Backend development',

        'მაღაზიის ნახვა ↗': 'Visit store ↗',
        'SunLeon-ის მთავარი გვერდი ორნამენტული ჩარჩოებით': 'SunLeon homepage with ornamental frames',
        'SunLeon პრემიუმ ჩანთების ბრენდია. მისი ონლაინ მაღაზია ისე შევქმენით, რომ საიტის დათვალიერება ბუტიკში სეირნობას ჰგავდეს.':
            'SunLeon is a premium handbag brand. We built its online store so that browsing the site feels like strolling through a boutique.',
        'ბრენდს სჭირდებოდა ონლაინ სივრცე, სადაც პროდუქტის ხარისხი და ესთეტიკა ისევე იგრძნობა, როგორც ცოცხლად. ჩვეულებრივი მაღაზიის შაბლონი ამისთვის არ გამოდგებოდა.':
            'The brand needed an online space where the quality and aesthetics of its products come across just as they do in person. A standard store template would not do the job.',
        'დიზაინი ავაგეთ კლასიკურ ორნამენტებზე, ოქროსფერ დეტალებსა და სუფთა, ღია ფონზე. პროდუქტები გალერეის ჩარჩოებშია განთავსებული, ამიტომ თითოეული ჩანთა ხელოვნების ნიმუშივით იკითხება.':
            'We built the design around classic ornaments, gold details and a clean, light background. Products sit in gallery frames, so each bag reads like a work of art.',
        'ელეგანტური კატალოგი და ახალი კოლექციების სექცია': 'Elegant catalog and a new collections section',
        'ღია და მუქი რეჟიმი': 'Light and dark mode',
        'Instagram-თან კავშირი': 'Instagram integration',
        'სრული მორგება მობილურზე': 'Fully responsive on mobile',
        'ვიზუალური დიზაინი': 'Visual design',

        'კონცეფციის ნახვა ↗': 'View concept ↗',
        'Botanica-ს მთავარი გვერდი: Wellness, rooted in nature': 'Botanica homepage: Wellness, rooted in nature',
        'Botanica მცენარეული საკვები დანამატების ბრენდის კონცეფციაა: ონლაინ მაღაზია, რომელიც ბუნებრიობასა და სანდოობას გადმოსცემს.':
            'Botanica is a concept for a herbal supplement brand: an online store that conveys naturalness and trust.',
        'Wellness ბრენდისთვის ნდობა ყველაფერია. ამიტომ მიზნად დავისახეთ, საიტს პირველივე წამიდან მშვიდი, სუფთა და „ჯანსაღი“ განცდა შეექმნა.':
            'For a wellness brand, trust is everything. So our goal was for the site to feel calm, clean and “healthy” from the very first second.',
        'გამოვიყენეთ ბუნებრივი პალიტრა (კრემისფერი და ფოთლისფერი), ელეგანტური სერიფული ტიპოგრაფია და ფართო, სუნთქვადი სივრცე. მომხმარებელს პროდუქტის არჩევა თავისი მიზნის მიხედვით შეუძლია (Shop by goal) და არა მხოლოდ კატეგორიით.':
            'We used a natural palette (cream and leaf green), elegant serif typography and wide, airy spacing. Shoppers can choose products by their goal (Shop by goal), not just by category.',
        'პროდუქტის ძებნა მიზნის მიხედვით': 'Product search by goal',
        'სურვილების სია და კალათა': 'Wishlist and cart',
        'მინიმალისტური, სწრაფი ინტერფეისი': 'Minimal, fast interface',

        /* ---------- სერვისები ---------- */
        '03 — სერვისები': '03 — Services',
        'ერთი გუნდი,': 'One team,',
        'დიზაინიდან კოდამდე': 'from design to code',
        'შეგიძლიათ აირჩიოთ ერთი სერვისი ან მთლიანი პაკეტი. ორივე შემთხვევაში ერთი გუნდი უზრუნველყოფს, რომ ყველაფერი ერთ სტილში და ერთი მიზნით იყოს შექმნილი.':
            'Choose a single service or the full package. Either way, one team makes sure everything is created in one style and toward one goal.',
        'ბრენდინგი და დიზაინი': 'Branding & design',
        'ვქმნით ბრენდის ვიზუალურ სახეს: ლოგოს, ფერებს, ტიპოგრაფიას. ასევე ვაპროექტებთ საიტებისა და აპლიკაციების ინტერფეისს, რომელიც ლამაზიც არის და მოსახერხებელიც.':
            'We create your brand’s visual identity: logo, colors, typography. We also design website and app interfaces that are both beautiful and easy to use.',
        'ლოგო': 'Logo',
        'ბრენდბუქი': 'Brand book',
        'პროტოტიპი': 'Prototype',
        'ვებსაიტები': 'Websites',
        'კორპორატიული საიტები, ლენდინგები და ონლაინ მაღაზიები. სწრაფი, ყველა ეკრანზე მორგებული და ცოცხალი ანიმაციებით, რომ ვიზიტორს საიტი დაამახსოვრდეს.':
            'Corporate websites, landing pages and online stores. Fast, fully responsive and brought to life with animation, so visitors remember your site.',
        'კორპორატიული საიტი': 'Corporate website',
        'ლენდინგი': 'Landing page',
        'ანიმაცია': 'Animation',
        'ვებ-აპლიკაციები და სისტემები': 'Web apps & systems',
        'ბიზნესის საჭიროებებზე მორგებული პლატფორმები: მართვის პანელები, შიდა სისტემები და ანალიტიკა, რომლებიც რუტინულ საქმეს ავტომატურად აკეთებს.':
            'Platforms built around your business needs: dashboards, internal systems and analytics that handle routine work automatically.',
        'მართვის პანელი': 'Dashboard',
        'ანალიტიკა': 'Analytics',
        'ინტეგრაციები': 'Integrations',
        'მხარდაჭერა და განვითარება': 'Support & growth',
        'გაშვებით საქმე არ მთავრდება. ვზრუნავთ, რომ ყველაფერი გამართულად მუშაობდეს, ვაახლებთ კონტენტს და პროექტს ბიზნესთან ერთად ვზრდით.':
            'Launch is not the finish line. We keep everything running smoothly, update your content and grow the project together with your business.',
        'ტექნიკური მხარდაჭერა': 'Technical support',
        'განახლებები': 'Updates',
        'ოპტიმიზაცია': 'Optimization',

        /* ---------- პროცესი ---------- */
        '04 — პროცესი': '04 — Process',
        'როგორ ვმუშაობთ': 'How we work',
        'გამჭვირვალე პროცესი ხუთ ნაბიჯად: ყოველთვის იცით, სად ვართ და რა არის შემდეგი.':
            'A transparent five-step process: you always know where we are and what comes next.',
        'აღმოჩენა': 'Discovery',
        'ვსაუბრობთ თქვენს ბიზნესზე, მიზნებსა და აუდიტორიაზე. ვსწავლობთ კონკურენტებს და ერთად ვადგენთ პროექტის ფარგლებს, ვადებსა და ბიუჯეტს.':
            'We talk about your business, goals and audience. We study your competitors and together define the project’s scope, timeline and budget.',
        'ვქმნით ბრენდის ვიზუალურ სახეს და საიტის სტრუქტურას. დიზაინს ერთად ვამტკიცებთ, სანამ კოდის ერთ ხაზსაც დავწერთ.':
            'We create your brand’s visual identity and the site structure. We approve the design together before a single line of code is written.',
        'დამტკიცებულ დიზაინს ვაცოცხლებთ: ვწერთ სუფთა, სწრაფ კოდს და ვამოწმებთ ყველა მოწყობილობასა და ბრაუზერზე.':
            'We bring the approved design to life: we write clean, fast code and test it on every device and browser.',
        'გაშვება': 'Launch',
        'ვუშვებთ პროექტს, ვამოწმებთ ყველა დეტალს და გაჩვენებთ, როგორ მართოთ ის მარტივად.':
            'We launch the project, check every detail and show you how to manage it with ease.',
        'მხარდაჭერა': 'Support',
        'გაშვების შემდეგაც თქვენთან ვართ: ვზრუნავთ საიტის სტაბილურ მუშაობაზე, ვამატებთ ახალ ფუნქციებს და პროექტს ბიზნესთან ერთად ვავითარებთ.':
            'We stay with you after launch: we keep the site running smoothly, add new features and keep developing the project together with your business.',

        /* ---------- კონტაქტი ---------- */
        '05 — კონტაქტი': '05 — Contact',
        'გაქვთ იდეა?': 'Have an idea?',
        'ვაქციოთ რეალობად.': 'Let’s make it real.',
        'მოგვწერეთ ისე, როგორც თქვენთვის მოსახერხებელია, ან შეავსეთ მოკლე ფორმა.':
            'Write to us however suits you best, or fill in the short form.',
        'ელფოსტა': 'Email',
        'ელფოსტის დაკოპირება: webmintgeorgia@gmail.com': 'Copy email: webmintgeorgia@gmail.com',
        'მოგვწერეთ Messenger-ში': 'Message us on Messenger',
        'სახელი': 'Name',
        'თქვენი სახელი': 'Your name',
        'ტელეფონი ან ელფოსტა': 'Phone or email',
        '+995 … ან mail@…': '+995 … or mail@…',
        'რა გჭირდებათ?': 'What do you need?',
        'ბრენდინგი': 'Branding',
        'ვებსაიტი': 'Website',
        'აპლიკაცია': 'App',
        'ჯერ არ ვიცი': 'Not sure yet',
        'ახალი მოთხოვნა საიტიდან': 'New request from the website',
        'რა სჭირდება': 'Needs',
        'მოგვიყევით მოკლედ': 'Tell us briefly',
        '(არასავალდებულო)': '(optional)',
        'რა იდეა გაქვთ?': 'What’s your idea?',
        'გაგზავნა': 'Send',
        'ზემოთ დაბრუნება': 'Back to top',

        /* ---------- JS შეტყობინებები ---------- */
        'დაკოპირდა ✓': 'Copied ✓',
        'გთხოვთ, მიუთითოთ სახელი.': 'Please enter your name.',
        'გთხოვთ, მიუთითოთ სწორი ტელეფონი ან ელფოსტა.': 'Please enter a valid phone number or email.',
        'ელფოსტის აპლიკაცია გაიხსნა — წერილი მზადაა, დააჭირეთ „გაგზავნას“.':
            'Your email app has opened — the message is ready, just hit Send.',
    };

    // საპირისპირო ლექსიკონი: English → ქართული
    const KA = {};
    Object.entries(EN).forEach(([ka, en]) => { KA[en] = ka; });

    const ATTRS = ['aria-label', 'placeholder', 'alt', 'title', 'content'];
    const norm = (s) => s.replace(/\s+/g, ' ').trim();
    let lang = 'ka';
    let target = lang;   // ენა, რომელზეც გადასვლა უკვე დაიწყო (გადასვლა ასინქრონულია)

    // თარგმნის და ტოვებს თავდაპირველ ჰარებს (ხაზებს შორის სიცარიელისთვის)
    const swap = (s, dict) => {
        const hit = dict[norm(s)];
        if (hit === undefined) return null;
        return s.match(/^\s*/)[0] + hit + s.match(/\s*$/)[0];
    };

    const translate = (root) => {
        const dict = lang === 'en' ? EN : KA;
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
            // კოდის სიტყვები (translate="no") არ ითარგმნება, მაგ. design(idea)
            if (node.parentElement?.closest('[translate="no"]')) continue;
            const next = swap(node.data, dict);
            if (next !== null && next !== node.data) node.data = next;
        }
        const elements = root.querySelectorAll ? [...root.querySelectorAll('*')] : [];
        if (root.getAttribute) elements.unshift(root);
        elements.forEach((el) => {
            ATTRS.forEach((attr) => {
                const value = el.getAttribute(attr);
                if (!value) return;
                const next = swap(value, dict);
                if (next !== null) el.setAttribute(attr, next);
            });
        });
    };

    // ერთი სტრიქონის თარგმანი მიმდინარე ენაზე (ორივე მიმართულებით)
    const t = (s) => swap(s, lang === 'en' ? EN : KA) ?? s;

    const button = document.querySelector('.lang-toggle');
    const label = button?.querySelector('.lang-toggle__text');

    const apply = (next) => {
        lang = target = next;
        document.documentElement.lang = next;
        translate(document.documentElement);
        document.title = t(document.title);
        if (button) {
            label.textContent = next === 'en' ? 'ქა' : 'EN';
            button.setAttribute('aria-label', next === 'en' ? 'ქართულად გადართვა' : 'Switch to English');
        }
        try { localStorage.setItem('wm-lang', next); } catch { /* პირადი რეჟიმი */ }
        document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: next } }));
    };

    const setLang = (next) => {
        if (next === target) return;
        target = next;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!document.startViewTransition || reduce) { apply(next); return; }
        // ახალი ენა რბილად ჩნდება
        document.startViewTransition(() => apply(next)).ready.then(() => {
            document.documentElement.animate(
                { opacity: [0, 1], filter: ['blur(6px)', 'blur(0)'] },
                { duration: 450, easing: 'ease-out', pseudoElement: '::view-transition-new(root)' }
            );
        }).catch(() => { /* გადასვლა გამოტოვდა */ });
    };

    button?.addEventListener('click', () => {
        label.classList.remove('is-flipping');
        void label.offsetWidth;
        label.classList.add('is-flipping');
        setLang(target === 'en' ? 'ka' : 'en');
    });

    window.i18n = { t, translate, setLang, get lang() { return lang; } };

    // ნაგულისხმევად ქართული; შენახული არჩევანი იტვირთება
    let saved = null;
    try { saved = localStorage.getItem('wm-lang'); } catch { /* პირადი რეჟიმი */ }
    if (saved === 'en') apply('en');
})();
