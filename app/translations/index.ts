export const translations = {
    en: {
        nav: {
            home: 'Home',
            about_us: 'About us',
            courses: 'Courses',
            instructors: 'Instructors',
            // Add more translations
        },
        search: {
            search: 'Search',
        },
        login: {
            login_signup: 'Login / Sign up',
        },
        learnfaster:{
            title: 'Learn faster, with  ',
            description: 'Learn anywhere, finish couses and pass tests!',
            button: 'Discover courses',
            paragraph: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
            
        }
        // Add more sections
    },
    ar: {
        nav: {
            home: 'الرئيسية',
            about_us: 'من نحن',
            courses: 'الدورات',
            instructors: 'المدربين',
            // Add more translations
        },
        search: {
            search: 'بحث',
        },
        login: {
            login_signup: 'تسجيل الدخول / التسجيل',
        },
        learnfaster:{
            title: 'تعلم بشكل أسرع, مع  ',
            description: 'تعلم بشكل أسرع, مع ED max',
            button: 'استكشف الدورات',
            paragraph: 'من المعروف منذ زمن طويل أن القارئ سوف يشتت انتباهه المحتوى القابل للقراءة في الصفحة عند النظر إلى شكلها الخارجي. والهدف من استخدام لوريم إيبسوم هو أنه يحتوي على توزيع طبيعي إلى حد ما للأحرف، على عكس استخدام',
        },
        // Add more sections
    }
};

export type LanguageKey = keyof typeof translations; 