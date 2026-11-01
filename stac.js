const Y=q=>"https://www.youtube.com/results?search_query="+encodeURIComponent(q);
const C=[
["⭐","ابدأ من هنا","أفضل بداية للبرمجة ومسار كامل مجاني.",[["ابدأ البرمجة: CS50 هارفارد","https://cs50.harvard.edu/x/"],["كتاب البرمجة المجاني: بايثون للجميع","https://www.py4e.com/book"],["مسار علوم الحاسب الكامل OSSU","https://cs.ossu.dev"]]],
["🧠","علوم الحاسب","برمجة، خوارزميات وهياكل بيانات.",[["CS50 هارفارد (الموقع الرسمي)","https://cs50.harvard.edu/x/"],["قناة CS50 على يوتيوب","https://www.youtube.com/@cs50"],["كورس CS50 الكامل 2026",Y("Harvard CS50 2026 freeCodeCamp")],["الزيرو - أسامة الزيرو (عربي)",Y("الزيرو Web School")],["محمد الدسوقي - هياكل البيانات (عربي)",Y("محمد الدسوقي هياكل البيانات")],["Abdul Bari - الخوارزميات","https://www.youtube.com/@abdul_bari"],["Neso Academy","https://www.youtube.com/@nesoacademy"],["بايثون للجميع (PDF + HTML)","https://www.py4e.com/book"],["نسخة تفاعلية من الكتاب","https://runestone.academy"],["Nand2Tetris","https://www.nand2tetris.org"],["OSSU - مسار مجاني كامل","https://cs.ossu.dev"]]],
["⚙️","هندسة الحاسب","المنطق الرقمي ومعمارية الحاسب.",[["Neso Academy (المنطق الرقمي)","https://www.youtube.com/@nesoacademy"],["Nand2Tetris (مجاني)","https://www.nand2tetris.org"],["نظم التشغيل: ثلاث قطع سهلة OSTEP","https://pages.cs.wisc.edu/~remzi/OSTEP/"],["كتاب عناصر أنظمة الحوسبة","https://www.nand2tetris.org"]]],
["🗄️","نظم المعلومات","قواعد البيانات و SQL.",[["إسلام عمار - قواعد البيانات (عربي)",Y("Islam Ammar Database")],["محمد عيسى - قواعد البيانات (عربي)",Y("محمد عيسى database")],["كورس SQL الكامل - freeCodeCamp","https://www.youtube.com/@freecodecamp"]]],
["🌐","تكنولوجيا المعلومات","الشبكات CCNA ولينكس.",[["أحمد نظمي - الشبكات CCNA (عربي)",Y("نظمي معلم")],["Jeremy's IT Lab - CCNA","https://www.youtube.com/@JeremysITLab"],["أدهم النجار - لينكس (عربي)",Y("أدهم النجار")],["كتاب The Linux Command Line","https://linuxcommand.org/tlcl.php"]]],
["🤖","الذكاء الاصطناعي","تعلم الآلة والتعلم العميق.",[["CS50 AI ببايثون","https://cs50.harvard.edu/ai"],["StatQuest","https://www.youtube.com/@statquest"],["3Blue1Brown","https://www.youtube.com/@3blue1brown"],["هشام عاصم - تعلم الآلة (عربي)",Y("Hesham Asem")],["كورسات Hugging Face (NLP)","https://huggingface.co/learn"],["كتاب التعلم العميق (Deep Learning)","https://www.deeplearningbook.org/"],["نسخة PDF من الكتاب","https://github.com/janishar/mit-deep-learning-book-pdf"]]],
["🔐","الأمن السيبراني","تدريب عملي وشهادات.",[["Professor Messer - Security+","https://www.professormesser.com"],["NetworkChuck","https://www.youtube.com/@NetworkChuck"],["John Hammond","https://www.youtube.com/@_JohnHammond"],["TryHackMe","https://tryhackme.com"],["HackTheBox","https://www.hackthebox.com"],["CS50 Cybersecurity","https://cs50.harvard.edu/cybersecurity"]]],
["💻","هندسة البرمجيات","أنظمة تشغيل وأنماط تصميم.",[["كتاب OSTEP المجاني","https://pages.cs.wisc.edu/~remzi/OSTEP/"],["أكواد وواجبات OSTEP العملية","https://github.com/remzi-arpacidusseau/ostep-projects"],["Christopher Okhravi - أنماط التصميم","https://www.youtube.com/@christopherokhravi"],["أكاديمية حاسوب - UML (عربي)",Y("أكاديمية حاسوب")]]],
["📊","علم البيانات","بايثون، إحصاء وتحليل بيانات.",[["دليل بايثون لعلم البيانات","https://jakevdp.github.io/PythonDataScienceHandbook/"],["مقدمة في التعلم الإحصائي ISLR","https://www.statlearning.com/"],["عناصر التعلم الإحصائي (متقدم)","https://hastie.su.domains/ElemStatLearn/"],["3Blue1Brown - الجبر الخطي","https://www.youtube.com/@3blue1brown"],["كورس بايثون وعلم البيانات - py4e","https://www.py4e.com"],["عمرو الطاهر (عربي)",Y("Amr ELTaher")]]],
["🗺️","نظم المعلومات الجغرافية","GIS و QGIS و ArcGIS.",[["كورسات Esri المجانية","https://www.esri.com/mooc"],["QGIS المجاني","https://qgis.org"],["شرح QGIS بالعربية",Y("QGIS بالعربي")]]]
];
const g=document.getElementById("g"),d=document.getElementById("d");
C.forEach((c,i)=>{const e=document.createElement("div");e.className="card";
e.innerHTML=`<div class="ico">${c[0]}</div><h2>${c[1]}</h2><p>${c[2]}</p><button class="v" data-i="${i}">عرض الموارد</button>`;g.appendChild(e)});
g.addEventListener("click",e=>{const b=e.target.closest("button.v");if(!b)return;const c=C[b.dataset.i];
document.getElementById("dt").textContent=c[1];
document.getElementById("dl").innerHTML=c[3].map(r=>`<li><a href="${r[1]}" target="_blank" rel="noopener"><span>${r[0]}</span><small>${r[1].includes("youtube.com/results")?"بحث ▶":"فتح ↗"}</small></a></li>`).join("");
d.showModal()});
d.addEventListener("click",e=>{if(e.target===d)d.close()});
/* ========== 1) البيانات ==========
   كل كلية = [ "اسم الكلية", "إيموجي", "مادة1|مادة2|مادة3" ]
   - تضيف كلية: زوّد سطر جديد بنفس الشكل.
   - تضيف مادة: اكتبها في آخر النص بعد علامة | */
const D=[
["الطب البشري","🩺","التشريح|الفسيولوجي|الكيمياء الحيوية|الأنسجة|الباثولوجي|الفارماكولوجي|الميكروبيولوجي|الباطنة|الجراحة|طب الأطفال|النساء والتوليد"],
["طب الأسنان","🦷","تشريح الأسنان|الأنسجة الفموية|الجراحة الفموية|علاج الجذور|التركيبات الثابتة|تقويم الأسنان|أمراض اللثة|أسنان الأطفال"],
["الصيدلة","💊","الفارماكولوجي|الكيمياء الصيدلية|العقاقير|الصيدلانيات|الكيمياء الحيوية|الميكروبيولوجي|الكيمياء التحليلية|الصيدلة الإكلينيكية"],
["العلاج الطبيعي","🦴","التشريح|الفسيولوجي|البيوميكانيكا|علاج العظام|علاج الأعصاب|العلاج الكهربي|التأهيل"],
["التمريض","🩹","أساسيات التمريض|تمريض الباطنة والجراحة|تمريض الأطفال|تمريض الأمومة|التمريض النفسي|صحة المجتمع|الفارماكولوجي"],
["الطب البيطري","🐄","تشريح الحيوان|فسيولوجيا الحيوان|الباثولوجيا البيطرية|الطفيليات|الجراحة البيطرية|الأمراض المعدية"],
["الهندسة","⚙️","الرياضيات الهندسية|الفيزياء|الميكانيكا|الرسم الهندسي|الدوائر الكهربية|مقاومة المواد|الديناميكا الحرارية|ميكانيكا الموائع|الهندسة الإنشائية"],
["الحاسبات والمعلومات","💻","أساسيات البرمجة|هياكل البيانات|قواعد البيانات|نظم التشغيل|شبكات الحاسب|الذكاء الاصطناعي|هندسة البرمجيات|تصميم الخوارزميات|الرياضيات المتقطعة"],
["العلوم","🔬","الفيزياء العامة|الكيمياء العضوية|الكيمياء غير العضوية|التفاضل والتكامل|علم النبات|علم الحيوان|الجيولوجيا|الإحصاء"],
["التجارة","📊","المحاسبة المالية|محاسبة التكاليف|الاقتصاد الجزئي|الاقتصاد الكلي|مبادئ الإدارة|التسويق|الإحصاء|القانون التجاري|التمويل"],
["الحقوق","⚖️","القانون المدني|القانون الجنائي|القانون الدستوري|القانون الإداري|قانون المرافعات|القانون التجاري|القانون الدولي|أصول الفقه"],
["الآداب","📚","اللغة العربية|اللغة الإنجليزية|التاريخ|الجغرافيا|علم النفس|علم الاجتماع|الفلسفة|الإعلام"],
["التربية","🏫","علم النفس التربوي|أصول التربية|المناهج وطرق التدريس|تكنولوجيا التعليم|القياس والتقويم|الصحة النفسية"],
["الزراعة","🌾","البساتين|المحاصيل|وقاية النبات|الأراضي والمياه|الإنتاج الحيواني|الصناعات الغذائية|الاقتصاد الزراعي"],
["الألسن","🌍","اللغويات|الترجمة|الأدب المقارن|الأدب الإنجليزي|مهارات اللغة|علم الدلالة"],
["التربية الرياضية","🏃","علم التدريب|فسيولوجيا الرياضة|التشريح الرياضي|الإصابات والتأهيل|طرق التدريس|علم الحركة"]
// نحوّل كل سطر لكائن: n = الاسم، i = الإيموجي، s = مصفوفة المواد (بنقسم النص عند علامة |)
].map(([n,i,s])=>({n,i,s:s.split("|")}));

/* ========== 2) متغيرات ودوال مساعدة ========== */
const $=x=>document.getElementById(x);   // اختصار: $("g") بدل document.getElementById("g")
let cur=-1;                              // الكلية المفتوحة حاليًا (-1 = الصفحة الرئيسية)

// رابط قائمة الشرح: بحث يوتيوب عن المادة، والجزء الأخير بيفلتر النتائج على قوائم التشغيل فقط
// لو عندك رابط مباشر لمادة معينة غيّر الدالة دي
const yt=(s,c)=>"https://www.youtube.com/results?search_query="+encodeURIComponent(s+" "+c+" شرح كامل")+"&sp=EgIQAw%253D%253D";

// رابط كتاب PDF: بحث جوجل عن المادة بصيغة pdf
const pd=(s,c)=>"https://www.google.com/search?q="+encodeURIComponent("كتاب "+s+" "+c+" filetype:pdf");

/* ========== 3) فتح صفحة ==========
   show(-1) = الصفحة الرئيسية (الكليات) | show(3) = مواد الكلية رقم 3 */
function show(i){
  cur=i;
  const c=D[i];                                      // الكلية المطلوبة (undefined لو الرئيسية)
  $("bk").hidden=i<0;                                // نظهر زرار الرجوع بس جوه الكلية
  $("t").textContent=c?c.n:"منصة الكليات";           // العنوان
  $("st").textContent=c?c.s.length+" مادة دراسية":"شرح وقوائم تشغيل وكتب PDF لكل المواد"; // السطر الصغير
  $("s").value="";                                   // نفضّي مربع البحث
  draw();                                            // نرسم الكروت
  scrollTo(0,0);                                     // نطلع لأول الصفحة
}

/* ========== 4) رسم الكروت ==========
   بتبني كود HTML للكروت وتحطه جوه الشبكة، وبتراعي كلمة البحث. */
function draw(){
  const f=$("s").value.trim(),c=D[cur];
  let h="";
  if(c){
    // جوه كلية: كارت لكل مادة فيه زرار الشرح وزرار الكتاب
    c.s.forEach(s=>{if(!f||s.includes(f))h+=`<div class="card"><div class="ic">${c.i}</div><h3>${s}</h3><p>شرح ومحاضرات وكتاب مادة ${s}</p><div class="row"><a class="b" target="_blank" rel="noopener" href="${yt(s,c.n)}">▶ قائمة الشرح</a><a class="b" target="_blank" rel="noopener" href="${pd(s,c.n)}">📕 كتاب PDF</a></div></div>`});
  }else{
    // الرئيسية: كارت لكل كلية (البحث بيدوّر في اسم الكلية ومواده)
    D.forEach((k,i)=>{if(!f||k.n.includes(f)||k.s.some(x=>x.includes(f)))h+=`<div class="card"><div class="ic">${k.i}</div><h3>${k.n}</h3><p>${k.s.length} مادة دراسية بالشرح والكتب</p><button class="b" data-i="${i}">عرض المواد</button></div>`});
  }
  // لو مفيش نتائج نعرض رسالة
  $("g").innerHTML=h||'<p class="empty">لا توجد نتائج</p>';
}

/* ========== 5) الأحداث (الضغط والكتابة) ========== */
// أي ضغطة على عنصر عليه data-i (زرار "عرض المواد" أو الرجوع) بتفتح الصفحة بالرقم ده
document.addEventListener("click",e=>{const b=e.target.closest("[data-i]");if(b)show(+b.dataset.i)});
// كل ما تكتب في البحث نعيد رسم الكروت
$("s").addEventListener("input",draw);

/* ========== 6) التشغيل ==========
   أول ما الصفحة تفتح نعرض قائمة الكليات */
show(-1);
