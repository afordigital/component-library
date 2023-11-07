import { Button as AntdButton } from 'antd'

export interface ButtonProps extends React.ComponentProps<typeof AntdButton> {}

const Button = (props: ButtonProps) => {
  return (
    <AntdButton
      className='bg-[#87CEEB] font-semibold hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-[24px] rounded-0 border-2 border-black px-[32px] py-[26px] flex items-center justify-center'
      {...props}
    >
      {props.children}
    </AntdButton>
  )
}

export default Button
