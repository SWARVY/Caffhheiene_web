// 'use client'

// import ProgressBar from '@/components/ProgressBar'
// import { TOP_NAVBAR } from '@/constants/navbar'
// import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'
// import Link from 'next/link'
// import { useEffect, useMemo, useRef, useState } from 'react'
// import { throttle } from 'lodash'
// import { useRecoilState } from 'recoil'
// import darkModeState from '@/atom/darkMode'
// import { LogoSVG } from '../../public/svgs'
// import NavigatorButton from './NavigatorButton'

// export default function TopNavigator() {
//   const [visible, setVisible] = useState(true)
//   const [darkMode, setDarkMode] = useRecoilState(darkModeState)
//   const beforeScrollY = useRef(0)

//   const handleDarkMode = () => {
//     setDarkMode((state) => !state)
//   }

//   const handleScroll = useMemo(
//     () =>
//       throttle(() => {
//         const currentScrollY = window.scrollY

//         if (beforeScrollY.current < currentScrollY) {
//           setVisible(false)
//         } else {
//           setVisible(true)
//         }
//         beforeScrollY.current = currentScrollY
//       }, 250),
//     [beforeScrollY]
//   )

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//   }, [darkMode])

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll)
//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [handleScroll])

//   return (
//     <nav className="fixed left-0 top-0 z-50 w-full flex-col items-center bg-opacity-60 font-BlogTitle text-slate-500 backdrop-blur-sm dark:bg-opacity-60 dark:text-white">
//       {visible ? (
//         <div className="flex w-full items-center justify-center p-2">
//           <div className="flex w-full max-w-3xl items-center justify-between py-5 font-bold">
//             <div className="flex h-full w-full items-center gap-x-3">
//               <Link
//                 href="/"
//                 className="fill-slate-500 transition duration-200 ease-in hover:brightness-50 dark:fill-white">
//                 <LogoSVG className="h-12 w-24 drop-shadow-md" />
//               </Link>
//               <ul className="flex gap-2">
//                 {TOP_NAVBAR.tags.map(({ tag, link }) => (
//                   <NavigatorButton tag={tag} link={link} />
//                 ))}
//               </ul>
//             </div>
//             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-opacity-50 transition ease-in hover:bg-white_hover dark:hover:bg-neutral-600">
//               {darkMode ? (
//                 <MoonIcon
//                   className="h-6 w-6 text-yellow-400 drop-shadow-md"
//                   onClick={handleDarkMode}
//                 />
//               ) : (
//                 <SunIcon
//                   className="h-6 w-6 text-yellow-400 drop-shadow-md"
//                   onClick={handleDarkMode}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       ) : null}
//       <ProgressBar />
//     </nav>
//   )
// }
