import { notFound } from 'next/navigation'
import { newsPosts } from '@/lib/data/news'
import { NewsDetails } from '@/components/news/NewsDetails'

interface NewsArticlePageProps {
	params: Promise<{
		slug: string
	}>
}

export function generateStaticParams() {
	return newsPosts.map((post) => ({ slug: post.slug }))
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
	const resolvedParams = await params
	const post = newsPosts.find((item) => item.slug === resolvedParams.slug)

	if (!post) {
		notFound()
	}

	return (
		<div className="min-h-screen ">
			<div className="max-w-7xl mx-auto px-4 py-8">
				<NewsDetails post={post} />
			</div>
		</div>
	)
}
