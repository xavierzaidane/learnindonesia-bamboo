import type { NewsPost } from '@/lib/types'

export const categoryBadgeStyles: Record<NewsPost['category'], string> = {
  'Platform Update': 'bg-blue-100 text-blue-700',
  'Language Tip': 'bg-purple-100 text-purple-700',
  'Cultural Spotlight': 'bg-orange-100 text-orange-700',
  'Learning Guide': 'bg-green-100 text-green-700',
  'Community': 'bg-pink-100 text-pink-700',
  'Event': 'bg-amber-100 text-amber-700',
}

export const newsPosts: NewsPost[] = [
  {
    id: 'news-1',
    slug: '5-indonesian-words-borrowed-from-dutch',
    title: "5 Indonesian Words You Didn't Know Came From Dutch",
    excerpt:
      'Indonesian borrowed hundreds of terms from Dutch. Here are five everyday words you probably use without realizing their origins.',
    category: 'Language Tip',
    thumbnail: '/assets/bali.png',
    author: {
      name: 'Rani Pratama',
      avatar: '/assets/avatar.jpeg',
      role: 'Indonesian Language Expert',
    },
    publishedAt: 'May 3, 2025',
    readTime: '4 min read',
    tags: ['vocabulary', 'history', 'dutch', 'etymology'],
    isFeatured: true,
    isNew: true,
    content: [
      {
        type: 'paragraph',
        content:
          'Dutch influence shows up in everyday Indonesian, especially in food, transport, and government terms. These borrowed words are so natural that many learners assume they are native.',
      },
      {
        type: 'heading',
        content: 'Five words hiding in plain sight',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Kantor (office) from Dutch kantoor',
          'Handuk (towel) from Dutch handdoek',
          'Kulkas (fridge) from Dutch koelkast',
          'Setir (steering wheel) from Dutch stuur',
          'Resi (receipt) from Dutch reçu',
        ],
      },
      {
        type: 'subheading',
        content: 'Why it matters for learners',
      },
      {
        type: 'paragraph',
        content:
          'Recognizing loanwords helps you guess meaning faster, especially in news headlines and signage. It also makes pronunciation easier because many retain similar sounds.',
      },
      {
        type: 'tip',
        content:
          'Look for consonant clusters like “st” and “sk”. They are less common in native Indonesian and can hint at Dutch origins.',
      },
    ],
  },
  {
    id: 'news-2',
    slug: 'new-speaking-practice-feature',
    title: 'New Speaking Practice Feature Now Available',
    excerpt:
      'Practice real conversations with guided prompts, pronunciation feedback, and instant replay. Speaking sessions are now part of every course.',
    category: 'Platform Update',
    thumbnail: '/assets/bali.png',
    author: {
      name: 'Maya Setiawan',
      avatar: '/assets/avatar.jpeg',
      role: 'Product Lead',
    },
    publishedAt: 'May 1, 2025',
    readTime: '3 min read',
    tags: ['feature', 'speaking', 'update'],
    isNew: true,
    content: [
      {
        type: 'paragraph',
        content:
          'We just launched Speaking Practice, a new way to rehearse dialogues and build confidence. You can record short answers and compare them with native audio.',
      },
      {
        type: 'heading',
        content: 'What is included',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Guided prompts for daily scenarios',
          'Instant feedback on rhythm and stress',
          'Replay and shareable clips',
        ],
      },
      {
        type: 'quote',
        content:
          'Speaking is the fastest way to turn vocabulary into real communication. This feature makes practice feel safe and repeatable.',
      },
      {
        type: 'subheading',
        content: 'How to find it',
      },
      {
        type: 'paragraph',
        content:
          'Open any lesson and look for the microphone icon. Each course now includes at least three speaking moments per module.',
      },
    ],
  },
  {
    id: 'news-3',
    slug: 'bali-arts-festival-2025',
    title: 'Bali Arts Festival 2025: What to Expect',
    excerpt:
      'From parades to workshops, Bali Arts Festival is a month-long celebration. Here is how language learners can enjoy it more deeply.',
    category: 'Cultural Spotlight',
    thumbnail: '/assets/bali.png',
    author: {
      name: 'Dimas Hartono',
      avatar: '/assets/avatar.jpeg',
      role: 'Cultural Researcher',
    },
    publishedAt: 'April 22, 2025',
    readTime: '5 min read',
    tags: ['bali', 'culture', 'festival', 'arts'],
    content: [
      {
        type: 'paragraph',
        content:
          'The Bali Arts Festival runs for nearly a month, with performances, exhibitions, and community shows across Denpasar. It is a perfect moment to connect language with culture.',
      },
      {
        type: 'heading',
        content: 'Highlights to watch for',
      },
      {
        type: 'list',
        content: '',
        items: [
          'The opening parade at Taman Werdhi Budaya',
          'Gamelan workshops with local musicians',
          'Traditional dance showcases from different regions',
        ],
      },
      {
        type: 'subheading',
        content: 'Language moments',
      },
      {
        type: 'paragraph',
        content:
          'Try greeting artists with a simple “Terima kasih, pertunjukannya indah.” You will hear cultural vocabulary you can reuse in class.',
      },
      {
        type: 'tip',
        content:
          'Bring a small notebook. Jot down unfamiliar words on signs and ask locals what they mean.',
      },
    ],
  },
  {
    id: 'news-4',
    slug: 'how-to-study-indonesian-30-minutes-a-day',
    title: 'How to Make Progress with Just 30 Minutes a Day',
    excerpt:
      'A short daily routine can beat long weekend cramming. Here is a simple plan to keep your Indonesian moving forward.',
    category: 'Learning Guide',
    thumbnail: '/assets/bali.png',
    author: {
      name: 'Nadia Putri',
      avatar: '/assets/avatar.jpeg',
      role: 'Curriculum Designer',
    },
    publishedAt: 'April 15, 2025',
    readTime: '6 min read',
    tags: ['study', 'tips', 'beginner', 'routine'],
    content: [
      {
        type: 'paragraph',
        content:
          'Short, focused sessions help you build memory and confidence. The key is variety: mix listening, speaking, and review without overloading yourself.',
      },
      {
        type: 'heading',
        content: 'A 30-minute structure',
      },
      {
        type: 'list',
        content: '',
        items: [
          '10 minutes of listening with subtitles',
          '10 minutes of guided speaking prompts',
          '10 minutes of review and notes',
        ],
      },
      {
        type: 'quote',
        content:
          'Consistency turns small sessions into real fluency. One focused habit beats five random bursts.',
      },
      {
        type: 'subheading',
        content: 'Keep it easy to start',
      },
      {
        type: 'tip',
        content:
          'Leave your next lesson open on your device. When the next session is frictionless, you are more likely to begin.',
      },
    ],
  },
  {
    id: 'news-5',
    slug: 'community-milestone-10000-learners',
    title: "We've Reached 10,000 Learners — Thank You!",
    excerpt:
      'Our community just hit a huge milestone. Here is what you helped build and what is coming next.',
    category: 'Community',
    thumbnail: '/assets/bali.png',
    author: {
      name: 'Adi Wicaksono',
      avatar: '/assets/avatar.jpeg',
      role: 'Community Manager',
    },
    publishedAt: 'April 7, 2025',
    readTime: '4 min read',
    tags: ['milestone', 'community', 'announcement'],
    content: [
      {
        type: 'paragraph',
        content:
          'Today we crossed 10,000 learners. It is inspiring to see people studying Indonesian for travel, family, work, and cultural curiosity.',
      },
      {
        type: 'heading',
        content: 'What you helped create',
      },
      {
        type: 'list',
        content: '',
        items: [
          '200+ lessons completed in the past month',
          'Weekly community study sessions',
          'A growing library of cultural notes',
        ],
      },
      {
        type: 'subheading',
        content: 'What is next',
      },
      {
        type: 'paragraph',
        content:
          'We are expanding the forum mentors and adding more interactive practice. Keep sharing your goals so we can build the right tools.',
      },
      {
        type: 'quote',
        content:
          'Language is about people. This milestone belongs to every learner who showed up and kept going.',
      },
    ],
  },
  {
    id: 'news-6',
    slug: 'understanding-indonesian-honorifics',
    title: 'Pak, Bu, Mas, Mbak — A Guide to Indonesian Honorifics',
    excerpt:
      'Honorifics show respect and warmth in Indonesian. Learn when to use each one and how to sound natural.',
    category: 'Language Tip',
    thumbnail: '/assets/bali.png',
    author: {
      name: 'Siti Nurlaila',
      avatar: '/assets/avatar.jpeg',
      role: 'Language Coach',
    },
    publishedAt: 'March 28, 2025',
    readTime: '5 min read',
    tags: ['honorifics', 'culture', 'politeness', 'grammar'],
    content: [
      {
        type: 'paragraph',
        content:
          'Honorifics in Indonesian communicate respect and familiarity. Using them well helps you sound polite without being stiff.',
      },
      {
        type: 'heading',
        content: 'Common honorifics',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Pak and Bu for older adults or formal contexts',
          'Mas and Mbak for friendly, informal respect',
          'Kak for someone a little older than you',
        ],
      },
      {
        type: 'subheading',
        content: 'Context matters',
      },
      {
        type: 'paragraph',
        content:
          'In shops or cafes, Mas or Mbak is common. In offices or official settings, Pak or Bu is safer.',
      },
      {
        type: 'tip',
        content:
          'If you are unsure, listen to how locals address someone first, then mirror their choice.',
      },
    ],
  },
  {
    id: 'news-7',
    slug: 'indonesian-language-month-october',
    title: 'October is Indonesian Language Month — Join the Events',
    excerpt:
      'From virtual workshops to local meetups, October brings extra opportunities to practice. See the highlights and join in.',
    category: 'Event',
    thumbnail: '/assets/bali.png',
    author: {
      name: 'Bima Saputra',
      avatar: '/assets/avatar.jpeg',
      role: 'Events Coordinator',
    },
    publishedAt: 'March 20, 2025',
    readTime: '3 min read',
    tags: ['event', 'language month', 'bulan bahasa'],
    content: [
      {
        type: 'paragraph',
        content:
          'October is known as Bulan Bahasa, a month celebrating Indonesian language and literature. We are hosting activities all month long.',
      },
      {
        type: 'heading',
        content: 'Upcoming events',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Weekly speaking circles on Saturday',
          'A beginner-friendly poetry reading',
          'Cultural trivia night with prizes',
        ],
      },
      {
        type: 'subheading',
        content: 'How to participate',
      },
      {
        type: 'paragraph',
        content:
          'All events are free for learners. RSVP through the Community tab and invite a friend to join your first session.',
      },
      {
        type: 'quote',
        content:
          'Even one event can spark months of progress if you keep the practice going.',
      },
    ],
  },
  {
    id: 'news-8',
    slug: 'top-mistakes-beginners-make',
    title: 'Top 7 Mistakes Indonesian Beginners Make (And How to Fix Them)',
    excerpt:
      'Avoid the most common pitfalls with quick fixes and examples. These small changes help your Indonesian sound clearer.',
    category: 'Learning Guide',
    thumbnail: '/assets/bali.png',
    author: {
      name: 'Rizky Ananda',
      avatar: '/assets/avatar.jpeg',
      role: 'Indonesian Tutor',
    },
    publishedAt: 'March 8, 2025',
    readTime: '7 min read',
    tags: ['beginner', 'mistakes', 'tips', 'grammar'],
    content: [
      {
        type: 'paragraph',
        content:
          'Beginners often make the same few mistakes, and fixing them makes your Indonesian much clearer. Focus on patterns rather than individual errors.',
      },
      {
        type: 'heading',
        content: 'Common pitfalls',
      },
      {
        type: 'list',
        content: '',
        items: [
          'Forgetting to use “sudah” or “belum” for time context',
          'Using “di” incorrectly as a prefix vs. a location marker',
          'Overusing “saya” in casual conversations',
          'Skipping classifiers like “orang” or “buah”',
        ],
      },
      {
        type: 'subheading',
        content: 'A simple fix',
      },
      {
        type: 'paragraph',
        content:
          'Record yourself and listen for repeated patterns. Then pick one habit to improve each week instead of everything at once.',
      },
      {
        type: 'tip',
        content:
          'Keep a short list of phrases you want to use every day, such as “sudah makan?” or “belum sempat.” Practice them aloud.',
      },
    ],
  },
]
