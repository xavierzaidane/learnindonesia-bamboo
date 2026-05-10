import type { NewsPost } from '@/lib/types'

export const blogCategoryBadgeStyles: Record<NewsPost['category'], string> = {
  'Platform Update': 'bg-blue-100 text-blue-700',
  'Language Tip': 'bg-purple-100 text-purple-700',
  'Cultural Spotlight': 'bg-orange-100 text-orange-700',
  'Learning Guide': 'bg-green-100 text-green-700',
  'Community': 'bg-pink-100 text-pink-700',
  'Event': 'bg-amber-100 text-amber-700',
}

export const blogPosts: NewsPost[] = [
  {
    id: 'blog-1',
    slug: 'mastering-indonesian-grammar',
    title: 'Mastering Indonesian Grammar: A Beginner\'s Guide to Tenses and Affixes',
    excerpt:
      'Discover the fundamental rules of Indonesian grammar, from basic tenses to the complex system of prefixes and suffixes that shape the language.',
    category: 'Learning Guide',
    thumbnail: '/assets/speaking.png',
    author: {
      name: 'Dr. Bambang Sutrisno',
      avatar: '/assets/avatar.jpeg',
      role: 'Grammar Specialist',
    },
    publishedAt: 'May 6, 2025',
    readTime: '8 min read',
    tags: ['grammar', 'beginner', 'tenses', 'affixes'],
    isFeatured: true,
    isNew: true,
    content: [
      {
        type: 'paragraph',
        content:
          'Indonesian grammar might seem complex at first, but it follows clear, logical patterns. Unlike English, Indonesian has no verb conjugations for tense, which actually makes learning easier once you understand the core concepts.',
      },
      {
        type: 'heading',
        content: 'The Power of Affixes',
      },
      {
        type: 'paragraph',
        content:
          'The most distinctive feature of Indonesian is its affix system. By adding prefixes like "me-", "di-", and suffixes like "-kan", "-i", you can dramatically change word meaning and function.',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Prefix "me-": Makes verbs active (baca → membaca)',
          'Prefix "di-": Makes verbs passive (baca → dibaca)',
          'Suffix "-kan": Makes verbs transitive (ambil → ambilkan)',
          'Suffix "-i": Adds repeated action (meng-isi → isi)',
        ],
      },
      {
        type: 'subheading',
        content: 'Time Context with Sudah and Belum',
      },
      {
        type: 'paragraph',
        content:
          'Instead of changing verb forms, Indonesian uses context markers. "Sudah" means completed action, while "belum" means not yet. This is much simpler than English tenses.',
      },
      {
        type: 'tip',
        content:
          'Practice affixes daily. They are the key to understanding Indonesian grammar and expanding your vocabulary exponentially.',
      },
    ],
  },
  {
    id: 'blog-2',
    slug: 'conversational-indonesian-phrases',
    title: 'Top 50 Conversational Indonesian Phrases for Real-World Situations',
    excerpt:
      'Go beyond textbook Indonesian with practical phrases you\'ll hear in cafes, markets, and daily interactions. Sound more natural and confident.',
    category: 'Language Tip',
    thumbnail: '/assets/speaking.png',
    author: {
      name: 'Sinta Wijaya',
      avatar: '/assets/avatar.jpeg',
      role: 'Native Speaker Coach',
    },
    publishedAt: 'May 4, 2025',
    readTime: '6 min read',
    tags: ['conversation', 'phrases', 'practical', 'spoken'],
    isNew: true,
    content: [
      {
        type: 'paragraph',
        content:
          'Natural conversation requires more than grammar rules. These 50 phrases will help you blend in and communicate smoothly in everyday Indonesian life.',
      },
      {
        type: 'heading',
        content: 'In the Market (Di Pasar)',
      },
      {
        type: 'list',
        content: '',
        items: [
          '"Berapa harganya?" – How much is it?',
          '"Boleh lebih murah?" – Can it be cheaper?',
          '"Itu bagus, kualitas bagus." – That\'s good quality.',
          '"Saya hanya punya uang seperti ini." – I only have this much money.',
        ],
      },
      {
        type: 'heading',
        content: 'At a Restaurant (Di Restoran)',
      },
      {
        type: 'list',
        content: '',
        items: [
          '"Saya mau makan nasi goreng." – I want to eat fried rice.',
          '"Pedes atau tidak pedes?" – Spicy or not spicy?',
          '"Teh dingin, tanpa gula." – Cold tea, no sugar.',
          '"Bonnya berapa?" – How much is the bill?',
        ],
      },
      {
        type: 'tip',
        content:
          'Record natives saying these phrases. Listen multiple times and mirror their intonation for authentic-sounding speech.',
      },
    ],
  },
  {
    id: 'blog-3',
    slug: 'indonesian-music-language-learning',
    title: 'Learning Indonesian Through Music: Lyrics, Artists, and Methods',
    excerpt:
      'Music is a powerful tool for language learning. Explore how to use Indonesian songs to improve listening and pick up natural speech patterns.',
    category: 'Learning Guide',
    thumbnail: '/assets/speaking.png',
    author: {
      name: 'Hadi Sutrisno',
      avatar: '/assets/avatar.jpeg',
      role: 'Cultural Educator',
    },
    publishedAt: 'April 28, 2025',
    readTime: '7 min read',
    tags: ['music', 'listening', 'culture', 'entertainment'],
    isFeatured: true,
    content: [
      {
        type: 'paragraph',
        content:
          'Indonesian music spans dangdut, pop, folk, and rock. Each genre offers different vocabulary and cultural insights. Using songs in your study routine is both enjoyable and effective.',
      },
      {
        type: 'heading',
        content: 'Recommended Artists to Listen To',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Koes Plus – Classic folk, easy-to-understand lyrics',
          'Rhoma Irama – Dangdut legend, colloquial language',
          'Anggun – Modern pop with clear enunciation',
          'Payung Teduh – Contemporary indie, poetic lyrics',
          'Iwan Fals – Political and social commentary, engaging stories',
        ],
      },
      {
        type: 'subheading',
        content: 'How to Learn from Music',
      },
      {
        type: 'paragraph',
        content:
          'First, listen without lyrics. Then read the lyrics while listening. Look up unfamiliar words. Finally, sing along at your own pace. Repeat the process with new songs weekly.',
      },
      {
        type: 'quote',
        content:
          'Music makes language stick in a way textbooks never can. It engages emotion and memory simultaneously.',
      },
    ],
  },
  {
    id: 'blog-4',
    slug: 'balinese-vs-indonesian',
    title: 'Balinese vs. Indonesian: Understanding Regional Dialects and Languages',
    excerpt:
      'Indonesia has hundreds of languages. Learn how Balinese, Javanese, and Sundanese differ from standard Indonesian and why these distinctions matter.',
    category: 'Cultural Spotlight',
    thumbnail: '/assets/speaking.png',
    author: {
      name: 'Ketut Rinas',
      avatar: '/assets/avatar.jpeg',
      role: 'Linguistic Anthropologist',
    },
    publishedAt: 'April 20, 2025',
    readTime: '9 min read',
    tags: ['balinese', 'dialects', 'culture', 'regions'],
    content: [
      {
        type: 'paragraph',
        content:
          'Standard Indonesian (Bahasa Indonesia) is the official language, taught in schools and used in media. But regional languages like Balinese carry deep cultural significance and are still spoken daily by millions.',
      },
      {
        type: 'heading',
        content: 'The Major Languages of Indonesia',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Javanese (Basa Jawa) – Spoken by 80+ million, complex politeness levels',
          'Balinese (Bhasa Bali) – Hindu influence, ceremonial importance',
          'Sundanese (Basa Sunda) – Melodic, poetic, popular in West Java',
          'Madurese (Basa Madura) – Strong naval and maritime heritage',
        ],
      },
      {
        type: 'subheading',
        content: 'Politeness Levels in Javanese',
      },
      {
        type: 'paragraph',
        content:
          'Javanese has three speech levels: Ngoko (casual), Krama (formal), and Krama Inggil (highly respectful). Using the wrong level can be offensive, making this system crucial for cultural respect.',
      },
      {
        type: 'tip',
        content:
          'If visiting a region, learning even basic greetings in the local language shows tremendous respect and opens doors to deeper cultural connection.',
      },
    ],
  },
  {
    id: 'blog-5',
    slug: 'indonesian-food-vocabulary',
    title: 'Taste the Language: Essential Indonesian Food Vocabulary and Dining Customs',
    excerpt:
      'Food is culture. Explore Indonesian cuisine vocabulary and dining etiquette to deepen your connection with the language and its people.',
    category: 'Language Tip',
    thumbnail: '/assets/speaking.png',
    author: {
      name: 'Chef Wayan Merta',
      avatar: '/assets/avatar.jpeg',
      role: 'Culinary Educator',
    },
    publishedAt: 'April 15, 2025',
    readTime: '5 min read',
    tags: ['food', 'vocabulary', 'culture', 'dining'],
    content: [
      {
        type: 'paragraph',
        content:
          'Indonesian cuisine is renowned worldwide. Learning food vocabulary opens doors to markets, restaurants, cooking classes, and meaningful conversations about culture.',
      },
      {
        type: 'heading',
        content: 'Essential Dishes to Know',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Nasi goreng – Fried rice (national dish)',
          'Gado-gado – Vegetable salad with peanut sauce',
          'Soto Ayam – Turmeric chicken soup',
          'Satay (Sate) – Grilled meat skewers',
          'Lumpia – Spring rolls',
          'Rendang – Spiced meat cooked in coconut milk',
        ],
      },
      {
        type: 'subheading',
        content: 'Dining Etiquette',
      },
      {
        type: 'paragraph',
        content:
          'Always say "Selamat makan" (enjoy your meal) before eating with others. Accept food graciously, even if you cannot eat it all. Compliment the cook; it\'s a sign of respect and gratitude.',
      },
      {
        type: 'quote',
        content:
          'Food is the universal language. Learning to savor and discuss Indonesian cuisine is learning to embrace Indonesian culture.',
      },
    ],
  },
  {
    id: 'blog-6',
    slug: 'java-cultural-traditions',
    title: 'Java\'s Rich Traditions: Wayang Kulit, Batik, and Language',
    excerpt:
      'Javanese culture is ancient and intricate. Discover how wayang puppet theater, batik art, and traditional language preserve centuries of wisdom.',
    category: 'Cultural Spotlight',
    thumbnail: '/assets/speaking.png',
    author: {
      name: 'Professor Handoko',
      avatar: '/assets/avatar.jpeg',
      role: 'Cultural Studies Scholar',
    },
    publishedAt: 'April 8, 2025',
    readTime: '10 min read',
    tags: ['java', 'culture', 'traditions', 'art'],
    content: [
      {
        type: 'paragraph',
        content:
          'Java is the cultural heart of Indonesia. Its traditions span centuries, influencing modern Indonesian society profoundly. Understanding these traditions deepens language learning immensely.',
      },
      {
        type: 'heading',
        content: 'Wayang Kulit: Shadow Puppet Theater',
      },
      {
        type: 'paragraph',
        content:
          'Wayang Kulit performances tell stories from Hindu epics like the Ramayana and Mahabharata. A master puppeteer (dalang) uses an array of intricately carved leather puppets to create tales of heroism, morality, and adventure.',
      },
      {
        type: 'subheading',
        content: 'Batik: The Art of Wax Resistance',
      },
      {
        type: 'paragraph',
        content:
          'Batik is Indonesia\'s UNESCO-recognized cultural heritage. Each pattern carries symbolic meaning, and the process requires extraordinary patience and skill. Wearing batik is a statement of cultural pride.',
      },
      {
        type: 'tip',
        content:
          'Visit a wayang performance or batik workshop. Seeing these arts live and asking questions in Indonesian will enrich your learning far beyond classroom study.',
      },
    ],
  },
  {
    id: 'blog-7',
    slug: 'speaking-confidence-tips',
    title: 'Building Speaking Confidence: Overcoming Fear and Speaking Naturally',
    excerpt:
      'Fear of making mistakes stops many learners from speaking. Discover practical strategies to build confidence and embrace mistakes as learning opportunities.',
    category: 'Learning Guide',
    thumbnail: '/assets/speaking.png',
    author: {
      name: 'Lisa Anderson',
      avatar: '/assets/avatar.jpeg',
      role: 'Speech Coach',
    },
    publishedAt: 'March 30, 2025',
    readTime: '6 min read',
    tags: ['speaking', 'confidence', 'psychology', 'tips'],
    content: [
      {
        type: 'paragraph',
        content:
          'Speaking in a new language is intimidating. But hesitation stems from perfectionism, not from actual skill gaps. Here\'s how to shift your mindset and speak with confidence.',
      },
      {
        type: 'heading',
        content: 'The Confidence Paradox',
      },
      {
        type: 'paragraph',
        content:
          'Native speakers make mistakes constantly. They pause, restart sentences, and use filler words. This is normal. Instead of aiming for perfection, aim for clarity and persistence.',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Start with writing. Written thoughts become spoken words more easily.',
          'Practice alone first. Record yourself and listen for improvement.',
          'Embrace the pause. Silence while thinking is natural and acceptable.',
          'Celebrate small wins. Every word spoken is progress.',
        ],
      },
      {
        type: 'subheading',
        content: 'Handling Misunderstandings',
      },
      {
        type: 'paragraph',
        content:
          'If misunderstood, ask for clarification: "Bisa ulangi?" (Can you repeat?). Native speakers do this too. Asking for help shows strength, not weakness.',
      },
      {
        type: 'quote',
        content:
          'Confidence is not the absence of fear. It\'s taking action despite the fear.',
      },
    ],
  },
  {
    id: 'blog-8',
    slug: 'indonesian-digital-nomad-guide',
    title: 'Digital Nomad\'s Guide to Indonesian Language and Culture',
    excerpt:
      'Working remotely in Indonesia? Explore language tips, cultural norms, and practical advice for a smooth and enriching digital nomad experience.',
    category: 'Community',
    thumbnail: '/assets/speaking.png',
    author: {
      name: 'Marcus Chen',
      avatar: '/assets/avatar.jpeg',
      role: 'Digital Nomad & Freelancer',
    },
    publishedAt: 'March 15, 2025',
    readTime: '7 min read',
    tags: ['digital nomad', 'practical', 'expat', 'community'],
    content: [
      {
        type: 'paragraph',
        content:
          'Thousands of digital nomads now call Indonesia home, drawn by affordability, culture, and community. Succeeding here requires more than language skills—it requires cultural awareness.',
      },
      {
        type: 'heading',
        content: 'Language for Coworking and Accommodation',
      },
      {
        type: 'list',
        content: '',
        items: [
          '"Berapa harga per bulan?" – What\'s the monthly rent?',
          '"Internet cepat?" – Is the internet fast?',
          '"Ada kursi ergonomis?" – Do you have an ergonomic chair?',
          '"Bisa fleksibel?" – Can it be flexible (short-term)?',
        ],
      },
      {
        type: 'subheading',
        content: 'Cultural Norms to Respect',
      },
      {
        type: 'paragraph',
        content:
          'Indonesians value respect and humility. Avoid loud voices in public, never touch someone\'s head, and always use your right hand for eating and greeting. These small gestures go a long way.',
      },
      {
        type: 'tip',
        content:
          'Join local meetups and coworking spaces. Building genuine friendships opens cultural doors that formal study never can.',
      },
    ],
  },
]
