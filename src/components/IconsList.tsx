import classnames, {
  alignItems,
  display,
  fill,
  flexDirection,
  gap,
  height,
  justifyContent,
  opacity,
  textColor,
  width,
} from 'classnames/tailwind'

const iconContainer = classnames(
  fill('fill-white'),
  opacity('opacity-60', 'hover:opacity-100'),
  width('w-5', 'sm:w-7', 'md:w-10'),
  height('h-5', 'sm:h-7', 'md:h-10'),
  fill('fill-current'),
  textColor('text-white', 'hover:text-yellow-100')
)

const iconButtonsList = [
  {
    name: 'telegram',
    link: 'https://t.me/anthonythetrader',
    svg: (
      <svg
        className={iconContainer}
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M27.6822 3.93122C27.2322 3.54962 26.5254 3.49502 25.7946 3.78842H25.7934C25.0248 4.09682 4.03678 13.0992 3.18238 13.467C3.02698 13.521 1.66978 14.0274 1.80958 15.1554C1.93438 16.1724 3.02518 16.5936 3.15838 16.6422L8.49418 18.4692C8.84818 19.6476 10.1532 23.9952 10.4418 24.924C10.6218 25.503 10.9152 26.2638 11.4294 26.4204C11.8806 26.5944 12.3294 26.4354 12.6198 26.2074L15.882 23.1816L21.1482 27.2886L21.2736 27.3636C21.6312 27.522 21.9738 27.6012 22.3008 27.6012C22.5534 27.6012 22.7958 27.5538 23.0274 27.459C23.8164 27.135 24.132 26.3832 24.165 26.298L28.0986 5.85182C28.3386 4.75982 28.005 4.20422 27.6822 3.93122ZM13.2 19.2L11.4 24L9.59999 18L23.4 7.80002L13.2 19.2Z" />
      </svg>
    ),
  },
  {
    name: 'email',
    link: 'mailto:donanthonywins@gmail.com',
    svg: (
      <svg
        className={iconContainer}
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.0586 12.3047C13.6046 12.3047 12.4219 13.4875 12.4219 14.9414C12.4219 16.3954 13.6046 17.5781 15.0586 17.5781C16.5125 17.5781 17.6953 16.3954 17.6953 14.9414C17.6953 13.4875 16.5125 12.3047 15.0586 12.3047Z" />
        <path d="M14.9414 0C6.70254 0 0 6.70254 0 14.9414C0 23.1803 6.70254 30 14.9414 30C23.1803 30 30 23.1803 30 14.9414C30 6.70254 23.1803 0 14.9414 0ZM21.2109 19.3359C20.0231 19.3359 18.9755 18.7406 18.3388 17.8362C17.533 18.7483 16.3684 19.3359 15.0586 19.3359C12.6356 19.3359 10.6641 17.3644 10.6641 14.9414C10.6641 12.5184 12.6356 10.5469 15.0586 10.5469C16.0516 10.5469 16.9586 10.8905 17.6953 11.4482V11.4258C17.6953 10.94 18.0884 10.5469 18.5742 10.5469C19.06 10.5469 19.4531 10.94 19.4531 11.4258C19.4531 13.3805 19.4531 13.8647 19.4531 15.8203C19.4531 16.7893 20.2419 17.5781 21.2109 17.5781C22.18 17.5781 22.9688 16.7893 22.9688 15.8203C22.9688 9.93803 19.0763 7.03125 15.0586 7.03125C10.6967 7.03125 7.14844 10.5795 7.14844 14.9414C7.14844 19.3033 10.6967 22.8516 15.0586 22.8516C16.8164 22.8516 18.4789 22.2885 19.8669 21.2225C20.7939 20.5148 21.8555 21.9118 20.938 22.6164C19.2394 23.9201 17.2069 24.6094 15.0586 24.6094C9.72768 24.6094 5.39062 20.2723 5.39062 14.9414C5.39062 9.61049 9.72768 5.27344 15.0586 5.27344C19.9158 5.27344 24.7266 8.85557 24.7266 15.8203C24.7266 17.7592 23.1499 19.3359 21.2109 19.3359Z" />
      </svg>
    ),
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/anton-buev-6a1127254/',
    svg: (
      <svg
        className={iconContainer}
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24.375 0H5.625C2.51769 0 0 2.51769 0 5.625V24.375C0 27.4823 2.51769 30 5.625 30H24.375C27.4823 30 30 27.4823 30 24.375V5.625C30 2.51769 27.4823 0 24.375 0ZM9.27577 25.4642H4.61538L4.58885 11.5119H9.24923L9.27577 25.4642ZM6.82846 9.68538H6.79962C5.27885 9.68538 4.29462 8.63769 4.29462 7.32923C4.29462 5.99192 5.30885 4.97423 6.85846 4.97423C8.40923 4.97423 9.36346 5.99192 9.39231 7.32923C9.39231 8.63654 8.40808 9.68538 6.82846 9.68538ZM25.4331 25.4654H20.7312V17.8835C20.7312 16.0512 20.2454 14.8015 18.6058 14.8015C17.355 14.8015 16.6777 15.645 16.35 16.4596C16.23 16.7515 16.2 17.1565 16.2 17.5638V25.4665H11.475L11.4485 11.5119H16.1735L16.2 13.4792C16.8012 12.5492 17.8085 11.2258 20.2154 11.2258C23.1969 11.2258 25.4319 13.1735 25.4319 17.3608V25.4654H25.4331Z" />
      </svg>
    ),
  },
  {
    name: 'github',
    link: 'https://github.com/soapkelele',
    svg: (
      <svg
        className={iconContainer}
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.6746 28.1016C11.1012 27.918 11.4 27.4938 11.4 27V23.76C11.4 23.6418 11.4096 23.5188 11.4246 23.394C11.4162 23.3964 11.4084 23.3982 11.4 23.4C11.4 23.4 9.60001 23.4 9.24001 23.4C8.34001 23.4 7.56001 23.04 7.20001 22.32C6.78001 21.54 6.60001 20.22 5.52001 19.5C5.34001 19.38 5.46001 19.2 5.82001 19.2C6.18001 19.26 6.96001 19.74 7.44001 20.4C7.98001 21.06 8.52001 21.6 9.48001 21.6C10.9722 21.6 11.772 21.525 12.2532 21.267C12.8136 20.4336 13.5894 19.8 14.4 19.8V19.785C10.9992 19.6758 8.82661 18.5454 7.81501 16.8C5.61601 16.8252 3.70141 17.043 2.60881 17.2242C2.57401 17.028 2.54401 16.8306 2.51821 16.632C3.59641 16.4544 5.42401 16.2438 7.52521 16.2036C7.45801 16.038 7.39981 15.8682 7.35061 15.6942C5.24401 15.5874 3.42601 15.6708 2.43841 15.7524C2.42641 15.5532 2.41021 15.3546 2.40781 15.153C3.39721 15.072 5.16601 14.991 7.21861 15.0864C7.17121 14.7864 7.14061 14.4798 7.14061 14.1606C7.14061 13.1406 7.50061 12.0606 8.16061 11.1606C7.86061 10.1406 7.44061 7.98061 8.28061 7.20061C9.90061 7.20061 11.0406 7.98061 11.5806 8.46061C12.6 8.04001 13.74 7.80001 15 7.80001C16.26 7.80001 17.4 8.04001 18.36 8.46001C18.9 7.98001 20.04 7.20001 21.66 7.20001C22.56 8.04001 22.08 10.2 21.78 11.16C22.44 12.06 22.8 13.08 22.74 14.16C22.74 14.4504 22.713 14.7306 22.674 15.0054C24.7734 14.9022 26.5902 14.985 27.5964 15.0666C27.5952 15.2688 27.5766 15.4662 27.5658 15.666C26.5632 15.5832 24.7008 15.498 22.5504 15.6126C22.497 15.8142 22.4322 16.0104 22.3554 16.2006C24.483 16.2282 26.3544 16.434 27.4842 16.614C27.4584 16.8132 27.4284 17.0106 27.3936 17.2062C26.2464 17.0226 24.291 16.8078 22.0662 16.797C21.0672 18.5238 18.9342 19.65 15.6 19.7814V19.8C17.16 19.8 18.6 22.14 18.6 23.76V27C18.6 27.4938 18.8988 27.918 19.3254 28.1016C24.822 26.2824 28.8 21.0984 28.8 15C28.8 7.39081 22.6098 1.20001 15 1.20001C7.39021 1.20001 1.20001 7.39081 1.20001 15C1.20001 21.0984 5.17801 26.2824 10.6746 28.1016Z" />
      </svg>
    ),
  },
]

const iconsList = classnames(
  display('flex'),
  flexDirection('flex-col'),
  gap('gap-3', 'md:gap-6'),
  justifyContent('justify-evenly'),
  alignItems('items-center')
)

export default function IconsList() {
  return (
    <ul className={iconsList}>
      {iconButtonsList.map((icon) => (
        <li>
          <a href={icon.link} alt={icon.name} target="_blank">
            {icon.svg}
          </a>
        </li>
      ))}
    </ul>
  )
}
