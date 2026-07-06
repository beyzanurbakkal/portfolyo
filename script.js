let currentLang = 'TR';
let isExpanded = false;

// İki Dilli Sözlük Veri Yapısı
const dict = {
    TR: {
        home: "Giriş", skills: "Becerilerim", projects: "Projelerim", edu: "Eğitim", certs: "Sertifikalar", acts: "Faaliyetler", contact: "İletişim",
        welcome: "• Merhaba, ben", title: "Bilgisayar Mühendisliği Öğrencisi ",
        desc: "Selçuk ÜniveSelçuk Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim. Yapay Zeka, Bilgisayarlı Görü (OpenCV/YOLOv8) ve veri bilimi odaklı projeler geliştiriyorum. Şu an Kayseri Erciyes Teknopark'ta, Bayram Altınışık Shuttle şirketinde yaz stajımı sürdürmekteyim. Akademik ve profesyonel alanda TEKNOFEST 2026 Sağlıkta Yapay Zeka yarışmasında takım kaptanlığı yürütüyor, MYS Akıncı İnsansız Su Altı Aracı takımında aktif görev alıyorum. YOLOv8s tabanlı su altı nesne tespiti projem başta olmak üzere, veri bilimi gücüyle  yazılım geliştirme alanlarında uygulamalı projeler yaparak teknik yetkinliklerimi geliştirmeyi hedefliyorum.",
        btnProjects: "Projelerimi Gör", btnContact: "İletişim",
        bIntern: "Stajyer @ Andromeda LLC / Shuttle", bEdu: "Bilgisayar Mühendisliği Lisans",
        tSkills: "Teknik Becerilerim", cLang: "Programlama Dilleri", cAi: "Yapay Zeka & Görü", cDb: "Veri Tabanı & Yönetim",
        langTag: "Yabancı Dil: İngilizce (B2)",
        tProjects: "Öne Çıkan Projelerim", repoText: "GitHub'da İncele", btnMore: "Tüm Projeleri Gör", btnLess: "Daha Az Göster",
        p1T: "MYS-Tomris Sağlıkta Yapay Zeka", p1D: "TEKNOFEST 2026 Sağlıkta Yapay Zeka Yarışması kapsamında, derin öğrenme algoritmaları kullanarak genetik varyant sınıflandırma sistemi prototipi geliştirilmesi ve veri optimizasyonu çalışması.",
        p2T: "TÜBİTAK 2209-A Araştırma Projesi", p2D: "TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Destekleme Programı kapsamında başarıyla tamamlanan ve öğrenci kongresinde poster sunumu gerçekleştirilen bilimsel çalışma.",
        p3T: "Sualtı Nesne Tespit Sistemi", p3D: "Görüntü işleme ve OpenCV kütüphanesi kullanılarak, sualtı videolarındaki nesnelerin tespiti, takibi ve görüntü iyileştirme algoritmalarının entegrasyonu.",
        p4T: "Matematik Öğrenme Oyunu", p4D: "C# dilinde, nesne yönelimli programlama (OOP) ve algoritmik mantığı pekiştirmek amacıyla ders kapsamında tasarlanmış interaktif konsol oyunu uygulaması.",
        p5T: "Erbosan BT Altyapı Modülleri", p5D: "2025 yılı yaz stajı kapsamında Erbosan Bilgi Teknolojileri departmanında geliştirilen, ilişkisel veri tabanı tasarımı ve PL/SQL sorgu optimizasyonu süreçleri.",
        p6T: "Kriptoloji Motoru Masaüstü Uygulaması", p6D: "Hazır kütüphane kullanılmadan, klasik (Hill, Vigenere, 4 Kare, Rota) ve asimetrik (ASCII RSA) şifreleme algoritmalarının sıfırdan kodlandığı, SMTP/IMAP entegrasyonlu masaüstü uygulaması.",
        p7T: "NLP ile Metin Sınıflandırma", p7D: "Sıfırdan toplanan veri seti üzerinde haber kategorizasyonu. Klasik ML (BoW, TF-IDF) ile derin öğrenme (Word2Vec, BERT) modellerinin performans karşılaştırması.",
        p8T: "Resmi İlan Web Sitesi Veri Tabanı Tasarımı", p8D: "Yüksek trafikli, ilişkisel veri modeli gerektiren resmi ilan sitesi arka plan mimarisi. MS SQL Server ile indeksleme ve performans optimizasyonu.",
        p9T: "Apartman Yönetim Otomasyonu Veri Tabanı", p9D: "Oracle veri tabanı üzerinde apartman yönetim süreçlerini otomatize eden arka plan mimarisi. PL/SQL ile tetikleyiciler ve saklı yordamlar.",
        p10T: "GitHub Profil Görüntüleyici", p10D: "GitHub kullanıcı adına göre profil, repo ve takipçi istatistiklerini kart olarak gösteren, profili mail ile paylaşabilen web uygulaması.",
        p11T: "TuringLab — Turing Makinesi Simülatörü", p11D: "YAML ile tanımlanan tek-şeritli Turing makinelerini Python'da çalıştıran simülasyon motoru. 4 farklı TM tasarımı içerir.",
        tEdu: "Eğitim Hayatım", uniSub: "Mühendislik Fakültesi - Bilgisayar Mühendisliği (Lisans)", highVal: "🏆 Okul Birinciliği ile Mezuniyet",
        tCerts: "Lisanslar & Sertifikalar", viewCert: "Görüntüle",
        tActs: "Akademik & Sosyal Faaliyetler",
        act1T: "18. Uluslararası MEB Robot Yarışması", act1D: "Çizgi İzleyen Temel Seviye Kategorisi | Antalya (5-8 Mayıs 2026)", act1R: "Resmi Hakem",
        act2T: "TEKNOFEST Sağlıkta Yapay Zeka Yarışması", act2D: "MYS-Tomris Takımı Kaptanlığı ve Model Geliştirme Süreçleri", act2R: "Takım Kaptanı",
        act3T: "TÜBİTAK 2209-A Öğrenci Kongresi", act3D: "Araştırma Projesi Sonuçları Poster Sunumu ve Akademik Anlatım", act3R: "Poster Sunucusu",
        act4T: "Teknoloji & Girişimcilik Kulübü", act4D: "Üniversite bünyesinde kulüp faaliyetlerinin başlatılması ve teknik etkinlikler", act4R: "Kurucu Üye",
        cText: "Projelerim hakkında konuşmak, iş ortaklığı veya staj süreçleri için aşağıdaki formu doldurarak bana mesaj gönderebilirsiniz.",
        lName: "Adınız Soyadınız", lEmail: "E-posta Adresiniz", lMsg: "Mesajınız", btnSubmit: "Mesaj Gönder",
        exp: "Deneyim", tExp: "Deneyim", expEyebrow: "Profesyonel Deneyim",
        exp1Title: "Bayram Altınışık Shuttle — Stajyer", exp1Date: "Haziran 2026 - Devam Ediyor", exp1Desc: " Kayseri Erciyes Teknopark'ta yaz stajımı sürdürüyorum. Kişisel portfolyo web sitesi geliştirme görevini yürütüyorum.",
        exp2Title: "Erbosan Erciyas Boru Sanayii ve Ticaret A.Ş.  — Stajyer", exp2Date: "Haziran - Temmuz 2025", exp2Desc: "Bilgi teknolojileri departmanında C#, SQL ve DevExpress teknolojileri kullanılarak kurumsal yazılım geliştirme süreçlerine ve modüllerine aktif katkı sağlanması. FastReport ve Windows Report Builder araçları ile dinamik raporlama süreçlerinin kurgulanması, veri analizi ve markalama sistemlerinin yazılım altyapısının optimize edilmesi."
    },
    EN: {
        home: "Home", skills: "Skills", projects: "Projects", edu: "Education", certs: "Certificates", acts: "Activities", contact: "Contact",
        welcome: "• Hello, I am", title: "Computer Engineering Student ",
        desc: "I am a third-year Computer Engineering student at Selçuk University. I develop projects focused on Artificial Intelligence, Computer Vision (OpenCV/YOLOv8), and data science. Currently, I am completing my summer internship at the Bayram Altınışık Shuttle company within the Kayseri Erciyes Technopark. In both academic and professional spheres, I serve as the team captain for the TEKNOFEST 2026 AI in Healthcare competition and play an active role in the MYS Akıncı Unmanned Underwater Vehicle team. I aim to enhance my technical skills by undertaking applied projects—particularly software development initiatives driven by data science, such as an underwater object detection project based on YOLOv8s.",
        btnProjects: "View Projects", btnContact: "Contact",
        bIntern: "Intern @ Andromeda LLC / Shuttle", bEdu: "B.Sc. Computer Engineering",
        langTag: "Foreign Language: English (B2)",
        tSkills: "Technical Skills", cLang: "Programming Languages", cAi: "AI & Computer Vision", cDb: "Database & Management",
        tProjects: "Featured Projects", repoText: "Examine on GitHub", btnMore: "See All Projects", btnLess: "Show Less",
        p1T: "MYS-Tomris AI in Health", p1D: "Development of a genetic variant classification system prototype and data optimization using deep learning algorithms for the TEKNOFEST 2026 AI in Health competition.",
        p2T: "TÜBİTAK 2209-A Research Project", p2D: "A scientific study successfully completed under the TÜBİTAK 2209-A University Students Research Program and presented as a poster at the student congress.",
        p3T: "Underwater Object Detection System", p3D: "Detection, tracking, and image enhancement algorithm integration of underwater video objects using computer vision and the OpenCV library.",
        p4T: "Math Learning Game", p4D: "An interactive console application designed within a course framework to reinforce object-oriented programming (OOP) and algorithmic logic in C#.",
        p5T: "Erbosan IT Infrastructure Modules", p5D: "Relational database design and PL/SQL query optimization processes developed during the 2025 summer internship in the IT department.",
        p6T: "Cryptology Engine Desktop App", p6D: "A desktop application coding classical (Hill, Vigenere, 4-Square, Route) and asymmetric (ASCII RSA) encryption algorithms from scratch, with SMTP/IMAP email integration.",
        p7T: "Text Classification with NLP", p7D: "News categorization on a custom-built dataset. Performance comparison between classical ML (BoW, TF-IDF) and deep learning (Word2Vec, BERT) models.",
        p8T: "Official Listings Website Database Design", p8D: "High-traffic backend architecture for an official listings website requiring a relational data model. Indexing and performance optimization with MS SQL Server.",
        p9T: "Apartment Management Automation Database", p9D: "Backend architecture built on Oracle to automate apartment/site management processes, using triggers and stored procedures in PL/SQL.",
        p10T: "GitHub Profile Viewer", p10D: "An interactive web app that displays profile info, repo count, and follower stats by GitHub username, with email-sharing support.",
        p11T: "TuringLab — Turing Machine Simulator", p11D: "A simulation engine that runs single-tape deterministic Turing machines defined in YAML using Python. Includes 4 different TM designs.",       
        tEdu: "Education", uniSub: "Faculty of Engineering - Computer Engineering (B.Sc.)", highVal: "🏆 Graduating as valedictorian",
        tCerts: "Licenses & Certificates", viewCert: "View",
        tActs: "Academic & Social Activities",
        act1T: "18th Int. MEB Robot Competition", act1D: "Basic Level Line Follower Category | Antalya (May 6-8, 2026)", act1R: "Official Referee",
        act2T: "TEKNOFEST AI in Health Competition", act2D: "MYS-Tomris Team Captaincy and Model Training Frameworks", act2R: "Team Captain",
        act3T: "TÜBİTAK 2209-A Student Congress", act3D: "Poster Presentation and Academic Demonstration of Research Project Results", act3R: "Poster Presenter",
        act4T: "Technology & Entrepreneurship Club", act4D: "Initiation of club activities and leading technical events within the university", act4R: "Founding Member",
        cText: "You can fill out the form below to send me a message regarding projects, collaborations, or internship opportunities.",
        lName: "Your Name", lEmail: "Your Email", lMsg: "Your Message", btnSubmit: "Send Message",
        exp: "Experience", tExp: "Experience", expEyebrow: "Professional Experience",
        exp1Title: "Bayram Altınışık Shuttle — Intern", exp1Date: "June 2026 - Present", exp1Desc: "I am currently doing my summer internship at Kayseri Erciyes Technopark. I am working on developing a personal portfolio website.",
        exp2Title: "Erbosan Erciyas Boru Sanayii ve Ticaret A.Ş.  — Intern", exp2Date: "June - July 2025", exp2Desc: "Actively contributing to enterprise software development processes and modules within the Information Technology department using C#, SQL, and DevExpress technologies. Designing dynamic reporting workflows using FastReport and Windows Report Builder tools, and optimizing the software infrastructure for data analysis and branding systems."
    }
};

// Dil Değiştirme Fonksiyonu
function toggleLanguage() {
    currentLang = currentLang === 'TR' ? 'EN' : 'TR';
    document.querySelector('.lang-switch').innerText = currentLang === 'TR' ? 'EN' : 'TR';
    
    // Menü Güncellemeleri
    document.getElementById('m-home').innerText = dict[currentLang].home;
    document.getElementById('m-skills').innerText = dict[currentLang].skills;
    document.getElementById('m-projects').innerText = dict[currentLang].projects;
    document.getElementById('m-edu').innerText = dict[currentLang].edu;
    document.getElementById('m-certs').innerText = dict[currentLang].certs;
    document.getElementById('m-acts').innerText = dict[currentLang].acts;
    document.getElementById('m-contact').innerText = dict[currentLang].contact;

    // Giriş Bölümü Metin Değişimleri
    document.getElementById('hero-welcome').innerHTML = `<span>•</span> ${dict[currentLang].welcome.split(' ').slice(1).join(' ')}`;
    document.getElementById('hero-title').innerText = dict[currentLang].title;
    document.getElementById('hero-desc').innerText = dict[currentLang].desc;
    document.getElementById('btn-hero-projects').innerHTML = `<i class="fa-solid fa-code"></i> ${dict[currentLang].btnProjects}`;
    document.getElementById('btn-hero-contact').innerText = dict[currentLang].btnContact;
    document.getElementById('hero-lang-tag').innerHTML = `<i class="fa-solid fa-globe"></i> ${dict[currentLang].langTag}`;

    // Beceriler
    document.getElementById('orbit-center-label').textContent = dict[currentLang][labelKeyMap[document.querySelector('.skill-tab.active').dataset.cat]];
    document.getElementById('t-skills').innerText = dict[currentLang].tSkills;

    // Projeler
    document.getElementById('t-projects').innerText = dict[currentLang].tProjects;
    document.querySelectorAll('.repo-text').forEach(el => el.innerText = dict[currentLang].repoText);
    document.getElementById('btn-toggle-projects').innerText = isExpanded ? dict[currentLang].btnLess : dict[currentLang].btnMore;
    
    document.getElementById('p1-title').innerText = dict[currentLang].p1T; document.getElementById('p1-desc').innerText = dict[currentLang].p1D;
    document.getElementById('p2-title').innerText = dict[currentLang].p2T; document.getElementById('p2-desc').innerText = dict[currentLang].p2D;
    document.getElementById('p3-title').innerText = dict[currentLang].p3T; document.getElementById('p3-desc').innerText = dict[currentLang].p3D;
    document.getElementById('p4-title').innerText = dict[currentLang].p4T; document.getElementById('p4-desc').innerText = dict[currentLang].p4D;
    document.getElementById('p5-title').innerText = dict[currentLang].p5T; document.getElementById('p5-desc').innerText = dict[currentLang].p5D;
    document.getElementById('p6-title').innerText = dict[currentLang].p6T; document.getElementById('p6-desc').innerText = dict[currentLang].p6D;
    document.getElementById('p7-title').innerText = dict[currentLang].p7T; document.getElementById('p7-desc').innerText = dict[currentLang].p7D;
    document.getElementById('p8-title').innerText = dict[currentLang].p8T; document.getElementById('p8-desc').innerText = dict[currentLang].p8D;
    document.getElementById('p9-title').innerText = dict[currentLang].p9T; document.getElementById('p9-desc').innerText = dict[currentLang].p9D;
    document.getElementById('p10-title').innerText = dict[currentLang].p10T; document.getElementById('p10-desc').innerText = dict[currentLang].p10D;
    document.getElementById('p11-title').innerText = dict[currentLang].p11T; document.getElementById('p11-desc').innerText = dict[currentLang].p11D;

    document.getElementById('m-exp').innerText = dict[currentLang].exp;
    document.getElementById('t-exp').innerText = dict[currentLang].tExp;
    document.getElementById('exp-eyebrow').innerText = dict[currentLang].expEyebrow;
    document.getElementById('exp1-title').innerText = dict[currentLang].exp1Title;
    document.getElementById('exp1-date').innerText = dict[currentLang].exp1Date;
    document.getElementById('exp1-desc').innerText = dict[currentLang].exp1Desc;
    document.getElementById('exp2-title').innerText = dict[currentLang].exp2Title;
    document.getElementById('exp2-date').innerText = dict[currentLang].exp2Date;
    document.getElementById('exp2-desc').innerText = dict[currentLang].exp2Desc;

    // Eğitim ve Faaliyetler
    document.getElementById('t-edu').innerText = dict[currentLang].tEdu;
    document.getElementById('edu-uni-sub').innerText = dict[currentLang].uniSub;
    document.getElementById('tag-val').innerText = dict[currentLang].highVal;
    document.getElementById('t-certs').innerText = dict[currentLang].tCerts;
    document.querySelectorAll('.view-cert-btn').forEach(el => el.innerHTML = `<i class="fa-solid fa-eye"></i> ${dict[currentLang].viewCert}`);

    // Faaliyet Detayları
    document.getElementById('t-acts').innerText = dict[currentLang].tActs;
    document.getElementById('act1-title').innerText = dict[currentLang].act1T; document.getElementById('act1-desc').innerText = dict[currentLang].act1D; document.getElementById('act1-role').innerText = dict[currentLang].act1R;
    document.getElementById('act2-title').innerText = dict[currentLang].act2T; document.getElementById('act2-desc').innerText = dict[currentLang].act2D; document.getElementById('act2-role').innerText = dict[currentLang].act2R;
    document.getElementById('act3-title').innerText = dict[currentLang].act3T; document.getElementById('act3-desc').innerText = dict[currentLang].act3D; document.getElementById('act3-role').innerText = dict[currentLang].act3R;
    document.getElementById('act4-title').innerText = dict[currentLang].act4T; document.getElementById('act4-desc').innerText = dict[currentLang].act4D; document.getElementById('act4-role').innerText = dict[currentLang].act4R;

    // İletişim Form Metinleri
    document.getElementById('t-contact').innerText = dict[currentLang].contact;
    document.getElementById('c-text').innerText = dict[currentLang].cText;
    document.getElementById('l-name').innerText = dict[currentLang].lName;
    document.getElementById('l-email').innerText = dict[currentLang].lEmail;
    document.getElementById('l-msg').innerText = dict[currentLang].lMsg;
    document.getElementById('btn-submit').innerHTML = `${dict[currentLang].btnSubmit} <i class="fa-solid fa-paper-plane"></i>`;
}

// Proje Göster / Gizle Tetikleyicisi
function toggleProjects() {
    const hiddenProjects = document.querySelectorAll('.hidden-project');
    isExpanded = !isExpanded;
    
    hiddenProjects.forEach(proj => {
        proj.style.display = isExpanded ? 'flex' : 'none';
    });

    document.getElementById('btn-toggle-projects').innerText = isExpanded ? dict[currentLang].btnLess : dict[currentLang].btnMore;
}

// Fare Takip Eden Işıklı Nokta ve Halka
const cursorGlow = document.querySelector('.cursor-glow');
const cursorRing = document.querySelector('.cursor-ring');

if (cursorGlow && cursorRing) {
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
        cursorRing.style.left = e.clientX + 'px';
        cursorRing.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
        cursorRing.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursorGlow.style.opacity = '1';
        cursorRing.style.opacity = '0.6';
    });
}

// BECERİLER - ORBIT VERİSİ (gerçek renkli logolar - Devicon)
const skillsData = {
    lang: {
        label: "Programlama Dilleri",
        icon: "fa-solid fa-terminal",
        items: [
            { icon: "devicon-python-plain colored", name: "Python" },
            { icon: "devicon-csharp-plain colored", name: "C#" },
            { icon: "devicon-c-plain colored", name: "C" },
            { icon: "devicon-html5-plain colored", name: "HTML5" },
            { icon: "devicon-css3-plain colored", name: "CSS3" },
            { icon: "devicon-javascript-plain colored", name: "JavaScript" },
             { icon: "fa-solid fa-database", name: "SQL", color: "#38bdf8" }
        ]
    },
    ai: {
        label: "Yapay Zeka & Görü",
        icon: "fa-solid fa-brain",
        items: [
            { icon: "fa-solid fa-language", name: "NLP", color: "#38bdf8" },
            { icon: "devicon-opencv-plain colored", name: "OpenCV" },
            { icon: "fa-solid fa-crosshairs", name: "YOLO", color: "#facc15" },
            { icon: "devicon-matlab-plain colored", name: "MATLAB" },
            { icon: "devicon-pytorch-original colored", name: "Deep Learning" }
            
        ]
    },
    db: {
        label: "Veritabanı & Yönetim",
        icon: "fa-solid fa-database",
        items: [
            { icon: "devicon-microsoftsqlserver-plain colored", name: "MSSQL" },
            { icon: "devicon-oracle-original colored", name: "PL/SQL" },
            { icon: "devicon-oracle-original colored", name: "Oracle" },
            { icon: "devicon-git-plain colored", name: "Git" },
            { icon: "devicon-github-original", name: "GitHub", color: "#ffffff" }
        ]
    }
};


const labelKeyMap = { lang: 'cLang', ai: 'cAi', db: 'cDb' };

function renderOrbit(catKey) {
    const cat = skillsData[catKey];
    document.getElementById('orbit-center-icon').className = cat.icon;
    document.getElementById('orbit-center-label').textContent = dict[currentLang][labelKeyMap[catKey]];

    const nodes = document.querySelectorAll('.orbit-node');
    nodes.forEach((node, i) => {
        const iconEl = node.querySelector('.orbit-icon');
        if (cat.items[i]) {
            iconEl.className = `orbit-icon ${cat.items[i].icon}`;
            iconEl.style.color = cat.items[i].color || '';
            node.title = cat.items[i].name;
            node.classList.remove('empty');
        } else {
            iconEl.className = 'orbit-icon';
            node.classList.add('empty');
        }
    });
}

document.querySelectorAll('.skill-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderOrbit(tab.dataset.cat);
    });
});

renderOrbit('lang');