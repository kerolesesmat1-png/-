تطبيق حضور وانصراف للأندرويد (APK)

طريقة 1: من غير ما تنزّل أي برنامج (GitHub، مجاني)
1. اعمل حساب على github.com واضغط New repository (اسمه أي حاجة، وخليه Private).
2. اضغط "uploading an existing file" واسحب كل محتويات المجلد ده (بما فيهم مجلد .github لو اتعرض)، واضغط Commit.
   لو مجلد .github مش بيترفع بالسحب: اضغط Add file ثم Create new file، واكتب في الاسم
   .github/workflows/build.yml والصق محتوى الملف الموجود في نفس المسار، واضغط Commit.
3. افتح تاب Actions. هتلاقي Build APK شغال، استنى حوالي 3 دقايق لحد ما يبقى أخضر.
4. افتحه وانزل لتحت لقسم Artifacts واضغط attendance-apk، هيتحمّل ملف zip فيه app-debug.apk.
5. ابعت الـ APK لموبايلك وافتحه. أندرويد هيطلب تسمح بتثبيت التطبيقات من مصدر غير معروف، اسمح مرة واحدة.

طريقة 2: Android Studio
افتح المجلد ده في Android Studio واضغط Build ثم Build APK(s).

بعد التثبيت
1. اربط الشيت مرة واحدة: افتح الشيت ثم Extensions ثم Apps Script، والصق محتوى apps-script.gs،
   وبعدين Deploy ثم New deployment ثم Web app (Execute as: Me و Access: Anyone).
2. الصق الرابط اللي بينتهي بـ /exec في خانة "ربط الشيت" داخل التطبيق.
   لو عملت الربط للبرنامج على الكمبيوتر قبل كده، استخدم نفس الرابط.
