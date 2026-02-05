// 'use client'

// import { useEffect } from 'react'
// import { useRouter, usePathname } from 'next/navigation'
// import { useAuth } from './AuthContext'

// interface Props {
//   children: React.ReactNode
// }

// export default function PrivateRoute({ children }: Props) {
//   const { isAuthenticated } = useAuth()
//   const router = useRouter()
//   const pathname = usePathname()

//   useEffect(() => {
//     if (!isAuthenticated) {
//       router.replace(`/login?redirect=${pathname}`)
//     }
//   }, [isAuthenticated, router, pathname])

//   if (!isAuthenticated) return null // or spinner

//   return <>{children}</>
// }
