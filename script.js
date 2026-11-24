/* ==========================================================================
   Sania Sarwar — Executive Portfolio Interactive Engine (script.js)
   Handles: Spotlight Tracking, Reveal Animations, 6-Project Filter System,
            Case Study Dossier Modals, Copywriting Sample Modals, & Dispatch
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Footer Year
  const yearSpan = document.getElementById('yearSpan');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Cursor-Tracking Border Spotlight on Luxury Cards
  document.querySelectorAll('.spotlight-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 3. Scroll Reveal Intersection Observer
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal-item').forEach((el) => {
    revealObserver.observe(el);
  });

  // 4. Category Filter Logic for the 6 Flagship Projects
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active button state
      filterButtons.forEach((b) => {
        b.classList.remove('active', 'border-champagne', 'bg-champagne/15', 'text-champagne');
        b.classList.add('border-white/10', 'bg-charcoal', 'text-silver');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active', 'border-champagne', 'bg-champagne/15', 'text-champagne');
      btn.classList.remove('border-white/10', 'bg-charcoal', 'text-silver');
      btn.setAttribute('aria-selected', 'true');

      // Filter project cards cleanly
      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('is-filtered-out');
          card.style.display = '';
        } else {
          card.classList.add('is-filtered-out');
          card.style.display = 'none';
        }
      });
    });
  });
});

// 5. Full Case Study Dossier Data (Exact 6 Flagship Projects)
const caseStudies = {
  pulsemetrics: {
    badge: 'Python & SaaS Analytics · Case Study 01',
    title: 'PulseMetrics AI — Automated Website SEO & Business Data Engine',
    liveUrl: 'https://pulsemetrics-ai.vercel.app/',
    sections: [
      {
        label: 'Problem',
        text: 'E-commerce brands and marketing agencies waste hours manually cleaning messy CSV funnels and auditing websites for technical SEO and conversion gaps.'
      },
      {
        label: 'Solution',
        text: 'Engineered a dual-mode intelligence platform combining a Python Pandas/BeautifulSoup4 audit pipeline with real-time client-side CSV parsing, interactive Chart.js visualizations, and direct-response copy diagnostics.'
      },
      {
        label: 'Result',
        text: 'Turns raw multi-channel datasets and live URLs into instant, exportable executive JSON/CSV growth reports in seconds.'
      },
      {
        label: 'Architecture & Stack',
        text: 'Python (Pandas & BeautifulSoup4), Chart.js data visualization engine, JavaScript ES6 client-side CSV parser, and direct-response SaaS conversion copywriting.'
      }
    ]
  },
  '2bvision': {
    badge: 'Enterprise B2B & Tech · Case Study 02',
    title: '2B Vision Technologies — Global Enterprise B2B Software & LIS Portal',
    liveUrl: 'https://2b-vision-technologies-one.vercel.app/',
    sections: [
      {
        label: 'Problem',
        text: 'An established 150+ engineer software house needed an authoritative global web presence capable of converting US and international enterprise leads into qualified technical consultations.'
      },
      {
        label: 'Solution',
        text: 'Architected a Midnight Obsidian & Sovereign Gold B2B portal featuring executive positioning, verified global client endorsements, and an interactive Project & Team Scope Configurator with direct WhatsApp RFP routing.'
      },
      {
        label: 'Result',
        text: 'Replaced static service pages with an interactive solution-scoping experience that pre-qualifies enterprise budgets and timelines before the first call.'
      },
      {
        label: 'Architecture & Stack',
        text: 'Enterprise UX architecture, B2B conversion copywriting, interactive Project & Team Scope Estimator, semantic HTML5, CSS3, and modular JavaScript.'
      }
    ]
  },
  smartrealestate: {
    badge: 'Luxury Real Estate & FinTech UI · Case Study 03',
    title: 'Smart Real Estate Lahore — Luxury Property & Overseas Investment Portal',
    liveUrl: 'https://smart-real-estate-lahore.vercel.app/',
    sections: [
      {
        label: 'Problem',
        text: 'Overseas Pakistani investors (UK, USA, UAE) needed transparent ground-reality valuations, PKR/USD/AED currency clarity, and projected return modeling before investing in DHA Lahore.'
      },
      {
        label: 'Solution',
        text: 'Built an architectural limestone-and-bronze luxury property portal featuring a live PKR/USD/AED currency switcher, multi-parameter asset filtering, HD YouTube site walkthrough integration, and an interactive 1–5 year Capital Appreciation & Rental Yield Simulator.'
      },
      {
        label: 'Result',
        text: 'Streamlined high-ticket investor discovery and direct CEO WhatsApp advisory bookings across international currencies.'
      },
      {
        label: 'Architecture & Stack',
        text: 'Live PKR/USD/AED multi-currency conversion engine, 1–5 year ROI & Rental Yield Simulator, investor-focused copywriting, and responsive frontend architecture.'
      }
    ]
  },
  dreamsmile: {
    badge: 'Healthcare & Local Conversion · Case Study 04',
    title: 'Dream Smile Dental Clinic — Boutique Clinical Wellness & Cosmetic Dentistry',
    liveUrl: 'https://dream-smile-clinic-five.vercel.app/',
    sections: [
      {
        label: 'Problem',
        text: 'High-intent dental patients searching on mobile faced friction finding clear procedure details and booking consultations directly with the lead clinician.'
      },
      {
        label: 'Solution',
        text: 'Designed a calm Botanical Emerald & Alabaster clinical wellness experience spotlighting Dr. Arfeen Kiran (BDS, RDS), filterable cosmetic/restorative treatments, verified Google reviews, and 2-click WhatsApp slot reservation.'
      },
      {
        label: 'Result',
        text: 'Eliminated booking friction with transparent treatment positioning and instant mobile appointment routing.'
      },
      {
        label: 'Architecture & Stack',
        text: 'Patient-first conversion copywriting, mobile-first responsive UI, 2-click WhatsApp slot routing, and local search optimization.'
      }
    ]
  },
  saadia: {
    badge: 'Luxury Bridal & Editorial · Case Study 05',
    title: 'Saadia’s Studio & Salon — Haute Couture Bridal Atelier',
    liveUrl: 'https://saadia-studio-salon.vercel.app/',
    sections: [
      {
        label: 'Problem',
        text: 'A premier Johar Town bridal studio with 530+ verified reviews needed an elevated digital flagship reflecting its bespoke couture artistry rather than a generic salon template.'
      },
      {
        label: 'Solution',
        text: 'Crafted a dark-velvet and rose-champagne editorial experience featuring an asymmetric atelier story, filterable couture service menu, curated bridal lookbook, and a custom bridal date reservation modal.'
      },
      {
        label: 'Result',
        text: 'Elevated brand perception to a $2,500+ luxury standard with effortless mobile date inquiries.'
      },
      {
        label: 'Architecture & Stack',
        text: 'Editorial luxury UI design, atelier brand storytelling, interactive bridal lookbook filtering, and custom WhatsApp concierge reservation modal.'
      }
    ]
  },
  techvault: {
    badge: 'Product Discovery & Affiliate UX · Case Study 06',
    title: 'TechVault AI — Curated AI Tools & Tech Hardware Discovery Platform',
    liveUrl: 'https://saniatech-ui.github.io/techvault-ai/',
    sections: [
      {
        label: 'Problem',
        text: 'Creators and remote founders struggle to compare high-ROI AI software and creator hardware without sifting through cluttered review blogs.'
      },
      {
        label: 'Solution',
        text: 'Built a fast, category-filtered discovery directory with real-time search, scannable benefit-led product breakdowns, and streamlined buyer action flows.'
      },
      {
        label: 'Result',
        text: 'Delivers a clean, high-converting product discovery experience tailored for US and UK tech buyers.'
      },
      {
        label: 'Architecture & Stack',
        text: 'Real-time JavaScript search and category filtering, benefit-driven product copywriting, responsive card grid, and conversion-focused affiliate UX.'
      }
    ]
  }
};

// 6. Complete Independent Copywriting Samples Data
const writingSamples = {
  dental: {
    badge: 'Conversion Copy Sample · Sample 01',
    title: 'Dental Clinic Landing Page Copy',
    content: `
      <div class="space-y-4">
        <div class="p-4 rounded-xl bg-obsidian border border-white/10 space-y-2">
          <p class="font-mono text-[11px] text-champagne uppercase">Hero Headline &amp; Subheadline</p>
          <h4 class="font-serif text-2xl text-cream">Healthy, Confident Smiles—Without the Stress of Guesswork.</h4>
          <p class="text-xs sm:text-sm text-silver">From gentle routine checkups to precision smile restorations, our dental specialists explain every option clearly before treatment begins—so you stay comfortable, informed, and in control.</p>
        </div>
        <div class="space-y-2 text-xs sm:text-sm">
          <p class="font-mono text-[11px] text-champagne uppercase">Value Pillars</p>
          <p><strong class="text-cream">1. Transparent Treatment Plans:</strong> Clear timelines and honest guidance with zero hidden surprises.</p>
          <p><strong class="text-cream">2. Modern Comfort-First Care:</strong> Gentle techniques designed to put anxious patients and families at ease.</p>
          <p><strong class="text-cream">3. Convenient Scheduling:</strong> Direct WhatsApp appointment booking with fast confirmation from our front desk.</p>
        </div>
        <div class="p-3.5 rounded-xl bg-champagne/10 border border-champagne/30 text-xs text-cream">
          <strong>Call to Action:</strong> Book Your Consultation on WhatsApp Today →
        </div>
      </div>
    `
  },
  salon: {
    badge: 'Conversion Copy Sample · Sample 02',
    title: 'Beauty Salon Website Copy',
    content: `
      <div class="space-y-4">
        <div class="p-4 rounded-xl bg-obsidian border border-white/10 space-y-2">
          <p class="font-mono text-[11px] text-champagne uppercase">Hero Headline &amp; Subheadline</p>
          <h4 class="font-serif text-2xl text-cream">Refined Beauty Tailored to Your Most Unforgettable Moments.</h4>
          <p class="text-xs sm:text-sm text-silver">Whether preparing for your bridal day or restoring your natural glow, our senior stylists pair personalized skin prep with timeless, camera-ready finishes.</p>
        </div>
        <div class="space-y-2 text-xs sm:text-sm">
          <p class="font-mono text-[11px] text-champagne uppercase">Signature Experiences</p>
          <p><strong class="text-cream">Bridal &amp; Event Artistry:</strong> Custom-blended looks crafted to complement your features, outfit, and lighting.</p>
          <p><strong class="text-cream">Targeted Skin &amp; Hair Rituals:</strong> Restorative treatments designed for lasting glow and healthy texture.</p>
          <p><strong class="text-cream">Private Consultations:</strong> One-on-one pre-event trials so you walk into your occasion with complete confidence.</p>
        </div>
        <div class="p-3.5 rounded-xl bg-champagne/10 border border-champagne/30 text-xs text-cream">
          <strong>Call to Action:</strong> Reserve Your Bridal or Salon Appointment →
        </div>
      </div>
    `
  },
  saas: {
    badge: 'Conversion Copy Sample · Sample 03',
    title: 'SaaS Product Landing Page Copy',
    content: `
      <div class="space-y-4">
        <div class="p-4 rounded-xl bg-obsidian border border-white/10 space-y-2">
          <p class="font-mono text-[11px] text-champagne uppercase">Hero Headline &amp; Subheadline</p>
          <h4 class="font-serif text-2xl text-cream">Stop Losing Client Momentum Across Five Disconnected Tools.</h4>
          <p class="text-xs sm:text-sm text-silver">Bring project milestones, client approvals, and daily team priorities into one calm workspace—so deadlines stay visible and nothing slips through the cracks.</p>
        </div>
        <div class="space-y-2 text-xs sm:text-sm">
          <p class="font-mono text-[11px] text-champagne uppercase">Core Product Outcomes</p>
          <p><strong class="text-cream">Instant Project Clarity:</strong> See who owns every deliverable and what ships next in a single glance.</p>
          <p><strong class="text-cream">Frictionless Client Approvals:</strong> Share live progress links without endless email threads.</p>
          <p><strong class="text-cream">5-Minute Setup:</strong> Import your active tasks and invite your team without complex onboarding.</p>
        </div>
        <div class="p-3.5 rounded-xl bg-champagne/10 border border-champagne/30 text-xs text-cream">
          <strong>Call to Action:</strong> Start Your Free Workspace — No Credit Card Required →
        </div>
      </div>
    `
  }
};

// 7. Modal Controls
const modal = document.getElementById('detailModal');
const modalBadge = document.getElementById('modalBadge');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalFooter = document.getElementById('modalFooter');

function openCaseStudyModal(key) {
  const data = caseStudies[key];
  if (!data || !modal) return;

  modalBadge.textContent = data.badge;
  modalTitle.textContent = data.title;

  modalBody.innerHTML = data.sections
    .map(
      (sec) => `
      <div class="p-4 rounded-xl bg-obsidian/80 border border-white/[0.07] space-y-1.5">
        <p class="font-mono text-[11px] text-champagne uppercase tracking-wider">${sec.label}</p>
        <p class="text-xs sm:text-sm text-cream/90 leading-relaxed">${sec.text}</p>
      </div>
    `
    )
    .join('');

  modalFooter.innerHTML = `
    <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-champagne text-obsidian font-semibold text-xs hover:bg-champagneLight transition-all">
      <span>View Live Project ↗</span>
    </a>
    <button type="button" onclick="closeDetailModal()" class="px-4 py-2.5 rounded-xl border border-white/15 text-xs font-mono text-silver hover:text-cream transition-colors">Close</button>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function openWritingModal(key) {
  const data = writingSamples[key];
  if (!data || !modal) return;

  modalBadge.textContent = data.badge;
  modalTitle.textContent = data.title;
  modalBody.innerHTML = data.content;

  modalFooter.innerHTML = `
    <span class="text-[11px] font-mono text-silver">Written by Sania Sarwar · Conversion Copy Sample</span>
    <button type="button" onclick="closeDetailModal()" class="px-4 py-2 rounded-xl border border-white/15 text-xs font-mono text-cream hover:border-champagne transition-colors">Close Sample</button>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeDetailModal();
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
    closeDetailModal();
  }
});

// 8. Quick Copy Email Helper
function copyEmailQuick() {
  const email = 'saniadigitalhubs@gmail.com';
  const tag = document.getElementById('copyStatusTag');

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(() => {
      if (tag) {
        tag.textContent = 'COPIED';
        setTimeout(() => {
          tag.textContent = 'COPY';
        }, 2200);
      }
    });
  }
}

// 9. Form Dispatch via Email (Mailto) or WhatsApp
function handleInquirySubmit(e) {
  e.preventDefault();
  const name = document.getElementById('senderName').value.trim();
  const scope = document.getElementById('inquiryType').value;
  const brief = document.getElementById('projectBrief').value.trim();

  const subject = encodeURIComponent(`${scope} Inquiry from ${name}`);
  const body = encodeURIComponent(
    `Hello Sania,\n\nName/Company: ${name}\nProject Scope: ${scope}\n\nDetails:\n${brief}\n\nSent via Sania Sarwar Portfolio`
  );
  window.location.href = `mailto:saniadigitalhubs@gmail.com?subject=${subject}&body=${body}`;
}

function dispatchViaWhatsApp() {
  const name = document.getElementById('senderName').value.trim() || 'Prospective Client';
  const scope = document.getElementById('inquiryType').value;
  const brief =
    document.getElementById('projectBrief').value.trim() ||
    'I would like to discuss a website, automation, or copywriting project.';

  const text = encodeURIComponent(
    `Hello Sania,\n\nName/Company: ${name}\nProject Scope: ${scope}\nDetails: ${brief}`
  );
  window.open(`https://wa.me/923280715545?text=${text}`, '_blank', 'noopener,noreferrer');
}