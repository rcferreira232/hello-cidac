export interface IHello {
  hello: string
}

export const blankHello: IHello = {
  hello: '',
}

export const helloProps = Object.keys(blankHello)
