import {
  animation,
  backgroundClip,
  backgroundImage,
  classnames,
  fontSize,
  fontWeight,
  gradientColorStops,
  lineHeight,
  textAlign,
  textColor,
} from 'classnames/tailwind'
import type ChildrenProp from 'models/ChildrenProp'

const whiteText = classnames(textColor('text-white'))

const baseText = classnames(whiteText, textAlign('text-left'))
export const homePageText = classnames(baseText, fontWeight('font-medium'))

const linkText = classnames(textColor('text-blue-300'))
export function LinkText({ children }: ChildrenProp) {
  return <p className={linkText}>{children}</p>
}

const sectionHeaderText = classnames(
  baseText,
  fontSize('text-xl', 'sm:text-3xl')
)
export function SectionHeaderText({ children }: ChildrenProp) {
  return <h3 className={sectionHeaderText}>{children}</h3>
}

const aboutSectionText = classnames(baseText, textAlign('!text-justify'))
export function AboutSectionText({ children }: ChildrenProp) {
  return <h3 className={aboutSectionText}>{children}</h3>
}

const hoverText = classnames(
  textColor('hover:text-yellow-100', 'group-hover:text-yellow-100')
)

const gradientText = classnames(
  textColor('text-transparent'),
  backgroundClip('bg-clip-text'),
  backgroundImage('bg-gradient-to-r'),
  gradientColorStops('from-pink-300', 'via-red-500', 'to-yellow-300'),
  animation('animate-shimmering')
)

const nameText = classnames(
  gradientText,
  fontSize('text-4xl', 'sm:text-6xl', 'md:text-8xl'),
  fontWeight('font-bold')
)
export function NameText({ children }: ChildrenProp) {
  return <h1 className={nameText}>{children}</h1>
}

const aboveNameText = classnames(
  baseText,
  fontSize('text-lg', 'sm:text-xl', 'md:text-3xl')
)
export function AboveNameText({ children }: ChildrenProp) {
  return <h2 className={aboveNameText}>{children}</h2>
}

const belowNameText = classnames(
  baseText,
  fontSize('text-xl', 'sm:text-2xl', 'md:text-4xl')
)
export function BelowNameText({ children }: ChildrenProp) {
  return <h2 className={belowNameText}>{children}</h2>
}

const projectTitle = classnames(
  gradientText,
  fontSize('text-xl', 'sm:text-4xl'),
  fontWeight('font-bold')
)
export function ProjectTitle({ children }: ChildrenProp) {
  return <h3 className={projectTitle}>{children}</h3>
}

const projectSubtitle = classnames(
  baseText,
  fontSize('text-base', 'sm:text-xl', 'md:text-2xl')
)
export function ProjectSubtitle({ children }: ChildrenProp) {
  return <h4 className={projectSubtitle}>{children}</h4>
}

const projectDescription = classnames(
  baseText,
  lineHeight('leading-tight'),
  fontSize('text-sm', 'sm:text-base', 'md:text-xl'),
  textAlign('text-justify')
)
export function ProjectDescription({ children }: ChildrenProp) {
  return <p className={projectDescription}>{children}</p>
}

const technologyName = classnames(
  hoverText,
  baseText,
  fontSize('text-base', 'sm:text-xl', 'md:text-2xl'),
  fontWeight('font-semibold')
)
export function TechnologyName({ children }: ChildrenProp) {
  return <p className={technologyName}>{children}</p>
}

const navBarText = classnames(
  hoverText,
  baseText,
  fontSize('text-base', 'sm:text-lg'),
  fontWeight('font-medium')
)
export function NavBarText({ children }: ChildrenProp) {
  return <p className={navBarText}>{children}</p>
}

const sectionNameText = classnames(fontSize('text-3xl'))
export function SectionNameText({ children }: ChildrenProp) {
  return <p className={sectionNameText}>{children}</p>
}

const footerText = classnames(
  baseText,
  fontWeight('font-semibold'),
  fontSize('text-xl', 'sm:text-3xl')
)
export function FooterText({ children }: ChildrenProp) {
  return <p className={footerText}>{children}</p>
}
