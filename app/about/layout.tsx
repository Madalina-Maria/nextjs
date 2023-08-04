import React from 'react'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav>AboutNavBar</nav>
      <main>{children}</main>
    </div>
  )
}
