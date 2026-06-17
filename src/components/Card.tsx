import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

interface CardSectionProps {
  children: ReactNode
  className?: string
}

const CardRoot = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col ${className}`}>
      {children}
    </div>
  )
}

const CardHeader = ({ children, className = '' }: CardSectionProps) => {
  return (
    <div className={`px-5 py-4 border-b border-gray-50 bg-gray-50/50 flex items-center justify-between ${className}`}>
      {children}
    </div>
  )
}

const CardTitle = ({ children, className = '' }: CardSectionProps) => {
  return (
    <h3 className={`font-semibold text-gray-900 text-lg leading-snug ${className}`}>
      {children}
    </h3>
  )
}

const CardBody = ({ children, className = '' }: CardSectionProps) => {
  return (
    <div className={`p-5 flex-1 text-sm text-gray-600 leading-relaxed ${className}`}>
      {children}
    </div>
  )
}

const CardFooter = ({ children, className = '' }: CardSectionProps) => {
  return (
    <div className={`px-5 py-4 bg-gray-50/30 border-t border-gray-50 flex items-center gap-3 justify-end ${className}`}>
      {children}
    </div>
  )
}

const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Body: CardBody,
  Footer: CardFooter,
})

export { Card }