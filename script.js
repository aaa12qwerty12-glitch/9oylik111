/* =====================================================================
   REAL SURATLAR (rasmlar)
   ---------------------------------------------------------------------
   Har bir mahsulot uchun rasm manzilini shu yerga yozing.
   Ikki xil usul ishlaydi:
     1) O'z papkangizdagi fayl:   'images/p1.jpg'
     2) Internetdagi to'g'ridan-to'g'ri havola: 'https://.../rasm.jpg'
   Bo'sh qoldirilsa yoki rasm topilmasa — avtomatik chizma (SVG) ko'rinadi,
   ya'ni sayt hech qachon "sinmaydi".
   Maslahat: rasm o'lchami ~800x600, .jpg yoki .webp, 200 KB atrofida bo'lsin.
   ===================================================================== */
const PRODUCT_IMAGES = {
  p1:'',  p2:'',  p3:'',  p4:'',  p5:'',  p6:'',  p7:'',  p8:'',  p9:'',  p10:'',
  p11:'', p12:'', p13:'', p14:'', p15:'', p16:'', p17:'', p18:'', p19:'', p20:'',
  p21:'', p22:'', p23:'', p24:'',
  b1:'',  b2:'',  b3:'',  b4:'',  b5:'',  b6:''
};
/* Butun bo'lim uchun zaxira rasm (mahsulotniki yo'q bo'lsa ishlatiladi)
   Barcha rasmlar — Unsplash'dan bepul litsenziyali (Unsplash License) suratlar. */
const IMG = (id, w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w||800}&q=80`;
const CAT_IMAGES = {
  'Smartfonlar':        IMG('1592750475338-74b7b21085ab'),
  'Planshetlar':        IMG('1544244015-0df4b3ffc6b0'),
  'Simsiz quloqchin':   IMG('1590658268037-6bf12165a8df'),
  'Aksessuarlar':       IMG('1601784551446-20c9e07cdbdb'),
  'Quvvat banki':       IMG('1609692814858-f7cd2f0afa4f'),
  'Zaryadlovchi':       IMG('1583863788434-e58a36330cf0'),
  'Smart soat':         IMG('1523275335684-37898b6baf30'),
  'Xotira karta':       IMG('1587033411391-5d9e51cce126'),
  'Tayyor to\'plam':    IMG('1592750475338-74b7b21085ab')
};
function photoOf(id, cat){ return (PRODUCT_IMAGES[id] || CAT_IMAGES[cat] || '').trim(); }
function visualHTML(id, cat, symbol){
  const url = photoOf(id, cat);
  const img = url ? `<img class="prod-img" src="${url}" alt="" loading="lazy" onerror="this.closest('.pv').classList.add('img-fail');this.remove();">` : '';
  return `<div class="pv${url ? '' : ' img-fail'}">${img}<svg class="prod-photo"><use href="#${symbol}"/></svg></div>`;
}

/* ---------------- data ---------------- */
const CAT_ICON = {
  'Smartfonlar':'i-phone','Planshetlar':'i-tablet','Simsiz quloqchin':'i-headset','Aksessuarlar':'i-cover',
  'Quvvat banki':'i-battery','Zaryadlovchi':'i-plug','Smart soat':'i-watch','Xotira karta':'i-storage',
  'Tayyor to\'plam':'i-phone'
};
const CAT_PHOTO = {
  'Smartfonlar':'photo-phone','Planshetlar':'photo-monitor','Simsiz quloqchin':'photo-headset','Aksessuarlar':'photo-case',
  'Quvvat banki':'photo-psu','Zaryadlovchi':'photo-psu','Smart soat':'photo-cooler','Xotira karta':'photo-storage',
  'Tayyor to\'plam':'photo-phone'
};
const PRODUCTS = [
  {id:'p1', name:'iPhone 15 128GB', cat:'Smartfonlar', price:11900000},
  {id:'p2', name:'iPhone 15 Pro 256GB', cat:'Smartfonlar', price:17500000},
  {id:'p3', name:'iPhone 14 128GB', cat:'Smartfonlar', price:9800000},
  {id:'p4', name:'Samsung Galaxy S24 256GB', cat:'Smartfonlar', price:12400000},
  {id:'p5', name:'Samsung Galaxy S24 Ultra 512GB', cat:'Smartfonlar', price:18900000},
  {id:'p6', name:'Samsung Galaxy A55 128GB', cat:'Smartfonlar', price:5200000},
  {id:'p7', name:'Xiaomi Redmi Note 13 Pro', cat:'Smartfonlar', price:3600000},
  {id:'p8', name:'Xiaomi 14 256GB', cat:'Smartfonlar', price:8900000},
  {id:'p9', name:'Xiaomi Poco X6 Pro', cat:'Smartfonlar', price:4100000},
  {id:'p10', name:'iPad 10.9" 64GB', cat:'Planshetlar', price:6900000},
  {id:'p11', name:'iPad Air 11" 128GB', cat:'Planshetlar', price:10800000},
  {id:'p12', name:'Samsung Galaxy Tab A9', cat:'Planshetlar', price:2600000},
  {id:'p13', name:'AirPods 4', cat:'Simsiz quloqchin', price:1850000},
  {id:'p14', name:'AirPods Pro 2', cat:'Simsiz quloqchin', price:3400000},
  {id:'p15', name:'Samsung Galaxy Buds FE', cat:'Simsiz quloqchin', price:1250000},
  {id:'p16', name:'Xiaomi Redmi Buds 5', cat:'Simsiz quloqchin', price:420000},
  {id:'p17', name:'Silikon g\'ilof (universal)', cat:'Aksessuarlar', price:95000},
  {id:'p18', name:'Himoya oynasi 9D', cat:'Aksessuarlar', price:45000},
  {id:'p19', name:'Charmli g\'ilof', cat:'Aksessuarlar', price:160000},
  {id:'p20', name:'Anker 20000mAh quvvat banki', cat:'Quvvat banki', price:480000},
  {id:'p21', name:'Xiaomi 10000mAh quvvat banki', cat:'Quvvat banki', price:250000},
  {id:'p22', name:'20W tezkor zaryadlovchi', cat:'Zaryadlovchi', price:180000},
  {id:'p23', name:'Simsiz zaryadlovchi (MagSafe)', cat:'Zaryadlovchi', price:340000},
  {id:'p24', name:'Apple Watch SE', cat:'Smart soat', price:3900000},
];
const BUILDS = [
  {id:'b1', tag:'Byudjet variant', name:'Start Line', featured:false, price:3600000, img:'photo-phone',
    specs:[['Model','Xiaomi Redmi Note 13 Pro'],['Xotira','256 GB'],['Ekran','120Hz AMOLED'],['Kamera','200 MP']]},
  {id:'b2', tag:'Kundalik foydalanish', name:'Everyday Line', featured:false, price:5200000, img:'photo-phone',
    specs:[['Model','Samsung Galaxy A55'],['Xotira','128 GB'],['Batareya','5000 mAh'],['Kamera','50 MP']]},
  {id:'b3', tag:"Fleshka to'plami — iPhone", name:'iPhone Lite', featured:false, price:9800000, img:'photo-phone',
    specs:[['Model','iPhone 14'],['Xotira','128 GB'],['Ekran','6.1" Super Retina'],['G\'ilof','Sovg\'a sifatida']]},
  {id:'b4', tag:'Tavsiya etiladi — Flagman', name:'Pro Line', featured:true, price:17500000, img:'photo-phone',
    specs:[['Model','iPhone 15 Pro'],['Xotira','256 GB'],['Kamera','48 MP Pro'],['Aksessuar','20W quvvatlovchi + g\'ilof']]},
  {id:'b5', tag:'Kamera va foto uchun', name:'Camera Line', featured:false, price:18900000, img:'photo-phone',
    specs:[['Model','Samsung Galaxy S24 Ultra'],['Xotira','512 GB'],['Kamera','200 MP'],['S Pen','Mavjud']]},
  {id:'b6', tag:'To\'liq to\'plam — telefon + soat + quloqchin', name:'Ultimate Set', featured:false, price:23500000, img:'photo-phone',
    specs:[['Telefon','iPhone 15 Pro'],['Soat','Apple Watch SE'],['Quloqchin','AirPods Pro 2'],['Kafolat',"1 yil rasmiy"]]},
];

/* ---------------- state ---------------- */
function loadJSON(key, fallback){ try{ const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }catch(e){ return fallback; } }
function saveJSON(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){} }

let cart = loadJSON('baytex_cart', []);
let favorites = loadJSON('baytex_favorites', []);
let auth = loadJSON('baytex_auth', null);
let users = loadJSON('baytex_users', []);
let orders = loadJSON('baytex_orders', []);
let balance = loadJSON('baytex_balance', 0);
let txs = loadJSON('baytex_txs', []);

/* ---------------- i18n + sozlamalar ---------------- */
const I18N = {
  uz:{
    search_ph:"Mahsulot qidirish...", g_main:"ASOSIY", g_info:"MA'LUMOT", g_account:"HISOB",
    nav_home:"Bosh sahifa", nav_catalog:"Katalog", nav_builds:"To'plamlar", nav_cart:"Savat",
    nav_fav:"Sevimlilar",
    nav_contact:"Aloqa", nav_profile:"Profil", nav_settings:"Sozlamalar",
    hero_kicker:"Smartfon va aksessuarlar ulgurji va chakana savdosi",
    hero_h1:"Har bir tanlov ishonchli telefondan boshlanadi",
    hero_p:"iPhone'dan tortib aksessuarlargacha — biz Toshkentda original smartfonlarni tanlaymiz, tekshiramiz va tezkor yetkazib beramiz.",
    cta_catalog:"Katalogni ko'rish", cta_builds:"Tayyor to'plamlar",
    st_clients:"mamnun mijoz", st_orders:"yetkazilgan buyurtma", st_warranty:"telefonlarga kafolat", st_support:"texnik yordam javobi",
    sec_cats:"Bo'limlar", sec_why:"Nega PHONE EX",
    why1t:"Original mahsulotlar", why1p:"Rasmiy distribyutorlar orqali, kafolat kartasi bilan.",
    why2t:"Tez yetkazib berish", why2p:"Toshkentda 24 soat, viloyatlarga 2–3 kun.",
    why3t:"Sozlab beramiz", why3p:"SIM, dastur va profilingizni ishga tushirib topshiramiz.",
    why4t:"Kafolat xizmati", why4p:"3 yilgacha kafolat, o'z servis markazimiz.",
    cat_h1:"Katalog", cat_p:"Kerakli telefon yoki aksessuarni tanlab, savatga qo'shing.",
    bld_h1:"Tayyor to'plamlar", bld_p:"Ehtiyojingizga qarab tanlangan, telefon + aksessuar to'plamlari.",
    cart_h1:"Savat", con_h1:"Aloqa",
    con_p:"Savollaringiz bormi? Yozing — 24 soat ichida javob beramiz, yoki to'g'ridan-to'g'ri qo'ng'iroq qiling.",
    f_name:"Ism", f_name_ph:"Ismingiz", f_surname:"Familiya", f_surname_ph:"Familiyangiz", f_phone:"Telefon raqam", f_msg:"Xabar", f_msg_ph:"Savolingiz yoki so'rovingiz...",
    f_send:"Xabar yuborish", c_name:"Ism", c_phone:"Telefon", c_addr:"Manzil", c_addr_v:"Toshkent sh., Yashnobod tumani",
    c_hours:"Ish vaqti", c_hours_v:"Har kuni 9:00–19:00",
    foot_rights:"© 2026 PHONE EX. Barcha huquqlar himoyalangan.",
    ai_title:"PHONE EX AI yordamchi", ai_ph:"Savolingizni yozing...", ai_send:"Yuborish",
    set_h1:"Sozlamalar", set_p:"Ko'rinish, til va qulaylik sozlamalari. Tanlovlaringiz shu brauzerda saqlanadi.",
    set_appearance:"Ko'rinish", set_theme:"Mavzu (Dark mode)", set_theme_d:"Yorug', qorong'i yoki tizim sozlamasiga mos.",
    set_light:"Yorug'", set_dark:"Qorong'i", set_system:"Tizim",
    set_mono:"Oq-qora rejim", set_mono_d:"Saytdagi barcha ranglar oq-qora (monoxrom) ko'rinishga o'tadi.",
    set_contrast:"Yuqori kontrast", set_contrast_d:"Matn va chegaralarni yanada aniqroq qiladi.",
    set_motion:"Animatsiyalarni kamaytirish", set_motion_d:"Harakat va o'tishlarni o'chiradi.",
    set_langsec:"Til", set_lang:"Interfeys tili", set_lang_d:"Sayt matnlari tanlangan tilga o'tadi.",
    set_data:"Ma'lumotlar", set_reset:"Sozlamalarni tiklash", set_reset_d:"Mavzu, til va boshqa tanlovlar boshlang'ich holatga qaytadi.",
    set_reset_btn:"Tiklash", set_clear:"Savat va tarixni tozalash", set_clear_d:"Savatdagi mahsulotlar va buyurtmalar tarixi o'chiriladi.",
    set_clear_btn:"Tozalash",
    set_brand_d:"Smartfonlar va aksessuarlar do'koni", foot_tag:"Original smartfonlar va aksessuarlar — kafolat va tezkor yetkazib berish bilan.", set_about:"PHONE EX haqida", set_about_t:"Aloqa va qo'llab-quvvatlash", set_about_d:"Savol yoki taklifingiz bo'lsa, biz bilan bog'laning.", ai_sub:"AI yordamchi",
    currency:"so'm", filter_all:"Hammasi", found:"{n} ta mahsulot topildi", add:"Savatga", add_build:"Savatga qo'shish",
    cart_empty:"Savatingiz hozircha bo'sh.", go_catalog:"Katalogga o'tish",
    th_product:"Mahsulot", th_price:"Narx", th_qty:"Soni", th_total:"Jami", remove:"O'chirish",
    items:"Mahsulotlar ({n})", delivery:"Yetkazib berish", free:"Bepul", total:"Jami",
    checkout:"Buyurtmani rasmiylashtirish", added_toast:'"{name}" savatga qo\'shildi',
    order_toast:"Buyurtma qabul qilindi — {id} · {sum}", login_first:"Buyurtma berish uchun avval profilga kiring.",
    prof_h1:"Profil", prof_logout:"Chiqish", my_orders:"Buyurtmalarim", no_orders:"Hali buyurtma yo'q.",
    st_processing:"Qabul qilindi", st_shipping:"Yetkazilmoqda", st_delivered:"Yetkazildi", st_cancelled:"Bekor qilindi",
    tier_vip:"VIP mijoz", tier_basic:"Oddiy mijoz",
    login_h1:"Profilga kirish", login_p:"Buyurtma berish va tarixni ko'rish uchun ma'lumotlaringizni kiriting.",
    login_btn:"Kirish", proto_note:"Bu — prototip login: parol talab qilinmaydi, faqat shu brauzerda saqlanadi.",
    w_welcome:"Xush kelibsiz!", w_create:"Hisob yarating",
    w_sub_login:"Davom etish uchun PHONE EX hisobingizga kiring.",
    w_sub_reg:"Buyurtma berish va tarixni ko'rish uchun bir necha soniya kifoya.",
    w_remember:"Meni eslab qolish", w_login_btn:"Hisobga kirish", w_reg_btn:"Ro'yxatdan o'tish",
    w_no_acc:"Hisobingiz yo'qmi?", w_has_acc:"Hisobingiz bormi?", w_reg_link:"Ro'yxatdan o'tish", w_login_link:"Kirish",
    w_skip:"Ro'yxatdan o'tmasdan davom etish →", w_note:"Parol talab qilinmaydi — ma'lumot shu brauzerda saqlanadi.",
    w_hi:"Xush kelibsiz, {name}!", w_orders_n:"Sizda {n} ta buyurtma mavjud.", w_logged:"Hisobingizga muvaffaqiyatli kirdingiz.",
    w_to_catalog:"Katalogga o'tish", w_to_builds:"Konfiguratsiyalarni ko'rish",
    err_fill:"Iltimos, ism, familiya va telefon raqamni kiriting.", err_all:"Iltimos, barcha maydonlarni to'ldiring.",
    err_phone:"Iltimos, telefon raqamingizni kiriting.", err_not_found:"Bu raqam bilan hisob topilmadi. Avval ro'yxatdan o'ting.",
    fav_h1:"Sevimlilar", fav_p:"Yoqtirgan mahsulotlaringiz shu yerda saqlanadi — birortasini savatga o'tkazish uchun tugmani bosing.",
    fav_empty:"Sevimlilar ro'yxati hozircha bo'sh.", fav_added:"Sevimlilarga qo'shildi", fav_removed:"Sevimlilardan olib tashlandi",
    fav_add:"Sevimlilarga qo'shish", fav_remove:"Sevimlilardan olib tashlash", fav_move_btn:"Savatga o'tkazish",
    sent:"Xabaringiz yuborildi — tez orada bog'lanamiz!",
    guest:"Mehmon", guest_sub:"Kirish / ro'yxatdan o'tish", logout_done:"Hisobdan chiqdingiz.",
    reset_done:"Sozlamalar tiklandi.", cleared:"Savat va buyurtmalar tarixi tozalandi.",
    nav_balance:"Balans", bal_h1:"Balans", bal_p:"Hisobingizni to'ldiring va buyurtmalarni bir bosishda to'lang.",
    bal_current:"Joriy balans", bal_lastcard:"Karta", bal_topup:"Balansni to'ldirish", bal_sum:"Summa (so'm)",
    bal_btn:"To'ldirish", bal_history:"Amaliyotlar tarixi", bal_empty:"Hali amaliyot yo'q.",
    bal_demo_d:"Haqiqiy pul yechilmaydi — kiritilgan summa shunchaki balansga qo'shiladi va brauzeringizda saqlanadi.",
    bal_in:"Balans to'ldirildi", bal_out:"Buyurtma to'lovi", bal_ok:"Balansga {sum} qo'shildi",
    bal_err_sum:"To'ldirish summasini kiriting.", bal_min:"Eng kam summa: {sum}",
    pm_card:"Karta orqali", pm_card_d:"Uzcard · Humo · Visa · Mastercard", pm_balance:"Balansdan",
    pm_low:"Balansda mablag' yetarli emas. Yetishmayapti: {sum}", pm_paid_bal:"Balansdan to'landi",
    co_pay_bal:"Balansdan {sum} to'lash",
    co_h1:"Buyurtmani rasmiylashtirish", co_p:"Uch qadam: yetkazib berish, to'lov, tasdiqlash.",
    co_s1:"Yetkazib berish", co_s2:"To'lov", co_s3:"Tayyor",
    co_recv:"Qabul qiluvchi", co_deliv:"Yetkazib berish usuli",
    co_courier:"Kuryer", co_courier_d:"Toshkent bo'ylab 24 soat · bepul",
    co_pickup:"Do'kondan olib ketish", co_pickup_d:"Yashnobod · bugundan boshlab",
    co_addr:"Manzil", co_addr_ph:"Ko'cha, uy, xonadon", co_note:"Izoh (ixtiyoriy)", co_note_ph:"Qo'shimcha ma'lumot...",
    co_back_cart:"Savatga qaytish", co_next:"Davom etish", co_back:"Orqaga",
    co_demo_t:"Demo rejim", co_demo_d:"Bu sayt hali backendsiz ishlaydi: haqiqiy pul yechilmaydi va karta ma'lumotlari hech qayerga yuborilmaydi — hammasi faqat brauzeringizda qoladi.",
    co_cardnum:"Karta raqami", co_holder:"Karta egasi", co_exp:"Amal muddati",
    co_sms_t:"SMS kodni kiriting", co_sms_d:"Demo rejimda istalgan 6 xonali kod qabul qilinadi (masalan 111111).",
    co_pay:"{sum} to'lash", co_paying:"To'lov amalga oshirilmoqda", co_confirm:"Tasdiqlash",
    co_ok_t:"To'lov muvaffaqiyatli o'tdi", co_ok_d:"Buyurtmangiz qabul qilindi. Menejerimiz tez orada bog'lanadi.",
    co_my_orders:"Buyurtmalarim", co_summary:"Buyurtma tarkibi", co_amount:"To'lov summasi",
    co_amount_d:"Demo: summani o'zgartirsangiz ham to'lov o'tadi.",
    co_err_name:"Ism va telefon raqamni kiriting.", co_err_addr:"Yetkazib berish manzilini kiriting.",
    co_err_card:"Karta raqami noto'g'ri — 16 xonali raqam kiriting.", co_err_holder:"Karta egasining ismini kiriting.",
    co_err_exp:"Amal muddati noto'g'ri (MM/YY).", co_err_cvv:"CVV kodi noto'g'ri.",
    co_err_code:"6 xonali SMS kodni kiriting.", co_err_sum:"To'lov summasi noto'g'ri.",
    co_sms_sent:"Tasdiqlash kodi yuborildi (demo).", co_empty:"Savat bo'sh — avval mahsulot tanlang.",
    co_r_order:"Buyurtma", co_r_date:"Sana", co_r_card:"Karta", co_r_method:"Usul", co_r_paid:"To'landi",
    theme_short:"Mavzu", lang_name:"O'zbek"
  },
  ru:{
    search_ph:"Поиск товара...", g_main:"ОСНОВНОЕ", g_info:"ИНФОРМАЦИЯ", g_account:"АККАУНТ",
    nav_home:"Главная", nav_catalog:"Каталог", nav_builds:"Наборы", nav_cart:"Корзина",
    nav_fav:"Избранное",
    nav_contact:"Контакты", nav_profile:"Профиль", nav_settings:"Настройки",
    hero_kicker:"Оптовая и розничная продажа смартфонов и аксессуаров",
    hero_h1:"Каждый выбор начинается с надёжного телефона",
    hero_p:"От iPhone до аксессуаров — мы подбираем и быстро доставляем оригинальные смартфоны в Ташкенте.",
    cta_catalog:"Смотреть каталог", cta_builds:"Готовые наборы",
    st_clients:"довольных клиентов", st_orders:"доставленных заказов", st_warranty:"гарантия на телефоны", st_support:"ответ техподдержки",
    sec_cats:"Категории", sec_why:"Почему PHONE EX",
    why1t:"Оригинальная продукция", why1p:"Через официальных дистрибьюторов, с гарантийным талоном.",
    why2t:"Быстрая доставка", why2p:"По Ташкенту за 24 часа, по регионам 2–3 дня.",
    why3t:"Настройка телефона", why3p:"Устанавливаем SIM и настраиваем профиль перед выдачей.",
    why4t:"Гарантийный сервис", why4p:"Гарантия до 3 лет, собственный сервисный центр.",
    cat_h1:"Каталог", cat_p:"Выбирайте нужный телефон или аксессуар и добавляйте в корзину.",
    bld_h1:"Готовые наборы", bld_p:"Наборы «телефон + аксессуары», подобранные под ваши задачи.",
    cart_h1:"Корзина", con_h1:"Контакты",
    con_p:"Есть вопросы? Напишите — ответим в течение 24 часов, или позвоните напрямую.",
    f_name:"Имя", f_name_ph:"Ваше имя", f_surname:"Фамилия", f_surname_ph:"Ваша фамилия", f_phone:"Номер телефона", f_msg:"Сообщение", f_msg_ph:"Ваш вопрос или запрос...",
    f_send:"Отправить сообщение", c_name:"Имя", c_phone:"Телефон", c_addr:"Адрес", c_addr_v:"г. Ташкент, Яшнабадский район",
    c_hours:"Время работы", c_hours_v:"Ежедневно 9:00–19:00",
    foot_rights:"© 2026 PHONE EX. Все права защищены.",
    ai_title:"AI-помощник PHONE EX", ai_ph:"Напишите свой вопрос...", ai_send:"Отправить",
    set_h1:"Настройки", set_p:"Внешний вид, язык и удобство. Выбор сохраняется в этом браузере.",
    set_appearance:"Внешний вид", set_theme:"Тема (Dark mode)", set_theme_d:"Светлая, тёмная или как в системе.",
    set_light:"Светлая", set_dark:"Тёмная", set_system:"Система",
    set_mono:"Чёрно-белый режим", set_mono_d:"Все цвета сайта становятся монохромными.",
    set_contrast:"Высокая контрастность", set_contrast_d:"Делает текст и границы чётче.",
    set_motion:"Меньше анимации", set_motion_d:"Отключает движение и переходы.",
    set_langsec:"Язык", set_lang:"Язык интерфейса", set_lang_d:"Тексты сайта переключатся на выбранный язык.",
    set_data:"Данные", set_reset:"Сбросить настройки", set_reset_d:"Тема, язык и другие параметры вернутся к исходным.",
    set_reset_btn:"Сбросить", set_clear:"Очистить корзину и историю", set_clear_d:"Товары в корзине и история заказов будут удалены.",
    set_clear_btn:"Очистить",
    set_brand_d:"Магазин смартфонов и аксессуаров", foot_tag:"Оригинальные смартфоны и аксессуары — с гарантией и быстрой доставкой.", set_about:"О PHONE EX", set_about_t:"Связь и поддержка", set_about_d:"Есть вопрос или предложение? Свяжитесь с нами.", ai_sub:"AI-помощник",
    currency:"сум", filter_all:"Все", found:"Найдено товаров: {n}", add:"В корзину", add_build:"Добавить в корзину",
    cart_empty:"Ваша корзина пока пуста.", go_catalog:"Перейти в каталог",
    th_product:"Товар", th_price:"Цена", th_qty:"Кол-во", th_total:"Сумма", remove:"Удалить",
    items:"Товары ({n})", delivery:"Доставка", free:"Бесплатно", total:"Итого",
    checkout:"Оформить заказ", added_toast:'"{name}" добавлен в корзину',
    order_toast:"Заказ принят — {id} · {sum}", login_first:"Сначала войдите в профиль, чтобы оформить заказ.",
    prof_h1:"Профиль", prof_logout:"Выйти", my_orders:"Мои заказы", no_orders:"Заказов пока нет.",
    st_processing:"Принят", st_shipping:"В пути", st_delivered:"Доставлен", st_cancelled:"Отменён",
    tier_vip:"VIP клиент", tier_basic:"Обычный клиент",
    login_h1:"Вход в профиль", login_p:"Введите данные, чтобы оформлять заказы и видеть историю.",
    login_btn:"Войти", proto_note:"Это прототип входа: пароль не нужен, данные хранятся в браузере.",
    w_welcome:"Добро пожаловать!", w_create:"Создайте аккаунт",
    w_sub_login:"Войдите в аккаунт PHONE EX, чтобы продолжить.",
    w_sub_reg:"Несколько секунд — и вы сможете оформлять заказы.",
    w_remember:"Запомнить меня", w_login_btn:"Войти в аккаунт", w_reg_btn:"Зарегистрироваться",
    w_no_acc:"Нет аккаунта?", w_has_acc:"Уже есть аккаунт?", w_reg_link:"Регистрация", w_login_link:"Войти",
    w_skip:"Продолжить без регистрации →", w_note:"Пароль не требуется — данные хранятся в этом браузере.",
    w_hi:"Добро пожаловать, {name}!", w_orders_n:"У вас {n} заказ(ов).", w_logged:"Вы успешно вошли в аккаунт.",
    w_to_catalog:"Перейти в каталог", w_to_builds:"Посмотреть сборки",
    err_fill:"Пожалуйста, введите имя, фамилию и номер телефона.", err_all:"Пожалуйста, заполните все поля.",
    err_phone:"Пожалуйста, введите номер телефона.", err_not_found:"Аккаунт с этим номером не найден. Сначала зарегистрируйтесь.",
    fav_h1:"Избранное", fav_p:"Здесь хранятся понравившиеся товары — нажмите кнопку, чтобы перенести товар в корзину.",
    fav_empty:"Список избранного пока пуст.", fav_added:"Добавлено в избранное", fav_removed:"Удалено из избранного",
    fav_add:"В избранное", fav_remove:"Убрать из избранного", fav_move_btn:"В корзину",
    sent:"Сообщение отправлено — скоро свяжемся!",
    guest:"Гость", guest_sub:"Вход / регистрация", logout_done:"Вы вышли из аккаунта.",
    reset_done:"Настройки сброшены.", cleared:"Корзина и история заказов очищены.",
    nav_balance:"Баланс", bal_h1:"Баланс", bal_p:"Пополните счёт и оплачивайте заказы в один клик.",
    bal_current:"Текущий баланс", bal_lastcard:"Карта", bal_topup:"Пополнение баланса", bal_sum:"Сумма (сум)",
    bal_btn:"Пополнить", bal_history:"История операций", bal_empty:"Операций пока нет.",
    bal_demo_d:"Реальные деньги не списываются — указанная сумма просто добавляется к балансу и хранится в браузере.",
    bal_in:"Пополнение баланса", bal_out:"Оплата заказа", bal_ok:"Баланс пополнен на {sum}",
    bal_err_sum:"Введите сумму пополнения.", bal_min:"Минимальная сумма: {sum}",
    pm_card:"Картой", pm_card_d:"Uzcard · Humo · Visa · Mastercard", pm_balance:"С баланса",
    pm_low:"Недостаточно средств. Не хватает: {sum}", pm_paid_bal:"Оплачено с баланса",
    co_pay_bal:"Оплатить с баланса {sum}",
    co_h1:"Оформление заказа", co_p:"Три шага: доставка, оплата, подтверждение.",
    co_s1:"Доставка", co_s2:"Оплата", co_s3:"Готово",
    co_recv:"Получатель", co_deliv:"Способ доставки",
    co_courier:"Курьер", co_courier_d:"По Ташкенту за 24 часа · бесплатно",
    co_pickup:"Самовывоз", co_pickup_d:"Яшнабад · с сегодняшнего дня",
    co_addr:"Адрес", co_addr_ph:"Улица, дом, квартира", co_note:"Комментарий (необязательно)", co_note_ph:"Дополнительная информация...",
    co_back_cart:"Вернуться в корзину", co_next:"Продолжить", co_back:"Назад",
    co_demo_t:"Демо-режим", co_demo_d:"Сайт работает без бэкенда: реальные деньги не списываются, данные карты никуда не отправляются — всё остаётся в вашем браузере.",
    co_cardnum:"Номер карты", co_holder:"Держатель карты", co_exp:"Срок действия",
    co_sms_t:"Введите код из SMS", co_sms_d:"В демо-режиме подойдёт любой 6-значный код (например 111111).",
    co_pay:"Оплатить {sum}", co_paying:"Идёт оплата", co_confirm:"Подтвердить",
    co_ok_t:"Оплата прошла успешно", co_ok_d:"Заказ принят. Наш менеджер скоро свяжется с вами.",
    co_my_orders:"Мои заказы", co_summary:"Состав заказа", co_amount:"Сумма оплаты",
    co_amount_d:"Демо: оплата пройдёт с любой суммой.",
    co_err_name:"Введите имя и номер телефона.", co_err_addr:"Введите адрес доставки.",
    co_err_card:"Неверный номер карты — введите 16 цифр.", co_err_holder:"Укажите держателя карты.",
    co_err_exp:"Неверный срок действия (ММ/ГГ).", co_err_cvv:"Неверный CVV.",
    co_err_code:"Введите 6-значный код.", co_err_sum:"Неверная сумма оплаты.",
    co_sms_sent:"Код подтверждения отправлен (демо).", co_empty:"Корзина пуста — сначала выберите товар.",
    co_r_order:"Заказ", co_r_date:"Дата", co_r_card:"Карта", co_r_method:"Способ", co_r_paid:"Оплачено",
    theme_short:"Тема", lang_name:"Русский"
  },
  en:{
    search_ph:"Search products...", g_main:"MAIN", g_info:"INFO", g_account:"ACCOUNT",
    nav_home:"Dashboard", nav_catalog:"Catalog", nav_builds:"Sets", nav_cart:"Cart",
    nav_fav:"Favorites",
    nav_contact:"Contact", nav_profile:"Profile", nav_settings:"Settings",
    hero_kicker:"Wholesale and retail of smartphones and accessories",
    hero_h1:"Every choice starts with the right phone",
    hero_p:"From iPhones to accessories — we select and quickly deliver genuine smartphones across Tashkent.",
    cta_catalog:"Browse catalog", cta_builds:"Ready-made sets",
    st_clients:"happy customers", st_orders:"orders delivered", st_warranty:"phone warranty", st_support:"support response",
    sec_cats:"Categories", sec_why:"Why PHONE EX",
    why1t:"Genuine products", why1p:"Through official distributors, with a warranty card.",
    why2t:"Fast delivery", why2p:"24 hours in Tashkent, 2–3 days to the regions.",
    why3t:"Ready to use", why3p:"We set up your SIM and profile before handover.",
    why4t:"Warranty service", why4p:"Up to 3 years warranty, our own service center.",
    cat_h1:"Catalog", cat_p:"Pick the phone or accessory you need and add it to your cart.",
    bld_h1:"Ready-made sets", bld_p:"Phone + accessory sets picked for your needs.",
    cart_h1:"Cart", con_h1:"Contact",
    con_p:"Questions? Write to us — we reply within 24 hours, or just call us directly.",
    f_name:"Name", f_name_ph:"Your name", f_surname:"Surname", f_surname_ph:"Your surname", f_phone:"Phone number", f_msg:"Message", f_msg_ph:"Your question or request...",
    f_send:"Send message", c_name:"Name", c_phone:"Phone", c_addr:"Address", c_addr_v:"Tashkent, Yashnabad district",
    c_hours:"Working hours", c_hours_v:"Daily 9:00–19:00",
    foot_rights:"© 2026 PHONE EX. All rights reserved.",
    ai_title:"PHONE EX AI assistant", ai_ph:"Type your question...", ai_send:"Send",
    set_h1:"Settings", set_p:"Appearance, language and comfort options. Your choices are saved in this browser.",
    set_appearance:"Appearance", set_theme:"Theme (Dark mode)", set_theme_d:"Light, dark, or follow your system.",
    set_light:"Light", set_dark:"Dark", set_system:"System",
    set_mono:"Black & white mode", set_mono_d:"Turns every color on the site monochrome.",
    set_contrast:"High contrast", set_contrast_d:"Makes text and borders sharper.",
    set_motion:"Reduce motion", set_motion_d:"Disables animations and transitions.",
    set_langsec:"Language", set_lang:"Interface language", set_lang_d:"Site text switches to the chosen language.",
    set_data:"Data", set_reset:"Reset settings", set_reset_d:"Theme, language and other choices return to defaults.",
    set_reset_btn:"Reset", set_clear:"Clear cart and history", set_clear_d:"Cart items and order history will be deleted.",
    set_clear_btn:"Clear",
    set_brand_d:"Smartphones & accessories store", foot_tag:"Original smartphones and accessories — with warranty and fast delivery.", set_about:"About PHONE EX", set_about_t:"Contact & support", set_about_d:"Have a question or suggestion? Get in touch.", ai_sub:"AI assistant",
    currency:"UZS", filter_all:"All", found:"{n} products found", add:"Add", add_build:"Add to cart",
    cart_empty:"Your cart is empty for now.", go_catalog:"Go to catalog",
    th_product:"Product", th_price:"Price", th_qty:"Qty", th_total:"Total", remove:"Remove",
    items:"Items ({n})", delivery:"Delivery", free:"Free", total:"Total",
    checkout:"Place order", added_toast:'"{name}" added to cart',
    order_toast:"Order placed — {id} · {sum}", login_first:"Sign in to your profile first to place an order.",
    prof_h1:"Profile", prof_logout:"Sign out", my_orders:"My orders", no_orders:"No orders yet.",
    st_processing:"Processing", st_shipping:"Shipping", st_delivered:"Delivered", st_cancelled:"Cancelled",
    tier_vip:"VIP customer", tier_basic:"Regular customer",
    login_h1:"Sign in", login_p:"Enter your details to place orders and see your history.",
    login_btn:"Sign in", proto_note:"This is a prototype login: no password needed, stored in this browser only.",
    w_welcome:"Welcome!", w_create:"Create an account",
    w_sub_login:"Sign in to your PHONE EX account to continue.",
    w_sub_reg:"A few seconds is all it takes to start ordering.",
    w_remember:"Remember me", w_login_btn:"Sign in", w_reg_btn:"Sign up",
    w_no_acc:"No account yet?", w_has_acc:"Already have an account?", w_reg_link:"Sign up", w_login_link:"Sign in",
    w_skip:"Continue without signing up →", w_note:"No password required — data stays in this browser.",
    w_hi:"Welcome, {name}!", w_orders_n:"You have {n} order(s).", w_logged:"You are signed in.",
    w_to_catalog:"Go to catalog", w_to_builds:"See builds",
    err_fill:"Please enter your name, surname and phone number.", err_all:"Please fill in all fields.",
    err_phone:"Please enter your phone number.", err_not_found:"No account found with this number. Please sign up first.",
    fav_h1:"Favorites", fav_p:"Products you've liked are saved here — tap the button to move one to your cart.",
    fav_empty:"Your favorites list is empty.", fav_added:"Added to favorites", fav_removed:"Removed from favorites",
    fav_add:"Add to favorites", fav_remove:"Remove from favorites", fav_move_btn:"Move to cart",
    sent:"Your message was sent — we'll be in touch soon!",
    guest:"Guest", guest_sub:"Sign in / sign up", logout_done:"You have signed out.",
    reset_done:"Settings restored.", cleared:"Cart and order history cleared.",
    nav_balance:"Balance", bal_h1:"Balance", bal_p:"Top up your account and pay for orders in one click.",
    bal_current:"Current balance", bal_lastcard:"Card", bal_topup:"Top up balance", bal_sum:"Amount (UZS)",
    bal_btn:"Top up", bal_history:"Transaction history", bal_empty:"No transactions yet.",
    bal_demo_d:"No real money is charged — the amount you enter is simply added to the balance and stored in your browser.",
    bal_in:"Balance top-up", bal_out:"Order payment", bal_ok:"{sum} added to your balance",
    bal_err_sum:"Enter the top-up amount.", bal_min:"Minimum amount: {sum}",
    pm_card:"By card", pm_card_d:"Uzcard · Humo · Visa · Mastercard", pm_balance:"From balance",
    pm_low:"Not enough funds. Missing: {sum}", pm_paid_bal:"Paid from balance",
    co_pay_bal:"Pay {sum} from balance",
    co_h1:"Checkout", co_p:"Three steps: delivery, payment, confirmation.",
    co_s1:"Delivery", co_s2:"Payment", co_s3:"Done",
    co_recv:"Recipient", co_deliv:"Delivery method",
    co_courier:"Courier", co_courier_d:"24 hours across Tashkent · free",
    co_pickup:"Store pickup", co_pickup_d:"Yashnabad · from today",
    co_addr:"Address", co_addr_ph:"Street, building, apartment", co_note:"Note (optional)", co_note_ph:"Anything else we should know...",
    co_back_cart:"Back to cart", co_next:"Continue", co_back:"Back",
    co_demo_t:"Demo mode", co_demo_d:"This site runs without a backend: no real money is charged and card details are never sent anywhere — everything stays in your browser.",
    co_cardnum:"Card number", co_holder:"Cardholder", co_exp:"Expiry",
    co_sms_t:"Enter the SMS code", co_sms_d:"In demo mode any 6-digit code works (e.g. 111111).",
    co_pay:"Pay {sum}", co_paying:"Processing payment", co_confirm:"Confirm",
    co_ok_t:"Payment successful", co_ok_d:"Your order is accepted. Our manager will contact you shortly.",
    co_my_orders:"My orders", co_summary:"Order summary", co_amount:"Payment amount",
    co_amount_d:"Demo: the payment goes through with any amount.",
    co_err_name:"Enter your name and phone number.", co_err_addr:"Enter the delivery address.",
    co_err_card:"Invalid card number — enter 16 digits.", co_err_holder:"Enter the cardholder name.",
    co_err_exp:"Invalid expiry date (MM/YY).", co_err_cvv:"Invalid CVV.",
    co_err_code:"Enter the 6-digit code.", co_err_sum:"Invalid payment amount.",
    co_sms_sent:"Confirmation code sent (demo).", co_empty:"Your cart is empty — pick a product first.",
    co_r_order:"Order", co_r_date:"Date", co_r_card:"Card", co_r_method:"Method", co_r_paid:"Paid",
    theme_short:"Theme", lang_name:"English"
  }
};
const LOCALE = {uz:'uz-UZ', ru:'ru-RU', en:'en-US'};
const DEFAULT_PREFS = {theme:'system', lang:'uz', mono:false, contrast:false, motion:false};
let prefs = Object.assign({}, DEFAULT_PREFS, loadJSON('baytex_prefs', {}));

function t(key, vars){
  let s = (I18N[prefs.lang] && I18N[prefs.lang][key]) || I18N.uz[key] || key;
  if(vars) for(const k in vars) s = s.split('{'+k+'}').join(vars[k]);
  return s;
}
function savePrefs(){ saveJSON('baytex_prefs', prefs); }

function applyTheme(){
  const root = document.documentElement;
  if(prefs.theme === 'system') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', prefs.theme);
  root.classList.toggle('mono', !!prefs.mono);
  root.classList.toggle('hicontrast', !!prefs.contrast);
  root.classList.toggle('no-motion', !!prefs.motion);
  const dark = effectiveDark();
  document.querySelectorAll('#quickTheme use, #topTheme use').forEach(q => q.setAttribute('href', dark ? '#i-sun' : '#i-moon'));
}
function effectiveDark(){
  if(prefs.theme === 'dark') return true;
  if(prefs.theme === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
function setTheme(mode){ prefs.theme = mode; savePrefs(); applyTheme(); syncSettingsUI(); }
function toggleTheme(){ setTheme(effectiveDark() ? 'light' : 'dark'); }

function applyI18n(){
  document.documentElement.lang = prefs.lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  const ql = document.querySelector('#quickLang .qlang');
  if(ql) ql.textContent = prefs.lang.toUpperCase();
}
function setLang(l){
  prefs.lang = l; savePrefs();
  applyI18n();
  renderFilters(); renderProducts(); renderHomeCats(); renderBuilds();
  renderSidebarUser(); syncSettingsUI(); updateBalanceBadge();
  if(document.getElementById('balValue')) renderBalance();
  const cur = document.querySelector('.page.active');
  const p = cur ? cur.dataset.page : null;
  if(p === 'savat') renderCart();
  if(p === 'sevimlilar') renderFavorites();
  if(p === 'profil') renderProfile();
  if(p === 'welcome') renderWelcome();
}
function cycleLang(){
  const order = ['uz','ru','en'];
  setLang(order[(order.indexOf(prefs.lang) + 1) % order.length]);
}

function syncSettingsUI(){
  document.querySelectorAll('#themeSeg .seg-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.themeOpt === prefs.theme));
  document.querySelectorAll('#langSeg .seg-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.langOpt === prefs.lang));
  [['monoSwitch','mono'],['contrastSwitch','contrast'],['motionSwitch','motion']].forEach(([id,key]) => {
    const el = document.getElementById(id);
    if(el){ el.classList.toggle('on', !!prefs[key]); el.setAttribute('aria-checked', !!prefs[key]); }
  });
}
function bindSettings(){
  document.querySelectorAll('#themeSeg .seg-btn').forEach(b =>
    b.addEventListener('click', () => setTheme(b.dataset.themeOpt)));
  document.querySelectorAll('#langSeg .seg-btn').forEach(b =>
    b.addEventListener('click', () => setLang(b.dataset.langOpt)));
  [['monoSwitch','mono'],['contrastSwitch','contrast'],['motionSwitch','motion']].forEach(([id,key]) => {
    const el = document.getElementById(id);
    if(el) el.addEventListener('click', () => { prefs[key] = !prefs[key]; savePrefs(); applyTheme(); syncSettingsUI(); });
  });
  const qt = document.getElementById('quickTheme');
  if(qt) qt.addEventListener('click', toggleTheme);
  const tt = document.getElementById('topTheme');
  if(tt) tt.addEventListener('click', toggleTheme);
  const qlb = document.getElementById('quickLang');
  if(qlb) qlb.addEventListener('click', cycleLang);
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { if(prefs.theme === 'system') applyTheme(); });
}
function resetSettings(){
  prefs = Object.assign({}, DEFAULT_PREFS);
  savePrefs(); applyTheme(); setLang(prefs.lang);
  toast(t('reset_done'));
}
function clearData(){
  cart = []; orders = [];
  saveJSON('baytex_cart', cart); saveJSON('baytex_orders', orders);
  updateCartBadge();
  toast(t('cleared'));
}

/* ---------------- sidebar ---------------- */
function renderSidebarUser(){
  const el = document.getElementById('sbUser');
  if(!el) return;
  if(auth){
    const initial = (auth.name || '?').trim().charAt(0).toUpperCase();
    el.innerHTML = `
      <div class="sb-ava">${initial}</div>
      <div class="sb-user-info" onclick="go('profil')"><b>${auth.name}${auth.surname ? ' ' + auth.surname : ''}</b><span>${auth.phone}</span></div>
      <button class="sb-icon-btn" onclick="logout()" title="${t('prof_logout')}"><svg class="ic"><use href="#i-logout"/></svg></button>`;
  }else{
    el.innerHTML = `
      <div class="sb-ava"><svg class="ic" style="width:17px;height:17px;"><use href="#i-user"/></svg></div>
      <div class="sb-user-info" onclick="go('profil')"><b>${t('guest')}</b><span>${t('guest_sub')}</span></div>`;
  }
}
function toggleSidebar(open){
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sbOverlay');
  const isOpen = open === undefined ? !sb.classList.contains('open') : open;
  sb.classList.toggle('open', isOpen);
  ov.classList.toggle('show', isOpen);
}
function bindSidebar(){
  document.getElementById('menuBtn').addEventListener('click', () => toggleSidebar());
  document.getElementById('sbOverlay').addEventListener('click', () => toggleSidebar(false));
  document.addEventListener('keydown', e => { if(e.key === 'Escape') toggleSidebar(false); });
}


function fmt(n){ return n.toLocaleString(LOCALE[prefs.lang] || 'uz-UZ') + ' ' + t('currency'); }

/* ---------------- reveal / counters ---------------- */
function playReveal(container){
  if(!container) return;
  const els = container.querySelectorAll('.reveal');
  els.forEach(el => el.classList.remove('show'));
  void container.offsetWidth;
  els.forEach(el => el.classList.add('show'));
}
let statsAnimated = false;
function animateStats(){
  if(statsAnimated) return;
  statsAnimated = true;
  document.querySelectorAll('#page-home .stat b[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const dur = 900;
    const start = performance.now();
    function frame(now){
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      el.textContent = val.toLocaleString(LOCALE[prefs.lang] || 'uz-UZ') + suffix;
      if(p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}

/* ---------------- toasts ---------------- */
function toast(msg, type){
  const host = document.getElementById('toastHost');
  const t = document.createElement('div');
  t.className = 'toast' + (type === 'error' ? ' error' : '');
  t.textContent = msg;
  host.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 350);
  }, 3200);
}

/* ---------------- router ---------------- */
function go(page){
  document.querySelectorAll('.page').forEach(p => {
    const match = p.dataset.page === page;
    p.classList.toggle('active', match);
    if(!match) p.classList.remove('show');
  });
  document.querySelectorAll('.navlink').forEach(b => b.classList.toggle('active', b.dataset.page === page));
  document.body.classList.toggle('welcome-active', page === 'welcome');
  toggleSidebar(false);
  window.scrollTo({top:0, behavior:'instant'});
  if(page === 'savat') renderCart();
  if(page === 'sevimlilar') renderFavorites();
  if(page === 'profil') renderProfile();
  if(page === 'welcome') renderWelcome();
  if(page === 'sozlamalar') syncSettingsUI();
  if(page === 'tolov') openCheckout();
  if(page === 'balans') renderBalance();
  location.hash = page;
  const activeEl = document.getElementById('page-' + page);
  requestAnimationFrame(() => requestAnimationFrame(() => {
    activeEl.classList.add('show');
    playReveal(activeEl);
    if(page === 'home') animateStats();
  }));
}
window.addEventListener('hashchange', () => {
  const p = location.hash.replace('#','') || 'welcome';
  if(['welcome','home','katalog','builds','savat','sevimlilar','profil','aloqa','sozlamalar','tolov','balans'].includes(p)) go(p);
});


/* ---------------- search ---------------- */
let searchTerm = '';
function onSearch(v){ searchTerm = v.trim().toLowerCase(); renderProducts(); }

/* ---------------- cart ---------------- */
function cartCount(){ return cart.reduce((s,i)=>s+i.qty,0); }
function updateCartBadge(){
  const n = cartCount();
  ['cartCount','cartCountM','cartCountBB','cartCountTop'].forEach(id => { const el = document.getElementById(id); if(el) el.textContent = n; });
}

function addToCart(id, name, cat, price){
  const existing = cart.find(i => i.id === id);
  if(existing) existing.qty += 1;
  else cart.push({id, name, cat, price, qty:1});
  saveJSON('baytex_cart', cart);
  updateCartBadge();
  const badge = document.getElementById('cartCount');
  badge.classList.remove('pop'); void badge.offsetWidth; badge.classList.add('pop');
  toast(t('added_toast', {name}));
}
function changeQty(id, delta){
  const item = cart.find(i => i.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveJSON('baytex_cart', cart);
  updateCartBadge();
  renderCart();
}
function removeFromCart(id){
  cart = cart.filter(i => i.id !== id);
  saveJSON('baytex_cart', cart);
  updateCartBadge();
  renderCart();
}

/* ---------------- sevimlilar (favorites / like) ---------------- */
function isFavorite(id){ return favorites.includes(id); }
function updateFavBadge(){
  ['favCount','favCountTop'].forEach(id => { const el = document.getElementById(id); if(el) el.textContent = favorites.length; });
}
function catalogItemInfo(id){
  const p = PRODUCTS.find(x => x.id === id);
  if(p) return {id: p.id, name: p.name, cat: p.cat, price: p.price};
  const b = BUILDS.find(x => x.id === id);
  if(b) return {id: b.id, name: b.name, cat: "Tayyor to'plam", price: b.price};
  return null;
}
function toggleFavorite(id, btn){
  const i = favorites.indexOf(id);
  const nowFav = i < 0;
  if(nowFav) favorites.unshift(id); else favorites.splice(i, 1);
  saveJSON('baytex_favorites', favorites);
  updateFavBadge();
  if(btn){
    btn.classList.toggle('active', nowFav);
    btn.title = nowFav ? t('fav_remove') : t('fav_add');
    btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop');
  }
  toast(nowFav ? t('fav_added') : t('fav_removed'));
  if(document.getElementById('page-sevimlilar').classList.contains('active')) renderFavorites();
}
function moveFavToCart(id, name, cat, price){
  addToCart(id, name, cat, price);
  const i = favorites.indexOf(id);
  if(i >= 0){ favorites.splice(i, 1); saveJSON('baytex_favorites', favorites); updateFavBadge(); }
  go('savat');
}
function renderFavorites(){
  const el = document.getElementById('favContent');
  if(!el) return;
  const items = favorites.map(catalogItemInfo).filter(Boolean);
  if(items.length === 0){
    el.innerHTML = `<div class="empty-state"><div class="glyph">🤍</div><p>${t('fav_empty')}</p>
      <button class="btn btn-primary" onclick="go('katalog')" style="margin-top:12px;">${t('go_catalog')}</button></div>`;
    return;
  }
  el.innerHTML = `<div class="prod-grid">${items.map((it,i) => `
    <div class="prod-card reveal" data-id="${it.id}" style="animation-delay:${Math.min(i*0.035,0.4)}s;">
      <button class="heart-btn active" onclick="toggleFavorite('${it.id}', this)" title="${t('fav_remove')}"><svg class="ic"><use href="#i-heart"/></svg></button>
      <div class="prod-visual">${visualHTML(it.id, it.cat, CAT_PHOTO[it.cat] || 'photo-phone')}</div>
      <div class="prod-cat-tag">${it.cat}</div>
      <div class="prod-name">${it.name}</div>
      <div class="prod-foot">
        <div class="prod-price mono">${fmt(it.price)}</div>
        <button class="btn btn-primary add-btn" onclick="moveFavToCart('${it.id}','${it.name}','${it.cat}',${it.price})">${t('fav_move_btn')}</button>
      </div>
    </div>`).join('')}</div>`;
  playReveal(el);
}

function renderCart(){
  const el = document.getElementById('cartContent');
  if(cart.length === 0){
    el.innerHTML = `<div class="empty-state"><div class="glyph">🛒</div><p>${t('cart_empty')}</p>
      <button class="btn btn-primary" onclick="go('katalog')" style="margin-top:12px;">${t('go_catalog')}</button></div>`;
    return;
  }
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  el.innerHTML = `
    <table class="cart-table">
      <thead><tr><th>${t('th_product')}</th><th>${t('th_price')}</th><th>${t('th_qty')}</th><th>${t('th_total')}</th><th></th></tr></thead>
      <tbody>
        ${cart.map(i => `
          <tr>
            <td><div class="cart-item-name">${i.name}</div><div class="cart-item-cat">${i.cat}</div></td>
            <td class="mono">${fmt(i.price)}</td>
            <td><div class="stepper">
              <button onclick="changeQty('${i.id}',-1)">−</button>
              <span>${i.qty}</span>
              <button onclick="changeQty('${i.id}',1)">+</button>
            </div></td>
            <td class="mono">${fmt(i.price*i.qty)}</td>
            <td><button class="remove-link" onclick="removeFromCart('${i.id}')">${t('remove')}</button></td>
          </tr>`).join('')}
      </tbody>
    </table>
    <div class="cart-summary">
      <div class="row"><span>${t('items', {n: cartCount()})}</span><span class="mono">${fmt(total)}</span></div>
      <div class="row"><span>${t('delivery')}</span><span>${t('free')}</span></div>
      <div class="row total"><span>${t('total')}</span><span class="mono">${fmt(total)}</span></div>
      <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:16px;" onclick="go('tolov')">${t('checkout')}</button>
    </div>`;
}

function checkout(){
  if(cart.length === 0) return;
  if(!auth){
    toast(t('login_first'), 'error');
    go('profil');
    return;
  }
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const order = {
    id: 'BX-' + Math.random().toString(36).slice(2,8).toUpperCase(),
    items: cart.map(i => ({name:i.name, qty:i.qty, price:i.price})),
    total,
    date: new Date().toLocaleString(LOCALE[prefs.lang] || 'uz-UZ'),
    buyer: auth.phone
  };
  orders.unshift(order);
  saveJSON('baytex_orders', orders);
  cart = [];
  saveJSON('baytex_cart', cart);
  updateCartBadge();
  toast(t('order_toast', {id: order.id, sum: fmt(total)}));
  go('profil');
}

/* ---------------- catalog render ---------------- */
let activeFilter = 'Hammasi';
function renderFilters(){
  const cats = ['Hammasi', ...new Set(PRODUCTS.map(p=>p.cat))];
  document.getElementById('filters').innerHTML = cats.map(c =>
    `<button class="chip ${c===activeFilter?'active':''}" onclick="setFilter('${c}')">${c==='Hammasi'?t('filter_all'):c}</button>`).join('');
}
function setFilter(c){ activeFilter = c; renderFilters(); renderProducts(); }
function renderProducts(){
  let list = activeFilter === 'Hammasi' ? PRODUCTS : PRODUCTS.filter(p=>p.cat===activeFilter);
  if(searchTerm) list = list.filter(p => p.name.toLowerCase().includes(searchTerm) || p.cat.toLowerCase().includes(searchTerm));
  document.getElementById('resultCount').textContent = t('found', {n: list.length});
  document.getElementById('prodList').innerHTML = list.map((p,i) => `
    <div class="prod-card reveal" data-id="${p.id}" style="animation-delay:${Math.min(i*0.035,0.4)}s;">
      <button class="heart-btn ${isFavorite(p.id) ? 'active' : ''}" onclick="toggleFavorite('${p.id}', this)" title="${isFavorite(p.id) ? t('fav_remove') : t('fav_add')}"><svg class="ic"><use href="#i-heart"/></svg></button>
      <div class="prod-visual">${visualHTML(p.id, p.cat, CAT_PHOTO[p.cat] || 'photo-phone')}</div>
      <div class="prod-cat-tag">${p.cat}</div>
      <div class="prod-name">${p.name}</div>
      <div class="prod-foot">
        <div class="prod-price mono">${fmt(p.price)}</div>
        <button class="btn btn-ghost add-btn" onclick="addToCart('${p.id}','${p.name}','${p.cat}',${p.price})">${t('add')}</button>
      </div>
    </div>`).join('');
  playReveal(document.getElementById('prodList'));
}

function renderHomeCats(){
  const cats = [...new Set(PRODUCTS.map(p=>p.cat))];
  document.getElementById('homeCats').innerHTML = cats.map((c,i) => `
    <button class="home-cat reveal" style="animation-delay:${i*0.04}s;" onclick="setFilter('${c}');go('katalog');">
      <svg class="ic"><use href="#${CAT_ICON[c] || 'i-cpu'}"/></svg><span>${c}</span>
    </button>`).join('');
}

function renderBuilds(){
  document.getElementById('buildList').innerHTML = BUILDS.map((b,i) => `
    <div class="build reveal ${b.featured?'featured':''}" data-id="${b.id}" style="animation-delay:${i*0.06}s;">
      <button class="heart-btn ${isFavorite(b.id) ? 'active' : ''}" onclick="toggleFavorite('${b.id}', this)" title="${isFavorite(b.id) ? t('fav_remove') : t('fav_add')}"><svg class="ic"><use href="#i-heart"/></svg></button>
      <div class="build-visual">${visualHTML(b.id, "Tayyor to'plam", b.img || 'photo-phone')}</div>
      <div class="build-tag">${b.tag}</div>
      <h3>${b.name}</h3>
      <ul class="spec-list">${b.specs.map(([k,v])=>`<li>${k} <b>${v}</b></li>`).join('')}</ul>
      <div class="build-price">${fmt(b.price)}</div>
      <button class="btn ${b.featured?'btn-primary':'btn-ghost'}" onclick="addToCart('${b.id}','${b.name}','Tayyor to\'plam',${b.price})">${t('add_build')}</button>
    </div>`).join('');
  playReveal(document.getElementById('buildList'));
}

/* ---------------- profile / login ---------------- */
let profileAuthMode = 'login';
function setProfileAuthMode(m){
  profileAuthMode = m;
  renderProfile();
}
function renderProfile(){
  const el = document.getElementById('profilContent');
  renderSidebarUser();
  if(!auth){
    const isLogin = profileAuthMode === 'login';
    el.innerHTML = `
      <div class="auth-shell">
        <div class="section-head"><h1>${isLogin ? t('login_h1') : t('w_create')}</h1><p>${isLogin ? t('login_p') : t('w_sub_reg')}</p></div>
        ${isLogin ? '' : `<div class="co-2col">
          <div class="field"><label for="authName">${t('f_name')}</label><input id="authName" placeholder="${t('f_name_ph')}"></div>
          <div class="field"><label for="authSurname">${t('f_surname')}</label><input id="authSurname" placeholder="${t('f_surname_ph')}"></div>
        </div>`}
        <div class="field"><label for="authPhone">${t('f_phone')}</label><input id="authPhone" placeholder="+998 90 000 00 00"></div>
        <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="${isLogin ? 'loginProfile()' : 'registerProfile()'}">${isLogin ? t('login_btn') : t('w_reg_btn')}</button>
        <p class="welcome-switch" style="margin-top:16px;">${isLogin ? t('w_no_acc') : t('w_has_acc')}<button onclick="setProfileAuthMode('${isLogin ? 'register' : 'login'}')">${isLogin ? t('w_reg_link') : t('w_login_link')}</button></p>
        <p style="font-size:12.5px;color:var(--fg-muted);margin-top:12px;">${t('proto_note')}</p>
      </div>`;
    return;
  }
  const myOrders = orders.filter(o => o.buyer === auth.phone);
  const spent = myOrders.reduce((s,o)=>s+o.total,0);
  const isVip = myOrders.length >= 3 || spent >= 5000000;
  el.innerHTML = `
    <div class="section-head"><h1>${t('prof_h1')}</h1></div>
    <div class="profile-card">
      <div class="profile-head">
        <div class="profile-avatar">${(auth.name || '?').trim().charAt(0).toUpperCase()}</div>
        <div>
          <b>${auth.name} ${auth.surname || ''} <span class="tier-badge ${isVip ? 'tier-vip' : 'tier-basic'}">${isVip ? t('tier_vip') : t('tier_basic')}</span></b>
          <span>${auth.phone}</span>
        </div>
      </div>
      <div class="profile-row"><span>${t('f_name')}</span><span>${auth.name}</span></div>
      <div class="profile-row"><span>${t('f_surname')}</span><span>${auth.surname || ''}</span></div>
      <div class="profile-row"><span>${t('f_phone')}</span><span>${auth.phone}</span></div>
      <button class="btn btn-ghost" style="margin-top:16px;" onclick="logout()">${t('prof_logout')}</button>
    </div>
    <h2 style="font-size:20px;margin-bottom:16px;">${t('my_orders')}</h2>
    ${myOrders.length === 0 ? `<p style="color:var(--fg-muted);">${t('no_orders')}</p>` :
      myOrders.map(o => `
        <div class="order-card">
          <div class="order-head"><b>${o.id}</b><span class="order-status status-${o.status||'processing'}">${t('st_' + (o.status||'processing'))}</span></div>
          <div class="order-items">${o.items.map(i=>`${i.name} × ${i.qty}`).join(', ')}</div>
          <div style="margin-top:8px;font-family:'Space Grotesk',sans-serif;">${fmt(o.total)}</div>
          <div style="color:var(--fg-muted);font-size:12.5px;margin-top:4px;">${o.date}</div>
        </div>`).join('')}
  `;
}
/* ---------------- shared auth helpers (login = phone only, register = full form) ---------------- */
function findUserByPhone(phone){
  return users.find(u => u.phone === phone);
}
function saveUser(user){
  const i = users.findIndex(u => u.phone === user.phone);
  if(i >= 0) users[i] = user; else users.unshift(user);
  saveJSON('baytex_users', users);
}
function doLogin(phone){
  const found = findUserByPhone(phone);
  if(!found) return false;
  auth = found;
  saveJSON('baytex_auth', auth);
  return true;
}
function doRegister(name, surname, phone){
  const user = {name, surname, phone};
  saveUser(user);
  auth = user;
  saveJSON('baytex_auth', auth);
}
function authSubmit(prefix, mode){
  const phone = document.getElementById(prefix + 'Phone').value.trim();
  if(mode === 'login'){
    if(!phone){ toast(t('err_phone'), 'error'); return false; }
    if(!doLogin(phone)){ toast(t('err_not_found'), 'error'); return false; }
  }else{
    const name = document.getElementById(prefix + 'Name').value.trim();
    const surname = document.getElementById(prefix + 'Surname').value.trim();
    if(!name || !surname || !phone){ toast(t('err_fill'), 'error'); return false; }
    doRegister(name, surname, phone);
  }
  renderSidebarUser();
  return true;
}
function loginProfile(){
  if(!authSubmit('auth', 'login')) return;
  toast(t('w_hi', {name: auth.name}));
  renderProfile();
}
function registerProfile(){
  if(!authSubmit('auth', 'register')) return;
  toast(t('w_hi', {name: auth.name}));
  renderProfile();
}
function logout(){
  auth = null;
  saveJSON('baytex_auth', null);

  
  balance = 0;
  txs = [];
  lastCard = '';
  saveBalance();
  saveJSON('baytex_lastcard', '');

  coPaid = null;
  payMethod = 'card';
  ['balNum','balExp','balCvv','balSum','cardNum','cardHolder','cardExp','cardCvv','smsCode'].forEach(id => {
    const e = document.getElementById(id);
    if(e) e.value = '';
  });
  const balCardEl = document.getElementById('balCard');
  if(balCardEl) balCardEl.removeAttribute('data-brand');
  const payCardEl = document.getElementById('payCard');
  if(payCardEl) payCardEl.removeAttribute('data-brand');

  renderSidebarUser();
  updateBalanceBadge();
  toast(t('logout_done'));

  /* keyingi safar sahifaga kirganda avval login (raqam bilan) ko'rsatilsin */
  welcomeMode = 'login';
  profileAuthMode = 'login';

  /* birinchi — registratsiya (welcome) joyiga darhol qaytarish */
  go('welcome');
}

/* ---------------- welcome / registration ---------------- */
let welcomeMode = 'login';
function dialSVG(locked){
  let ticks = '';
  const n = 28;
  for(let i=0;i<n;i++){
    const a = (360/n)*i;
    ticks += `<line class="tick" x1="100" y1="10" x2="100" y2="${i%7===0?20:16}" transform="rotate(${a} 100 100)"/>`;
  }
  const lock = locked
    ? `<path class="lock" d="M88 98 v-10 a12 12 0 0 1 24 0 v10" stroke-width="4" stroke-linecap="round"/>
       <rect class="lock" x="80" y="98" width="40" height="32" rx="5" stroke-width="4"/>
       <circle class="lock-dot" cx="100" cy="112" r="3.4"/>`
    : `<path class="lock" d="M88 98 v-13 a12 12 0 0 1 22 -7" stroke-width="4" stroke-linecap="round"/>
       <rect class="lock" x="80" y="98" width="40" height="32" rx="5" stroke-width="4"/>
       <circle class="lock-dot" cx="100" cy="112" r="3.4"/>`;
  return `<svg class="wv2-dial-svg" viewBox="0 0 200 200" aria-hidden="true">
    <g class="ring-spin"><circle class="ring" cx="100" cy="100" r="86"/>${ticks}</g>
    <circle class="hub" cx="100" cy="100" r="52"/>
    ${lock}
  </svg>`;
}
function setWelcomeMode(m){
  welcomeMode = m;
  renderWelcome();
}
function renderWelcome(){
  const el = document.getElementById('welcomeAuthArea');
  if(!auth){
    const isLogin = welcomeMode === 'login';
    el.innerHTML = `
      <div class="wv2-dial-col">${dialSVG(true)}</div>
      <div class="wv2-form-col">
        <div class="wv2-brand"><span class="g">PHONE</span> EX</div>
        <p class="wv2-sub">${isLogin ? t('w_sub_login') : t('w_sub_reg')}</p>
        <div class="wv2-tabs">
          <button class="wv2-tab ${isLogin ? 'active' : ''}" onclick="setWelcomeMode('login')">${t('w_login_link')}</button>
          <button class="wv2-tab ${!isLogin ? 'active' : ''}" onclick="setWelcomeMode('register')">${t('w_reg_link')}</button>
        </div>
        ${isLogin ? '' : `<div class="wv2-2col">
          <div class="wv2-field"><label for="welcomeName">${t('f_name')}</label><input id="welcomeName" placeholder="${t('f_name_ph')}"></div>
          <div class="wv2-field"><label for="welcomeSurname">${t('f_surname')}</label><input id="welcomeSurname" placeholder="${t('f_surname_ph')}"></div>
        </div>`}
        <div class="wv2-field"><label for="welcomePhone">${t('f_phone')}</label><input id="welcomePhone" placeholder="+998 90 000 00 00"></div>
        <label class="wv2-remember"><input type="checkbox" checked> ${t('w_remember')}</label>
        <button class="wv2-submit" onclick="${isLogin ? 'loginFromWelcome()' : 'registerFromWelcome()'}">${isLogin ? t('w_login_btn') : t('w_reg_btn')}</button>
        <button class="wv2-skip" onclick="go('home')">${t('w_skip')}</button>
        <p class="wv2-note">${t('w_note')}</p>
        <div class="wv2-prefs">
          <button onclick="toggleTheme()"><svg class="ic"><use href="#i-moon"/></svg><span>${t('theme_short')}</span></button>
          <button onclick="cycleLang()"><svg class="ic"><use href="#i-globe"/></svg><span>${I18N[prefs.lang].lang_name}</span></button>
        </div>
      </div>
    `;
  }else{
    const myOrders = orders.filter(o => o.buyer === auth.phone);
    el.innerHTML = `
      <div class="wv2-dial-col">${dialSVG(false)}</div>
      <div class="wv2-form-col">
        <div class="wv2-brand"><span class="g">PHONE</span> EX</div>
        <p class="wv2-sub" style="margin-bottom:22px;">${t('w_hi', {name: auth.name})} ${myOrders.length > 0 ? t('w_orders_n', {n: myOrders.length}) : t('w_logged')}</p>
        <button class="wv2-submit" onclick="go('katalog')">${t('w_to_catalog')}</button>
        <button class="wv2-ghost" onclick="go('builds')">${t('w_to_builds')}</button>
      </div>
    `;
  }
}
function registerFromWelcome(){
  if(!authSubmit('welcome', 'register')) return;
  toast(t('w_hi', {name: auth.name}));
  go('home');
}
function loginFromWelcome(){
  const phone = document.getElementById('welcomePhone').value.trim();
  if(!phone){ toast(t('err_phone'), 'error'); return; }
  if(!doLogin(phone)){
    toast(t('err_not_found'), 'error');
    welcomeMode = 'register';
    renderWelcome();
    const ph = document.getElementById('welcomePhone');
    if(ph) ph.value = phone;
    return;
  }
  renderSidebarUser();
  toast(t('w_hi', {name: auth.name}));
  go('home');
}

/* ---------------- contact page ---------------- */
let inquiries = loadJSON('baytex_inquiries', []);
function submitContact(){
  const name = document.getElementById('cName').value.trim();
  const phone = document.getElementById('cPhone').value.trim();
  const msg = document.getElementById('cMsg').value.trim();
  if(!name || !phone || !msg){ toast(t('err_all'), 'error'); return; }
  inquiries.unshift({name, phone, msg, date: new Date().toLocaleString(LOCALE[prefs.lang] || 'uz-UZ')});
  saveJSON('baytex_inquiries', inquiries);
  document.getElementById('cName').value = '';
  document.getElementById('cPhone').value = '';
  document.getElementById('cMsg').value = '';
  toast(t('sent'));
}

/* ---------------- AI assistant (local, no backend needed) ---------------- */
const CAT_KEYWORDS = {
  'Smartfonlar': ['smartfon','telefon','iphone','samsung','xiaomi','galaxy','poco','redmi'],
  'Planshetlar': ['planshet','tablet','ipad'],
  'Simsiz quloqchin': ['quloqchin','airpods','buds','naushnik','garnitura'],
  'Aksessuarlar': ['gilof','g\'ilof','oyna','himoya oyna','aksessuar','chexol'],
  'Quvvat banki': ['quvvat bank','powerbank','power bank','anker'],
  'Zaryadlovchi': ['zaryadlovchi','zaryad','charger','kabel','magsafe'],
  'Smart soat': ['soat','watch','smart soat']
};
function detectCategory(t){
  for(const [cat, kws] of Object.entries(CAT_KEYWORDS)){
    if(kws.some(kw => t.includes(kw))) return cat;
  }
  return null;
}
function parseBudget(t){
  let m = t.match(/(\d+[.,]?\d*)\s*(mln|million|milion)/i);
  if(m) return Math.round(parseFloat(m[1].replace(',','.')) * 1000000);
  m = t.match(/(\d+[.,]?\d*)\s*(ming|k)\b/i);
  if(m) return Math.round(parseFloat(m[1].replace(',','.')) * 1000);
  m = t.match(/(\d{6,})/);
  if(m) return parseInt(m[1],10);
  return null;
}
function esc(s){ return String(s).replace(/'/g,"\\'").replace(/"/g,'&quot;'); }
function chipHTML(chips){
  if(!chips || !chips.length) return '';
  return `<div class="ai-chips">${chips.map(c=>`<button class="ai-chip" onclick="${c.action}">${c.label}</button>`).join('')}</div>`;
}
function fmtShort(n){ return (n/1000000).toFixed(n%1000000===0?0:1) + " mln so'm"; }

function generateReplyBase(raw){
  const t = raw.toLowerCase();
  const budget = parseBudget(t);
  const cat = detectCategory(t);
  const wantsGaming = /(kamera|foto|surat)/.test(t);
  const wantsOffice = /(byudjet|arzon narx|iqtisodiy)/.test(t);
  const wantsCheapest = /(arzon|eng arzon|arzoni)/.test(t);
  const wantsPricey = /(qimmat|kuchli|eng yaxshi|flagman)/.test(t);
  const wantsBuild = /(to'plam|tayyor|to'liq to'plam)/.test(t);
  const wantsContact = /(raqam|nomer|manzil|qayerda|bog'lan|boglan|ish vaqti|manzilingiz|lokatsiya|joylashgan|qo'ng'iroq)/.test(t);
  const isGreeting = /^(salom|assalom|hi|hello|hey|xayrli)/.test(t.trim());
  const isThanks = /(rahmat|raxmat|tashakkur)/.test(t);

  if(isThanks){
    return {text:"Arzimaydi! Yana savol bo'lsa, bemalol yozavering 🙂", chips:[]};
  }
  if(wantsContact){
    return {
      text:"Biz bilan bog'lanish: ☎ +998 97 983 50 70 · Toshkent, Yashnobod tumani · Ish vaqti: har kuni 9:00–19:00. To'liq ma'lumot va xabar yuborish uchun \"Aloqa\" sahifasiga o'ting.",
      chips:[{label:"Aloqa sahifasi →", action:"go('aloqa');toggleAI(false);"}]
    };
  }
  if(isGreeting && !cat && !budget && !wantsBuild){
    return {
      text:"Salom! Menga budjetingizni yoki qidirayotgan telefon turini ayting — masalan \"10 million so'mga smartfon\" yoki \"iPhone\". Tavsiya beraman.",
      chips:[
        {label:'Smartfonlar', action:"setFilter('Smartfonlar');go('katalog');toggleAI(false);"},
        {label:'Aksessuarlar', action:"setFilter('Aksessuarlar');go('katalog');toggleAI(false);"},
        {label:'Tayyor to\'plamlar', action:"go('builds');toggleAI(false);"}
      ]
    };
  }

  // budget + gaming/office intent -> recommend a BUILD
  if(budget && (wantsGaming || wantsOffice || wantsBuild || !cat)){
    let pool = BUILDS.slice();
    if(wantsGaming) pool = pool.filter(b => /Kamera|Camera/i.test(b.tag+b.name));
    if(wantsOffice) pool = pool.filter(b => /Byudjet|Start/i.test(b.tag+b.name));
    const affordable = pool.filter(b => b.price <= budget).sort((a,b)=>b.price-a.price);
    if(affordable.length){
      const best = affordable[0];
      const specsTxt = best.specs.map(([k,v])=>`${k}: ${v}`).join(', ');
      return {
        text:`${fmtShort(budget)} budjetga eng mos variant — "${best.name}" (${best.tag}). Narxi: ${fmt(best.price)}. Tarkibi: ${specsTxt}.`,
        chips:[
          {label:`Savatga — ${fmt(best.price)}`, action:`addToCart('${best.id}','${esc(best.name)}','Tayyor to\\'plam',${best.price})`},
          {label:'Barcha to\'plamlar →', action:"go('builds');toggleAI(false);"}
        ]
      };
    }
    const cheapest = pool.sort((a,b)=>a.price-b.price)[0];
    if(cheapest){
      return {
        text:`Afsuski, ${fmtShort(budget)} budjetga aniq mos tayyor to'plam yo'q. Eng yaqin arzon variant — "${cheapest.name}", narxi ${fmt(cheapest.price)}. Yoki katalogdan alohida telefon tanlashingiz mumkin.`,
        chips:[{label:'To\'plamlarni ko\'rish →', action:"go('builds');toggleAI(false);"}]
      };
    }
  }

  // category (+ optional budget)
  if(cat){
    let list = PRODUCTS.filter(p => p.cat === cat);
    if(budget) list = list.filter(p => p.price <= budget);
    if(wantsCheapest) list.sort((a,b)=>a.price-b.price);
    else if(wantsPricey) list.sort((a,b)=>b.price-a.price);
    else list.sort((a,b)=>a.price-b.price);
    if(!list.length){
      return {
        text:`${cat} bo'yicha${budget ? ' shu budjetga mos' : ''} mahsulot topilmadi. Katalogda boshqa variantlarni ko'rib chiqing.`,
        chips:[{label:`${cat} — katalogda ko'rish →`, action:`setFilter('${cat}');go('katalog');toggleAI(false);`}]
      };
    }
    const top = list.slice(0,3);
    const intro = wantsCheapest ? `Eng arzon ${cat} variantlari:` : wantsPricey ? `Eng kuchli ${cat} variantlari:` : `${cat} bo'yicha tavsiyalarim:`;
    return {
      text: intro + ' ' + top.map(p=>`${p.name} — ${fmt(p.price)}`).join('; ') + '.',
      chips: [
        ...top.map(p=>({label:`+ ${p.name.length>22?p.name.slice(0,22)+'…':p.name}`, action:`addToCart('${p.id}','${esc(p.name)}','${p.cat}',${p.price})`})),
        {label:`Hammasini ko'rish →`, action:`setFilter('${cat}');go('katalog');toggleAI(false);`}
      ]
    };
  }

  if(wantsBuild || wantsGaming || wantsOffice){
    let pool = BUILDS.slice();
    if(wantsGaming) pool = pool.filter(b => /Kamera|Camera/i.test(b.tag+b.name));
    if(wantsOffice) pool = pool.filter(b => /Byudjet|Start/i.test(b.tag+b.name));
    if(!pool.length) pool = BUILDS.slice();
    pool.sort((a,b)=> (b.featured?1:0) - (a.featured?1:0) || a.price-b.price);
    const top = pool.slice(0,3);
    return {
      text:"Tayyor to'plamlardan tavsiyalarim: " + top.map(b=>`${b.name} (${fmt(b.price)})`).join('; ') + '.',
      chips:[
        ...top.map(b=>({label:`+ ${b.name}`, action:`addToCart('${b.id}','${esc(b.name)}','Tayyor to\\'plam',${b.price})`})),
        {label:'Barchasini ko\'rish →', action:"go('builds');toggleAI(false);"}
      ]
    };
  }

  return {
    text:"To'liq tushunmadim 🙂 Menga budjetingizni (masalan \"10 million so'm\") va nima kerakligini (smartfon, planshet, aksessuar va h.k.) ayting — mos variantlarni topib beraman.",
    chips:[
      {label:'Eng arzon telefon', action:"askAI('Eng arzon telefon')"},
      {label:'Yaxshi kamera', action:"askAI('Kamerasi kuchli telefon')"},
      {label:'Yetkazib berish', action:"askAI('Yetkazib berish')"},
      {label:'Aloqa', action:"go('aloqa');toggleAI(false);"}
    ]
  };
}

function toggleAI(open){ document.getElementById('aiPanel').classList.toggle('open', open); }
document.getElementById('aiFab').addEventListener('click', () => toggleAI(!document.getElementById('aiPanel').classList.contains('open')));

function revealText(el, text, onDone){
  const words = text.split(' ');
  let i = 0;
  el.textContent = '';
  const timer = setInterval(() => {
    el.textContent += (i ? ' ' : '') + words[i];
    i++;
    const body = document.getElementById('aiBody');
    body.scrollTop = body.scrollHeight;
    if(i >= words.length){ clearInterval(timer); if(onDone) onDone(); }
  }, 22);
}

function sendAI(){
  const input = document.getElementById('aiInput');
  const text = input.value.trim();
  if(!text) return;
  const body = document.getElementById('aiBody');
  body.insertAdjacentHTML('beforeend', `<div class="ai-msg user"></div>`);
  body.lastElementChild.textContent = text;
  input.value = '';
  body.scrollTop = body.scrollHeight;

  body.insertAdjacentHTML('beforeend', `<div class="ai-msg bot typing" id="aiPending"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>`);
  body.scrollTop = body.scrollHeight;
  const pending = document.getElementById('aiPending');

  const delay = 380 + Math.min(700, text.length * 12);
  setTimeout(() => {
    const {text: answer, chips} = generateReply(text);
    pending.classList.remove('typing');
    pending.removeAttribute('id');
    revealText(pending, answer, () => {
      if(chips && chips.length) pending.insertAdjacentHTML('afterend', `<div class="ai-msg bot" style="padding:0;background:none;border:none;">${chipHTML(chips)}</div>`);
      body.scrollTop = body.scrollHeight;
    });
  }, delay);
}



/* ---------------- balans (demo hamyon) ---------------- */
const QUICK_SUMS = [100000, 500000, 1000000, 5000000];
const MIN_TOPUP = 10000;
let lastCard = loadJSON('baytex_lastcard', '');

function saveBalance(){ saveJSON('baytex_balance', balance); saveJSON('baytex_txs', txs); }
function updateBalanceBadge(){
  const el = document.getElementById('sbBalance');
  if(el) el.textContent = Math.round(balance).toLocaleString(LOCALE[prefs.lang] || 'uz-UZ');
  const pm = document.getElementById('pmBalanceInfo');
  if(pm) pm.textContent = fmt(balance);
}
function addTx(type, sum, label){
  txs.unshift({type, sum, label, date: new Date().toLocaleString(LOCALE[prefs.lang] || 'uz-UZ')});
  txs = txs.slice(0, 30);
}
function onBalSumInput(el){
  const d = el.value.replace(/\D/g,'');
  el.value = d ? parseInt(d,10).toLocaleString(LOCALE[prefs.lang] || 'uz-UZ') : '';
  document.querySelectorAll('.bal-chip').forEach(c => c.classList.toggle('active', +c.dataset.sum === (parseInt(d,10) || 0)));
}
function pickSum(n){
  const el = document.getElementById('balSum');
  el.value = n.toLocaleString(LOCALE[prefs.lang] || 'uz-UZ');
  document.querySelectorAll('.bal-chip').forEach(c => c.classList.toggle('active', +c.dataset.sum === n));
}
function renderBalance(){
  const v = document.getElementById('balValue');
  if(!v) return;
  v.textContent = fmt(balance);
  document.getElementById('balHolder').textContent = auth ? (((auth.name || '') + ' ' + (auth.surname || '')).trim()).toUpperCase() : t('guest').toUpperCase();
  document.getElementById('balLastCard').textContent = lastCard ? '•••• ' + lastCard : '•••• ••••';
  document.getElementById('balBtnText').textContent = t('bal_btn');
  document.getElementById('balQuick').innerHTML = QUICK_SUMS.map(n =>
    `<button class="bal-chip" data-sum="${n}" onclick="pickSum(${n})">+ ${n.toLocaleString(LOCALE[prefs.lang] || 'uz-UZ')}</button>`).join('');

  const box = document.getElementById('balTx');
  box.innerHTML = txs.length === 0 ? `<div class="bal-empty">${t('bal_empty')}</div>` :
    txs.map(x => `
      <div class="bal-tx ${x.type}">
        <div class="bal-tx-ic"><svg class="ic"><use href="#${x.type === 'in' ? 'i-plus' : 'i-cart'}"/></svg></div>
        <div class="bal-tx-txt"><b>${x.label}</b><span>${x.date}</span></div>
        <div class="bal-tx-sum">${x.type === 'in' ? '+' : '−'}${Math.round(x.sum).toLocaleString(LOCALE[prefs.lang] || 'uz-UZ')}</div>
      </div>`).join('');
  updateBalanceBadge();
}
function animateBalance(from, to){
  const el = document.getElementById('balValue');
  const start = performance.now(), dur = 700;
  (function frame(now){
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(Math.round(from + (to - from) * eased));
    if(p < 1) requestAnimationFrame(frame);
  })(performance.now());
}
function topUp(){
  const sum = parseInt(val('balSum').replace(/\D/g,''), 10) || 0;
  const num = val('balNum').replace(/\s/g,'');
  if(sum <= 0){ toast(t('bal_err_sum'), 'error'); return; }
  if(sum < MIN_TOPUP){ toast(t('bal_min', {sum: fmt(MIN_TOPUP)}), 'error'); return; }
  if(num.length !== 16 || (/^(4|5[1-5]|2[2-7])/.test(num) && !luhn(num))){ toast(t('co_err_card'), 'error'); return; }
  const exp = val('balExp'), m = +exp.slice(0,2), y = +exp.slice(3,5), now = new Date();
  if(!/^\d{2}\/\d{2}$/.test(exp) || m < 1 || m > 12 ||
     2000 + y < now.getFullYear() || (2000 + y === now.getFullYear() && m < now.getMonth() + 1)){ toast(t('co_err_exp'), 'error'); return; }
  if(val('balCvv').length < 3){ toast(t('co_err_cvv'), 'error'); return; }

  const btn = document.getElementById('balBtn');
  btn.classList.add('loading');
  setTimeout(() => {
    btn.classList.remove('loading');
    const before = balance;
    balance += sum;
    lastCard = num.slice(-4);
    saveJSON('baytex_lastcard', lastCard);
    addTx('in', sum, t('bal_in'));
    saveBalance();
    ['balSum','balNum','balExp','balCvv'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('balCard').setAttribute('data-brand', cardBrand(num));
    renderBalance();
    animateBalance(before, balance);
    toast(t('bal_ok', {sum: fmt(sum)}));
  }, 1300);
}
function bindBalance(){
  const num = document.getElementById('balNum'), exp = document.getElementById('balExp'), cvv = document.getElementById('balCvv');
  if(!num) return;
  num.addEventListener('input', () => {
    const d = num.value.replace(/\D/g,'').slice(0,16);
    num.value = d.replace(/(.{4})/g,'$1 ').trim();
    document.getElementById('balCard').setAttribute('data-brand', cardBrand(d));
  });
  exp.addEventListener('input', () => {
    let d = exp.value.replace(/\D/g,'').slice(0,4);
    if(d.length >= 3) d = d.slice(0,2) + '/' + d.slice(2);
    exp.value = d;
  });
  cvv.addEventListener('input', () => { cvv.value = cvv.value.replace(/\D/g,'').slice(0,4); });
}

/* ---------------- to'lov / checkout (demo, backendsiz) ---------------- */
let coStepNum = 1, coDeliv = 'courier', coPaid = null, payMethod = 'card';

function openCheckout(){
  if(cart.length === 0 && !coPaid){ toast(t('co_empty'), 'error'); go('katalog'); return; }
  if(coPaid){ coStep(3); renderCoSide(); return; }
  if(auth){
    const n = document.getElementById('coName'), p = document.getElementById('coPhone');
    if(n && !n.value) n.value = auth.surname ? (auth.name + ' ' + auth.surname) : auth.name;
    if(p && !p.value) p.value = auth.phone;
  }
  coStep(1);
  renderCoSide();
}
function coStep(n){
  if(n === 2 && !validateDelivery()) return;
  coStepNum = n;
  [1,2,3].forEach(i => document.getElementById('coPane'+i).classList.toggle('active', i === n));
  document.querySelectorAll('.co-step').forEach(el => {
    const i = +el.dataset.step;
    el.classList.toggle('active', i === n);
    el.classList.toggle('done', i < n);
  });
  document.querySelectorAll('.co-line').forEach((el, idx) => {
    el.classList.toggle('filled', idx + 1 < n);
  });
  const side = document.getElementById('coSide');
  if(side) side.style.display = n === 3 ? 'none' : '';
  if(n === 2) updatePayBtn();
  window.scrollTo({top:0, behavior:'smooth'});
}
function validateDelivery(){
  const name = val('coName'), phone = val('coPhone');
  if(!name || !phone){ toast(t('co_err_name'), 'error'); return false; }
  if(coDeliv === 'courier' && !val('coAddr')){ toast(t('co_err_addr'), 'error'); return false; }
  return true;
}
function val(id){ const e = document.getElementById(id); return e ? e.value.trim() : ''; }

function cartTotal(){ return cart.reduce((s,i) => s + i.price * i.qty, 0); }
function coAmount(){
  const el = document.getElementById('coAmount');
  const n = el ? parseInt(el.value.replace(/\D/g,''), 10) : cartTotal();
  return isNaN(n) ? 0 : n;
}
function renderCoSide(){
  const el = document.getElementById('coSide');
  if(!el) return;
  const total = cartTotal();
  el.innerHTML = `
    <h3>${t('co_summary')}</h3>
    ${cart.map(i => `<div class="co-line-item"><span>${i.name} × ${i.qty}</span><b class="mono">${fmt(i.price*i.qty)}</b></div>`).join('')}
    <div class="co-line-item co-sum"><span>${t('delivery')}</span><b>${t('free')}</b></div>
    <div class="co-line-item"><span>${t('total')}</span><b class="mono">${fmt(total)}</b></div>
    <div class="co-amount">
      <label>${t('co_amount')}</label>
      <input id="coAmount" inputmode="numeric" value="${total.toLocaleString(LOCALE[prefs.lang] || 'uz-UZ')}" oninput="onAmountInput(this)">
      <small>${t('co_amount_d')}</small>
    </div>`;
  updatePayBtn();
}
function onAmountInput(el){
  const digits = el.value.replace(/\D/g,'');
  el.value = digits ? parseInt(digits,10).toLocaleString(LOCALE[prefs.lang] || 'uz-UZ') : '';
  updatePayBtn();
}
function updatePayBtn(){
  const b = document.getElementById('payBtnText');
  if(!b) return;
  if(payMethod === 'balance') b.textContent = t('co_pay_bal', {sum: fmt(coAmount())});
  else b.textContent = smsOpen ? t('co_confirm') : t('co_pay', {sum: fmt(coAmount())});
  updateBalanceBadge();
}

/* --- karta maydonlari --- */
function cardBrand(num){
  if(/^8600|^5614/.test(num)) return 'uzcard';
  if(/^9860/.test(num)) return 'humo';
  if(/^4/.test(num)) return 'visa';
  if(/^5[1-5]|^2[2-7]/.test(num)) return 'mastercard';
  return '';
}
const BRAND_LABEL = {uzcard:'UZCARD', humo:'HUMO', visa:'VISA', mastercard:'MASTERCARD'};
function luhn(num){
  let sum = 0, alt = false;
  for(let i = num.length - 1; i >= 0; i--){
    let d = +num[i];
    if(alt){ d *= 2; if(d > 9) d -= 9; }
    sum += d; alt = !alt;
  }
  return sum % 10 === 0;
}
function bindCard(){
  const num = document.getElementById('cardNum'),
        exp = document.getElementById('cardExp'),
        cvv = document.getElementById('cardCvv'),
        holder = document.getElementById('cardHolder'),
        card = document.getElementById('payCard');
  if(!num) return;

  num.addEventListener('input', () => {
    const d = num.value.replace(/\D/g,'').slice(0,16);
    num.value = d.replace(/(.{4})/g,'$1 ').trim();
    const shown = (d + '••••••••••••••••').slice(0,16).replace(/(.{4})/g,'$1 ').trim();
    document.getElementById('payNum').textContent = shown;
    const br = cardBrand(d);
    card.setAttribute('data-brand', br);
    document.getElementById('payBrand').textContent = BRAND_LABEL[br] || 'CARD';
  });
  exp.addEventListener('input', () => {
    let d = exp.value.replace(/\D/g,'').slice(0,4);
    if(d.length >= 3) d = d.slice(0,2) + '/' + d.slice(2);
    exp.value = d;
    document.getElementById('payExp').textContent = d || '••/••';
  });
  cvv.addEventListener('input', () => {
    cvv.value = cvv.value.replace(/\D/g,'').slice(0,4);
    document.getElementById('payCvv').textContent = cvv.value.replace(/./g,'•') || '•••';
  });
  cvv.addEventListener('focus', () => card.classList.add('flipped'));
  cvv.addEventListener('blur', () => card.classList.remove('flipped'));
  holder.addEventListener('input', () => {
    holder.value = holder.value.toUpperCase();
    document.getElementById('payHolder').textContent = holder.value || 'ISM FAMILIYA';
  });
  document.querySelectorAll('.co-opt[data-deliv]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.co-opt[data-deliv]').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    coDeliv = b.dataset.deliv;
    document.getElementById('coAddrField').style.display = coDeliv === 'courier' ? '' : 'none';
  }));
  document.querySelectorAll('.co-opt[data-pm]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.co-opt[data-pm]').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    payMethod = b.dataset.pm;
    smsOpen = false;
    document.getElementById('coSms').classList.remove('show');
    document.getElementById('cardZone').classList.toggle('hidden', payMethod === 'balance');
    updatePayBtn();
  }));
}

let smsOpen = false;
function payNow(){
  const btn = document.getElementById('payBtn');
  const num = val('cardNum').replace(/\s/g,'');

  if(payMethod === 'balance'){
    const amount = coAmount();
    if(amount <= 0){ toast(t('co_err_sum'), 'error'); return; }
    if(balance < amount){ toast(t('pm_low', {sum: fmt(amount - balance)}), 'error'); return; }
    btn.classList.add('loading');
    setTimeout(() => {
      btn.classList.remove('loading');
      balance -= amount;
      addTx('out', amount, t('bal_out'));
      saveBalance();
      updateBalanceBadge();
      finishOrder('');
    }, 1200);
    return;
  }

  if(!smsOpen){
    if(num.length !== 16 || (/^(4|5[1-5]|2[2-7])/.test(num) && !luhn(num))){ toast(t('co_err_card'), 'error'); return; }
    if(val('cardHolder').length < 3){ toast(t('co_err_holder'), 'error'); return; }
    const exp = val('cardExp');
    const m = +exp.slice(0,2), y = +exp.slice(3,5);
    if(!/^\d{2}\/\d{2}$/.test(exp) || m < 1 || m > 12){ toast(t('co_err_exp'), 'error'); return; }
    const now = new Date();
    if(2000 + y < now.getFullYear() || (2000 + y === now.getFullYear() && m < now.getMonth() + 1)){ toast(t('co_err_exp'), 'error'); return; }
    if(val('cardCvv').length < 3){ toast(t('co_err_cvv'), 'error'); return; }
    if(coAmount() <= 0){ toast(t('co_err_sum'), 'error'); return; }

    btn.classList.add('loading');
    setTimeout(() => {
      btn.classList.remove('loading');
      smsOpen = true;
      document.getElementById('coSms').classList.add('show');
      document.getElementById('smsCode').focus();
      updatePayBtn();
      toast(t('co_sms_sent'));
    }, 1400);
    return;
  }

  const code = val('smsCode').replace(/\D/g,'');
  if(code.length !== 6){ toast(t('co_err_code'), 'error'); return; }
  btn.classList.add('loading');
  setTimeout(() => { btn.classList.remove('loading'); finishOrder(num); }, 1500);
}

function finishOrder(num){
  const amount = coAmount();
  const order = {
    id: 'BX-' + Math.random().toString(36).slice(2,8).toUpperCase(),
    items: cart.map(i => ({name:i.name, qty:i.qty, price:i.price})),
    total: amount,
    date: new Date().toLocaleString(LOCALE[prefs.lang] || 'uz-UZ'),
    buyer: val('coPhone'),
    card: num ? '•••• ' + num.slice(-4) : t('pm_balance'),
    brand: num ? (BRAND_LABEL[cardBrand(num)] || 'CARD') : 'PHONE EX WALLET',
    deliv: coDeliv,
    addr: val('coAddr'),
    status: 'processing'
  };
  orders.unshift(order);
  saveJSON('baytex_orders', orders);
  cart = []; saveJSON('baytex_cart', cart);
  updateCartBadge();
  coPaid = order;

  document.getElementById('coReceipt').innerHTML = `
    <div class="r"><span>${t('co_r_order')}</span><b>${order.id}</b></div>
    <div class="r"><span>${t('co_r_date')}</span><b>${order.date}</b></div>
    <div class="r"><span>${t('co_r_card')}</span><b>${payMethod === 'balance' ? t('pm_paid_bal') : order.brand + ' ' + order.card}</b></div>
    <div class="r"><span>${t('co_r_method')}</span><b>${coDeliv === 'courier' ? t('co_courier') : t('co_pickup')}</b></div>
    <div class="r big"><span>${t('co_r_paid')}</span><b class="mono">${fmt(amount)}</b></div>`;

  // maydonlarni tozalash
  ['cardNum','cardExp','cardCvv','cardHolder','smsCode'].forEach(id => { const e = document.getElementById(id); if(e) e.value = ''; });
  document.getElementById('payNum').textContent = '•••• •••• •••• ••••';
  document.getElementById('payExp').textContent = '••/••';
  document.getElementById('payHolder').textContent = 'ISM FAMILIYA';
  document.getElementById('coSms').classList.remove('show');
  smsOpen = false;
  coStep(3);
  renderCoSide();
  setTimeout(() => { coPaid = null; }, 100);
}

/* ---------------- init ---------------- */
applyTheme();
applyI18n();
bindSettings();
bindSidebar();
bindCard();
bindBalance();
syncSettingsUI();
renderFilters();
renderProducts();
renderHomeCats();
renderBuilds();
updateCartBadge();
updateFavBadge();
updateBalanceBadge();
renderSidebarUser();
go(location.hash.replace('#','') || 'welcome');


/* ================= Mahsulot ma'lumoti oynasi (popup) ================= */
const PRODUCT_INFO = {
  p1:{d:"Yangi USB-C portli iPhone: yorqin ekran va kundalik ishlar uchun kuchli chip.", s:[['Ekran','6.1" Super Retina XDR'],['Chip','A16 Bionic'],['Asosiy kamera','48 MP'],['Port','USB-C']]},
  p2:{d:"Titan korpusli flagman: professional kamera va eng kuchli Apple chipi.", s:[['Ekran','6.1" Super Retina XDR'],['Chip','A17 Pro'],['Kamera','48 MP + 3x telefoto'],['Korpus','Titan']]},
  p3:{d:"Ishonchli va qulay narxdagi iPhone: ravshan ekran, yaxshi kamera.", s:[['Ekran','6.1" Super Retina XDR'],['Chip','A15 Bionic'],['Kamera','12 MP qo\'sh'],['Port','Lightning']]},
  p4:{d:"Ixcham flagman: silliq 120 Hz ekran va zamonaviy sun'iy intellekt funksiyalari.", s:[['Ekran','6.2" Dynamic AMOLED 2X, 120 Hz'],['Asosiy kamera','50 MP'],['Batareya','4000 mAh']]},
  p5:{d:"Samsung'ning eng kuchli modeli: 200 MP kamera va S Pen qalam bilan.", s:[['Ekran','6.8" Dynamic AMOLED 2X, 120 Hz'],['Chip','Snapdragon 8 Gen 3'],['Kamera','200 MP'],['Batareya','5000 mAh'],['S Pen','Mavjud']]},
  p6:{d:"O'rta segmentning eng yaxshilaridan biri: yorqin ekran va uzoq ishlaydigan batareya.", s:[['Ekran','6.6" Super AMOLED, 120 Hz'],['Asosiy kamera','50 MP'],['Batareya','5000 mAh']]},
  p7:{d:"Narxiga nisbatan juda kuchli kamera va ekranga ega telefon.", s:[['Ekran','6.67" AMOLED, 120 Hz'],['Asosiy kamera','200 MP'],['Batareya','5100 mAh']]},
  p8:{d:"Leica kamerali flagman: yuqori tezlik va ixcham dizayn.", s:[['Ekran','6.36" LTPO AMOLED'],['Chip','Snapdragon 8 Gen 3'],['Kamera','50 MP Leica'],['Batareya','4610 mAh']]},
  p9:{d:"O'yinlar va kundalik ishlar uchun tezkor, narxi hamyonbop telefon.", s:[['Ekran','6.67" AMOLED, 120 Hz'],['Chip','Dimensity 8300 Ultra'],['Asosiy kamera','64 MP'],['Batareya','5000 mAh']]}
};
const CAT_DESC = {
  'Planshetlar':"O'qish, ish va ko'ngil ochish uchun qulay planshet.",
  'Simsiz quloqchin':"Simsiz ulanish va aniq tovush — musiqa va qo'ng'iroqlar uchun.",
  'Aksessuarlar':"Telefoningizni ishonchli himoya qiladigan aksessuar.",
  'Quvvat banki':"Yo'lda ham telefoningiz quvvatsiz qolmaydi.",
  'Zaryadlovchi':"Tez va xavfsiz zaryadlash uchun.",
  'Smart soat':"Sog'liq va bildirishnomalarni qo'lingizdan kuzating.",
  "Tayyor to'plam":"Bir necha mahsulotdan iborat tayyor to'plam."
};
function productDetail(id){
  const p = PRODUCTS.find(x => x.id === id);
  if(p){
    const info = PRODUCT_INFO[id] || {};
    const specs = [['Kategoriya', p.cat]];
    const mem = p.name.match(/(\d+\s?(?:GB|TB))/i);
    if(mem && !(info.s||[]).some(r => /xotira/i.test(r[0]))) specs.push(['Xotira', mem[1].replace(/\s/g,'')]);
    return {id:p.id, name:p.name, cat:p.cat, price:p.price, img:CAT_PHOTO[p.cat] || 'photo-phone',
      desc: info.d || CAT_DESC[p.cat] || '', specs: specs.concat(info.s || [])};
  }
  const b = BUILDS.find(x => x.id === id);
  if(b) return {id:b.id, name:b.name, cat:"Tayyor to'plam", tag:b.tag, price:b.price, img:b.img || 'photo-phone',
    desc: b.tag, specs: b.specs};
  return null;
}
function closeProductModal(){
  const m = document.getElementById('prodModal');
  if(!m) return;
  m.classList.remove('show');
  document.body.classList.remove('modal-open');
}
function openProductModal(id){
  const d = productDetail(id);
  if(!d) return;
  let m = document.getElementById('prodModal');
  if(!m){
    m = document.createElement('div');
    m.id = 'prodModal';
    m.className = 'pm-overlay';
    m.addEventListener('click', e => { if(e.target === m) closeProductModal(); });
    document.body.appendChild(m);
  }
  m.innerHTML = `
    <div class="pm-box" role="dialog" aria-modal="true">
      <button class="pm-close" onclick="closeProductModal()" aria-label="Yopish"><svg class="ic"><use href="#i-close"/></svg></button>
      <div class="pm-visual">${visualHTML(d.id, d.cat, d.img)}</div>
      <div class="pm-body">
        <div class="pm-cat">${d.cat}</div>
        <h3 class="pm-name">${d.name}</h3>
        ${d.desc ? `<p class="pm-desc">${d.desc}</p>` : ''}
        <ul class="pm-specs">${d.specs.map(([k,v]) => `<li><span>${k}</span><b>${v}</b></li>`).join('')}</ul>
        <div class="pm-foot">
          <div class="pm-price mono">${fmt(d.price)}</div>
          <button class="btn btn-primary" id="pmAdd">${t('add')}</button>
        </div>
      </div>
    </div>`;
  document.getElementById('pmAdd').addEventListener('click', () => {
    addToCart(d.id, d.name, d.cat, d.price);
    closeProductModal();
  });
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => m.classList.add('show'));
}
document.addEventListener('click', e => {
  if(e.target.closest('button, a, input')) return;
  const card = e.target.closest('.prod-card[data-id], .build[data-id]');
  if(card) openProductModal(card.dataset.id);
});
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeProductModal(); });


/* ================= AI yordamchi: kengaytirilgan savol-javoblar ================= */
function aiNorm(x){ return String(x).toLowerCase().replace(/[’ʻʼ‘`´]/g,"'").replace(/\s+/g,' ').trim(); }
function askAI(q){
  const i = document.getElementById('aiInput');
  if(!i) return;
  i.value = q;
  sendAI();
}
function generateReply(raw){
  const q = aiNorm(raw);
  return aiSmartReply(q) || generateReplyBase(q);
}

/* --- mahsulotni nom bo'yicha topish --- */
function aiProdTokens(p){
  return aiNorm(p.name).replace(/["']/g,'').split(/[^a-z0-9]+/).filter(x => x && !/^\d+(gb|tb|mah)$/.test(x));
}
function aiCleanForMatch(q){
  return q.replace(/\d+[.,]?\d*\s*(mln|million|milion|ming|k)\b/g,' ').replace(/\d{6,}/g,' ').replace(/\d+\s*(gb|tb)\b/g,' ');
}
function aiFindProducts(seg){
  const toks = new Set(aiCleanForMatch(seg).replace(/'/g,'').split(/[^a-z0-9]+/).filter(Boolean));
  const scored = [];
  PRODUCTS.forEach(p => {
    const pt = aiProdTokens(p);
    const hit = pt.filter(x => toks.has(x));
    if(!hit.length) return;
    const modelish = hit.some(x => /^[a-z]+\d+[a-z]*$/.test(x));
    if(hit.length >= 2 || modelish) scored.push({p, score:hit.length, ratio:hit.length/pt.length});
  });
  if(!scored.length) return [];
  scored.sort((a,b) => b.score - a.score || b.ratio - a.ratio);
  const top = scored[0];
  const group = top.score === 1
    ? scored.filter(x => x.score === 1)
    : scored.filter(x => x.score === top.score && Math.abs(x.ratio - top.ratio) < 1e-9);
  return group.slice(0,3).map(x => x.p);
}

function aiRows(d){
  return d.specs.filter(r => r[0] !== 'Kategoriya').map(([k,v]) => `• ${k}: ${v}`).join('\n');
}
function aiProdChips(list){
  const chips = [];
  const first = list[0];
  chips.push({label:`+ Savatga — ${fmt(first.price)}`, action:`addToCart('${first.id}','${esc(first.name)}','${first.cat}',${first.price})`});
  list.slice(0,3).forEach(p => chips.push({label:`Batafsil: ${p.name.length>20?p.name.slice(0,20)+'…':p.name}`, action:`openProductModal('${p.id}');toggleAI(false);`}));
  return chips;
}
function aiListText(intro, list, keyRe){
  const lines = list.map(p => {
    let extra = '';
    if(keyRe){
      const d = productDetail(p.id);
      const row = d && d.specs.find(r => keyRe.test(r[0]));
      if(row) extra = ` (${row[0]}: ${row[1]})`;
    }
    return `• ${p.name} — ${fmt(p.price)}${extra}`;
  });
  return intro + '\n' + lines.join('\n');
}

/* --- foydalanish maqsadi bo'yicha tavsiyalar --- */
const AI_USECASES = [
  {re:/(kamera|foto|surat|selfi|video|syomka)/, title:'Kamerasi kuchli telefonlar', ids:['p5','p2','p8','p7'], key:/kamera/i},
  {re:/(batareya|akkumulyator|uzoq ishlay|zaryad ushla|quvvati ko'p)/, title:'Batareyasi sig\'imli telefonlar', ids:['p7','p5','p9','p6'], key:/batareya/i},
  {re:/(o'yin|oyin|pubg|game|gaming|geym|tez ishlay|kuchli telefon|katta ekran)/, title:'O\'yin va tezlik uchun mos telefonlar', ids:['p9','p5','p2','p8'], key:/chip|ekran/i},
  {re:/(talaba|maktab|o'quvchi|bola|farzand|o'smir)/, title:'Talaba va o\'quvchilar uchun qulay narxdagi telefonlar', ids:['p7','p9','p6','p3'], key:null},
  {re:/(sovg'a|sovga|tug'ilgan kun|ayol|xotin|qiz|ona|ota)/, title:'Sovg\'a uchun mashhur telefonlar', ids:['p1','p2','p5','p6'], key:null}
];

const AI_BRANDS = {
  apple:   ['iphone','ipad','airpods','apple','magsafe'],
  samsung: ['samsung','galaxy'],
  xiaomi:  ['xiaomi','redmi','poco']
};

function aiSmartReply(q){
  const budget = parseBudget(q);
  const cat = detectCategory(q);

  /* salomlashish, xayrlashish, imkoniyatlar */
  if(/(xayr|ko'rishguncha|hayr|bye|sog' bo'l)/.test(q)){
    return {text:"Xayr! Yana savol bo'lsa, istalgan vaqt yozing 👋", chips:[]};
  }
  if(/(qalaysan|qalaysiz|ahvol|yaxshimisan|yaxshimisiz|nima gap)/.test(q)){
    return {text:"Yaxshi, rahmat! Siz uchun telefon tanlashga tayyorman. Budjetingizni yoki nimaga kerakligini ayting.", chips:[{label:'Eng arzon telefon', action:"askAI('Eng arzon telefon')"},{label:'Yaxshi kamera', action:"askAI('Kamerasi kuchli telefon')"}]};
  }
  if(/(sen kim|siz kim|isming|ismingiz|nima qila olasan|nima qila olasiz|nimalar qila|yordam ber|imkoniyat|nima haqida)/.test(q) && !cat){
    return {
      text:"Men PHONE EX do'konining AI yordamchisiman. Quyidagilar bo'yicha yordam beraman:\n• telefon, planshet, aksessuar tanlash (budjet bo'yicha ham)\n• modelning narxi va xususiyatlari\n• ikki telefonni solishtirish (masalan, \"iPhone 15 va S24\")\n• kamera, batareya, o'yin uchun tavsiyalar\n• yetkazib berish, kafolat, to'lov, ish vaqti, manzil\n• savat, sevimlilar, balans va sozlamalar",
      chips:[{label:'iPhone 15 Pro haqida', action:"askAI('iPhone 15 Pro haqida')"},{label:'5 mln gacha telefon', action:"askAI('5 million so\\'mgacha telefon')"},{label:'Kafolat', action:"askAI('Kafolat bormi?')"}]
    };
  }

  /* do'kon haqida tez-tez beriladigan savollar */
  if(/(yetkaz|dostavka|olib kel|keltir|kuryer|viloyat)/.test(q)){
    return {text:"Toshkent bo'ylab 24 soat ichida, viloyatlarga 2–3 kun ichida yetkazib beramiz. Aniq muddat va narx uchun buyurtma berishdan oldin Aloqa orqali kelishib olishingiz mumkin.", chips:[{label:'Aloqa sahifasi →', action:"go('aloqa');toggleAI(false);"}]};
  }
  if(/(kafolat|garantiya|buzil|nosoz|servis|remont|ta'mir)/.test(q)){
    return {text:"Barcha mahsulotlar rasmiy distribyutorlar orqali, kafolat kartasi bilan sotiladi. Uskunalarga 3 yilgacha kafolat va o'z servis markazimiz bor; kafolat muddati mahsulotga qarab farq qilishi mumkin. Aniq model uchun Aloqa orqali so'rang.", chips:[{label:'Aloqa sahifasi →', action:"go('aloqa');toggleAI(false);"}]};
  }
  if(/(original|asl mi|aslmi|haqiqiy|qalbaki|fake|rasmiy)/.test(q)){
    return {text:"Ha, mahsulotlarimiz original: rasmiy distribyutorlar orqali olinadi va kafolat kartasi bilan beriladi.", chips:[]};
  }
  if(/(to'lov|tolov|nasiya|bo'lib|bolib|karta|naqd|rassrochka|muddatli|kredit|click|payme|pul to'la)/.test(q)){
    return {text:"Saytdagi \"Balans\" sahifasi orqali hisobingizni to'ldirib, buyurtmani balansdan to'lash mumkin. Nasiya yoki muddatli to'lov kabi boshqa usullar bo'yicha aniq ma'lumot uchun Aloqa orqali bog'laning: +998 97 983 50 70.", chips:[{label:'Balans sahifasi →', action:"go('balans');toggleAI(false);"},{label:'Aloqa →', action:"go('aloqa');toggleAI(false);"}]};
  }
  if(/(chegirma|aksiya|skidka|promokod|arzonlash)/.test(q)){
    return {text:"Hozirgi chegirma va aksiyalar haqida aniq ma'lumotim yo'q. Eng qulay narxdagi variantlar uchun tayyor to'plamlarni ko'ring yoki Aloqa orqali so'rang.", chips:[{label:'Tayyor to\'plamlar →', action:"go('builds');toggleAI(false);"},{label:'Aloqa →', action:"go('aloqa');toggleAI(false);"}]};
  }
  if(/(ayirboshla|trade|eski telefon|b\/u|ishlatilgan|qaytarish|qaytarib)/.test(q)){
    return {text:"Eski telefonni ayirboshlash yoki mahsulotni qaytarish shartlari bo'yicha aniq ma'lumotim yo'q. Iltimos, Aloqa orqali do'kon xodimiga murojaat qiling: +998 97 983 50 70.", chips:[{label:'Aloqa →', action:"go('aloqa');toggleAI(false);"}]};
  }
  if(/(ish vaqti|ish tartibi|soat nechada|qachon ochil|qachongacha|necha(da)?gacha|ochiqmi|yopiqmi)/.test(q)){
    return {text:"Do'kon har kuni 9:00 dan 19:00 gacha ishlaydi.", chips:[{label:'Aloqa sahifasi →', action:"go('aloqa');toggleAI(false);"}]};
  }
  if(/(qanday (buyurtma|sotib|xarid)|buyurtma ber|xarid qil|sotib ol(ish|moqchi))/.test(q)){
    return {text:"Buyurtma berish oson:\n1) Katalogdan mahsulotni tanlang va \"Savatga\" tugmasini bosing.\n2) Savat sahifasiga o'tib buyurtmani rasmiylashtiring.\n3) Do'kon xodimlari siz bilan bog'lanib yetkazib berishni kelishadi.", chips:[{label:'Katalogga o\'tish →', action:"go('katalog');toggleAI(false);"},{label:'Savatni ochish →', action:"go('savat');toggleAI(false);"}]};
  }
  if(/savat/.test(q) && /(nima|necha|jami|qancha|ko'r|bor|ichida|bo'sh)/.test(q)){
    if(!cart.length) return {text:"Savatingiz hozircha bo'sh. Katalogdan mahsulot tanlashingiz mumkin.", chips:[{label:'Katalogga o\'tish →', action:"go('katalog');toggleAI(false);"}]};
    const total = cart.reduce((a,i) => a + i.price*i.qty, 0);
    return {text:"Savatingizda:\n" + cart.map(i => `• ${i.name} × ${i.qty}`).join('\n') + `\nJami: ${fmt(total)}.`, chips:[{label:'Savatni ochish →', action:"go('savat');toggleAI(false);"}]};
  }
  if(/sevimli/.test(q)){
    return {text: favorites.length ? `Sevimlilarda ${favorites.length} ta mahsulot bor. Mahsulot kartasidagi yurakcha tugmasi bilan qo'shish yoki olib tashlash mumkin.` : "Sevimlilar ro'yxatingiz hozircha bo'sh. Mahsulot kartasidagi yurakcha tugmasini bosib qo'shing.", chips:[{label:'Sevimlilarni ochish →', action:"go('sevimlilar');toggleAI(false);"}]};
  }
  if(/(balans|hamyon|hisobim|hisobni to'ldir)/.test(q)){
    return {text:`Joriy balansingiz: ${fmt(balance)}. Hisobni to'ldirish uchun Balans sahifasiga o'ting.`, chips:[{label:'Balans sahifasi →', action:"go('balans');toggleAI(false);"}]};
  }
  if(/(profil|ro'yxatdan|royxatdan|akkaunt|login|tizimga kir|parol)/.test(q)){
    return {text:"Ro'yxatdan o'tish, kirish va profil ma'lumotlarini o'zgartirish Profil sahifasida. U yerda profil rasmini ham yuklash mumkin.", chips:[{label:'Profilni ochish →', action:"go('profil');toggleAI(false);"}]};
  }
  if(/(tungi|qorong'i|qorongi|dark|yorug' rejim|mavzu|tilni|til almash|ruscha|inglizcha)/.test(q)){
    return {text:"Chap paneldagi oy/quyosh tugmasi mavzuni (tungi/yorug'), \"UZ\" tugmasi tilni almashtiradi. Qo'shimcha sozlamalar Sozlamalar sahifasida.", chips:[{label:'Sozlamalar →', action:"go('sozlamalar');toggleAI(false);"}]};
  }

  /* ikki mahsulotni solishtirish */
  const segs = q.split(/\s+(?:va|yoki|bilan|vs\.?|yo|yoxud|hamda)\s+|,/);
  if(segs.length >= 2){
    const found = [];
    segs.forEach(sg => { const f = aiFindProducts(sg)[0]; if(f && !found.some(x => x.id === f.id)) found.push(f); });
    if(found.length >= 2){
      const [a,b] = found;
      const da = productDetail(a.id), db = productDetail(b.id);
      const diff = Math.abs(a.price - b.price);
      const cheaper = a.price <= b.price ? a : b;
      const text = `${a.name} — ${fmt(a.price)}\n${aiRows(da)}\n\n${b.name} — ${fmt(b.price)}\n${aiRows(db)}\n\n` +
        (diff ? `Narx farqi: ${fmt(diff)} (arzonrog'i — ${cheaper.name}).` : "Narxlari bir xil.");
      return {text, chips:[
        {label:`+ ${a.name.length>16?a.name.slice(0,16)+'…':a.name}`, action:`addToCart('${a.id}','${esc(a.name)}','${a.cat}',${a.price})`},
        {label:`+ ${b.name.length>16?b.name.slice(0,16)+'…':b.name}`, action:`addToCart('${b.id}','${esc(b.name)}','${b.cat}',${b.price})`},
        {label:'Batafsil: ' + (a.name.length>14?a.name.slice(0,14)+'…':a.name), action:`openProductModal('${a.id}');toggleAI(false);`}
      ]};
    }
  }

  /* aniq mahsulot haqida */
  const hit = aiFindProducts(q);
  if(hit.length === 1){
    const d = productDetail(hit[0].id);
    const priceOnly = /(narx|qancha|necha|pul|so'm|som)/.test(q) && !/(xususiyat|kamera|ekran|batareya|xotira|chip|haqida|ma'lumot|nima|qanday|bormi)/.test(q);
    const text = priceOnly
      ? `${d.name} — narxi ${fmt(d.price)}.`
      : `${d.name} — ${fmt(d.price)}.` + (d.desc ? `\n${d.desc}` : '') + (aiRows(d) ? `\n${aiRows(d)}` : '') + "\nKatalogda mavjud.";
    return {text, chips: aiProdChips(hit)};
  }
  if(hit.length > 1){
    return {text: aiListText("Mos keladigan modellar:", hit), chips: aiProdChips(hit)};
  }

  /* kategoriya + budjet: budjetga eng mos (eng kuchli) variantlar */
  if(cat && budget && !/(arzon|to'plam|tayyor)/.test(q)){
    const fit = PRODUCTS.filter(p => p.cat === cat && p.price <= budget).sort((a,b) => b.price - a.price).slice(0,3);
    if(fit.length){
      return {text: aiListText(`${fmtShort(budget)} budjetga mos ${cat.toLowerCase()} (budjetga eng yaqinidan boshlab):`, fit), chips: aiProdChips(fit)};
    }
  }

  /* maqsad bo'yicha tavsiya (telefon) */
  if((!cat || cat === 'Smartfonlar') && !/(to'plam|tayyor)/.test(q)){
    const uc = AI_USECASES.find(u => u.re.test(q));
    if(uc){
      let list = uc.ids.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
      if(budget) list = list.filter(p => p.price <= budget);
      if(!list.length){
        const cheapest = PRODUCTS.filter(p => p.cat === 'Smartfonlar').sort((a,b) => a.price - b.price)[0];
        return {text:`${fmtShort(budget)} budjetga bu maqsad uchun mos telefon topilmadi. Eng arzon smartfon — ${cheapest.name}, ${fmt(cheapest.price)}.`, chips:aiProdChips([cheapest])};
      }
      list = list.slice(0,3);
      return {text: aiListText(uc.title + (budget ? ` (${fmtShort(budget)} gacha)` : '') + ':', list, uc.key), chips: aiProdChips(list)};
    }
  }

  /* brend bo'yicha */
  let brandKws = null;
  for(const kws of Object.values(AI_BRANDS)){
    const m = kws.filter(k => q.includes(k));
    if(m.length){
      const brandLevel = m.some(k => ['apple','samsung','xiaomi'].includes(k));
      brandKws = brandLevel ? kws : m;
      break;
    }
  }
  if(brandKws && !/(to'plam|tayyor)/.test(q)){
    let list = PRODUCTS.filter(p => brandKws.some(k => aiNorm(p.name).includes(k)));
    if(cat && !['Smartfonlar'].includes(cat) && !brandKws.some(k => CAT_KEYWORDS[cat] && CAT_KEYWORDS[cat].includes(k))) list = list.filter(p => p.cat === cat);
    if(budget) list = list.filter(p => p.price <= budget);
    const desc = /(qimmat|kuchli|eng yaxshi|flagman)/.test(q);
    list.sort((a,b) => desc ? b.price - a.price : a.price - b.price);
    if(list.length){
      const top = list.slice(0,5);
      return {text: aiListText(`Tanlov${budget ? ' (' + fmtShort(budget) + ' gacha)' : ''}:`, top), chips: aiProdChips(top)};
    }
    return {text:`${budget ? fmtShort(budget) + ' budjetga ' : ''}mos mahsulot topilmadi. Katalogdan boshqa variantlarni ko'ring.`, chips:[{label:'Katalogga o\'tish →', action:"go('katalog');toggleAI(false);"}]};
  }

  /* xotira hajmi bo'yicha */
  const mem = q.match(/(\d{2,4})\s*(gb|tb|gig)/);
  if(mem){
    const unit = mem[2] === 'tb' ? 'tb' : 'gb';
    const needle = mem[1] + unit;
    let list = PRODUCTS.filter(p => aiNorm(p.name).replace(/\s/g,'').includes(needle));
    if(cat) list = list.filter(p => p.cat === cat);
    if(budget) list = list.filter(p => p.price <= budget);
    list.sort((a,b) => a.price - b.price);
    if(list.length){
      const top = list.slice(0,5);
      return {text: aiListText(`${mem[1]} ${unit.toUpperCase()} xotirali mahsulotlar:`, top), chips: aiProdChips(top)};
    }
    return {text:`${mem[1]} ${unit.toUpperCase()} xotirali mos mahsulot topilmadi.`, chips:[{label:'Katalogga o\'tish →', action:"go('katalog');toggleAI(false);"}]};
  }

  /* umumiy: eng arzon / eng qimmat, katalog ko'rinishi */
  if(!cat && /(eng arzon|eng qimmat|eng kuchli|eng yaxshi)/.test(q)){
    const sorted = PRODUCTS.slice().sort((a,b) => a.price - b.price);
    const phones = sorted.filter(p => p.cat === 'Smartfonlar');
    const expensive = /(qimmat|kuchli|yaxshi)/.test(q);
    const pick = expensive ? phones[phones.length-1] : phones[0];
    return {
      text: expensive
        ? `Eng qimmat smartfon — ${pick.name}, ${fmt(pick.price)}. Katalogdagi eng qimmat mahsulot — ${sorted[sorted.length-1].name} (${fmt(sorted[sorted.length-1].price)}).`
        : `Eng arzon smartfon — ${pick.name}, ${fmt(pick.price)}. Katalogdagi eng arzon mahsulot — ${sorted[0].name} (${fmt(sorted[0].price)}).`,
      chips: aiProdChips([pick])
    };
  }
  if(!cat && /(nimalar bor|nima sotasiz|nima bor|assortiment|katalog|turlari|qanday mahsulot)/.test(q)){
    const cats = [...new Set(PRODUCTS.map(p => p.cat))];
    const lines = cats.map(c => {
      const l = PRODUCTS.filter(p => p.cat === c);
      const min = Math.min(...l.map(p => p.price));
      return `• ${c} — ${l.length} ta, ${fmtShort(min)}dan`;
    });
    return {text:"Katalogimizda:\n" + lines.join('\n'), chips:[{label:'Katalogga o\'tish →', action:"go('katalog');toggleAI(false);"},{label:'Tayyor to\'plamlar →', action:"go('builds');toggleAI(false);"}]};
  }

  /* umumiy maslahat so'rovi */
  if((!cat || cat === 'Smartfonlar') && !budget && /(qaysi|maslahat|tavsiya|tanlab|nima olay|nimani olay|olsam bo'ladi|yaxshi)/.test(q)){
    return {
      text:"Albatta, yordam beraman! Telefonni nima uchun olmoqchisiz? Quyidagilardan birini tanlang yoki budjetingizni yozing (masalan, \"8 million so'm\").",
      chips:[
        {label:'Kamera uchun', action:"askAI('Kamerasi kuchli telefon')"},
        {label:'Uzoq batareya', action:"askAI('Batareyasi uzoq ishlaydigan telefon')"},
        {label:'O\'yin uchun', action:"askAI('O\\'yin uchun telefon')"},
        {label:'Arzon variant', action:"askAI('Eng arzon telefon')"}
      ]
    };
  }
  return null;
}
