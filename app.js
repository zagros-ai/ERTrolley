/**
 * لیست رسمی و دقیق داروهای ترالی احیا (نسخه ۰۸ وزارت بهداشت ایران)
 * رنگ‌بندی کارت‌ها:
 * - فقط فاموتیدین (ردیف ۲۵): آبی یخچالی (card-fridge)
 * - هشدار بالا (۱۰ قلم): صورتی/قرمز شفاف (card-high-alert)
 * - مشابه LASA (۱۰ قلم): زرد شفاف (card-lasa)
 * - سایر داروها: سبز نعنایی ملایم و شفاف (card-standard)
 */
const CRASH_CART_DRUGS = [
    // ================= جدول شماره ۱: کشوی اول ترالی احیا (۲۴ ردیف) =================
    {
        id: 1, drawer: 1, row: 1, globalRow: 1,
        faName: "آب مقطر", shortName: "آب مقطر",
        tallMan: "Water for Injection",
        dose: "5 ml", form: "Amp", qty: 10,
        star: false, highAlert: false, lasa: false,
        diluent: "حلال دارویی",
        antidote: "تزریق مستقیم وریدی بدون رقیق‌سازی با دارو ممنوع (همولیز)",
        note: "ردیف ۱ کشوی اول طبق نسخه ۰۸ وزارت بهداشت؛ جهت حل کردن ویال‌ها و رقیق‌سازی داروها."
    },
    {
        id: 2, drawer: 1, row: 2, globalRow: 2,
        faName: "اپی‌نفرین (۱:۱۰۰۰۰)", shortName: "اپی‌نفرین ۰.۱",
        tallMan: "EPINEPHrine HCl",
        dose: "0.1 mg/ml, 10 ml", form: "Amp", qty: 10,
        star: true, highAlert: true, lasa: false,
        diluent: "آماده تزریق وریدی در CPR (NS)",
        antidote: "فنتولامین (در نشت بافتی)",
        note: "فرم رقیق ۱ در ۱۰ هزار (۱۰ سی‌سی حاوی ۱ میلی‌گرم) ویژه تزریق مستقیم وریدی در ایست قلبی هر ۳-۵ دقیقه."
    },
    {
        id: 3, drawer: 1, row: 3, globalRow: 3,
        faName: "آتروپین", shortName: "آتروپین",
        tallMan: "ATROpine Sulfate",
        dose: "0.5 mg/ml, 1 ml", form: "Amp", qty: 5,
        star: true, highAlert: true, lasa: false,
        diluent: "نرمال سالین (NS)",
        antidote: "فیزوستیگمین",
        note: "خط اول برادیکاردی علامت‌دار: ۱ میلی‌گرم (۲ آمپول) وریدی هر ۳ تا ۵ دقیقه (حداکثر ۳ میلی‌گرم)."
    },
    {
        id: 4, drawer: 1, row: 4, globalRow: 4,
        faName: "آمیودارون", shortName: "آمیودارون",
        tallMan: "amIODarone HCl",
        dose: "50 mg/ml, 3 ml (150mg)", form: "Amp", qty: 3,
        star: true, highAlert: false, lasa: false,
        diluent: "فقط دکستروز ۵٪ (D5W)",
        antidote: "پیس‌میکر / درمان حمایتی",
        note: "در VF/pVT مقاوم به شوک: دوز اول 300mg (۲ آمپول) بولوس، دوز دوم 150mg."
    },
    {
        id: 5, drawer: 1, row: 5, globalRow: 5,
        faName: "لیدوکائین ۲٪", shortName: "لیدوکائین ۲٪",
        tallMan: "LIDOocaine HCl 2%",
        dose: "20 mg/ml, 5 ml (100mg)", form: "Amp", qty: 3,
        star: true, highAlert: true, lasa: false,
        diluent: "NS یا D5W",
        antidote: "امولسیون لیپیدی ۲۰٪ (Intralipid)",
        note: "جایگزین آمیودارون در آریتمی بطنی (VF/pVT): دوز اول 1 تا 1.5 mg/kg وریدی."
    },
    {
        id: 6, drawer: 1, row: 6, globalRow: 6,
        faName: "آدنوزین", shortName: "آدنوزین",
        tallMan: "ADENOsine",
        dose: "3 mg/ml, 2 ml (6mg)", form: "Amp", qty: 3,
        star: true, highAlert: false, lasa: false,
        diluent: "تزریق سریع مستقیم از رگ نزدیک قلب + فلاش 20ml NS",
        antidote: "آمینوفیلین / تئوفیلین",
        note: "تاکیکاردی فوق‌بطنی (PSVT) منظم: دوز اول 6mg بولوس در کمتر از ۲ ثانیه، دوز دوم 12mg."
    },
    {
        id: 7, drawer: 1, row: 7, globalRow: 7,
        faName: "نیتروگلیسیرین تزریقی", shortName: "آمپول TNG",
        tallMan: "NITROglycerin",
        dose: "1mg/ml (5,10ml) یا 5mg/ml", form: "Amp", qty: 3,
        star: true, highAlert: false, lasa: true,
        diluent: "D5W یا NS در ظرف شیشه‌ای/ست غیر PVC",
        antidote: "بالا بردن پاها + نرمال سالین",
        note: "آنژین ناپایدار، ادم حاد ریه و بحران فشار خون: شروع انفوزیون از 5 mcg/min."
    },
    {
        id: 8, drawer: 1, row: 8, globalRow: 8,
        faName: "دوپامین", shortName: "دوپامین",
        tallMan: "DOPamine HCl",
        dose: "40 mg/ml, 5 ml (200mg)", form: "Amp", qty: 2,
        star: true, highAlert: false, lasa: true,
        diluent: "NS یا D5W (ناسازگار با محلول قلیایی/بی‌کربنات)",
        antidote: "فنتولامین در صورت نشت عروقی",
        note: "شوک و برادیکاردی علامت‌دار مقاوم به آتروپین: انفوزیون 5 تا 20 mcg/kg/min (داروی مشابه LASA با دوبوتامین)."
    },
    {
        id: 9, drawer: 1, row: 9, globalRow: 9,
        faName: "دوبوتامین", shortName: "دوبوتامین",
        tallMan: "DOBUTamine",
        dose: "12.5 mg/ml, 20 ml (250mg)", form: "Vial", qty: 3,
        star: true, highAlert: false, lasa: true,
        diluent: "NS یا D5W",
        antidote: "بتابلاکر کوتاه‌اثر",
        note: "اینوتروپ مثبت در نارسایی حاد قلبی و شوک کاردیوژنیک: 2 تا 20 mcg/kg/min (داروی مشابه LASA با دوپامین)."
    },
    {
        id: 10, drawer: 1, row: 10, globalRow: 10,
        faName: "هپارین سدیم", shortName: "هپارین",
        tallMan: "HEParin Sodium",
        dose: "5000 U/ml, 1 ml", form: "Amp", qty: 3,
        star: false, highAlert: true, lasa: false,
        diluent: "NS یا D5W",
        antidote: "پروتامین سولفات (1mg به ازای هر 100 واحد هپارین)",
        note: "سندرم حاد کرونری (ACS)، آمبولی ریه (PTE) و ترومبوز وریدی؛ جزو داروهای هشدار بالا (High Alert)."
    },
    {
        id: 11, drawer: 1, row: 11, globalRow: 11,
        faName: "وراپامیل", shortName: "وراپامیل",
        tallMan: "veraPAMil HCl",
        dose: "2.5 mg/ml, 2 ml (5mg)", form: "Amp", qty: 3,
        star: true, highAlert: false, lasa: true,
        diluent: "NS یا D5W",
        antidote: "کلسیم گلوکونات ۱۰٪ و آتروپین",
        note: "کنترل ریت در SVT و AF: تزریق آهسته وریدی 2.5 تا 5 mg طی حداقل ۲ تا ۳ دقیقه."
    },
    {
        id: 12, drawer: 1, row: 12, globalRow: 12,
        faName: "دیگوکسین", shortName: "دیگوکسین",
        tallMan: "diGOXin",
        dose: "0.25 mg/ml, 2 ml (0.5mg)", form: "Amp", qty: 1,
        star: true, highAlert: false, lasa: true,
        diluent: "رقیق‌سازی حداقل ۴ برابر حجم با NS یا D5W",
        antidote: "دیگوکسین ایمون فاب (Digibind)",
        note: "کنترل ضربان در فیبریلاسیون دهلیزی سریع همراه با نارسایی قلبی؛ تزریق طی حداقل ۵ دقیقه."
    },
    {
        id: 13, drawer: 1, row: 13, globalRow: 13,
        faName: "لابتالول", shortName: "لابتالول",
        tallMan: "LABETalol HCl",
        dose: "5 mg/ml, 20 ml (100mg)", form: "Amp", qty: 3,
        star: true, highAlert: false, lasa: false,
        diluent: "NS یا D5W (ناسازگار با سدیم بی‌کربنات)",
        antidote: "گلوکاگون",
        note: "اورژانس‌های فشار خون و دایسکشن آئورت: 20mg وریدی آهسته طی ۲ دقیقه."
    },
    {
        id: 14, drawer: 1, row: 14, globalRow: 14,
        faName: "فوروزماید (لازیکس)", shortName: "فوروزماید",
        tallMan: "furoSEMIDE",
        dose: "10 mg/ml, 2 ml (20mg)", form: "Amp", qty: 10,
        star: false, highAlert: false, lasa: true,
        diluent: "NS (حداکثر سرعت تزریق 20mg/min)",
        antidote: "جبران مایعات و الکترولیت‌ها",
        note: "ادم حاد ریوی، بحران فشار خون و نارسایی احتقانی قلب: 0.5 تا 1 mg/kg وریدی."
    },
    {
        id: 15, drawer: 1, row: 15, globalRow: 15,
        faName: "نالوکسان", shortName: "نالوکسان",
        tallMan: "nalOXone HCl",
        dose: "0.4 mg/ml, 1 ml", form: "Amp", qty: 5,
        star: false, highAlert: false, lasa: false,
        diluent: "NS یا D5W",
        antidote: "حمایتی",
        note: "آنتی‌دوت مسمومیت با مخدرها (اوپیوئید) و دپرسیون تنفسی: 0.4 تا 2 mg وریدی."
    },
    {
        id: 16, drawer: 1, row: 16, globalRow: 16,
        faName: "میدازولام", shortName: "میدازولام",
        tallMan: "MIDazolam",
        dose: "5 mg/ml, 1 ml", form: "Amp", qty: 3,
        star: true, highAlert: false, lasa: true,
        diluent: "NS یا D5W",
        antidote: "فلومازنیل",
        note: "کنترل سریع تشنج، آرام‌بخشی و القای لوله‌گذاری؛ نیازمند پایش تنفسی و قلبی."
    },
    {
        id: 17, drawer: 1, row: 17, globalRow: 17,
        faName: "دیازپام", shortName: "دیازپام",
        tallMan: "DIAZepam",
        dose: "5 mg/ml, 2 ml (10mg)", form: "Amp", qty: 5,
        star: false, highAlert: false, lasa: false,
        diluent: "رقیق نشود (احتمال رسوب بالا)، تزریق در ورید بزرگ",
        antidote: "فلومازنیل",
        note: "خط اول کنترل تشنج پایدار (Status Epilepticus): حداکثر سرعت تزریق 5mg/min در بزرگسال."
    },
    {
        id: 18, drawer: 1, row: 18, globalRow: 18,
        faName: "فنی‌توئین سدیم", shortName: "فنی‌توئین",
        tallMan: "PHENYtoin Sodium",
        dose: "50 mg/ml, 5 ml (250mg)", form: "Amp", qty: 5,
        star: false, highAlert: false, lasa: true,
        diluent: "فقط نرمال سالین (NS) - در قند رسوب کریستالی می‌دهد",
        antidote: "قطع انفوزیون + حمایت قلبی",
        note: "کنترل تشنج پایدار: دوز بارگیری 15-20 mg/kg با حداکثر سرعت 50mg/min."
    },
    {
        id: 19, drawer: 1, row: 19, globalRow: 19,
        faName: "فنوباربیتال سدیم", shortName: "فنوباربیتال",
        tallMan: "PHENobarbital Sodium",
        dose: "200 mg/ml, 1 ml", form: "Amp", qty: 3,
        star: true, highAlert: false, lasa: false,
        diluent: "نرمال سالین (NS)",
        antidote: "قلیایی کردن ادرار + حمایت تهویه‌ای",
        note: "تشنج مقاوم به بنزودیازپین و فنی‌توئین: دوز بارگیری 15-20 mg/kg وریدی آهسته (حداکثر 60mg/min)."
    },
    {
        id: 20, drawer: 1, row: 20, globalRow: 20,
        faName: "هالوپریدول", shortName: "هالوپریدول",
        tallMan: "haloPERidol",
        dose: "5 mg/ml, 1 ml", form: "Amp", qty: 3,
        star: true, highAlert: true, lasa: false,
        diluent: "عضلانی (IM) یا وریدی آهسته با پایش QT",
        antidote: "بی‌پریدین (در عوارض اکستراپیرامیدال) / منیزیم (در تورساد)",
        note: "کنترل آژیتاسیون و دلیریوم حاد؛ جزو داروهای هشدار بالا و دارای ستاره مانیتورینگ قلبی (طولانی کردن QT)."
    },
    {
        id: 21, drawer: 1, row: 21, globalRow: 21,
        faName: "کلسیم گلوکونات ۱۰٪", shortName: "کلسیم گلوکونات",
        tallMan: "Calcium Gluconate 10%",
        dose: "100 mg/ml, 10 ml (1g)", form: "Amp", qty: 3,
        star: true, highAlert: true, lasa: false,
        diluent: "NS یا D5W (ناسازگار با سدیم بی‌کربنات)",
        antidote: "قطع تزریق و مایع‌درمانی",
        note: "محافظت میوکارد در هیپرکالمی، هیپوکلسمی و مسمومیت منیزیم یا CCB؛ تزریق آهسته با مانیتورینگ قلبی."
    },
    {
        id: 22, drawer: 1, row: 22, globalRow: 22,
        faName: "دیفن‌هیدرامین", shortName: "دیفن‌هیدرامین",
        tallMan: "diphenhydrAMINE",
        dose: "50 mg/ml, 1 ml", form: "Amp", qty: 5,
        star: false, highAlert: false, lasa: false,
        diluent: "NS یا تزریق عمیق عضلانی",
        antidote: "فیزوستیگمین در مسمومیت آنتی‌کولینرژیک شدید",
        note: "واکنش‌های آلرژیک حاد، آنافیلاکسی (کنار اپی‌نفرین) و واکنش‌های دیستونیک دارویی."
    },
    {
        id: 23, drawer: 1, row: 23, globalRow: 23,
        faName: "هیدروکورتیزون", shortName: "هیدروکورتیزون",
        tallMan: "hydroCORTisone",
        dose: "50 mg/ml, 2 ml (100mg)", form: "Vial", qty: 3,
        star: false, highAlert: false, lasa: true,
        diluent: "آب مقطر تزریقی یا NS",
        antidote: "ندارد",
        note: "شوک آنافیلاکسی، حملات حاد آسم، نارسایی حاد آدرنال و واکنش‌های التهابی شدید."
    },
    {
        id: 24, drawer: 1, row: 24, globalRow: 24,
        faName: "متوکلوپرامید (پلازیل)", shortName: "متوکلوپرامید",
        tallMan: "metoclopramide",
        dose: "5 mg/ml, 2 ml (10mg)", form: "Amp", qty: 3,
        star: false, highAlert: false, lasa: false,
        diluent: "NS (تزریق آهسته طی ۱ تا ۲ دقیقه)",
        antidote: "دیفن‌هیدرامین یا بی‌پریدین (در بروز اکستراپیرامیدال)",
        note: "آخرین داروی کشوی اول (ردیف ۲۴)؛ کنترل تهوع و استفراغ حاد."
    },

    // ================= جدول شماره ۲: کشوی دوم ترالی احیا (۱۶ ردیف / جایگاه ۲۵ تا ۴۰) =================
    {
        id: 25, drawer: 2, row: 1, globalRow: 25,
        faName: "فاموتیدین", shortName: "فاموتیدین",
        tallMan: "FAMOtidine",
        dose: "10 mg/ml, 2 ml (20mg)", form: "Amp", qty: 5,
        star: false, highAlert: false, lasa: false, fridge: true,
        diluent: "رقیق در 5 تا 10 سی‌سی NS (تزریق حداقل طی ۲ دقیقه)",
        antidote: "حمایتی",
        note: "تنها داروی یخچالی (آبی‌رنگ) در جایگاه ۲۵ ترالی؛ در صورت نگهداری در یخچال، در این خانه کارت با فونت حداقل ۴۸ قرار می‌گیرد."
    },
    {
        id: 26, drawer: 2, row: 2, globalRow: 26,
        faName: "اپی‌نفرین ۱ در ۱۰۰۰", shortName: "اپی‌نفرین ۱mg",
        tallMan: "EPINEPHrine 1:1000",
        dose: "1 mg/ml, 1 ml", form: "Amp", qty: 10,
        star: true, highAlert: true, lasa: false,
        diluent: "NS یا D5W",
        antidote: "فنتولامین",
        note: "داروی هشدار بالا و ستاره‌دار: ۱۰ عدد آمپول اپی‌نفرین ۱ در هزار (۱mg/1ml) در کشوی دوم پس از فاموتیدین."
    },
    {
        id: 27, drawer: 2, row: 3, globalRow: 27,
        faName: "نوراپی‌نفرین (لووفد)", shortName: "نوراپی‌نفرین",
        tallMan: "NORepinephrine",
        dose: "1 mg/ml, 4 ml (4mg)", form: "Amp", qty: 3,
        star: true, highAlert: true, lasa: false, fridge: false,
        diluent: "دکستروز ۵٪ (D5W) یا D/S",
        antidote: "تزریق زیرجلدی فنتولامین در محل نشت عروقی",
        note: "داروی هشدار بالا و ستاره‌دار: خط اول وازوپرسور در شوک سپتیک و شوک پس از احیا (ROSC)."
    },
    {
        id: 28, drawer: 2, row: 4, globalRow: 28,
        faName: "آ- اس- آ (آسپرین)", shortName: "قرص ASA",
        tallMan: "ASA (Aspirin)",
        dose: "100 mg (یا 80mg جویدنی)", form: "Tab", qty: 10,
        star: false, highAlert: false, lasa: false,
        diluent: "مصرف خوراکی (جویدنی در ACS)",
        antidote: "بی‌کربنات سدیم در مسمومیت سالیسیلات",
        note: "سندرم حاد کرونری (ACS) و سکته قلبی: ۳۰۰ تا ۳۲۵ میلی‌گرم به صورت جویدنی."
    },
    {
        id: 29, drawer: 2, row: 5, globalRow: 29,
        faName: "کلوپیدوگرل (پلاویکس)", shortName: "کلوپیدوگرل",
        tallMan: "clopidogrel",
        dose: "75 mg", form: "Tab", qty: 20,
        star: false, highAlert: false, lasa: false,
        diluent: "مصرف خوراکی",
        antidote: "تزریق پلاکت در خونریزی حاد",
        note: "مهارکننده تجمع پلاکتی در بیماران ACS و STEMI: دوز بارگیری ۳۰۰ تا ۶۰۰ میلی‌گرم (۴ تا ۸ قرص)."
    },
    {
        id: 30, drawer: 2, row: 6, globalRow: 30,
        faName: "قرص/پرل نیتروگلیسیرین", shortName: "پرل TNG",
        tallMan: "NITROglycerin Pearl",
        dose: "0.4 mg", form: "Pearl", qty: 10,
        star: false, highAlert: false, lasa: true,
        diluent: "زیرزبانی (Sublingual)",
        antidote: "وضعیت ترندلنبرگ + مایع‌درمانی",
        note: "درد قفسه سینه ایسکمیک و کریز فشار خون (جزو داروهای مشابه زردرنگ به دلیل تشابه با فرم تزریقی)."
    },
    {
        id: 31, drawer: 2, row: 7, globalRow: 31,
        faName: "سولفات منیزیم", shortName: "سولفات منیزیم",
        tallMan: "MgSO4 50% (or 20%)",
        dose: "50 ml", form: "Vial", qty: 2,
        star: false, highAlert: false, lasa: false,
        diluent: "رقیق‌سازی در D5W یا NS",
        antidote: "کلسیم گلوکونات ۱۰٪",
        note: "آریتمی Torsades de Pointes، اکلامپسی و آسم مقاوم: ۱ تا ۲ گرم رقیق‌شده وریدی."
    },
    {
        id: 32, drawer: 2, row: 8, globalRow: 32,
        faName: "دکستروز ۵۰٪", shortName: "دکستروز ۵۰٪",
        tallMan: "Dextrose 50%",
        dose: "50 ml (25g Glucose)", form: "Vial", qty: 2,
        star: false, highAlert: false, lasa: false,
        diluent: "تزریق آهسته در ورید محیطی بزرگ و مطمئن",
        antidote: "پیشگیری از انسفالوپاتی ورنیکه با تیامین (B1)",
        note: "درمان اورژانسی هیپوگلیسمی شدید و درمان کمکی هیپرکالمی (همراه با انسولین رگولار)."
    },
    {
        id: 33, drawer: 2, row: 9, globalRow: 33,
        faName: "سدیم بی‌کربنات ۷.۵٪", shortName: "بی‌کربنات ۷.۵٪",
        tallMan: "Sodium Bicarbonate 7.5%",
        dose: "50 ml", form: "Vial", qty: 3,
        star: true, highAlert: true, lasa: false,
        diluent: "در نوزادان و کودکان به نسبت ۱:۱ با آب مقطر رقیق شود",
        antidote: "کلسیم گلوکونات (در تتانی ناشی از آلکالوز)",
        note: "داروی هشدار بالا و ستاره‌دار: اسیدوز متابولیک شدید، هیپرکالمی و مسمومیت با TCA؛ دوز اولیه 1 mEq/kg."
    },
    {
        id: 34, drawer: 2, row: 10, globalRow: 34,
        faName: "سدیم کلراید ۵٪", shortName: "سدیم کلراید ۵٪",
        tallMan: "Sodium Chloride 5%",
        dose: "50 ml", form: "Vial", qty: 1,
        star: false, highAlert: true, lasa: false,
        diluent: "تزریق کنترل‌شده از ورید مطمئن",
        antidote: "پایش دقیق سدیم سرم",
        note: "داروی هشدار بالا (High Alert): افزایش فشار داخل جمجمه (ICP)، ادم مغزی حاد و هیپوناترمی علامت‌دار شدید."
    },
    {
        id: 35, drawer: 2, row: 11, globalRow: 35,
        faName: "اسپری سالبوتامول", shortName: "اسپری سالبوتامول",
        tallMan: "Salbutamol Spray",
        dose: "100 mcg/dose", form: "Spray", qty: 2,
        star: false, highAlert: false, lasa: false,
        diluent: "استنشاقی (MDI)",
        antidote: "حمایتی",
        note: "خط اول برونکواسپاسم حاد، حمله آسم، COPD و خس‌خس ناشی از آنافیلاکسی."
    },
    {
        id: 36, drawer: 2, row: 12, globalRow: 36,
        faName: "نبولایزر سالبوتامول", shortName: "نبول سالبوتامول",
        tallMan: "Salbutamol Nebulizer",
        dose: "0.5 mg/ml, 1 ml (یا 2.5mg)", form: "Neb", qty: 3,
        star: false, highAlert: false, lasa: false,
        diluent: "رقیق با ۲ تا ۳ سی‌سی نرمال سالین در محفظه نبولایزر",
        antidote: "حمایتی",
        note: "تجویز استنشاقی با اکسیژن در حملات شدید آسم، برونکواسپاسم و درمان کمکی هیپرکالمی."
    },
    {
        id: 37, drawer: 2, row: 13, globalRow: 37,
        faName: "سرم دکستروز ۵٪", shortName: "سرم قندی ۵٪",
        tallMan: "Dextrose 5% Solution",
        dose: "500 ml", form: "Sol", qty: 1,
        star: false, highAlert: false, lasa: false,
        diluent: "محلول پایه انفوزیون",
        antidote: "ندارد",
        note: "حلال اختصاصی جهت انفوزیون آمیودارون، نوراپی‌نفرین و نیتروگلیسیرین در زمان احیا."
    },
    {
        id: 38, drawer: 2, row: 14, globalRow: 38,
        faName: "سرم سدیم کلراید ۰.۹٪", shortName: "سرم نرمال‌سالین",
        tallMan: "Sodium Chloride 0.9%",
        dose: "500 ml", form: "Sol", qty: 1,
        star: false, highAlert: false, lasa: false,
        diluent: "محلول پایه ایزوتونیک",
        antidote: "ندارد",
        note: "باز نگه داشتن مسیر وریدی (KVO)، فلاش کردن داروهای احیا و رقیق‌سازی فنی‌توئین."
    },
    {
        id: 39, drawer: 2, row: 15, globalRow: 39,
        faName: "ژل لیدوکائین", shortName: "ژل لیدوکائین",
        tallMan: "Lidocaine Gel",
        dose: "2% Tube", form: "Gel", qty: 1,
        star: false, highAlert: false, lasa: false,
        diluent: "موضعی (لوبریکانت)",
        antidote: "ندارد",
        note: "بی‌حسی موضعی و روان‌کننده جهت تعبیه لوله تراشه، NG Tube، سوند فولی و ایروی."
    },
    {
        id: 40, drawer: 2, row: 16, globalRow: 40,
        faName: "ژل الکترود (شوک)", shortName: "ژل الکترود",
        tallMan: "Electrode Gel",
        dose: "Tube", form: "Gel", qty: 1,
        star: false, highAlert: false, lasa: false,
        diluent: "موضعی روی پدال‌های دفیبریلاتور",
        antidote: "ندارد",
        note: "کاهش مقاومت پوستی و جلوگیری از سوختگی قفسه سینه هنگام دفیبریلاسیون و کاردیوورژن."
    }
];

// تعیین کلاس رنگی کارت: فقط فاموتیدین (drug.fridge) آبی می‌شود
function getCardStyleClass(drug) {
    if (drug.fridge) return 'card-fridge';
    if (drug.highAlert) return 'card-high-alert';
    if (drug.lasa) return 'card-lasa';
    return drug.id % 2 === 0 ? 'card-standard' : 'card-standard-alt';
}

let currentDrawer = 1;
let isSnakeMode = true;
let activeFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initTabs();
    initDrawerControls();
    initDrugList();
    initCalculator();
    initBottomSheet();
});

// ۰. مدیریت حالت روز و شب
function initTheme() {
    const themeCheckbox = document.getElementById('themeCheckbox');
    const savedTheme = localStorage.getItem('crashCartTheme') || 'light';

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeCheckbox.checked = true;
    }

    themeCheckbox.addEventListener('change', (e) => {
        const isDark = e.target.checked;
        document.body.classList.toggle('dark-mode', isDark);
        localStorage.setItem('crashCartTheme', isDark ? 'dark' : 'light');
    });
}

// ۱. مدیریت تب‌های پایین موبایل
function initTabs() {
    const navButtons = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.tab-view');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            navButtons.forEach(b => b.classList.remove('active'));
            views.forEach(v => v.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(target).classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    document.getElementById('btnRules').addEventListener('click', showAccreditationRules);
}

// ۲. رندر چیدمان ۵ ستونه (۵-۵-۵-۵-۴)
function initDrawerControls() {
    const segBtns = document.querySelectorAll('.segment-btn');
    const snakeToggle = document.getElementById('snakeToggle');

    segBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            segBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentDrawer = parseInt(btn.dataset.drawer, 10);
            renderDrawerGrid();
        });
    });

    snakeToggle.addEventListener('change', (e) => {
        isSnakeMode = e.target.checked;
        renderDrawerGrid();
    });

    renderDrawerGrid();
}

function renderDrawerGrid() {
    const container = document.getElementById('drawerGrid');
    container.className = 'drawer-rows-wrapper';
    const items = CRASH_CART_DRUGS.filter(d => d.drawer === currentDrawer);

    const cols = 5;
    const totalRows = Math.ceil(items.length / cols);

    let shelfRows = [];
    for (let r = 0; r < totalRows; r++) {
        let rowItems = items.slice(r * cols, (r + 1) * cols);

        const emptyCount = cols - rowItems.length;
        for (let e = 0; e < emptyCount; e++) {
            rowItems.push(null);
        }

        const isReversedRow = isSnakeMode && (r % 2 === 1);
        if (isReversedRow) {
            rowItems.reverse();
        }

        shelfRows.push({
            rowNumber: r + 1,
            isReversed: isReversedRow,
            cells: rowItems
        });
    }

    shelfRows.reverse();

    container.innerHTML = '';

    shelfRows.forEach(rowObj => {
        const rowBlock = document.createElement('div');
        rowBlock.className = 'shelf-row-block';

        const dirText = rowObj.isReversed
            ? '⬅ برگشت مارپیچی: از چپ به راست ➡'
            : '⬅ چیدمان: از راست به چپ';

        rowBlock.innerHTML = `
            <div class="shelf-row-header">
                <span>ردیف ${rowObj.rowNumber} ${rowObj.rowNumber === 1 ? '(جلوی کشو)' : rowObj.rowNumber === totalRows ? '(انتهای کشو)' : ''}</span>
                <span class="shelf-dir-badge">${dirText}</span>
            </div>
            <div class="shelf-row-grid"></div>
        `;

        const rowGrid = rowBlock.querySelector('.shelf-row-grid');

        rowObj.cells.forEach(drug => {
            if (!drug) {
                const emptyDiv = document.createElement('div');
                emptyDiv.className = 'cell-empty';
                emptyDiv.textContent = 'خالی';
                rowGrid.appendChild(emptyDiv);
                return;
            }

            const card = document.createElement('div');
            const colorClass = getCardStyleClass(drug);
            card.className = `cell-card ${colorClass}`;
            const numLabel = drug.drawer === 2 ? `${drug.globalRow}` : drug.row;

            card.innerHTML = `
                <div class="cell-top">
                    <span class="cell-num">${numLabel}</span>
                    <span>${drug.star ? '<b class="cell-star">٭</b>' : ''}${drug.fridge ? '<span style="font-size:0.75rem">❄️</span>' : ''}</span>
                </div>
                <div class="cell-name">${drug.shortName || drug.faName}</div>
                <div class="cell-qty">${drug.qty} عدد</div>
            `;
            card.addEventListener('click', () => openDrugSheet(drug));
            rowGrid.appendChild(card);
        });

        container.appendChild(rowBlock);
    });
}

// ۳. لیست و فیلتر بانک داروها
function initDrugList() {
    const searchInput = document.getElementById('searchInput');
    const chips = document.querySelectorAll('.chip');

    searchInput.addEventListener('input', renderDrugList);
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            activeFilter = chip.dataset.filter;
            renderDrugList();
        });
    });

    renderDrugList();
}

function renderDrugList() {
    const container = document.getElementById('drugListContainer');
    const query = document.getElementById('searchInput').value.trim().toLowerCase();

    const filtered = CRASH_CART_DRUGS.filter(d => {
        if (activeFilter === 'd1' && d.drawer !== 1) return false;
        if (activeFilter === 'd2' && d.drawer !== 2) return false;
        if (activeFilter === 'high' && !d.highAlert) return false;
        if (activeFilter === 'lasa' && !d.lasa) return false;
        if (activeFilter === 'star' && !d.star) return false;

        if (!query) return true;
        return (
            d.faName.toLowerCase().includes(query) ||
            d.tallMan.toLowerCase().includes(query) ||
            d.note.toLowerCase().includes(query) ||
            String(d.row) === query ||
            String(d.globalRow) === query
        );
    });

    container.innerHTML = filtered.map(drug => {
        const colorClass = getCardStyleClass(drug);
        return `
        <div class="drug-item ${colorClass}" data-id="${drug.id}">
            <div class="drug-info">
                <h3>
                    کشوی ${drug.drawer} - خانه ${drug.row} ${drug.drawer === 2 ? `(ردیف کل ${drug.globalRow})` : ''}:
                    ${drug.faName}
                    ${drug.star ? '<span class="list-star" title="نیازمند مانیتورینگ قلبی">٭</span>' : ''}
                </h3>
                <span class="tallman">${drug.tallMan}</span>
                <div class="drug-meta">شکل: ${drug.form} | دوز: ${drug.dose}</div>
            </div>
            <div class="drug-badges">
                <span class="qty-pill">حداقل: ${drug.qty} عدد</span>
                ${drug.highAlert ? '<span class="tag-badge tag-high">هشدار بالا</span>' : ''}
                ${drug.lasa ? '<span class="tag-badge tag-lasa">مشابه (LASA)</span>' : ''}
                ${drug.fridge ? '<span style="font-size:0.68rem;font-weight:800;color:#1565c0;">❄️ یخچالی/فونت ۴۸</span>' : ''}
            </div>
        </div>
    `}).join('');

    container.querySelectorAll('.drug-item').forEach(el => {
        el.addEventListener('click', () => {
            const drug = CRASH_CART_DRUGS.find(item => item.id === parseInt(el.dataset.id, 10));
            if (drug) openDrugSheet(drug);
        });
    });
}

// ۴. ماشین‌حساب سریع دوزهای احیا بر اساس وزن بیمار
function initCalculator() {
    const weightInput = document.getElementById('patientWeight');
    const stepBtns = document.querySelectorAll('.w-btn');
    const quickBtns = document.querySelectorAll('.qw-btn');

    stepBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let val = parseFloat(weightInput.value) || 70;
            val = Math.min(200, Math.max(3, val + parseFloat(btn.dataset.step)));
            weightInput.value = val;
            updateCalculations();
        });
    });

    quickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            quickBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            weightInput.value = btn.dataset.w;
            updateCalculations();
        });
    });

    weightInput.addEventListener('input', updateCalculations);
    updateCalculations();
}

function updateCalculations() {
    const w = Math.max(3, parseFloat(document.getElementById('patientWeight').value) || 70);
    const box = document.getElementById('calcResults');

    const lidocaineBolus = Math.round(w * 1.25);
    const lidocaineMl = (lidocaineBolus / 20).toFixed(1);
    const phenytoinLoad = Math.min(1000, Math.round(w * 18));
    const dopamineRate10 = ((10 * w * 60) / 800).toFixed(1);
    const norepiRate01 = ((0.1 * w * 60) / 16).toFixed(1);
    const bicarbMeq = Math.round(w * 1);

    const calcList = [
        {
            title: "اپی‌نفرین کشوی اول (0.1mg/ml - 10ml) و کشوی دوم (1mg/ml)",
            dose: w < 40 ? `کودک: ${(w * 0.01).toFixed(2)} mg وریدی (${(w * 0.1).toFixed(1)} ml از آمپول ۱:۱۰۰۰۰)` : "بزرگسال: 1 mg وریدی (۱ آمپول ۱۰ سی‌سی کشوی اول یا ۱ آمپول ۱ سی‌سی کشوی دوم)",
            sub: "در ایست قلبی هر ۳ تا ۵ دقیقه تکرار شود. در آنافیلاکسی: 0.3 تا 0.5 mg عضلانی از آمپول کشوی دوم (۱:۱۰۰۰)."
        },
        {
            title: "آمیودارون (خانه ۴ کشوی اول - 150mg/3ml)",
            dose: w < 40 ? `کودک: ${Math.round(w * 5)} mg بولوس` : "بزرگسال: دوز اول 300 mg (۲ آمپول) | دوز دوم 150 mg (۱ آمپول)",
            sub: "حلال انحصاری: سرم دکستروز ۵٪ (خانه ۳۷ کشوی دوم)."
        },
        {
            title: "لیدوکائین ۲٪ (خانه ۵ کشوی اول - 100mg/5ml)",
            dose: `${lidocaineBolus} mg معادل ${lidocaineMl} سی‌سی وریدی`,
            sub: "دوز استاندارد VF/pVT: بولوس ۱ تا ۱.۵ میلی‌گرم بر کیلوگرم."
        },
        {
            title: "فنی‌توئین (خانه ۱۸ کشوی اول - 250mg/5ml)",
            dose: `دوز بارگیری: ${phenytoinLoad} mg در سرم نرمال سالین`,
            sub: "حداکثر سرعت تزریق: 50 mg/min (در سرم قندی رسوب می‌کند)."
        },
        {
            title: "نوراپی‌نفرین (خانه ۲۷ کشوی دوم - 4mg/4ml)",
            dose: `با دوز 0.1 mcg/kg/min ⬅ سرعت پمپ: ${norepiRate01} ml/hr`,
            sub: "محاسبه بر اساس رقیق‌سازی ۱ آمپول (4mg) در ۲۵۰ سی‌سی سرم دکستروز ۵٪ (16 mcg/ml)."
        },
        {
            title: "دوپامین (خانه ۸ کشوی اول - 200mg/5ml)",
            dose: `با دوز 10 mcg/kg/min ⬅ سرعت پمپ: ${dopamineRate10} ml/hr`,
            sub: "محاسبه بر اساس رقیق‌سازی ۱ آمپول (200mg) در ۲۵۰ سی‌سی سرم (800 mcg/ml)."
        },
        {
            title: "سدیم بی‌کربنات ۷.۵٪ (خانه ۳۳ کشوی دوم - 50ml)",
            dose: `دوز اولیه اسیدوز/هیپرکالمی: ${bicarbMeq} mEq (معادل ${bicarbMeq} سی‌سی)`,
            sub: "هر ویال ۵۰ سی‌سی حاوی حدود ۴۴.۶ تا ۵۰ میلی‌اکی‌والان بی‌کربنات است."
        }
    ];

    box.innerHTML = calcList.map(item => `
        <div class="calc-item">
            <div class="calc-item-header">
                <span class="calc-item-title">${item.title}</span>
            </div>
            <div class="calc-dose-highlight">${item.dose}</div>
            <div class="calc-sub">${item.sub}</div>
        </div>
    `).join('');
}

// ۵. باتم شیت جزئیات هر دارو
function initBottomSheet() {
    const backdrop = document.getElementById('drugSheetBackdrop');
    backdrop.addEventListener('click', closeSheet);
}

function openDrugSheet(drug) {
    const sheet = document.getElementById('drugSheet');
    const backdrop = document.getElementById('drugSheetBackdrop');
    const content = document.getElementById('sheetContent');

    const shelfRowNum = Math.ceil(drug.row / 5);

    let statusBadges = '';
    if (drug.highAlert) statusBadges += '<span class="tag-badge tag-high" style="margin-left:5px;">⚠️ داروی هشدار بالا (High Alert)</span>';
    if (drug.lasa) statusBadges += '<span class="tag-badge tag-lasa" style="margin-left:5px;">🟨 داروی مشابه (LASA)</span>';
    if (drug.star) statusBadges += '<span class="tag-badge" style="background:#2c3e50;color:#fde047;">٭ نیازمند مانیتورینگ قلبی</span>';

    content.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
            <span class="sheet-badge">
                کشوی ${drug.drawer} | ردیف ${shelfRowNum} | شماره دارو: ${drug.globalRow}
            </span>
            <span style="color:#27ae60;font-weight:800;font-size:0.84rem;">حداقل تعداد: ${drug.qty} عدد</span>
        </div>
        <h2 style="font-size:1.14rem;margin-bottom:4px;">
            ${drug.faName}
            ${drug.star ? '<span class="list-star" style="font-size:1.55rem;" title="ملزم به مانیتورینگ قلبی">٭</span>' : ''}
        </h2>
        <p style="font-family:monospace;color:#27ae60;direction:ltr;text-align:right;font-size:0.86rem;font-weight:700;margin-bottom:8px;">
            ${drug.tallMan} | ${drug.form} (${drug.dose})
        </p>
        <div style="margin-bottom:10px;display:flex;flex-wrap:wrap;gap:4px;">${statusBadges}</div>

        ${drug.fridge ? `
            <div class="fridge-card-alert">
                ❄️ بند ۱۳ دستورالعمل نسخه ۰۸: محل نگهداری فاموتیدین بر اساس بروشور شرکت سازنده است. در صورت نگهداری در یخچال، حتماً در جایگاه شماره ۲۵ ترالی با فونت حداقل ۴۸ عبارت «داروی یخچالی» درج شود.
            </div>
        ` : ''}

        <div class="detail-row">
            <strong>کاربرد بالینی و نکات نسخه ۰۸:</strong>
            ${drug.note}
        </div>
        <div class="detail-row">
            <strong>حلال، رقیق‌سازی و نحوه تجویز:</strong>
            ${drug.diluent}
        </div>
        <div class="detail-row">
            <strong>آنتی‌دوت / مدیریت عوارض:</strong>
            ${drug.antidote}
        </div>
    `;

    backdrop.classList.add('open');
    sheet.classList.add('open');
}

function showAccreditationRules() {
    const sheet = document.getElementById('drugSheet');
    const backdrop = document.getElementById('drugSheetBackdrop');
    const content = document.getElementById('sheetContent');

    content.innerHTML = `
        <h2 style="font-size:1rem;margin-bottom:10px;color:#27ae60;">راهنمای رنگ‌بندی و الزامات نسخه ۰۸ وزارت بهداشت</h2>
        <div class="detail-row" style="border-right-color:#d32f2f;">
            <strong>🟥 داروهای هشدار بالا (High Alert - ۱۰ قلم):</strong>
            اپی‌نفرین ۱:۱۰۰۰۰، آتروپین، لیدوکائین ۲٪، هپارین، هالوپریدول، کلسیم گلوکونات، اپی‌نفرین ۱:۱۰۰۰، نوراپی‌نفرین، سدیم بی‌کربنات ۷.۵٪ و سدیم کلراید ۵٪.
        </div>
        <div class="detail-row" style="border-right-color:#f39c12;">
            <strong>🟨 داروهای مشابه (LASA - ۱۰ قلم زردرنگ):</strong>
            نیتروگلیسیرین تزریقی، دوپامین، دوبوتامین، وراپامیل، دیگوکسین، فوروزماید، میدازولام، فنی‌توئین، هیدروکورتیزون و قرص/پرل نیتروگلیسیرین.
        </div>
        <div class="detail-row" style="border-right-color:#2c3e50;">
            <strong>٭ داروهای ستاره‌دار (نیازمند مانیتورینگ قلبی - ۱۸ قلم):</strong>
            اپی‌نفرین ۱:۱۰۰۰۰، آتروپین، آمیودارون، لیدوکائین، آدنوزین، نیتروگلیسیرین تزریقی، دوپامین، دوبوتامین، وراپامیل، دیگوکسین، لابتالول، میدازولام، فنوباربیتال، هالوپریدول، کلسیم گلوکونات، اپی‌نفرین ۱:۱۰۰۰، نوراپی‌نفرین و سدیم بی‌کربنات.
        </div>
        <div class="detail-row" style="border-right-color:#1976d2;">
            <strong>❄️ داروی یخچالی (آبی‌رنگ با فونت ۴۸):</strong>
            آمپول فاموتیدین (جایگاه شماره ۲۵ در کشوی دوم).
        </div>
    `;

    backdrop.classList.add('open');
    sheet.classList.add('open');
}

function closeSheet() {
    document.getElementById('drugSheetBackdrop').classList.remove('open');
    document.getElementById('drugSheet').classList.remove('open');
}