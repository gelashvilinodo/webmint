/* =========================================================
   WebMint — main script
   ავტომატური ანიმაცია მხოლოდ ჰედერშია (მბრუნავი სიტყვა, მთვლელები).
   დანარჩენი ყველაფერი სქროლზე ან კლიკზეა მიბმული.
   ========================================================= */
(() => {
    'use strict';

    const $ = (s, c = document) => c.querySelector(s);
    const $$ = (s, c = document) => [...c.querySelectorAll(s)];
    const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // თარგმანი მიმდინარე ენაზე (js/i18n.js)
    const tr = (s) => (window.i18n ? window.i18n.t(s) : s);

    /* ---------- NAV: მობილური მენიუ ---------- */
    const nav = $('.nav');
    const toggle = $('.nav__toggle');
    const links = $$('.nav__links a');
    const indicator = $('.nav__indicator');

    const setMenu = (open) => {
        nav.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', tr(open ? 'მენიუს დახურვა' : 'მენიუს გახსნა'));
    };
    toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
    links.forEach((a) => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
    document.addEventListener('click', (e) => { if (!nav.contains(e.target)) setMenu(false); });

    /* ---------- NAV: აქტიური სექცია + მოცურავე ინდიკატორი ---------- */
    let activeLink = null;
    const moveIndicator = (link) => {
        if (!indicator) return;
        if (!link) { indicator.style.opacity = '0'; return; }
        indicator.style.opacity = '1';
        indicator.style.width = `${link.offsetWidth}px`;
        indicator.style.transform = `translateX(${link.offsetLeft}px)`;
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const link = links.find((a) => a.getAttribute('href') === `#${entry.target.id}`);
            if (!link) return;
            if (entry.isIntersecting) {
                links.forEach((a) => a.classList.toggle('is-active', a === link));
                activeLink = link;
                moveIndicator(link);
            } else if (link === activeLink) {
                link.classList.remove('is-active');
                activeLink = null;
                moveIndicator(null);
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });

    links.forEach((a) => {
        const section = $(a.getAttribute('href'));
        if (section) sectionObserver.observe(section);
    });

    /* ---------- HEADER: მბრუნავი სიტყვა (ავტომატური) ---------- */
    const words = $$('.rotator__word');
    const scenes = $$('.scene');

    // თითოეულ სილუეტში ელემენტები რიგრიგობით იხატება
    scenes.forEach((scene) => {
        [...scene.children].forEach((el, n) => el.style.setProperty('--i', n));
    });

    const showScene = (name) => {
        scenes.forEach((scene) => scene.classList.toggle('is-active', scene.dataset.scene === name));
    };

    // პირველი სილუეტი ჩატვირთვისას იხატება
    const firstWord = $('.rotator__word.is-active') || words[0];
    if (firstWord) setTimeout(() => showScene(firstWord.dataset.scene), 80);

    if (words.length > 1 && !reduceMotion) {
        let i = Math.max(0, words.indexOf(firstWord));
        setInterval(() => {
            const current = words[i];
            i = (i + 1) % words.length;
            current.classList.remove('is-active');
            current.classList.add('is-leaving');
            words[i].classList.add('is-active');
            showScene(words[i].dataset.scene);
            setTimeout(() => current.classList.remove('is-leaving'), 700);
        }, 3200);
    }

    /* ---------- ღამის რეჟიმი (კლიკზე) ---------- */
    const themeBtn = $('.theme-toggle');
    const themeMeta = $('meta[name="theme-color"]');

    const syncThemeUI = () => {
        const dark = document.documentElement.dataset.theme === 'dark';
        themeBtn.setAttribute('aria-pressed', String(dark));
        themeBtn.setAttribute('aria-label', tr(dark ? 'დღის რეჟიმი' : 'ღამის რეჟიმი'));
        if (themeMeta) themeMeta.content = dark ? '#0C0C0E' : '#E9ECEA';
    };

    const setTheme = (theme) => {
        document.documentElement.dataset.theme = theme;
        try { localStorage.setItem('wm-theme', theme); } catch { /* პირადი რეჟიმი */ }
        syncThemeUI();
    };

    themeBtn.addEventListener('click', () => {
        const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';

        if (!document.startViewTransition || reduceMotion) {
            setTheme(next);
            return;
        }

        // ახალი თემა ღილაკიდან წრიულად იშლება
        const r = themeBtn.getBoundingClientRect();
        const x = r.left + r.width / 2;
        const y = r.top + r.height / 2;
        const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

        document.startViewTransition(() => setTheme(next)).ready.then(() => {
            document.documentElement.animate(
                { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
                { duration: 700, easing: 'cubic-bezier(.22, .8, .24, 1)', pseudoElement: '::view-transition-new(root)' }
            );
        }).catch(() => { /* გადასვლა გამოტოვდა */ });
    });

    syncThemeUI();

    /* ---------- SCROLL: ფუტერის ლოგო "გაპრიალდება", როცა გამოჩნდება ---------- */
    const footerLogo = $('.footer-bar .nav__logo');
    if (footerLogo && !reduceMotion) {
        new IntersectionObserver((entries) => {
            if (!entries[0].isIntersecting) return;
            footerLogo.classList.add('is-shining');
            footerLogo.addEventListener('animationend', () => footerLogo.classList.remove('is-shining'), { once: true });
        }, { threshold: 1 }).observe(footerLogo);
    }

    /* ---------- ენის შეცვლისას: JS-ით დაყენებული ტექსტები ---------- */
    document.addEventListener('langchange', () => {
        syncThemeUI();
        setMenu(nav.classList.contains('is-open'));
        moveIndicator(activeLink);   // ბმულების სიგანე შეიცვალა
    });

    /* ---------- HEADER: მთვლელები (ავტომატური) ---------- */
    $$('[data-count]').forEach((el) => {
        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        if (reduceMotion) { el.textContent = target + suffix; return; }

        const duration = 1600;
        const start = performance.now() + 400;
        const tick = (now) => {
            const t = clamp((now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    });

    /* ---------- SCROLL: გამოჩენა ---------- */
    const revealEls = $$('[data-reveal]');
    if ('IntersectionObserver' in window && !reduceMotion) {
        // clip-path-ით დამალულ ელემენტს IntersectionObserver ვერ "ხედავს",
        // ამიტომ ასეთ შემთხვევაში მშობელს ვაკვირდებით.
        const targets = new Map();
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                targets.get(entry.target).forEach((el) => el.classList.add('is-visible'));
                revealObserver.unobserve(entry.target);
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
        revealEls.forEach((el) => {
            const target = el.dataset.reveal === 'right' ? el.parentElement : el;
            if (!targets.has(target)) targets.set(target, []);
            targets.get(target).push(el);
            revealObserver.observe(target);
        });
    } else {
        revealEls.forEach((el) => el.classList.add('is-visible'));
    }

    /* ---------- SCROLL: სქროლზე მიბმული ეფექტები ---------- */
    const progressBar = $('.progress__bar');
    const hero = $('.hero');
    const scrubEls = $$('[data-scrub]');
    const codeCard = $('.code-card');
    const codeLines = $$('.code .line');
    const timeline = $('[data-timeline]');
    const steps = $$('.step');
    const parallaxEls = $$('[data-parallax]');

    let ticking = false;

    const update = () => {
        ticking = false;
        const vh = window.innerHeight;
        const y = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - vh;

        // პროგრესის ზოლი + ნავიგაციის მდგომარეობა
        progressBar.style.transform = `scaleX(${maxScroll > 0 ? y / maxScroll : 0})`;
        nav.classList.toggle('is-scrolled', y > 40);

        // ჰერო პატარავდება და ქრება
        if (hero && !reduceMotion) {
            hero.style.setProperty('--hero-p', clamp(y / hero.offsetHeight).toFixed(4));
        }

        // "აბის" სათაურები ივსება
        scrubEls.forEach((el) => {
            const r = el.getBoundingClientRect();
            el.style.setProperty('--p', clamp((vh * 0.9 - r.top) / (vh * 0.5)).toFixed(3));
        });

        // კოდის ხაზები ნათდება
        if (codeCard && !reduceMotion) {
            const r = codeCard.getBoundingClientRect();
            const p = clamp((vh * 0.85 - r.top) / (r.height * 0.9));
            const lit = Math.round(p * codeLines.length);
            codeLines.forEach((line, i) => line.classList.toggle('is-lit', i < lit));
        }

        // პროცესის ხაზი ივსება, ნაბიჯები აქტიურდება
        if (timeline) {
            const r = timeline.getBoundingClientRect();
            const anchor = vh * 0.6;
            timeline.style.setProperty('--p', clamp((anchor - r.top) / r.height).toFixed(3));
            steps.forEach((step) => {
                step.classList.toggle('is-active', step.getBoundingClientRect().top < anchor);
            });
        }

        // ბარათების პარალაქსი
        if (!reduceMotion) {
            parallaxEls.forEach((el) => {
                const r = el.parentElement.getBoundingClientRect();
                const speed = parseFloat(el.dataset.parallax) || 0.06;
                const offset = (r.top + r.height / 2 - vh / 2) * -speed;
                el.style.setProperty('--py', `${offset.toFixed(1)}px`);
            });
        }
    };

    const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => { onScroll(); moveIndicator(activeLink); });
    update();

    /* ---------- SCROLL: ტერმინალი იწყებს ბეჭდვას ---------- */
    const terminal = $('.terminal');
    if (terminal) {
        const lines = $$('.t-line', terminal);
        const cursor = $('.t-cursor', terminal);
        const segments = $$('[data-type]', terminal);
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        if (reduceMotion || !('IntersectionObserver' in window)) {
            // ანიმაციის გარეშე — ტექსტი უკვე სრულადაა, კურსორი ბოლოში
            lines.forEach((line) => line.classList.add('is-on'));
            $('.t-final', terminal)?.appendChild(cursor);
        } else {
            segments.forEach((seg) => {
                seg.dataset.full = seg.textContent;
                seg.textContent = '';
            });
            terminal.classList.add('is-armed');

            const type = async () => {
                for (const line of lines) {
                    line.classList.add('is-on');
                    const lineSegments = $$('[data-type]', line);
                    if (!lineSegments.length) { await sleep(140); continue; }

                    for (const seg of lineSegments) {
                        seg.after(cursor);
                        const speed = Number(seg.dataset.type) || 40;
                        for (const ch of tr(seg.dataset.full)) {
                            seg.textContent += ch;
                            await sleep(speed * (0.6 + Math.random() * 0.8));
                        }
                        await sleep(Number(seg.dataset.pause) || 120);
                    }
                }
                terminal.classList.add('is-done');
            };

            const termObserver = new IntersectionObserver((entries) => {
                if (!entries.some((entry) => entry.isIntersecting)) return;
                termObserver.disconnect();
                setTimeout(type, 500);
            }, { threshold: 0.6 });
            termObserver.observe(terminal);
        }
    }

    /* ---------- CLICK: პროექტის ფანჯარა ---------- */
    const modal = $('.modal');
    if (modal) {
        const content = $('.modal__content', modal);
        const scroller = $('.modal__scroll', modal);
        const nextBtn = $('.modal__next', modal);
        const nextName = $('.modal__next-name', modal);
        const order = $$('.project__open').map((btn) => btn.dataset.project);
        let current = null;
        let lastFocus = null;

        const render = (id) => {
            const tpl = $(`#project-${id}`);
            if (!tpl) return;
            content.replaceChildren(tpl.content.cloneNode(true));
            window.i18n?.translate(content);
            modal.dataset.project = id;
            current = id;

            const next = order[(order.indexOf(id) + 1) % order.length];
            nextBtn.dataset.project = next;
            nextName.textContent = $(`#project-${next}`)?.dataset.name || '';
            scroller.scrollTop = 0;
        };

        // გვერდი ფანჯრის უკან არ სქროლავს
        const lockScroll = (lock) => {
            const root = document.documentElement;
            if (lock) root.style.setProperty('--sbw', `${window.innerWidth - root.clientWidth}px`);
            root.classList.toggle('is-locked', lock);
        };

        const open = (id) => {
            lastFocus = document.activeElement;
            render(id);
            lockScroll(true);
            modal.classList.remove('is-closing');
            modal.showModal();
        };

        const close = () => {
            if (!modal.open || modal.classList.contains('is-closing')) return;
            if (reduceMotion) { modal.close(); return; }
            modal.classList.add('is-closing');
            $('.modal__panel', modal).addEventListener('animationend', () => modal.close(), { once: true });
        };

        // გასუფთავება ყოველთვის აქ — ბრაუზერი Esc-ზე ზოგჯერ ფანჯარას პირდაპირ ხურავს
        modal.addEventListener('close', () => {
            modal.classList.remove('is-closing');
            lockScroll(false);
            lastFocus?.focus({ preventScroll: true });
        });

        $$('.project__open').forEach((btn) => btn.addEventListener('click', () => open(btn.dataset.project)));
        $('.modal__close', modal).addEventListener('click', close);

        // Esc — ანიმაციით დახურვა
        modal.addEventListener('cancel', (e) => { e.preventDefault(); close(); });

        // ფონზე დაჭერა (dialog თავად = ფონი, პანელის გარეთ)
        modal.addEventListener('click', (e) => { if (e.target === modal) close(); });

        // შემდეგი პროექტი — ფანჯრის დაუხურავად
        nextBtn.addEventListener('click', () => {
            const next = nextBtn.dataset.project;
            if (!next || next === current) return;
            if (reduceMotion) { render(next); return; }
            content.classList.add('is-swapping');
            setTimeout(() => {
                render(next);
                content.classList.remove('is-swapping');
            }, 250);
        });

        // ბმული ჯერ არ არის ჩასმული (href="#") — არაფერი მოხდეს
        content.addEventListener('click', (e) => {
            const link = e.target.closest('.pm-visit');
            if (link && link.getAttribute('href') === '#') e.preventDefault();
        });
    }

    /* ---------- CLICK: აკორდეონი ---------- */
    $$('.acc__head').forEach((btn) => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.acc');
            const open = btn.getAttribute('aria-expanded') !== 'true';
            $$('.acc').forEach((other) => {
                if (other === item) return;
                other.classList.remove('is-open');
                $('.acc__head', other).setAttribute('aria-expanded', 'false');
            });
            item.classList.toggle('is-open', open);
            btn.setAttribute('aria-expanded', String(open));
        });
    });

    /* ---------- CLICK: ელფოსტის დაკოპირება ---------- */
    const copyText = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            const ok = document.execCommand('copy');
            ta.remove();
            return ok;
        }
    };

    $$('[data-copy]').forEach((btn) => {
        const label = $('.copy-btn__text', btn);
        btn.addEventListener('click', async () => {
            const text = btn.dataset.copy;
            if (!(await copyText(text))) return;
            label.textContent = tr('დაკოპირდა ✓');
            btn.classList.add('is-copied');
            setTimeout(() => {
                label.textContent = text;
                btn.classList.remove('is-copied');
            }, 1800);
        });
    });

    /* ---------- CLICK: ტალღის ეფექტი ღილაკებზე ---------- */
    document.addEventListener('pointerdown', (e) => {
        const host = e.target.closest('[data-ripple]');
        if (!host || reduceMotion) return;
        const r = host.getBoundingClientRect();
        const size = Math.max(r.width, r.height) * 2;
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - r.left - size / 2}px`;
        ripple.style.top = `${e.clientY - r.top - size / 2}px`;
        host.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
    });

    /* ---------- კონტაქტის ფონი: წერტილები + მცურავი სიტყვები ----------
       მუშაობს მხოლოდ მაშინ, როცა სექცია ეკრანზე ჩანს. */
    const contactEl = $('.contact');
    const canvas = $('.contact__canvas');
    const sendBtn = $('.brief__submit');
    if (contactEl && canvas && canvas.getContext) {
        const ctx = canvas.getContext('2d');
        const WORDS = ['ლოგო', 'საიტი', 'დიზაინი', 'იდეა', 'მაღაზია'];
        const LINK_R = 170;     // მაუსიდან რა მანძილზე ჩნდება კავშირები
        const LINK_D = 130;     // ორ წერტილს შორის მაქსიმალური მანძილი ხაზისთვის
        let w = 0, h = 0;
        let dots = [];
        let words = [];
        let wordIndex = 0;
        let lastSpawn = 0;
        let lastTime = 0;
        let running = false;
        const mouse = { x: 0, y: 0, active: false };

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = contactEl.offsetWidth;
            h = contactEl.offsetHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const count = Math.min(90, Math.round((w * h) / 11000));
            dots = Array.from({ length: count }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
                r: Math.random() * 1.4 + 0.6,
            }));
            if (!running) draw(0);
        };

        const targetPoint = () => {
            const c = contactEl.getBoundingClientRect();
            const b = sendBtn.getBoundingClientRect();
            return { x: b.left - c.left + b.width / 2, y: b.top - c.top + b.height / 2 };
        };

        const spawnWord = () => {
            const side = Math.floor(Math.random() * 4);
            const x = side === 0 ? -50 : side === 1 ? w + 50 : Math.random() * w;
            const y = side === 2 ? h + 30 : side === 3 ? -30 : Math.random() * h;
            words.push({
                text: tr(WORDS[wordIndex++ % WORDS.length]),
                sx: x,
                sy: y,
                t: 0,
                dur: 7000 + Math.random() * 3000,
                size: 15 + Math.random() * 9,
                curve: (Math.random() - 0.5) * 0.6,
            });
        };

        const absorb = () => {
            sendBtn.classList.add('is-absorbing');
            setTimeout(() => sendBtn.classList.remove('is-absorbing'), 450);
        };

        function draw(dt) {
            ctx.clearRect(0, 0, w, h);

            // წერტილები ნელა დაცურავს
            ctx.fillStyle = 'rgba(255, 255, 255, .28)';
            for (const d of dots) {
                if (running) {
                    d.x += d.vx;
                    d.y += d.vy;
                    if (d.x < 0) d.x += w; else if (d.x > w) d.x -= w;
                    if (d.y < 0) d.y += h; else if (d.y > h) d.y -= h;
                }
                ctx.beginPath();
                ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                ctx.fill();
            }

            // მაუსთან ახლოს — თხელი კავშირის ხაზები
            if (mouse.active) {
                const near = dots
                    .map((d) => ({ d, dist: Math.hypot(d.x - mouse.x, d.y - mouse.y) }))
                    .filter((n) => n.dist < LINK_R);
                ctx.lineWidth = 1;
                for (let i = 0; i < near.length; i++) {
                    const a = near[i];
                    const fade = 1 - a.dist / LINK_R;
                    ctx.strokeStyle = `rgba(79, 209, 165, ${(fade * 0.45).toFixed(3)})`;
                    ctx.beginPath();
                    ctx.moveTo(mouse.x, mouse.y);
                    ctx.lineTo(a.d.x, a.d.y);
                    ctx.stroke();
                    for (let j = i + 1; j < near.length; j++) {
                        const b = near[j];
                        const dd = Math.hypot(a.d.x - b.d.x, a.d.y - b.d.y);
                        if (dd > LINK_D) continue;
                        const alpha = (1 - dd / LINK_D) * Math.min(fade, 1 - b.dist / LINK_R) * 0.6;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
                        ctx.beginPath();
                        ctx.moveTo(a.d.x, a.d.y);
                        ctx.lineTo(b.d.x, b.d.y);
                        ctx.stroke();
                    }
                }
            }

            // სიტყვები ღილაკისკენ მიიზიდება და მასში "ქრება"
            if (running && words.length) {
                const tp = targetPoint();
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                words = words.filter((wd) => {
                    wd.t += dt;
                    const p = clamp(wd.t / wd.dur);
                    const e = p * p;                                   // აჩქარდება, თითქოს იზიდება
                    const mx = (wd.sx + tp.x) / 2 + (tp.y - wd.sy) * wd.curve;
                    const my = (wd.sy + tp.y) / 2 - (tp.x - wd.sx) * wd.curve;
                    const x = (1 - e) * (1 - e) * wd.sx + 2 * (1 - e) * e * mx + e * e * tp.x;
                    const y = (1 - e) * (1 - e) * wd.sy + 2 * (1 - e) * e * my + e * e * tp.y;
                    const alpha = Math.min(p / 0.15, 1) * (1 - clamp((p - 0.8) / 0.2)) * 0.38;
                    const size = wd.size * (1 - e * 0.65);
                    ctx.font = `600 ${size.toFixed(1)}px "Space Grotesk", "Noto Sans Georgian", sans-serif`;
                    ctx.fillStyle = `rgba(242, 244, 243, ${alpha.toFixed(3)})`;
                    ctx.fillText(wd.text, x, y);
                    if (p >= 1) { absorb(); return false; }
                    return true;
                });
            }
        }

        const loop = (now) => {
            if (!running) return;
            const dt = Math.min(now - (lastTime || now), 50);
            lastTime = now;
            if (now - lastSpawn > 2200 && words.length < 5) {
                spawnWord();
                lastSpawn = now;
            }
            draw(dt);
            requestAnimationFrame(loop);
        };

        const setRunning = (on) => {
            if (reduceMotion || on === running) return;
            running = on;
            if (on) { lastTime = 0; requestAnimationFrame(loop); }
        };

        new IntersectionObserver((entries) => {
            setRunning(entries[0].isIntersecting && !document.hidden);
        }).observe(contactEl);
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) setRunning(false);
            else {
                const r = contactEl.getBoundingClientRect();
                setRunning(r.top < innerHeight && r.bottom > 0);
            }
        });

        contactEl.addEventListener('pointermove', (e) => {
            const r = contactEl.getBoundingClientRect();
            mouse.x = e.clientX - r.left;
            mouse.y = e.clientY - r.top;
            mouse.active = true;
            if (!running) draw(0);
        });
        contactEl.addEventListener('pointerleave', () => {
            mouse.active = false;
            if (!running) draw(0);
        });

        new ResizeObserver(resize).observe(contactEl);
    }

    /* ---------- კონტაქტის ფორმა ---------- */
    const brief = $('.brief');
    if (brief) {
        const status = $('.brief__status', brief);
        const needs = $$('input[name="need"]', brief);

        // "ჯერ არ ვიცი" სხვა ტეგებთან ერთად არ ინიშნება
        needs.forEach((cb) => cb.addEventListener('change', () => {
            if (!cb.checked) return;
            const exclusive = cb.hasAttribute('data-exclusive');
            needs.forEach((other) => {
                if (other !== cb && other.hasAttribute('data-exclusive') !== exclusive) other.checked = false;
            });
        }));

        const isContact = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || /^\+?[\d\s()-]{7,}$/.test(v);

        const setInvalid = (input, invalid) => {
            input.closest('.field').classList.toggle('is-invalid', invalid);
            input.setAttribute('aria-invalid', String(invalid));
        };

        brief.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = brief.elements.name;
            const contactInput = brief.elements.contact;
            const name = nameInput.value.trim();
            const contact = contactInput.value.trim();
            const message = brief.elements.message.value.trim();
            const need = needs.filter((cb) => cb.checked).map((cb) => cb.value);

            setInvalid(nameInput, !name);
            setInvalid(contactInput, !isContact(contact));
            if (!name || !isContact(contact)) {
                status.classList.add('is-error');
                status.textContent = tr(!name
                    ? 'გთხოვთ, მიუთითოთ სახელი.'
                    : 'გთხოვთ, მიუთითოთ სწორი ტელეფონი ან ელფოსტა.');
                (!name ? nameInput : contactInput).focus();
                return;
            }

            // სერვერი არ გვაქვს — ფორმა ელფოსტის აპლიკაციაში იხსნება შევსებული წერილით
            const subject = `ახალი მოთხოვნა საიტიდან — ${name}`;
            const body = [
                `სახელი: ${name}`,
                `კონტაქტი: ${contact}`,
                `რა სჭირდება: ${need.length ? need.join(', ') : '—'}`,
                '',
                message,
            ].join('\n');
            window.location.href = `mailto:${brief.dataset.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            status.classList.remove('is-error');
            status.textContent = tr('ელფოსტის აპლიკაცია გაიხსნა — წერილი მზადაა, დააჭირეთ „გაგზავნას“.');
        });

        brief.addEventListener('input', (e) => {
            if (e.target.closest('.field.is-invalid')) setInvalid(e.target, false);
        });
    }

    /* ---------- წელი ფუტერში ---------- */
    const year = $('#year');
    if (year) year.textContent = new Date().getFullYear();
})();
