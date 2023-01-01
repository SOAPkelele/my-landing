import { NavBarText } from '@components/Text'

import classnames, {
  backgroundColor,
  backgroundImage,
  blur,
  borderColor,
  borderRadius,
  borderWidth,
  gradientColorStops,
  group,
  inset,
  opacity,
  padding,
  position,
  transitionsAndAnimations,
} from 'classnames/tailwind'

const resumeButtonWrapper = classnames(group('group'), position('relative'))

const blurBaground = classnames(
  position('absolute'),
  inset('-inset-0.5'),
  gradientColorStops('from-pink-600', 'via-red-500', 'to-orange-500'),
  borderRadius('rounded-lg'),
  blur('blur'),
  opacity('opacity-75', 'group-hover:opacity-100'),
  transitionsAndAnimations('transition', 'duration-200'),
  backgroundImage('bg-gradient-to-r')
)

const resumeButton = classnames(
  position('relative'),
  borderRadius('rounded-lg'),
  padding('px-2', 'py-1'),
  backgroundColor('bg-black-background'),
  borderColor('border-gray-400'),
  transitionsAndAnimations('duration-200', 'transition'),
  borderWidth('border-1')
)

export default function () {
  return (
    <div class={resumeButtonWrapper}>
      <div class={blurBaground}></div>
      <button class={resumeButton}>
        <a
          href="https://drive.google.com/file/d/1pvlxKrP5rC8zgeVaWa3XY2gd7KM83YWq/view?usp=share_link"
          target="_blank"
        >
          <NavBarText>resume</NavBarText>
        </a>
      </button>
    </div>
  )
}
