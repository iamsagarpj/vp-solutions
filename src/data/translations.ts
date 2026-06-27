export type LangCode = "en" | "hi" | "mr" | "gu" | "ta" | "te";

export interface LangMeta {
  code: LangCode;
  label: string;      // native script name
  englishLabel: string;
}

export const languages: LangMeta[] = [
  { code: "en", label: "English",    englishLabel: "English"   },
  { code: "hi", label: "हिंदी",       englishLabel: "Hindi"     },
  { code: "mr", label: "मराठी",       englishLabel: "Marathi"   },
  { code: "gu", label: "ગુજરાતી",     englishLabel: "Gujarati"  },
  { code: "ta", label: "தமிழ்",       englishLabel: "Tamil"     },
  { code: "te", label: "తెలుగు",      englishLabel: "Telugu"    },
];

// ─── Translation map ──────────────────────────────────────────────────────────
// Each key is a UI string identifier.
// Values are written as natural, meaningful phrases in each language —
// NOT literal word-for-word translations.

export const t: Record<string, Record<LangCode, string>> = {

  // ── Navbar ─────────────────────────────────────────────────────────────────
  "nav.home":      { en: "Home",        hi: "होम",          mr: "मुख्यपान",     gu: "હોમ",         ta: "முகப்பு",    te: "హోమ్"        },
  "nav.about":     { en: "About",       hi: "हमारे बारे में", mr: "आमच्याबद्दल", gu: "અમારા વિશે",  ta: "பற்றி",      te: "మా గురించి"  },
  "nav.services":  { en: "Services",    hi: "सेवाएं",        mr: "सेवा",         gu: "સેવાઓ",       ta: "சேவைகள்",   te: "సేవలు"       },
  "nav.projects":  { en: "Projects",    hi: "परियोजनाएं",   mr: "प्रकल्प",      gu: "પ્રોજેક્ટ્સ",  ta: "திட்டங்கள்", te: "ప్రాజెక్టులు" },
  "nav.partners":  { en: "Leadership",  hi: "नेतृत्व",       mr: "नेतृत्व",      gu: "નેતૃત્વ",     ta: "தலைமை",      te: "నాయకత్వం"   },
  "nav.clients":   { en: "Clients",     hi: "ग्राहक",        mr: "ग्राहक",       gu: "ગ્રાહકો",     ta: "வாடிக்கையாளர்கள்", te: "క్లయింట్లు" },
  "nav.careers":   { en: "Careers",     hi: "करियर",         mr: "करिअर",        gu: "કારકિર્દી",   ta: "வேலைவாய்ப்பு", te: "కెరీర్"   },
  "nav.gallery":   { en: "Gallery",     hi: "गैलरी",         mr: "दालन",         gu: "ગેલેરી",      ta: "கேலரி",      te: "గ్యాలరీ"    },
  "nav.contact":   { en: "Contact Us",  hi: "संपर्क करें",   mr: "संपर्क साधा",  gu: "સંપર્ક કરો",  ta: "தொடர்பு கொள்ளுங்கள்", te: "సంప్రదించండి" },

  // ── Hero ───────────────────────────────────────────────────────────────────
  "hero.badge":    { en: "Trusted Since 2005 — 20 Years of Excellence", hi: "2005 से विश्वसनीय — 20 वर्षों की उत्कृष्टता", mr: "2005 पासून विश्वासू — उत्कृष्टतेची 20 वर्षे", gu: "2005 થી વિશ્વસનીય — 20 વર્ષોની શ્રેષ્ઠતા", ta: "2005 முதல் நம்பகமான — 20 ஆண்டுகள் சிறப்பு", te: "2005 నుండి నమ్మకమైన — 20 సంవత్సరాల శ్రేష్ఠత" },
  "hero.h1a":      { en: "Empowering", hi: "सशक्त बना रहे हैं", mr: "सक्षम करत आहोत", gu: "સક્ષમ બનાવીએ છીએ", ta: "வலுப்படுத்துகிறோம்", te: "శక్తివంతం చేస్తున్నాం" },
  "hero.h1b":      { en: "Government", hi: "सरकारी", mr: "सरकारी", gu: "સરકારી", ta: "அரசு", te: "ప్రభుత్వ" },
  "hero.h1c":      { en: "Corporate",  hi: "कॉर्पोरेट", mr: "कॉर्पोरेट", gu: "કોર્પોરેટ", ta: "கார்ப்பரேட்", te: "కార్పోరేట్" },
  "hero.h1d":      { en: "Infrastructure with Skilled Workforce", hi: "आधारभूत संरचना को कुशल कार्यबल के साथ", mr: "पायाभूत सुविधा कुशल कामगारांसह", gu: "ઇન્ફ્રાસ્ટ્રક્ચર કુશળ કાર્યબળ સાથે", ta: "உள்கட்டமைப்பை திறமையான தொழிலாளர்களுடன்", te: "మౌలిక సదుపాయాలను నిపుణమైన శ్రామికులతో" },
  "hero.desc":     { en: "VP Solutions delivers end-to-end manpower, solar EPC, facility management, and smart infrastructure services across government departments, electricity boards, municipalities, and private enterprises.", hi: "VP Solutions सरकारी विभागों, बिजली बोर्डों, नगर पालिकाओं और निजी उद्यमों के लिए मैनपावर, सोलर EPC, फैसिलिटी मैनेजमेंट और स्मार्ट इन्फ्रास्ट्रक्चर सेवाएं प्रदान करता है।", mr: "VP Solutions सरकारी विभाग, वीज मंडळे, नगरपालिका आणि खाजगी उद्योगांसाठी मनुष्यबळ, सोलर EPC, सुविधा व्यवस्थापन आणि स्मार्ट इन्फ्रास्ट्रक्चर सेवा पुरवते.", gu: "VP Solutions સરકારી વિભાગો, વીજળી બોર્ડ, નગરપાલિકાઓ અને ખાનગી ઉદ્યોગો માટે મેનપાવર, સોલર EPC, ફેસિલિટી મેનેજમેન્ટ અને સ્માર્ટ ઇન્ફ્રાસ્ટ્રક્ચર સેવાઓ પ્રદાન કરે છે.", ta: "VP Solutions அரசு துறைகள், மின் வாரியங்கள், நகராட்சிகள் மற்றும் தனியார் நிறுவனங்களுக்கு மனிதவள, சோலார் EPC, வசதி மேலாண்மை மற்றும் திறமையான உள்கட்டமைப்பு சேவைகளை வழங்குகிறது.", te: "VP Solutions ప్రభుత్వ విభాగాలు, విద్యుత్ బోర్డులు, పురపాలికలు మరియు ప్రైవేట్ సంస్థలకు మానవ వనరులు, సోలార్ EPC, సౌకర్య నిర్వహణ మరియు స్మార్ట్ మౌలిక సదుపాయాల సేవలు అందిస్తుంది." },
  "hero.cta1":     { en: "Explore Services",  hi: "सेवाएं देखें",     mr: "सेवा पहा",       gu: "સેવાઓ જુઓ",    ta: "சேவைகளை பார்க்க", te: "సేవలు చూడండి"  },
  "hero.cta2":     { en: "Our Projects",      hi: "हमारे प्रोजेक्ट",  mr: "आमचे प्रकल्प",   gu: "અમારા પ્રોજેક્ટ", ta: "எங்கள் திட்டங்கள்", te: "మా ప్రాజెక్టులు" },
  "hero.cta3":     { en: "Get a Quote",        hi: "कोटेशन लें",       mr: "कोटेशन मिळवा",   gu: "ભાવ મેળવો",    ta: "விலைப்பட்டியல் பெறுங்கள்", te: "కోటేషన్ పొందండి" },
  "hero.trust1":   { en: "ISO Certified",      hi: "ISO प्रमाणित",     mr: "ISO प्रमाणित",   gu: "ISO પ્રમાણિત", ta: "ISO சான்றளிக்கப்பட்டது", te: "ISO ధృవీకరించబడింది" },
  "hero.trust2":   { en: "1000+ Workforce",    hi: "1000+ कर्मचारी",   mr: "1000+ कर्मचारी", gu: "1000+ કર્મચારી", ta: "1000+ பணியாளர்கள்", te: "1000+ వర్క్‌ఫోర్స్" },
  "hero.trust3":   { en: "50+ Govt. Projects", hi: "50+ सरकारी प्रोजेक्ट", mr: "50+ सरकारी प्रकल्प", gu: "50+ સરકારી પ્રોજેક્ટ", ta: "50+ அரசு திட்டங்கள்", te: "50+ ప్రభుత్వ ప్రాజెక్టులు" },
  "hero.trust4":   { en: "MSEB Empanelled",    hi: "MSEB पैनलबद्ध",    mr: "MSEB सूचीबद्ध",  gu: "MSEB પૅનલ",    ta: "MSEB பட்டியலிடப்பட்டது", te: "MSEB ప్యానెల్డ్" },

  // ── Section headers ────────────────────────────────────────────────────────
  "section.about.label":    { en: "About Us",        hi: "हमारे बारे में",  mr: "आमच्याबद्दल",   gu: "અમારા વિશે",   ta: "எங்களைப் பற்றி",  te: "మా గురించి"      },
  "section.about.title":    { en: "20 Years of Building Maharashtra's Backbone", hi: "महाराष्ट्र की रीढ़ बनाने के 20 साल", mr: "महाराष्ट्राचा कणा उभारण्याची 20 वर्षे", gu: "મહારાષ્ટ્રની કરોડ બનાવવાના 20 વર્ષ", ta: "மகாராஷ்டிராவின் முதுகெலும்பை கட்டுவதில் 20 ஆண்டுகள்", te: "మహారాష్ట్ర వెన్నెముకను నిర్మించిన 20 సంవత్సరాలు" },
  "section.services.label": { en: "What We Do",      hi: "हम क्या करते हैं", mr: "आम्ही काय करतो", gu: "અમે શું કરીએ છીએ", ta: "நாங்கள் என்ன செய்கிறோம்", te: "మేము ఏమి చేస్తాం" },
  "section.services.title": { en: "Comprehensive Services Across Sectors", hi: "सभी क्षेत्रों में व्यापक सेवाएं", mr: "सर्व क्षेत्रांमध्ये सर्वसमावेशक सेवा", gu: "તમામ ક્ષેત્રોમાં વ્યાપક સેવાઓ", ta: "அனைத்து துறைகளிலும் விரிவான சேவைகள்", te: "అన్ని రంగాలలో సమగ్ర సేవలు" },
  "section.projects.label": { en: "Our Work",        hi: "हमारा काम",       mr: "आमचे काम",      gu: "અમારું કામ",   ta: "எங்கள் பணி",     te: "మా పని"          },
  "section.projects.title": { en: "Proven Track Record Across Sectors", hi: "सभी क्षेत्रों में सिद्ध प्रदर्शन", mr: "सर्व क्षेत्रांमध्ये सिद्ध कामगिरी", gu: "તમામ ક્ષેત્રોમાં સાબિત ટ્રેક રેકોર્ડ", ta: "அனைத்து துறைகளிலும் நிரூபிக்கப்பட்ட சாதனை", te: "అన్ని రంగాలలో నిరూపిత విజయం" },
  "section.contact.label":  { en: "Get In Touch",    hi: "संपर्क में रहें",  mr: "संपर्क करा",    gu: "સંપર્કમાં રહો", ta: "தொடர்பில் இருங்கள்", te: "సంప్రదించండి"   },
  "section.contact.title":  { en: "Let's Discuss Your Project", hi: "आपके प्रोजेक्ट पर बात करें", mr: "तुमच्या प्रकल्पाबद्दल चर्चा करूया", gu: "ચાલો તમારા પ્રોજેક્ટ વિશે વાત કરીએ", ta: "உங்கள் திட்டத்தை விவாதிப்போம்", te: "మీ ప్రాజెక్ట్ గురించి మాట్లాడదాం" },
  "section.clients.label":  { en: "Clients",         hi: "ग्राहक",          mr: "ग्राहक",        gu: "ક્લાઈન્ટ",     ta: "வாடிக்கையாளர்கள்", te: "క్లయింట్లు"    },
  "section.clients.title":  { en: "Trusted by Leading Organisations", hi: "अग्रणी संगठनों का भरोसा", mr: "अग्रगण्य संस्थांचा विश्वास", gu: "અગ્રણી સંસ્થાઓ દ્વારા વિશ્વાસ", ta: "முன்னணி நிறுவனங்களின் நம்பிக்கை", te: "ప్రముఖ సంస్థల విశ్వాసం" },
  "section.careers.label":  { en: "Work With Us",    hi: "हमारे साथ काम करें", mr: "आमच्यासोबत काम करा", gu: "અમારી સાથે કામ કરો", ta: "எங்களுடன் பணியாற்றுங்கள்", te: "మాతో పని చేయండి" },
  "section.careers.title":  { en: "Join the VP Solutions Family", hi: "VP Solutions परिवार से जुड़ें", mr: "VP Solutions कुटुंबात सामील व्हा", gu: "VP Solutions પરિવારમાં જોડાઓ", ta: "VP Solutions குடும்பத்தில் சேருங்கள்", te: "VP Solutions కుటుంబంలో చేరండి" },
  "section.gallery.label":  { en: "Gallery",         hi: "गैलरी",           mr: "दालन",          gu: "ગેલેરી",       ta: "கேலரி",          te: "గ్యాలరీ"        },
  "section.gallery.title":  { en: "Our Work in Action", hi: "हमारा काम — नजदीक से", mr: "आमचे काम — प्रत्यक्षात", gu: "અમારું કામ — કાર્ય પ્રક્રિયામાં", ta: "எங்கள் பணி நடவடிக்கையில்", te: "మా పని చర్యలో" },
  "section.partners.label": { en: "Leadership",      hi: "नेतृत्व",         mr: "नेतृत्व",       gu: "નેતૃત્વ",      ta: "தலைமை",          te: "నాయకత్వం"       },
  "section.partners.title": { en: "The People Behind VP Solutions", hi: "VP Solutions के पीछे के लोग", mr: "VP Solutions मागील व्यक्तिमत्त्व", gu: "VP Solutions પાછળ ના લોકો", ta: "VP Solutions-க்கு பின்னால் உள்ளவர்கள்", te: "VP Solutions వెనుక ఉన్న వ్యక్తులు" },
  "section.whyus.label":    { en: "Why VP Solutions", hi: "VP Solutions क्यों", mr: "VP Solutions का का?", gu: "VP Solutions કેમ", ta: "VP Solutions ஏன்", te: "VP Solutions ఎందుకు" },
  "section.whyus.title":    { en: "What Makes Us Different", hi: "हमें अलग क्या बनाता है", mr: "आम्हाला वेगळे काय बनवते", gu: "અમને અલગ શું બનાવે છે", ta: "நம்மை வித்தியாசமாக்குவது என்ன", te: "మనల్ని విభిన్నంగా చేసేది ఏమిటి" },
  "section.stats.label":    { en: "Our Impact",      hi: "हमारा प्रभाव",    mr: "आमचा प्रभाव",   gu: "અમારી અસર",   ta: "எங்கள் தாக்கம்", te: "మా ప్రభావం"     },
  "section.timeline.label": { en: "Our Journey",     hi: "हमारी यात्रा",    mr: "आमचा प्रवास",   gu: "અમારી સફર",   ta: "எங்கள் பயணம்",  te: "మా ప్రయాణం"    },
  "section.timeline.title": { en: "Two Decades of Growth", hi: "विकास के दो दशक", mr: "वाढीची दोन दशके", gu: "વૃદ્ધિના બે દાયકા", ta: "இரண்டு தசாப்தங்கள் வளர்ச்சி", te: "రెండు దశాబ్దాల వృద్ధి" },
  "section.certs.label":    { en: "Certifications",  hi: "प्रमाणपत्र",      mr: "प्रमाणपत्रे",   gu: "પ્રમાણપત્રો",  ta: "சான்றிதழ்கள்",  te: "సర్టిఫికేషన్లు" },
  "section.certs.title":    { en: "Compliant, Certified & Trusted", hi: "अनुपालित, प्रमाणित और विश्वसनीय", mr: "नियमपालक, प्रमाणित आणि विश्वासू", gu: "અનુપાલિત, પ્રમાણિત અને વિશ્વાસપાત્ર", ta: "இணக்கமான, சான்றளிக்கப்பட்ட மற்றும் நம்பகமான", te: "అనుసరణ, ధృవీకరించిన & నమ్మకమైన" },
  "section.testimonials.label": { en: "Testimonials", hi: "प्रतिक्रियाएं", mr: "प्रतिक्रिया", gu: "પ્રતિક્રિયાઓ", ta: "சான்றுரைகள்", te: "సాక్ష్యాలు" },
  "section.testimonials.title": { en: "What Our Clients Say", hi: "हमारे ग्राहक क्या कहते हैं", mr: "आमचे ग्राहक काय म्हणतात", gu: "અમારા ક્લાઈન્ટ શું કહે છે", ta: "எங்கள் வாடிக்கையாளர்கள் என்ன சொல்கிறார்கள்", te: "మా క్లయింట్లు ఏమి చెప్తారు" },

  // ── Contact form ───────────────────────────────────────────────────────────
  "contact.name":     { en: "Your Name *",          hi: "आपका नाम *",         mr: "तुमचे नाव *",      gu: "તમારું નામ *",    ta: "உங்கள் பெயர் *",   te: "మీ పేరు *"        },
  "contact.org":      { en: "Organisation",          hi: "संस्था / कंपनी",     mr: "संस्था / कंपनी",   gu: "સંસ્થા / કંપની",  ta: "நிறுவனம்",          te: "సంస్థ"             },
  "contact.mobile":   { en: "Mobile",                hi: "मोबाइल",             mr: "मोबाइल",           gu: "મોબાઇલ",          ta: "மொபைல்",            te: "మొబైల్"           },
  "contact.email":    { en: "Email",                 hi: "ईमेल",               mr: "ईमेल",             gu: "ઈ-મેઇલ",         ta: "மின்னஞ்சல்",        te: "ఇమెయిల్"          },
  "contact.service":  { en: "Service Required",      hi: "आवश्यक सेवा",        mr: "हवी असलेली सेवा",  gu: "જરૂરી સેવા",      ta: "தேவையான சேவை",      te: "అవసరమైన సేవ"      },
  "contact.message":  { en: "Message / Project Brief", hi: "संदेश / प्रोजेक्ट विवरण", mr: "संदेश / प्रकल्पाचे वर्णन", gu: "સંદેશ / પ્રોજેક્ટ વিગત", ta: "செய்தி / திட்ட விவரம்", te: "సందేశం / ప్రాజెక్ట్ వివరం" },
  "contact.submit":   { en: "Submit Inquiry",         hi: "पूछताछ भेजें",       mr: "चौकशी पाठवा",      gu: "પૂછપરછ મોકલો",   ta: "விசாரணை அனுப்பு",  te: "విచారణ పంపండి"    },
  "contact.submitting": { en: "Submitting...",        hi: "भेज रहे हैं...",     mr: "पाठवत आहे...",     gu: "મોકલી રહ્યા છે...", ta: "அனுப்புகிறோம்...", te: "పంపుతున్నాం..."   },
  "contact.success":  { en: "Inquiry submitted! We will contact you within 24 hours.", hi: "पूछताछ सफलतापूर्वक भेजी गई! हम 24 घंटे में संपर्क करेंगे।", mr: "चौकशी यशस्वीरित्या पाठवली! आम्ही 24 तासांत संपर्क करू.", gu: "પૂછપરછ સફળતાપૂર્વક મોકલી! અમે 24 કલાકમાં સંપર્ક કરીશું.", ta: "விசாரணை சமர்ப்பிக்கப்பட்டது! 24 மணி நேரத்தில் தொடர்பு கொள்வோம்.", te: "విచారణ సమర్పించబడింది! మేము 24 గంటల్లో సంప్రదిస్తాం." },

  // ── Footer ─────────────────────────────────────────────────────────────────
  "footer.tagline":   { en: "Reliable Workforce. Smart Infrastructure. Trusted Government Partner.", hi: "भरोसेमंद कार्यबल। स्मार्ट इन्फ्रास्ट्रक्चर। विश्वसनीय सरकारी भागीदार।", mr: "विश्वासू कामगार. स्मार्ट पायाभूत सुविधा. विश्वासू सरकारी भागीदार.", gu: "વિશ્વસનીય કાર્યબળ. સ્માર્ટ ઇન્ફ્રાસ્ટ્રક્ચર. વિશ્વાસપાત્ર સરકારી ભાગીદાર.", ta: "நம்பகமான பணியாளர்கள். திறமையான உள்கட்டமைப்பு. நம்பகமான அரசு கூட்டாளர்.", te: "నమ్మకమైన వర్క్‌ఫోర్స్. స్మార్ట్ మౌలిక సదుపాయాలు. నమ్మకమైన ప్రభుత్వ భాగస్వామి." },
  "footer.company":   { en: "Company",    hi: "कंपनी",       mr: "कंपनी",      gu: "કંપની",      ta: "நிறுவனம்",   te: "కంపెనీ"    },
  "footer.services":  { en: "Services",   hi: "सेवाएं",      mr: "सेवा",       gu: "સેવાઓ",      ta: "சேவைகள்",    te: "సేవలు"     },
  "footer.quicklinks":{ en: "Quick Links",hi: "त्वरित लिंक", mr: "त्वरित दुवे", gu: "ઝડપી લિંક",  ta: "விரைவு இணைப்புகள்", te: "త్వరిత లింకులు" },

  // ── Language switcher ──────────────────────────────────────────────────────
  "lang.select":      { en: "Language",   hi: "भाषा",        mr: "भाषा",       gu: "ભાષા",       ta: "மொழி",       te: "భాష"       },
};
