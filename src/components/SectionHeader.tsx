import { SectionHeaderText } from 'components/Text'
import classnames, {
  alignItems,
  borderColor,
  borderWidth,
  display,
  flexDirection,
  flexGrow,
  maxWidth,
  space,
  width,
} from 'classnames/tailwind'

const headerContainer = classnames(
  display('flex'),
  flexDirection('flex-row'),
  width('w-3/4', 'md:w-1/2'),
  maxWidth('max-w-5xl'),
  space('space-x-2'),
  alignItems('items-baseline')
)

function LineSeparator() {
  return (
    <div
      className={classnames(
        flexGrow('grow'),
        borderWidth('border-t-2', 'sm:border-t-4'),
        borderColor('border-gray-400')
      )}
    ></div>
  )
}

export const AboutHeader = () => {
  return (
    <div className={headerContainer}>
      <SectionHeaderText>About me</SectionHeaderText>
      <LineSeparator />
    </div>
  )
}

export const ProjectHeader = () => {
  return (
    <div className={headerContainer}>
      <LineSeparator />
      <SectionHeaderText>Some things I've built</SectionHeaderText>
    </div>
  )
}
