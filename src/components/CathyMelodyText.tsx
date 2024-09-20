interface CathyMelodyTextProps {
  text: string
}

const CathyMelodyText = ({ text }: CathyMelodyTextProps) => {
  const result: string[] | null = text.match(/\D+|\d+/g); // \D+ matches non-digits, \d+ matches digits

  return (
    <>
      {
        result?.map((sp, index) => {
          const isDigit: boolean = Number(sp) > 0;
          return (
            <span className={isDigit ? `font-mono font-extrabold` : `font-cathy-melody`} key={index}>{sp}</span>
          )
        })
      }
    </>
  )
}

export default CathyMelodyText;