import { NavBarText } from '@components/Text'

import GlowingButton from '@components/GlowingButton'
import classnames, {
  alignItems,
  backgroundColor,
  display,
  filters,
  flexDirection,
  gap,
  height,
  inset,
  justifyContent,
  margin,
  maxWidth,
  padding,
  position,
  transforms,
  transitionsAndAnimations,
  width,
  zIndex,
} from 'classnames/tailwind'
import useScrollDirection from 'hooks/useScrollDirection'

const headerContainer = (visible: boolean) =>
  classnames(
    backgroundColor('bg-transparent'),
    filters('backdrop-blur-md'),
    transforms(
      'transform-gpu',
      !visible ? 'translate-y-full-negative' : 'translate-y-0'
    ),
    transitionsAndAnimations('transition-transform', 'duration-300'),
    inset('left-0', 'top-0'),
    margin('mx-auto'),
    width('w-full'),
    maxWidth('max-w-7xl'),
    height('h-16'),
    justifyContent('justify-end'),
    alignItems('items-center'),
    position('fixed'),
    padding('py-4', 'px-5'),
    zIndex('z-10')
  )

const navbarContainer = classnames(
  display('flex'),
  justifyContent('justify-end'),
  alignItems('items-center'),
  width('w-full'),
  gap('gap-3')
)

const navListContainer = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-end'),
  alignItems('items-center'),
  gap('gap-3')
)

const linksList = [
  { buttonName: 'home', address: '#home' },
  { buttonName: 'about', address: '#about' },
]

const LinksList = () => {
  return (
    <ul class={navListContainer}>
      {linksList.map((link) => (
        <li>
          <a href={link.address}>
            <NavBarText>{link.buttonName}</NavBarText>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function () {
  const scrollDirection = useScrollDirection('up')

  return (
    <header
      className={headerContainer(scrollDirection === 'up' ? true : false)}
    >
      <nav className={navbarContainer}>
        <LinksList />
        <GlowingButton />
      </nav>
    </header>
  )
}
