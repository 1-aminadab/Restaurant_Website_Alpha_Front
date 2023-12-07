import React from 'react'
import { useTranslation } from 'react-i18next'

export function FindTable() {
    const {t} = useTranslation()
  return (
    <div>{t('common.findTable')}</div>
  )
}
export function ViewMenu() {
    const {t} = useTranslation()
  return (
    <div>{t('common.viewOurMenu')}</div>
  )
}


