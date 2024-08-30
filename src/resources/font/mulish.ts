import localFont from "next/font/local";

const Mulish = localFont({
  variable: '--font-mulish',
  src: [
    {
      path: './fonts/mulish/Mulish-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/mulish/Mulish-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/mulish/Mulish-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/mulish/Mulish-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/mulish/Mulish-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})


export default Mulish;