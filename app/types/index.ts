import { ReactNode } from 'react'

export interface TechStack {
  title: string
  skills: string
}

export interface Skill {
  icon: ReactNode
  title: string
  items: string[]
}

export interface Project {
  title: string
  description: string
  gradient: string
  tags: string[],
  image?: ReactNode
}

export interface Contact {
  name: string
  href: string
  icon: string
}