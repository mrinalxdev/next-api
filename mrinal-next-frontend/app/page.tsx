import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="text-red-400">Hello from Nextjs</h1>
      </div>
    </main>
  )
}
