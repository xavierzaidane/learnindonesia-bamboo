import { ForumThread } from '@/lib/types'

export const forumThreads: ForumThread[] = [
  {
    id: '1',
    slug: 'me-prefix-confusion',
    title: 'Why does me- change to mem-, men-, meng-?',
    body: 'I keep getting confused about when me- becomes mem- or men-. Is there a rule I can memorize?',
    category: 'Grammar',
    level: 'Beginner',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://i.pravatar.cc/80?u=kartini',
      level: 'Beginner',
    },
    tags: ['me-', 'prefix', 'grammar'],
    replies: [
      {
        id: 'r1-1',
        author: {
          name: 'Budi Santoso',
          avatar: 'https://i.pravatar.cc/40?u=budi-santoso',
          level: 'Native',
        },
        content:
          'Great question! The me- prefix changes based on the first letter of the root word. Before consonants like m, b, f, or p, it becomes mem-. Before n, it becomes men-. Before g, h, k, or q, it becomes meng-. For vowels, it stays me-. Examples: minum → meminum, nukis → menulis, ganti → mengganti.',
        likes: 24,
        createdAt: '2 hours ago',
        isAccepted: true,
      },
      {
        id: 'r1-2',
        author: {
          name: 'Maria Rodriguez',
          avatar: 'https://i.pravatar.cc/40?u=maria-rodriguez',
          level: 'Intermediate',
        },
        content:
          'This explanation helped me understand too! I was always confused why some verbs had that extra consonant. Now it makes sense.',
        likes: 8,
        createdAt: '1 hour ago',
      },
      {
        id: 'r1-3',
        author: {
          name: 'Yuki Tanaka',
          avatar: 'https://i.pravatar.cc/40?u=yuki-tanaka',
          level: 'Intermediate',
        },
        content:
          "Don't forget about r- and w- at the beginning of words. When the root starts with r or w, the prefix becomes mr- or mw- respectively. For example: raba → meraba, warna → mewarna.",
        likes: 6,
        createdAt: '45 minutes ago',
      },
    ],
    views: 542,
    createdAt: '3 days ago',
    isHot: true,
  },
  {
    id: '2',
    slug: 'difference-between-sudah-and-telah',
    title: 'What is the real difference between sudah and telah?',
    body: 'My textbook says they both mean "already" but native speakers seem to use them differently. Can someone clarify?',
    category: 'Grammar',
    level: 'Intermediate',
    author: {
      name: 'James Wilson',
      avatar: 'https://i.pravatar.cc/40?u=james-wilson',
      level: 'Intermediate',
    },
    tags: ['sudah', 'telah', 'grammar'],
    replies: [
      {
        id: 'r2-1',
        author: {
          name: 'Dr. Aini Wijaya',
          avatar: 'https://i.pravatar.cc/40?u=aini-wijaya',
          level: 'Native',
        },
        content:
          'Sudah and telah are similar but have subtle differences. Telah is more formal and literary, while sudah is used in everyday conversation. Telah emphasizes the completion of an action, while sudah simply indicates that something has already happened. In casual conversation, we almost always use sudah. Telah appears more in written Indonesian or formal contexts.',
        likes: 31,
        createdAt: '1 day ago',
        isAccepted: true,
      },
      {
        id: 'r2-2',
        author: {
          name: 'Lucas Silva',
          avatar: 'https://i.pravatar.cc/40?u=lucas-silva',
          level: 'Intermediate',
        },
        content:
          "Example: 'Sudah makan?' (informal, What did you eat?) vs 'Telah selesai rapat' (formal, The meeting has been completed). This distinction has been really helpful for me!",
        likes: 15,
        createdAt: '18 hours ago',
      },
      {
        id: 'r2-3',
        author: {
          name: 'Emma Thompson',
          avatar: 'https://i.pravatar.cc/40?u=emma-thompson',
          level: 'Beginner',
        },
        content:
          'So in my daily life in Jakarta, I should primarily use sudah? That makes things easier!',
        likes: 4,
        createdAt: '12 hours ago',
      },
      {
        id: 'r2-4',
        author: {
          name: 'Raka Hermanto',
          avatar: 'https://i.pravatar.cc/40?u=raka-hermanto',
          level: 'Advanced',
        },
        content:
          'Exactly! Save telah for professional emails, news articles, and formal speeches. Your Indonesian will sound much more natural if you default to sudah in conversation.',
        likes: 11,
        createdAt: '8 hours ago',
      },
    ],
    views: 1203,
    createdAt: '5 days ago',
    isSolved: true,
  },
  {
    id: '3',
    slug: 'how-to-sound-more-natural',
    title: 'How do I stop sounding too formal in daily conversation?',
    body: 'I learned Indonesian from textbooks so I always use saya and full sentences. People say I sound like a news anchor. How can I sound more natural?',
    category: 'Phrases',
    level: 'Intermediate',
    author: {
      name: 'Philippe Dupont',
      avatar: 'https://i.pravatar.cc/40?u=philippe-dupont',
      level: 'Intermediate',
    },
    tags: ['speaking', 'informal', 'natural'],
    replies: [
      {
        id: 'r3-1',
        author: {
          name: 'Siti Nurhaliza',
          avatar: 'https://i.pravatar.cc/40?u=siti-nurhaliza',
          level: 'Native',
        },
        content:
          "Start by using 'aku' or 'gua' instead of 'saya' in informal settings. Drop subjects when they're obvious, shorten sentences, and use colloquialisms like 'nih' (this), 'tuh' (that), and 'yuk' (let's). Most importantly, listen to how locals speak and mimic their rhythm and intonation.",
        likes: 28,
        createdAt: '1 day ago',
        isAccepted: true,
      },
      {
        id: 'r3-2',
        author: {
          name: 'Thomas Mueller',
          avatar: 'https://i.pravatar.cc/40?u=thomas-mueller',
          level: 'Intermediate',
        },
        content:
          "I've started recording myself speaking and comparing with native speakers on YouTube. The difference in pace and flow is huge! Textbooks never teach you that natural rhythm.",
        likes: 19,
        createdAt: '20 hours ago',
      },
      {
        id: 'r3-3',
        author: {
          name: 'Cornelia Huang',
          avatar: 'https://i.pravatar.cc/40?u=cornelia-huang',
          level: 'Advanced',
        },
        content:
          'Also try watching Indonesian TV shows or podcasts. Shows like "Tetangga Masa Gitu?" are perfect for learning casual, everyday speech patterns.',
        likes: 14,
        createdAt: '16 hours ago',
      },
      {
        id: 'r3-4',
        author: {
          name: 'Hendri Wijaya',
          avatar: 'https://i.pravatar.cc/40?u=hendri-wijaya',
          level: 'Native',
        },
        content:
          "Don't be afraid to make mistakes when speaking casually. Native speakers appreciate the effort, and you'll learn faster from real conversations than from grammar books.",
        likes: 22,
        createdAt: '10 hours ago',
      },
      {
        id: 'r3-5',
        author: {
          name: 'Olivia Chen',
          avatar: 'https://i.pravatar.cc/40?u=olivia-chen',
          level: 'Beginner',
        },
        content: 'This is so encouraging. I was worried about being judged for my accent.',
        likes: 3,
        createdAt: '5 hours ago',
      },
    ],
    views: 892,
    createdAt: '4 days ago',
    isHot: true,
  },
  {
    id: '4',
    slug: 'bule-pronunciation-tips',
    title: 'Any tips for pronouncing "r" and "c" correctly?',
    body: 'The rolled r and the "ch" sound for c are really hard for me as an English speaker. Any practice tips?',
    category: 'Pronunciation',
    level: 'Beginner',
    author: {
      name: 'David Anderson',
      avatar: 'https://i.pravatar.cc/40?u=david-anderson',
      level: 'Beginner',
    },
    tags: ['pronunciation', 'r', 'c', 'sounds'],
    replies: [
      {
        id: 'r4-1',
        author: {
          name: 'Bambang Suryanto',
          avatar: 'https://i.pravatar.cc/40?u=bambang-suryanto',
          level: 'Native',
        },
        content:
          "For the rolled 'r', try saying 'ta ta ta' very quickly while moving your tongue against the roof of your mouth. The 'c' in Indonesian always sounds like 'ch' in English—so 'cinta' is pronounced 'chinta'. Practice: rumah (roo-mah), cinta (chinta), coreng (choreng). Recording yourself helps a lot!",
        likes: 18,
        createdAt: '2 days ago',
        isAccepted: true,
      },
      {
        id: 'r4-2',
        author: {
          name: 'Anna Kowalski',
          avatar: 'https://i.pravatar.cc/40?u=anna-kowalski',
          level: 'Intermediate',
        },
        content:
          'I found that watching Indonesian singing videos and trying to match the pronunciation helps. The rhythm of music makes it stick better than repetition exercises.',
        likes: 12,
        createdAt: '1 day ago',
      },
      {
        id: 'r4-3',
        author: {
          name: 'Paulus Hutahaean',
          avatar: 'https://i.pravatar.cc/40?u=paulus-hutahaean',
          level: 'Native',
        },
        content:
          "Don't worry if your 'r' isn't perfect at first. Many English speakers struggle with this. The good news is Indonesians are very forgiving—just keep practicing and it will come naturally!",
        likes: 9,
        createdAt: '18 hours ago',
      },
    ],
    views: 356,
    createdAt: '6 days ago',
  },
  {
    id: '5',
    slug: 'javanese-vs-indonesian',
    title: 'How different is Javanese from Bahasa Indonesia?',
    body: 'I am moving to Yogyakarta and wondering if I should learn some Javanese too or if Indonesian is enough for daily life there.',
    category: 'Culture',
    level: 'All Levels',
    author: {
      name: 'Natalia Petrov',
      avatar: 'https://i.pravatar.cc/40?u=natalia-petrov',
      level: 'Beginner',
    },
    tags: ['javanese', 'culture', 'regional'],
    replies: [
      {
        id: 'r5-1',
        author: {
          name: 'Pak Wahyu',
          avatar: 'https://i.pravatar.cc/40?u=pak-wahyu',
          level: 'Native',
        },
        content:
          "Indonesian is absolutely enough for daily life in Yogyakarta. You'll get by with Indonesian everywhere. However, learning some Javanese shows respect and locals really appreciate the effort! Common greetings like 'Sugeng pagi' (good morning) and 'Nuwun sewu' (excuse me) go a long way. Javanese has different speech levels based on politeness, which is a fun linguistic challenge.",
        likes: 27,
        createdAt: '3 days ago',
        isAccepted: true,
      },
      {
        id: 'r5-2',
        author: {
          name: 'Saskia van der Berg',
          avatar: 'https://i.pravatar.cc/40?u=saskia-van-der-berg',
          level: 'Intermediate',
        },
        content:
          'I moved to Surabaya and barely touched Javanese. Everyone speaks Indonesian there. But yes, learning a few phrases helped me connect with locals much better.',
        likes: 11,
        createdAt: '2 days ago',
      },
      {
        id: 'r5-3',
        author: {
          name: 'Sri Mulyani',
          avatar: 'https://i.pravatar.cc/40?u=sri-mulyani',
          level: 'Native',
        },
        content:
          "Javanese has completely different vocabulary and grammar. If you're interested, start after mastering Indonesian. But honestly, for a foreigner trying to settle into a city, Indonesian is your priority. Javanese is more for deeper cultural immersion.",
        likes: 8,
        createdAt: '1 day ago',
      },
      {
        id: 'r5-4',
        author: {
          name: 'Gabriel Ferreira',
          avatar: 'https://i.pravatar.cc/40?u=gabriel-ferreira',
          level: 'Advanced',
        },
        content:
          'After 2 years in Yogyakarta, I picked up some Javanese naturally through friends. No regrets—it enriched my experience significantly. Just start with Indonesian first.',
        likes: 6,
        createdAt: '18 hours ago',
      },
    ],
    views: 1045,
    createdAt: '4 days ago',
    isSolved: true,
  },
  {
    id: '6',
    slug: 'ber-prefix-usage',
    title: 'When do I use ber- vs me- for the same verb?',
    body: 'Some verbs seem to work with both ber- and me- but with different meanings. Can someone break this down with examples?',
    category: 'Grammar',
    level: 'Intermediate',
    author: {
      name: 'Michael Zhang',
      avatar: 'https://i.pravatar.cc/40?u=michael-zhang',
      level: 'Intermediate',
    },
    tags: ['ber-', 'me-', 'prefix', 'verbs'],
    replies: [
      {
        id: 'r6-1',
        author: {
          name: 'Prof. Supomo',
          avatar: 'https://i.pravatar.cc/40?u=prof-supomo',
          level: 'Native',
        },
        content:
          'Excellent observation! Generally, ber- indicates an intransitive action (no object), while me- creates a transitive verb (requires an object). Example: "berlari" (to run, no object) vs "melari" (to run away with something). Another: "bermain" (to play) vs "memain" (to play/perform something). The ber- form is more about the state or action itself, while me- involves acting upon something.',
        likes: 22,
        createdAt: '2 days ago',
        isAccepted: true,
      },
      {
        id: 'r6-2',
        author: {
          name: 'Isabel Santos',
          avatar: 'https://i.pravatar.cc/40?u=isabel-santos',
          level: 'Intermediate',
        },
        content:
          'So "Saya berlari di taman" (I run in the park) vs "Saya melari pencuri itu" (I run after that thief)? That makes sense!',
        likes: 10,
        createdAt: '1 day ago',
      },
      {
        id: 'r6-3',
        author: {
          name: 'Darmawan Kusuma',
          avatar: 'https://i.pravatar.cc/40?u=darmawan-kusuma',
          level: 'Native',
        },
        content:
          "One more thing to note: some verbs ONLY take ber- or me-, not both. The dictionary is your best friend here. As you read more, you'll develop an intuition for which prefix to use.",
        likes: 8,
        createdAt: '20 hours ago',
      },
      {
        id: 'r6-4',
        author: {
          name: 'Henrik Larsson',
          avatar: 'https://i.pravatar.cc/40?u=henrik-larsson',
          level: 'Advanced',
        },
        content:
          'Indonesian verb prefixes are complex! Trying to remember all the rules at once is overwhelming. Practice by reading native texts and noting which prefix is used, then check a reference. Active learning beats passively memorizing rules.',
        likes: 9,
        createdAt: '12 hours ago',
      },
    ],
    views: 678,
    createdAt: '1 week ago',
  },
  {
    id: '7',
    slug: 'learning-resources',
    title: 'Best resources for learning Indonesian in 2025?',
    body: 'I just started learning Bahasa Indonesia. Besides this platform, what apps, YouTube channels or books do you recommend?',
    category: 'General',
    level: 'Beginner',
    author: {
      name: 'Robert Kim',
      avatar: 'https://i.pravatar.cc/40?u=robert-kim',
      level: 'Beginner',
    },
    tags: ['resources', 'beginner', 'tips'],
    replies: [
      {
        id: 'r7-1',
        author: {
          name: 'Kita Belajar Indonesia',
          avatar: 'https://i.pravatar.cc/40?u=kita-belajar',
          level: 'Native',
        },
        content:
          "YouTube: Try 'Kok Bisa?', 'Learn Indonesian with Eka', and 'Gus Durry'. Apps: Duolingo is good for basics, but supplement with Drops for vocabulary. Books: 'A Reference Grammar of Indonesian' by James Sneddon is dense but thorough. Most importantly, find a language exchange partner!",
        likes: 19,
        createdAt: '5 days ago',
        isAccepted: true,
      },
      {
        id: 'r7-2',
        author: {
          name: 'Marco Rossi',
          avatar: 'https://i.pravatar.cc/40?u=marco-rossi',
          level: 'Intermediate',
        },
        content:
          'Tandem app is fantastic for finding language partners. I practice with native speakers 3 times a week, and my confidence has skyrocketed!',
        likes: 14,
        createdAt: '4 days ago',
      },
      {
        id: 'r7-3',
        author: {
          name: 'Jasmine Ooi',
          avatar: 'https://i.pravatar.cc/40?u=jasmine-ooi',
          level: 'Advanced',
        },
        content:
          "Immersion is key! Watch Indonesian films and shows with subtitles. Start with children's content like 'Upin & Ipin', then move to more complex material. Your brain absorbs context naturally this way.",
        likes: 11,
        createdAt: '3 days ago',
      },
      {
        id: 'r7-4',
        author: {
          name: 'Lola Fernandes',
          avatar: 'https://i.pravatar.cc/40?u=lola-fernandes',
          level: 'Beginner',
        },
        content: 'Thank you all! I will definitely check these out. I am excited to start!',
        likes: 2,
        createdAt: '2 days ago',
      },
    ],
    views: 1127,
    createdAt: '2 weeks ago',
    isPinned: true,
  },
  {
    id: '8',
    slug: 'formal-writing-tips',
    title: 'Tips for writing formal Indonesian emails?',
    body: 'I need to write professional emails in Indonesian for work. What are the key phrases and structure I should follow?',
    category: 'Writing',
    level: 'Intermediate',
    author: {
      name: 'Christine Weber',
      avatar: 'https://i.pravatar.cc/40?u=christine-weber',
      level: 'Intermediate',
    },
    tags: ['writing', 'formal', 'email', 'professional'],
    replies: [
      {
        id: 'r8-1',
        author: {
          name: 'Dr. Hartono Wijaya',
          avatar: 'https://i.pravatar.cc/40?u=hartono-wijaya',
          level: 'Native',
        },
        content:
          "Formal Indonesian emails follow this structure: Greeting (Kepada Yth. [Mr./Ms. Name]),  opening phrase (Dengan hormat, = With respect), body paragraph(s) with clear points, closing with 'Hormat saya' or 'Salam hormat', then sign your full name. Always use 'Anda' (formal you), never 'kamu'. Avoid slang entirely. Use 'kami' for 'we' unless speaking on behalf of yourself only.",
        likes: 25,
        createdAt: '1 week ago',
        isAccepted: true,
      },
      {
        id: 'r8-2',
        author: {
          name: 'Petra Novák',
          avatar: 'https://i.pravatar.cc/40?u=petra-novak',
          level: 'Advanced',
        },
        content:
          'Subject lines are often longer in Indonesian than English and more descriptive. Example: "Permintaan Informasi Mengenai Jadwal Proyek Fase Kedua" instead of just "Project Timeline". Clarity is valued.',
        likes: 11,
        createdAt: '6 days ago',
      },
      {
        id: 'r8-3',
        author: {
          name: 'Susi Handayani',
          avatar: 'https://i.pravatar.cc/40?u=susi-handayani',
          level: 'Native',
        },
        content:
          'Common opening phrases: "Kami dengan ini ingin menyampaikan..." (We hereby wish to inform...), "Berkaitan dengan..." (Regarding...), "Mengacu pada..." (With reference to...). Avoid Microsoft translate—run your draft by a native speaker first!',
        likes: 8,
        createdAt: '5 days ago',
      },
      {
        id: 'r8-4',
        author: {
          name: 'Lucas Ferreira',
          avatar: 'https://i.pravatar.cc/40?u=lucas-ferreira',
          level: 'Intermediate',
        },
        content:
          "One more tip: Indonesian business culture values politeness highly. Never be blunt or direct. Soften requests with phrases like 'Jika Anda berkenan' (If you would be so kind) or 'Apakah Anda dapat...' (Would you be able to...).",
        likes: 6,
        createdAt: '3 days ago',
      },
    ],
    views: 734,
    createdAt: '2 weeks ago',
  },
]
